"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Phone, Shield, MessageCircle, TrendingUp, Clock, Award, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "99.9%", label: "Uptime SLA", icon: TrendingUp },
  { value: "15min", label: "Critical Response", icon: Clock },
  { value: "100+", label: "Enterprise Clients", icon: Users },
  { value: "24/7", label: "NOC & Helpdesk", icon: Shield },
]

const servicePackages = [
  {
    id: "infrastructure",
    name: "Infrastructure",
    fullName: "Infrastructure Management",
    description: "Complete management of servers, storage, networks, and data centers with proactive monitoring",
    features: [
      "Server management (Windows/Linux)",
      "Storage and backup management",
      "Network monitoring and optimization",
      "Virtualization (VMware/Hyper-V)",
      "Patch management and updates",
      "Capacity planning and scaling",
    ],
    benefits: ["90% reduction in downtime", "Optimized resource utilization", "Proactive issue resolution"],
    pricing: "Starting from 0.8M PKR/month",
  },
  {
    id: "security",
    name: "Security",
    fullName: "Security Operations Center",
    description: "24/7 threat monitoring, vulnerability management, and rapid incident response",
    features: [
      "Security monitoring (SIEM)",
      "Vulnerability assessments",
      "Patch management",
      "Incident response",
      "Threat intelligence",
      "Compliance reporting",
    ],
    benefits: ["85% reduction in security incidents", "Full compliance support", "Real-time threat detection"],
    pricing: "Starting from 0.5M PKR/month",
  },
  {
    id: "application",
    name: "Application",
    fullName: "Application Support",
    description: "Maintenance and optimization for business-critical applications and databases",
    features: [
      "Application monitoring",
      "Performance tuning",
      "Database management",
      "Bug fixes and updates",
      "Third-party app support",
      "License management",
    ],
    benefits: ["40% improvement in app performance", "Reduced application downtime", "Faster issue resolution"],
    pricing: "Starting from 0.4M PKR/month",
  },
  {
    id: "helpdesk",
    name: "Helpdesk",
    fullName: "IT Helpdesk & Support",
    description: "Multi-tier support for end-users with rapid response times and high resolution rates",
    features: [
      "Tier 1/2/3 support",
      "Remote desktop support",
      "Password resets",
      "Hardware/software troubleshooting",
      "User onboarding",
      "Multi-channel support",
    ],
    benefits: ["15-min response time", "95% first-call resolution", "60% improvement in user satisfaction"],
    pricing: "Starting from 0.3M PKR/month",
  },
]

const serviceModels = [
  {
    name: "Basic Support",
    description: "Essential monitoring and helpdesk for small businesses",
    response: "4 hours",
    coverage: "Business hours (9-6)",
    bestFor: "Small businesses, startups, basic IT needs",
  },
  {
    name: "Standard Managed",
    description: "Comprehensive IT management with extended support",
    response: "1 hour",
    coverage: "Extended (8am-10pm)",
    bestFor: "Growing businesses, multiple locations",
  },
  {
    name: "Enterprise 24/7",
    description: "Full managed services with round-the-clock coverage",
    response: "15 minutes",
    coverage: "24/7/365",
    bestFor: "Enterprises, mission-critical systems, compliance requirements",
  },
]

const processTimeline = [
  {
    phase: "Discovery & Audit",
    duration: "1-2 weeks",
    activities: [
      "Complete IT infrastructure audit",
      "Document all systems and dependencies",
      "Identify pain points and gaps",
      "Establish baseline metrics",
    ],
    deliverables: "Infrastructure audit report, recommendations",
  },
  {
    phase: "Service Design",
    duration: "1 week",
    activities: [
      "Define service scope and SLAs",
      "Design monitoring strategy",
      "Create escalation procedures",
      "Establish communication protocols",
    ],
    deliverables: "Service catalog, operational runbooks",
  },
  {
    phase: "Service Transition",
    duration: "2-4 weeks",
    activities: [
      "Deploy monitoring tools",
      "Integrate with existing systems",
      "Knowledge transfer sessions",
      "Shadow existing IT team",
    ],
    deliverables: "Fully operational managed service",
  },
  {
    phase: "Ongoing Operations",
    duration: "Continuous",
    activities: [
      "24/7 monitoring and support",
      "Proactive maintenance",
      "Monthly service reviews",
      "Continuous improvement",
    ],
    deliverables: "Monthly reports, optimization recommendations",
  },
]

const certifications = [
  { name: "ISO 27001", description: "Information Security" },
  { name: "ISO 9001", description: "Quality Management" },
  { name: "ITIL", description: "Service Management" },
  { name: "Microsoft Partner", description: "Gold Certified" },
  { name: "VMware Partner", description: "Enterprise Solutions" },
  { name: "AWS Partner", description: "Cloud Services" },
]

