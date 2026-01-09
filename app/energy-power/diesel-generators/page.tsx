"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceEstimator } from "@/components/service-estimator"
import { FAQSection } from "@/components/faq-section"
import { formatCurrency } from "@/lib/format-currency"
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Zap,
  Clock,
  Award,
  Shield,
  Wrench,
  Fuel,
  Settings,
  Building2,
  Factory,
  Radio,
  Hospital,
} from "lucide-react"

const stats = [
  { value: "10,000+", label: "Generators Sold", icon: Zap },
  { value: "10-2000", label: "kVA Range", icon: Settings },
  { value: "99.5%", label: "Uptime Guarantee", icon: Award },
  { value: "24/7", label: "O&M Support", icon: Clock },
]

const generatorRanges = [
  {
    id: "small",
    name: "Small",
    fullName: "Small Range (15-100 kVA)",
    description: "Compact generators for homes, small businesses, and retail outlets",
    applications: ["Homes", "Small shops", "Medical clinics", "Branch offices"],
    features: ["Compact design", "Low noise operation", "Fuel efficient", "Easy installation"],
    models: [
      { model: "A-15", kva: 15, fuel: "3.5 L/hr", price: "0.45 Million PKR" },
      { model: "A-30", kva: 30, fuel: "6.8 L/hr", price: "0.72 Million PKR" },
      { model: "A-50", kva: 50, fuel: "10.5 L/hr", price: "0.98 Million PKR" },
      { model: "A-100", kva: 100, fuel: "18 L/hr", price: "1.45 Million PKR" },
    ],
    image: "/small-diesel-generator-canopy.jpg",
  },
  {
    id: "medium",
    name: "Medium",
    fullName: "Medium Range (100-500 kVA)",
    description: "Reliable power for commercial buildings, factories, and telecom infrastructure",
    applications: ["Commercial buildings", "Factories", "Telecom sites", "Hotels"],
    features: ["Industrial-grade engine", "Remote monitoring", "Parallel operation", "Extended runtime tanks"],
    models: [
      { model: "P-150", kva: 150, fuel: "28 L/hr", price: "2.1 Million PKR" },
      { model: "P-250", kva: 250, fuel: "45 L/hr", price: "3.2 Million PKR" },
      { model: "P-350", kva: 350, fuel: "62 L/hr", price: "4.1 Million PKR" },
      { model: "P-500", kva: 500, fuel: "85 L/hr", price: "5.5 Million PKR" },
    ],
    image: "/medium-diesel-generator-industrial.jpg",
  },
  {
    id: "large",
    name: "Large",
    fullName: "Large Range (500-2000 kVA)",
    description: "Heavy-duty generators for data centers, industrial plants, and large facilities",
    applications: ["Data centers", "Manufacturing plants", "Hospitals", "Large complexes"],
    features: ["N+1 redundancy capable", "Load bank tested", "Advanced protection", "SCADA integration"],
    models: [
      { model: "P-750", kva: 750, fuel: "120 L/hr", price: "8.5 Million PKR" },
      { model: "P-1000", kva: 1000, fuel: "160 L/hr", price: "12 Million PKR" },
      { model: "P-1500", kva: 1500, fuel: "230 L/hr", price: "18.5 Million PKR" },
      { model: "P-2000", kva: 2000, fuel: "300 L/hr", price: "25 Million PKR" },
    ],
    image: "/large-diesel-generator-industrial.jpg",
  },
]

const applications = [
  {
    name: "Telecom Sites",
    icon: Radio,
    description: "25-100 kVA for BTS/NOC with auto-start and remote monitoring",
    features: ["Automatic startup on grid failure", "Remote monitoring integration", "Fuel theft prevention"],
  },
  {
    name: "Data Centers",
    icon: Building2,
    description: "500-2000 kVA with N+1 redundancy for mission-critical IT",
    features: ["Parallel operation capability", "Load bank tested", "99.999% uptime SLA support"],
  },
  {
    name: "Industrial Facilities",
    icon: Factory,
    description: "200-1000 kVA for manufacturing with continuous run capability",
    features: ["High starting current capability", "Continuous run capability", "PLC integration"],
  },
  {
    name: "Healthcare",
    icon: Hospital,
    description: "50-500 kVA for hospitals with instant transfer and redundancy",
    features: ["Critical load priority", "Instant ATS changeover", "Dual generator backup"],
  },
]

