"use client"

import Image from "next/image"
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
  Mail,
  MapPin,
  HardHat,
  Award,
  Target,
  Shovel,
  Building2,
  Shield,
  Truck,
} from "lucide-react"

const stats = [
  { value: "500+", label: "Towers Built", icon: Building2 },
  { value: "2,000+", label: "KM Trenching", icon: Shovel },
  { value: "100%", label: "Safety Record", icon: Shield },
  { value: "15+", label: "Years Experience", icon: Award },
]

const civilServices = [
  {
    id: "towers",
    name: "Tower Foundations",
    fullName: "Telecom Tower & Mast Foundations",
    description: "Structural foundations for self-support towers, monopoles, and guyed masts up to 100m height",
    features: [
      "Soil investigation & testing",
      "Structural engineering design",
      "Grade 60+ concrete foundations",
      "Anchor bolt installation",
    ],
    specifications: [
      "30m-100m tower heights",
      "Wind load up to 150 km/h",
      "Seismic Zone 2B compliant",
      "20-year design life",
    ],
    image: "/telecom-tower-foundation-construction.jpg",
  },
  {
    id: "trenching",
    name: "Trenching & Ducting",
    fullName: "Underground Cable Infrastructure",
    description: "Precision trenching and duct installation for fiber optic and power cables",
    features: [
      "GPS-guided trenching",
      "HDPE duct installation",
      "Concrete encasement options",
      "As-built documentation",
    ],
    specifications: [
      "0.6m-1.5m depth range",
      "Single to multi-way ducts",
      "Road crossing capabilities",
      "Utility coordination",
    ],
    image: "/underground-cable-trenching-ducting.jpg",
  },
  {
    id: "shelters",
    name: "Equipment Shelters",
    fullName: "Telecom Equipment Rooms & Shelters",
    description: "Pre-fabricated and built-in-place equipment shelters with full MEP integration",
    features: [
      "Climate-controlled design",
      "Fire suppression systems",
      "Access control integration",
      "Power & grounding",
    ],
    specifications: ["10-50 sqm floor area", "2.5-3m ceiling height", "IP55 rated enclosures", "Earthquake resistant"],
    image: "/telecom-equipment-shelter-construction.jpg",
  },
  {
    id: "site-development",
    name: "Site Development",
    fullName: "Complete Site Preparation & Development",
    description: "Full greenfield site development including access roads, fencing, and utilities",
    features: ["Land clearing & grading", "Drainage systems", "Perimeter security fencing", "Utility connections"],
    specifications: [
      "500-5000 sqm sites",
      "Compound wall construction",
      "Access road development",
      "Landscaping options",
    ],
    image: "/telecom-site-development-preparation.jpg",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Site Assessment & Survey",
    description: "Detailed topographical survey, soil testing, and feasibility analysis",
    duration: "3-5 days",
    deliverables: ["Survey report", "Soil test results", "Site access plan", "Risk assessment"],
  },
  {
    step: "02",
    title: "Engineering & Design",
    description: "Structural design, BOQ preparation, and regulatory submissions",
    duration: "1-2 weeks",
    deliverables: ["Structural drawings", "BOQ & estimates", "Permit applications", "Construction schedule"],
  },
  {
    step: "03",
    title: "Mobilization & Setup",
    description: "Equipment mobilization, site fencing, and safety preparations",
    duration: "2-3 days",
    deliverables: ["Site secured", "Equipment staged", "Safety plan active", "Local coordination"],
  },
  {
    step: "04",
    title: "Construction Execution",
    description: "Foundation works, civil construction, and quality checkpoints",
    duration: "2-6 weeks",
    deliverables: ["Progress reports", "Quality inspections", "Photo documentation", "Material certifications"],
  },
  {
    step: "05",
    title: "Inspection & Handover",
    description: "Final inspection, documentation, and site handover to client",
    duration: "3-5 days",
    deliverables: ["Completion certificate", "As-built drawings", "Test reports", "Warranty documentation"],
  },
]

const safetyStandards = [
  {
    standard: "Zero Incidents",
    description: "Maintained zero lost-time injury record across all projects",
    icon: Shield,
  },
  { standard: "PPE Compliance", description: "100% personal protective equipment usage enforced", icon: HardHat },
  { standard: "Daily Toolbox Talks", description: "Safety briefings before every work shift", icon: Target },
  { standard: "Third-Party Audits", description: "Regular safety audits by independent assessors", icon: Award },
]

const equipmentFleet = [
  { name: "Excavators", count: "25+", types: "Mini to 30-ton" },
  { name: "Concrete Mixers", count: "15+", types: "Transit & site mixers" },
  { name: "Trenchers", count: "10+", types: "Chain & wheel types" },
  { name: "Compactors", count: "20+", types: "Plate & roller" },
  { name: "Drilling Rigs", count: "8+", types: "Auger & percussion" },
  { name: "Cranes", count: "12+", types: "Mobile 10-50 ton" },
]

