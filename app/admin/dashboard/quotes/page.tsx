"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Download, Eye, Loader2, FileText, ImageIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { adminModalHeader, adminModalOverlay, adminModalShell, adminRowHover, adminTableWrap } from "@/lib/admin-ui"

interface QuoteRequest {
  id: number
  category: string
  product_service: string
  quantity: string
  project_location: string
  city: string
  urgency: string
  budget_range: string
  opportunity_type: string
  full_name: string
  email: string
  phone: string
  company: string
  preferred_contact: string
  document_urls: string
  submitted_at: string
  status: string
  sales_notes: string
}

export default function QuotesPage() {
  const router = useRouter()
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [filteredQuotes, setFilteredQuotes] = useState<QuoteRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null)

  const parseList = (value: any): string[] => {
    if (!value) return []
    if (Array.isArray(value)) return value.map((v) => String(v)).filter(Boolean)
    if (typeof value === "string") {
      const trimmed = value.trim()
      if (!trimmed) return []
      try {
        const parsed = JSON.parse(trimmed)
        if (Array.isArray(parsed)) return parsed.map((v) => String(v)).filter(Boolean)
      } catch {
        // ignore
      }
      return trimmed
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    }
    return [String(value)]
  }

  const ChipList = ({ items }: { items: string[] }) => {
    if (!items || items.length === 0) return <span className="text-gray-500">—</span>
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center rounded-full bg-[#E31B23]/10 text-[#E31B23] ring-1 ring-[#E31B23]/15 px-2.5 py-1 text-xs font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    )
  }

  useEffect(() => {
    loadQuotes()
  }, [])

  useEffect(() => {
    filterQuotes()
  }, [searchQuery, statusFilter, quotes])

  const loadQuotes = async () => {
    try {
      const response = await fetch("/api/admin/quotes")
      if (!response.ok) {
        router.push("/admin/login")
        return
      }
      const data = await response.json()
      const normalizeArrayToCsv = (value: any): string => {
        if (!value) return ""
        if (Array.isArray(value)) return value.join(",")
        if (typeof value === "string") {
          const trimmed = value.trim()
          if (!trimmed) return ""
          try {
            const parsed = JSON.parse(trimmed)
            if (Array.isArray(parsed)) return parsed.join(",")
          } catch {
            // ignore
          }
          return trimmed
        }
        return String(value)
      }

      const normalized: QuoteRequest[] = (data.quotes || []).map((q: any) => ({
        ...q,
        company: q.company ?? q.company_name ?? "",
        full_name: q.full_name ?? q.contact_name ?? "",
        email: q.email ?? q.contact_email ?? "",
        phone: q.phone ?? q.contact_phone ?? "",
        category: q.category ?? q.solution_category ?? "",
        product_service: q.product_service ?? q.specific_services ?? "",
        quantity: q.quantity ?? q.quantity_specs ?? "",
        project_location: q.project_location ?? q.projectLocation ?? "",
        city: q.city ?? q.location_details ?? "",
        urgency: q.urgency ?? q.timeline_urgency ?? "",
        opportunity_type: q.opportunity_type ?? q.opportunity_type ?? "",
        budget_range: q.budget_range ?? q.budget_range ?? "",
        preferred_contact: normalizeArrayToCsv(q.preferred_contact),
        document_urls: normalizeArrayToCsv(q.document_urls ?? q.uploaded_documents),
      }))

      setQuotes(normalized)
    } catch (error) {
      console.error("[v0] Load quotes error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterQuotes = () => {
    let filtered = quotes

    if (searchQuery) {
      const s = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (q) => q.full_name?.toLowerCase().includes(s) || q.email?.toLowerCase().includes(s) || q.company?.toLowerCase().includes(s),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((q) => q.status === statusFilter)
    }

    setFilteredQuotes(filtered)
  }

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      await fetch("/api/admin/quotes", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      })
      loadQuotes()
    } catch (error) {
      console.error("[v0] Update status error:", error)
    }
  }

  const exportToCSV = () => {
    const headers = ["ID", "Company", "Contact", "Email", "Phone", "Category", "Budget", "Status", "Submitted"]
    const rows = filteredQuotes.map((q) => [
      q.id,
      q.company,
      q.full_name,
      q.email,
      q.phone,
      q.category,
      q.budget_range,
      q.status,
      new Date(q.submitted_at).toLocaleDateString(),
    ])

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `quote-requests-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
        <Loader2 className="h-8 w-8 animate-spin text-[#E31B23]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => router.push("/admin/dashboard")} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Quote Requests</h1>
                <p className="text-sm text-gray-500">{filteredQuotes.length} requests</p>
              </div>
            </div>
            <Button onClick={exportToCSV} variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white/70 backdrop-blur border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-gray-900"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:border-[#E31B23] focus:outline-none focus:ring-1 focus:ring-[#E31B23]"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewing">Reviewing</option>
              <option value="quoted">Quoted</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={adminTableWrap}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Urgency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQuotes.map((quote) => (
                  <tr key={quote.id} className={adminRowHover}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">{quote.company}</p>
                      <p className="text-xs text-gray-500">{quote.city}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-900">{quote.full_name}</p>
                      <p className="text-xs text-gray-500">{quote.email}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{quote.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quote.budget_range}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          quote.urgency === "urgent"
                            ? "bg-red-100 text-red-800"
                            : quote.urgency === "normal"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {quote.urgency}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={quote.status}
                        onChange={(e) => updateStatus(quote.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full font-medium border-0 focus:ring-2 focus:ring-[#E31B23] ${
                          quote.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : quote.status === "quoted"
                              ? "bg-blue-100 text-blue-800"
                              : quote.status === "won"
                                ? "bg-green-100 text-green-800"
                                : quote.status === "lost"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewing">Reviewing</option>
                        <option value="quoted">Quoted</option>
                        <option value="won">Won</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedQuote(quote)}
                        className="gap-1 text-[#E31B23] hover:text-[#c41820]"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No quote requests found</p>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal - Show full details including images */}
      {selectedQuote && (
        <div
          className={adminModalOverlay}
          onClick={() => setSelectedQuote(null)}
        >
          <div
            className={adminModalShell}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={adminModalHeader}>
              <div>
                <h2 className="text-xl font-bold">Quote Request Details</h2>
                <p className="text-xs text-white/80">ID #{selectedQuote.id} • {new Date(selectedQuote.submitted_at).toLocaleString()}</p>
              </div>
              <Button variant="ghost" onClick={() => setSelectedQuote(null)} className="text-white hover:bg-white/15">
                Close
              </Button>
            </div>
            <div className="p-6 space-y-6 bg-gradient-to-b from-white to-[#fff5f6]/40">
              {/* Company & Contact */}
              <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company & Contact</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Company</p>
                    <p className="font-medium text-gray-900">{selectedQuote.company}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Full Name</p>
                    <p className="font-medium text-gray-900">{selectedQuote.full_name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-gray-900">{selectedQuote.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-gray-900">{selectedQuote.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Preferred Contact</p>
                    <ChipList items={parseList(selectedQuote.preferred_contact)} />
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Category</p>
                    <ChipList items={parseList(selectedQuote.category)} />
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Products/Services</p>
                    <ChipList items={parseList(selectedQuote.product_service)} />
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Quantity</p>
                    <p className="font-medium text-gray-900">{selectedQuote.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Budget Range</p>
                    <p className="font-medium text-gray-900">{selectedQuote.budget_range}</p>
                  </div>
                </div>
              </div>

              {/* Location & Timeline */}
              <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Timeline</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Project Location</p>
                    <p className="font-medium text-gray-900">{selectedQuote.project_location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">City</p>
                    <p className="font-medium text-gray-900">{selectedQuote.city}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Urgency</p>
                    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-2.5 py-1 text-xs font-medium capitalize">
                      {selectedQuote.urgency || "—"}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Opportunity Type</p>
                    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-2.5 py-1 text-xs font-medium capitalize">
                      {selectedQuote.opportunity_type || "—"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Documents & Images - Show uploaded files */}
              {selectedQuote.document_urls && (
                <div className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#E31B23]" />
                    Attached Documents
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedQuote.document_urls.split(",").map((url, index) => {
                      const isImage = url.match(/\.(jpg|jpeg|png|gif|webp)$/i)
                      return (
                        <div key={index} className="border rounded-lg p-3 hover:border-[#E31B23] transition-colors">
                          {isImage ? (
                            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                              <div className="relative w-full h-32 mb-2 bg-gray-100 rounded overflow-hidden">
                                <Image
                                  src={url || "/placeholder.svg"}
                                  alt={`Document ${index + 1}`}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                              <p className="text-xs text-gray-600 truncate flex items-center gap-1">
                                <ImageIcon className="w-3 h-3" />
                                Image {index + 1}
                              </p>
                            </a>
                          ) : (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-[#E31B23] hover:underline"
                            >
                              <FileText className="w-4 h-4" />
                              Document {index + 1}
                            </a>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Submitted Date */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Submitted on {new Date(selectedQuote.submitted_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
