"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle2, Phone, Wrench, Clock, Award, Users, Zap, Battery, Sun, Activity } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "2,500+", label: "Sites Under O&M", icon: Wrench },
  { value: "99.7%", label: "Average Uptime", icon: Award },
  { value: "4 Hrs", label: "Mean Time to Repair", icon: Clock },
  { value: "92%", label: "Client Retention", icon: Users },
]

const serviceTiers = [
  {
    id: "basic",
    name: "Basic",
    fullName: "Basic O&M",
    description: "Scheduled maintenance for sites with local staff and low-criticality loads",
    features: [
      "Quarterly preventive maintenance",
      "Oil and filter changes per OEM schedule",
      "Annual load bank testing",
      "Break-fix support (charged separately)",
    ],
    responseTime: "48-72 hours",
    bestFor: ["Low-criticality sites", "Sites with local staff", "Budget-conscious clients"],
    price: "From PKR 15,000/month",
  },
  {
    id: "managed",
    name: "Managed",
    fullName: "Managed O&M",
    description: "Proactive monitoring with guaranteed uptime SLAs - most popular for telecom and enterprise",
    features: [
      "24/7 remote monitoring (NOC)",
      "Monthly preventive maintenance",
      "Predictive diagnostics",
      "Break-fix included",
      "Fuel management and reporting",
    ],
    responseTime: "8-12 hours",
    bestFor: ["Telecom operators", "Enterprise clients", "Multi-site portfolios"],
    price: "From PKR 35,000/month",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    fullName: "Premium O&M",
    description: "Maximum uptime guarantee with dedicated technician on standby for mission-critical facilities",
    features: [
      "Everything in Managed tier",
      "On-site technician during business hours",
      "99.9% uptime SLA with penalties",
      "Emergency spare parts stocked locally",
      "Quarterly business reviews",
    ],
    responseTime: "2-4 hours",
    bestFor: ["Data centers", "Hospitals", "Critical infrastructure"],
    price: "Custom Quote",
  },
]

const equipmentTypes = [
  {
    type: "Generators",
    icon: Zap,
    brands: "Cummins, Perkins, Cat, FG Wilson, AGG",
    services: [
      "Oil and filter changes",
      "Cooling system checks",
      "Battery testing",
      "Load bank testing",
      "Fuel quality testing",
    ],
  },
  {
    type: "BESS & Hybrid",
    icon: Battery,
    brands: "All major lithium-ion manufacturers",
    services: [
      "Battery health monitoring",
      "Thermal management",
      "BMS firmware updates",
      "Inverter diagnostics",
      "System optimization",
    ],
  },
  {
    type: "Solar Systems",
    icon: Sun,
    brands: "All panel and inverter manufacturers",
    services: ["Panel cleaning", "Inverter maintenance", "String testing", "Performance analysis", "Shade management"],
  },
  {
    type: "Power Distribution",
    icon: Activity,
    brands: "ABB, Schneider, Siemens, Local",
    services: [
      "ATS/AMF panel testing",
      "Breaker calibration",
      "Earthing testing",
      "Cable termination",
      "UPS maintenance",
    ],
  },
]

const preventiveVsReactive = [
  { metric: "Equipment lifespan", reactive: "10-12 years", preventive: "15-20 years" },
  { metric: "Unplanned downtime", reactive: "15-20 hours/year", preventive: "<2 hours/year" },
  { metric: "Repair costs", reactive: "High (emergency parts)", preventive: "50-60% lower" },
  { metric: "Total cost of ownership", reactive: "Baseline", preventive: "30-40% reduction" },
]

const faqs = [
  {
    question: "Can HNL take over O&M from another vendor?",
    answer:
      "Yes. We perform a transition audit, take over all documentation, and ensure zero downtime during the handover period. Most transitions complete within 2-4 weeks.",
  },
  {
    question: "Do you provide O&M for equipment not installed by HNL?",
    answer:
      "Absolutely. HNL maintains power equipment from any OEM or installer. We work with all major generator, BESS, UPS, and solar brands.",
  },
  {
    question: "What if you cannot fix an issue within the SLA time?",
    answer:
      "Our Managed and Premium O&M contracts include uptime guarantees with financial penalties for SLA breaches. We also maintain emergency rental equipment to minimize downtime.",
  },
  {
    question: "Can you help reduce our fuel costs?",
    answer:
      "Yes. HNL O&M includes fuel consumption analysis and recommendations for hybrid retrofits, load optimization, generator rightsizing, and BESS installation.",
  },
  {
    question: "Do you offer O&M training for our in-house teams?",
    answer:
      "Yes. HNL provides operator training, troubleshooting guides, and knowledge transfer as part of O&M contracts. We can also certify your staff on specific equipment.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "Monthly reports include: equipment uptime, maintenance performed, fuel consumption, pending issues, and recommendations. Custom dashboards available for enterprise clients.",
  },
  {
    question: "How do you handle emergency breakdowns?",
    answer:
      "24/7 hotline with dedicated dispatch. Response times per SLA tier (4-48 hours). Mobile repair units carry common spare parts. Rental generators available for extended repairs.",
  },
  {
    question: "Can you manage sites across Pakistan?",
    answer:
      "Yes. HNL has field teams in all major cities and regional hubs. We currently manage 2,500+ sites nationwide with 144+ field offices and 1,200+ technicians.",
  },
]

