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
  Building2,
  Mail,
  Phone,
  Briefcase,
  Linkedin,
  Upload,
  Users,
  Target,
  Code,
  Wrench,
  BarChart3,
  Headphones,
  MonitorCheck,
  Rocket,
  CheckCircle2,
  Loader2,
  Clock,
  MapPin,
  Star,
} from "lucide-react"
import { useCaptcha } from "@/components/captcha-provider"

// Position hierarchy - Layer 1 & 2 excluded (filled positions)
const positionLayers = {
  "layer-3": {
    label: "Executive Leadership (C-Suite)",
    positions: [
      { id: "ceo", title: "Chief Executive Officer", department: "Executive" },
      { id: "cto", title: "Chief Technology Officer", department: "Technology" },
      { id: "coo", title: "Chief Operations Officer", department: "Operations" },
      { id: "cfo", title: "Chief Financial Officer", department: "Finance" },
      { id: "cco", title: "Chief Commercial Officer", department: "Commercial" },
      { id: "cpo", title: "Chief People Officer", department: "Human Resources" },
    ],
  },
  "layer-4": {
    label: "Vice Presidents & Directors",
    positions: [
      { id: "vp-telecom", title: "VP - Telecom Infrastructure", department: "Telecom" },
      { id: "vp-energy", title: "VP - Energy Solutions", department: "Energy" },
      { id: "vp-enterprise", title: "VP - Enterprise Services", department: "Enterprise" },
      { id: "director-pm", title: "Director - Project Management", department: "PMO" },
      { id: "director-ops", title: "Director - Technical Operations", department: "Operations" },
      { id: "director-qa", title: "Director - Quality Assurance", department: "Quality" },
      { id: "head-marketing", title: "Head of Marketing", department: "Marketing" },
      { id: "head-hr", title: "Head of Human Resources", department: "Human Resources" },
      { id: "head-procurement", title: "Head of Procurement", department: "Procurement" },
    ],
  },
  "layer-5": {
    label: "Managers & Team Leads",
    positions: [
      { id: "manager-noc", title: "Manager, NOC Operations", department: "Network Operations" },
      { id: "manager-cs", title: "Manager, Client Success", department: "Client Services" },
      { id: "manager-field", title: "Manager, Field Services", department: "Field Operations" },
      { id: "manager-training", title: "Manager, Training & Development", department: "HR" },
      { id: "tl-network", title: "Team Lead, Network Engineering", department: "Engineering" },
      { id: "tl-software", title: "Team Lead, Software Development", department: "Software" },
      { id: "tl-power", title: "Team Lead, Power Systems", department: "Energy" },
      { id: "tl-rd", title: "Team Lead, R&D", department: "Research" },
    ],
  },
  "layer-6": {
    label: "Senior Specialists & Engineers",
    positions: [
      { id: "sr-pm", title: "Senior Project Manager", department: "PMO" },
      { id: "sr-engineer", title: "Senior Engineer", department: "Engineering" },
      { id: "sr-software", title: "Senior Software Engineer", department: "Software" },
      { id: "sr-data", title: "Senior Data Analytics Specialist", department: "Analytics" },
      { id: "sr-support", title: "Senior Support Specialist", department: "Support" },
    ],
  },
  "layer-7": {
    label: "Engineers & Specialists",
    positions: [
      { id: "pm", title: "Project Manager", department: "PMO" },
      { id: "engineer", title: "Engineer", department: "Engineering" },
      { id: "software-eng", title: "Software Engineer", department: "Software" },
      { id: "technician", title: "Technician", department: "Technical" },
      { id: "monitoring-eng", title: "Monitoring Engineer", department: "NOC" },
      { id: "support-spec", title: "Support Specialist", department: "Support" },
      { id: "data-analyst", title: "Data Analytics Specialist", department: "Analytics" },
    ],
  },
}

