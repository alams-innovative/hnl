"use client"

import { generateBreadcrumbSchema } from "@/lib/seo"
import Breadcrumbs from "@/components/breadcrumbs"
import FaqSection from "@/components/faq-section"
import Link from "next/link"
import Image from "next/image"
import {
  Zap,
  Sun,
  Battery,
  Building2,
  Award,
  CheckCircle2,
  Users,
  Shield,
  Target,
  Lightbulb,
  CheckCheck,
  Trophy,
  MapPin,
  ArrowRight,
  Gauge,
  Settings,
  Factory,
  Quote,
  Wrench,
  Clock,
  HardHat,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqs = [
  {
    question: "What generator sizes does HNL offer?",
    answer:
      "HNL offers industrial-grade diesel generators from 10kVA to 2,500kVA through our partnership with AGG Power. Our range includes both open and canopy configurations with Perkins and Cummins engine options.",
  },
  {
    question: "Do you provide installation and commissioning services?",
    answer:
      "Yes, we provide turnkey solutions including site assessment, foundation design, installation, fuel system setup, ATS integration, commissioning, and operator training. Our engineers ensure optimal performance from day one.",
  },
  {
    question: "What warranty coverage is included?",
    answer:
      "All AGG Power generators come with standard 2-year or 2,000-hour manufacturer warranty. Extended warranties and Annual Maintenance Contracts (AMCs) are available for comprehensive coverage.",
  },
  {
    question: "How quickly can you respond to service calls?",
    answer:
      "With 144 service centers and 350+ service vehicles nationwide, we guarantee 4-hour response time in major cities and 24-hour response in remote areas. Our 24/7 helpline ensures round-the-clock support.",
  },
  {
    question: "Do you offer rental generators?",
    answer:
      "Yes, we maintain a rental fleet from 50kVA to 1,000kVA for events, construction sites, emergency backup, and temporary power needs. Same-day deployment available in major cities.",
  },
  {
    question: "What BESS solutions do you provide?",
    answer:
      "We offer lithium-ion battery energy storage systems from 50kWh to multi-MWh scale for peak shaving, load shifting, UPS applications, and renewable integration. All systems include BMS and remote monitoring.",
  },
]

const services = [
  {
    icon: Factory,
    title: "Diesel Generators",
    description: "Industrial-grade gensets from 10kVA to 2,500kVA",
    href: "/energy-power/diesel-generators",
    capacity: "150+ MW",
    projects: "5,000+",
  },
  {
    icon: Battery,
    title: "BESS Solutions",
    description: "Lithium-ion battery energy storage systems",
    href: "/energy-power/bess",
    capacity: "30+ MWh",
    projects: "100+",
  },
  {
    icon: Sun,
    title: "Hybrid Power Systems",
    description: "Solar-diesel-battery integrated solutions",
    href: "/energy-power/hybrid-power-systems",
    capacity: "50+ MW",
    projects: "500+",
  },
  {
    icon: HardHat,
    title: "EPC Projects",
    description: "Turnkey power plant construction",
    href: "/energy-power/epc-project-solutions",
    capacity: "100+ MW",
    projects: "50+",
  },
  {
    icon: Wrench,
    title: "Energy O&M",
    description: "Preventive and corrective maintenance services",
    href: "/energy-power/energy-operations-maintenance",
    capacity: "200+ MW",
    projects: "2,000+",
  },
]

const solutionTabs = [
  {
    id: "generators",
    name: "Diesel Generators",
    icon: Factory,
    capacity: "150+ MW",
    projects: "5,000+",
    highlights: [
      "AGG Power authorized sole distributor",
      "10kVA to 2,500kVA complete range",
      "Perkins & Cummins engine technology",
      "Open and canopy configurations",
      "Complete installation & commissioning",
    ],
    quote: {
      text: "HNL's generator solutions have powered our operations for over a decade with exceptional reliability and service support.",
      author: "Chief Engineer",
      company: "Leading Telecom Operator",
    },
  },
  {
    id: "bess",
    name: "BESS & Storage",
    icon: Battery,
    capacity: "30+ MWh",
    projects: "100+",
    highlights: [
      "Lithium-ion technology",
      "Peak shaving & load shifting",
      "UPS integration capability",
      "95%+ round-trip efficiency",
      "Remote monitoring included",
    ],
    quote: {
      text: "The BESS solution eliminated our power quality issues and dramatically reduced our reliance on backup generators.",
      author: "Operations Manager",
      company: "Data Center Client",
    },
  },
  {
    id: "hybrid",
    name: "Hybrid Systems",
    icon: Sun,
    capacity: "50+ MW",
    projects: "500+",
    highlights: [
      "Solar + DG + BESS integration",
      "60-70% fuel cost reduction",
      "Grid-tied & off-grid options",
      "Smart energy management",
      "Performance monitoring included",
    ],
    quote: {
      text: "Our hybrid installation reduced diesel consumption by 65% while maintaining 24/7 operations.",
      author: "Facilities Director",
      company: "Industrial Client",
    },
  },
  {
    id: "epc",
    name: "EPC Projects",
    icon: HardHat,
    capacity: "100+ MW",
    projects: "50+",
    highlights: [
      "Turnkey power plant delivery",
      "Design to commissioning",
      "Multi-MW capacity projects",
      "Government & private sector",
      "Single-point accountability",
    ],
    quote: {
      text: "HNL delivered our 25MW power plant on schedule with exceptional quality standards and professional project management.",
      author: "Project Director",
      company: "IPP Client",
    },
  },
  {
    id: "oam",
    name: "O&M Services",
    icon: Wrench,
    capacity: "200+ MW",
    projects: "2,000+",
    highlights: [
      "Preventive maintenance programs",
      "24/7 emergency response",
      "Genuine spare parts supply",
      "Remote monitoring & diagnostics",
      "Performance optimization",
    ],
    quote: {
      text: "Their O&M team keeps our generators running at peak efficiency. Downtime has reduced by 80% since partnering with HNL.",
      author: "Plant Manager",
      company: "Manufacturing Client",
    },
  },
]

const benefits = [
  { icon: Zap, title: "250+ MW Deployed", description: "Installed capacity across Pakistan" },
  { icon: Gauge, title: "99.5% Uptime", description: "Industry-leading reliability" },
  { icon: MapPin, title: "144 Service Centers", description: "Nationwide O&M coverage" },
  { icon: Users, title: "500+ Engineers", description: "Certified technical team" },
  { icon: Clock, title: "4-Hour Response", description: "Rapid support in major cities" },
  { icon: Shield, title: "ISO 9001 Certified", description: "Quality management systems" },
]

const sectorData = [
  { sector: "Telecom Infrastructure", capacity: "85+ MW", sites: "16,870+", icon: Cpu },
  { sector: "Banking & Finance", capacity: "25+ MW", sites: "2,500+", icon: Building2 },
  { sector: "Government & Public", capacity: "45+ MW", sites: "500+", icon: Shield },
  { sector: "Industrial & Manufacturing", capacity: "60+ MW", sites: "300+", icon: Factory },
  { sector: "Healthcare", capacity: "15+ MW", sites: "200+", icon: Award },
]

const timelineData = [
  { year: "2004", title: "Energy Division Launch", desc: "Power solutions operations established", icon: Award },
  { year: "2008", title: "AGG Partnership", desc: "Exclusive distributorship for Pakistan", icon: Factory },
  { year: "2012", title: "Telecom Power Leader", desc: "Largest BTS power provider nationwide", icon: Zap },
  { year: "2018", title: "BESS Introduction", desc: "Battery storage solutions launched", icon: Battery },
  { year: "2020", title: "Hybrid Solutions", desc: "Solar-diesel-BESS integration", icon: Sun },
  { year: "2024", title: "250+ MW Milestone", desc: "Cumulative deployed capacity", icon: Trophy },
]

export default function EnergyPowerPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Energy & Power", href: "/energy-power" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-5 py-2 mb-8">
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-medium text-sm tracking-wide">Complete Energy & Power Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Energy & Power
              <span className="block text-red-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Reliable diesel generators, battery storage, hybrid systems, and complete power infrastructure for
              mission-critical applications across Pakistan.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#solutions">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 px-8 bg-transparent"
                >
                  Request Quote
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "250+", label: "MW Deployed" },
                { value: "5,000+", label: "Installations" },
                { value: "99.5%", label: "System Uptime" },
                { value: "144", label: "Service Centers" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post-Hero Visual Hook */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Comprehensive Power Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Powering Pakistan's Critical Infrastructure
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From industrial diesel generators to cutting-edge battery storage and solar hybrid systems, HNL delivers
                end-to-end power solutions that keep Pakistan's most critical operations running 24/7.
              </p>

              <div className="space-y-4">
                {[
                  { label: "AGG Power Authorized", desc: "Sole distributor for Pakistan" },
                  { label: "Full Spectrum Solutions", desc: "Diesel, solar, hybrid, BESS, O&M" },
                  { label: "Nationwide Support", desc: "144 service centers, 4-hour response" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/industrial-power-plant-with-generators-and-solar-p.jpg"
                  alt="Energy & Power Infrastructure"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-red-600">
                <div className="text-3xl font-bold text-gray-900">250+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">MW Deployed</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-gray-900">
                <div className="text-3xl font-bold text-gray-900">5,000+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Installations</div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">AGG</div>
                <div className="text-xs font-medium uppercase tracking-wide">Authorized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated R8 Feature Section */}
      <section className="py-20 bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Power Across Sectors</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Multi-Industry Energy Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Delivering reliable power to telecom, banking, government, industrial, and healthcare sectors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated R8 Spiral */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/40"
                  style={{ animation: "spin 25s linear infinite reverse" }}
                />

                <div
                  className="absolute inset-6 rounded-full border border-red-500/30"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                />

                <div
                  className="absolute inset-12 flex items-center justify-center"
                  style={{ animation: "spin 20s linear infinite" }}
                >
                  <Image
                    src="/r8-spiral.png"
                    alt="HNL Energy Solutions Network"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-gray-900">250+</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide">MW</div>
                  </div>
                </div>

                <div
                  className="absolute -top-2 right-8 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-red-600"
                  style={{ animation: "bounce 3s ease-in-out infinite" }}
                >
                  <div className="text-xs font-bold text-gray-900">Telecom</div>
                  <div className="text-[10px] text-gray-500">85+ MW</div>
                </div>
                <div
                  className="absolute top-1/3 -left-4 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-gray-900"
                  style={{ animation: "bounce 2.5s ease-in-out infinite", animationDelay: "0.5s" }}
                >
                  <div className="text-xs font-bold text-gray-900">Industrial</div>
                  <div className="text-[10px] text-gray-500">60+ MW</div>
                </div>
                <div
                  className="absolute -bottom-2 left-12 bg-red-600 text-white rounded-lg shadow-xl px-4 py-2"
                  style={{ animation: "bounce 2s ease-in-out infinite", animationDelay: "1s" }}
                >
                  <div className="text-xs font-bold">Government</div>
                  <div className="text-[10px] opacity-80">45+ MW</div>
                </div>
                <div
                  className="absolute bottom-1/4 -right-6 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-red-600"
                  style={{ animation: "bounce 2.8s ease-in-out infinite", animationDelay: "1.5s" }}
                >
                  <div className="text-xs font-bold text-gray-900">Banking</div>
                  <div className="text-[10px] text-gray-500">25+ MW</div>
                </div>
              </div>
            </div>

            {/* Sector breakdown */}
            <div className="space-y-4">
              {sectorData.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-red-600/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                          {item.sector}
                        </h4>
                        <p className="text-sm text-gray-500">{item.sites} installations</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-red-500">{item.capacity}</div>
                      <div className="text-xs text-gray-500">deployed</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section id="use-case" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Use Case</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Telecom Network Power Transformation</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              How HNL powers 16,870+ BTS sites with 99.5% uptime for Pakistan's leading telecom operators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-bold text-lg">Challenge</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A major telecom operator needed reliable backup power for 5,000+ BTS sites across Pakistan. Existing
                solutions faced frequent failures, high fuel costs, and inconsistent maintenance leading to network
                downtime and customer complaints.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <span className="text-amber-600 font-bold text-lg">Opportunity</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The client sought a partner capable of deploying and managing generators at scale with guaranteed
                uptime, predictable costs, centralized monitoring, and rapid response capabilities across all regions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-bold text-lg">Solution</span>
              </div>
              <p className="text-gray-600 mb-4">HNL deployed a comprehensive managed services solution:</p>
              <ul className="space-y-2">
                {[
                  "5,000+ AGG Power gensets with remote monitoring",
                  "24/7 NOC with real-time alerts and diagnostics",
                  "350+ service vehicles for rapid response",
                  "Preventive maintenance programs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CheckCheck className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-bold text-lg">Outcome</span>
              </div>
              <ul className="space-y-2 mb-4">
                {[
                  "99.5% network uptime achieved",
                  "40% reduction in power-related complaints",
                  "25% fuel cost optimization",
                  "4-hour average response time",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-green-700 text-sm italic border-t pt-4 border-green-200">
                "HNL's managed services transformed our network reliability. They are our trusted power partner."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Energy Portfolio</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From diesel generators to renewable hybrid systems and turnkey EPC projects
            </p>
          </div>

          <Tabs defaultValue="generators" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-xl mb-8">
              {solutionTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all text-sm"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium hidden sm:inline">{tab.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {solutionTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center">
                        <tab.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{tab.name}</h3>
                        <p className="text-gray-500">Power Solutions</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="text-2xl font-bold text-red-600">{tab.capacity}</div>
                        <div className="text-sm text-gray-500">Deployed Capacity</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="text-2xl font-bold text-gray-900">{tab.projects}</div>
                        <div className="text-sm text-gray-500">Projects Completed</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {tab.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={services.find((s) => s.title.toLowerCase().includes(tab.id))?.href || "/energy-power"}>
                      <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gray-900 rounded-2xl p-8 text-white">
                    <Quote className="w-10 h-10 text-red-500 mb-6" />
                    <p className="text-xl leading-relaxed mb-8 text-gray-200">"{tab.quote.text}"</p>
                    <div className="border-t border-gray-700 pt-6">
                      <div className="font-semibold text-white">{tab.quote.author}</div>
                      <div className="text-gray-400 text-sm">{tab.quote.company}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Why HNL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What makes HNL Pakistan's preferred energy solutions provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Energy Division Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800 hidden md:block" />

            <div className="space-y-8">
              {timelineData.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-600/50 transition-all inline-block ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                    >
                      <div className="text-red-500 font-bold text-lg mb-1">{item.year}</div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-12 h-12 bg-red-600 rounded-full items-center justify-center z-10 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Explore Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Energy & Power Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-600 font-semibold">{service.capacity}</span>
                    <span className="text-gray-500">{service.projects} projects</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Power Your Operations?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact our energy solutions team for a customized power proposal with sizing, pricing, and ROI analysis.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="tel:+924235761999">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 bg-transparent"
                >
                  Call: +92 42 35761999
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>144 Service Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span>4-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-600" />
                <span>ISO 9001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our energy & power solutions"
        faqs={faqs}
      />
    </>
  )
}
