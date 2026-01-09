"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Zap,
  Radio,
  Server,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Upload,
  FileText,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Briefcase,
  Package,
  Settings,
  Sun,
  Battery,
  Wifi,
  Network,
  Lock,
  Share2,
  AlertCircle,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Step =
  | "category"
  | "product-service"
  | "specifications"
  | "location"
  | "timeline"
  | "budget"
  | "documents"
  | "opportunity"
  | "contact"
  | "confirm"

interface FormData {
  // Category & Product
  category: string
  productService: string[]
  // Specifications
  quantity: string
  frequency: string
  powerCapacity: string
  additionalSpecs: string
  // Location
  projectLocation: string
  city: string
  siteAccessibility: string
  existingInfrastructure: string
  // Timeline
  urgency: string
  projectStartDate: string
  projectDuration: string
  expectedResponseTime: string
  // Budget
  budgetRange: string
  budgetFlexibility: string
  paymentTerms: string
  // Documents
  hasDocuments: boolean
  documentType: string
  uploadedFiles: File[]
  // Opportunity
  opportunityType: string
  competitorsBidding: string
  decisionMakers: string
  decisionTimeline: string
  // Contact
  fullName: string
  email: string
  phone: string
  company: string
  designation: string
  preferredContact: string[]
  bestTimeToCall: string
}

const categories = [
  {
    id: "energy-power",
    name: "Energy & Power",
    icon: Zap,
    description: "Generators, Solar, BESS, Hybrid Systems",
    color: "bg-amber-500",
  },
  {
    id: "telecom",
    name: "Telecom Infrastructure",
    icon: Radio,
    description: "Fiber, Site Integration, O&M, NOC",
    color: "bg-blue-500",
  },
  {
    id: "it-solutions",
    name: "Software & IT",
    icon: Server,
    description: "Enterprise IT, Cloud, AI Solutions",
    color: "bg-emerald-500",
  },
  {
    id: "epc-projects",
    name: "EPC Projects",
    icon: Building2,
    description: "Turnkey Infrastructure Solutions",
    color: "bg-slate-700",
  },
]

const productsByCategory: Record<string, { id: string; name: string; icon: any }[]> = {
  "energy-power": [
    { id: "diesel-generators", name: "Diesel Generators", icon: Zap },
    { id: "solar-systems", name: "Solar Power Systems", icon: Sun },
    { id: "bess", name: "Battery Energy Storage (BESS)", icon: Battery },
    { id: "hybrid-power", name: "Hybrid Power Systems", icon: Settings },
    { id: "energy-om", name: "Energy O&M Services", icon: Settings },
    { id: "power-rental", name: "Power Rental Solutions", icon: Package },
  ],
  telecom: [
    { id: "fiber-rollout", name: "Fiber Optic Rollout", icon: Wifi },
    { id: "civil-works", name: "Civil Works", icon: Building2 },
    { id: "site-integration", name: "Site Integration", icon: Network },
    { id: "telecom-om", name: "Operation & Maintenance", icon: Settings },
    { id: "noc-monitoring", name: "NOC Monitoring", icon: Server },
    { id: "tower-services", name: "Tower Services", icon: Radio },
  ],
  "it-solutions": [
    { id: "enterprise-it", name: "Enterprise IT Services", icon: Server },
    { id: "cloud-solutions", name: "Cloud Solutions", icon: Server },
    { id: "ai-agents", name: "AI Agents & Automation", icon: Server },
    { id: "cybersecurity", name: "Cybersecurity Solutions", icon: Lock },
    { id: "managed-services", name: "Managed IT Services", icon: Settings },
  ],
  "epc-projects": [
    { id: "power-plants", name: "Power Plant EPC", icon: Zap },
    { id: "telecom-epc", name: "Telecom EPC Projects", icon: Radio },
    { id: "industrial-epc", name: "Industrial Infrastructure", icon: Building2 },
    { id: "renewable-epc", name: "Renewable Energy EPC", icon: Sun },
  ],
}

