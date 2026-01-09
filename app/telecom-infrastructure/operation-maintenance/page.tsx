"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceEstimator } from "@/components/service-estimator"
import { FAQSection } from "@/components/faq-section"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Wrench, Clock, Award, Target } from "lucide-react"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "2,000+", label: "Sites Under O&M", icon: Wrench },
  { value: "99.2%", label: "SLA Compliance", icon: Target },
  { value: "4 hrs", label: "Response Time", icon: Clock },
  { value: "50%+", label: "Market Share South", icon: Award },
]

const serviceTypes = [
  {
    id: "flm",
    name: "FLM Services",
    fullName: "First Line Maintenance",
    description: "Immediate on-site response for site access, visual inspection, and basic troubleshooting",
    features: ["24/7 site access", "Visual inspections", "Basic troubleshooting", "Alarm verification"],
    sla: ["4-hour response", "2-hour for critical", "Daily reports", "Ticket tracking"],
    image: "/telecom-flm-technician-site-visit.jpg",
  },
  {
    id: "preventive",
    name: "Preventive",
    fullName: "Preventive Maintenance",
    description: "Scheduled inspections and servicing to prevent failures before they occur",
    features: ["Monthly site visits", "Equipment cleaning", "Connection checks", "Performance testing"],
    sla: ["Monthly PM cycle", "Checklist completion", "Photo documentation", "Trend analysis"],
    image: "/preventive-maintenance-telecom-site.jpg",
  },
  {
    id: "corrective",
    name: "Corrective",
    fullName: "Corrective Maintenance",
    description: "Rapid diagnosis and repair of equipment failures and site issues",
    features: ["Fault diagnosis", "Equipment repair", "Part replacement", "Root cause analysis"],
    sla: ["4-hour response", "24-hour resolution", "Spare parts stock", "RCA reports"],
    image: "/corrective-maintenance-repair-work.jpg",
  },
  {
    id: "managed",
    name: "Managed Services",
    fullName: "Full Managed Services",
    description: "Complete site management including civil, power, and network equipment",
    features: ["Full site responsibility", "Civil maintenance", "Power systems", "Security monitoring"],
    sla: ["99%+ availability", "Monthly reporting", "Capex planning", "Vendor management"],
    image: "/managed-services-telecom-operations.jpg",
  },
]

const slaMetrics = [
  { metric: "Response Time (Critical)", target: "2 hours", achieved: "1.8 hrs avg" },
  { metric: "Response Time (Major)", target: "4 hours", achieved: "3.2 hrs avg" },
  { metric: "Resolution Time", target: "24 hours", achieved: "18 hrs avg" },
  { metric: "SLA Compliance", target: "> 98%", achieved: "99.2%" },
  { metric: "PM Completion", target: "> 95%", achieved: "98.5%" },
  { metric: "First-Visit Fix", target: "> 80%", achieved: "87%" },
]

const regionalCoverage = [
  { region: "South (Sindh/Balochistan)", sites: "8,000+", teams: "45+", hubCities: "Karachi, Hyderabad, Quetta" },
  { region: "Central (Punjab)", sites: "5,000+", teams: "35+", hubCities: "Lahore, Multan, Faisalabad" },
  { region: "North (KPK/GB/AJK)", sites: "3,500+", teams: "25+", hubCities: "Islamabad, Peshawar, Gilgit" },
]

const fieldTeamCapabilities = [
  { capability: "Field Engineers", count: "500+", description: "Trained on all vendor equipment" },
  { capability: "Service Vehicles", count: "150+", description: "Equipped response vehicles" },
  { capability: "Regional Hubs", count: "12", description: "Spare parts & coordination centers" },
  { capability: "Spare Parts Value", count: "PKR 500M+", description: "Strategic inventory maintained" },
]

const processFlow = [
  { step: "1", title: "Alarm/Ticket", description: "NOC generates ticket from alarm or customer report" },
  { step: "2", title: "Dispatch", description: "Nearest field team assigned within 15 minutes" },
  { step: "3", title: "Response", description: "Team arrives on-site within SLA window" },
  { step: "4", title: "Diagnosis", description: "Fault isolated and repair plan determined" },
  { step: "5", title: "Resolution", description: "Issue resolved and verified" },
  { step: "6", title: "Closure", description: "Ticket closed with documentation" },
]

