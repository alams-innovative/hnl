"use client"

import type React from "react"
import { AdminSidebar } from "@/components/admin/sidebar"

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto flex">
        <AdminSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  )
}


