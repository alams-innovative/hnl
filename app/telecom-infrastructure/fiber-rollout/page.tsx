"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceEstimator } from "@/components/service-estimator"
import { FAQSection } from "@/components/faq-section"
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Cable,
  Clock,
  Award,
  Target,
  Activity,
  FileCheck,
  Truck,
  Settings,
  Layers,
} from "lucide-react"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "5,000+", label: "KM Fiber Deployed", icon: Cable },
  { value: "99.5%", label: "First-Time Quality", icon: Target },
  { value: "200+", label: "Projects Completed", icon: Award },
  { value: "48hrs", label: "Avg Deployment/KM", icon: Clock },
]

const fiberTypes = [
  {
    id: "ftth",
    name: "FTTH",
    fullName: "Fiber to the Home",
    description: "Last-mile connectivity bringing high-speed internet directly to residential premises",
    features: ["GPON/XGS-PON technology", "Up to 10 Gbps speeds", "Low latency connections", "Scalable architecture"],
    applications: ["Residential broadband", "Smart home connectivity", "IPTV services", "VoIP telephony"],
    image: "/ftth-fiber-optic-installation-residential.jpg",
  },
  {
    id: "fttx",
    name: "FTTx",
    fullName: "Fiber to the X",
    description: "Flexible fiber deployment to buildings, curbs, or distribution points",
    features: [
      "FTTB/FTTC/FTTN options",
      "Cost-optimized deployment",
      "Hybrid fiber-copper solutions",
      "MDU/MTU optimized",
    ],
    applications: ["Commercial buildings", "Business parks", "Multi-tenant units", "Campus networks"],
    image: "/fttx-fiber-deployment-commercial-building.jpg",
  },
  {
    id: "backbone",
    name: "Backbone",
    fullName: "Long-Haul Fiber Networks",
    description: "High-capacity inter-city and regional fiber backbone infrastructure",
    features: ["DWDM/CWDM ready", "96-fiber+ capacity", "Redundant ring topology", "Disaster recovery routes"],
    applications: ["ISP backbone", "Telecom operators", "Data center interconnect", "Enterprise WAN"],
    image: "/fiber-optic-backbone-installation-highway.jpg",
  },
  {
    id: "metro",
    name: "Metro Fiber",
    fullName: "Metropolitan Area Networks",
    description: "City-wide fiber networks connecting business districts and data centers",
    features: ["Low-latency paths", "Dark fiber options", "Meet-me points", "Carrier-neutral access"],
    applications: ["Data center connectivity", "Financial networks", "Enterprise connectivity", "Carrier networks"],
    image: "/metro-fiber-network-city-infrastructure.jpg",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Route Survey & Planning",
    description: "GIS mapping, route optimization, permit coordination, and feasibility analysis",
    duration: "1-2 weeks",
    deliverables: ["Route map", "BOQ estimate", "Permit requirements", "Risk assessment"],
  },
  {
    step: "02",
    title: "Design & Engineering",
    description: "Detailed network design, splice plans, and equipment specifications",
    duration: "1-2 weeks",
    deliverables: ["HLD/LLD documents", "Splice diagrams", "Material list", "Installation guide"],
  },
  {
    step: "03",
    title: "Civil Works & Laying",
    description: "Trenching, ducting, cable pulling, and aerial installation",
    duration: "Variable",
    deliverables: ["Installed fiber path", "As-built records", "Civil inspection", "Photo documentation"],
  },
  {
    step: "04",
    title: "Splicing & Termination",
    description: "Fusion splicing, ODF termination, and patch panel installation",
    duration: "Variable",
    deliverables: ["Splice records", "Termination photos", "Loss measurements", "Label documentation"],
  },
  {
    step: "05",
    title: "Testing & Documentation",
    description: "OTDR testing, end-to-end verification, and handover documentation",
    duration: "1 week",
    deliverables: ["OTDR traces", "Test reports", "As-built drawings", "Acceptance certificate"],
  },
]

const qualityMetrics = [
  { metric: "Splice Loss", target: "< 0.1 dB", achieved: "0.03 dB avg" },
  { metric: "Connector Loss", target: "< 0.3 dB", achieved: "0.15 dB avg" },
  { metric: "OTDR Pass Rate", target: "> 98%", achieved: "99.5%" },
  { metric: "First-Time Quality", target: "> 95%", achieved: "99.5%" },
  { metric: "Documentation Accuracy", target: "> 99%", achieved: "99.8%" },
  { metric: "On-Time Delivery", target: "> 90%", achieved: "94%" },
]

