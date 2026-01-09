"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getCaptchaToken } from "@/lib/captcha"
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
  MapPin,
  Users,
  FileText,
  CheckCircle2,
  Loader2,
  Briefcase,
  Clock,
  Globe,
  BadgeDollarSign,
  Target,
  AlertCircle,
} from "lucide-react"

type Step = "purpose" | "company" | "operations" | "financials" | "opportunity" | "leadership" | "consent" | "complete"

interface FormData {
  // Purpose
  partnershipType: string

  // Company Info
  companyName: string
  registrationNumber: string
  yearsInBusiness: string
  website: string

  // Operations
  headquarterCity: string
  operatingCities: string[]
  teamSize: string
  salesTeamSize: string
  technicalTeamSize: string
  warehouseCapacity: string

  // Financials
  annualRevenue: string
  creditLimit: string
  existingDistributorships: string

  // Opportunity
  opportunityType: string
  opportunityDetails: string
  productInterest: string[]
  expectedMonthlyVolume: string

  // Leadership
  ownerName: string
  ownerDesignation: string
  ownerEmail: string
  ownerPhone: string
  ownerLinkedIn: string

  // Consent
  agreeTerms: boolean
  agreeBackgroundCheck: boolean
  preferredContactMethod: string
  additionalNotes: string
}

const partnershipTypes = [
  { id: "authorized", label: "Authorized Distributor", description: "Full product line distribution rights" },
  { id: "regional", label: "Regional Partner", description: "Territory-specific distribution" },
  { id: "reseller", label: "Value-Added Reseller", description: "Solution bundling with services" },
  { id: "project", label: "Project Partner", description: "Project-based collaboration" },
]

const citiesOptions = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Abbottabad",
]

const teamSizeOptions = ["1-5", "6-15", "16-30", "31-50", "51-100", "100+"]

const revenueOptions = [
  "Under PKR 10M",
  "PKR 10M - 50M",
  "PKR 50M - 100M",
  "PKR 100M - 500M",
  "PKR 500M - 1B",
  "Above PKR 1B",
]

const opportunityTypes = [
  { id: "active_tender", label: "Active Tender/RFP", description: "Currently bidding on a project", urgent: true },
  { id: "active_rfq", label: "Active RFQ", description: "Have a customer inquiry", urgent: true },
  { id: "pipeline", label: "Pipeline Opportunity", description: "Expected within 3 months" },
  { id: "future", label: "Future Planning", description: "Building capabilities for future" },
  { id: "general", label: "General Partnership", description: "Exploring distribution opportunity" },
]

const productInterests = [
  "Diesel Generators (10-500 kVA)",
  "Diesel Generators (500+ kVA)",
  "Solar Solutions",
  "UPS Systems",
  "Battery Banks",
  "Telecom Towers",
  "Fiber Optic Solutions",
  "Data Center Equipment",
  "IT Infrastructure",
  "Managed Services",
]

