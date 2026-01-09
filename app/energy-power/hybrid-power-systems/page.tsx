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
  Sun,
  Clock,
  Award,
  TrendingDown,
  Zap,
  Leaf,
  Radio,
  Building2,
  Factory,
  Battery,
} from "lucide-react"

const stats = [
  { value: "300+", label: "Hybrid Sites", icon: Sun },
  { value: "70%", label: "Fuel Reduction", icon: TrendingDown },
  { value: "3 Years", label: "Typical ROI", icon: Clock },
  { value: "99.5%", label: "Uptime", icon: Award },
]

const hybridConfigs = [
  {
    id: "solar-bess",
    name: "Solar + BESS",
    fullName: "Solar + Battery Hybrid",
    description: "Grid-connected solar with battery storage for peak shaving and backup",
    components: ["Solar PV panels", "Lithium BESS", "Hybrid inverter", "Smart controller"],
    bestFor: ["Sites with good grid availability", "Peak demand reduction", "Green energy goals"],
    savings: "50-60%",
    image: "/hybrid-solar-bess-installation.jpg",
  },
  {
    id: "solar-diesel",
    name: "Solar + Diesel",
    fullName: "Solar + Diesel Generator Hybrid",
    description: "Solar reduces generator runtime during daytime hours",
    components: ["Solar PV panels", "Diesel generator", "ATS/Sync panel", "Controller"],
    bestFor: ["Remote off-grid sites", "High daytime loads", "Immediate fuel savings"],
    savings: "40-50%",
    image: "/hybrid-solar-diesel-installation.jpg",
  },
  {
    id: "full-hybrid",
    name: "Full Hybrid",
    fullName: "Solar + BESS + Diesel (Full Hybrid)",
    description: "Complete energy solution with maximum fuel savings and 100% uptime guarantee",
    components: ["Solar PV", "Lithium BESS", "Diesel generator", "Intelligent EMS"],
    bestFor: ["Telecom towers", "Data centers", "Critical facilities"],
    savings: "70-80%",
    image: "/full-hybrid-power-system.jpg",
  },
]

const operatingModes = [
  {
    mode: "Daytime - Grid Available",
    source: "Solar + Grid",
    description: "Solar powers load, excess charges battery",
  },
  { mode: "Daytime - Grid Outage", source: "Solar + BESS", description: "Solar + battery handle load, no diesel" },
  { mode: "Night - Grid Available", source: "Grid + BESS", description: "Battery discharges for peak shaving" },
  { mode: "Night - Grid Outage", source: "BESS + Diesel", description: "Battery first, diesel if extended outage" },
  { mode: "Extended Outage", source: "Diesel + Solar", description: "Generator runs, solar reduces fuel consumption" },
]

const caseStudy = {
  title: "10 kW Telecom Tower - Lahore",
  comparison: [
    { metric: "Monthly fuel consumption", dieselOnly: "3,000 liters", hybrid: "900 liters (70% reduction)" },
    { metric: "Monthly fuel cost (@Rs 300/L)", dieselOnly: "Rs 900,000", hybrid: "Rs 270,000" },
    { metric: "Annual savings", dieselOnly: "-", hybrid: "Rs 7.56 Million" },
    { metric: "System payback", dieselOnly: "-", hybrid: "2.5 - 3.5 years" },
  ],
}

const applications = [
  {
    name: "Telecom Towers",
    icon: Radio,
    description: "5-20 kWp solar + 20-50 kWh BESS + existing DG",
    savings: "60-70%",
  },
  {
    name: "Commercial Buildings",
    icon: Building2,
    description: "50-500 kWp rooftop solar with storage",
    savings: "40-50%",
  },
  {
    name: "Industrial Facilities",
    icon: Factory,
    description: "100+ kWp ground-mount with peak shaving",
    savings: "30-40%",
  },
  {
    name: "Remote Sites",
    icon: Sun,
    description: "Off-grid solar + BESS + diesel backup",
    savings: "70-80%",
  },
]

