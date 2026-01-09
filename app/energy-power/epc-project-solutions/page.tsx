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
  Phone,
  Building,
  Clock,
  Award,
  FileCheck,
  Users,
  Zap,
  Radio,
  Building2,
  Server,
  Factory,
  Shield,
} from "lucide-react"

const stats = [
  { value: "50+", label: "EPC Projects", icon: Building },
  { value: "120+", label: "MW Installed", icon: Zap },
  { value: "95%", label: "On-Time Delivery", icon: Clock },
  { value: "3,000+", label: "Sites Powered", icon: Award },
]

const projectTypes = [
  {
    id: "telecom",
    name: "Telecom Rollout",
    fullName: "Telecom Network Power Rollout",
    description: "End-to-end power infrastructure for 4G/5G network deployments",
    scope: ["Generators", "BESS", "Solar", "AC systems", "Earthing", "Distribution"],
    scale: "50-500 sites per project",
    timeline: "6-18 months",
    model: "Turnkey or Supply + Install",
    image: "/epc-telecom-site-deployment.jpg",
  },
  {
    id: "industrial",
    name: "Industrial",
    fullName: "Industrial Power Infrastructure",
    description: "Mission-critical power for factories, warehouses, and cold storage",
    scope: ["HT/LT distribution", "Generators", "ATS", "UPS", "Power factor correction"],
    scale: "500 kVA to 5 MVA",
    timeline: "3-9 months",
    model: "Design-Build or ESCO",
    image: "/epc-industrial-power-plant.jpg",
  },
  {
    id: "datacenter",
    name: "Data Center",
    fullName: "Data Center Power Infrastructure",
    description: "Tier II/III data center power with N+1 redundancy",
    scope: ["N+1 Generators", "UPS", "PDUs", "DCIM", "Cooling", "Fire suppression"],
    scale: "1-10 MW typical",
    timeline: "6-12 months",
    model: "Full EPC with SLA guarantees",
    image: "/epc-data-center-power.jpg",
  },
]

const epcProcess = [
  {
    phase: "1",
    title: "Feasibility & Design",
    duration: "2-4 weeks",
    deliverables: [
      "Site surveys",
      "Load calculations",
      "Equipment selection",
      "Engineering drawings",
      "Regulatory approvals",
    ],
  },
  {
    phase: "2",
    title: "Procurement",
    duration: "4-8 weeks",
    deliverables: ["Equipment sourcing", "Factory testing", "Logistics", "Customs clearance", "Warehousing"],
  },
  {
    phase: "3",
    title: "Civil & Electrical",
    duration: "2-6 weeks",
    deliverables: [
      "Site preparation",
      "Foundations",
      "Cable trenching",
      "Earthing",
      "Power distribution",
      "Control panels",
    ],
  },
  {
    phase: "4",
    title: "Mechanical & Integration",
    duration: "2-4 weeks",
    deliverables: ["Generator mounting", "BESS installation", "Solar structures", "Cooling systems", "Integration"],
  },
  {
    phase: "5",
    title: "Testing & Commissioning",
    duration: "1-2 weeks",
    deliverables: ["Load testing", "Protection testing", "Failover testing", "Training", "Handover", "O&M manuals"],
  },
  {
    phase: "6",
    title: "Post-Deployment",
    duration: "Ongoing",
    deliverables: ["Warranty management", "Preventive maintenance", "Remote monitoring", "Performance reporting"],
  },
]

const whyEpc = [
  {
    title: "Single-Point Accountability",
    description: "One contract, one invoice, one warranty. No coordination headaches between multiple vendors.",
    icon: FileCheck,
  },
  {
    title: "Faster Time-to-Deployment",
    description: "Parallel execution reduces project timelines by 30-40% compared to fragmented approach.",
    icon: Clock,
  },
  {
    title: "Cost Transparency",
    description: "Fixed-price or milestone-based pricing with no hidden markups or change-order surprises.",
    icon: Shield,
  },
  {
    title: "Quality Assurance",
    description: "Tier-1 equipment from vetted suppliers, installed to international standards with FAT/SAT.",
    icon: Award,
  },
]

