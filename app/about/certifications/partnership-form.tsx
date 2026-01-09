"use client"

import { useState } from "react"
import { getCaptchaToken } from "@/lib/captcha"
import {
  Building2,
  Globe2,
  Mail,
  Phone,
  User,
  Briefcase,
  Target,
  MapPin,
  FileText,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Handshake,
  Zap,
  Server,
  Radio,
  Sun,
  Wrench,
  Building,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const steps = [
  { id: 1, title: "Company Info", icon: Building2 },
  { id: 2, title: "Contact Details", icon: User },
  { id: 3, title: "Partnership Interest", icon: Target },
  { id: 4, title: "Project Scope", icon: Briefcase },
  { id: 5, title: "Additional Info", icon: FileText },
]

const industryOptions = [
  "Telecommunications",
  "Energy & Power",
  "Data Centers",
  "Government & Public Sector",
  "Banking & Finance",
  "Healthcare",
  "Manufacturing",
  "Oil & Gas",
  "Construction & Real Estate",
  "Other",
]

const partnershipTypes = [
  { id: "distribution", label: "Distribution Partnership", desc: "Become an authorized distributor" },
  { id: "technology", label: "Technology Partnership", desc: "Joint R&D and innovation" },
  { id: "deployment", label: "Deployment Partnership", desc: "Large-scale infrastructure rollout" },
  { id: "reseller", label: "Reseller Agreement", desc: "Sell HNL products/services" },
  { id: "joint-venture", label: "Joint Venture", desc: "Strategic business collaboration" },
  { id: "tender", label: "Tender Collaboration", desc: "Joint bidding on projects" },
]

const areasOfInterest = [
  { id: "telecom", label: "Telecom Infrastructure", icon: Radio },
  { id: "power", label: "Power & Energy Solutions", icon: Zap },
  { id: "solar", label: "Solar & Renewable Energy", icon: Sun },
  { id: "datacenter", label: "Data Center Solutions", icon: Server },
  { id: "managed", label: "Managed Services & NOC", icon: Wrench },
  { id: "civil", label: "Civil & Construction", icon: Building },
]

const projectScales = ["Under $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M - $10M", "Above $10M"]

const timeframes = [
  "Immediate (Within 1 month)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term (6-12 months)",
  "Exploratory / No specific timeline",
]

const deploymentRegions = [
  "Punjab",
  "Sindh",
  "KPK",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Kashmir",
  "Nationwide Pakistan",
  "Multiple Countries",
]

export function PartnershipInquiryForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Company Info
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    headquarters: "",
    yearEstablished: "",

    // Contact Details
    fullName: "",
    designation: "",
    email: "",
    phone: "",
    linkedIn: "",

    // Partnership Interest
    partnershipType: [] as string[],
    areasOfInterest: [] as string[],
    currentPresencePakistan: "",

    // Project Scope
    projectScale: "",
    timeframe: "",
    deploymentRegions: [] as string[],
    tenderReference: "",

    // Additional Info
    projectDescription: "",
    specificRequirements: "",
    howDidYouHear: "",
    additionalComments: "",
  })

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayField = (field: string, value: string) => {
    const current = formData[field as keyof typeof formData] as string[]
    if (current.includes(value)) {
      updateField(
        field,
        current.filter((v) => v !== value),
      )
    } else {
      updateField(field, [...current, value])
    }
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    try {
      const captchaToken = await getCaptchaToken("partnership_inquiry")

      if (!captchaToken) {
        alert("Captcha verification failed. Please try again.")
        return
      }

      const response = await fetch("/api/submissions/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || "Submission failed")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Partnership submission error:", error)
      alert(error instanceof Error ? error.message : "Failed to submit partnership inquiry. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#E31B23]/5 rounded-full blur-2xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Inquiry Received!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for your interest in partnering with HNL. Our Business Development team will review your inquiry
              and contact you within 2-3 business days.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-2">Reference Number</p>
              <p className="text-2xl font-mono font-bold text-[#E31B23]">HNL-PI-{Date.now().toString().slice(-8)}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/company"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                Learn More About HNL
              </Link>
              <Link href="/" className="px-6 py-3 bg-[#E31B23] hover:bg-[#c41820] rounded-lg transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5">
        <img src="/images/r8.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#E31B23]/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E31B23]/20 rounded-full text-[#E31B23] text-sm font-medium mb-4">
              <Handshake className="w-4 h-4" />
              <span>Strategic Partnership Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with a Certified Leader</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join forces with Pakistan's premier ISO-certified infrastructure provider. Complete this form to explore
              partnership opportunities for large-scale deployments.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-10 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <div
                  className={`flex flex-col items-center cursor-pointer transition-all ${
                    currentStep === step.id ? "opacity-100" : currentStep > step.id ? "opacity-100" : "opacity-40"
                  }`}
                  onClick={() => currentStep > step.id && setCurrentStep(step.id)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      currentStep === step.id
                        ? "bg-[#E31B23] text-white scale-110"
                        : currentStep > step.id
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 md:w-20 h-0.5 mx-2 transition-colors ${
                      currentStep > step.id ? "bg-green-500" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
            {/* Step 1: Company Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#E31B23]" />
                  Tell us about your organization
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Industry Sector *</label>
                  <div className="flex flex-wrap gap-2">
                    {industryOptions.map((industry) => (
                      <button
                        key={industry}
                        type="button"
                        onClick={() => updateField("industry", industry)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          formData.industry === industry
                            ? "bg-[#E31B23] text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => updateField("companySize", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white"
                    >
                      <option value="" className="bg-gray-800">
                        Select size
                      </option>
                      <option value="1-50" className="bg-gray-800">
                        1-50 employees
                      </option>
                      <option value="51-200" className="bg-gray-800">
                        51-200 employees
                      </option>
                      <option value="201-500" className="bg-gray-800">
                        201-500 employees
                      </option>
                      <option value="501-1000" className="bg-gray-800">
                        501-1000 employees
                      </option>
                      <option value="1000+" className="bg-gray-800">
                        1000+ employees
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Headquarters</label>
                    <input
                      type="text"
                      value={formData.headquarters}
                      onChange={(e) => updateField("headquarters", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Year Established</label>
                    <input
                      type="text"
                      value={formData.yearEstablished}
                      onChange={(e) => updateField("yearEstablished", e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                      placeholder="e.g. 2005"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#E31B23]" />
                  Primary Contact Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Designation *</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.designation}
                        onChange={(e) => updateField("designation", e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                        placeholder="Business Development Director"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn Profile</label>
                  <div className="relative">
                    <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => updateField("linkedIn", e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Partnership Interest */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#E31B23]" />
                  Partnership Interests
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Type of Partnership (Select all that apply) *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {partnershipTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => toggleArrayField("partnershipType", type.id)}
                        className={`p-4 rounded-xl text-left transition-all border ${
                          formData.partnershipType.includes(type.id)
                            ? "bg-[#E31B23]/20 border-[#E31B23] text-white"
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm opacity-70">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Areas of Interest *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {areasOfInterest.map((area) => (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => toggleArrayField("areasOfInterest", area.id)}
                        className={`p-4 rounded-xl text-center transition-all border ${
                          formData.areasOfInterest.includes(area.id)
                            ? "bg-[#E31B23]/20 border-[#E31B23] text-white"
                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        <area.icon
                          className={`w-6 h-6 mx-auto mb-2 ${
                            formData.areasOfInterest.includes(area.id) ? "text-[#E31B23]" : "text-gray-400"
                          }`}
                        />
                        <div className="text-sm font-medium">{area.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Presence in Pakistan</label>
                  <div className="flex flex-wrap gap-2">
                    {["No presence", "Representative office", "Local partner", "Subsidiary", "Full operations"].map(
                      (opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => updateField("currentPresencePakistan", opt)}
                          className={`px-4 py-2 rounded-full text-sm transition-all ${
                            formData.currentPresencePakistan === opt
                              ? "bg-[#E31B23] text-white"
                              : "bg-white/10 text-gray-300 hover:bg-white/20"
                          }`}
                        >
                          {opt}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Project Scope */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#E31B23]" />
                  Project Scope & Requirements
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Estimated Project Scale</label>
                  <div className="flex flex-wrap gap-2">
                    {projectScales.map((scale) => (
                      <button
                        key={scale}
                        type="button"
                        onClick={() => updateField("projectScale", scale)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          formData.projectScale === scale
                            ? "bg-[#E31B23] text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        {scale}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Expected Timeframe</label>
                  <div className="flex flex-wrap gap-2">
                    {timeframes.map((tf) => (
                      <button
                        key={tf}
                        type="button"
                        onClick={() => updateField("timeframe", tf)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          formData.timeframe === tf
                            ? "bg-[#E31B23] text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Deployment Regions (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {deploymentRegions.map((region) => (
                      <button
                        key={region}
                        type="button"
                        onClick={() => toggleArrayField("deploymentRegions", region)}
                        className={`px-4 py-2 rounded-full text-sm transition-all flex items-center gap-1 ${
                          formData.deploymentRegions.includes(region)
                            ? "bg-[#E31B23] text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                        {region}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tender Reference Number (if applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.tenderReference}
                    onChange={(e) => updateField("tenderReference", e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500"
                    placeholder="e.g. PTA/2024/FTTH/001"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Additional Info */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#E31B23]" />
                  Additional Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project / Opportunity Description *
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => updateField("projectDescription", e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500 resize-none"
                    placeholder="Please describe your project, opportunity, or partnership goals in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    value={formData.specificRequirements}
                    onChange={(e) => updateField("specificRequirements", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500 resize-none"
                    placeholder="Any specific technical requirements, certifications needed, or questions for our team..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">How did you hear about HNL?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Search",
                      "Industry Referral",
                      "Trade Show/Event",
                      "LinkedIn",
                      "Existing Partner",
                      "Government Directory",
                      "Other",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => updateField("howDidYouHear", opt)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          formData.howDidYouHear === opt
                            ? "bg-[#E31B23] text-white"
                            : "bg-white/10 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Additional Comments</label>
                  <textarea
                    value={formData.additionalComments}
                    onChange={(e) => updateField("additionalComments", e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#E31B23] text-white placeholder-gray-500 resize-none"
                    placeholder="Anything else you'd like us to know..."
                  />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-[#E31B23] hover:underline">
                      Privacy Policy
                    </Link>
                    . Your information will be used solely for partnership evaluation and communication purposes.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-[#E31B23] hover:bg-[#c41820] rounded-lg transition-colors ml-auto"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-[#E31B23] hover:bg-[#c41820] rounded-lg transition-colors ml-auto font-semibold"
                >
                  Submit Partnership Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Trusted by global leaders for infrastructure partnerships in Pakistan
            </p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              <img src="/images/1.png" alt="Partner" className="h-8 object-contain grayscale" />
              <img src="/images/2.png" alt="Partner" className="h-8 object-contain grayscale" />
              <img src="/images/3.png" alt="Partner" className="h-8 object-contain grayscale" />
              <img src="/images/4.png" alt="Partner" className="h-8 object-contain grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
