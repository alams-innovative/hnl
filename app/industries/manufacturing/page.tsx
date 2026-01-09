"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Factory,
  Zap,
  Sun,
  Gauge,
  Shield,
  Clock,
  ChevronRight,
  CheckCircle2,
  Quote,
  ArrowRight,
  Cog,
  BarChart3,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Breadcrumbs from "@/components/breadcrumbs"
import CTASection from "@/components/cta-section"
import { getWhatsAppLink } from "@/lib/whatsapp"

const stats = [
  { value: "200+", label: "Manufacturing Sites" },
  { value: "99.8%", label: "Power Availability" },
  { value: "50%", label: "Energy Cost Savings" },
  { value: "500MW+", label: "Installed Capacity" },
]

const floatingStats = [
  { value: "200+", label: "Factories Powered", position: "top-8 -left-4" },
  { value: "50%", label: "Cost Reduction", position: "top-1/3 -right-8" },
  { value: "24/7", label: "Support", position: "bottom-1/4 -left-8" },
  { value: "99.8%", label: "Uptime", position: "bottom-8 -right-4" },
]

const useCases = [
  {
    title: "Challenge",
    icon: Factory,
    color: "border-l-red-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
    description:
      "Pakistan's manufacturing sector faces 6-8 hours of daily load shedding, causing production losses of up to 30%. Voltage fluctuations damage sensitive CNC machines and production equipment, with each hour of downtime costing millions in lost output.",
  },
  {
    title: "Opportunity",
    icon: Sun,
    color: "border-l-amber-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    description:
      "Manufacturers seek partners who can deliver uninterrupted power with hybrid solar-diesel-battery systems, reducing energy costs while meeting sustainability targets and ESG compliance requirements for export markets.",
  },
  {
    title: "Solution",
    icon: Zap,
    color: "border-l-blue-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    description:
      "HNL deploys turnkey industrial power systems with AGG Power generators (100kVA-3000kVA), solar rooftop installations up to 10MW, BESS for peak shaving, and smart IoT monitoring for predictive maintenance.",
    features: [
      "AGG Power industrial generators with AMF panels",
      "Solar rooftop systems with net metering",
      "Battery storage for critical load backup",
      "Real-time energy management dashboards",
      "Predictive maintenance via IoT sensors",
    ],
  },
  {
    title: "Outcome",
    icon: CheckCircle2,
    color: "border-l-green-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    description:
      "Manufacturing clients achieve 99.8% power availability, 50% reduction in energy costs, and zero unplanned downtime. ROI typically achieved within 2-3 years through energy savings alone.",
    features: [
      "99.8% power availability guaranteed",
      "50% reduction in electricity bills",
      "Zero production losses from outages",
      "ESG compliance for export markets",
      "2-3 year ROI on power investments",
    ],
  },
]

const sectorPartnerships = {
  textile: {
    name: "Textile & Apparel",
    logo: "/textile-mill-logo.jpg",
    stats: { plants: "80+", capacity: "200MW", savings: "45%" },
    description:
      "Powering Pakistan's largest textile mills with hybrid solar-diesel systems, ensuring uninterrupted production for spinning, weaving, and dyeing operations.",
    quote:
      "HNL's hybrid power solution reduced our energy costs by 45% while eliminating production stoppages. A game-changer for our export competitiveness.",
    author: "Operations Director",
    company: "Leading Textile Group",
  },
  pharmaceutical: {
    name: "Pharmaceutical",
    logo: "/pharma-company-logo.jpg",
    stats: { plants: "35+", capacity: "50MW", savings: "40%" },
    description:
      "Mission-critical power systems for pharmaceutical manufacturing with clean power conditioning, temperature-controlled backup, and regulatory compliance.",
    quote:
      "Pharmaceutical production demands zero tolerance for power quality issues. HNL delivers the reliability our GMP facilities require.",
    author: "Plant Manager",
    company: "Pharmaceutical Manufacturer",
  },
  food: {
    name: "Food & Beverage",
    logo: "/food-processing-logo.jpg",
    stats: { plants: "50+", capacity: "100MW", savings: "48%" },
    description:
      "Reliable power for cold chain, processing lines, and packaging operations with smart monitoring for temperature-sensitive production environments.",
    quote:
      "Our cold storage and processing lines cannot afford even a minute of downtime. HNL's redundant power systems give us complete peace of mind.",
    author: "Technical Director",
    company: "Food Processing Company",
  },
  cement: {
    name: "Cement & Heavy Industry",
    logo: "/cement-factory-logo.jpg",
    stats: { plants: "25+", capacity: "150MW", savings: "35%" },
    description:
      "High-capacity power solutions for cement kilns, crushers, and heavy machinery with robust generators and waste heat recovery integration.",
    quote:
      "HNL engineered a power solution that handles our massive load requirements while reducing fuel consumption significantly.",
    author: "Chief Engineer",
    company: "Cement Manufacturer",
  },
}

