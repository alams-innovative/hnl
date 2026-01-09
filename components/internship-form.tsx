"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Linkedin,
  Upload,
  Target,
  Code,
  BarChart3,
  Megaphone,
  Wrench,
  Building2,
  CheckCircle2,
  Loader2,
  MapPin,
  Award,
  Sparkles,
} from "lucide-react"
import { useCaptcha } from "@/components/captcha-provider"

const internshipTracks = [
  { id: "marketing", label: "Marketing", icon: Megaphone, description: "Brand, digital marketing, content creation" },
  { id: "sales", label: "Sales", icon: Target, description: "Client relations, business development" },
  { id: "digital", label: "Digital", icon: Code, description: "Web, app development, UI/UX" },
  { id: "engineering", label: "Engineering", icon: Wrench, description: "Telecom, power systems, networks" },
  { id: "commercial", label: "Commercial", icon: Building2, description: "Finance, procurement, operations" },
  {
    id: "project-management",
    label: "Project Management",
    icon: BarChart3,
    description: "Planning, coordination, delivery",
  },
]

const educationLevels = [
  { id: "undergraduate", label: "Currently Pursuing Bachelors" },
  { id: "graduate", label: "Completed Bachelors / Pursuing Masters" },
  { id: "postgraduate", label: "Completed Masters" },
]

const availabilityOptions = [
  { id: "jan-mar", label: "January - March" },
  { id: "apr-jun", label: "April - June" },
  { id: "jul-sep", label: "July - September" },
  { id: "oct-dec", label: "October - December" },
]

type Step = "track" | "education" | "availability" | "personal" | "motivation" | "documents" | "review" | "complete"

interface FormData {
  track: string
  educationLevel: string
  university: string
  major: string
  graduationYear: string
  availability: string
  preferredCity: string
  fullName: string
  email: string
  phone: string
  city: string
  linkedinUrl: string
  portfolioUrl: string
  whyInternship: string
  skills: string
  cvFile: File | null
  cvFileName: string
  consent: boolean
}

const STORAGE_KEY = "hnl_internship_form"

