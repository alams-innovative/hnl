import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { getWhatsAppLink } from "@/lib/whatsapp"
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
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Energy Sector Solutions | Power Generation & Infrastructure | HNL Pakistan",
  description:
    "Complete power infrastructure solutions for utilities, IPPs, and industries in Pakistan. 250+ MW deployed, hybrid systems, BESS, EPC projects with 99.5% uptime.",
}

const faqs = [
  {
    question: "What size power projects can HNL handle?",
    answer:
      "We deliver projects from 50kW rooftop solar to multi-MW utility-scale power plants with full EPC capabilities. Our portfolio includes 250+ MW of deployed power solutions across Pakistan.",
  },
  {
    question: "Do you provide financing for energy projects?",
    answer:
      "We facilitate third-party financing and ESCO models for qualified clients. Our partnerships with financial institutions enable flexible payment options for large-scale deployments.",
  },
  {
    question: "What warranty do you offer on BESS installations?",
    answer:
      "Standard 5-year manufacturer warranty plus extended O&M contracts with performance guarantees. Our BESS solutions maintain 95%+ round-trip efficiency throughout their lifecycle.",
  },
  {
    question: "How does HNL ensure energy system reliability?",
    answer:
      "We implement N+1 redundancy, 24/7 remote monitoring via SCADA systems, preventive maintenance programs, and maintain 350+ fully-equipped service vans for rapid response.",
  },
  {
    question: "What renewable energy solutions does HNL offer?",
    answer:
      "We provide end-to-end solar EPC, hybrid solar-diesel-battery systems, and grid-tied solutions. Our hybrid systems achieve 60-70% fuel savings while ensuring 24/7 power availability.",
  },
  {
    question: "Can HNL handle mission-critical power requirements?",
    answer:
      "Absolutely. We power data centers, hospitals, telecom infrastructure, and industrial facilities with Tier III/IV reliability standards and 99.5% uptime guarantees.",
  },
]

const clientData = [
  {
    sector: "Telecom Infrastructure",
    capacity: "85+ MW",
    sites: "16,870+",
    solution: "Hybrid + DG",
    period: "2015-2025",
  },
  {
    sector: "Banking & Finance",
    capacity: "25+ MW",
    sites: "2,500+",
    solution: "UPS + DG + Solar",
    period: "2010-2025",
  },
  {
    sector: "Government & Public",
    capacity: "45+ MW",
    sites: "500+",
    solution: "EPC + O&M",
    period: "2012-2025",
  },
  {
    sector: "Industrial & Manufacturing",
    capacity: "60+ MW",
    sites: "300+",
    solution: "Captive Power",
    period: "2008-2025",
  },
  {
    sector: "Healthcare",
    capacity: "15+ MW",
    sites: "200+",
    solution: "Critical Power",
    period: "2015-2025",
  },
  {
    sector: "Commercial Real Estate",
    capacity: "20+ MW",
    sites: "150+",
    solution: "Building Power",
    period: "2018-2025",
  },
]

const benefits = [
  { icon: Zap, title: "250+ MW Deployed", description: "Installed capacity across Pakistan" },
  { icon: Gauge, title: "99.5% Uptime", description: "Industry-leading reliability" },
  { icon: Leaf, title: "60% Fuel Savings", description: "With hybrid solutions" },
  { icon: MapPin, title: "144 Service Centers", description: "Nationwide O&M coverage" },
  { icon: Users, title: "500+ Power Engineers", description: "Certified technical team" },
  { icon: Shield, title: "ISO Certified", description: "Quality management systems" },
]

const solutions = [
  {
    title: "Diesel Generators",
    description: "Industrial-grade gensets from 10kVA to 3,000kVA",
    href: "/energy-power/diesel-generators",
    icon: Factory,
  },
  {
    title: "BESS Solutions",
    description: "Lithium-ion battery energy storage systems",
    href: "/energy-power/bess",
    icon: Battery,
  },
  {
    title: "Hybrid Power Systems",
    description: "Solar-diesel-battery integrated solutions",
    href: "/energy-power/hybrid-power-systems",
    icon: Sun,
  },
  {
    title: "EPC Projects",
    description: "Turnkey power plant construction",
    href: "/energy-power/epc-project-solutions",
    icon: Building2,
  },
]

