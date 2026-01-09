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
  Battery,
  Clock,
  Award,
  TrendingDown,
  Zap,
  Leaf,
  Radio,
  Building2,
  Factory,
  Sun,
} from "lucide-react"

const stats = [
  { value: "500+", label: "BESS Deployed", icon: Battery },
  { value: "70%", label: "Fuel Savings", icon: TrendingDown },
  { value: "10-15", label: "Year Lifespan", icon: Clock },
  { value: "24/7", label: "Monitoring", icon: Award },
]

const bessTypes = [
  {
    id: "telecom",
    name: "Telecom",
    fullName: "Telecom Tower BESS",
    description: "Compact lithium-ion systems designed for BTS sites with 4-8 hour backup capability",
    capacityRange: "10-50 kWh",
    typicalLoad: "3-5 kW",
    fuelSavings: "70-80%",
    roi: "18-24 months",
    features: ["Outdoor rated IP65", "Integrated BMS", "Remote monitoring", "Hot-swap capability"],
    image: "/bess-telecom-tower-installation.jpg",
  },
  {
    id: "commercial",
    name: "Commercial",
    fullName: "Commercial Building BESS",
    description: "Medium-scale systems for offices, retail, and small data centers",
    capacityRange: "50-200 kWh",
    typicalLoad: "20-50 kW",
    fuelSavings: "60-70%",
    roi: "24-36 months",
    features: ["Peak shaving", "UPS replacement", "Grid-tie capable", "Modular expansion"],
    image: "/bess-commercial-building.jpg",
  },
  {
    id: "industrial",
    name: "Industrial",
    fullName: "Industrial & Data Center BESS",
    description: "Large-scale containerized systems for mission-critical facilities",
    capacityRange: "200-2000 kWh",
    typicalLoad: "100-500 kW",
    fuelSavings: "50-60%",
    roi: "36-48 months",
    features: ["Container mounted", "Fire suppression", "N+1 redundancy", "SCADA integration"],
    image: "/bess-industrial-container.jpg",
  },
]

const roiCalculation = {
  title: "Telecom BTS Site ROI Example",
  generatorOnly: {
    monthlyDiesel: 80000,
    maintenance: 15000,
    annual: 1140000,
  },
  withBess: {
    monthlyDiesel: 20000,
    maintenance: 8000,
    annualSavings: 804000,
  },
  payback: "18-24 months",
}

const applications = [
  {
    name: "Telecom Towers",
    icon: Radio,
    description: "10-50 kWh for BTS sites with 4-8 hour backup",
    savings: "70-80%",
  },
  {
    name: "Data Centers",
    icon: Building2,
    description: "100-500 kWh for UPS replacement and peak shaving",
    savings: "60-70%",
  },
  {
    name: "Industrial Sites",
    icon: Factory,
    description: "50-200 kWh for critical process continuity",
    savings: "65-75%",
  },
  {
    name: "Hybrid Systems",
    icon: Sun,
    description: "Integration with solar for maximum savings",
    savings: "80-90%",
  },
]

const techSpecs = [
  { spec: "Battery Chemistry", value: "LiFePO4 (Lithium Iron Phosphate)" },
  { spec: "Cycle Life", value: "4,000-6,000 cycles at 80% DOD" },
  { spec: "Round-Trip Efficiency", value: "> 95%" },
  { spec: "Operating Temperature", value: "-20°C to +55°C" },
  { spec: "Warranty", value: "10 years or 4,000 cycles" },
  { spec: "Certifications", value: "IEC, UN38.3, UL1973" },
]

const faqs = [
  {
    question: "How does BESS reduce operational costs compared to generators?",
    answer:
      "BESS eliminates diesel fuel costs for short grid outages (which comprise 80% of outage events). For a typical telecom site, this means 60-80% reduction in fuel consumption, with payback in 18-24 months.",
  },
  {
    question: "What is the lifespan of lithium-ion BESS?",
    answer:
      "High-quality LiFePO4 BESS systems offer 10-15 year lifespan or 4,000-6,000 charge cycles. HNL uses Tier-1 battery cells with performance guarantees and comprehensive warranty coverage.",
  },
  {
    question: "Can BESS work with existing generators?",
    answer:
      "Yes, BESS can be retrofitted into existing generator sites. The BESS handles short outages while the generator provides backup for extended failures, significantly reducing fuel consumption and generator runtime.",
  },
  {
    question: "How is BESS monitored and maintained?",
    answer:
      "All HNL BESS systems include cloud-based monitoring with real-time alerts for battery health, state of charge, temperature, and system performance. Maintenance includes quarterly inspections and annual capacity testing.",
  },
  {
    question: "Is BESS safe for outdoor installation?",
    answer:
      "Yes, HNL BESS enclosures are IP65 rated for outdoor installation with integrated thermal management, fire suppression systems, and ventilation. All systems meet international safety standards.",
  },
  {
    question: "What happens when BESS reaches end of life?",
    answer:
      "LiFePO4 batteries are recyclable. HNL partners with certified recyclers for end-of-life battery disposal. Batteries retain 70-80% capacity after warranty period and can continue secondary use.",
  },
  {
    question: "Can BESS be integrated with solar panels?",
    answer:
      "Absolutely. BESS + Solar is the optimal configuration for maximum savings. Solar charges batteries during the day, BESS powers loads at night, and generator only runs during extended cloudy periods.",
  },
  {
    question: "What financing options are available for BESS?",
    answer:
      "HNL offers outright purchase, lease-to-own, and ESCO models where you pay based on fuel savings achieved. Contact us for customized financing solutions.",
  },
]