export function InternshipForm() {
  const [currentStep, setCurrentStep] = useState<Step>("track")
  const [formData, setFormData] = useState<FormData>({
    track: "",
    educationLevel: "",
    university: "",
    major: "",
    graduationYear: "",
    availability: "",
    preferredCity: "",
    fullName: "",
    email: "",
    phone: "",
    city: "",
    linkedinUrl: "",
    portfolioUrl: "",
    whyInternship: "",
    skills: "",
    cvFile: null,
    cvFileName: "",
    consent: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applicationId, setApplicationId] = useState("")

  const steps: Step[] = [
    "track",
    "education",
    "availability",
    "personal",
    "motivation",
    "documents",
    "review",
    "complete",
  ]
  const currentIndex = steps.indexOf(currentStep)
  const progress = (currentIndex / (steps.length - 1)) * 100

  const { getCaptchaToken } = useCaptcha()

  // Load saved progress
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          setFormData((prev) => ({ ...prev, ...parsed, cvFile: null }))
          if (parsed.currentStep && steps.includes(parsed.currentStep)) {
            setCurrentStep(parsed.currentStep)
          }
        } catch (e) {
          console.error("Failed to load saved form data")
        }
      }
    }
  }, [])

  // Save progress
  useEffect(() => {
    if (typeof window !== "undefined" && currentStep !== "complete") {
      const toSave = { ...formData, cvFile: null, currentStep }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
    }
  }, [formData, currentStep])

  const clearSavedProgress = () => {
    localStorage.removeItem(STORAGE_KEY)
  }

  const validateStep = (step: Step): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    switch (step) {
      case "track":
        if (!formData.track) newErrors.track = "Please select an internship track"
        break
      case "education":
        if (!formData.educationLevel) newErrors.educationLevel = "Please select your education level"
        if (!formData.university.trim()) newErrors.university = "University name is required"
        if (!formData.major.trim()) newErrors.major = "Major/Field of study is required"
        break
      case "availability":
        if (!formData.availability) newErrors.availability = "Please select your availability"
        if (!formData.preferredCity) newErrors.preferredCity = "Please select preferred city"
        break
      case "personal":
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email"
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        break
      case "motivation":
        if (!formData.whyInternship.trim()) newErrors.whyInternship = "Please tell us why you want to intern at HNL"
        if (!formData.skills.trim()) newErrors.skills = "Please list your relevant skills"
        break
      case "documents":
        if (!formData.cvFileName && !formData.linkedinUrl) {
          newErrors.cvFileName = "Please upload your CV or provide LinkedIn profile"
        }
        break
      case "review":
        if (!formData.consent) newErrors.consent = "Please accept the terms to proceed"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const nextIndex = currentIndex + 1
      if (nextIndex < steps.length) {
        setCurrentStep(steps[nextIndex])
      }
    }
  }

  const prevStep = () => {
    const prevIndex = currentIndex - 1
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex])
    }
  }

  const handleSubmit = async () => {
    if (!validateStep("review")) return

    setIsSubmitting(true)
    try {
      const captchaToken = await getCaptchaToken("internship_submit")

      const response = await fetch("/api/submissions/internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captchaToken,
          track: formData.track,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          educationLevel: formData.educationLevel,
          institution: formData.university,
          fieldOfStudy: formData.major,
          graduationYear: Number.parseInt(formData.graduationYear) || null,
          linkedinUrl: formData.linkedinUrl,
          portfolioUrl: formData.portfolioUrl,
          skills: formData.skills.split(",").map((s) => s.trim()),
          whyHnl: formData.whyInternship,
          availabilityQuarter: formData.availability,
          availabilityDuration: formData.preferredCity,
          cvFileUrl: "",
          cvFileName: formData.cvFileName,
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      const data = await response.json()
      setApplicationId(data.id || `HNL-INT-${Date.now().toString(36).toUpperCase()}`)
      clearSavedProgress()
      setCurrentStep("complete")
    } catch (error) {
      console.error("[v0] Internship submission error:", error)
      alert("Failed to submit application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, cvFileName: "File size must be less than 5MB" })
        return
      }
      setFormData({ ...formData, cvFile: file, cvFileName: file.name })
      setErrors({ ...errors, cvFileName: undefined })
    }
  }

  const selectedTrack = internshipTracks.find((t) => t.id === formData.track)

  const renderStep = () => {
    switch (currentStep) {
      case "track":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hnl-red to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                3-Month Internship Program
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Choose Your Track</h2>
              <p className="text-gray-600">Select the area that matches your passion and career goals.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {internshipTracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setFormData({ ...formData, track: track.id })}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    formData.track === track.id
                      ? "border-hnl-red bg-red-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <track.icon
                    className={`h-8 w-8 mb-3 ${formData.track === track.id ? "text-hnl-red" : "text-gray-400"}`}
                  />
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">{track.label}</h3>
                  <p className="text-sm text-gray-500">{track.description}</p>
                </button>
              ))}
            </div>
            {errors.track && <p className="text-red-500 text-sm text-center">{errors.track}</p>}
          </div>
        )

      case "education":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Education Details</h2>
              <p className="text-gray-600">Tell us about your academic background.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education Level *</label>
                <div className="space-y-2">
                  {educationLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setFormData({ ...formData, educationLevel: level.id })}
                      className={`w-full p-3 rounded-lg border-2 text-left transition-all flex items-center justify-between ${
                        formData.educationLevel === level.id
                          ? "border-hnl-red bg-red-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <span className="text-gray-900">{level.label}</span>
                      {formData.educationLevel === level.id && <Check className="h-5 w-5 text-hnl-red" />}
                    </button>
                  ))}
                </div>
                {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{errors.educationLevel}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="h-4 w-4 inline mr-2" />
                  University/Institution *
                </label>
                <Input
                  placeholder="e.g., LUMS, NUST, IBA"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className={`text-gray-900 bg-white ${errors.university ? "border-red-500" : ""}`}
                />
                {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Major/Field of Study *</label>
                  <Input
                    placeholder="e.g., Computer Science, Business"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className={`text-gray-900 bg-white ${errors.major ? "border-red-500" : ""}`}
                  />
                  {errors.major && <p className="text-red-500 text-sm mt-1">{errors.major}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Graduation Year</label>
                  <Input
                    placeholder="e.g., 2025"
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                    className="text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case "availability":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">When can you start?</h2>
              <p className="text-gray-600">Select your preferred internship period and location.</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Preferred Quarter *
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  {availabilityOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, availability: opt.id })}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        formData.availability === opt.id
                          ? "border-hnl-red bg-red-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <span className="font-medium text-gray-900">{opt.label}</span>
                    </button>
                  ))}
                </div>
                {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Preferred City *
                </label>
                <select
                  value={formData.preferredCity}
                  onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                  className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 bg-white focus:border-hnl-red focus:outline-none focus:ring-1 focus:ring-hnl-red ${
                    errors.preferredCity ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" className="text-gray-500">
                    Select city...
                  </option>
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="faisalabad">Faisalabad</option>
                  <option value="multan">Multan</option>
                  <option value="peshawar">Peshawar</option>
                  <option value="quetta">Quetta</option>
                </select>
                {errors.preferredCity && <p className="text-red-500 text-sm mt-1">{errors.preferredCity}</p>}
              </div>
            </div>
          </div>
        )

      case "personal":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Your Details</h2>
              <p className="text-gray-600">Let us know how to reach you.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name *
                </label>
                <Input
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`text-gray-900 bg-white ${errors.fullName ? "border-red-500" : ""}`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`text-gray-900 bg-white ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Phone Number *
                </label>
                <Input
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`text-gray-900 bg-white ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>
        )

      case "motivation":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Show Us Your Passion</h2>
              <p className="text-gray-600">Help us understand what drives you.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to intern at HNL in {selectedTrack?.label}? *
                </label>
                <Textarea
                  placeholder="Tell us what excites you about this opportunity and how it aligns with your goals..."
                  value={formData.whyInternship}
                  onChange={(e) => setFormData({ ...formData, whyInternship: e.target.value })}
                  rows={4}
                  className={`resize-none text-gray-900 bg-white ${errors.whyInternship ? "border-red-500" : ""}`}
                />
                {errors.whyInternship && <p className="text-red-500 text-sm mt-1">{errors.whyInternship}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What skills do you bring? *</label>
                <Textarea
                  placeholder="List your relevant skills, tools you've used, projects you've worked on..."
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  rows={3}
                  className={`resize-none text-gray-900 bg-white ${errors.skills ? "border-red-500" : ""}`}
                />
                {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
              </div>
            </div>
          </div>
        )

      case "documents":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Your Profile</h2>
              <p className="text-gray-600">Share your CV and online presence.</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Upload className="h-4 w-4 inline mr-2" />
                  Resume/CV (PDF, DOC, DOCX - Max 5MB)
                </label>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors bg-white ${
                    formData.cvFileName ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-hnl-red"
                  }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload-intern"
                  />
                  <label htmlFor="cv-upload-intern" className="cursor-pointer">
                    {formData.cvFileName ? (
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <CheckCircle2 className="h-6 w-6" />
                        <span className="font-medium text-gray-700">{formData.cvFileName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                        <p className="text-gray-600">Click to upload or drag and drop</p>
                      </>
                    )}
                  </label>
                </div>
                {errors.cvFileName && <p className="text-red-500 text-sm mt-1">{errors.cvFileName}</p>}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Linkedin className="h-4 w-4 inline mr-2" />
                    LinkedIn Profile
                  </label>
                  <Input
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/GitHub (Optional)</label>
                  <Input
                    placeholder="https://github.com/yourprofile"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case "review":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Almost There!</h2>
              <p className="text-gray-600">Review your application before submitting.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2 text-sm">
                <div>
                  <span className="text-gray-500">Track:</span>
                  <p className="font-medium text-gray-900">{selectedTrack?.label}</p>
                </div>
                <div>
                  <span className="text-gray-500">Availability:</span>
                  <p className="font-medium text-gray-900">
                    {availabilityOptions.find((a) => a.id === formData.availability)?.label}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Name:</span>
                  <p className="font-medium text-gray-900">{formData.fullName}</p>
                </div>
                <div>
                  <span className="text-gray-500">University:</span>
                  <p className="font-medium text-gray-900">{formData.university}</p>
                </div>
                <div>
                  <span className="text-gray-500">Email:</span>
                  <p className="font-medium text-gray-900">{formData.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Phone:</span>
                  <p className="font-medium text-gray-900">{formData.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Major:</span>
                  <p className="font-medium text-gray-900">{formData.major}</p>
                </div>
                <div>
                  <span className="text-gray-500">Preferred City:</span>
                  <p className="font-medium text-gray-900 capitalize">{formData.preferredCity}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-hnl-red/10 to-orange-500/10 border border-hnl-red/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-hnl-red flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-gray-800">What You'll Get</p>
                  <p className="text-gray-600">
                    3-month hands-on experience, mentorship from industry experts, certificate of completion, and
                    potential full-time opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-hnl-red focus:ring-hnl-red"
                />
                <span className="text-sm text-gray-600">
                  I confirm that all information provided is accurate. I consent to HNL processing my data for
                  internship recruitment purposes.
                </span>
              </label>
              {errors.consent && <p className="text-red-500 text-sm mt-2">{errors.consent}</p>}
            </div>
          </div>
        )

      case "complete":
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">Welcome to the HNL talent community.</p>
            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto mb-8">
              <p className="text-sm text-gray-500 mb-2">Your Application Reference</p>
              <p className="text-2xl font-mono font-bold text-hnl-red">{applicationId}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-md mx-auto mb-6">
              <p className="text-sm text-blue-800">
                <strong>Next Steps:</strong>
                <br />
                Our team will review your application and contact shortlisted candidates within 2 weeks for an
                interview.
              </p>
            </div>
            <Button
              onClick={() => (window.location.href = "/careers")}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              Back to Careers
            </Button>
          </div>
        )
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      {currentStep !== "complete" && (
        <div className="bg-gray-100 h-2">
          <motion.div
            className="h-full bg-gradient-to-r from-hnl-red to-orange-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-10 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {currentStep !== "complete" && (
        <div className="px-6 md:px-10 py-6 border-t bg-gray-50 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={currentIndex === 0}
            className="gap-2 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          {currentStep === "review" ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="gap-2 bg-gradient-to-r from-hnl-red to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <Check className="h-4 w-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="gap-2 bg-gradient-to-r from-hnl-red to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