const faqs = [
  {
    question: "What size hybrid system do I need for my telecom tower?",
    answer:
      "Typical 4G towers need 5-10 kWp solar + 20-40 kWh BESS + existing diesel genset. HNL performs detailed load analysis including seasonal variations to right-size your system for maximum savings.",
  },
  {
    question: "Can I add solar to my existing diesel generator setup?",
    answer:
      "Yes, HNL specializes in retrofitting existing diesel infrastructure with solar and batteries. We integrate with most generator brands and control systems with minimal disruption to operations.",
  },
  {
    question: "What happens during monsoon season with less sunlight?",
    answer:
      "Hybrid systems automatically adjust. The battery provides buffer, and the diesel generator kicks in more frequently. Annual fuel savings typically still exceed 50% even accounting for monsoon.",
  },
  {
    question: "Do you offer financing or ESCO models?",
    answer:
      "HNL offers multiple financing options: outright purchase, lease-to-own, and ESCO models where you pay based on fuel savings achieved. Contact us for customized financing solutions.",
  },
  {
    question: "How long do solar panels and batteries last?",
    answer:
      "Solar panels: 25+ year warranty with 80% output guarantee. Lithium batteries: 10-15 year lifespan (5,000+ cycles). HNL systems are designed for 20+ year total operational life.",
  },
  {
    question: "What maintenance does a hybrid system require?",
    answer:
      "Minimal: quarterly solar panel cleaning, annual battery health checks, standard generator servicing. HNL offers comprehensive O&M packages for complete peace of mind.",
  },
  {
    question: "How quickly can a hybrid system be installed?",
    answer:
      "Typical installation takes 2-4 weeks for telecom sites, 4-8 weeks for commercial/industrial. Retrofit projects can often be completed without service interruption.",
  },
  {
    question: "What is the environmental benefit of going hybrid?",
    answer:
      "A typical 10 kW hybrid system prevents 15-20 tons of CO2 emissions annually. Many organizations use this for ESG reporting and carbon footprint reduction goals.",
  },
]

const estimatorFields = [
  {
    id: "siteLoad",
    label: "Average Site Load (kW)",
    type: "slider" as const,
    min: 1,
    max: 100,
    step: 1,
    unit: "kW",
    defaultValue: 10,
  },
  {
    id: "gridAvailability",
    label: "Grid Availability",
    type: "select" as const,
    options: [
      { value: "good", label: "Good (>20 hrs/day)", multiplier: 0.9 },
      { value: "moderate", label: "Moderate (12-20 hrs/day)", multiplier: 1.0 },
      { value: "poor", label: "Poor (<12 hrs/day)", multiplier: 1.15 },
      { value: "offgrid", label: "Off-Grid", multiplier: 1.3 },
    ],
    defaultValue: "moderate",
  },
  {
    id: "hybridType",
    label: "Hybrid Configuration",
    type: "select" as const,
    options: [
      { value: "solar-diesel", label: "Solar + Diesel", multiplier: 0.7 },
      { value: "solar-bess", label: "Solar + BESS", multiplier: 1.0 },
      { value: "full-hybrid", label: "Full Hybrid (Solar+BESS+DG)", multiplier: 1.3 },
    ],
    defaultValue: "full-hybrid",
  },
  {
    id: "autonomy",
    label: "Battery Autonomy (without solar/grid)",
    type: "select" as const,
    options: [
      { value: "4", label: "4 Hours", multiplier: 1.0 },
      { value: "6", label: "6 Hours", multiplier: 1.4 },
      { value: "8", label: "8 Hours", multiplier: 1.8 },
      { value: "12", label: "12 Hours", multiplier: 2.5 },
    ],
    defaultValue: "6",
  },
  {
    id: "installation",
    label: "Installation Type",
    type: "select" as const,
    options: [
      { value: "rooftop", label: "Rooftop Solar", multiplier: 1.0 },
      { value: "ground", label: "Ground Mount", multiplier: 1.15 },
      { value: "carport", label: "Carport/Shade Structure", multiplier: 1.25 },
    ],
    defaultValue: "rooftop",
  },
]

const calculateHybridEstimate = (values: Record<string, string | number>) => {
  const siteLoad = values.siteLoad as number
  const autonomyHours = Number.parseInt(values.autonomy as string)

  // Solar sizing (1.5x load for good coverage)
  const solarKwp = siteLoad * 1.5
  const solarCostPerKwp = 85000

  // Battery sizing
  const bessKwh = siteLoad * autonomyHours * 1.2
  const bessCostPerKwh = 40000

  // Base costs
  let totalCost = solarKwp * solarCostPerKwp + bessKwh * bessCostPerKwh

  const gridMultipliers: Record<string, number> = { good: 0.9, moderate: 1.0, poor: 1.15, offgrid: 1.3 }
  const typeMultipliers: Record<string, number> = { "solar-diesel": 0.7, "solar-bess": 1.0, "full-hybrid": 1.3 }
  const installMultipliers: Record<string, number> = { rooftop: 1.0, ground: 1.15, carport: 1.25 }

  totalCost *= gridMultipliers[values.gridAvailability as string] || 1
  totalCost *= typeMultipliers[values.hybridType as string] || 1
  totalCost *= installMultipliers[values.installation as string] || 1

  // Calculate savings (assuming 65% fuel reduction avg)
  const monthlyFuelSaved = siteLoad * 24 * 30 * 0.65 * 25
  const paybackMonths = Math.round(totalCost / monthlyFuelSaved)

  const lowEstimate = Math.round(totalCost * 0.9)
  const highEstimate = Math.round(totalCost * 1.1)

  return {
    lowEstimate,
    highEstimate,
    timeline: "4-8 weeks",
    breakdown: [
      {
        label: `${Math.round(solarKwp)} kWp Solar PV`,
        value: formatCurrency(Math.round(solarKwp * solarCostPerKwp)),
      },
      {
        label: `${Math.round(bessKwh)} kWh BESS`,
        value: formatCurrency(Math.round(bessKwh * bessCostPerKwh)),
      },
      {
        label: "Estimated monthly savings",
        value: formatCurrency(Math.round(monthlyFuelSaved)),
      },
      { label: "Estimated payback", value: `${paybackMonths} months` },
    ],
  }
}