const caseStudies = [
  {
    client: "Major Tower Company",
    project: "Multi-Site Tower Deployment",
    scope: "150 tower foundations",
    duration: "18 months",
    result: "100% on-time delivery, zero safety incidents",
  },
  {
    client: "Telecom Operator",
    project: "Fiber Route Civil Works",
    scope: "85 km trenching",
    duration: "6 months",
    result: "Completed 15% ahead of schedule",
  },
  {
    client: "ISP Network",
    project: "Urban Site Development",
    scope: "25 rooftop sites",
    duration: "4 months",
    result: "All sites passed first-time inspection",
  },
]

const faqs = [
  {
    question: "What types of tower foundations does HNL construct?",
    answer:
      "HNL constructs foundations for all tower types including self-support lattice towers (30-100m), monopoles (15-45m), guyed masts, rooftop structures, and camouflage installations. We handle soil investigation, structural design, and construction with Grade 60+ concrete and certified rebar.",
  },
  {
    question: "How long does a typical tower foundation take to complete?",
    answer:
      "Timeline varies by tower type and soil conditions. A standard 45m self-support tower foundation typically takes 3-4 weeks including excavation, reinforcement, concrete pouring, and curing. Monopole foundations can be completed in 2 weeks.",
  },
  {
    question: "Do you handle permits and regulatory approvals?",
    answer:
      "Yes, HNL manages all regulatory requirements including building permits, environmental clearances, aviation authority approvals (for tower heights), and local authority coordination. Our permits team has established relationships with authorities across Pakistan.",
  },
  {
    question: "What is your safety record for civil works projects?",
    answer:
      "HNL maintains a zero lost-time injury record across all civil works projects. We enforce strict safety protocols including mandatory PPE, daily toolbox talks, equipment inspections, and regular third-party safety audits.",
  },
  {
    question: "Can you work in challenging terrain conditions?",
    answer:
      "Absolutely. HNL has executed civil works across all terrain types in Pakistan - from rocky mountain sites in the north to sandy desert areas in Sindh and Balochistan. We use specialized equipment and techniques for challenging ground conditions.",
  },
  {
    question: "What soil testing do you perform before construction?",
    answer:
      "We conduct comprehensive geotechnical investigations including Standard Penetration Tests (SPT), soil bearing capacity analysis, groundwater level assessment, and chemical analysis for corrosive conditions. This data informs foundation design.",
  },
  {
    question: "Do you provide structural engineering certifications?",
    answer:
      "Yes, all structural designs are prepared by licensed Professional Engineers and certified upon completion. We provide complete structural calculation sheets, material test certificates, and as-built drawings for client records.",
  },
  {
    question: "What warranty do you provide on civil works?",
    answer:
      "HNL provides a standard 2-year defects liability warranty on all civil works, with extended warranties available for specific components. Structural foundations are designed for a minimum 20-year service life.",
  },
]

const estimatorFields = [
  {
    id: "workType",
    label: "Type of Civil Work",
    type: "select" as const,
    options: [
      { value: "tower-foundation", label: "Tower Foundation", multiplier: 1.0 },
      { value: "trenching", label: "Trenching & Ducting", multiplier: 0.8 },
      { value: "shelter", label: "Equipment Shelter", multiplier: 1.2 },
      { value: "site-dev", label: "Complete Site Development", multiplier: 1.5 },
    ],
    defaultValue: "tower-foundation",
  },
  {
    id: "towerHeight",
    label: "Tower Height (if applicable)",
    type: "select" as const,
    options: [
      { value: "30", label: "30m Tower", multiplier: 1.0 },
      { value: "45", label: "45m Tower", multiplier: 1.3 },
      { value: "60", label: "60m Tower", multiplier: 1.6 },
      { value: "80", label: "80m+ Tower", multiplier: 2.0 },
    ],
    defaultValue: "45",
  },
  {
    id: "siteCount",
    label: "Number of Sites",
    type: "slider" as const,
    min: 1,
    max: 50,
    step: 1,
    unit: "sites",
    defaultValue: 5,
  },
  {
    id: "terrain",
    label: "Terrain Type",
    type: "select" as const,
    options: [
      { value: "urban", label: "Urban/City", multiplier: 1.2 },
      { value: "rural", label: "Rural/Plain", multiplier: 1.0 },
      { value: "hilly", label: "Hilly/Mountain", multiplier: 1.5 },
      { value: "desert", label: "Desert/Sandy", multiplier: 1.3 },
    ],
    defaultValue: "rural",
  },
  {
    id: "trenchLength",
    label: "Trenching Length (if applicable)",
    type: "number" as const,
    min: 0,
    max: 100,
    unit: "km",
    defaultValue: 0,
  },
]

