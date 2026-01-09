"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Bot,
  FileText,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
  DollarSign,
} from "lucide-react"

type AdminRole = "senior_management" | "hr_manager" | "marketing_sales"
type IconType = React.ComponentType<{ className?: string }>

interface AdminUser {
  id: number
  email: string
  name: string
  role: AdminRole
}

const permissions: Record<AdminRole, string[]> = {
  senior_management: ["partnerships", "careers", "internships", "inquiries", "distributors", "quotes", "chatbot", "users"],
  hr_manager: ["careers", "internships"],
  marketing_sales: ["inquiries", "distributors", "quotes", "chatbot"],
}

const roleLabel: Record<AdminRole, string> = {
  senior_management: "Senior Management",
  hr_manager: "HR Manager",
  marketing_sales: "Marketing & Sales",
}

type NavItem = {
  id: string
  label: string
  href: string
  icon: IconType
  section?: string
  always?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard, always: true },
  { id: "partnerships", label: "Partnerships", href: "/admin/dashboard/partnerships", icon: Handshake, section: "partnerships" },
  { id: "careers", label: "Careers", href: "/admin/dashboard/careers", icon: Users, section: "careers" },
  { id: "internships", label: "Internships", href: "/admin/dashboard/internships", icon: GraduationCap, section: "internships" },
  { id: "inquiries", label: "Inquiries", href: "/admin/dashboard/inquiries", icon: MessageSquare, section: "inquiries" },
  { id: "distributors", label: "Distributors", href: "/admin/dashboard/distributors", icon: FileText, section: "distributors" },
  { id: "quotes", label: "Quotes", href: "/admin/dashboard/quotes", icon: DollarSign, section: "quotes" },
  { id: "chatbot", label: "Chatbot", href: "/admin/dashboard/chatbot", icon: Bot, section: "chatbot" },
  { id: "users", label: "Users", href: "/admin/dashboard/users", icon: Users, section: "users" },
  { id: "profile", label: "My Profile", href: "/admin/dashboard/profile", icon: Settings, always: true },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/admin/me")
        if (!res.ok) {
          router.push("/admin/login")
          return
        }
        const data = await res.json()
        setUser(data.user)
      } catch (e) {
        console.error("[v0] Sidebar user load error:", e)
        router.push("/admin/login")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [router])

  const allowed = useMemo(() => {
    if (!user) return new Set<string>()
    return new Set(permissions[user.role])
  }, [user])

  const nav = useMemo(() => {
    return NAV_ITEMS.filter((n) => n.always || (n.section ? allowed.has(n.section) : false))
  }, [allowed])

  const doLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
    } finally {
      router.push("/admin/login")
      router.refresh()
    }
  }

  return (
    <aside className="w-[280px] shrink-0 border-r border-gray-200/70 bg-white/70 backdrop-blur">
      <div className="h-16 px-5 flex items-center gap-3 border-b border-gray-200/70">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E31B23] to-[#b9151c] flex items-center justify-center text-white font-bold ring-1 ring-[#E31B23]/20">
          H
        </div>
        <div>
          <div className="font-bold text-gray-900 leading-tight">HNL Admin</div>
          <div className="text-xs text-gray-500 leading-tight">Submissions & CRM</div>
        </div>
      </div>

      <div className="p-5">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          {loading ? (
            <div className="text-sm text-gray-500">Loading...</div>
          ) : user ? (
            <>
              <div className="font-semibold text-gray-900">{user.name}</div>
              <div className="text-xs text-gray-500">{user.email}</div>
              <div className="mt-2 inline-flex items-center rounded-full bg-[#E31B23]/10 text-[#E31B23] ring-1 ring-[#E31B23]/15 px-2.5 py-1 text-xs font-medium">
                {roleLabel[user.role]}
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-500">Not logged in</div>
          )}
        </div>

        <nav className="mt-5 space-y-1">
          {nav.map((n) => {
            const active = pathname === n.href
            const Icon = n.icon
            return (
              <Link
                key={n.id}
                href={n.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-[#fff5f6] text-[#E31B23] ring-1 ring-[#E31B23]/15" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className={cn("h-4 w-4", active ? "text-[#E31B23]" : "text-gray-500")} />
                {n.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mt-auto p-5 border-t border-gray-200/70">
        <Button onClick={doLogout} variant="outline" className="w-full justify-start gap-2 bg-transparent border-gray-300">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}


