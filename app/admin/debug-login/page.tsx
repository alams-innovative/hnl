"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DebugLoginPage() {
  const [email, setEmail] = useState("talha@hnl.com.pk")
  const [password, setPassword] = useState("HNL@2026!")
  const [testResults, setTestResults] = useState<any>(null)
  const [testing, setTesting] = useState(false)

  async function testLogin() {
    setTesting(true)
    setTestResults(null)

    try {
      console.log("[v0] Testing login with:", { email, password })

      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      setTestResults({
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        data: data,
        headers: {
          contentType: response.headers.get("content-type"),
          setCookie: response.headers.get("set-cookie"),
        },
      })

      console.log("[v0] Login response:", { response, data })
    } catch (error) {
      console.error("[v0] Login error:", error)
      setTestResults({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      })
    }

    setTesting(false)
  }

  async function testDirectQuery() {
    setTesting(true)

    try {
      const response = await fetch("/api/admin/debug/test-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      setTestResults({
        queryTest: true,
        data: data,
      })

      console.log("[v0] Direct query test:", data)
    } catch (error) {
      console.error("[v0] Query error:", error)
      setTestResults({
        queryTest: true,
        error: error instanceof Error ? error.message : "Unknown error",
      })
    }

    setTesting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Login System Debugger</h1>
          <p className="mt-2 text-gray-600">Test the login system step by step</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Test Login API</CardTitle>
            <CardDescription>Test the full login flow with credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hnl.com.pk"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="HNL@2026!"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={testLogin} disabled={testing} className="flex-1">
                {testing ? "Testing..." : "Test Login"}
              </Button>
              <Button onClick={testDirectQuery} disabled={testing} variant="outline" className="flex-1 bg-transparent">
                Test Database Query
              </Button>
            </div>

            {testResults && (
              <div className="mt-4 rounded border border-gray-200 bg-white p-4">
                <h3 className="mb-2 font-semibold text-gray-900">Test Results:</h3>
                <pre className="overflow-auto text-xs text-gray-700">{JSON.stringify(testResults, null, 2)}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-blue-500 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Quick Fix Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-blue-900">
            <div>
              <strong>1.</strong> Go to{" "}
              <a href="/admin/setup" className="underline">
                /admin/setup
              </a>
            </div>
            <div>
              <strong>2.</strong> Click "Check Database Users" to see existing users
            </div>
            <div>
              <strong>3.</strong> Click "Create Default Users" to reset all admin accounts
            </div>
            <div>
              <strong>4.</strong> Come back here and test login
            </div>
            <div>
              <strong>5.</strong> Check browser console (F12) for detailed logs
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