const faqs = [
  {
    question: "What does HNL O&M service include?",
    answer:
      "HNL O&M includes: First Line Maintenance (24/7 site access, visual inspections), Preventive Maintenance (monthly scheduled visits, cleaning, testing), Corrective Maintenance (fault repair, part replacement), and Managed Services (complete site responsibility). We cover civil, power, and network equipment.",
  },
  {
    question: "What are your standard response times?",
    answer:
      "Standard SLA response times: Critical alarms (site down) - 2 hours, Major faults - 4 hours, Minor issues - 8 hours. We achieve 99.2% SLA compliance across our 2,000+ site portfolio. Premium SLAs with faster response are available.",
  },
  {
    question: "Do you maintain spare parts inventory?",
    answer:
      "Yes, HNL maintains PKR 500M+ strategic spare parts inventory across 12 regional hubs. Common failure items (batteries, rectifiers, BTS modules) are pre-positioned for rapid replacement. We also manage client-owned spares under our contracts.",
  },
  {
    question: "How many sites can you handle?",
    answer:
      "HNL currently manages 2,000+ sites under O&M contracts with capacity to scale. Our 500+ field engineers and 150+ service vehicles cover all regions of Pakistan. We have 50%+ market share in the southern region.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "Comprehensive reporting includes: Daily alarm summaries, weekly performance dashboards, monthly SLA compliance reports, quarterly trend analysis, and annual network health assessments. Reports are available via web portal and scheduled emails.",
  },
  {
    question: "Can you handle multi-vendor sites?",
    answer:
      "Absolutely. Our teams are trained on all major vendors (Huawei, Nokia, Ericsson, ZTE) and can manage multi-vendor, multi-technology sites. We handle 2G/3G/4G equipment, transmission, power systems, and civil infrastructure.",
  },
  {
    question: "What is your preventive maintenance cycle?",
    answer:
      "Standard PM cycle is monthly visits with comprehensive checklist covering: site cleanliness, equipment inspection, connection integrity, battery testing, generator servicing, security checks, and documentation updates. Customized cycles available based on site criticality.",
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, HNL provides true 24/7/365 O&M support through our NOC-integrated dispatch system. Critical alarms trigger immediate response regardless of time. Our regional teams maintain round-the-clock availability for emergency callouts.",
  },
]

const estimatorFields = [
  {
    id: "serviceType",
    label: "Service Type",
    type: "select" as const,
    options: [
      { value: "flm", label: "FLM Only", multiplier: 0.6 },
      { value: "flm-pm", label: "FLM + Preventive", multiplier: 1.0 },
      { value: "full", label: "Full O&M", multiplier: 1.4 },
      { value: "managed", label: "Managed Services", multiplier: 2.0 },
    ],
    defaultValue: "flm-pm",
  },
  {
    id: "siteCount",
    label: "Number of Sites",
    type: "slider" as const,
    min: 10,
    max: 500,
    step: 10,
    unit: "sites",
    defaultValue: 100,
  },
  {
    id: "slaLevel",
    label: "SLA Level",
    type: "select" as const,
    options: [
      { value: "standard", label: "Standard (4hr response)", multiplier: 1.0 },
      { value: "premium", label: "Premium (2hr response)", multiplier: 1.3 },
      { value: "critical", label: "Critical (1hr response)", multiplier: 1.6 },
    ],
    defaultValue: "standard",
  },
  {
    id: "region",
    label: "Primary Region",
    type: "select" as const,
    options: [
      { value: "south", label: "South (Sindh/Balochistan)", multiplier: 1.0 },
      { value: "central", label: "Central (Punjab)", multiplier: 1.1 },
      { value: "north", label: "North (KPK/GB)", multiplier: 1.3 },
      { value: "nationwide", label: "Nationwide", multiplier: 1.2 },
    ],
    defaultValue: "south",
  },
  {
    id: "contractTerm",
    label: "Contract Term",
    type: "select" as const,
    options: [
      { value: "1", label: "1 Year", multiplier: 1.0 },
      { value: "2", label: "2 Years", multiplier: 0.95 },
      { value: "3", label: "3 Years", multiplier: 0.9 },
    ],
    defaultValue: "1",
  },
]

