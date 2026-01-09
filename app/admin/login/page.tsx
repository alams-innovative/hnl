"use client"

import type React from "react"

import { useCallback, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Eye, EyeOff, Lock, Mail, Loader2, ShieldCheck, Sparkles, Shield, Users } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const bgVideoRef = useRef<HTMLVideoElement | null>(null)

  const handleBgVideoTimeUpdate = useCallback(() => {
    const el = bgVideoRef.current
    if (!el) return
    // Loop only the first 8 seconds
    if (el.currentTime >= 6) {
      el.currentTime = 0
      // Keep it playing after the seek
      void el.play().catch(() => {})
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Login failed")
        return
      }

      router.push("/admin/dashboard")
      router.refresh()
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Website-style background */}
      <div className="absolute inset-0">
        <video
          ref={bgVideoRef}
          className="h-full w-full object-cover"
          autoPlay
          // Custom loop (first 8s), so don't use native looping
          muted
          playsInline
          preload="metadata"
          poster="/images/hunza-20and-20skardu.jpg"
          aria-hidden="true"
          onTimeUpdate={handleBgVideoTimeUpdate}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_hnl_banner_video-1bNfAa2Gg5y42EFMOkUsennaJHJiaB.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31B23]/18 via-transparent to-transparent" />
      </div>

      {/* Centered login */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-[#E31B23]/20 blur-xl" />
              <div className="relative h-14 w-14 rounded-full bg-white/80 backdrop-blur ring-1 ring-gray-200 shadow-sm flex items-center justify-center">
                <Image src="/hnl-logo.png" alt="HNL" width={40} height={40} className="object-contain" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-xl font-extrabold text-[#E31B23] leading-none">HNL</div>
              <div className="text-[11px] text-gray-600 font-semibold tracking-wide">Energy Anytime Anywhere</div>
              <div className="text-sm text-gray-800 font-medium">Admin Portal</div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#E31B23] to-[#b9151c] p-[1px] shadow-2xl">
            <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur">
              <div className="absolute -top-20 -right-24 h-56 w-56 rounded-full bg-[#E31B23]/10 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#E31B23]/10 blur-2xl" />

              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E31B23]/10 rounded-2xl ring-1 ring-[#E31B23]/15">
                    <ShieldCheck className="h-6 w-6 text-[#E31B23]" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-extrabold text-gray-900">Sign in</h1>
                    <p className="text-sm text-gray-600">Secure access to the HNL dashboard.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">{error}</div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@hnl.com.pk"
                        required
                        disabled={isLoading}
                        className="pl-10 text-gray-900 bg-white/90 border-gray-300 focus-visible:ring-[#E31B23]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        disabled={isLoading}
                        className="pl-10 pr-10 text-gray-900 bg-white/90 border-gray-300 focus-visible:ring-[#E31B23]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full bg-[#E31B23] hover:bg-[#b9151c]">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>

                <div className="mt-6 rounded-xl border border-gray-200 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Access Levels</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-[#E31B23] mt-0.5" />
                      <span>
                        <span className="font-medium">Senior Management</span>: Full access
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-[#E31B23] mt-0.5" />
                      <span>
                        <span className="font-medium">HR Manager</span>: Careers & Internships
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-[#E31B23] mt-0.5" />
                      <span>
                        <span className="font-medium">Marketing/Sales</span>: Inquiries, Distributors, Quotes & Chatbot
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-600 mt-5">
            © {new Date().getFullYear()} Hitech Network Limited (HNL)
          </div>
        </div>
      </div>
    </div>
  )
}