const solutionTabs = [
  {
    id: "diesel",
    name: "Diesel Power",
    icon: Factory,
    capacity: "150+ MW",
    projects: "5,000+",
    highlights: [
      "AGG Power authorized sole distributor",
      "10kVA to 2,500kVA range",
      "Perkins, Cummins engine technology",
      "Complete installation & commissioning",
    ],
    quote: {
      text: "HNL's generator solutions have been powering our critical infrastructure for over 15 years with exceptional reliability.",
      author: "Chief Engineer",
      company: "Major Telecom Operator",
    },
  },
  {
    id: "solar",
    name: "Solar & Hybrid",
    icon: Sun,
    capacity: "50+ MW",
    projects: "500+",
    highlights: [
      "Grid-tied & off-grid solutions",
      "60-70% fuel cost reduction",
      "Rooftop to utility-scale",
      "Performance monitoring included",
    ],
    quote: {
      text: "Our hybrid installation reduced diesel consumption by 65% while maintaining 24/7 operations.",
      author: "Facilities Director",
      company: "Industrial Client",
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
      "UPS integration",
      "95%+ round-trip efficiency",
    ],
    quote: {
      text: "The BESS solution eliminated our power quality issues and reduced our reliance on backup generators.",
      author: "Operations Manager",
      company: "Data Center Client",
    },
  },
  {
    id: "epc",
    name: "EPC Projects",
    icon: Building2,
    capacity: "100+ MW",
    projects: "50+",
    highlights: [
      "Turnkey power plant delivery",
      "Design to commissioning",
      "Multi-MW capacity projects",
      "Government & private sector",
    ],
    quote: {
      text: "HNL delivered our 25MW power plant on schedule with exceptional quality standards.",
      author: "Project Director",
      company: "IPP Client",
    },
  },
]

const executiveQuotes = [
  {
    text: "HNL's integrated approach to power infrastructure has transformed how we manage energy across our nationwide network.",
    author: "Muhammad Ali Khan",
    role: "VP Operations",
    company: "Leading Telecom Provider",
  },
  {
    text: "Their hybrid solutions delivered exactly what they promised - 60% fuel savings with zero compromise on reliability.",
    author: "Ahsan Malik",
    role: "Chief Technical Officer",
    company: "Industrial Group",
  },
  {
    text: "With 250+ MW deployed, HNL has proven themselves as Pakistan's most capable power infrastructure partner.",
    author: "Industry Report",
    role: "Energy Sector Analysis",
    company: "2024",
  },
]

const timelineData = [
  { year: "2004", title: "HNL Founded", desc: "Managed services company established", icon: Award },
  { year: "2008", title: "Industrial Expansion", desc: "Captive power solutions launched", icon: Factory },
  { year: "2010", title: "Banking Sector Entry", desc: "Power solutions for financial institutions", icon: Building2 },
  { year: "2015", title: "Telecom Power Leader", desc: "Largest BTS power provider in Pakistan", icon: Zap },
  { year: "2020", title: "Renewable Integration", desc: "Solar & hybrid solutions launch", icon: Sun },
  { year: "2024", title: "250+ MW Milestone", desc: "Cumulative deployed capacity", icon: Trophy },
]