const calculateCivilEstimate = (values: Record<string, string | number>) => {
  const siteCount = values.siteCount as number
  const trenchLength = values.trenchLength as number

  const workTypeRates: Record<string, number> = {
    "tower-foundation": 800000,
    trenching: 120000,
    shelter: 1200000,
    "site-dev": 2500000,
  }
  const heightMultipliers: Record<string, number> = { "30": 1.0, "45": 1.3, "60": 1.6, "80": 2.0 }
  const terrainMultipliers: Record<string, number> = { urban: 1.2, rural: 1.0, hilly: 1.5, desert: 1.3 }

  const baseRate = workTypeRates[values.workType as string] || 800000
  const heightMult = heightMultipliers[values.towerHeight as string] || 1
  const terrainMult = terrainMultipliers[values.terrain as string] || 1

  let totalCost = baseRate * siteCount * heightMult * terrainMult

  if (trenchLength > 0) {
    totalCost += trenchLength * 150000 * terrainMult
  }

  const lowEstimate = Math.round(totalCost * 0.85)
  const highEstimate = Math.round(totalCost * 1.15)

  const weeksPerSite = values.workType === "site-dev" ? 4 : 2.5
  const timeline = Math.ceil((siteCount * weeksPerSite) / 3)

  return {
    lowEstimate,
    highEstimate,
    timeline: `${timeline}-${timeline + 4} weeks`,
    breakdown: [
      {
        label: `${siteCount} site(s) civil works`,
        value: formatCurrency(Math.round(baseRate * siteCount * heightMult)),
      },
      { label: "Terrain adjustment", value: `${((terrainMult - 1) * 100).toFixed(0)}% factor` },
      {
        label: trenchLength > 0 ? `${trenchLength} km trenching` : "No trenching",
        value: trenchLength > 0 ? formatCurrency(trenchLength * 150000) : "—",
      },
      { label: "Engineering & permits", value: "Included" },
    ],
  }
}

export default function CivilWorksPage() {
  const [activeTab, setActiveTab] = useState("towers")

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="civil-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#civil-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <HardHat className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Telecom Infrastructure Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Civil Works &<span className="text-red-500"> Site Construction</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional tower foundations, trenching, equipment shelters, and complete site development for telecom
              infrastructure. Zero-incident safety record across 500+ projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Site Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to Civil Expert
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
                src="/telecom-tower-construction-site-pakistan.jpg"
                alt="Tower construction site"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">Zero</div>
                    <div className="text-sm text-zinc-500">Safety Incidents</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Towers Built</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Engineered Foundations for Pakistan's Telecom Networks
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                From high-altitude mountain sites to dense urban rooftops, HNL has built the structural foundations for
                Pakistan's mobile networks. Our civil engineering expertise ensures every tower stands strong.
              </p>

              <div className="space-y-4">
                {[
                  "Structural engineering by licensed Professional Engineers",
                  "Grade 60+ concrete with certified reinforcement steel",
                  "Comprehensive soil testing and geotechnical analysis",
                  "Zero lost-time injury safety record maintained",
                  "Complete regulatory permits and approvals handling",
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

      {/* Services Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Civil Works Services</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Complete civil infrastructure solutions for telecom sites
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {civilServices.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">{service.name}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {civilServices.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{service.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{service.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Services Include</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-zinc-900 mb-3">Specifications</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.specifications.map((spec, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.fullName}
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
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Our Construction Process</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Systematic approach ensuring quality, safety, and on-time delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
                {idx < processSteps.length - 1 && <div className="absolute left-6 top-14 w-0.5 h-full bg-red-200" />}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
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

      {/* Safety Standards */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety-First Construction</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Zero-incident track record through rigorous safety protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {safetyStandards.map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-lg font-bold mb-2">{item.standard}</div>
                <div className="text-sm text-zinc-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="Civil Works Cost Estimator"
        description="Get an instant estimate for tower foundations, trenching, or site development projects"
        fields={estimatorFields}
        calculateEstimate={calculateCivilEstimate}
        serviceName="Civil Works"
        whatsappNumber="+923001234567"
      />

      {/* Equipment Fleet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Our Equipment Fleet</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Modern construction equipment for efficient project delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {equipmentFleet.map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-4 text-center border border-zinc-100">
                <Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-zinc-900">{item.count}</div>
                <div className="text-sm font-medium text-zinc-700">{item.name}</div>
                <div className="text-xs text-zinc-500">{item.types}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Project Track Record</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Proven delivery across diverse civil works projects
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-red-600 text-white p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Civil Works Support?</h2>
                  <p className="text-red-100 mb-8">
                    Get a free site assessment and detailed construction proposal from our civil engineering team.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>civil@hnl.com.pk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Offices in Karachi, Lahore, Islamabad</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-6">Request Site Assessment</h3>
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
