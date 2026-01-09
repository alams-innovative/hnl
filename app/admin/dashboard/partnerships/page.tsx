"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Download, Eye, Loader2, ExternalLink, FileText } from "lucide-react"
import { adminModalHeader, adminModalOverlay, adminModalShell, adminRowHover, adminTableWrap } from "@/lib/admin-ui"

interface Partnership {
  id: number
  company_name: string
  company_registration: string | null
  years_in_business: number | null
  industry: string | null
  website: string | null
  headquarters_country: string | null
  headquarters_city: string | null
  operating_cities: string | null
  team_size: string | null
  partnership_types: string | null
  interest_areas: string | null
  annual_revenue: string | null
  credit_requirements: string | null
  opportunity_status: string | null
  active_tender: boolean | null
  tender_details: string | null
  contact_name: string
  contact_email: string
  contact_phone: string | null
  submitted_at: string
  status: string
}

export default function PartnershipsPage() {
  const router = useRouter()
  const [applications, setApplications] = useState<Partnership[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedApp, setSelectedApp] = useState<Partnership | null>(null)

  useEffect(() => {
    loadApplications()
  }, [])

  const loadApplications = async () => {
    try {
      const response = await fetch("/api/admin/partnerships")
      if (response.ok) {
        const data = await response.json()
        setApplications(data.partnerships || [])
      }
    } catch (error) {
      console.error("Failed to load partnerships:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch("/api/admin/partnerships", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })

      if (response.ok) {
        setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)))
        setSelectedApp((prev) => (prev && prev.id === id ? { ...prev, status } : prev))
      }
    } catch (error) {
      console.error("Failed to update status:", error)
    }
  }

  const exportToCSV = () => {
    const headers = [
      "ID",
      "Company",
      "Contact Name",
      "Contact Email",
      "Industry",
      "Location",
      "Partnership Types",
      "Interest Areas",
      "Website",
      "Annual Revenue",
      "Years in Business",
      "Status",
      "Submitted At",
    ]

    const rows = filteredApplications.map((app) => [
      app.id,
      app.company_name,
      app.contact_name,
      app.contact_email,
      app.industry || "",
      [app.headquarters_city, app.headquarters_country].filter(Boolean).join(", "),
      app.partnership_types || "",
      app.interest_areas || "",
      app.website || "",
      app.annual_revenue || "",
      app.years_in_business || "",
      app.status,
      new Date(app.submitted_at).toLocaleString(),
    ])

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `partnerships-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.contact_email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || app.status === statusFilter

    return matchesSearch && matchesStatus
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#E31B23]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push("/admin/dashboard")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Partnership Applications</h1>
              <p className="text-gray-600 mt-1">{applications.length} total applications</p>
            </div>
            <Button onClick={exportToCSV} variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by company, contact, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Applications Table */}
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
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((app) => (
                  <tr key={app.id} className={adminRowHover}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{app.company_name}</div>
                      <div className="text-sm text-gray-500">{app.industry || "—"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{app.contact_name}</div>
                      <div className="text-sm text-gray-500">{app.contact_email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {[app.headquarters_city, app.headquarters_country].filter(Boolean).join(", ") || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          app.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : app.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : app.status === "reviewing"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(app.submitted_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedApp(app)}
                        className="text-[#E31B23] hover:text-[#C41820]"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredApplications.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedApp && (
        <div className={adminModalOverlay}>
          <div className={adminModalShell}>
            <div className={adminModalHeader}>
              <h2 className="text-2xl font-bold">Partnership Application Details</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedApp(null)}
                className="text-white hover:bg-white/15"
              >
                ✕
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Company Name</p>
                    <p className="font-medium text-gray-900">{selectedApp.company_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Industry</p>
                    <p className="font-medium text-gray-900">{selectedApp.industry || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Headquarters</p>
                    <p className="font-medium text-gray-900">
                      {[selectedApp.headquarters_city, selectedApp.headquarters_country].filter(Boolean).join(", ") || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Annual Revenue</p>
                    <p className="font-medium text-gray-900">{selectedApp.annual_revenue || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Years in Business</p>
                    <p className="font-medium text-gray-900">{selectedApp.years_in_business || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Operating Cities</p>
                    <p className="font-medium text-gray-900">{selectedApp.operating_cities || "N/A"}</p>
                  </div>
                  {selectedApp.website && (
                    <div>
                      <p className="text-sm text-gray-500">Website</p>
                      <a
                        href={selectedApp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#E31B23] hover:underline inline-flex items-center gap-1"
                      >
                        {selectedApp.website}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Contact Name</p>
                    <p className="font-medium text-gray-900">{selectedApp.contact_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${selectedApp.contact_email}`} className="font-medium text-[#E31B23] hover:underline">
                      {selectedApp.contact_email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    {selectedApp.contact_phone ? (
                      <a href={`tel:${selectedApp.contact_phone}`} className="font-medium text-[#E31B23] hover:underline">
                        {selectedApp.contact_phone}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900">N/A</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Partnership Types</p>
                    <p className="font-medium text-gray-900">{selectedApp.partnership_types || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Interest Areas</p>
                    <p className="font-medium text-gray-900">{selectedApp.interest_areas || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Opportunity Status</p>
                    <p className="font-medium text-gray-900">{selectedApp.opportunity_status || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Active Tender</p>
                    <p className="font-medium text-gray-900">{selectedApp.active_tender ? "Yes" : "No"}</p>
                  </div>
                </div>

                {selectedApp.tender_details && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">Tender Details</p>
                    <p className="text-gray-900 whitespace-pre-wrap">{selectedApp.tender_details}</p>
                  </div>
                )}
              </div>

              {/* Status Update */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Status</h3>
                <div className="flex gap-2">
                  <Button
                    variant={selectedApp.status === "pending" ? "default" : "outline"}
                    onClick={() => updateStatus(selectedApp.id, "pending")}
                    size="sm"
                  >
                    Pending
                  </Button>
                  <Button
                    variant={selectedApp.status === "reviewing" ? "default" : "outline"}
                    onClick={() => updateStatus(selectedApp.id, "reviewing")}
                    size="sm"
                  >
                    Reviewing
                  </Button>
                  <Button
                    variant={selectedApp.status === "approved" ? "default" : "outline"}
                    onClick={() => updateStatus(selectedApp.id, "approved")}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Approved
                  </Button>
                  <Button
                    variant={selectedApp.status === "rejected" ? "default" : "outline"}
                    onClick={() => updateStatus(selectedApp.id, "rejected")}
                    size="sm"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Rejected
                  </Button>
                </div>
              </div>

              {/* Metadata */}
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500">
                  Submitted: {new Date(selectedApp.submitted_at).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Application ID: #{selectedApp.id}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
