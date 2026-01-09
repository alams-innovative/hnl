"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AdminSetupPage() {
  const [password, setPassword] = useState("HNL@2026!")
  const [hash, setHash] = useState("")
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<any[]>([])
  const [checkingUsers, setCheckingUsers] = useState(false)

  async function generateHash() {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/setup/generate-hash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await response.json()
      setHash(data.hash)
    } catch (error) {
      console.error("Error generating hash:", error)
    }
    setLoading(false)
  }

  async function checkUsers() {
    setCheckingUsers(true)
    try {
      const response = await fetch("/api/admin/setup/check-users")
      const data = await response.json()
      setUsers(data.users || [])
    } catch (error) {
      console.error("Error checking users:", error)
    }
    setCheckingUsers(false)
  }

  async function createDefaultUsers() {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/setup/create-users", {
        method: "POST",
      })
      const data = await response.json()
      alert(data.message || "Users created successfully!")
      await checkUsers()
    } catch (error) {
      console.error("Error creating users:", error)
      alert("Error creating users")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Setup & Debugging</h1>
          <p className="mt-2 text-gray-600">Tools to setup and troubleshoot admin authentication</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Check Existing Admin Users</CardTitle>
            <CardDescription>View all admin users in the database</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={checkUsers} disabled={checkingUsers} className="w-full">
              {checkingUsers ? "Checking..." : "Check Database Users"}
            </Button>

            {users.length > 0 && (
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-gray-900">Found {users.length} admin users:</h3>
                {users.map((user) => (
                  <div key={user.id} className="rounded border border-gray-200 bg-white p-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Email:</span> {user.email}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Name:</span> {user.name}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Role:</span> {user.role}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Active:</span> {user.is_active ? "Yes" : "No"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create Default Admin Users</CardTitle>
            <CardDescription>
              Creates default admin accounts with password: HNL@2026!
              <br />
              Accounts: talha@hnl.com.pk, hr@hnl.com.pk, sales@hnl.com.pk, marketing@hnl.com.pk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={createDefaultUsers} disabled={loading} className="w-full bg-green-600 hover:bg-green-700">
              {loading ? "Creating..." : "Create Default Users"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate Password Hash</CardTitle>
            <CardDescription>Generate bcrypt hash for custom passwords</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            <Button onClick={generateHash} disabled={loading} className="w-full">
              {loading ? "Generating..." : "Generate Hash"}
            </Button>

            {hash && (
              <div className="mt-4">
                <Label>Generated Hash (use in SQL):</Label>
                <Input value={hash} readOnly className="mt-2 font-mono text-xs" />
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-yellow-500 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-900">Default Login Credentials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-yellow-900">
              <div>
                <strong>Senior Management:</strong> talha@hnl.com.pk / HNL@2026!
              </div>
              <div>
                <strong>HR Manager:</strong> hr@hnl.com.pk / HNL@2026!
              </div>
              <div>
                <strong>Marketing/Sales:</strong> sales@hnl.com.pk or marketing@hnl.com.pk / HNL@2026!
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
