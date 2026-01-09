"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { adminCard, adminTopBar } from "@/lib/admin-ui"

type AdminRole = "senior_management" | "hr_manager" | "marketing_sales"
interface AdminUser {
  id: number
  email: string
  name: string
  role: AdminRole
}

const roleLabel: Record<AdminRole, string> = {
  senior_management: "Senior Management",
  hr_manager: "HR Manager",
  marketing_sales: "Marketing & Sales",
}

export default function ProfilePage() {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [name, setName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/me")
      if (!res.ok) return
      const data = await res.json()
      setUser(data.user)
      setName(data.user?.name || "")
    }
    load()
  }, [])

  const save = async () => {
    setSaving(true)
    setMessage(null)
    try {
      const payload: any = {}
      if (name.trim()) payload.name = name.trim()
      if (newPassword) {
        payload.currentPassword = currentPassword
        payload.newPassword = newPassword
      }

      const res = await fetch("/api/admin/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setMessage(data.error || "Failed to update profile")
        return
      }

      setCurrentPassword("")
      setNewPassword("")
      setMessage("Saved successfully.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-8">
      <div className={`${adminTopBar} rounded-xl px-6 py-5`}>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-sm text-gray-600">Update your name and password. Email cannot be changed.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${adminCard} p-6`}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email (locked)</label>
              <Input value={user?.email || ""} disabled className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Role</label>
              <Input value={user ? roleLabel[user.role] : ""} disabled className="mt-1" />
            </div>
          </div>
        </div>

        <div className={`${adminCard} p-6`}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Current password</label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">New password</label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters.</p>
            </div>
          </div>
        </div>
      </div>

      {message && <div className="mt-4 text-sm text-gray-700">{message}</div>}

      <div className="mt-6">
        <Button onClick={save} disabled={saving} className="bg-[#E31B23] hover:bg-[#b9151c]">
          {saving ? "Saving..." : "Save changes"}
        </Button>
      </div>
    </div>
  )
}