const faqs = [
  {
    question: "What industries does HNL serve for EPC projects?",
    answer:
      "Telecom (4G/5G rollouts), industrial manufacturing, data centers, commercial real estate, healthcare, banking, and government infrastructure across Pakistan.",
  },
  {
    question: "Do you handle permits and regulatory approvals?",
    answer:
      "Yes. HNL manages all NOCs, environmental clearances, utility connections, and local government approvals as part of EPC scope.",
  },
  {
    question: "Can you work in remote or difficult-access locations?",
    answer:
      "Absolutely. HNL has deployed power infrastructure in remote areas of Balochistan, Gilgit-Baltistan, and AJK. We handle logistics, security, and local coordination.",
  },
  {
    question: "What payment terms do you offer for large projects?",
    answer:
      "Typically milestone-based: 20% advance, 50% during execution, 20% on commissioning, 10% after warranty period. Terms negotiable for long-term clients.",
  },
  {
    question: "Do you provide performance guarantees?",
    answer:
      "Yes. HNL provides performance bonds and guarantees for uptime, fuel efficiency, and load capacity as per contract SLAs.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Single-site projects: 2-4 months. Multi-site rollouts: 6-18 months depending on scale. Emergency deployments possible in 2-4 weeks.",
  },
  {
    question: "Can HNL take over a stalled project from another contractor?",
    answer:
      "Yes. We perform transition audits, assess existing work, and complete projects with proper documentation and quality assurance.",
  },
  {
    question: "Do you offer post-deployment O&M?",
    answer:
      "Yes. Most EPC contracts include warranty period O&M. We also offer long-term managed services contracts for ongoing maintenance.",
  },
]

const estimatorFields = [
  {
    id: "projectType",
    label: "Project Type",
    type: "select" as const,
    options: [
      { value: "telecom", label: "Telecom Rollout", multiplier: 1.0 },
      { value: "industrial", label: "Industrial Power", multiplier: 1.2 },
      { value: "datacenter", label: "Data Center", multiplier: 1.5 },
      { value: "commercial", label: "Commercial Building", multiplier: 1.1 },
    ],
    defaultValue: "telecom",
  },
  {
    id: "capacity",
    label: "Total Power Capacity (kVA)",
    type: "slider" as const,
    min: 100,
    max: 5000,
    step: 100,
    unit: "kVA",
    defaultValue: 500,
  },
  {
    id: "siteCount",
    label: "Number of Sites",
    type: "select" as const,
    options: [
      { value: "1", label: "Single Site", multiplier: 1.0 },
      { value: "10", label: "10 Sites", multiplier: 0.9 },
      { value: "50", label: "50 Sites", multiplier: 0.85 },
      { value: "100", label: "100+ Sites", multiplier: 0.8 },
    ],
    defaultValue: "1",
  },
  {
    id: "scope",
    label: "EPC Scope",
    type: "select" as const,
    options: [
      { value: "supply", label: "Supply Only", multiplier: 0.6 },
      { value: "supply-install", label: "Supply + Install", multiplier: 0.8 },
      { value: "turnkey", label: "Full Turnkey EPC", multiplier: 1.0 },
    ],
    defaultValue: "turnkey",
  },
  {
    id: "components",
    label: "Power Components",
    type: "select" as const,
    options: [
      { value: "dg-only", label: "Generator Only", multiplier: 0.5 },
      { value: "dg-ats", label: "Generator + ATS", multiplier: 0.6 },
      { value: "hybrid", label: "Hybrid (DG+Solar+BESS)", multiplier: 1.0 },
      { value: "full", label: "Full Power + Cooling + Fire", multiplier: 1.3 },
    ],
    defaultValue: "hybrid",
  },
]

const calculateEpcEstimate = (values: Record<string, string | number>) => {
  const capacity = values.capacity as number
  const siteCount = Number.parseInt(values.siteCount as string)

  // Base cost per kVA varies by project type
  const typeRates: Record<string, number> = { telecom: 25000, industrial: 30000, datacenter: 45000, commercial: 28000 }
  const baseRate = typeRates[values.projectType as string] || 25000

  const siteMultipliers: Record<string, number> = { "1": 1.0, "10": 0.9, "50": 0.85, "100": 0.8 }
  const scopeMultipliers: Record<string, number> = { supply: 0.6, "supply-install": 0.8, turnkey: 1.0 }
  const componentMultipliers: Record<string, number> = { "dg-only": 0.5, "dg-ats": 0.6, hybrid: 1.0, full: 1.3 }

  const siteMult = siteMultipliers[values.siteCount as string] || 1
  const scopeMult = scopeMultipliers[values.scope as string] || 1
  const compMult = componentMultipliers[values.components as string] || 1

  const perSiteCost = baseRate * capacity * scopeMult * compMult
  const totalCost = perSiteCost * siteCount * siteMult

  const lowEstimate = Math.round(totalCost * 0.9)
  const highEstimate = Math.round(totalCost * 1.1)

  // Timeline estimation
  let timeline = "3-6 months"
  if (siteCount > 50) timeline = "12-18 months"
  else if (siteCount > 10) timeline = "6-12 months"

  return {
    lowEstimate,
    highEstimate,
    timeline,
    breakdown: [
      { label: `${capacity} kVA per site`, value: formatCurrency(Math.round(perSiteCost)) },
      { label: `${siteCount} site(s) total`, value: `x${siteCount}` },
      { label: "Volume discount", value: `-${Math.round((1 - siteMult) * 100)}%` },
      { label: "Estimated project value", value: formatCurrency(Math.round(totalCost)) },
    ],
  }
}

