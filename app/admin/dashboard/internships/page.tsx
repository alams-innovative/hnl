"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Download, Eye, GraduationCap, Loader2, Search } from "lucide-react"
import { adminModalHeader, adminModalOverlay, adminModalShell, adminRowHover, adminTableWrap } from "@/lib/admin-ui"

interface InternshipApplication {
  id: number
  track: string
  full_name: string
  email: string
  phone: string | null
  city: string | null
  education_level: string | null
  institution: string | null
  field_of_study: string | null
  graduation_year: number | null
  linkedin_url: string | null
  portfolio_url: string | null
  skills: string | null
  why_hnl: string | null
  availability_quarter: string | null
  availability_duration: string | null
  cv_file_url: string | null
  cv_file_name: string | null
  submitted_at: string
  status: string
  hr_notes: string | null
}

export default function InternshipsPage() {
  const router = useRouter()
  const [applications, setApplications] = useState<InternshipApplication[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selected, setSelected] = useState<InternshipApplication | null>(null)

  const load = async () => {
    try {
      const res = await fetch("/api/admin/internships")
      if (!res.ok) {
        router.push("/admin/login")
        return
      }
      const data = await res.json()
      setApplications(data.applications || [])
    } catch (e) {
      console.error("[v0] Load internships error:", e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filtered = useMemo(() => {
    return applications.filter((a) => {
      const matchesSearch =
        !searchQuery ||
        a.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.track?.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === "all" || a.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [applications, searchQuery, statusFilter])

  const updateStatus = async (id: number, status: string) => {
    try {
      await fetch("/api/admin/internships", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      await load()
    } catch (e) {
      console.error("[v0] Update internship error:", e)
    }
  }

  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Track", "City", "Status", "Submitted"]
    const rows = filtered.map((a) => [
      a.id,
      a.full_name,
      a.email,
      a.track,
      a.city || "",
      a.status,
      new Date(a.submitted_at).toLocaleString(),
    ])
    const csv = [headers, ...rows].map((row) => row.map((c) => `"${String(c).replaceAll('"', '""')}"`).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `internships-${new Date().toISOString().split("T")[0]}.csv`
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
      <header className="bg-white/70 backdrop-blur border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => router.push("/admin/dashboard")} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Internship Applications</h1>
                <p className="text-sm text-gray-500">{filtered.length} applications</p>
              </div>
            </div>
            <Button onClick={exportToCSV} variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-white/70 backdrop-blur border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or track..."
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
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={adminTableWrap}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Track
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((a) => (
                  <tr key={a.id} className={adminRowHover}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{a.full_name}</p>
                          <p className="text-xs text-gray-500">{a.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{a.track}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{a.city || "—"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={a.status}
                        onChange={(e) => updateStatus(a.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full font-medium border-0 focus:ring-2 focus:ring-[#E31B23] ${
                          a.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : a.status === "shortlisted"
                              ? "bg-green-100 text-green-800"
                              : a.status === "rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewing">Reviewing</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(a.submitted_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelected(a)}
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

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No applications found</p>
            </div>
          )}
        </div>
      </main>

      {selected && (
        <div className={adminModalOverlay} onClick={() => setSelected(null)}>
          <div className={adminModalShell} onClick={(e) => e.stopPropagation()}>
            <div className={adminModalHeader}>
              <h2 className="text-xl font-bold">Internship Application</h2>
              <Button variant="ghost" onClick={() => setSelected(null)} className="text-white hover:bg-white/15">
                Close
              </Button>
            </div>
            <div className="p-6 space-y-6 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 mb-1">Name</p>
                  <p className="font-medium text-gray-900">{selected.full_name}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p className="font-medium text-gray-900">{selected.email}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Track</p>
                  <p className="font-medium text-gray-900">{selected.track}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">City</p>
                  <p className="font-medium text-gray-900">{selected.city || "—"}</p>
                </div>
              </div>

              {selected.why_hnl && (
                <div>
                  <p className="text-gray-500 mb-1">Why HNL</p>
                  <p className="text-gray-900 whitespace-pre-wrap">{selected.why_hnl}</p>
                </div>
              )}

              {selected.cv_file_url && (
                <div>
                  <p className="text-gray-500 mb-1">CV</p>
                  <a className="text-[#E31B23] hover:underline" href={selected.cv_file_url} target="_blank" rel="noreferrer">
                    {selected.cv_file_name || "Download CV"}
                  </a>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200 text-xs text-gray-500">
                Submitted: {new Date(selected.submitted_at).toLocaleString()} • ID: #{selected.id}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