const equipmentBrands = [
  { name: "Corning", type: "Fiber & Connectivity", logo: "/corning-logo.jpg" },
  { name: "CommScope", type: "Infrastructure", logo: "/commscope-logo.jpg" },
  { name: "EXFO", type: "Testing Equipment", logo: "/exfo-logo.jpg" },
  { name: "Fujikura", type: "Splicing Machines", logo: "/fujikura-logo.jpg" },
  { name: "AFL", type: "Tools & Accessories", logo: "/afl-telecommunications-logo.jpg" },
  { name: "VIAVI", type: "Test Solutions", logo: "/viavi-solutions-logo.jpg" },
]

const caseStudies = [
  {
    client: "Major Telecom Operator",
    project: "FTTH Rollout - Lahore",
    scope: "25,000 home passes",
    duration: "8 months",
    result: "99.7% acceptance rate, 15% under budget",
  },
  {
    client: "National ISP",
    project: "Metro Fiber Ring - Karachi",
    scope: "120 km fiber ring",
    duration: "4 months",
    result: "Zero service interruptions during deployment",
  },
  {
    client: "Enterprise Client",
    project: "Campus Backbone - Islamabad",
    scope: "15 km inter-building fiber",
    duration: "6 weeks",
    result: "10 Gbps connectivity across 12 buildings",
  },
]

const faqs = [
  {
    question: "What types of fiber deployment does HNL handle?",
    answer:
      "HNL provides comprehensive fiber services including FTTH (Fiber to the Home), FTTx (Fiber to Building/Curb/Node), backbone fiber routes, metro fiber networks, and enterprise campus fiber. We handle everything from route planning to final testing and documentation.",
  },
  {
    question: "How long does a typical FTTH project take?",
    answer:
      "Timeline depends on scope. For a 1000-home FTTH project, typical deployment takes 3-4 months including planning, civil works, installation, and testing. We deploy approximately 2-5 km of fiber per day depending on terrain and installation method (aerial vs underground).",
  },
  {
    question: "What testing do you perform on fiber installations?",
    answer:
      "Every fiber path undergoes comprehensive testing: OTDR testing from both ends, insertion loss measurements, optical return loss testing, and visual fault location. We provide detailed test reports with trace files for client records.",
  },
  {
    question: "Do you handle permits and right-of-way for fiber routes?",
    answer:
      "Yes, HNL manages all regulatory requirements including municipal permits, right-of-way permissions, utility coordination, and local authority approvals. Our dedicated permits team has relationships with authorities across Pakistan.",
  },
  {
    question: "What is your fiber splice loss standard?",
    answer:
      "HNL maintains strict quality standards with average splice loss below 0.03 dB (industry standard is 0.1 dB). Our OTDR-certified technicians use Fujikura fusion splicers and perform 100% splice loss verification.",
  },
  {
    question: "Can you deploy fiber in challenging terrain?",
    answer:
      "Absolutely. HNL has deployed fiber across all terrain types in Pakistan including mountainous regions (Northern Areas), desert areas (Sindh/Balochistan), and dense urban environments. We use aerial, underground, and micro-trenching methods as appropriate.",
  },
  {
    question: "Do you offer fiber maintenance services after deployment?",
    answer:
      "Yes, we provide ongoing fiber O&M services including emergency repair, periodic OTDR testing, splice point inspections, and documentation updates. Our NOC can monitor fiber networks 24/7 for proactive fault detection.",
  },
  {
    question: "What fiber cable types do you install?",
    answer:
      "We install all standard fiber types: single-mode (OS2), multi-mode (OM3/OM4), armored cables, aerial ADSS, direct-buried, and micro-duct cables. Cable selection depends on application, environment, and future capacity requirements.",
  },
]