const estimatorFields = [
  {
    id: "siteCount",
    label: "Number of Sites",
    type: "slider" as const,
    min: 1,
    max: 500,
    step: 1,
    unit: "sites",
    defaultValue: 10,
  },
  {
    id: "equipmentType",
    label: "Primary Equipment",
    type: "select" as const,
    options: [
      { value: "dg", label: "Generators Only", multiplier: 1.0 },
      { value: "dg-bess", label: "Generators + BESS", multiplier: 1.4 },
      { value: "hybrid", label: "Full Hybrid (DG+Solar+BESS)", multiplier: 1.7 },
      { value: "datacenter", label: "Data Center (Full Stack)", multiplier: 2.2 },
    ],
    defaultValue: "dg-bess",
  },
  {
    id: "avgCapacity",
    label: "Average Capacity per Site (kVA)",
    type: "select" as const,
    options: [
      { value: "50", label: "Up to 50 kVA", multiplier: 0.8 },
      { value: "100", label: "50-100 kVA", multiplier: 1.0 },
      { value: "250", label: "100-250 kVA", multiplier: 1.3 },
      { value: "500", label: "250-500 kVA", multiplier: 1.6 },
      { value: "1000", label: "500+ kVA", multiplier: 2.0 },
    ],
    defaultValue: "100",
  },
  {
    id: "tier",
    label: "Service Tier",
    type: "select" as const,
    options: [
      { value: "basic", label: "Basic (Quarterly PM)", multiplier: 1.0 },
      { value: "managed", label: "Managed (24/7 Monitoring)", multiplier: 2.0 },
      { value: "premium", label: "Premium (On-site Support)", multiplier: 3.5 },
    ],
    defaultValue: "managed",
  },
  {
    id: "spares",
    label: "Spare Parts Coverage",
    type: "select" as const,
    options: [
      { value: "consumables", label: "Consumables Only", multiplier: 1.0 },
      { value: "wear", label: "Consumables + Wear Parts", multiplier: 1.2 },
      { value: "comprehensive", label: "Comprehensive (All Parts)", multiplier: 1.5 },
    ],
    defaultValue: "wear",
  },
]

const calculateEnergyOMEstimate = (values: Record<string, string | number>) => {
  const siteCount = values.siteCount as number

  // Base rate per site per month
  const baseRate = 18000

  const equipMultipliers: Record<string, number> = { dg: 1.0, "dg-bess": 1.4, hybrid: 1.7, datacenter: 2.2 }
  const capMultipliers: Record<string, number> = { "50": 0.8, "100": 1.0, "250": 1.3, "500": 1.6, "1000": 2.0 }
  const tierMultipliers: Record<string, number> = { basic: 1.0, managed: 2.0, premium: 3.5 }
  const sparesMultipliers: Record<string, number> = { consumables: 1.0, wear: 1.2, comprehensive: 1.5 }

  const equipMult = equipMultipliers[values.equipmentType as string] || 1
  const capMult = capMultipliers[values.avgCapacity as string] || 1
  const tierMult = tierMultipliers[values.tier as string] || 1
  const sparesMult = sparesMultipliers[values.spares as string] || 1

  // Volume discount for multi-site
  let volumeDiscount = 1.0
  if (siteCount > 100) volumeDiscount = 0.75
  else if (siteCount > 50) volumeDiscount = 0.8
  else if (siteCount > 20) volumeDiscount = 0.85
  else if (siteCount > 10) volumeDiscount = 0.9

  const monthlyPerSite = baseRate * equipMult * capMult * tierMult * sparesMult * volumeDiscount
  const monthlyTotal = monthlyPerSite * siteCount
  const annualTotal = monthlyTotal * 12

  const lowEstimate = Math.round(annualTotal * 0.9)
  const highEstimate = Math.round(annualTotal * 1.1)

  return {
    lowEstimate,
    highEstimate,
    timeline: "Ongoing contract",
    breakdown: [
      { label: "Monthly per site", value: formatCurrency(Math.round(monthlyPerSite)) },
      { label: `${siteCount} sites monthly`, value: formatCurrency(Math.round(monthlyTotal)) },
      { label: "Volume discount", value: `-${Math.round((1 - volumeDiscount) * 100)}%` },
      { label: "Annual contract value", value: formatCurrency(Math.round(annualTotal)) },
    ],
  }
}

