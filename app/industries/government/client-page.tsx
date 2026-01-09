"use client"

import Breadcrumbs from "@/components/breadcrumbs"
import FaqSection from "@/components/faq-section"
import Link from "next/link"
import Image from "next/image"
import {
  Shield,
  Award,
  CheckCircle2,
  Users,
  Clock,
  Target,
  Lightbulb,
  CheckCheck,
  Trophy,
  ArrowRight,
  Settings,
  Building2,
  Zap,
  Server,
  Quote,
  Camera,
  Radio,
  Train,
  Landmark,
  FileCheck,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generateBreadcrumbSchema } from "@/lib/seo"

const faqs = [
  {
    question: "Does HNL have experience with PPRA procurement processes?",
    answer:
      "Yes, we have extensive experience with public sector procurement. We regularly participate in government tenders and are fully compliant with PPRA rules, government contracting requirements, and audit standards.",
  },
  {
    question: "What government projects has HNL delivered?",
    answer:
      "We have delivered major projects for Punjab Police, Punjab Safe Cities Authority (PSCA), Project Management Unit (PMU), and Pakistan Railways. Our work includes IT infrastructure, surveillance systems, safe city solutions, and power backup systems.",
  },
  {
    question: "Can HNL ensure data security for sensitive government information?",
    answer:
      "Absolutely. We implement ISO 27001 security frameworks, end-to-end encryption, strict access controls, and regular security audits. Our systems meet the highest government security standards.",
  },
  {
    question: "Does HNL provide training for government staff?",
    answer:
      "Yes, comprehensive user training and change management support is included in all government projects. We ensure smooth technology adoption and ongoing support.",
  },
  {
    question: "What certifications does HNL maintain for government work?",
    answer:
      "HNL maintains ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications. We also comply with all government IT security and data protection requirements.",
  },
  {
    question: "How does HNL handle critical infrastructure uptime?",
    answer:
      "Our 24/7 NOC monitoring, redundant systems, and rapid response teams ensure 99.9% uptime for critical government infrastructure. We maintain dedicated support for priority government clients.",
  },
]