const benefits = [
  {
    icon: Zap,
    title: "Uninterrupted Power",
    description: "99.8% availability with seamless grid-generator-solar switching",
  },
  {
    icon: Sun,
    title: "Solar Integration",
    description: "Up to 10MW rooftop systems with net metering benefits",
  },
  {
    icon: Gauge,
    title: "Smart Monitoring",
    description: "Real-time dashboards for energy and production analytics",
  },
  {
    icon: Shield,
    title: "Equipment Protection",
    description: "Power conditioning prevents voltage-related damage",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock maintenance with 2-hour response time",
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description: "50% reduction in energy costs with hybrid systems",
  },
]

const timeline = [
  {
    year: "2006",
    title: "Industrial Power Entry",
    description: "First textile mill power project with 2MW diesel backup system",
  },
  {
    year: "2010",
    title: "Heavy Industry Expansion",
    description: "Cement and steel sector projects with high-capacity generators",
  },
  {
    year: "2015",
    title: "Solar Manufacturing",
    description: "First industrial solar rooftop installation of 1MW capacity",
  },
  {
    year: "2018",
    title: "Hybrid Systems Launch",
    description: "Integrated solar-diesel-battery solutions for factories",
  },
  {
    year: "2022",
    title: "Smart Factory IoT",
    description: "Energy management and predictive maintenance platforms deployed",
  },
  {
    year: "2024",
    title: "500MW Milestone",
    description: "Crossed 500MW total installed capacity for manufacturing sector",
  },
]

const faqs = [
  {
    question: "What size manufacturing facilities can HNL support?",
    answer:
      "We work with plants from 100kW to 10+ MW loads, including textiles, chemicals, pharmaceuticals, food processing, and heavy industries like cement and steel.",
  },
  {
    question: "Can you retrofit existing generator setups?",
    answer:
      "Yes, we can integrate solar and battery storage with existing diesel systems to create efficient hybrid solutions, maximizing your existing investment while reducing fuel costs.",
  },
  {
    question: "What ROI can we expect from hybrid power systems?",
    answer:
      "Most manufacturing clients achieve ROI within 2-3 years through energy cost savings of 40-50%. Solar installations with net metering can generate additional revenue by selling excess power to the grid.",
  },
  {
    question: "Do you provide 24/7 maintenance support?",
    answer:
      "Yes, we offer AMC contracts with guaranteed 2-hour response times, dedicated spare parts inventory, and predictive maintenance through IoT monitoring to prevent unplanned downtime.",
  },
  {
    question: "How do you ensure power quality for sensitive equipment?",
    answer:
      "We deploy industrial UPS systems, voltage regulators, and power conditioning equipment to protect CNC machines, laboratory instruments, and other sensitive manufacturing equipment from voltage fluctuations.",
  },
]

const relatedSolutions = [
  {
    title: "Diesel Generators",
    description: "Industrial-grade AGG Power generators from 100kVA to 3000kVA",
    href: "/energy-power/diesel-generators",
    icon: Cog,
  },
  {
    title: "Solar EPC",
    description: "Turnkey rooftop solar installations up to 10MW capacity",
    href: "/energy-power/solar-epc",
    icon: Sun,
  },
  {
    title: "BESS Solutions",
    description: "Battery storage for peak shaving and backup power",
    href: "/energy-power/bess",
    icon: Zap,
  },
  {
    title: "Energy O&M",
    description: "Preventive maintenance and 24/7 emergency support",
    href: "/energy-power/energy-operations-maintenance",
    icon: Wrench,
  },
]

