"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceEstimator } from "@/components/service-estimator"
import { FAQSection } from "@/components/faq-section"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Radio, Clock, Award, Target } from "lucide-react"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "1,200+", label: "Sites Integrated", icon: Radio },
  { value: "5-7", label: "Days Per Site", icon: Clock },
  { value: "99.2%", label: "First-Pass Rate", icon: Target },
  { value: "All Vendors", label: "Supported", icon: Award },
]

const technologies = [
  {
    id: "4g",
    name: "4G LTE",
    fullName: "4G LTE Network Integration",
    description: "Complete LTE site deployment including eNodeB installation, RF optimization, and network integration",
    features: ["eNodeB installation", "Antenna & RRU setup", "RF optimization", "Core integration"],
    bands: ["Band 1 (2100 MHz)", "Band 3 (1800 MHz)", "Band 8 (900 MHz)", "Band 40 (TDD 2300 MHz)"],
    image: "/4g-lte-bts-installation-pakistan.jpg",
  },
  {
    id: "5g",
    name: "5G NR",
    fullName: "5G New Radio Deployment",
    description: "Next-generation 5G network rollout with massive MIMO and advanced RF engineering",
    features: ["gNodeB setup", "Massive MIMO antennas", "Beamforming optimization", "NSA/SA integration"],
    bands: ["n78 (3.5 GHz)", "n41 (2.5 GHz)", "n1 (2100 MHz)", "n28 (700 MHz)"],
    image: "/5g-nr-massive-mimo-installation.jpg",
  },
  {
    id: "microwave",
    name: "Microwave",
    fullName: "Microwave Transmission Links",
    description: "Point-to-point and ring microwave network deployment for backhaul connectivity",
    features: ["Link planning", "Antenna alignment", "IDU/ODU installation", "Path optimization"],
    bands: ["6-42 GHz range", "E-band (70/80 GHz)", "Multi-band support", "1+1 protection"],
    image: "/microwave-transmission-link-installation.jpg",
  },
  {
    id: "small-cell",
    name: "Small Cells",
    fullName: "Small Cell & DAS Deployment",
    description: "Indoor and outdoor small cell solutions for capacity and coverage enhancement",
    features: ["Site acquisition", "Power provisioning", "Fiber backhaul", "Network integration"],
    bands: ["All LTE/5G bands", "Indoor/Outdoor", "Strand mount", "Pole mount"],
    image: "/small-cell-das-installation-urban.jpg",
  },
]

const vendorExpertise = [
  { vendor: "Huawei", certifications: "SingleRAN, AAU, BBU5900", experience: "500+ sites" },
  { vendor: "Nokia", certifications: "AirScale, AEQE, Flexi Zone", experience: "350+ sites" },
  { vendor: "Ericsson", certifications: "Radio System, Baseband 6630", experience: "200+ sites" },
  { vendor: "ZTE", certifications: "UniSite, ZXSDR", experience: "100+ sites" },
  { vendor: "Samsung", certifications: "Compact Macro, 5G Radio", experience: "50+ sites" },
]

const integrationProcess = [
  {
    step: "01",
    title: "Site Acceptance",
    description: "Pre-integration checks including civil readiness, power availability, and transmission connectivity",
    duration: "Day 1",
    checklist: ["Civil completion verified", "Power system tested", "Transmission ready", "Safety clearance"],
  },
  {
    step: "02",
    title: "Equipment Installation",
    description: "Hardware mounting, cabling, and antenna installation per vendor specifications",
    duration: "Days 2-3",
    checklist: ["BBU/Cabinet install", "RRU mounting", "Antenna installation", "Cabling complete"],
  },
  {
    step: "03",
    title: "Commissioning",
    description: "Software loading, parameter configuration, and initial system testing",
    duration: "Days 4-5",
    checklist: ["Software loaded", "Parameters set", "Alarms cleared", "Initial tests passed"],
  },
  {
    step: "04",
    title: "RF Optimization",
    description: "Drive testing, coverage verification, and performance optimization",
    duration: "Days 5-6",
    checklist: ["Drive test complete", "Coverage verified", "KPIs optimized", "Neighbors configured"],
  },
  {
    step: "05",
    title: "On-Air & Handover",
    description: "Final acceptance testing and handover to NOC for monitoring",
    duration: "Day 7",
    checklist: ["ATP signed", "NOC handover", "Documentation complete", "Warranty starts"],
  },
]

const kpiTargets = [
  { metric: "RSRP Coverage", target: "> -105 dBm", achieved: "-98 dBm avg" },
  { metric: "SINR Quality", target: "> 3 dB", achieved: "8 dB avg" },
  { metric: "Call Setup Success", target: "> 98%", achieved: "99.5%" },
  { metric: "Handover Success", target: "> 99%", achieved: "99.8%" },
  { metric: "Throughput (DL)", target: "> 50 Mbps", achieved: "75 Mbps avg" },
  { metric: "First-Pass Rate", target: "> 95%", achieved: "99.2%" },
]