export default function EpcProjectSolutionsPage() {
  const [activeTab, setActiveTab] = useState("telecom")

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="epc-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#epc-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Building className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Energy & Power Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              EPC Power Project
              <span className="text-red-500"> Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turnkey power infrastructure from design to commissioning. Single-point accountability for telecom
              rollouts, industrial facilities, and data centers across Pakistan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Request EPC Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Consultation
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

      {/* Why EPC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Why Choose HNL EPC Model?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Eliminate coordination headaches and reduce project risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyEpc.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 hover:border-red-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">EPC Project Types</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Specialized solutions for every sector</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {projectTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{type.name}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {projectTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{type.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{type.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-zinc-50 rounded-lg p-3">
                            <div className="text-xs text-zinc-500">Scale</div>
                            <div className="font-bold text-zinc-900">{type.scale}</div>
                          </div>
                          <div className="bg-zinc-50 rounded-lg p-3">
                            <div className="text-xs text-zinc-500">Timeline</div>
                            <div className="font-bold text-zinc-900">{type.timeline}</div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Typical Scope</h4>
                          <div className="flex flex-wrap gap-2">
                            {type.scope.map((item, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-sm text-zinc-500">
                          <strong>Model:</strong> {type.model}
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto bg-zinc-100">
                        <Image
                          src={type.image || "/placeholder.svg"}
                          alt={type.fullName}
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

      {/* EPC Process */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">HNL EPC Delivery Process</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">End-to-end project execution methodology</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {epcProcess.map((phase, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                      {phase.phase}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{phase.title}</h3>
                      <span className="text-xs text-red-400">{phase.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-400 flex items-start gap-1">
                        <span className="text-red-500 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="EPC Project Cost Estimator"
        description="Get a budget estimate for your power infrastructure project"
        fields={estimatorFields}
        calculateEstimate={calculateEpcEstimate}
        serviceName="EPC Power Project"
        whatsappNumber="+923001234567"
      />

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Telecom", icon: Radio, projects: "200+ sites" },
              { name: "Data Centers", icon: Server, projects: "15+ facilities" },
              { name: "Industrial", icon: Factory, projects: "50+ plants" },
              { name: "Commercial", icon: Building2, projects: "30+ buildings" },
            ].map((industry, idx) => (
              <div key={idx} className="text-center p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="font-bold text-zinc-900">{industry.name}</h3>
                <p className="text-sm text-red-600">{industry.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Related Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Energy O&M",
                desc: "Post-deployment maintenance",
                href: "/energy-power/energy-operations-maintenance",
                icon: Users,
              },
              {
                title: "Hybrid Power Systems",
                desc: "Solar + diesel + BESS",
                href: "/energy-power/hybrid-power-systems",
                icon: Zap,
              },
              {
                title: "Diesel Generators",
                desc: "10-2000 kVA range",
                href: "/energy-power/diesel-generators",
                icon: Building,
              },
            ].map((service, idx) => (
              <Link key={idx} href={service.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-zinc-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-zinc-600">{service.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Power Project</h2>
                  <p className="text-red-100 mb-6">
                    Request a detailed EPC proposal with scope, timeline, and commercial terms.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 21 111 000 HNL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5" />
                      <span>epc@hnl.com.pk</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Request EPC Proposal</h3>
                  <p className="text-zinc-600 mb-6">
                    Get a comprehensive proposal with detailed scope, BOQ, and commercial terms.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Request Proposal
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-300 bg-transparent">
                      <Phone className="mr-2 w-4 h-4" />
                      Talk to Project Manager
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