const faqs = [
  {
    question: "What does enterprise IT services include?",
    answer:
      "Our managed IT services cover infrastructure management (servers, networks, storage), application support, security operations, IT helpdesk, backup and disaster recovery, and vendor management. We act as your complete IT department with 24/7 availability.",
  },
  {
    question: "How do you ensure 99.9% uptime SLA?",
    answer:
      "We use redundant systems, proactive monitoring with automated alerts, regular health checks, and rapid incident response. Our NOC monitors your infrastructure 24/7, resolving issues before they impact your business.",
  },
  {
    question: "Can you support our existing infrastructure?",
    answer:
      "Yes. We support on-premises, cloud, and hybrid environments across all major platforms (Windows, Linux, VMware, AWS, Azure, Google Cloud). We integrate with your existing tools and processes.",
  },
  {
    question: "What is your helpdesk response time?",
    answer:
      "Critical incidents receive a 15-minute response. High-priority issues are responded to within 1 hour, and normal requests within 4 hours. We provide multi-channel support (phone, email, WhatsApp, ticketing portal).",
  },
  {
    question: "How is pricing structured for managed IT services?",
    answer:
      "We offer predictable monthly pricing based on your infrastructure size (servers, users, locations) and service scope. No hidden fees - you pay a fixed amount each month with all monitoring, maintenance, and support included.",
  },
  {
    question: "Do you provide security and compliance support?",
    answer:
      "Yes. Our security operations include 24/7 monitoring, vulnerability assessments, patch management, incident response, and compliance reporting. We help you meet ISO 27001, PCI-DSS, and other regulatory requirements.",
  },
]