const estimatorFields = [
  {
    id: "siteLoad",
    label: "Site Load (kW)",
    type: "slider" as const,
    min: 1,
    max: 100,
    step: 1,
    unit: "kW",
    defaultValue: 5,
  },
  {
    id: "backupHours",
    label: "Backup Hours Required",
    type: "select" as const,
    options: [
      { value: "4", label: "4 Hours", multiplier: 1.0 },
      { value: "6", label: "6 Hours", multiplier: 1.5 },
      { value: "8", label: "8 Hours", multiplier: 2.0 },
      { value: "12", label: "12 Hours", multiplier: 3.0 },
    ],
    defaultValue: "6",
  },
  {
    id: "application",
    label: "Application Type",
    type: "select" as const,
    options: [
      { value: "telecom", label: "Telecom Tower", multiplier: 1.0 },
      { value: "commercial", label: "Commercial Building", multiplier: 1.1 },
      { value: "industrial", label: "Industrial Facility", multiplier: 1.15 },
      { value: "datacenter", label: "Data Center", multiplier: 1.25 },
    ],
    defaultValue: "telecom",
  },
  {
    id: "enclosure",
    label: "Enclosure Type",
    type: "select" as const,
    options: [
      { value: "indoor", label: "Indoor Cabinet", multiplier: 1.0 },
      { value: "outdoor", label: "Outdoor Enclosure", multiplier: 1.15 },
      { value: "container", label: "Container System", multiplier: 1.3 },
    ],
    defaultValue: "outdoor",
  },
  {
    id: "monitoring",
    label: "Monitoring & Support",
    type: "select" as const,
    options: [
      { value: "basic", label: "Basic (Local only)", multiplier: 1.0 },
      { value: "cloud", label: "Cloud Monitoring", multiplier: 1.08 },
      { value: "managed", label: "Fully Managed", multiplier: 1.15 },
    ],
    defaultValue: "cloud",
  },
]

const calculateBessEstimate = (values: Record<string, string | number>) => {
  const siteLoad = values.siteLoad as number
  const backupHours = Number.parseInt(values.backupHours as string)

  // Calculate kWh required (with 20% buffer for DOD)
  const kwhRequired = siteLoad * backupHours * 1.2

  // Base price per kWh (decreases with size)
  let pricePerKwh = 45000
  if (kwhRequired > 200) pricePerKwh = 35000
  else if (kwhRequired > 100) pricePerKwh = 38000
  else if (kwhRequired > 50) pricePerKwh = 40000

  const appMultipliers: Record<string, number> = {
    telecom: 1.0,
    commercial: 1.1,
    industrial: 1.15,
    datacenter: 1.25,
  }
  const enclosureMultipliers: Record<string, number> = { indoor: 1.0, outdoor: 1.15, container: 1.3 }
  const monitoringMultipliers: Record<string, number> = { basic: 1.0, cloud: 1.08, managed: 1.15 }

  const appMult = appMultipliers[values.application as string] || 1
  const encMult = enclosureMultipliers[values.enclosure as string] || 1
  const monMult = monitoringMultipliers[values.monitoring as string] || 1

  const totalCost = pricePerKwh * kwhRequired * appMult * encMult * monMult

  // Calculate monthly savings (assuming 75% fuel reduction)
  const monthlyFuelSaved = siteLoad * 24 * 30 * 0.75 * 25 // Assuming Rs 25/kWh equivalent diesel
  const paybackMonths = Math.round(totalCost / monthlyFuelSaved)

  const lowEstimate = Math.round(totalCost * 0.9)
  const highEstimate = Math.round(totalCost * 1.1)

  return {
    lowEstimate,
    highEstimate,
    timeline: "4-8 weeks",
    breakdown: [
      {
        label: `${Math.round(kwhRequired)} kWh Battery System`,
        value: formatCurrency(Math.round(pricePerKwh * kwhRequired)),
      },
      {
        label: "Monthly fuel savings (est.)",
        value: formatCurrency(Math.round(monthlyFuelSaved)),
      },
      { label: "Estimated payback period", value: `${paybackMonths} months` },
      {
        label: "10-year savings potential",
        value: formatCurrency(Math.round(monthlyFuelSaved * 120 - totalCost)),
      },
    ],
  }
}