export default function HybridPowerSystemsPage() {
  const [activeTab, setActiveTab] = useState("full-hybrid")

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hybrid-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hybrid-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Sun className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Energy & Power Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hybrid Power
              <span className="text-red-500"> Systems</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Solar + BESS + Diesel integration for 70% fuel savings. Intelligent energy management for telecom towers,
              commercial buildings, and industrial facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Hybrid Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Site Survey
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
                src="/hybrid-power-system-telecom-tower.jpg"
                alt="Hybrid power system at telecom tower"
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
                    <div className="text-2xl font-bold text-zinc-900">70%</div>
                    <div className="text-sm text-zinc-500">Fuel Reduction</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">3 Yr</div>
                <div className="text-sm opacity-90">Payback</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why Go Hybrid?</h2>
              <p className="text-lg text-zinc-600 mb-8">
                Hybrid power systems combine the best of solar, battery, and diesel technologies. Solar provides free
                energy during the day, batteries store excess for night use, and diesel only runs when absolutely
                needed.
              </p>

              <div className="space-y-4">
                {[
                  "60-70% fuel cost reduction from day one",
                  "100% uptime with intelligent source switching",
                  "3-year typical payback on investment",
                  "Reduce carbon footprint by 15-20 tons CO2/year",
                  "Minimal maintenance compared to diesel-only",
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

      {/* Hybrid Configurations Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Hybrid Configurations</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Choose the right configuration for your needs</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {hybridConfigs.map((config) => (
                <TabsTrigger
                  key={config.id}
                  value={config.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">{config.name}</div>
                    <div className="text-xs opacity-80">{config.savings} savings</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {hybridConfigs.map((config) => (
              <TabsContent key={config.id} value={config.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{config.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{config.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Components</h4>
                          <div className="flex flex-wrap gap-2">
                            {config.components.map((comp, idx) => (
                              <span key={idx} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">
                                {comp}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Best For</h4>
                          <div className="space-y-2">
                            {config.bestFor.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                          <TrendingDown className="w-5 h-5" />
                          <span className="font-bold">{config.savings} fuel savings</span>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto bg-zinc-100">
                        <Image
                          src={config.image || "/placeholder.svg"}
                          alt={config.fullName}
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Intelligent Energy Management</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Automatic source switching based on availability and cost
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-zinc-100 p-4 font-semibold text-sm">
                <div>Operating Mode</div>
                <div>Power Source</div>
                <div>Description</div>
              </div>
              {operatingModes.map((item, idx) => (
                <div key={idx} className={`grid grid-cols-3 p-4 text-sm ${idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}>
                  <div className="font-medium text-zinc-900">{item.mode}</div>
                  <div className="text-red-600 font-semibold">{item.source}</div>
                  <div className="text-zinc-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Savings</h2>
            <p className="text-lg text-zinc-400">{caseStudy.title}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-3 bg-zinc-800 p-4 font-semibold text-sm">
                <div>Metric</div>
                <div className="text-center">Diesel Only</div>
                <div className="text-center">Hybrid System</div>
              </div>
              {caseStudy.comparison.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 p-4 text-sm ${idx % 2 === 0 ? "" : "bg-zinc-800/50"}`}>
                  <div className="text-zinc-400">{row.metric}</div>
                  <div className="text-center">{row.dieselOnly}</div>
                  <div className="text-center text-green-400 font-bold">{row.hybrid}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center">
              * Actual savings depend on solar irradiation, load profile, and fuel prices.
            </p>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="Hybrid System Cost Estimator"
        description="Get an instant estimate for your hybrid power system"
        fields={estimatorFields}
        calculateEstimate={calculateHybridEstimate}
        serviceName="Hybrid Power System"
        whatsappNumber="+923001234567"
      />

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Applications</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Hybrid solutions for every sector</p>
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
                  {app.savings} savings
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Related Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "BESS", desc: "Standalone battery storage", href: "/energy-power/bess", icon: Battery },
              {
                title: "Diesel Generators",
                desc: "10-2000 kVA backup power",
                href: "/energy-power/diesel-generators",
                icon: Zap,
              },
              {
                title: "Energy O&M",
                desc: "Maintenance services",
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Cut Fuel Costs?</h2>
                  <p className="text-red-100 mb-6">
                    Get a free site survey and ROI analysis for your hybrid power system.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 21 111 000 HNL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="w-5 h-5" />
                      <span>hybrid@hnl.com.pk</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Free Site Survey</h3>
                  <p className="text-zinc-600 mb-6">
                    Our engineers will analyze solar potential, load profile, and calculate exact savings.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Request Hybrid Quote
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
