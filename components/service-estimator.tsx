"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calculator, MessageCircle, Phone, CheckCircle2 } from "lucide-react"
import { formatCurrency } from "@/lib/format-currency"

interface EstimatorField {
  id: string
  label: string
  type: "select" | "number" | "slider" | "text"
  options?: { value: string; label: string; multiplier?: number }[]
  min?: number
  max?: number
  step?: number
  unit?: string
  defaultValue?: string | number
}

interface ServiceEstimatorProps {
  title: string
  description: string
  fields: EstimatorField[]
  calculateEstimate: (values: Record<string, string | number>) => {
    lowEstimate: number
    highEstimate: number
    timeline: string
    breakdown: { label: string; value: string }[]
  }
  serviceName: string
  whatsappNumber?: string
}

export function ServiceEstimator({
  title,
  description,
  fields,
  calculateEstimate,
  serviceName,
  whatsappNumber = "+923001234567",
}: ServiceEstimatorProps) {
  const [values, setValues] = useState<Record<string, string | number>>(() => {
    const initial: Record<string, string | number> = {}
    fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        initial[field.id] = field.defaultValue
      } else if (field.type === "number" || field.type === "slider") {
        initial[field.id] = field.min || 0
      } else {
        initial[field.id] = ""
      }
    })
    return initial
  })

  const [showResults, setShowResults] = useState(false)
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")

  const handleCalculate = () => {
    setShowResults(true)
  }

  const estimate = calculateEstimate(values)

  const generateWhatsAppMessage = () => {
    let message = `Hi, I'm interested in ${serviceName} services.\n\n`
    message += `*Estimate Request:*\n`
    fields.forEach((field) => {
      const value = values[field.id]
      if (value) {
        message += `- ${field.label}: ${value}${field.unit ? ` ${field.unit}` : ""}\n`
      }
    })
    message += `\n*Estimated Budget:* ${formatCurrency(estimate.lowEstimate)} - ${formatCurrency(estimate.highEstimate)}\n`
    message += `*Timeline:* ${estimate.timeline}\n`
    if (contactName) message += `\n*Name:* ${contactName}`
    if (contactPhone) message += `\n*Phone:* ${contactPhone}`
    return encodeURIComponent(message)
  }

  const handleWhatsApp = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
              <Calculator className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-600">Instant Estimate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">{title}</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="border-2 border-zinc-200 shadow-lg">
              <CardHeader className="border-b border-zinc-100 bg-zinc-50">
                <CardTitle className="text-xl">Project Requirements</CardTitle>
                <CardDescription>Fill in your project details for an instant estimate</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {fields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id} className="text-sm font-medium text-zinc-700">
                      {field.label}
                    </Label>

                    {field.type === "select" && (
                      <Select
                        value={values[field.id] as string}
                        onValueChange={(v) => setValues({ ...values, [field.id]: v })}
                      >
                        <SelectTrigger id={field.id} className="w-full">
                          <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    {field.type === "number" && (
                      <div className="flex items-center gap-2">
                        <Input
                          id={field.id}
                          type="number"
                          min={field.min}
                          max={field.max}
                          step={field.step || 1}
                          value={values[field.id]}
                          onChange={(e) => setValues({ ...values, [field.id]: Number(e.target.value) })}
                          className="flex-1"
                        />
                        {field.unit && <span className="text-sm text-zinc-500 min-w-[60px]">{field.unit}</span>}
                      </div>
                    )}

                    {field.type === "slider" && (
                      <div className="space-y-3">
                        <Slider
                          id={field.id}
                          min={field.min || 0}
                          max={field.max || 100}
                          step={field.step || 1}
                          value={[values[field.id] as number]}
                          onValueChange={([v]) => setValues({ ...values, [field.id]: v })}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-zinc-500">
                          <span>
                            {field.min} {field.unit}
                          </span>
                          <span className="font-semibold text-zinc-900">
                            {values[field.id]} {field.unit}
                          </span>
                          <span>
                            {field.max} {field.unit}
                          </span>
                        </div>
                      </div>
                    )}

                    {field.type === "text" && (
                      <Input
                        id={field.id}
                        type="text"
                        value={values[field.id]}
                        onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}

                <Button
                  onClick={handleCalculate}
                  className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Estimate
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card
              className={`border-2 shadow-lg transition-all duration-300 ${showResults ? "border-red-200 bg-gradient-to-br from-red-50 to-white" : "border-zinc-200 bg-zinc-50"}`}
            >
              <CardHeader className="border-b border-zinc-100">
                <CardTitle className="text-xl">Your Estimate</CardTitle>
                <CardDescription>Based on your project requirements</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {showResults ? (
                  <div className="space-y-6">
                    {/* Estimate Range */}
                    <div className="text-center p-6 bg-white rounded-xl border border-red-100">
                      <p className="text-sm text-zinc-500 mb-2">Estimated Investment</p>
                      <p className="text-3xl md:text-4xl font-bold text-zinc-900">
                        {formatCurrency(estimate.lowEstimate)}
                        <span className="text-zinc-400 mx-2">-</span>
                        {formatCurrency(estimate.highEstimate)}
                      </p>
                      <p className="text-sm text-zinc-500 mt-2">Timeline: {estimate.timeline}</p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-zinc-700">Includes:</p>
                      {estimate.breakdown.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-zinc-600">{item.label}</span>
                          <span className="ml-auto font-medium text-zinc-900">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-3 pt-4 border-t border-zinc-200">
                      <p className="text-sm font-semibold text-zinc-700">Share this estimate:</p>
                      <Input
                        placeholder="Your Name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                      />
                      <Input
                        placeholder="Phone Number"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 text-white h-12">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Expert
                      </Button>
                    </div>

                    <p className="text-xs text-center text-zinc-500">
                      This is an indicative estimate. Final pricing depends on site survey and detailed requirements.
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center mb-4">
                      <Calculator className="w-8 h-8 text-zinc-400" />
                    </div>
                    <p className="text-zinc-500">
                      Fill in your project details and click calculate to see your estimate
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