export default function BESSPage() {
  const [activeTab, setActiveTab] = useState("telecom")

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="bess-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#bess-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Battery className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Energy & Power Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Battery Energy Storage
              <span className="text-red-500"> Systems (BESS)</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cut diesel costs by up to 80% with advanced lithium-ion BESS. Clean, reliable, and maintenance-free power
              backup for telecom, data centers, and industrial facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get BESS Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Calculate Savings
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

      {/* Problem/Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                The Problem: High Diesel Costs & Emissions
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                Pakistani businesses spend millions on diesel annually. With frequent grid outages, generators run for
                extended hours, driving up costs and carbon emissions.
              </p>
              <p className="text-lg text-zinc-600 mb-8">
                <strong>The solution:</strong> BESS eliminates fuel costs for short outages (80% of all outages) and
                dramatically reduces generator runtime.
              </p>

              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{roiCalculation.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-zinc-500 mb-2">Generator Only</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Monthly diesel:</span>
                        <span className="font-bold">
                          PKR {roiCalculation.generatorOnly.monthlyDiesel.toLocaleString()}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Maintenance:</span>
                        <span className="font-bold">
                          PKR {roiCalculation.generatorOnly.maintenance.toLocaleString()}
                        </span>
                      </li>
                      <li className="flex justify-between border-t pt-2 mt-2">
                        <span>Annual cost:</span>
                        <span className="font-bold text-red-600">
                          PKR {roiCalculation.generatorOnly.annual.toLocaleString()}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 mb-2">With BESS + Generator</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Monthly diesel:</span>
                        <span className="font-bold">PKR {roiCalculation.withBess.monthlyDiesel.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Maintenance:</span>
                        <span className="font-bold">PKR {roiCalculation.withBess.maintenance.toLocaleString()}</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 mt-2">
                        <span>Annual savings:</span>
                        <span className="font-bold text-green-600">
                          PKR {roiCalculation.withBess.annualSavings.toLocaleString()}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Payback period: {roiCalculation.payback}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/bess-installation-telecom-site.jpg"
                alt="BESS installation at telecom site"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">80%</div>
                    <div className="text-sm text-zinc-500">Less Emissions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESS Types Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">BESS Solutions by Application</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Right-sized battery systems for every requirement</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {bessTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold">{type.name}</div>
                    <div className="text-xs opacity-80">{type.capacityRange}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {bessTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{type.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{type.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-zinc-50 rounded-lg p-3">
                            <div className="text-xs text-zinc-500">Capacity Range</div>
                            <div className="font-bold text-zinc-900">{type.capacityRange}</div>
                          </div>
                          <div className="bg-zinc-50 rounded-lg p-3">
                            <div className="text-xs text-zinc-500">Typical Load</div>
                            <div className="font-bold text-zinc-900">{type.typicalLoad}</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <div className="text-xs text-green-600">Fuel Savings</div>
                            <div className="font-bold text-green-700">{type.fuelSavings}</div>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3">
                            <div className="text-xs text-red-600">Typical ROI</div>
                            <div className="font-bold text-red-700">{type.roi}</div>
                          </div>
                        </div>

                        <div>
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

      {/* Applications Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">BESS Applications</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Proven fuel savings across industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 hover:border-red-200 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <app.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{app.name}</h3>
                <p className="text-sm text-zinc-600 mb-4">{app.description}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <TrendingDown className="w-4 h-4" />
                  {app.savings} fuel savings
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Premium LiFePO4 battery technology with industry-leading specifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              {techSpecs.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center p-4 ${idx < techSpecs.length - 1 ? "border-b border-zinc-800" : ""}`}
                >
                  <span className="text-zinc-400">{item.spec}</span>
                  <span className="font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="BESS Cost & Savings Estimator"
        description="Calculate your BESS investment and fuel savings potential"
        fields={estimatorFields}
        calculateEstimate={calculateBessEstimate}
        serviceName="BESS Solution"
        whatsappNumber="+923001234567"
      />

      {/* How BESS Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">How BESS Works</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Intelligent energy management for maximum savings</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Grid Available", desc: "BESS charges from grid, load runs on grid power" },
                { step: "2", title: "Short Outage", desc: "BESS instantly takes over, no generator needed" },
                { step: "3", title: "Extended Outage", desc: "Generator starts only when BESS SOC < 20%" },
                { step: "4", title: "Grid Restored", desc: "BESS recharges, generator stops automatically" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Complete Energy Solutions</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              BESS works best as part of an integrated power strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Hybrid Power Systems",
                desc: "Solar + BESS + Generator for maximum savings",
                href: "/energy-power/hybrid-power-systems",
                icon: Sun,
              },
              {
                title: "Diesel Generators",
                desc: "Backup power from 10-2000 kVA",
                href: "/energy-power/diesel-generators",
                icon: Zap,
              },
              {
                title: "Energy O&M",
                desc: "Maintenance and monitoring services",
                href: "/energy-power/energy-operations-maintenance",
                icon: Award,
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Cut Diesel Costs?</h2>
                  <p className="text-red-100 mb-6">
                    Get a customized BESS proposal with ROI analysis and fuel savings projections.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 21 111 000 HNL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Battery className="w-5 h-5" />
                      <span>bess@hnl.com.pk</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Free Site Assessment</h3>
                  <p className="text-zinc-600 mb-6">
                    Our engineers will analyze your load profile and calculate exact savings potential.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Request BESS Quote
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