const steps: { id: Step; label: string; number: number }[] = [
  { id: "category", label: "Category", number: 1 },
  { id: "product-service", label: "Product/Service", number: 2 },
  { id: "specifications", label: "Specifications", number: 3 },
  { id: "location", label: "Location", number: 4 },
  { id: "timeline", label: "Timeline", number: 5 },
  { id: "budget", label: "Budget", number: 6 },
  { id: "documents", label: "Documents", number: 7 },
  { id: "opportunity", label: "Opportunity", number: 8 },
  { id: "contact", label: "Contact", number: 9 },
  { id: "confirm", label: "Confirm", number: 10 },
]

export function QuoteRequestForm() {
  const [currentStep, setCurrentStep] = useState<Step>("category")
  const [formData, setFormData] = useState<FormData>({
    category: "",
    productService: [],
    quantity: "",
    frequency: "",
    powerCapacity: "",
    additionalSpecs: "",
    projectLocation: "",
    city: "",
    siteAccessibility: "",
    existingInfrastructure: "",
    urgency: "",
    projectStartDate: "",
    projectDuration: "",
    expectedResponseTime: "",
    budgetRange: "",
    budgetFlexibility: "",
    paymentTerms: "",
    hasDocuments: false,
    documentType: "",
    uploadedFiles: [],
    opportunityType: "",
    competitorsBidding: "",
    decisionMakers: "",
    decisionTimeline: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    preferredContact: [],
    bestTimeToCall: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep)
  const progress = ((currentStepIndex + 1) / steps.length) * 100

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[]
    if (currentArray.includes(value)) {
      updateFormData(
        field,
        currentArray.filter((v) => v !== value),
      )
    } else {
      updateFormData(field, [...currentArray, value])
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      updateFormData("uploadedFiles", [...formData.uploadedFiles, ...Array.from(files)])
      updateFormData("hasDocuments", true)
    }
  }

  const removeFile = (index: number) => {
    const newFiles = formData.uploadedFiles.filter((_, i) => i !== index)
    updateFormData("uploadedFiles", newFiles)
    if (newFiles.length === 0) {
      updateFormData("hasDocuments", false)
    }
  }

  const nextStep = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id)
    }
  }

  const prevStep = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  const handleSubmit = async () => {
    try {
      // Ensure grecaptcha is available and site key is set
      if (typeof window === "undefined" || !window.grecaptcha || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        console.error("reCAPTCHA not available or site key missing.")
        alert("Captcha verification is not available. Please try again later.")
        return
      }

      const captchaToken = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
        action: "quote_request",
      })

      if (!captchaToken) {
        alert("Captcha verification failed. Please try again.")
        return
      }

      const response = await fetch("/api/submissions/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      if (!response.ok) {
        // Attempt to parse error message from backend if available
        const errorData = await response.json().catch(() => ({ message: "An unknown error occurred." }))
        throw new Error(errorData.message || `Submission failed with status ${response.status}`)
      }

      setIsSubmitted(true)
    } catch (error: any) {
      console.error("Quote submission error:", error)
      alert(`Failed to submit quote request. ${error.message || "Please try again."}`)
    }
  }

  const canProceed = (): boolean => {
    switch (currentStep) {
      case "category":
        return !!formData.category
      case "product-service":
        return formData.productService.length > 0
      case "specifications":
        return !!formData.quantity
      case "location":
        return !!formData.projectLocation && !!formData.city
      case "timeline":
        return !!formData.urgency
      case "budget":
        return !!formData.budgetRange
      case "documents":
        return true // Optional
      case "opportunity":
        return !!formData.opportunityType
      case "contact":
        return !!formData.fullName && !!formData.email && !!formData.phone && formData.preferredContact.length > 0
      default:
        return true
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Quote Request Submitted!</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for your detailed request. Our sales team now has everything they need to prepare a comprehensive
          quote for you.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 max-w-lg mx-auto mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#E31B23]" />
            What Happens Next
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#E31B23] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                1
              </span>
              <span>
                <strong>Within {formData.expectedResponseTime || "24-48 hours"}:</strong> A dedicated sales
                representative will review your requirements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#E31B23] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                2
              </span>
              <span>
                <strong>Technical Assessment:</strong> Our team will analyze specifications and prepare tailored
                solutions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#E31B23] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                3
              </span>
              <span>
                <strong>Detailed Quote:</strong> You'll receive a comprehensive proposal via{" "}
                {formData.preferredContact.join(" / ")}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
          <span>Reference ID:</span>
          <code className="bg-gray-100 px-3 py-1 rounded font-mono">QR-{Date.now().toString(36).toUpperCase()}</code>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStepIndex + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">{steps[currentStepIndex]?.label}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-[#E31B23] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Category */}
            {currentStep === "category" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What type of solution are you looking for?</h2>
                <p className="text-gray-500 mb-8">Select the category that best matches your requirements</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    const isSelected = formData.category === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => updateFormData("category", cat.id)}
                        className={cn(
                          "p-6 rounded-xl border-2 text-left transition-all duration-200",
                          isSelected
                            ? "border-[#E31B23] bg-red-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                            isSelected ? "bg-[#E31B23]" : cat.color,
                          )}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{cat.name}</h3>
                        <p className="text-sm text-gray-500">{cat.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Product/Service Selection */}
            {currentStep === "product-service" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Which products or services do you need?</h2>
                <p className="text-gray-500 mb-8">Select all that apply to your project</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {productsByCategory[formData.category]?.map((product) => {
                    const Icon = product.icon
                    const isSelected = formData.productService.includes(product.id)
                    return (
                      <button
                        key={product.id}
                        onClick={() => toggleArrayValue("productService", product.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4",
                          isSelected
                            ? "border-[#E31B23] bg-red-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                        )}
                      >
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                            isSelected ? "bg-[#E31B23]" : "bg-gray-100",
                          )}
                        >
                          <Icon className={cn("w-5 h-5", isSelected ? "text-white" : "text-gray-600")} />
                        </div>
                        <span className={cn("font-medium", isSelected ? "text-[#E31B23]" : "text-gray-700")}>
                          {product.name}
                        </span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-[#E31B23] ml-auto" />}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Specifications */}
            {currentStep === "specifications" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your requirements</h2>
                <p className="text-gray-500 mb-8">Help us understand the scale and specifications</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Package className="w-4 h-4 inline mr-2" />
                      Quantity / Volume
                    </label>
                    <Input
                      placeholder="e.g., 5 units, 500 kVA, 10 km fiber, 50 sites"
                      value={formData.quantity}
                      onChange={(e) => updateFormData("quantity", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Frequency / Recurrence
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["One-time Purchase", "Monthly", "Quarterly", "Annual Contract"].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => updateFormData("frequency", freq)}
                          className={cn(
                            "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                            formData.frequency === freq
                              ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                              : "border-gray-200 text-gray-600 hover:border-gray-300",
                          )}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.category === "energy-power" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Zap className="w-4 h-4 inline mr-2" />
                        Power Capacity Required
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["10-100 kVA", "100-500 kVA", "500-1000 kVA", "1000+ kVA"].map((cap) => (
                          <button
                            key={cap}
                            onClick={() => updateFormData("powerCapacity", cap)}
                            className={cn(
                              "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                              formData.powerCapacity === cap
                                ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300",
                            )}
                          >
                            {cap}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Additional Specifications (Optional)
                    </label>
                    <Textarea
                      placeholder="Any specific technical requirements, brand preferences, certifications needed..."
                      value={formData.additionalSpecs}
                      onChange={(e) => updateFormData("additionalSpecs", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Location */}
            {currentStep === "location" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Where is your project located?</h2>
                <p className="text-gray-500 mb-8">This helps us assign the right regional team</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Project Location / Site Address
                    </label>
                    <Input
                      placeholder="Full address or area description"
                      value={formData.projectLocation}
                      onChange={(e) => updateFormData("projectLocation", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      City
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "Quetta", "Multan", "Other"].map(
                        (city) => (
                          <button
                            key={city}
                            onClick={() => updateFormData("city", city)}
                            className={cn(
                              "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                              formData.city === city
                                ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300",
                            )}
                          >
                            {city}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Accessibility</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {["Easy Access (Urban)", "Moderate (Semi-Urban)", "Remote / Difficult Terrain"].map((access) => (
                        <button
                          key={access}
                          onClick={() => updateFormData("siteAccessibility", access)}
                          className={cn(
                            "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                            formData.siteAccessibility === access
                              ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                              : "border-gray-200 text-gray-600 hover:border-gray-300",
                          )}
                        >
                          {access}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Existing Infrastructure (Optional)
                    </label>
                    <Input
                      placeholder="e.g., Grid connected, existing generator, solar panels installed"
                      value={formData.existingInfrastructure}
                      onChange={(e) => updateFormData("existingInfrastructure", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Timeline */}
            {currentStep === "timeline" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your timeline?</h2>
                <p className="text-gray-500 mb-8">Help us prioritize and plan accordingly</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <AlertCircle className="w-4 h-4 inline mr-2" />
                      How urgent is this requirement?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: "urgent", label: "Urgent", desc: "Need quote within 24 hours", color: "text-red-600" },
                        { id: "normal", label: "Normal", desc: "Within 2-3 business days", color: "text-amber-600" },
                        {
                          id: "planning",
                          label: "Planning Phase",
                          desc: "Within a week is fine",
                          color: "text-blue-600",
                        },
                        {
                          id: "future",
                          label: "Future Project",
                          desc: "Just exploring options",
                          color: "text-gray-600",
                        },
                      ].map((urgency) => (
                        <button
                          key={urgency.id}
                          onClick={() => updateFormData("urgency", urgency.id)}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all",
                            formData.urgency === urgency.id
                              ? "border-[#E31B23] bg-red-50"
                              : "border-gray-200 hover:border-gray-300",
                          )}
                        >
                          <span className={cn("font-semibold", urgency.color)}>{urgency.label}</span>
                          <p className="text-sm text-gray-500 mt-1">{urgency.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Expected Project Start Date
                      </label>
                      <Input
                        type="date"
                        value={formData.projectStartDate}
                        onChange={(e) => updateFormData("projectStartDate", e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Duration</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["< 1 Month", "1-3 Months", "3-6 Months", "6+ Months"].map((dur) => (
                          <button
                            key={dur}
                            onClick={() => updateFormData("projectDuration", dur)}
                            className={cn(
                              "p-2 rounded-lg border-2 text-sm font-medium transition-all",
                              formData.projectDuration === dur
                                ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300",
                            )}
                          >
                            {dur}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      When do you expect our response?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Within 24 hours", "24-48 hours", "Within a week", "No rush"].map((time) => (
                        <button
                          key={time}
                          onClick={() => updateFormData("expectedResponseTime", time)}
                          className={cn(
                            "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                            formData.expectedResponseTime === time
                              ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                              : "border-gray-200 text-gray-600 hover:border-gray-300",
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Budget */}
            {currentStep === "budget" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your budget range?</h2>
                <p className="text-gray-500 mb-8">This helps us tailor the best solution for your investment</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 inline mr-2" />
                      Estimated Budget (PKR)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: "under-1m", label: "Under 10 Lac", range: "< PKR 1,000,000" },
                        { id: "1m-5m", label: "10 Lac - 50 Lac", range: "PKR 1M - 5M" },
                        { id: "5m-20m", label: "50 Lac - 2 Crore", range: "PKR 5M - 20M" },
                        { id: "20m-50m", label: "2 Crore - 5 Crore", range: "PKR 20M - 50M" },
                        { id: "50m-100m", label: "5 Crore - 10 Crore", range: "PKR 50M - 100M" },
                        { id: "above-100m", label: "Above 10 Crore", range: "> PKR 100M" },
                      ].map((budget) => (
                        <button
                          key={budget.id}
                          onClick={() => updateFormData("budgetRange", budget.id)}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all",
                            formData.budgetRange === budget.id
                              ? "border-[#E31B23] bg-red-50"
                              : "border-gray-200 hover:border-gray-300",
                          )}
                        >
                          <span className="font-semibold text-gray-900">{budget.label}</span>
                          <p className="text-sm text-gray-500 mt-1">{budget.range}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Flexibility</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: "fixed", label: "Fixed Budget", desc: "Cannot exceed" },
                        { id: "flexible", label: "Somewhat Flexible", desc: "±10-20% possible" },
                        { id: "open", label: "Open to Options", desc: "Value over price" },
                      ].map((flex) => (
                        <button
                          key={flex.id}
                          onClick={() => updateFormData("budgetFlexibility", flex.id)}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all",
                            formData.budgetFlexibility === flex.id
                              ? "border-[#E31B23] bg-red-50"
                              : "border-gray-200 hover:border-gray-300",
                          )}
                        >
                          <span className="font-semibold text-gray-900">{flex.label}</span>
                          <p className="text-sm text-gray-500">{flex.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Terms</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Advance Payment", "Milestone Based", "LC/Bank Guarantee", "Credit Terms"].map((term) => (
                        <button
                          key={term}
                          onClick={() => updateFormData("paymentTerms", term)}
                          className={cn(
                            "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                            formData.paymentTerms === term
                              ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                              : "border-gray-200 text-gray-600 hover:border-gray-300",
                          )}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Documents */}
            {currentStep === "documents" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Do you have any documents to share?</h2>
                <p className="text-gray-500 mb-8">
                  Upload RFQ, tender documents, specifications, or drawings (Optional)
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["RFQ / RFP", "Tender Document", "Technical Specs", "BOQ / BOM", "Site Drawings", "Other"].map(
                        (type) => (
                          <button
                            key={type}
                            onClick={() => updateFormData("documentType", type)}
                            className={cn(
                              "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                              formData.documentType === type
                                ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300",
                            )}
                          >
                            {type}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <div
                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[#E31B23] hover:bg-red-50/50 transition-all"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.png,.jpg"
                    />
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">PDF, DOC, XLS, DWG, PNG, JPG (Max 25MB each)</p>
                  </div>

                  {formData.uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Uploaded Files</label>
                      {formData.uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-700">{file.name}</span>
                            <span className="text-xs text-gray-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-red-500">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <button onClick={nextStep} className="text-sm text-gray-500 hover:text-[#E31B23] underline">
                    Skip this step - I don't have documents to share
                  </button>
                </div>
              </div>
            )}

            {/* Step 8: Opportunity Details */}
            {currentStep === "opportunity" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about this opportunity</h2>
                <p className="text-gray-500 mb-8">Help us understand the competitive landscape</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4 inline mr-2" />
                      Opportunity Type
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: "exclusive", label: "Exclusive", desc: "Only HNL is being considered", icon: Shield },
                        {
                          id: "competitive",
                          label: "Competitive Bid",
                          desc: "Multiple vendors being evaluated",
                          icon: Share2,
                        },
                        { id: "tender", label: "Public Tender", desc: "Open tender process", icon: FileText },
                        { id: "direct", label: "Direct Purchase", desc: "Ready to buy, need quote", icon: Package },
                      ].map((opp) => {
                        const Icon = opp.icon
                        return (
                          <button
                            key={opp.id}
                            onClick={() => updateFormData("opportunityType", opp.id)}
                            className={cn(
                              "p-4 rounded-xl border-2 text-left transition-all flex items-start gap-4",
                              formData.opportunityType === opp.id
                                ? "border-[#E31B23] bg-red-50"
                                : "border-gray-200 hover:border-gray-300",
                            )}
                          >
                            <div
                              className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                formData.opportunityType === opp.id ? "bg-[#E31B23]" : "bg-gray-100",
                              )}
                            >
                              <Icon
                                className={cn(
                                  "w-5 h-5",
                                  formData.opportunityType === opp.id ? "text-white" : "text-gray-600",
                                )}
                              />
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900">{opp.label}</span>
                              <p className="text-sm text-gray-500">{opp.desc}</p>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {(formData.opportunityType === "competitive" || formData.opportunityType === "tender") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How many competitors are bidding?
                      </label>
                      <div className="grid grid-cols-4 gap-3">
                        {["2-3", "4-5", "6+", "Unknown"].map((num) => (
                          <button
                            key={num}
                            onClick={() => updateFormData("competitorsBidding", num)}
                            className={cn(
                              "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                              formData.competitorsBidding === num
                                ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300",
                            )}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Who are the decision makers?
                    </label>
                    <Input
                      placeholder="e.g., Procurement Committee, CEO, Technical Director"
                      value={formData.decisionMakers}
                      onChange={(e) => updateFormData("decisionMakers", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      When will the decision be made?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["This Week", "This Month", "Next Quarter", "TBD"].map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() => updateFormData("decisionTimeline", timeline)}
                          className={cn(
                            "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                            formData.decisionTimeline === timeline
                              ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                              : "border-gray-200 text-gray-600 hover:border-gray-300",
                          )}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 9: Contact Information */}
            {currentStep === "contact" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How can we reach you?</h2>
                <p className="text-gray-500 mb-8">Your dedicated sales representative will contact you</p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => updateFormData("fullName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                      <Input
                        placeholder="Your job title"
                        value={formData.designation}
                        onChange={(e) => updateFormData("designation", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company / Organization *</label>
                    <Input
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "email", label: "Email", icon: Mail },
                        { id: "phone", label: "Phone Call", icon: Phone },
                        { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                      ].map((method) => {
                        const Icon = method.icon
                        const isSelected = formData.preferredContact.includes(method.id)
                        return (
                          <button
                            key={method.id}
                            onClick={() => toggleArrayValue("preferredContact", method.id)}
                            className={cn(
                              "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2",
                              isSelected ? "border-[#E31B23] bg-red-50" : "border-gray-200 hover:border-gray-300",
                            )}
                          >
                            <Icon className={cn("w-6 h-6", isSelected ? "text-[#E31B23]" : "text-gray-400")} />
                            <span
                              className={cn("text-sm font-medium", isSelected ? "text-[#E31B23]" : "text-gray-600")}
                            >
                              {method.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {formData.preferredContact.includes("phone") && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Best Time to Call</label>
                      <div className="grid grid-cols-3 gap-3">
                        {["Morning (9-12)", "Afternoon (12-5)", "Evening (5-8)"].map((time) => (
                          <button
                            key={time}
                            onClick={() => updateFormData("bestTimeToCall", time)}
                            className={cn(
                              "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                              formData.bestTimeToCall === time
                                ? "border-[#E31B23] bg-red-50 text-[#E31B23]"
                                : "border-gray-200 text-gray-600 hover:border-gray-300",
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 10: Confirmation */}
            {currentStep === "confirm" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Quote Request</h2>
                <p className="text-gray-500 mb-8">Please verify the information before submitting</p>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#E31B23]" />
                      Requirements
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Category:</span>{" "}
                        <span className="text-gray-900">
                          {categories.find((c) => c.id === formData.category)?.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Quantity:</span>{" "}
                        <span className="text-gray-900">{formData.quantity}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">Products/Services:</span>{" "}
                        <span className="text-gray-900">
                          {formData.productService
                            .map((p) => productsByCategory[formData.category]?.find((prod) => prod.id === p)?.name)
                            .join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E31B23]" />
                      Location
                    </h3>
                    <div className="text-sm">
                      <span className="text-gray-900">{formData.projectLocation}</span>
                      <span className="text-gray-500"> • {formData.city}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#E31B23]" />
                      Budget & Timeline
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Budget:</span>{" "}
                        <span className="text-gray-900">
                          {formData.budgetRange.replace(/-/g, " ").replace(/m/g, "M").toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Urgency:</span>{" "}
                        <span className="text-gray-900 capitalize">{formData.urgency}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#E31B23]" />
                      Contact Details
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Name:</span>{" "}
                        <span className="text-gray-900">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Company:</span>{" "}
                        <span className="text-gray-900">{formData.company}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Email:</span>{" "}
                        <span className="text-gray-900">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Phone:</span>{" "}
                        <span className="text-gray-900">{formData.phone}</span>
                      </div>
                    </div>
                  </div>

                  {formData.uploadedFiles.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#E31B23]" />
                        Attached Documents
                      </h3>
                      <div className="text-sm text-gray-900">{formData.uploadedFiles.length} file(s) attached</div>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-sm text-amber-800">
                    <strong>Expected Response Time:</strong> {formData.expectedResponseTime || "24-48 hours"}
                    <br />
                    <span className="text-amber-600">
                      Our sales team will prepare a detailed quote based on your requirements.
                    </span>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="px-6 md:px-8 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
        <Button variant="ghost" onClick={prevStep} disabled={currentStepIndex === 0} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        {currentStep === "confirm" ? (
          <Button onClick={handleSubmit} className="bg-[#E31B23] hover:bg-[#c41820] text-white gap-2">
            Submit Quote Request
            <CheckCircle2 className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={nextStep}
            disabled={!canProceed()}
            className="bg-[#E31B23] hover:bg-[#c41820] text-white gap-2 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
