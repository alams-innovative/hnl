"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageSquare } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"

export function RFQForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: "",
    email: "",
    phone: "",
    company: "",
    // Step 2: Service Selection
    division: "",
    services: [] as string[],
    // Step 3: Project Details
    timeline: "",
    budget: "",
    description: "",
  })

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API endpoint
    console.log("RFQ Submitted:", formData)
    alert("Thank you! We will contact you within 24 hours.")
  }

  const isStep1Valid = formData.name && formData.email && formData.phone && formData.company
  const isStep2Valid = formData.division && formData.services.length > 0
  const isStep3Valid = formData.timeline && formData.description

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Indicator */}
      <div className="mb-8 flex items-center justify-between">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-1 items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                step >= s ? "border-hnl-red bg-hnl-red text-white" : "border-gray-300 text-gray-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className={`h-0.5 flex-1 ${step > s ? "bg-hnl-red" : "bg-gray-300"}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Contact Information</h3>
              <p className="text-gray-600 mb-6">Let us know who you are so we can reach you.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ali Khan"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="ali@company.com.pk"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+92 300 1234567"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your Company"
                  required
                />
              </div>
            </div>

            <Button type="button" onClick={() => setStep(2)} disabled={!isStep1Valid} className="w-full">
              Continue to Service Selection
            </Button>
          </div>
        )}

        {/* Step 2: Service Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Select Services</h3>
              <p className="text-gray-600 mb-6">Choose the division and specific services you need.</p>
            </div>

            <div>
              <Label htmlFor="division">Service Division *</Label>
              <Select value={formData.division} onValueChange={(value) => handleInputChange("division", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="telecom">Telecom Infrastructure</SelectItem>
                  <SelectItem value="energy">Energy & Power</SelectItem>
                  <SelectItem value="software">Software, Cloud & AI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.division && (
              <div className="space-y-3">
                <Label>Services Needed *</Label>
                {formData.division === "telecom" && (
                  <>
                    {["Fiber Rollout", "Civil Works", "Site Integration", "O&M", "NOC Monitoring"].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label htmlFor={service} className="cursor-pointer text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </>
                )}
                {formData.division === "energy" && (
                  <>
                    {["Diesel Generators", "BESS", "Hybrid Power Systems", "EPC Solutions", "Energy O&M"].map(
                      (service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={() => handleServiceToggle(service)}
                          />
                          <label htmlFor={service} className="cursor-pointer text-sm">
                            {service}
                          </label>
                        </div>
                      ),
                    )}
                  </>
                )}
                {formData.division === "software" && (
                  <>
                    {[
                      "Cloud Migration",
                      "Enterprise IT Services",
                      "AI Agents",
                      "Big Data Analytics",
                      "ICT Infrastructure",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label htmlFor={service} className="cursor-pointer text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button type="button" onClick={() => setStep(3)} disabled={!isStep2Valid} className="flex-1">
                Continue to Project Details
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Project Details */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Project Details</h3>
              <p className="text-gray-600 mb-6">Tell us about your project timeline and requirements.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="timeline">Project Timeline *</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                    <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                    <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                    <SelectItem value="long">Long-term (6+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Under PKR 5M</SelectItem>
                    <SelectItem value="medium">PKR 5M - 20M</SelectItem>
                    <SelectItem value="large">PKR 20M - 50M</SelectItem>
                    <SelectItem value="enterprise">PKR 50M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Tell us about your project requirements, scope, and any specific challenges..."
                rows={6}
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                Back
              </Button>
              <Button type="submit" disabled={!isStep3Valid} className="flex-1">
                Submit Request for Quote
              </Button>
            </div>
          </div>
        )}
      </form>

      {/* Quick WhatsApp Option */}
      <div className="mt-8 border-t pt-8">
        <p className="mb-4 text-center text-sm text-gray-600">Prefer to discuss directly?</p>
        <a
          href={getWhatsAppLink({
            action: "RFQ",
            page: "Contact Form",
            section: "Quick Contact",
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-hnl-red px-6 py-3 font-semibold text-hnl-red transition-colors hover:bg-hnl-red hover:text-white"
        >
          <MessageSquare className="h-5 w-5" />
          Chat on WhatsApp Instead
        </a>
      </div>
    </div>
  )
}