const faqs = [
  {
    question: "What equipment vendors does HNL support for site integration?",
    answer:
      "HNL has certified expertise across all major vendors: Huawei (SingleRAN, AAU, BBU5900), Nokia (AirScale, Flexi Zone), Ericsson (Radio System, Baseband), ZTE (UniSite, ZXSDR), and Samsung (Compact Macro, 5G). Our teams maintain current certifications through vendor training programs.",
  },
  {
    question: "How long does typical BTS installation and commissioning take?",
    answer:
      "A standard greenfield 4G LTE site takes 5-7 days from equipment arrival to on-air. This includes installation (2 days), commissioning (2 days), RF optimization (1-2 days), and handover. Co-location and modernization projects may take less time.",
  },
  {
    question: "Do you provide RF optimization and drive testing?",
    answer:
      "Yes, comprehensive RF optimization is included in every integration project. Our RF engineers perform drive testing, parameter tuning, neighbor optimization, and coverage verification. We deliver complete drive test reports with recommendations.",
  },
  {
    question: "Can you handle multi-technology co-location?",
    answer:
      "Absolutely. HNL specializes in multi-technology and multi-operator co-location projects. We manage equipment from multiple vendors on single sites and handle complex scenarios including 2G/3G/4G/5G shared infrastructure.",
  },
  {
    question: "What documentation do you provide after site integration?",
    answer:
      "Complete documentation package includes: As-built photos, equipment inventory, commissioning scripts, RF parameter files, drive test reports, KPI acceptance results, and warranty documentation. All records are provided digitally and in hard copy.",
  },
  {
    question: "Do you support 5G deployment in Pakistan?",
    answer:
      "Yes, HNL is ready for 5G deployment with trained teams on gNodeB installation, massive MIMO antennas, and NSA/SA network integration. We've completed 5G trials and are prepared for commercial rollout when spectrum is allocated.",
  },
  {
    question: "What is your first-pass acceptance rate?",
    answer:
      "HNL maintains a 99.2% first-pass acceptance rate - meaning sites meet all KPI targets on first ATP attempt. This is achieved through rigorous quality processes, experienced teams, and comprehensive pre-integration checks.",
  },
  {
    question: "Can you integrate small cells and DAS systems?",
    answer:
      "Yes, we provide complete small cell and DAS solutions for indoor/outdoor coverage enhancement. This includes site acquisition support, power provisioning, fiber backhaul installation, and network integration with macro layer.",
  },
]

const estimatorFields = [
  {
    id: "technology",
    label: "Technology",
    type: "select" as const,
    options: [
      { value: "4g", label: "4G LTE", multiplier: 1.0 },
      { value: "5g", label: "5G NR", multiplier: 1.5 },
      { value: "microwave", label: "Microwave Link", multiplier: 0.6 },
      { value: "small-cell", label: "Small Cell/DAS", multiplier: 0.8 },
    ],
    defaultValue: "4g",
  },
  {
    id: "siteType",
    label: "Site Type",
    type: "select" as const,
    options: [
      { value: "greenfield", label: "Greenfield (New Site)", multiplier: 1.0 },
      { value: "colocation", label: "Co-location", multiplier: 0.8 },
      { value: "modernization", label: "Modernization/Swap", multiplier: 0.7 },
      { value: "upgrade", label: "Capacity Upgrade", multiplier: 0.5 },
    ],
    defaultValue: "greenfield",
  },
  {
    id: "siteCount",
    label: "Number of Sites",
    type: "slider" as const,
    min: 1,
    max: 100,
    step: 1,
    unit: "sites",
    defaultValue: 10,
  },
  {
    id: "sectors",
    label: "Sectors per Site",
    type: "select" as const,
    options: [
      { value: "1", label: "1 Sector (Omni)", multiplier: 0.6 },
      { value: "3", label: "3 Sectors", multiplier: 1.0 },
      { value: "6", label: "6 Sectors", multiplier: 1.8 },
    ],
    defaultValue: "3",
  },
  {
    id: "rfOptimization",
    label: "RF Optimization Level",
    type: "select" as const,
    options: [
      { value: "basic", label: "Basic (Parameter Set)", multiplier: 1.0 },
      { value: "standard", label: "Standard (Drive Test)", multiplier: 1.2 },
      { value: "advanced", label: "Advanced (Full Optimization)", multiplier: 1.5 },
    ],
    defaultValue: "standard",
  },
]