const deliveryProcess = [
  {
    step: "1",
    title: "Load Assessment",
    description: "Detailed load profile analysis and sizing calculations",
    duration: "1-2 days",
  },
  {
    step: "2",
    title: "Solution Design",
    description: "Generator selection, site planning, and commercial proposal",
    duration: "3-5 days",
  },
  {
    step: "3",
    title: "Procurement",
    description: "Factory order, testing, and delivery to site",
    duration: "4-8 weeks",
  },
  {
    step: "4",
    title: "Installation",
    description: "Civil works, electrical connections, fuel and exhaust systems",
    duration: "1-2 weeks",
  },
  {
    step: "5",
    title: "Commissioning",
    description: "Load testing, protection verification, and handover",
    duration: "2-3 days",
  },
]

const oemPartners = [
  { name: "AGG Power", logo: "/agg-power-logo.jpg", type: "Sole Authorized Distributor" },
  { name: "Perkins", logo: "/perkins-logo.jpg", type: "OEM Partner" },
  { name: "Cummins", logo: "/cummins-logo.jpg", type: "OEM Partner" },
  { name: "Deep Sea", logo: "/deep-sea-logo.jpg", type: "Controller Partner" },
]

const faqs = [
  {
    question: "What generator brands does HNL offer?",
    answer:
      "HNL is the sole authorized distributor for AGG Power generators in Pakistan, powered by Perkins and Cummins engines. We offer models from 10 kVA to 2000 kVA with full warranty and nationwide spare parts support.",
  },
  {
    question: "How do I determine the right generator size for my facility?",
    answer:
      "Generator sizing requires analysis of total connected load, inrush currents (motors, AC units), load diversity factor, and future expansion plans. HNL provides free on-site load assessment and detailed sizing recommendations.",
  },
  {
    question: "What is the typical delivery and installation timeline?",
    answer:
      "Stock generators (up to 500 kVA) typically deliver in 2-4 weeks with installation in 1-2 weeks. Larger or custom generators may require 6-10 weeks lead time. Emergency rental units available for immediate needs.",
  },
  {
    question: "Do you provide O&M contracts for generators?",
    answer:
      "Yes, HNL offers comprehensive O&M contracts including scheduled servicing, oil and filter changes, load bank testing, 24/7 breakdown support with guaranteed response times, and fuel management services.",
  },
  {
    question: "What warranty coverage do HNL generators come with?",
    answer:
      "All AGG Power generators come with 2-year or 2000 hours warranty (whichever comes first) covering engine, alternator, and control panel. Extended warranty options available up to 5 years.",
  },
  {
    question: "Can generators be integrated with solar/BESS systems?",
    answer:
      "Yes, HNL specializes in hybrid power systems. Generators can be configured to work with solar panels and battery storage, reducing fuel consumption by 60-70% while maintaining 100% backup reliability.",
  },
  {
    question: "What fuel consumption can I expect?",
    answer:
      "Fuel consumption depends on generator size and load factor. At 75% load: 15 kVA uses ~3.5 L/hr, 100 kVA uses ~18 L/hr, 500 kVA uses ~85 L/hr. HNL provides detailed fuel projections during sizing.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "HNL partners with leasing companies to offer equipment financing. Options include outright purchase, lease-to-own, and rental models. Contact our sales team for customized financing solutions.",
  },
]

const estimatorFields = [
  {
    id: "loadKva",
    label: "Required Load (kVA)",
    type: "slider" as const,
    min: 10,
    max: 2000,
    step: 10,
    unit: "kVA",
    defaultValue: 100,
  },
  {
    id: "application",
    label: "Application Type",
    type: "select" as const,
    options: [
      { value: "commercial", label: "Commercial/Office", multiplier: 1.0 },
      { value: "industrial", label: "Industrial/Factory", multiplier: 1.15 },
      { value: "telecom", label: "Telecom/BTS", multiplier: 1.1 },
      { value: "datacenter", label: "Data Center", multiplier: 1.25 },
      { value: "healthcare", label: "Healthcare", multiplier: 1.2 },
    ],
    defaultValue: "commercial",
  },
  {
    id: "canopyType",
    label: "Enclosure Type",
    type: "select" as const,
    options: [
      { value: "open", label: "Open Frame", multiplier: 1.0 },
      { value: "canopy", label: "Soundproof Canopy", multiplier: 1.15 },
      { value: "container", label: "Container Mounted", multiplier: 1.3 },
    ],
    defaultValue: "canopy",
  },
  {
    id: "installation",
    label: "Installation Scope",
    type: "select" as const,
    options: [
      { value: "supply", label: "Supply Only", multiplier: 1.0 },
      { value: "basic", label: "Supply + Basic Install", multiplier: 1.15 },
      { value: "turnkey", label: "Turnkey (Civil + Electrical)", multiplier: 1.35 },
    ],
    defaultValue: "basic",
  },
  {
    id: "ats",
    label: "ATS/AMF Panel",
    type: "select" as const,
    options: [
      { value: "no", label: "Not Required", multiplier: 1.0 },
      { value: "basic", label: "Basic ATS", multiplier: 1.08 },
      { value: "advanced", label: "Advanced AMF with Monitoring", multiplier: 1.15 },
    ],
    defaultValue: "basic",
  },
]