const calculateOmEstimate = (values: Record<string, string | number>) => {
  const siteCount = values.siteCount as number

  const baseRatePerSite = 15000 // Monthly per site
  const serviceMultipliers: Record<string, number> = { flm: 0.6, "flm-pm": 1.0, full: 1.4, managed: 2.0 }
  const slaMultipliers: Record<string, number> = { standard: 1.0, premium: 1.3, critical: 1.6 }
  const regionMultipliers: Record<string, number> = { south: 1.0, central: 1.1, north: 1.3, nationwide: 1.2 }
  const termMultipliers: Record<string, number> = { "1": 1.0, "2": 0.95, "3": 0.9 }

  const serviceMult = serviceMultipliers[values.serviceType as string] || 1
  const slaMult = slaMultipliers[values.slaLevel as string] || 1
  const regionMult = regionMultipliers[values.region as string] || 1
  const termMult = termMultipliers[values.contractTerm as string] || 1

  const monthlyRate = baseRatePerSite * siteCount * serviceMult * slaMult * regionMult * termMult
  const annualCost = monthlyRate * 12

  const lowEstimate = Math.round(annualCost * 0.9)
  const highEstimate = Math.round(annualCost * 1.1)

  return {
    lowEstimate,
    highEstimate,
    timeline: "Ongoing contract",
    breakdown: [
      { label: `${siteCount} sites monthly`, value: `${formatCurrency(Math.round(monthlyRate))}/mo` },
      { label: "Annual contract value", value: formatCurrency(Math.round(annualCost)) },
      { label: "Per-site monthly rate", value: `${formatCurrency(Math.round(monthlyRate / siteCount))}/site/mo` },
      { label: `${values.contractTerm}-year term discount`, value: `${((1 - termMult) * 100).toFixed(0)}% off` },
    ],
  }
}

export default function OperationMaintenancePage() {
  const [activeTab, setActiveTab] = useState("flm")

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="om-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#om-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Telecom Infrastructure Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Operation &<span className="text-red-500"> Maintenance Services</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pakistan's #1 telecom O&M provider managing 2,000+ sites with 99.2% SLA compliance. 4-hour response, 500+
              field engineers, nationwide coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get O&M Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to O&M Expert
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
                src="/telecom-om-field-team-service-vehicle.jpg"
                alt="O&M field team"
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
                    <div className="text-sm text-zinc-500">SLA Compliance</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">2,000+</div>
                <div className="text-sm opacity-90">Sites Managed</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Proactive O&M That Maximizes Network Uptime
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                With 50%+ market share in Pakistan's southern region, HNL is the trusted O&M partner for major telecom
                operators. Our proactive approach prevents failures and ensures maximum network availability.
              </p>

              <div className="space-y-4">
                {[
                  "500+ trained field engineers across Pakistan",
                  "4-hour response time with 99.2% SLA compliance",
                  "PKR 500M+ spare parts inventory pre-positioned",
                  "NOC-integrated dispatch for rapid response",
                  "Monthly preventive maintenance with documentation",
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

      {/* Service Types Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">O&M Service Options</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Flexible service packages from basic FLM to full managed services
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {serviceTypes.map((service) => (
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

            {serviceTypes.map((service) => (
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
                          <h4 className="font-semibold text-zinc-900 mb-3">SLA Commitments</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.sla.map((item, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {item}
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

      {/* SLA Metrics */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SLA Performance</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Industry-leading SLA compliance across all performance metrics
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {slaMetrics.map((item, idx) => (
              <div key={idx} className="text-center p-5 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-2">{item.metric}</div>
                <div className="text-xl font-bold text-red-500 mb-1">{item.achieved}</div>
                <div className="text-xs text-zinc-600">Target: {item.target}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Nationwide Coverage</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Regional hubs and field teams across Pakistan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {regionalCoverage.map((region, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{region.region}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Sites Managed</span>
                      <span className="font-bold text-red-600">{region.sites}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Field Teams</span>
                      <span className="font-bold text-zinc-900">{region.teams}</span>
                    </div>
                    <div className="pt-3 border-t border-zinc-100">
                      <span className="text-sm text-zinc-500">Hub Cities: </span>
                      <span className="text-sm text-zinc-700">{region.hubCities}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Field Team Capabilities */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Our Field Capabilities</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Resources positioned for rapid response nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {fieldTeamCapabilities.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center border border-zinc-100 shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.count}</div>
                <div className="text-lg font-semibold text-zinc-900 mb-1">{item.capability}</div>
                <div className="text-sm text-zinc-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="O&M Cost Estimator"
        description="Get an instant estimate for your telecom O&M requirements"
        fields={estimatorFields}
        calculateEstimate={calculateOmEstimate}
        serviceName="O&M Services"
        whatsappNumber="+923001234567"
      />

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Incident Response Process</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              NOC-integrated workflow for rapid fault resolution
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {processFlow.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="ml-3 mr-6">
                  <div className="font-semibold text-zinc-900">{step.title}</div>
                  <div className="text-xs text-zinc-500">{step.description}</div>
                </div>
                {idx < processFlow.length - 1 && <ArrowRight className="w-5 h-5 text-zinc-300 hidden md:block" />}
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need O&M Support?</h2>
                  <p className="text-red-100 mb-8">
                    Get a customized O&M proposal with SLA guarantees for your network.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <span>om@hnl.com.pk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Regional hubs nationwide</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-6">Request O&M Proposal</h3>
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
                      placeholder="Site count, regions, current challenges"
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
