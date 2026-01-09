"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCaptcha } from "@/components/captcha-provider"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  Zap,
  Radio,
  Server,
  Wrench,
  HelpCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react"

type Step = "interest" | "contact" | "company" | "message" | "complete"

interface FormData {
  interest: string
  name: string
  email: string
  phone: string
  company: string
  industry: string
  message: string
}

const interests = [
  { id: "energy", label: "Energy & Power Solutions", icon: Zap, description: "Generators, Solar, UPS Systems" },
  { id: "telecom", label: "Telecom Infrastructure", icon: Radio, description: "Towers, Fiber, Network Equipment" },
  { id: "it", label: "IT & Software Solutions", icon: Server, description: "Cloud, AI, Enterprise Software" },
  { id: "services", label: "Managed Services", icon: Wrench, description: "Maintenance, Support, Operations" },
  { id: "other", label: "Something Else", icon: HelpCircle, description: "General inquiry or other topics" },
]

const industries = [
  "Telecom Operator",
  "Banking & Finance",
  "Healthcare",
  "Manufacturing",
  "Government",
  "Education",
  "Real Estate",
  "Retail",
  "Other",
]

export function TypeformInquiry() {
  const [currentStep, setCurrentStep] = useState<Step>("interest")
  const [formData, setFormData] = useState<FormData>({
    interest: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps: Step[] = ["interest", "contact", "company", "message", "complete"]
  const currentIndex = steps.indexOf(currentStep)
  const progress = (currentIndex / (steps.length - 1)) * 100

  const validateStep = (step: Step): boolean => {
    const newErrors: Partial<FormData> = {}

    if (step === "interest" && !formData.interest) {
      newErrors.interest = "Please select an area of interest"
    }
    if (step === "contact") {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    }
    if (step === "message" && !formData.message.trim()) {
      newErrors.message = "Please tell us about your requirements"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (!validateStep(currentStep)) return

    const nextIndex = currentIndex + 1
    if (nextIndex < steps.length) {
      if (currentStep === "message") {
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

  const { getCaptchaToken } = useCaptcha()

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const captchaToken = await getCaptchaToken("inquiry_submit")

      const response = await fetch("/api/submissions/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captchaToken,
          interestType: formData.interest,
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.company,
          companyIndustry: formData.industry,
          jobTitle: "",
          message: formData.message,
          preferredContactMethod: "email",
        }),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      setCurrentStep("complete")
    } catch (error) {
      console.error("[v0] Inquiry submission error:", error)
      alert("Failed to submit inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep !== "message") {
      e.preventDefault()
      nextStep()
    }
  }

  useEffect(() => {
    if (formData.email && formData.email.includes("@")) {
      const domain = formData.email.split("@")[1]
      if (domain && !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].includes(domain)) {
        const companyName = domain.split(".")[0]
        if (!formData.company) {
          setFormData((prev) => ({
            ...prev,
            company: companyName.charAt(0).toUpperCase() + companyName.slice(1),
          }))
        }
      }
    }
  }, [formData.email])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-[600px] flex flex-col">
      {currentStep !== "complete" && (
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>
              Step {currentIndex + 1} of {steps.length - 1}
            </span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={1}>
          {currentStep === "interest" && (
            <motion.div
              key="interest"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What brings you to HNL today?</h2>
              <p className="text-gray-600 mb-8">Select the area you're most interested in</p>

              <div className="grid gap-3">
                {interests.map((item) => {
                  const Icon = item.icon
                  const isSelected = formData.interest === item.id
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setFormData({ ...formData, interest: item.id })
                        setErrors({})
                        setTimeout(nextStep, 300)
                      }}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                      {isSelected && <Check className="h-5 w-5 text-primary" />}
                    </button>
                  )
                })}
              </div>
              {errors.interest && <p className="text-red-500 text-sm mt-2">{errors.interest}</p>}
            </motion.div>
          )}

          {currentStep === "contact" && (
            <motion.div
              key="contact"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              transition={{ duration: 0.3 }}
              onKeyPress={handleKeyPress}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Great choice! Let's get to know you.</h2>
              <p className="text-gray-600 mb-8">We'll use this to personalize your experience</p>

              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4" />
                    Your Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={`text-lg py-6 ${errors.name ? "border-red-500" : ""}`}
                    autoFocus
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className={`text-lg py-6 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className={`text-lg py-6 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === "company" && (
            <motion.div
              key="company"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              transition={{ duration: 0.3 }}
              onKeyPress={handleKeyPress}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Tell us about your organization</h2>
              <p className="text-gray-600 mb-8">This helps us provide relevant solutions (optional)</p>

              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Building2 className="h-4 w-4" />
                    Company Name
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    className="text-lg py-6"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">Industry</label>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        onClick={() => setFormData({ ...formData, industry: ind })}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.industry === ind
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === "message" && (
            <motion.div
              key="message"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Almost there! What can we help with?</h2>
              <p className="text-gray-600 mb-8">Describe your requirements or questions</p>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="h-4 w-4" />
                  Your Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="I'm looking for... / I need help with... / I have questions about..."
                  className={`text-lg min-h-[180px] ${errors.message ? "border-red-500" : ""}`}
                  autoFocus
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </motion.div>
          )}

          {currentStep === "complete" && (
            <motion.div
              key="complete"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Thank you, {formData.name.split(" ")[0]}!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We've received your inquiry and our team will get back to you within 24 hours at{" "}
                <span className="font-medium text-gray-900">{formData.email}</span>
              </p>

              <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto text-left">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Our team reviews your inquiry
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>A specialist will contact you within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    We'll discuss your requirements and propose solutions
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {currentStep !== "complete" && currentStep !== "interest" && (
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
            ) : currentStep === "message" ? (
              <>
                Submit Inquiry
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