// Position-specific questions
const positionQuestions: Record<string, { question: string; options?: string[] }[]> = {
  "layer-3": [
    { question: "How many years of C-level or equivalent executive experience do you have?" },
    { question: "What is the largest team size you have directly managed?" },
    { question: "Describe your most significant organizational transformation achievement." },
    { question: "What is your approach to building high-performance leadership teams?" },
  ],
  "layer-4": [
    { question: "How many years of senior leadership experience do you have?" },
    { question: "What is the largest budget you have managed (PKR)?" },
    { question: "Describe a strategic initiative you led that delivered measurable business impact." },
    { question: "How do you balance operational excellence with innovation?" },
  ],
  "layer-5": [
    { question: "How many years of management experience do you have?" },
    { question: "What is the largest project team you have led?" },
    { question: "Describe your approach to developing and mentoring team members." },
    { question: "How do you handle underperforming team members?" },
  ],
  "layer-6": [
    { question: "How many years of specialized experience do you have in your field?" },
    { question: "What certifications or advanced qualifications do you hold?" },
    { question: "Describe a complex technical problem you solved that had significant business impact." },
    { question: "How do you stay current with industry developments and technologies?" },
  ],
  "layer-7": [
    { question: "How many years of relevant professional experience do you have?" },
    { question: "What technical skills are you most proficient in?" },
    { question: "Describe a challenging project you contributed to and your specific role." },
    { question: "What motivates you to work in infrastructure and technology?" },
  ],
}

const departments = [
  { id: "telecom", label: "Telecom Infrastructure", icon: MonitorCheck },
  { id: "energy", label: "Energy & Power", icon: Rocket },
  { id: "software", label: "Software & AI", icon: Code },
  { id: "engineering", label: "Engineering", icon: Wrench },
  { id: "operations", label: "Operations & Support", icon: Headphones },
  { id: "analytics", label: "Data & Analytics", icon: BarChart3 },
  { id: "commercial", label: "Commercial & Sales", icon: Target },
  { id: "corporate", label: "Corporate Functions", icon: Building2 },
]

const experienceLevels = [
  { id: "0-2", label: "0-2 Years", description: "Entry to Junior level" },
  { id: "3-5", label: "3-5 Years", description: "Mid-level professional" },
  { id: "6-10", label: "6-10 Years", description: "Senior professional" },
  { id: "10-15", label: "10-15 Years", description: "Expert / Lead" },
  { id: "15+", label: "15+ Years", description: "Executive level" },
]

const applicationTypes = [
  { id: "external", label: "External Candidate", icon: Users, description: "Joining HNL for the first time" },
  {
    id: "internal",
    label: "Internal Employee",
    icon: Building2,
    description: "Current HNL team member seeking new role",
  },
]

type Step =
  | "type"
  | "department"
  | "experience"
  | "position"
  | "questions"
  | "personal"
  | "professional"
  | "documents"
  | "review"
  | "complete"

interface FormData {
  applicationType: string
  employeeId: string
  department: string
  experience: string
  selectedLayer: string
  selectedPosition: string
  positionAnswers: string[]
  fullName: string
  email: string
  phone: string
  city: string
  linkedinUrl: string
  currentCompany: string
  currentRole: string
  noticePeriod: string
  expectedSalary: string
  whyHnl: string
  cvFile: File | null
  cvFileName: string
  referralSource: string
  availableForRelocation: string
  consent: boolean
}

const STORAGE_KEY = "hnl_recruitment_form"