const benefits = [
  { icon: Shield, title: "Security Compliant", description: "ISO 27001 & government standards" },
  { icon: FileCheck, title: "PPRA Certified", description: "Full procurement compliance" },
  { icon: Users, title: "Dedicated Teams", description: "Government-focused specialists" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock monitoring" },
  { icon: Lock, title: "Data Sovereignty", description: "Local data center hosting" },
  { icon: Award, title: "Proven Track Record", description: "50+ public sector projects" },
]

const solutions = [
  {
    title: "ICT Infrastructure",
    description: "Data centers, networks, and communications for government offices",
    href: "/software-cloud-ai/ict-infrastructure",
    icon: Server,
  },
  {
    title: "Safe City Solutions",
    description: "Surveillance, monitoring, and public safety systems",
    href: "/telecom-infrastructure/surveillance",
    icon: Camera,
  },
  {
    title: "Power Backup Systems",
    description: "Uninterrupted power for critical facilities",
    href: "/energy-power/diesel-generators",
    icon: Zap,
  },
  {
    title: "Network Infrastructure",
    description: "Fiber and wireless connectivity for departments",
    href: "/telecom-infrastructure/fiber-rollout",
    icon: Radio,
  },
]

const sectorTabs = [
  {
    id: "police",
    name: "Punjab Police",
    logo: "/images/punjab-police.png",
    color: "red",
    projects: "15+",
    period: "2015-Present",
    value: "Major IT Infrastructure",
    scope: "IT Systems & Power Backup",
    highlights: [
      "Centralized command & control systems",
      "Critical power backup solutions",
      "Network infrastructure deployment",
      "24/7 monitoring and support",
    ],
    quote: {
      text: "HNL's infrastructure solutions have significantly enhanced our operational capabilities across Punjab.",
      author: "IT Director",
      company: "Punjab Police",
    },
  },
  {
    id: "psca",
    name: "PSCA Safe City",
    logo: "/images/psca.png",
    color: "blue",
    projects: "Major Contract",
    period: "2016-Present",
    value: "Safe City Infrastructure",
    scope: "Surveillance & ICT",
    highlights: [
      "City-wide surveillance network",
      "Integrated command centers",
      "Real-time monitoring systems",
      "Emergency response infrastructure",
    ],
    quote: {
      text: "The Safe City infrastructure powered by HNL has transformed public safety in Punjab's major cities.",
      author: "Operations Head",
      company: "PSCA",
    },
  },
  {
    id: "pmu",
    name: "PMU",
    logo: "/images/pmu.png",
    color: "green",
    projects: "Multiple",
    period: "2018-Present",
    value: "Project Management",
    scope: "Infrastructure & Power",
    highlights: [
      "Government building infrastructure",
      "Power system installations",
      "IT network deployments",
      "Facility management systems",
    ],
    quote: {
      text: "HNL delivers on time and within budget - essential for government projects.",
      author: "Project Director",
      company: "PMU",
    },
  },
  {
    id: "railways",
    name: "Pakistan Railways",
    logo: "/images/railways.png",
    color: "orange",
    projects: "Nationwide",
    period: "2019-Present",
    value: "Railway Infrastructure",
    scope: "Power & Communications",
    highlights: [
      "Station power backup systems",
      "Communication infrastructure",
      "Signaling system support",
      "Maintenance facilities power",
    ],
    quote: {
      text: "Reliable power infrastructure is critical for railway operations. HNL delivers consistently.",
      author: "Chief Engineer",
      company: "Pakistan Railways",
    },
  },
]

const executiveQuotes = [
  {
    text: "HNL's comprehensive understanding of government requirements and compliance standards makes them our preferred infrastructure partner.",
    author: "Senior Official",
    role: "IT Department",
    company: "Punjab Government",
  },
  {
    text: "The Safe City project required exceptional coordination and technical expertise. HNL delivered beyond expectations.",
    author: "Project Director",
    role: "Infrastructure Division",
    company: "PSCA",
  },
  {
    text: "Mission-critical systems require mission-critical partners. HNL has proven themselves time and again.",
    author: "Director General",
    role: "Operations",
    company: "Government Agency",
  },
]

const timelineData = [
  { year: "2004", title: "Founded", desc: "HNL established with infrastructure focus", icon: Building2 },
  { year: "2015", title: "Punjab Police", desc: "Major IT infrastructure contract", icon: Shield },
  { year: "2016", title: "PSCA Safe City", desc: "Surveillance network deployment", icon: Camera },
  { year: "2018", title: "PMU Projects", desc: "Government facilities infrastructure", icon: Landmark },
  { year: "2019", title: "Pakistan Railways", desc: "Nationwide power solutions", icon: Train },
  { year: "2024", title: "50+ Projects", desc: "Leading government infrastructure partner", icon: Trophy },
]

export default function GovernmentIndustryClientPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Government", href: "/industries/government" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section - Centered with background pattern */}
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
              <Landmark className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-medium text-sm tracking-wide">Trusted by Government of Pakistan</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Government Infrastructure
              <span className="block text-red-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Mission-critical infrastructure for Pakistan's public sector. Smart cities, secure IT systems, and power
              solutions for government entities nationwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#use-case">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  View Our Projects
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
                { value: "50+", label: "Public Projects" },
                { value: "99.9%", label: "System Uptime" },
                { value: "4", label: "Major Agencies" },
                { value: "100%", label: "Compliance" },
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

      {/* Post-Hero Hook Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Trusted Public Sector Partner
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Enabling Digital Governance Across Pakistan
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From Punjab Police command centers to Pakistan Railways power systems, HNL delivers mission-critical
                infrastructure that keeps government operations running 24/7. Our proven expertise in security,
                compliance, and reliability makes us the trusted choice for public sector projects.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Security Certified", desc: "ISO 27001 compliant infrastructure" },
                  { label: "PPRA Experienced", desc: "Full procurement process compliance" },
                  { label: "24/7 Operations", desc: "Round-the-clock monitoring and support" },
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
                  src="/government-building-modern-architecture-pakistan.jpg"
                  alt="Government Infrastructure"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-red-600">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Government Projects</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-gray-900">
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Major Agencies</div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs font-medium uppercase tracking-wide">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated R8 Spiral Section */}
      <section className="py-20 bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Public Sector Reach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Government Footprint</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Serving government entities across all provinces and federal institutions
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
                    alt="HNL Government Coverage"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide">Projects</div>
                  </div>
                </div>

                {/* Floating agency indicators */}
                <div
                  className="absolute -top-2 right-8 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-red-600"
                  style={{ animation: "bounce 3s ease-in-out infinite" }}
                >
                  <div className="text-xs font-bold text-gray-900">Punjab Police</div>
                  <div className="text-[10px] text-gray-500">IT Infrastructure</div>
                </div>
                <div
                  className="absolute top-1/3 -left-4 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-gray-900"
                  style={{ animation: "bounce 2.5s ease-in-out infinite", animationDelay: "0.5s" }}
                >
                  <div className="text-xs font-bold text-gray-900">PSCA</div>
                  <div className="text-[10px] text-gray-500">Safe City</div>
                </div>
                <div
                  className="absolute -bottom-2 left-12 bg-red-600 text-white rounded-lg shadow-xl px-4 py-2"
                  style={{ animation: "bounce 2s ease-in-out infinite", animationDelay: "1s" }}
                >
                  <div className="text-xs font-bold">PMU</div>
                  <div className="text-[10px] text-red-200">Infrastructure</div>
                </div>
                <div
                  className="absolute bottom-1/4 -right-4 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-red-600"
                  style={{ animation: "bounce 2.8s ease-in-out infinite", animationDelay: "1.5s" }}
                >
                  <div className="text-xs font-bold text-gray-900">Railways</div>
                  <div className="text-[10px] text-gray-500">Power Systems</div>
                </div>
              </div>
            </div>

            {/* Sector Stats */}
            <div className="space-y-6">
              {[
                {
                  sector: "Law Enforcement",
                  projects: "15+",
                  agencies: "Punjab Police, PSCA",
                  color: "bg-red-600",
                  highlight: true,
                },
                {
                  sector: "Transportation",
                  projects: "10+",
                  agencies: "Pakistan Railways",
                  color: "bg-gray-800",
                },
                {
                  sector: "Administration",
                  projects: "25+",
                  agencies: "PMU, Government Offices",
                  color: "bg-gray-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border ${item.highlight ? "bg-red-600/10 border-red-600/30" : "bg-gray-900 border-gray-800"}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <h3 className="text-lg font-bold text-white">{item.sector}</h3>
                    </div>
                    <div className={`text-sm font-bold ${item.highlight ? "text-red-500" : "text-gray-400"}`}>
                      {item.projects} Projects
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{item.agencies}</div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-500">System Uptime</div>
                </div>
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-500">NOC Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section - Challenge/Opportunity/Solution/Outcome */}
      <section id="use-case" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Case Study</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safe City & Government Infrastructure</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              How HNL enables digital transformation for Pakistan's public sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Challenge</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Government agencies required reliable, secure infrastructure for critical operations including law
                enforcement command centers, safe city surveillance, and essential public services. Legacy systems were
                fragmented and lacked the reliability needed for 24/7 operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Opportunity</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Agencies sought a partner capable of delivering integrated infrastructure solutions meeting government
                security standards, PPRA compliance, and providing reliable 24/7 operations support with local expertise
                and nationwide coverage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Solution</h3>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">HNL deployed comprehensive government infrastructure solutions:</p>
                <ul className="space-y-2">
                  {[
                    "Integrated command & control centers",
                    "City-wide surveillance networks",
                    "Redundant power backup systems",
                    "Secure IT infrastructure with 24/7 NOC",
                    "ISO 27001 compliant security frameworks",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Outcome</h3>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <ul className="space-y-2">
                  {[
                    "99.9% system availability across all projects",
                    "50+ successful government deployments",
                    "100% PPRA compliance record",
                    "24/7 operational support maintained",
                    "Enhanced public safety through Safe City systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 italic text-green-700 text-sm">
                  HNL has become the trusted infrastructure partner for Pakistan's key government agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Sector Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Government Agency Partnerships</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by Pakistan's leading government institutions
            </p>
          </div>

          <Tabs defaultValue="police" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-10 h-auto">
              {sectorTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white px-6 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all"
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {sectorTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                          {tab.id === "police" && <Shield className="w-8 h-8 text-red-600" />}
                          {tab.id === "psca" && <Camera className="w-8 h-8 text-blue-600" />}
                          {tab.id === "pmu" && <Landmark className="w-8 h-8 text-green-600" />}
                          {tab.id === "railways" && <Train className="w-8 h-8 text-orange-600" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{tab.name}</h3>
                          <p className="text-gray-500">{tab.scope}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-gray-900">{tab.projects}</div>
                          <div className="text-sm text-gray-500">Projects</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm font-bold text-gray-900">{tab.period}</div>
                          <div className="text-sm text-gray-500">Partnership</div>
                        </div>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-4">Key Highlights</h4>
                      <ul className="space-y-3">
                        {tab.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-900 p-10 flex flex-col justify-center">
                      <Quote className="w-10 h-10 text-red-500 mb-6" />
                      <blockquote className="text-xl text-white leading-relaxed mb-6">"{tab.quote.text}"</blockquote>
                      <div>
                        <div className="font-semibold text-white">{tab.quote.author}</div>
                        <div className="text-gray-400">{tab.quote.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose HNL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits for Government</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted infrastructure solutions designed for public sector requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-red-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Quotes */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Leaders Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {executiveQuotes.map((quote, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <Quote className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6">"{quote.text}"</p>
                <div>
                  <div className="font-semibold text-white">{quote.author}</div>
                  <div className="text-sm text-gray-500">
                    {quote.role}, {quote.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Government Sector Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

            <div className="space-y-8">
              {timelineData.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`inline-block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition-all`}
                    >
                      <div className="text-red-600 font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Government Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive infrastructure services for public sector needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, i) => (
              <Link key={i} href={solution.href} className="group">
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:border-red-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    <solution.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White with black/red */}
      <section id="contact" className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform <span className="text-red-600">Public Services</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Discuss your government infrastructure requirements with our experienced team.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 bg-transparent"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  )
}