export default function EnergyOperationsMaintenancePage() {
  const [activeTab, setActiveTab] = useState("managed")

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
              <span className="text-sm font-medium text-red-400">Energy & Power Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Energy Operations &<span className="text-red-500"> Maintenance</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maximize uptime and extend equipment life with HNL proactive O&M services. 24/7 monitoring, preventive
              maintenance, and rapid response for generators, BESS, and power infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Request O&M Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Site Audit
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

      {/* Service Tiers Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">O&M Service Levels</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Choose the right level of support for your needs</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto bg-zinc-100 border border-zinc-200 rounded-xl p-1 mb-8">
              {serviceTiers.map((tier) => (
                <TabsTrigger
                  key={tier.id}
                  value={tier.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white relative"
                >
                  <div className="text-center">
                    <div className="font-semibold">{tier.name}</div>
                    <div className="text-xs opacity-80">{tier.responseTime}</div>
                  </div>
                  {tier.popular && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceTiers.map((tier) => (
              <TabsContent key={tier.id} value={tier.id}>
                <Card className={`border-2 ${tier.popular ? "border-red-500" : "border-zinc-200"} shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tier.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{tier.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Included Services</h4>
                          <div className="space-y-2">
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-lg">
                          <Clock className="w-5 h-5 text-red-600" />
                          <span className="font-semibold">Response Time: {tier.responseTime}</span>
                        </div>
                      </div>

                      <div>
                        <div className="bg-zinc-50 rounded-xl p-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Best For</h4>
                          <ul className="space-y-2 mb-6">
                            {tier.bestFor.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="pt-4 border-t border-zinc-200">
                            <div className="text-sm text-zinc-500">Starting from</div>
                            <div className="text-2xl font-bold text-red-600">{tier.price}</div>
                          </div>
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

      {/* What We Maintain */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">What We Maintain</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Comprehensive O&M for all power equipment types</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {equipmentTypes.map((equip, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="flex items-center justify-center mb-4">
                  <equip.icon className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{equip.type}</h3>
                <p className="text-zinc-600 mb-6">Brands: {equip.brands}</p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  {equip.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Maximize Your Power Asset Performance</h2>
                <p className="text-neutral-300 mb-6">
                  Join 500+ sites across Pakistan benefiting from HNL's comprehensive O&M services. Our expert teams
                  ensure your power infrastructure operates at peak efficiency 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Site Assessment
                    </Button>
                  </Link>
                  <Link href="tel:+924235761999">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-6 py-3 bg-transparent"
                    >
                      Call: +92 42 3576 1999
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">500+</div>
                  <div className="text-neutral-300 text-sm">Sites Under O&M</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">99.5%</div>
                  <div className="text-neutral-300 text-sm">Uptime Guaranteed</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">24/7</div>
                  <div className="text-neutral-300 text-sm">Support Coverage</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">2Hr</div>
                  <div className="text-neutral-300 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">O&M Service Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What does your O&M service include?",
                a: "Our comprehensive O&M service includes preventive maintenance (oil changes, filter replacements, inspections), corrective maintenance (repairs, part replacements), 24/7 remote monitoring, emergency response, performance reporting, and spare parts management. We tailor packages based on your equipment type and operational requirements.",
              },
              {
                q: "How quickly can you respond to emergencies?",
                a: "We guarantee a 2-hour response time for critical emergencies within our service coverage areas. Our 144 service offices across Pakistan ensure rapid deployment of technicians with the right parts and tools to minimize your downtime.",
              },
              {
                q: "Do you provide O&M for non-HNL generators?",
                a: "Yes, we service generators from all major manufacturers including AGG Power, Perkins, Cummins, CAT, and others. Our technicians are trained on multiple platforms and we maintain comprehensive spare parts inventory for various brands.",
              },
              {
                q: "What is included in your preventive maintenance schedule?",
                a: "Our PM schedule includes oil and filter changes, coolant checks, belt inspections, battery testing, fuel system cleaning, electrical connections inspection, load bank testing, and comprehensive documentation. Frequency depends on running hours and manufacturer recommendations.",
              },
              {
                q: "Can you integrate with our existing monitoring systems?",
                a: "Absolutely. Our IoT-enabled monitoring can integrate with most SCADA systems, BMS platforms, and existing monitoring infrastructure. We also offer standalone monitoring solutions with cloud-based dashboards and mobile alerts.",
              },
              {
                q: "What are the contract options available?",
                a: "We offer flexible contracts: Basic (preventive maintenance only), Standard (PM + emergency response), Comprehensive (PM + corrective + parts), and Full-Service (all-inclusive with uptime guarantees). Contracts can be annual or multi-year with volume discounts.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-lg border border-neutral-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-neutral-900 hover:text-red-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