export function RecruitmentForm() {
  const [currentStep, setCurrentStep] = useState<Step>("type")
  const [formData, setFormData] = useState<FormData>({
    applicationType: "",
    employeeId: "",
    department: "",
    experience: "",
    selectedLayer: "",
    selectedPosition: "",
    positionAnswers: [],
    fullName: "",
    email: "",
    phone: "",
    city: "",
    linkedinUrl: "",
    currentCompany: "",
    currentRole: "",
    noticePeriod: "",
    expectedSalary: "",
    whyHnl: "",
    cvFile: null,
    cvFileName: "",
    referralSource: "",
    availableForRelocation: "",
    consent: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applicationId, setApplicationId] = useState("")

  const { getCaptchaToken } = useCaptcha()

  const steps: Step[] = [
    "type",
    "department",
    "experience",
    "position",
    "questions",
    "personal",
    "professional",
    "documents",
    "review",
    "complete",
  ]
  const currentIndex = steps.indexOf(currentStep)
  const progress = (currentIndex / (steps.length - 1)) * 100

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
      case "type":
        if (!formData.applicationType) newErrors.applicationType = "Please select application type"
        if (formData.applicationType === "internal" && !formData.employeeId) {
          newErrors.employeeId = "Please enter your employee ID"
        }
        break
      case "department":
        if (!formData.department) newErrors.department = "Please select a department"
        break
      case "experience":
        if (!formData.experience) newErrors.experience = "Please select your experience level"
        break
      case "position":
        if (!formData.selectedPosition) newErrors.selectedPosition = "Please select a position"
        break
      case "questions":
        const requiredAnswers = positionQuestions[formData.selectedLayer]?.length || 0
        if (formData.positionAnswers.filter((a) => a?.trim()).length < requiredAnswers) {
          newErrors.positionAnswers = "Please answer all questions"
        }
        break
      case "personal":
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email"
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.city.trim()) newErrors.city = "City is required"
        break
      case "professional":
        if (!formData.currentRole.trim()) newErrors.currentRole = "Current/last role is required"
        if (!formData.whyHnl.trim()) newErrors.whyHnl = "Please tell us why you want to join HNL"
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
      const captchaToken = await getCaptchaToken("career_submit")

      const response = await fetch("/api/submissions/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captchaToken,
          positionLayer: formData.selectedLayer,
          positionTitle: formData.selectedPosition,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedinUrl: formData.linkedinUrl,
          currentLocation: formData.city,
          willingToRelocate: formData.availableForRelocation === "yes",
          yearsOfExperience: Number.parseInt(formData.experience) || 0,
          currentCompany: formData.currentCompany,
          current_position: formData.currentRole,
          availability: formData.noticePeriod,
          salaryExpectation: formData.expectedSalary,
          motivation: formData.whyHnl,
          cvFileUrl: "",
          cvFileName: formData.cvFileName,
          internalEmployee: formData.applicationType === "internal",
          employeeId: formData.employeeId,
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      const data = await response.json()
      setApplicationId(data.id || `HNL-${Date.now().toString(36).toUpperCase()}`)
      clearSavedProgress()
      setCurrentStep("complete")
    } catch (error) {
      console.error("[v0] Career submission error:", error)
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

  // Determine available layers based on experience
  const getAvailableLayers = () => {
    const exp = formData.experience
    if (exp === "15+") return ["layer-3", "layer-4", "layer-5"]
    if (exp === "10-15") return ["layer-4", "layer-5", "layer-6"]
    if (exp === "6-10") return ["layer-5", "layer-6", "layer-7"]
    if (exp === "3-5") return ["layer-6", "layer-7"]
    return ["layer-7"]
  }

  const selectedPositionDetails =
    formData.selectedLayer && formData.selectedPosition
      ? positionLayers[formData.selectedLayer as keyof typeof positionLayers]?.positions.find(
          (p) => p.id === formData.selectedPosition,
        )
      : null

  const renderStep = () => {
    switch (currentStep) {
      case "type":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Welcome to HNL Careers</h2>
              <p className="text-gray-600">Are you applying as an external candidate or an internal team member?</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {applicationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFormData({ ...formData, applicationType: type.id })}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    formData.applicationType === type.id
                      ? "border-hnl-red bg-red-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <type.icon
                    className={`h-8 w-8 mb-3 ${formData.applicationType === type.id ? "text-hnl-red" : "text-gray-400"}`}
                  />
                  <h3 className="font-semibold text-lg mb-1">{type.label}</h3>
                  <p className="text-sm text-gray-500">{type.description}</p>
                </button>
              ))}
            </div>
            {formData.applicationType === "internal" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
                <Input
                  placeholder="Enter your HNL Employee ID"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className={errors.employeeId ? "border-red-500" : ""}
                />
                {errors.employeeId && <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>}
              </motion.div>
            )}
            {errors.applicationType && <p className="text-red-500 text-sm text-center">{errors.applicationType}</p>}
          </div>
        )

      case "department":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Which area interests you?</h2>
              <p className="text-gray-600">Select the department that aligns with your expertise and passion.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setFormData({ ...formData, department: dept.id })}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                    formData.department === dept.id
                      ? "border-hnl-red bg-red-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <dept.icon
                    className={`h-6 w-6 flex-shrink-0 ${formData.department === dept.id ? "text-hnl-red" : "text-gray-400"}`}
                  />
                  <span className="font-medium">{dept.label}</span>
                </button>
              ))}
            </div>
            {errors.department && <p className="text-red-500 text-sm text-center">{errors.department}</p>}
          </div>
        )

      case "experience":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">What's your experience level?</h2>
              <p className="text-gray-600">This helps us match you with the right opportunities.</p>
            </div>
            <div className="space-y-3">
              {experienceLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() =>
                    setFormData({ ...formData, experience: level.id, selectedLayer: "", selectedPosition: "" })
                  }
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                    formData.experience === level.id
                      ? "border-hnl-red bg-red-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div>
                    <span className="font-semibold">{level.label}</span>
                    <p className="text-sm text-gray-500">{level.description}</p>
                  </div>
                  {formData.experience === level.id && <Check className="h-5 w-5 text-hnl-red" />}
                </button>
              ))}
            </div>
            {errors.experience && <p className="text-red-500 text-sm text-center">{errors.experience}</p>}
          </div>
        )

      case "position":
        const availableLayers = getAvailableLayers()
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Select your target role</h2>
              <p className="text-gray-600">Based on your experience, here are positions you may be suitable for.</p>
            </div>
            <div className="space-y-6">
              {availableLayers.map((layerKey) => {
                const layer = positionLayers[layerKey as keyof typeof positionLayers]
                if (!layer) return null
                return (
                  <div key={layerKey}>
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {layer.label}
                    </h3>
                    <div className="grid gap-2 md:grid-cols-2">
                      {layer.positions.map((position) => (
                        <button
                          key={position.id}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              selectedLayer: layerKey,
                              selectedPosition: position.id,
                              positionAnswers: [],
                            })
                          }
                          className={`p-3 rounded-lg border-2 text-left transition-all text-sm ${
                            formData.selectedPosition === position.id
                              ? "border-hnl-red bg-red-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <span className="font-medium block">{position.title}</span>
                          <span className="text-gray-500 text-xs">{position.department}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
            {errors.selectedPosition && <p className="text-red-500 text-sm text-center">{errors.selectedPosition}</p>}
          </div>
        )

      case "questions":
        const questions = positionQuestions[formData.selectedLayer] || []
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Tell us more about you</h2>
              <p className="text-gray-600">
                These questions help us understand your fit for {selectedPositionDetails?.title}.
              </p>
            </div>
            <div className="space-y-6">
              {questions.map((q, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hnl-red text-white text-xs mr-2">
                      {index + 1}
                    </span>
                    {q.question}
                  </label>
                  <Textarea
                    placeholder="Your answer..."
                    value={formData.positionAnswers[index] || ""}
                    onChange={(e) => {
                      const newAnswers = [...formData.positionAnswers]
                      newAnswers[index] = e.target.value
                      setFormData({ ...formData, positionAnswers: newAnswers })
                    }}
                    rows={3}
                    className="resize-none"
                  />
                </div>
              ))}
            </div>
            {errors.positionAnswers && <p className="text-red-500 text-sm text-center">{errors.positionAnswers}</p>}
          </div>
        )

      case "personal":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Personal Information</h2>
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
                  className={errors.fullName ? "border-red-500" : ""}
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
                  className={errors.email ? "border-red-500" : ""}
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
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Current City *
                </label>
                <Input
                  placeholder="e.g., Lahore, Karachi, Islamabad"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={errors.city ? "border-red-500" : ""}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Open to Relocation?
                </label>
                <select
                  value={formData.availableForRelocation}
                  onChange={(e) => setFormData({ ...formData, availableForRelocation: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-hnl-red focus:outline-none focus:ring-1 focus:ring-hnl-red"
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes, willing to relocate</option>
                  <option value="no">No, prefer current city</option>
                  <option value="depends">Depends on opportunity</option>
                </select>
              </div>
            </div>
          </div>
        )

      case "professional":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Professional Background</h2>
              <p className="text-gray-600">Tell us about your current or most recent role.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="h-4 w-4 inline mr-2" />
                  Current/Last Company
                </label>
                <Input
                  placeholder="Company name"
                  value={formData.currentCompany}
                  onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="h-4 w-4 inline mr-2" />
                  Current/Last Role *
                </label>
                <Input
                  placeholder="Your job title"
                  value={formData.currentRole}
                  onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                  className={errors.currentRole ? "border-red-500" : ""}
                />
                {errors.currentRole && <p className="text-red-500 text-sm mt-1">{errors.currentRole}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="h-4 w-4 inline mr-2" />
                  Notice Period
                </label>
                <select
                  value={formData.noticePeriod}
                  onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-hnl-red focus:outline-none focus:ring-1 focus:ring-hnl-red"
                >
                  <option value="">Select...</option>
                  <option value="immediate">Immediately available</option>
                  <option value="2-weeks">2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="3-months">3+ months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Salary (PKR/month)</label>
                <Input
                  placeholder="e.g., 150,000 - 200,000"
                  value={formData.expectedSalary}
                  onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about HNL?</label>
                <select
                  value={formData.referralSource}
                  onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-hnl-red focus:outline-none focus:ring-1 focus:ring-hnl-red"
                >
                  <option value="">Select...</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="indeed">Indeed</option>
                  <option value="rozee">Rozee.pk</option>
                  <option value="referral">Employee Referral</option>
                  <option value="website">HNL Website</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Star className="h-4 w-4 inline mr-2" />
                  Why do you want to join HNL? *
                </label>
                <Textarea
                  placeholder="Tell us what excites you about working with Pakistan's leading infrastructure company..."
                  value={formData.whyHnl}
                  onChange={(e) => setFormData({ ...formData, whyHnl: e.target.value })}
                  rows={4}
                  className={`resize-none ${errors.whyHnl ? "border-red-500" : ""}`}
                />
                {errors.whyHnl && <p className="text-red-500 text-sm mt-1">{errors.whyHnl}</p>}
              </div>
            </div>
          </div>
        )

      case "documents":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Upload Your CV</h2>
              <p className="text-gray-600">Share your CV and LinkedIn profile for a complete picture.</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Upload className="h-4 w-4 inline mr-2" />
                  Resume/CV (PDF, DOC, DOCX - Max 5MB)
                </label>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    formData.cvFileName ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-hnl-red"
                  }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    {formData.cvFileName ? (
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <CheckCircle2 className="h-6 w-6" />
                        <span className="font-medium">{formData.cvFileName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                        <p className="text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-400 mt-1">PDF, DOC, or DOCX up to 5MB</p>
                      </>
                    )}
                  </label>
                </div>
                {errors.cvFileName && <p className="text-red-500 text-sm mt-1">{errors.cvFileName}</p>}
              </div>
              <div className="text-center text-gray-500">or</div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Linkedin className="h-4 w-4 inline mr-2" />
                  LinkedIn Profile URL
                </label>
                <Input
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                />
                <p className="text-xs text-gray-500 mt-1">Make sure your profile is set to public</p>
              </div>
            </div>
          </div>
        )

      case "review":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Review Your Application</h2>
              <p className="text-gray-600">Please verify your information before submitting.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2 text-sm">
                <div>
                  <span className="text-gray-500">Applying as:</span>
                  <p className="font-medium">
                    {formData.applicationType === "internal" ? "Internal Employee" : "External Candidate"}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Target Position:</span>
                  <p className="font-medium">{selectedPositionDetails?.title || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-500">Name:</span>
                  <p className="font-medium">{formData.fullName}</p>
                </div>
                <div>
                  <span className="text-gray-500">Email:</span>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Phone:</span>
                  <p className="font-medium">{formData.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">City:</span>
                  <p className="font-medium">{formData.city}</p>
                </div>
                <div>
                  <span className="text-gray-500">Current Role:</span>
                  <p className="font-medium">{formData.currentRole || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-500">CV:</span>
                  <p className="font-medium">{formData.cvFileName || "Not uploaded"}</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-amber-800">Response Timeline</p>
                  <p className="text-amber-700">
                    Our HR team reviews all applications within 5-7 business days. Shortlisted candidates will be
                    contacted for the next steps.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-hnl-red focus:ring-hnl-red"
                />
                <span className="text-sm text-gray-600">
                  I confirm that all information provided is accurate and complete. I consent to HNL processing my
                  personal data for recruitment purposes in accordance with the{" "}
                  <a href="/privacy" className="text-hnl-red hover:underline">
                    Privacy Policy
                  </a>
                  . I understand that providing false information may result in disqualification.
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
            <p className="text-gray-600 mb-6">Thank you for your interest in joining HNL.</p>
            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto mb-8">
              <p className="text-sm text-gray-500 mb-2">Your Application Reference</p>
              <p className="text-2xl font-mono font-bold text-hnl-red">{applicationId}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-md mx-auto mb-6">
              <p className="text-sm text-blue-800">
                <strong>What's Next?</strong>
                <br />
                Our HR team will review your application and reach out within 5-7 business days if your profile matches
                our requirements.
              </p>
            </div>
            <Button onClick={() => (window.location.href = "/")}>Return to Homepage</Button>
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
            className="h-full bg-hnl-red"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Step Indicator */}
      {currentStep !== "complete" && (
        <div className="px-6 py-4 border-b bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hnl-red text-white text-xs font-medium">
              {currentIndex + 1}
            </span>
            <span>of {steps.length - 1}</span>
          </div>
          <button
            onClick={() => {
              if (confirm("Save your progress and continue later?")) {
                window.location.href = "/careers"
              }
            }}
            className="text-sm text-gray-500 hover:text-hnl-red"
          >
            Save & Exit
          </button>
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
          <Button variant="ghost" onClick={prevStep} disabled={currentIndex === 0} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          {currentStep === "review" ? (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2 bg-hnl-red hover:bg-red-700">
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
            <Button onClick={nextStep} className="gap-2 bg-hnl-red hover:bg-red-700">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