const calculateIntegrationEstimate = (values: Record<string, string | number>) => {
  const siteCount = values.siteCount as number

  const techRates: Record<string, number> = { "4g": 180000, "5g": 280000, microwave: 120000, "small-cell": 150000 }
  const typeMultipliers: Record<string, number> = { greenfield: 1.0, colocation: 0.8, modernization: 0.7, upgrade: 0.5 }
  const sectorMultipliers: Record<string, number> = { "1": 0.6, "3": 1.0, "6": 1.8 }
  const rfMultipliers: Record<string, number> = { basic: 1.0, standard: 1.2, advanced: 1.5 }

  const baseRate = techRates[values.technology as string] || 180000
  const typeMult = typeMultipliers[values.siteType as string] || 1
  const sectorMult = sectorMultipliers[values.sectors as string] || 1
  const rfMult = rfMultipliers[values.rfOptimization as string] || 1

  const totalCost = baseRate * siteCount * typeMult * sectorMult * rfMult
  const lowEstimate = Math.round(totalCost * 0.9)
  const highEstimate = Math.round(totalCost * 1.1)

  const daysPerSite = values.technology === "5g" ? 8 : 6
  const timeline = Math.ceil((siteCount * daysPerSite) / 5 / 4) // teams of 5 sites per team per week

  return {
    lowEstimate,
    highEstimate,
    timeline: `${timeline}-${timeline + 2} weeks`,
    breakdown: [
      {
        label: `${siteCount} ${values.technology} site(s)`,
        value: formatCurrency(Math.round(baseRate * siteCount * typeMult)),
      },
      { label: `${values.sectors}-sector configuration`, value: `+${Math.round((sectorMult - 1) * 100)}%` },
      { label: "RF optimization level", value: `+${Math.round((rfMult - 1) * 100)}%` },
      { label: "Testing & commissioning", value: "Included" },
    ],
  }
}

export default function SiteIntegrationPage() {
  const [activeTab, setActiveTab] = useState("4g")

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="rf-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#rf-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Radio className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Telecom Infrastructure Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Site Integration &<span className="text-red-500"> RF Commissioning</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast, first-time-right BTS deployment for 4G LTE, 5G, and microwave networks. 1,200+ sites integrated with
              99.2% first-pass acceptance rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Integration Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to RF Expert
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
                src="/bts-site-integration-technician-working.jpg"
                alt="Site integration"
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
                    <div className="text-2xl font-bold text-zinc-900">99.2%</div>
                    <div className="text-sm text-zinc-500">First-Pass Rate</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">5-7</div>
                <div className="text-sm opacity-90">Days Per Site</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Multi-Vendor Expertise for Pakistan's Mobile Networks
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                With certified teams across all major equipment vendors, HNL delivers fast, quality site integrations.
                From 4G LTE to 5G-ready deployments, we get your sites on-air right the first time.
              </p>

              <div className="space-y-4">
                {[
                  "Certified on Huawei, Nokia, Ericsson, ZTE, and Samsung",
                  "Complete RF optimization with drive test validation",
                  "5-7 day installation-to-on-air turnaround",
                  "99.2% first-pass ATP acceptance rate",
                  "24/7 integration support and NOC handover",
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

      {/* Technologies Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Technologies We Integrate</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From 4G LTE to 5G and microwave - complete network integration capabilities
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {technologies.map((tech) => (
                <TabsTrigger
                  key={tech.id}
                  value={tech.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{tech.name}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {technologies.map((tech) => (
              <TabsContent key={tech.id} value={tech.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tech.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{tech.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Services Include</h4>
                          <div className="space-y-2">
                            {tech.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-zinc-900 mb-3">Supported Bands</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.bands.map((band, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {band}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={tech.image || "/placeholder.svg"}
                          alt={tech.fullName}
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

      {/* Vendor Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Vendor Expertise</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Certified teams across all major telecom equipment vendors
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {vendorExpertise.map((vendor, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 rounded-xl p-5 text-center border border-zinc-100 hover:border-red-200 transition-colors"
              >
                <div className="text-xl font-bold text-zinc-900 mb-2">{vendor.vendor}</div>
                <div className="text-xs text-zinc-500 mb-3">{vendor.certifications}</div>
                <div className="text-sm font-medium text-red-600">{vendor.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Integration Process</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              5-7 day process from site acceptance to on-air handover
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {integrationProcess.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
                {idx < integrationProcess.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-red-200" />
                )}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-zinc-100 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-zinc-600 mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.checklist.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded"
                      >
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Targets */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Targets We Deliver</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Every site is optimized to meet or exceed these KPI targets
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {kpiTargets.map((item, idx) => (
              <div key={idx} className="text-center p-5 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-2">{item.metric}</div>
                <div className="text-xl font-bold text-red-500 mb-1">{item.achieved}</div>
                <div className="text-xs text-zinc-600">Target: {item.target}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="Site Integration Cost Estimator"
        description="Get an instant estimate for BTS installation, commissioning, and RF optimization"
        fields={estimatorFields}
        calculateEstimate={calculateIntegrationEstimate}
        serviceName="Site Integration"
        whatsappNumber="+923001234567"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-red-600 text-white p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Deploy Sites?</h2>
                  <p className="text-red-100 mb-8">Get a detailed integration proposal from our RF engineering team.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>integration@hnl.com.pk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Offices in Karachi, Lahore, Islamabad</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-6">Request Integration Quote</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                      placeholder="Project Details (vendor, site count, technology)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12">
                      Submit Request
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