export default function ManufacturingIndustryPage() {
  const [activeSector, setActiveSector] = useState("textile")
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="manufacturing-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#manufacturing-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
            >
              <Factory className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium">Industrial Power Solutions</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Manufacturing
              <span className="block text-red-500">Infrastructure Excellence</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Powering Pakistan's industrial backbone with 200+ manufacturing facilities, 500MW+ installed capacity, and
              hybrid power systems that deliver 99.8% uptime while cutting energy costs by 50%.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href={getWhatsAppLink({ action: "Quote", page: "Manufacturing Solutions" })}>
                  Request Site Survey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/energy-power">View Power Solutions</Link>
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Post-Hero Visual Hook */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
                Industrial Power Partner
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Keeping Pakistan's <span className="text-red-600">Factories Running</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From textile mills to pharmaceutical plants, HNL provides end-to-end power solutions that eliminate
                production stoppages and slash energy costs. Our hybrid systems combine diesel generators, solar power,
                and battery storage for maximum efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">200+ Plants</div>
                    <div className="text-sm text-gray-500">Powered nationwide</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500MW+</div>
                    <div className="text-sm text-gray-500">Installed capacity</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">50% Savings</div>
                    <div className="text-sm text-gray-500">Energy cost reduction</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-500">Maintenance support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image with Floating Stats */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-manufacturing-plant-with-solar-panels.jpg"
                  alt="Modern manufacturing facility with HNL power systems"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Stats */}
              {floatingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`absolute ${stat.position} bg-white rounded-xl shadow-lg p-4 border border-gray-100`}
                >
                  <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated R8 Spiral Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Nationwide Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing <span className="text-red-600">Footprint</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powering industrial facilities across Pakistan's major manufacturing hubs
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated R8 Spiral */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-red-200"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* R8 Spiral Image */}
              <motion.div
                className="absolute inset-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Image
                  src="/r8-spiral.png"
                  alt="HNL R8 Symbol"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Center Stats */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-32 h-32 md:w-40 md:h-40 shadow-xl flex flex-col items-center justify-center border-4 border-red-500">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">500MW</span>
                  <span className="text-xs text-gray-500">Installed</span>
                </div>
              </div>

              {/* Floating Industry Labels */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Textile Mills
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Pharmaceuticals
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY }}
              >
                Food & Beverage
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-8 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY }}
              >
                Cement & Steel
              </motion.div>
            </div>

            {/* Stats Below Spiral */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">80+</div>
                <div className="text-sm text-gray-600">Textile Plants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">35+</div>
                <div className="text-sm text-gray-600">Pharma Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-sm text-gray-600">Food Processors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Challenge/Opportunity/Solution/Outcome */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Use Case</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industrial Power <span className="text-red-600">Transformation</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How HNL solves manufacturing sector's critical power challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((item, index) => (
              <Card key={index} className={`border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.features && (
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className={`w-4 h-4 ${item.iconColor} flex-shrink-0 mt-0.5`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Partnerships - Tabbed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Sector Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific <span className="text-red-600">Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored power systems for every manufacturing vertical</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs value={activeSector} onValueChange={setActiveSector} className="w-full">
              <TabsList className="grid grid-cols-4 mb-8 bg-white border border-gray-200 p-1 rounded-xl">
                <TabsTrigger
                  value="textile"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg transition-all"
                >
                  Textile
                </TabsTrigger>
                <TabsTrigger
                  value="pharmaceutical"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg transition-all"
                >
                  Pharma
                </TabsTrigger>
                <TabsTrigger
                  value="food"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg transition-all"
                >
                  Food
                </TabsTrigger>
                <TabsTrigger
                  value="cement"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg transition-all"
                >
                  Heavy Industry
                </TabsTrigger>
              </TabsList>

              {Object.entries(sectorPartnerships).map(([key, sector]) => (
                <TabsContent key={key} value={key}>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        {/* Left: Stats and Info */}
                        <div className="p-8 bg-white">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.name}</h3>
                          <p className="text-gray-600 mb-6">{sector.description}</p>

                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-red-600">{sector.stats.plants}</div>
                              <div className="text-xs text-gray-500">Plants</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-red-600">{sector.stats.capacity}</div>
                              <div className="text-xs text-gray-500">Capacity</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-red-600">{sector.stats.savings}</div>
                              <div className="text-xs text-gray-500">Savings</div>
                            </div>
                          </div>

                          <Button className="bg-red-600 hover:bg-red-700" asChild>
                            <Link href={getWhatsAppLink({ action: "Quote", page: `${sector.name} Solutions` })}>
                              Get {sector.name} Quote
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>

                        {/* Right: Quote */}
                        <div className="p-8 bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center">
                          <Quote className="w-10 h-10 text-red-500 mb-4" />
                          <blockquote className="text-lg italic mb-6 leading-relaxed">"{sector.quote}"</blockquote>
                          <div>
                            <div className="font-semibold">{sector.author}</div>
                            <div className="text-sm text-gray-400">{sector.company}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Why HNL</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-red-600">Benefits</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets HNL apart as your manufacturing infrastructure partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 bg-white border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-lg transition-all">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-b-full" />

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <benefit.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manufacturing <span className="text-red-500">Milestones</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Two decades of powering Pakistan's industrial growth</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-red-600/30" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
                      <span className="text-red-500 font-bold text-lg">{item.year}</span>
                      <h3 className="font-bold text-white mt-1">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive power infrastructure for manufacturing excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {relatedSolutions.map((solution, index) => (
              <Link key={index} href={solution.href}>
                <Card className="h-full border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      <solution.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-red-600">Optimize</span> Your Factory Power?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a complimentary site survey to assess your power requirements and discover how hybrid systems can
              reduce your energy costs by up to 50%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <Link href={getWhatsAppLink({ action: "Quote", page: "Manufacturing Site Survey" })}>
                  Request Site Survey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 hover:border-red-300 bg-transparent"
                asChild
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold tracking-wider text-sm uppercase mb-4 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-red-600 transition-colors">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title=""
        description="Partner with Pakistan's leading industrial power solutions provider"
        primaryText="Get Free Quote"
        primaryHref={getWhatsAppLink({ action: "Quote", page: "Manufacturing Solutions" })}
        secondaryText="Talk to an Expert"
        secondaryHref="/contact"
      />
    </>
  )
}