const calculateGeneratorEstimate = (values: Record<string, string | number>) => {
  const loadKva = values.loadKva as number

  // Base price per kVA (decreases with size)
  let baseRatePerKva = 18000
  if (loadKva > 500) baseRatePerKva = 14000
  else if (loadKva > 200) baseRatePerKva = 15000
  else if (loadKva > 100) baseRatePerKva = 16000

  const appMultipliers: Record<string, number> = {
    commercial: 1.0,
    industrial: 1.15,
    telecom: 1.1,
    datacenter: 1.25,
    healthcare: 1.2,
  }
  const canopyMultipliers: Record<string, number> = { open: 1.0, canopy: 1.15, container: 1.3 }
  const installMultipliers: Record<string, number> = { supply: 1.0, basic: 1.15, turnkey: 1.35 }
  const atsMultipliers: Record<string, number> = { no: 1.0, basic: 1.08, advanced: 1.15 }

  const appMult = appMultipliers[values.application as string] || 1
  const canopyMult = canopyMultipliers[values.canopyType as string] || 1
  const installMult = installMultipliers[values.installation as string] || 1
  const atsMult = atsMultipliers[values.ats as string] || 1

  const totalCost = baseRatePerKva * loadKva * appMult * canopyMult * installMult * atsMult

  const lowEstimate = Math.round(totalCost * 0.9)
  const highEstimate = Math.round(totalCost * 1.1)

  return {
    lowEstimate,
    highEstimate,
    timeline: loadKva > 500 ? "6-10 weeks" : "3-6 weeks",
    breakdown: [
      { label: `${loadKva} kVA Generator`, value: formatCurrency(Math.round(baseRatePerKva * loadKva)) },
      { label: "Enclosure/Canopy", value: `+${Math.round((canopyMult - 1) * 100)}%` },
      { label: "Installation scope", value: `+${Math.round((installMult - 1) * 100)}%` },
      { label: "ATS/AMF Panel", value: `+${Math.round((atsMult - 1) * 100)}%` },
    ],
  }
}

