"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Users,
  GraduationCap,
  MessageSquare,
  Handshake,
  FileText,
  DollarSign,
  Bot,
  LogOut,
  Loader2,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

interface AdminUser {
  id: number
  email: string
  name: string
  role: "senior_management" | "hr_manager" | "marketing_sales"
}

interface DashboardStats {
  partnerships: { total: number; pending: number }
  careers: { total: number; pending: number }
  internships: { total: number; pending: number }
  inquiries: { total: number; pending: number }
  distributors: { total: number; pending: number }
  quotes: { total: number; pending: number }
  chatbot: { total: number; avgRating: number }
}

const sections = [
  {
    id: "partnerships",
    label: "Partnership Applications",
    icon: Handshake,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/partnerships",
  },
  {
    id: "careers",
    label: "Career Applications",
    icon: Users,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/careers",
  },
  {
    id: "internships",
    label: "Internship Applications",
    icon: GraduationCap,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/internships",
  },
  {
    id: "inquiries",
    label: "General Inquiries",
    icon: MessageSquare,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/inquiries",
  },
  {
    id: "distributors",
    label: "Distributor Applications",
    icon: FileText,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/distributors",
  },
  {
    id: "quotes",
    label: "Quote Requests",
    icon: DollarSign,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/quotes",
  },
  {
    id: "chatbot",
    label: "Chatbot Conversations",
    icon: Bot,
    color: "bg-white/60 text-[#E31B23] ring-1 ring-[#E31B23]/15",
    href: "/admin/dashboard/chatbot",
  },
]

const permissions = {
  senior_management: ["partnerships", "careers", "internships", "inquiries", "distributors", "quotes", "chatbot"],
  hr_manager: ["careers", "internships"],
  marketing_sales: ["inquiries", "distributors", "quotes", "chatbot"],
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<AdminUser | null>(null)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // Get current user
      const userRes = await fetch("/api/admin/me")
      if (!userRes.ok) {
        router.push("/admin/login")
        return
      }
      const userData = await userRes.json()
      setUser(userData.user)

      // Get stats
      const statsRes = await fetch("/api/admin/stats")
      if (statsRes.ok) {
        const statsData = await statsRes.json()
        setStats(statsData)
      }
    } catch (error) {
      console.error("[v0] Dashboard load error:", error)
      router.push("/admin/login")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      console.error("[v0] Logout error:", error)
      setIsLoggingOut(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-[#E31B23]" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const allowedSections = sections.filter((section) => permissions[user.role].includes(section.id))

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/20 bg-gradient-to-r from-[#E31B23] to-[#b9151c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center ring-1 ring-white/20">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">HNL Admin Dashboard</h1>
                <p className="text-xs text-white/80">
                  {user.role === "senior_management"
                    ? "Senior Management"
                    : user.role === "hr_manager"
                      ? "HR Manager"
                      : "Marketing & Sales"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-white/80">{user.email}</p>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="gap-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <LogOut className="h-4 w-4" />
                {isLoggingOut ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#E31B23]/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#E31B23]/5 blur-2xl" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back, {user.name.split(" ")[0]}!</h2>
              <p className="text-gray-600">Review new submissions, update statuses, and track response performance.</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E31B23]/10 rounded-lg flex items-center justify-center ring-1 ring-[#E31B23]/15">
                  <TrendingUp className="h-5 w-5 text-[#E31B23]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Submissions</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Object.values(stats)
                      .filter((s) => typeof s === "object" && "total" in s)
                      .reduce((acc, s: any) => acc + s.total, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E31B23]/10 rounded-lg flex items-center justify-center ring-1 ring-[#E31B23]/15">
                  <Clock className="h-5 w-5 text-[#E31B23]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pending Review</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Object.values(stats)
                      .filter((s) => typeof s === "object" && "pending" in s)
                      .reduce((acc, s: any) => acc + s.pending, 0)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#E31B23]/10 rounded-lg flex items-center justify-center ring-1 ring-[#E31B23]/15">
                  <CheckCircle2 className="h-5 w-5 text-[#E31B23]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Response Rate</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Object.values(stats)
                      .filter((s) => typeof s === "object" && "total" in s && "pending" in s)
                      .reduce((acc, s: any) => acc + s.total - s.pending, 0) > 0
                      ? Math.round(
                          (Object.values(stats)
                            .filter((s) => typeof s === "object" && "total" in s && "pending" in s)
                            .reduce((acc, s: any) => acc + s.total - s.pending, 0) /
                            Object.values(stats)
                              .filter((s) => typeof s === "object" && "total" in s)
                              .reduce((acc, s: any) => acc + s.total, 0)) *
                            100,
                        )
                      : 0}
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allowedSections.map((section) => {
            const sectionStats = stats?.[section.id as keyof DashboardStats]
            const total = typeof sectionStats === "object" && "total" in sectionStats ? sectionStats.total : 0
            const pending = typeof sectionStats === "object" && "pending" in sectionStats ? sectionStats.pending : 0

            return (
              <button
                key={section.id}
                onClick={() => router.push(section.href)}
                className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 p-6 text-left hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  {pending > 0 && (
                    <div className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {pending} new
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#E31B23] transition-colors">
                  {section.label}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">{total}</p>
                <p className="text-sm text-gray-500">{pending > 0 ? `${pending} pending review` : "All caught up"}</p>
              </button>
            )
          })}
        </div>

        {/* No Access Message */}
        {allowedSections.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Access</h3>
            <p className="text-gray-600">
              You don't have access to any sections yet. Please contact your administrator.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
