"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { adminCard, adminModalHeader, adminModalOverlay, adminModalShell, adminRowHover, adminTableWrap, adminTopBar } from "@/lib/admin-ui"
import { Plus, Shield, Trash2, KeyRound, UserCog, Search } from "lucide-react"

type AdminRole = "senior_management" | "hr_manager" | "marketing_sales"
interface AdminUserRow {
  id: number
  email: string
  name: string
  role: AdminRole
  is_active: boolean
  created_at: string
  last_login: string | null
}

const roleLabel: Record<AdminRole, string> = {
  senior_management: "Senior Management",
  hr_manager: "HR Manager",
  marketing_sales: "Marketing & Sales",
}

export default function UsersPage() {
  const router = useRouter()
  const [users, setUsers] = useState<AdminUserRow[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  const [createOpen, setCreateOpen] = useState(false)
  const [createEmail, setCreateEmail] = useState("")
  const [createName, setCreateName] = useState("")
  const [createRole, setCreateRole] = useState<AdminRole>("marketing_sales")
  const [createPassword, setCreatePassword] = useState("")
  const [busy, setBusy] = useState(false)

  const [resetUserId, setResetUserId] = useState<number | null>(null)
  const [resetPassword, setResetPassword] = useState("")

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/users")
      if (res.status === 401) {
        router.push("/admin/login")
        return
      }
      if (res.status === 403) {
        router.push("/admin/dashboard")
        return
      }
      const data = await res.json()
      setUsers(data.users || [])
    } catch (e) {
      console.error("[v0] Load users error:", e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    if (!s) return users
    return users.filter((u) => u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s) || u.role.toLowerCase().includes(s))
  }, [users, search])

  const createUser = async () => {
    setBusy(true)
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: createEmail,
          name: createName,
          role: createRole,
          password: createPassword,
        }),
      })
      if (res.ok) {
        setCreateOpen(false)
        setCreateEmail("")
        setCreateName("")
        setCreatePassword("")
        await load()
      } else {
        const data = await res.json().catch(() => ({}))
        alert(data.error || "Failed to create user")
      }
    } finally {
      setBusy(false)
    }
  }

  const updateUser = async (id: number, patch: any) => {
    setBusy(true)
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        alert(data.error || "Failed to update user")
      }
      await load()
    } finally {
      setBusy(false)
    }
  }

  const deleteUser = async (id: number) => {
    if (!confirm("Disable this user? (They will not be able to login)")) return
    setBusy(true)
    try {
      await fetch(`/api/admin/users/${id}`, { method: "DELETE" })
      await load()
    } finally {
      setBusy(false)
    }
  }

  const resetPasswordSubmit = async () => {
    if (!resetUserId) return
    setBusy(true)
    try {
      await updateUser(resetUserId, { newPassword: resetPassword })
      setResetUserId(null)
      setResetPassword("")
    } finally {
      setBusy(false)
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className={`${adminCard} p-6`}>Loading…</div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className={`${adminTopBar} rounded-xl px-6 py-5 flex items-start justify-between gap-4`}>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#E31B23]" />
            User Management
          </h1>
          <p className="text-sm text-gray-600">Add users, change roles, reset passwords, or disable accounts.</p>
        </div>
        <Button onClick={() => setCreateOpen(true)} className="bg-[#E31B23] hover:bg-[#b9151c] gap-2">
          <Plus className="h-4 w-4" />
          Add user
        </Button>
      </div>

      <div className={`${adminCard} p-4 mt-6`}>
        <div className="flex items-center gap-3">
          <Search className="h-4 w-4 text-gray-400" />
          <Input placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="mt-6">
        <div className={adminTableWrap}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last login</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filtered.map((u) => (
                  <tr key={u.id} className={adminRowHover}>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{u.name}</div>
                      <div className="text-sm text-gray-500">{u.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Select
                        value={u.role}
                        onValueChange={(value) => updateUser(u.id, { role: value })}
                        disabled={busy}
                      >
                        <SelectTrigger className="w-[220px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="senior_management">{roleLabel.senior_management}</SelectItem>
                          <SelectItem value="hr_manager">{roleLabel.hr_manager}</SelectItem>
                          <SelectItem value="marketing_sales">{roleLabel.marketing_sales}</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => updateUser(u.id, { isActive: !u.is_active })}
                        disabled={busy}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ring-1 ${
                          u.is_active
                            ? "bg-green-100 text-green-800 ring-green-200"
                            : "bg-gray-100 text-gray-700 ring-gray-200"
                        }`}
                      >
                        {u.is_active ? "Active" : "Disabled"}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {u.last_login ? new Date(u.last_login).toLocaleString() : "—"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 bg-transparent"
                          onClick={() => setResetUserId(u.id)}
                          disabled={busy}
                        >
                          <KeyRound className="h-4 w-4" />
                          Reset password
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 bg-transparent"
                          onClick={() => {
                            const newName = prompt("Update name:", u.name)
                            if (newName && newName.trim()) updateUser(u.id, { name: newName.trim() })
                          }}
                          disabled={busy}
                        >
                          <UserCog className="h-4 w-4" />
                          Edit name
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 bg-transparent border-red-200 text-red-700 hover:bg-red-50"
                          onClick={() => deleteUser(u.id)}
                          disabled={busy}
                        >
                          <Trash2 className="h-4 w-4" />
                          Disable
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add new user</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input placeholder="Email" value={createEmail} onChange={(e) => setCreateEmail(e.target.value)} />
            <Input placeholder="Name" value={createName} onChange={(e) => setCreateName(e.target.value)} />
            <Select value={createRole} onValueChange={(v) => setCreateRole(v as AdminRole)}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="senior_management">{roleLabel.senior_management}</SelectItem>
                <SelectItem value="hr_manager">{roleLabel.hr_manager}</SelectItem>
                <SelectItem value="marketing_sales">{roleLabel.marketing_sales}</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="password"
              placeholder="Password (min 8 chars)"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
            />
            <Button onClick={createUser} disabled={busy} className="w-full bg-[#E31B23] hover:bg-[#b9151c]">
              {busy ? "Creating..." : "Create user"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {resetUserId && (
        <div className={adminModalOverlay} onClick={() => setResetUserId(null)}>
          <div className={adminModalShell} onClick={(e) => e.stopPropagation()}>
            <div className={adminModalHeader}>
              <h2 className="text-xl font-bold">Reset password</h2>
              <Button variant="ghost" onClick={() => setResetUserId(null)} className="text-white hover:bg-white/15">
                Close
              </Button>
            </div>
            <div className="p-6 space-y-3">
              <Input
                type="password"
                placeholder="New password (min 8 chars)"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
              />
              <Button onClick={resetPasswordSubmit} disabled={busy || resetPassword.length < 8} className="bg-[#E31B23] hover:bg-[#b9151c]">
                {busy ? "Saving..." : "Save new password"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