export default function EnterpriseITServicesPage() {
  const [activeTab, setActiveTab] = useState("infrastructure")
  const [estimatorValues, setEstimatorValues] = useState({
    servers: 20,
    users: 100,
    locations: 3,
    model: "standard",
  })

  const calculateEstimate = () => {
    const { servers, users, locations, model } = estimatorValues

    const modelMultipliers: Record<string, number> = {
      basic: 0.7,
      standard: 1.0,
      enterprise: 1.5,
    }

    const multiplier = modelMultipliers[model] || 1.0

    const infrastructureCost = servers * 25000 * multiplier
    const helpdeskCost = users * 800 * multiplier
    const locationCost = locations * 50000
    const securityCost = servers * 15000 * multiplier

    const total = infrastructureCost + helpdeskCost + locationCost + securityCost

    return {
      low: Math.round(total * 0.85),
      high: Math.round(total * 1.15),
      monthly: Math.round(total / 12),
    }
  }

  const estimate = calculateEstimate()

  const generateWhatsAppMessage = () => {
    const message = `Hi, I'm interested in Enterprise IT Services.

My requirements:
- Servers: ${estimatorValues.servers}
- Users: ${estimatorValues.users}
- Locations: ${estimatorValues.locations}
- Service Model: ${estimatorValues.model}

Estimated budget: ${formatCurrency(estimate.low)} - ${formatCurrency(estimate.high)}/year

Please contact me for a detailed assessment.`
    return `https://wa.me/923008486596?text=${encodeURIComponent(message)}`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="it-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#it-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Software, Cloud & AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise IT<span className="text-red-500"> Services</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete IT infrastructure management, 24/7 helpdesk support, and proactive monitoring for Pakistani
              enterprises. Focus on your business while we handle your technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Free IT Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to IT Consultant
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
                <Image
                  src="/server-room-network-infrastructure-modern.jpg"
                  alt="Enterprise IT Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">99.9%</div>
                    <div className="text-sm text-zinc-500">Uptime Guaranteed</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">15min</div>
                    <div className="text-sm text-zinc-500">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Your Complete IT Department, Outsourced
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                Managing IT infrastructure in-house is expensive and complex. HNL provides comprehensive managed IT
                services with guaranteed SLAs, allowing you to focus on core business while we handle technology.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 NOC monitoring and incident response",
                  "Reduce IT operational costs by 40-60%",
                  "Access to certified enterprise IT experts",
                  "Predictable monthly costs, no surprise bills",
                  "Proactive maintenance prevents downtime",
                  "Scale IT resources up or down as needed",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-zinc-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Complete IT Service Portfolio</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From infrastructure to helpdesk, we provide end-to-end managed IT services tailored for enterprises
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {servicePackages.map((pkg) => (
                <TabsTrigger
                  key={pkg.id}
                  value={pkg.id}
                  className="py-4 px-6 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">{pkg.name}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {servicePackages.map((pkg) => (
              <TabsContent key={pkg.id} value={pkg.id}>
                <Card className="border-2 border-zinc-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{pkg.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{pkg.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Service Includes</h4>
                          <div className="space-y-2">
                            {pkg.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="text-lg font-semibold text-red-600">{pkg.pricing}</div>
                      </div>

                      <div>
                        <div className="bg-zinc-50 rounded-xl p-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Business Benefits</h4>
                          <ul className="space-y-2 mb-6">
                            {pkg.benefits.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <Link href={generateWhatsAppMessage()} target="_blank">
                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                              Get {pkg.name} Quote
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Flexible Service Models</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Choose the support model that fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceModels.map((model, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{model.name}</h3>
                  <p className="text-zinc-600 mb-4 text-sm">{model.description}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Response Time:</span>
                      <span className="font-medium text-zinc-900">{model.response}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Coverage:</span>
                      <span className="font-medium text-zinc-900">{model.coverage}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100">
                    <p className="text-xs text-zinc-500">
                      <strong>Best for:</strong> {model.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Delivery Process</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A proven methodology for smooth transition and ongoing operational excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-red-600/50 transform md:-translate-x-1/2"></div>

              {processTimeline.map((phase, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 border-4 border-black"></div>

                  <div className={`md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                      <div
                        className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? "justify-start md:justify-end" : "justify-start"}`}
                      >
                        <span className="text-red-500 font-bold">Phase {idx + 1}</span>
                        <span className="text-zinc-500">|</span>
                        <span className="text-zinc-400">{phase.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{phase.phase}</h3>
                      <ul className="space-y-2 mb-4">
                        {phase.activities.map((activity, i) => (
                          <li
                            key={i}
                            className={`text-sm text-zinc-400 flex items-center gap-2 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                          >
                            <CheckCircle2 className="w-3 h-3 text-red-500 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-zinc-500 pt-3 border-t border-zinc-800">
                        <strong>Deliverables:</strong> {phase.deliverables}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">IT Services Cost Estimator</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Get an instant estimate for your managed IT services investment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-600/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Number of Servers: {estimatorValues.servers}
                      </Label>
                      <Slider
                        value={[estimatorValues.servers]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, servers: v[0] })}
                        min={5}
                        max={200}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>5</span>
                        <span>200</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-3 block">Number of Users: {estimatorValues.users}</Label>
                      <Slider
                        value={[estimatorValues.users]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, users: v[0] })}
                        min={10}
                        max={2000}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>10</span>
                        <span>2000</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Office Locations: {estimatorValues.locations}
                      </Label>
                      <Slider
                        value={[estimatorValues.locations]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, locations: v[0] })}
                        min={1}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>1</span>
                        <span>20</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Service Model</Label>
                      <Select
                        value={estimatorValues.model}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, model: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Support (Business Hours)</SelectItem>
                          <SelectItem value="standard">Standard Managed (Extended)</SelectItem>
                          <SelectItem value="enterprise">Enterprise 24/7</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-zinc-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-zinc-900 mb-4">Your Estimate</h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Annual Investment</div>
                        <div className="text-2xl font-bold text-zinc-900">
                          {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Est. Monthly Cost</div>
                        <div className="text-xl font-bold text-red-600">{formatCurrency(estimate.monthly)}/mo</div>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-500 mb-6">
                      *Estimates are indicative. Final pricing based on detailed assessment.
                    </div>

                    <div className="space-y-3">
                      <Link href={generateWhatsAppMessage()} target="_blank">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Share on WhatsApp
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full bg-transparent">
                          <Phone className="w-4 h-4 mr-2" />
                          Talk to Expert
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Certifications & Partnerships</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Industry-recognized certifications ensuring the highest service quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-4 text-center hover:bg-zinc-100 transition-colors">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-zinc-900 text-sm">{cert.name}</div>
                <div className="text-xs text-zinc-500">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Outsource Your IT Operations?</h2>
                <p className="text-neutral-300 mb-6">
                  Get a free IT audit from our certified experts. We'll analyze your infrastructure, identify gaps, and
                  propose a tailored managed services solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Free IT Audit
                    </Button>
                  </Link>
                  <Link href="tel:+923008486596">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-6 py-3 bg-transparent"
                    >
                      Call: +92 300 8486596
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">100+</div>
                  <div className="text-neutral-300 text-sm">Clients Served</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">99.9%</div>
                  <div className="text-neutral-300 text-sm">Uptime SLA</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">15min</div>
                  <div className="text-neutral-300 text-sm">Response</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">24/7</div>
                  <div className="text-neutral-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Enterprise IT Services Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-50 rounded-lg border border-zinc-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-neutral-900 hover:text-red-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