const estimatorFields = [
  {
    id: "fiberType",
    label: "Fiber Type",
    type: "select" as const,
    options: [
      { value: "ftth", label: "FTTH (Fiber to Home)", multiplier: 1.2 },
      { value: "fttx", label: "FTTx (Building/Curb)", multiplier: 1.0 },
      { value: "backbone", label: "Backbone/Long-haul", multiplier: 0.8 },
      { value: "metro", label: "Metro Fiber Ring", multiplier: 1.1 },
    ],
    defaultValue: "ftth",
  },
  {
    id: "distance",
    label: "Total Fiber Distance",
    type: "slider" as const,
    min: 1,
    max: 100,
    step: 1,
    unit: "km",
    defaultValue: 10,
  },
  {
    id: "installMethod",
    label: "Installation Method",
    type: "select" as const,
    options: [
      { value: "aerial", label: "Aerial (Pole-mounted)", multiplier: 0.7 },
      { value: "underground", label: "Underground (Trenching)", multiplier: 1.3 },
      { value: "micro", label: "Micro-trenching", multiplier: 1.0 },
      { value: "existing", label: "Existing Ducts", multiplier: 0.5 },
    ],
    defaultValue: "underground",
  },
  {
    id: "fiberCount",
    label: "Fiber Core Count",
    type: "select" as const,
    options: [
      { value: "12", label: "12 Core", multiplier: 1.0 },
      { value: "24", label: "24 Core", multiplier: 1.2 },
      { value: "48", label: "48 Core", multiplier: 1.5 },
      { value: "96", label: "96 Core", multiplier: 2.0 },
    ],
    defaultValue: "24",
  },
  {
    id: "splicePoints",
    label: "Estimated Splice Points",
    type: "number" as const,
    min: 0,
    max: 500,
    defaultValue: 20,
  },
]

const calculateFiberEstimate = (values: Record<string, string | number>) => {
  const baseRatePerKm = 150000 // PKR per km base rate
  const distance = values.distance as number
  const splicePoints = values.splicePoints as number

  // Multipliers based on selections
  const typeMultipliers: Record<string, number> = { ftth: 1.2, fttx: 1.0, backbone: 0.8, metro: 1.1 }
  const methodMultipliers: Record<string, number> = { aerial: 0.7, underground: 1.3, micro: 1.0, existing: 0.5 }
  const coreMultipliers: Record<string, number> = { "12": 1.0, "24": 1.2, "48": 1.5, "96": 2.0 }

  const typeMultiplier = typeMultipliers[values.fiberType as string] || 1
  const methodMultiplier = methodMultipliers[values.installMethod as string] || 1
  const coreMultiplier = coreMultipliers[values.fiberCount as string] || 1

  const fiberCost = baseRatePerKm * distance * typeMultiplier * methodMultiplier * coreMultiplier
  const spliceCost = splicePoints * 2500 // PKR per splice point
  const testingCost = distance * 5000 // PKR per km testing
  const documentationCost = 50000 // Fixed documentation cost

  const totalLow = Math.round((fiberCost + spliceCost + testingCost + documentationCost) * 0.85)
  const totalHigh = Math.round((fiberCost + spliceCost + testingCost + documentationCost) * 1.15)

  const weeksPerKm = values.installMethod === "underground" ? 0.3 : 0.15
  const timelineWeeks = Math.ceil(distance * weeksPerKm + 2) // +2 for planning and testing

  return {
    lowEstimate: totalLow,
    highEstimate: totalHigh,
    timeline: `${timelineWeeks}-${timelineWeeks + 2} weeks`,
    breakdown: [
      { label: "Fiber cable & installation", value: formatCurrency(Math.round(fiberCost)) },
      { label: `${splicePoints} splice points`, value: formatCurrency(spliceCost) },
      { label: "OTDR testing & verification", value: formatCurrency(testingCost) },
      { label: "Documentation & as-builts", value: formatCurrency(documentationCost) },
    ],
  }
}

