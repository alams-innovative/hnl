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

export function SimplifiedRFQForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    division: "",
    services: [] as string[],
    timeline: "",
    budget: "",
    description: "",
  })

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
    console.log("RFQ Submitted:", formData)
    alert("Thank you! We will contact you within 24 hours.")
  }

  const servicesByDivision = {
    telecom: ["Fiber Rollout", "Civil Works", "Site Integration", "O&M", "NOC Monitoring"],
    energy: ["Diesel Generators", "BESS", "Hybrid Power Systems", "EPC Solutions", "Energy O&M"],
    software: ["Cloud Migration", "Enterprise IT Services", "AI Agents", "Big Data Analytics", "ICT Infrastructure"],
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Contact Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ali@company.com.pk"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 1234567"
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Company"
                required
              />
            </div>
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Service Selection</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="division">Service Division *</Label>
              <Select
                value={formData.division}
                onValueChange={(value) => setFormData({ ...formData, division: value, services: [] })}
              >
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
                <div className="grid grid-cols-2 gap-3">
                  {servicesByDivision[formData.division as keyof typeof servicesByDivision]?.map((service) => (
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
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Project Details</h3>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="timeline">Project Timeline *</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                >
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
                <Label htmlFor="budget">Estimated Budget</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range (optional)" />
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
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tell us about your project requirements, scope, location, and any specific challenges..."
                rows={6}
                required
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Submit Request for Quote
        </Button>
      </form>

      {/* Quick WhatsApp Option */}
      <div className="mt-8 border-t pt-8">
        <p className="mb-4 text-center text-sm text-gray-600">Prefer to discuss directly?</p>
        <a
          href={getWhatsAppLink({ action: "RFQ", page: "Contact Form" })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <MessageSquare className="h-5 w-5" />
          Chat on WhatsApp Instead
        </a>
      </div>
    </div>
  )
}