export default function DieselGeneratorsPage() {
  const [activeTab, setActiveTab] = useState("small")

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="gen-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#gen-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Energy & Power Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Diesel Generators
              <span className="text-red-500"> 10-2000 kVA</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Industrial-grade diesel generators from AGG Power with Perkins and Cummins engines. Pakistan's trusted
              backup power solution for telecom, data centers, and industrial facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Generator Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Free Load Assessment
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 mb-3">
                    <stat.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Hook */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/diesel-generator-installation-site.jpg"
                alt="Diesel generator installation"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">99.5%</div>
                    <div className="text-sm text-zinc-500">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">AGG</div>
                <div className="text-sm opacity-90">Sole Distributor</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why Diesel Generators for Pakistan?</h2>
              <p className="text-lg text-zinc-600 mb-8">
                With frequent grid outages across Pakistan, reliable backup power isn't optional - it's essential.
                Diesel generators provide proven, cost-effective power backup for any load size with decades of
                operational reliability.
              </p>

              <div className="space-y-4">
                {[
                  "10-second startup time for instant power restoration",
                  "15-20 year lifespan with proper maintenance",
                  "Fuel available nationwide - no infrastructure dependency",
                  "Scalable from 10 kVA office to 2000 kVA industrial",
                  "Hybrid-ready: Integrate with solar and BESS for fuel savings",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Range Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Generator Range</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Complete range from compact office backup to heavy industrial power plants
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {generatorRanges.map((range) => (
                <TabsTrigger
                  key={range.id}
                  value={range.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{range.name}</div>
                    <div className="text-xs opacity-80">
                      {range.id === "small" ? "15-100 kVA" : range.id === "medium" ? "100-500 kVA" : "500-2000 kVA"}
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {generatorRanges.map((range) => (
              <TabsContent key={range.id} value={range.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{range.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{range.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Applications</h4>
                          <div className="flex flex-wrap gap-2">
                            {range.applications.map((app, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {range.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-zinc-900 mb-3">Popular Models</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-2">Model</th>
                                  <th className="text-right py-2">kVA</th>
                                  <th className="text-right py-2">Fuel/hr</th>
                                  <th className="text-right py-2">From</th>
                                </tr>
                              </thead>
                              <tbody>
                                {range.models.map((model, idx) => (
                                  <tr key={idx} className="border-b border-zinc-100">
                                    <td className="py-2 font-medium">{model.model}</td>
                                    <td className="text-right">{model.kva}</td>
                                    <td className="text-right">{model.fuel}</td>
                                    <td className="text-right text-red-600 font-semibold">{model.price}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto bg-zinc-100">
                        <Image
                          src={range.image || "/placeholder.svg"}
                          alt={range.fullName}
                          fill
                          className="object-cover rounded-r-xl"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Tailored generator solutions for every sector</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 hover:border-red-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <app.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{app.name}</h3>
                <p className="text-sm text-zinc-600 mb-4">{app.description}</p>
                <ul className="space-y-1">
                  {app.features.map((feature, i) => (
                    <li key={i} className="text-xs text-zinc-500 flex items-start gap-1">
                      <span className="text-red-500 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Delivery Process</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">From assessment to commissioning in 3-10 weeks</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {deliveryProcess.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-white mb-1 text-sm">{step.title}</h3>
                    <p className="text-xs text-zinc-400 mb-2">{step.description}</p>
                    <span className="text-xs text-red-400">{step.duration}</span>
                  </div>
                  {idx < deliveryProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-zinc-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="Generator Cost Estimator"
        description="Get an instant budget estimate for your diesel generator requirement"
        fields={estimatorFields}
        calculateEstimate={calculateGeneratorEstimate}
        serviceName="Diesel Generator"
        whatsappNumber="+923001234567"
      />

      {/* OEM Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">OEM Partnerships</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Authorized distributor and certified partner for leading brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {oemPartners.map((partner, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-6 text-center border border-zinc-100">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-zinc-900">{partner.name}</h3>
                <p className="text-xs text-red-600 mt-1">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O&M Services */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Generator O&M Services</h2>
                <p className="text-lg text-zinc-600 mb-8">
                  Maximize uptime and extend equipment life with HNL's comprehensive maintenance programs. From
                  scheduled servicing to 24/7 emergency support.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 border border-zinc-100">
                    <Wrench className="w-8 h-8 text-red-600 mb-2" />
                    <h4 className="font-bold text-zinc-900">Preventive</h4>
                    <p className="text-sm text-zinc-500">Scheduled maintenance per OEM guidelines</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-zinc-100">
                    <Shield className="w-8 h-8 text-red-600 mb-2" />
                    <h4 className="font-bold text-zinc-900">24/7 Support</h4>
                    <p className="text-sm text-zinc-500">Emergency response with SLA guarantee</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-zinc-100">
                    <Fuel className="w-8 h-8 text-red-600 mb-2" />
                    <h4 className="font-bold text-zinc-900">Fuel Management</h4>
                    <p className="text-sm text-zinc-500">Monitoring and theft prevention</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-zinc-100">
                    <Settings className="w-8 h-8 text-red-600 mb-2" />
                    <h4 className="font-bold text-zinc-900">Load Testing</h4>
                    <p className="text-sm text-zinc-500">Annual load bank verification</p>
                  </div>
                </div>

                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/energy-power/energy-operations-maintenance">
                    Learn About O&M Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">O&M Cost Calculator</h3>
                <p className="text-zinc-400 mb-6">Typical annual O&M costs based on generator size:</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                    <span>50-100 kVA</span>
                    <span className="text-red-400 font-bold">PKR 180,000 - 300,000/yr</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                    <span>100-300 kVA</span>
                    <span className="text-red-400 font-bold">PKR 350,000 - 600,000/yr</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                    <span>300-500 kVA</span>
                    <span className="text-red-400 font-bold">PKR 600,000 - 900,000/yr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>500+ kVA</span>
                    <span className="text-red-400 font-bold">Custom Quote</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 mt-6">
                  * Includes quarterly PM, consumables, and 24/7 support. Parts extra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-red-600 text-white p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Generator?</h2>
                  <p className="text-red-100 mb-6">
                    Get expert advice on sizing, pricing, and delivery for your specific requirements.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 21 111 000 HNL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5" />
                      <span>generators@hnl.com.pk</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Free Load Assessment</h3>
                  <p className="text-zinc-600 mb-6">
                    Our engineers will analyze your load and recommend the right generator size.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Request Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-300 bg-transparent">
                      <Phone className="mr-2 w-4 h-4" />
                      Talk to Expert
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