export default function EnergyIndustryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Energy Sector", href: "/industries/energy" },
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
              <span className="text-red-500 font-medium text-sm tracking-wide">
                Pakistan's Premier Power Solutions Provider
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Energy Sector
              <span className="block text-red-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Powering Pakistan's industrial growth with reliable, sustainable energy infrastructure for utilities,
              IPPs, and enterprises.
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
                { value: "60%", label: "Fuel Savings" },
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

      {/* Post-Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Comprehensive Power Infrastructure
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering Pakistan's Energy Future
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From conventional diesel power to cutting-edge hybrid and renewable solutions, HNL delivers end-to-end
                energy infrastructure that powers Pakistan's most critical operations with unmatched reliability.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Full Spectrum Solutions", desc: "Diesel, solar, hybrid, BESS, and EPC" },
                  { label: "Nationwide Service Network", desc: "144 centers with 500+ power engineers" },
                  { label: "OEM Partnerships", desc: "AGG Power, Perkins, Cummins certified" },
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
                  alt="Energy Infrastructure"
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
                <div className="text-3xl font-bold text-gray-900">53+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Years Experience</div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-xs font-medium uppercase tracking-wide">Certified</div>
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
              Delivering reliable power to telecom, banking, government, industrial, and commercial sectors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated R8 Spiral */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Outer rotating dashed ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/40"
                  style={{ animation: "spin 25s linear infinite reverse" }}
                />

                {/* Middle pulsing ring */}
                <div
                  className="absolute inset-6 rounded-full border border-red-500/30"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                />

                {/* R8 Spiral Image with smooth rotation */}
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

                {/* Center stats circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-gray-900">250+</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide">MW</div>
                  </div>
                </div>

                {/* Floating sector indicators */}
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
              {clientData.slice(0, 5).map((client, i) => (
                <div
                  key={i}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-red-600/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                        {client.sector}
                      </h4>
                      <p className="text-sm text-gray-500">{client.solution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-red-500">{client.capacity}</div>
                      <div className="text-xs text-gray-500">{client.sites} sites</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industrial Hybrid Power Transformation
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              How HNL delivered 60% fuel savings for a major industrial facility with zero downtime during transition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <Target className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-bold text-lg">Challenge</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A major manufacturing facility faced escalating diesel costs exceeding PKR 50M annually, with aging
                generators causing 15+ hours of unplanned downtime monthly. Grid instability further compounded
                production losses, threatening competitive positioning.
              </p>
            </div>

            {/* Opportunity */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <span className="text-amber-600 font-bold text-lg">Opportunity</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The client sought a partner capable of engineering a hybrid power solution that could reduce operational
                costs, improve reliability, meet ESG commitments, and integrate with existing infrastructure without
                production interruption.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <Settings className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-bold text-lg">Solution</span>
              </div>
              <p className="text-gray-600 mb-4">HNL deployed an integrated hybrid power system including:</p>
              <ul className="space-y-2">
                {[
                  "2MW rooftop solar with smart inverters",
                  "500kWh lithium-ion BESS for peak shaving",
                  "New AGG Power DG sets with auto-sync",
                  "SCADA integration for real-time monitoring",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 justify-end">
                <CheckCheck className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-bold text-lg">Outcome</span>
              </div>
              <ul className="space-y-2 mb-4">
                {[
                  "65% reduction in diesel consumption",
                  "99.9% uptime over 24 months",
                  "ROI achieved in 18 months",
                  "30% carbon footprint reduction",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-green-700 text-sm italic border-t pt-4 border-green-200">
                "The hybrid solution exceeded all our expectations. HNL delivered on every promise."
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Energy Portfolio</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From conventional diesel to cutting-edge renewable solutions
            </p>
          </div>

          <Tabs defaultValue="diesel" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-xl mb-8">
              {solutionTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.name}</span>
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
              What makes HNL Pakistan's preferred energy infrastructure partner
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

      {/* Executive Quotes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Industry Leaders Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {executiveQuotes.map((quote, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border-t-4 border-red-600">
                <Quote className="w-8 h-8 text-red-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">"{quote.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{quote.author}</div>
                  <div className="text-sm text-gray-500">{quote.role}</div>
                  <div className="text-xs text-red-600 mt-1">{quote.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">53+ Years of Energy Excellence</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-200" />

            <div className="space-y-12">
              {timelineData.map((item, i) => (
                <div key={i} className={`relative flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all group">
                      <div className="flex items-center gap-3 mb-2 justify-end">
                        {i % 2 !== 0 && <item.icon className="w-5 h-5 text-red-600" />}
                        <span className="text-red-600 font-bold text-lg">{item.year}</span>
                        {i % 2 === 0 && <item.icon className="w-5 h-5 text-red-600" />}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Related Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Energy Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, i) => (
              <Link
                key={i}
                href={solution.href}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-red-600 transition-all duration-300 border border-gray-100 hover:border-red-600"
              >
                <div className="w-12 h-12 bg-red-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <solution.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                  {solution.description}
                </p>
                <div className="mt-4 flex items-center text-red-600 group-hover:text-white text-sm font-medium transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection faqs={faqs} />

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to <span className="text-red-600">Power Your Operations?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's design an energy solution tailored to your reliability and sustainability goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={getWhatsAppLink({ action: "Quote", page: "Energy Solutions" })}>
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
    </>
  )
}
