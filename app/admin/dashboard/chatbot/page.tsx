"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowLeft, Search, Download, MessageSquare, Star, Mail } from "lucide-react"
import { adminRowHover, adminTableWrap } from "@/lib/admin-ui"

interface ChatConversation {
  id: number
  session_id: string
  language: string
  user_name: string
  user_email: string
  messages: string
  total_messages: number
  feedback_rating: number
  feedback_email_requested: boolean
  started_at: string
  ended_at: string
}

export default function ChatbotConversationsPage() {
  const router = useRouter()
  const [conversations, setConversations] = useState<ChatConversation[]>([])
  const [filteredConversations, setFilteredConversations] = useState<ChatConversation[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchConversations()
  }, [])

  useEffect(() => {
    filterConversations()
  }, [searchTerm, ratingFilter, conversations])

  const fetchConversations = async () => {
    try {
      const response = await fetch("/api/admin/chatbot")
      if (response.ok) {
        const data = await response.json()
        setConversations(data.conversations || [])
      }
    } catch (error) {
      console.error("[v0] Fetch error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterConversations = () => {
    let filtered = conversations

    if (searchTerm) {
      filtered = filtered.filter(
        (conv) =>
          conv.user_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          conv.user_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          conv.session_id?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (ratingFilter !== "all") {
      const rating = Number.parseInt(ratingFilter)
      filtered = filtered.filter((conv) => conv.feedback_rating === rating)
    }

    setFilteredConversations(filtered)
  }

  const exportToCSV = () => {
    const headers = ["Session ID", "Name", "Email", "Language", "Messages", "Rating", "Started", "Ended"]
    const rows = filteredConversations.map((conv) => [
      conv.session_id,
      conv.user_name || "Anonymous",
      conv.user_email || "N/A",
      conv.language,
      conv.total_messages,
      conv.feedback_rating || "N/A",
      new Date(conv.started_at).toLocaleString(),
      conv.ended_at ? new Date(conv.ended_at).toLocaleString() : "Ongoing",
    ])

    const csvContent = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `chatbot-conversations-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const parseMessages = (historyJson: string) => {
    try {
      return JSON.parse(historyJson)
    } catch {
      return []
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white flex items-center justify-center">
        <div className="text-gray-700">Loading conversations...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E31B23]/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#E31B23]/5 blur-2xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <Button variant="ghost" onClick={() => router.push("/admin/dashboard")} className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Chatbot Conversations</h1>
                  <p className="text-gray-600 mt-1">{conversations.length} total conversations</p>
                </div>
              </div>
              <Button onClick={exportToCSV} variant="outline" className="gap-2 bg-transparent border-gray-300">
                <Download className="h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur rounded-xl shadow-sm border border-gray-200 mb-6 p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, email, or session ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className={adminTableWrap}>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Messages</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Started</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredConversations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No conversations found
                  </td>
                </tr>
              ) : (
                filteredConversations.map((conv) => (
                  <tr key={conv.id} className={adminRowHover}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{conv.user_name || "Anonymous"}</div>
                          <div className="text-sm text-gray-500">{conv.user_email || "No email"}</div>
                        </div>
                        {conv.feedback_email_requested && <Mail className="h-4 w-4 text-blue-500" />}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline">{conv.language}</Badge>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{conv.total_messages}</td>
                    <td className="px-6 py-4">
                      {conv.feedback_rating ? (
                        <div className="flex gap-1">{renderStars(conv.feedback_rating)}</div>
                      ) : (
                        <span className="text-gray-400 text-sm">No rating</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(conv.started_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedConversation(conv)}>
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={!!selectedConversation} onOpenChange={() => setSelectedConversation(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Conversation Details</DialogTitle>
          </DialogHeader>
          {selectedConversation && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">User Name</label>
                  <p className="text-gray-900">{selectedConversation.user_name || "Anonymous"}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{selectedConversation.user_email || "Not provided"}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Language</label>
                  <p className="text-gray-900">{selectedConversation.language}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Session ID</label>
                  <p className="text-gray-900 text-xs font-mono">{selectedConversation.session_id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Started</label>
                  <p className="text-gray-900">{new Date(selectedConversation.started_at).toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Ended</label>
                  <p className="text-gray-900">
                    {selectedConversation.ended_at
                      ? new Date(selectedConversation.ended_at).toLocaleString()
                      : "Ongoing"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Feedback Rating</label>
                  <div className="flex gap-1 mt-1">
                    {selectedConversation.feedback_rating
                      ? renderStars(selectedConversation.feedback_rating)
                      : "No rating"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email Requested</label>
                  <p className="text-gray-900">{selectedConversation.feedback_email_requested ? "Yes" : "No"}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Conversation History</label>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3 max-h-96 overflow-y-auto">
                  {parseMessages(selectedConversation.messages).map((msg: any, idx: number) => (
                    <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          msg.role === "user" ? "bg-blue-500 text-white" : "bg-white border border-gray-200"
                        }`}
                      >
                        <div className="text-xs opacity-70 mb-1">{msg.role === "user" ? "User" : "Bot"}</div>
                        <div className="text-sm">{msg.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
