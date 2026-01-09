"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Download, Eye, Loader2, Briefcase, FileText, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { adminModalHeader, adminModalOverlay, adminModalShell, adminRowHover, adminTableWrap } from "@/lib/admin-ui"

interface CareerApplication {
  id: number
  application_type: string
  position_layer: string
  position_title: string
  full_name: string
  email: string
  phone: string
  linkedin_url: string
  current_location: string
  willing_to_relocate: boolean
  years_of_experience: number
  current_company: string
  current_position: string
  education_level: string
  education_field: string
  certifications: string
  technical_skills: string
  leadership_experience: string
  budget_management_experience: string
  team_size_managed: string
  availability: string
  salary_expectation: string
  motivation: string
  portfolio_url: string
  cv_file_url: string
  cv_file_name: string
  internal_employee: boolean
  employee_id: string
  submitted_at: string
  status: string
  hr_notes: string
}

export default function CareersPage() {
  const router = useRouter()
  const [applications, setApplications] = useState<CareerApplication[]>([])
  const [filteredApplications, setFilteredApplications] = useState<CareerApplication[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null)

  useEffect(() => {
    loadApplications()
  }, [])

  useEffect(() => {
    filterApplications()
  }, [searchQuery, statusFilter, applications])

  const loadApplications = async () => {
    try {
      const response = await fetch("/api/admin/careers")
      if (!response.ok) {
        router.push("/admin/login")
        return
      }
      const data = await response.json()
      setApplications(data.applications || [])
    } catch (error) {
      console.error("[v0] Load careers error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterApplications = () => {
    let filtered = applications

    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.position_title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter)
    }

    setFilteredApplications(filtered)
  }

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      await fetch("/api/admin/careers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      })
      loadApplications()
    } catch (error) {
      console.error("[v0] Update status error:", error)
    }
  }

  const exportToCSV = () => {
    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Position",
      "Experience",
      "Current Role",
      "Location",
      "Status",
      "Submitted",
    ]
    const rows = filteredApplications.map((app) => [
      app.id,
      app.full_name,
      app.email,
      app.phone,
      app.position_title,
      `${app.years_of_experience} years`,
      app.current_position,
      app.current_location,
      app.status,
      new Date(app.submitted_at).toLocaleDateString(),
    ])

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `career-applications-${new Date().toISOString().split("T")[0]}.csv`
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
                <h1 className="text-2xl font-bold text-gray-900">Career Applications</h1>
                <p className="text-sm text-gray-500">{filteredApplications.length} applications</p>
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
                placeholder="Search by name, email, or position..."
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

      {/* Table */}
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
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((app) => (
                  <tr key={app.id} className={adminRowHover}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{app.full_name}</p>
                        <p className="text-sm text-gray-500">{app.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-900">{app.position_title}</p>
                      <p className="text-xs text-gray-500">{app.current_position}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {app.years_of_experience} years
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.current_location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded-full font-medium border-0 focus:ring-2 focus:ring-[#E31B23] ${
                          app.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.status === "shortlisted"
                              ? "bg-green-100 text-green-800"
                              : app.status === "rejected"
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
                      {new Date(app.submitted_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedApplication(app)}
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

          {filteredApplications.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No applications found</p>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedApplication && (
        <div
          className={adminModalOverlay}
          onClick={() => setSelectedApplication(null)}
        >
          <div
            className={adminModalShell}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={adminModalHeader}>
              <div>
                <h2 className="text-xl font-bold">{selectedApplication.full_name}</h2>
                <p className="text-sm text-white/90">{selectedApplication.position_title}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedApplication(null)}
                className="text-white hover:bg-white/15"
              >
                Close
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Full Name</p>
                    <p className="font-medium text-gray-900">{selectedApplication.full_name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-gray-900">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-gray-900">{selectedApplication.phone || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">LinkedIn</p>
                    {selectedApplication.linkedin_url ? (
                      <a
                        href={selectedApplication.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#E31B23] hover:underline flex items-center gap-1"
                      >
                        View Profile <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900">N/A</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Position & Experience */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Position & Experience</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Application Type</p>
                    <p className="font-medium text-gray-900 capitalize">
                      {selectedApplication.application_type || "Expert"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Position Layer</p>
                    <p className="font-medium text-gray-900">{selectedApplication.position_layer || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Desired Position</p>
                    <p className="font-medium text-gray-900">{selectedApplication.position_title}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Years of Experience</p>
                    <p className="font-medium text-gray-900">{selectedApplication.years_of_experience} years</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Current Company</p>
                    <p className="font-medium text-gray-900">{selectedApplication.current_company || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Current Position</p>
                    <p className="font-medium text-gray-900">{selectedApplication.current_position || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Location & Availability</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Current Location</p>
                    <p className="font-medium text-gray-900">{selectedApplication.current_location || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Willing to Relocate</p>
                    <p className="font-medium text-gray-900">
                      {selectedApplication.willing_to_relocate ? "Yes" : "No"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Availability</p>
                    <p className="font-medium text-gray-900">{selectedApplication.availability || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Salary Expectation</p>
                    <p className="font-medium text-gray-900">{selectedApplication.salary_expectation || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Education & Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Education & Skills</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Education Level</p>
                    <p className="font-medium text-gray-900">{selectedApplication.education_level || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Field of Study</p>
                    <p className="font-medium text-gray-900">{selectedApplication.education_field || "N/A"}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500 mb-1">Certifications</p>
                    <p className="font-medium text-gray-900">{selectedApplication.certifications || "N/A"}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500 mb-1">Technical Skills</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedApplication.technical_skills ? (
                        JSON.parse(selectedApplication.technical_skills).map((skill: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="font-medium text-gray-900">N/A</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership & Management */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Leadership & Management</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Team Size Managed</p>
                    <p className="font-medium text-gray-900">{selectedApplication.team_size_managed || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Budget Management Experience</p>
                    <p className="font-medium text-gray-900">
                      {selectedApplication.budget_management_experience || "N/A"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500 mb-1">Leadership Experience</p>
                    <p className="font-medium text-gray-900 whitespace-pre-wrap">
                      {selectedApplication.leadership_experience || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Motivation */}
              {selectedApplication.motivation && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Motivation</h3>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedApplication.motivation}</p>
                </div>
              )}

              {/* Documents & Portfolio */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Documents & Portfolio</h3>
                <div className="space-y-3">
                  {selectedApplication.cv_file_url && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="h-8 w-8 text-[#E31B23]" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {selectedApplication.cv_file_name || "CV/Resume"}
                        </p>
                        <p className="text-xs text-gray-500">Curriculum Vitae</p>
                      </div>
                      <a
                        href={selectedApplication.cv_file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E31B23] hover:text-[#c41820] font-medium text-sm flex items-center gap-1"
                      >
                        Download <Download className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                  {selectedApplication.portfolio_url && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <ExternalLink className="h-8 w-8 text-[#E31B23]" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Portfolio</p>
                        <p className="text-xs text-gray-500">{selectedApplication.portfolio_url}</p>
                      </div>
                      <a
                        href={selectedApplication.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E31B23] hover:text-[#c41820] font-medium text-sm"
                      >
                        Visit
                      </a>
                    </div>
                  )}
                  {!selectedApplication.cv_file_url && !selectedApplication.portfolio_url && (
                    <p className="text-sm text-gray-500">No documents uploaded</p>
                  )}
                </div>
              </div>

              {/* Internal Employee */}
              {selectedApplication.internal_employee && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">Internal Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Internal Employee</p>
                      <p className="font-medium text-gray-900">Yes</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Employee ID</p>
                      <p className="font-medium text-gray-900">{selectedApplication.employee_id || "N/A"}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Status & Notes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">HR Management</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-500 mb-1 text-sm">Application Status</p>
                    <select
                      value={selectedApplication.status}
                      onChange={(e) => updateStatus(selectedApplication.id, e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:border-[#E31B23] focus:outline-none focus:ring-1 focus:ring-[#E31B23]"
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewing">Reviewing</option>
                      <option value="shortlisted">Shortlisted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1 text-sm">HR Notes</p>
                    <textarea
                      value={selectedApplication.hr_notes || ""}
                      onChange={(e) => {
                        setSelectedApplication({ ...selectedApplication, hr_notes: e.target.value })
                      }}
                      placeholder="Add internal notes about this application..."
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:border-[#E31B23] focus:outline-none focus:ring-1 focus:ring-[#E31B23]"
                    />
                  </div>
                  <div className="text-xs text-gray-500">
                    Submitted: {new Date(selectedApplication.submitted_at).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