export default function FiberRolloutPage() {
  const [activeTab, setActiveTab] = useState("ftth")

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="fiber-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#fiber-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Cable className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Telecom Infrastructure Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fiber Optic Deployment
              <span className="text-red-500"> & Installation</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pakistan's trusted fiber infrastructure partner. From FTTH to backbone networks, we deliver end-to-end
              fiber solutions with 99.5% first-time quality and industry-leading splice standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Free Site Survey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to Fiber Expert
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

      {/* Visual Hook Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/fiber-optic-cable-installation-technician-splicing.jpg"
                alt="Fiber optic installation"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">0.03 dB</div>
                    <div className="text-sm text-zinc-500">Avg Splice Loss</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm opacity-90">KM Deployed</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Why Pakistan's Top ISPs & Telcos Choose HNL for Fiber
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                With over two decades in telecom infrastructure, HNL has deployed thousands of kilometers of fiber
                across Pakistan - from dense urban FTTH networks to challenging mountain backbone routes.
              </p>

              <div className="space-y-4">
                {[
                  "OTDR-certified technicians with Fujikura/Sumitomo expertise",
                  "Industry-leading splice loss under 0.03 dB average",
                  "End-to-end project management from survey to handover",
                  "24/7 emergency fiber repair services available",
                  "Complete documentation with OTDR traces and as-builts",
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

      {/* Fiber Types Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Fiber Solutions for Every Network Need
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From residential FTTH to enterprise backbone - we deploy the right fiber architecture for your
              requirements
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {fiberTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{type.name}</div>
                    <div className="text-xs opacity-70 hidden sm:block">{type.fullName}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {fiberTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{type.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{type.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {type.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-zinc-900 mb-3">Applications</h4>
                          <div className="flex flex-wrap gap-2">
                            {type.applications.map((app, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
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

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Our Fiber Deployment Process</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              A structured approach ensuring quality, timeline adherence, and complete documentation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline line */}
                {idx < processSteps.length - 1 && <div className="absolute left-6 top-14 w-0.5 h-full bg-red-200" />}

                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>

                {/* Content */}
                <div className="flex-1 bg-zinc-50 rounded-xl p-6 border border-zinc-100">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-zinc-600 mb-4">{step.description}</p>
                  <div>
                    <span className="text-sm font-semibold text-zinc-700">Deliverables: </span>
                    <span className="text-sm text-zinc-600">{step.deliverables.join(" • ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality That Exceeds Industry Standards</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Our rigorous quality standards ensure your fiber network performs flawlessly from day one
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {qualityMetrics.map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-2">{item.metric}</div>
                <div className="text-2xl font-bold text-red-500 mb-1">{item.achieved}</div>
                <div className="text-xs text-zinc-600">Target: {item.target}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <ServiceEstimator
        title="Fiber Project Cost Estimator"
        description="Get an instant ballpark estimate for your fiber deployment project. Enter your requirements below."
        fields={estimatorFields}
        calculateEstimate={calculateFiberEstimate}
        serviceName="Fiber Rollout"
        whatsappNumber="+923001234567"
      />

      {/* Equipment Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">World-Class Equipment & Materials</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We use only premium fiber cables, connectors, and testing equipment from globally recognized brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {equipmentBrands.map((brand, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="mx-auto mb-2 grayscale hover:grayscale-0 transition-all"
                />
                <div className="text-sm font-semibold text-zinc-900">{brand.name}</div>
                <div className="text-xs text-zinc-500">{brand.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Recent Fiber Projects</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Proven track record across diverse fiber deployment projects in Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-red-600 font-medium mb-2">{study.client}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{study.project}</h3>
                  <div className="space-y-2 text-sm text-zinc-600 mb-4">
                    <div className="flex justify-between">
                      <span>Scope:</span>
                      <span className="font-medium text-zinc-900">{study.scope}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium text-zinc-900">{study.duration}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-zinc-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-700">{study.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Technical Capabilities</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Comprehensive fiber services backed by certified expertise and modern equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Cable,
                title: "Fiber Types",
                items: ["Single-mode (OS2)", "Multi-mode (OM3/OM4)", "Armored cables", "ADSS/Figure-8"],
              },
              {
                icon: Settings,
                title: "Installation Methods",
                items: ["Trenching & ducting", "Aerial deployment", "Micro-trenching", "Direct burial"],
              },
              {
                icon: Activity,
                title: "Testing Capabilities",
                items: ["OTDR testing (both ends)", "Insertion loss", "Return loss", "Visual fault location"],
              },
              {
                icon: Layers,
                title: "Network Architectures",
                items: ["GPON/XGS-PON", "Point-to-point", "Ring topology", "Mesh networks"],
              },
              {
                icon: FileCheck,
                title: "Documentation",
                items: ["As-built drawings", "OTDR traces", "Splice records", "GIS mapping"],
              },
              {
                icon: Truck,
                title: "Support Services",
                items: ["Emergency repair", "Preventive maintenance", "Network upgrades", "Route optimization"],
              },
            ].map((capability, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Deploy Fiber?</h2>
                  <p className="text-red-100 mb-8">
                    Get a free site survey and detailed proposal for your fiber project. Our experts are ready to help.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>fiber@hnl.com.pk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Offices in Karachi, Lahore, Islamabad</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-6">Request Free Site Survey</h3>
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
                      placeholder="Project Details"
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