export function DistributorApplicationForm() {
  const [currentStep, setCurrentStep] = useState<Step>("purpose")
  const [formData, setFormData] = useState<FormData>({
    partnershipType: "",
    companyName: "",
    registrationNumber: "",
    yearsInBusiness: "",
    website: "",
    headquarterCity: "",
    operatingCities: [],
    teamSize: "",
    salesTeamSize: "",
    technicalTeamSize: "",
    warehouseCapacity: "",
    annualRevenue: "",
    creditLimit: "",
    existingDistributorships: "",
    opportunityType: "",
    opportunityDetails: "",
    productInterest: [],
    expectedMonthlyVolume: "",
    ownerName: "",
    ownerDesignation: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerLinkedIn: "",
    agreeTerms: false,
    agreeBackgroundCheck: false,
    preferredContactMethod: "",
    additionalNotes: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps: Step[] = [
    "purpose",
    "company",
    "operations",
    "financials",
    "opportunity",
    "leadership",
    "consent",
    "complete",
  ]
  const currentIndex = steps.indexOf(currentStep)
  const progress = (currentIndex / (steps.length - 1)) * 100

  const stepLabels: Record<Step, string> = {
    purpose: "Partnership Type",
    company: "Company Details",
    operations: "Operations",
    financials: "Business Scale",
    opportunity: "Opportunity",
    leadership: "Leadership",
    consent: "Verification",
    complete: "Complete",
  }

  const validateStep = (step: Step): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case "purpose":
        if (!formData.partnershipType) newErrors.partnershipType = "Please select a partnership type"
        break
      case "company":
        if (!formData.companyName.trim()) newErrors.companyName = "Company name is required"
        if (!formData.yearsInBusiness) newErrors.yearsInBusiness = "Years in business is required"
        break
      case "operations":
        if (!formData.headquarterCity) newErrors.headquarterCity = "Headquarters location is required"
        if (formData.operatingCities.length === 0) newErrors.operatingCities = "Select at least one operating city"
        if (!formData.teamSize) newErrors.teamSize = "Team size is required"
        break
      case "financials":
        if (!formData.annualRevenue) newErrors.annualRevenue = "Annual revenue range is required"
        break
      case "opportunity":
        if (!formData.opportunityType) newErrors.opportunityType = "Please select opportunity type"
        if (formData.productInterest.length === 0) newErrors.productInterest = "Select at least one product category"
        break
      case "leadership":
        if (!formData.ownerName.trim()) newErrors.ownerName = "Owner/Director name is required"
        if (!formData.ownerEmail.trim()) newErrors.ownerEmail = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.ownerEmail)) {
          newErrors.ownerEmail = "Please enter a valid email"
        }
        if (!formData.ownerPhone.trim()) newErrors.ownerPhone = "Phone number is required"
        break
      case "consent":
        if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms"
        if (!formData.agreeBackgroundCheck)
          newErrors.agreeBackgroundCheck = "Background verification consent is required"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (!validateStep(currentStep)) return

    const nextIndex = currentIndex + 1
    if (nextIndex < steps.length) {
      if (currentStep === "consent") {
        handleSubmit()
      } else {
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
    setIsSubmitting(true)
    try {
      const captchaToken = await getCaptchaToken("distributor_application")

      if (!captchaToken) {
        alert("Captcha verification failed. Please try again.")
        setIsSubmitting(false)
        return
      }

      const response = await fetch("/api/submissions/distributor", {
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

      setIsSubmitting(false)
      setCurrentStep("complete")
    } catch (error) {
      console.error("Distributor application error:", error)
      alert(error instanceof Error ? error.message : "Failed to submit application. Please try again.")
      setIsSubmitting(false)
    }
  }

  const toggleCity = (city: string) => {
    setFormData((prev) => ({
      ...prev,
      operatingCities: prev.operatingCities.includes(city)
        ? prev.operatingCities.filter((c) => c !== city)
        : [...prev.operatingCities, city],
    }))
  }

  const toggleProduct = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      productInterest: prev.productInterest.includes(product)
        ? prev.productInterest.filter((p) => p !== product)
        : [...prev.productInterest, product],
    }))
  }

  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  }

  return (
    <div className="min-h-[650px] flex flex-col">
      {/* Progress Bar */}
      {currentStep !== "complete" && (
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span className="font-medium text-gray-700">{stepLabels[currentStep]}</span>
            <span>
              Step {currentIndex + 1} of {steps.length - 1}
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-red-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          {/* Step indicators */}
          <div className="flex justify-between mt-2">
            {steps.slice(0, -1).map((step, idx) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx <= currentIndex ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {/* Step 1: Partnership Type */}
          {currentStep === "purpose" && (
            <motion.div
              key="purpose"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What type of partnership are you looking for?</h2>
              <p className="text-gray-600 mb-8">This helps us understand your business model and goals</p>

              <div className="grid gap-3">
                {partnershipTypes.map((type) => {
                  const isSelected = formData.partnershipType === type.id
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        setFormData({ ...formData, partnershipType: type.id })
                        setErrors({})
                        setTimeout(nextStep, 300)
                      }}
                      className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isSelected ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{type.label}</div>
                        <div className="text-sm text-gray-500">{type.description}</div>
                      </div>
                      {isSelected && <Check className="h-6 w-6 text-primary" />}
                    </button>
                  )
                })}
              </div>
              {errors.partnershipType && (
                <p className="text-red-500 text-sm mt-3 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.partnershipType}
                </p>
              )}
            </motion.div>
          )}

          {/* Step 2: Company Details */}
          {currentStep === "company" && (
            <motion.div
              key="company"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Tell us about your company</h2>
              <p className="text-gray-600 mb-8">Basic information about your business entity</p>

              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Building2 className="h-4 w-4" />
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Your Company Pvt. Ltd."
                    className={`text-lg py-6 ${errors.companyName ? "border-red-500" : ""}`}
                    autoFocus
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FileText className="h-4 w-4" />
                      NTN / Registration Number
                    </label>
                    <Input
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      placeholder="1234567-8"
                      className="py-5"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      <Clock className="h-4 w-4" />
                      Years in Business <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                      className={`w-full border rounded-lg px-4 py-3 ${errors.yearsInBusiness ? "border-red-500" : "border-gray-200"}`}
                    >
                      <option value="">Select...</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.yearsInBusiness && <p className="text-red-500 text-sm mt-1">{errors.yearsInBusiness}</p>}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Globe className="h-4 w-4" />
                    Company Website
                  </label>
                  <Input
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourcompany.com"
                    className="py-5"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Operations */}
          {currentStep === "operations" && (
            <motion.div
              key="operations"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Your operational footprint</h2>
              <p className="text-gray-600 mb-8">Help us understand your reach and capabilities</p>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4" />
                    Headquarters Location <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {citiesOptions.map((city) => (
                      <button
                        key={city}
                        onClick={() => setFormData({ ...formData, headquarterCity: city })}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.headquarterCity === city
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                  {errors.headquarterCity && <p className="text-red-500 text-sm mt-2">{errors.headquarterCity}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Globe className="h-4 w-4" />
                    Operating Cities <span className="text-red-500">*</span>
                    <span className="text-gray-400 font-normal">(Select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {citiesOptions.map((city) => (
                      <button
                        key={city}
                        onClick={() => toggleCity(city)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.operatingCities.includes(city)
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {city}
                        {formData.operatingCities.includes(city) && <Check className="inline h-3 w-3 ml-1" />}
                      </button>
                    ))}
                  </div>
                  {errors.operatingCities && <p className="text-red-500 text-sm mt-2">{errors.operatingCities}</p>}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Users className="h-4 w-4" />
                      Total Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className={`w-full border rounded-lg px-4 py-3 ${errors.teamSize ? "border-red-500" : "border-gray-200"}`}
                    >
                      <option value="">Select...</option>
                      {teamSizeOptions.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    {errors.teamSize && <p className="text-red-500 text-sm mt-1">{errors.teamSize}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Sales Team</label>
                    <select
                      value={formData.salesTeamSize}
                      onChange={(e) => setFormData({ ...formData, salesTeamSize: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3"
                    >
                      <option value="">Select...</option>
                      {teamSizeOptions.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Technical Team</label>
                    <select
                      value={formData.technicalTeamSize}
                      onChange={(e) => setFormData({ ...formData, technicalTeamSize: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3"
                    >
                      <option value="">Select...</option>
                      {teamSizeOptions.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Warehouse/Storage Capacity</label>
                  <Input
                    value={formData.warehouseCapacity}
                    onChange={(e) => setFormData({ ...formData, warehouseCapacity: e.target.value })}
                    placeholder="e.g., 5,000 sq ft in Lahore"
                    className="py-5"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Financials */}
          {currentStep === "financials" && (
            <motion.div
              key="financials"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Business scale & capacity</h2>
              <p className="text-gray-600 mb-8">This information helps us tailor the right partnership model</p>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <BadgeDollarSign className="h-4 w-4" />
                    Annual Revenue Range <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {revenueOptions.map((revenue) => (
                      <button
                        key={revenue}
                        onClick={() => setFormData({ ...formData, annualRevenue: revenue })}
                        className={`p-4 rounded-xl border-2 text-sm font-medium transition-all text-center ${
                          formData.annualRevenue === revenue
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                      >
                        {revenue}
                      </button>
                    ))}
                  </div>
                  {errors.annualRevenue && <p className="text-red-500 text-sm mt-2">{errors.annualRevenue}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Expected Credit Limit Requirement
                  </label>
                  <Input
                    value={formData.creditLimit}
                    onChange={(e) => setFormData({ ...formData, creditLimit: e.target.value })}
                    placeholder="e.g., PKR 5-10 Million"
                    className="py-5"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Existing Distributorships (if any)
                  </label>
                  <Textarea
                    value={formData.existingDistributorships}
                    onChange={(e) => setFormData({ ...formData, existingDistributorships: e.target.value })}
                    placeholder="List any current brand partnerships or distributorships you hold..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Opportunity */}
          {currentStep === "opportunity" && (
            <motion.div
              key="opportunity"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Current opportunity status</h2>
              <p className="text-gray-600 mb-8">Do you have an active opportunity or planning for the future?</p>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">
                    Opportunity Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid gap-3">
                    {opportunityTypes.map((opp) => (
                      <button
                        key={opp.id}
                        onClick={() => setFormData({ ...formData, opportunityType: opp.id })}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                          formData.opportunityType === opp.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                      >
                        <div className="flex-1">
                          <div className="font-semibold flex items-center gap-2">
                            {opp.label}
                            {opp.urgent && (
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Urgent</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{opp.description}</div>
                        </div>
                        {formData.opportunityType === opp.id && <Check className="h-5 w-5 text-primary" />}
                      </button>
                    ))}
                  </div>
                  {errors.opportunityType && <p className="text-red-500 text-sm mt-2">{errors.opportunityType}</p>}
                </div>

                {(formData.opportunityType === "active_tender" || formData.opportunityType === "active_rfq") && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Opportunity Details</label>
                    <Textarea
                      value={formData.opportunityDetails}
                      onChange={(e) => setFormData({ ...formData, opportunityDetails: e.target.value })}
                      placeholder="Tender reference, customer name, deadline, estimated value..."
                      className="min-h-[100px]"
                    />
                  </div>
                )}

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Target className="h-4 w-4" />
                    Products of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {productInterests.map((product) => (
                      <button
                        key={product}
                        onClick={() => toggleProduct(product)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          formData.productInterest.includes(product)
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {product}
                        {formData.productInterest.includes(product) && <Check className="inline h-3 w-3 ml-1" />}
                      </button>
                    ))}
                  </div>
                  {errors.productInterest && <p className="text-red-500 text-sm mt-2">{errors.productInterest}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Expected Monthly Volume</label>
                  <Input
                    value={formData.expectedMonthlyVolume}
                    onChange={(e) => setFormData({ ...formData, expectedMonthlyVolume: e.target.value })}
                    placeholder="e.g., 5-10 generators or PKR 2-5 Million"
                    className="py-5"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 6: Leadership Contact */}
          {currentStep === "leadership" && (
            <motion.div
              key="leadership"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Owner / Leadership Contact</h2>
              <p className="text-gray-600 mb-8">Primary decision maker for partnership discussions</p>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Ahmed Khan"
                      className={`py-5 ${errors.ownerName ? "border-red-500" : ""}`}
                      autoFocus
                    />
                    {errors.ownerName && <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Designation</label>
                    <Input
                      value={formData.ownerDesignation}
                      onChange={(e) => setFormData({ ...formData, ownerDesignation: e.target.value })}
                      placeholder="CEO / Director / Owner"
                      className="py-5"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.ownerEmail}
                    onChange={(e) => setFormData({ ...formData, ownerEmail: e.target.value })}
                    placeholder="ahmed@company.com"
                    className={`py-5 ${errors.ownerEmail ? "border-red-500" : ""}`}
                  />
                  {errors.ownerEmail && <p className="text-red-500 text-sm mt-1">{errors.ownerEmail}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4" />
                    Direct Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={formData.ownerPhone}
                    onChange={(e) => setFormData({ ...formData, ownerPhone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className={`py-5 ${errors.ownerPhone ? "border-red-500" : ""}`}
                  />
                  {errors.ownerPhone && <p className="text-red-500 text-sm mt-1">{errors.ownerPhone}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">LinkedIn Profile (optional)</label>
                  <Input
                    value={formData.ownerLinkedIn}
                    onChange={(e) => setFormData({ ...formData, ownerLinkedIn: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="py-5"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 7: Consent & Verification */}
          {currentStep === "consent" && (
            <motion.div
              key="consent"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Final verification</h2>
              <p className="text-gray-600 mb-8">Please review and confirm before submission</p>

              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-800">Expected Response Time</h4>
                      <p className="text-sm text-amber-700">
                        Our regional team will complete due diligence and respond within{" "}
                        <strong>4-6 business days</strong>. For urgent tenders/RFQs, please mention in additional notes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      I confirm that all information provided is accurate and I am authorized to represent my company in
                      partnership discussions. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="text-red-500 text-sm ml-8">{errors.agreeTerms}</p>}

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.agreeBackgroundCheck}
                      onChange={(e) => setFormData({ ...formData, agreeBackgroundCheck: e.target.checked })}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      I consent to HNL conducting standard due diligence including business verification, credit checks,
                      and reference verification. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.agreeBackgroundCheck && (
                    <p className="text-red-500 text-sm ml-8">{errors.agreeBackgroundCheck}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Preferred Contact Method</label>
                  <div className="flex gap-3">
                    {["Email", "Phone", "WhatsApp"].map((method) => (
                      <button
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                        className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          formData.preferredContactMethod === method
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Additional Notes</label>
                  <Textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Any additional information, references, or specific requirements..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Complete */}
          {currentStep === "complete" && (
            <motion.div
              key="complete"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Application Submitted!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you, {formData.ownerName.split(" ")[0]}. Your distributor application for{" "}
                <strong>{formData.companyName}</strong> has been received.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl max-w-lg mx-auto text-left mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  What happens next?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <span>Our team reviews your application and conducts initial due diligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <span>
                      Regional manager contacts you within <strong>4-6 business days</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <span>Schedule discovery call to discuss partnership details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </span>
                    <span>Complete documentation and onboarding process</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Mail className="h-4 w-4" />
                Confirmation sent to <strong>{formData.ownerEmail}</strong>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {currentStep !== "complete" && currentStep !== "purpose" && (
        <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
          <Button variant="ghost" onClick={prevStep} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <Button
            onClick={nextStep}
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : currentStep === "consent" ? (
              <>
                Submit Application
                <Check className="h-4 w-4" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
