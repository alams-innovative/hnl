import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Breadcrumbs from "@/components/breadcrumbs"
import FaqSection from "@/components/faq-section"
import Link from "next/link"
import Image from "next/image"
import {
  Radio,
  Wrench,
  Award,
  CheckCircle2,
  Users,
  Shield,
  Clock,
  Target,
  Lightbulb,
  CheckCheck,
  Trophy,
  MapPin,
  Phone,
  ArrowRight,
  Gauge,
  Settings,
  Building2,
  Zap,
  Server,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Telecom Infrastructure Solutions | #1 MS Provider in Pakistan | HNL",
  description:
    "Pakistan's leading telecom infrastructure partner. Managing 16,870+ BTS sites with 99.7% uptime. FLM/MS services, DG overhauling, and O&M support for Jazz, Telenor, Ufone networks.",
}

const faqs = [
  {
    question: "Which telecom operators does HNL work with in Pakistan?",
    answer:
      "We serve major cellular operators including Jazz (PMCL), Telenor (via Nokia Solutions), Ufone (via Huawei), tower companies like edotco and Enfrashare. We are the #1 MS provider managing 16,870+ BTS sites nationwide.",
  },
  {
    question: "Can HNL handle nationwide rollout projects?",
    answer:
      "Yes, we have regional teams in all major cities and can deploy hundreds of sites per month across Pakistan. Our 144 offices nationwide and 2,120+ technical workforce enable large-scale deployments efficiently with 99.7% uptime.",
  },
  {
    question: "What is HNL's market share in telecom infrastructure management?",
    answer:
      "HNL is the #1 MS provider in Pakistan with over 50% market share in the south region. We manage 23,215 FLM/MS sites, completed 10,921 DG overhauls, and 4,210 telco/DC equipment implementations.",
  },
  {
    question: "How does HNL ensure network uptime and reliability?",
    answer:
      "We operate 24/7 NOC monitoring with 350+ fully equipped service vans maintaining 99.7% network uptime. Our preventive maintenance programs and rapid response teams ensure minimal downtime across all managed sites.",
  },
  {
    question: "What certifications and standards does HNL maintain?",
    answer:
      "HNL maintains ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certifications. Our engineers are certified by Lister Petter, Perkins, Cummins, and other OEMs ensuring world-class service delivery.",
  },
  {
    question: "How quickly can HNL respond to site issues?",
    answer:
      "With 350+ fully equipped service vans and teams positioned across 144 offices nationwide, we achieve average response times of under 2 hours for critical issues and maintain 24/7 NOC support.",
  },
]

const clientData = [
  {
    client: "Jazz (PMCL)",
    network: "Jazz",
    scope: "Managed Services",
    period: "2015-2025",
    central: 2203,
    north: 1527,
    south: 1969,
    total: 5699,
  },
  {
    client: "Nokia Solutions",
    network: "Telenor",
    scope: "Managed Services",
    period: "2018-2025",
    central: 1640,
    north: 1532,
    south: 2644,
    total: 5816,
  },
  {
    client: "Nokia Solutions",
    network: "Telenor",
    scope: "Asset Management",
    period: "2020-2025",
    central: "-",
    north: 2207,
    south: "-",
    total: 2207,
  },
  {
    client: "Enfrashare Pvt Ltd",
    network: "Enfrashare",
    scope: "Managed Services",
    period: "2019-2024",
    central: 578,
    north: "-",
    south: 1340,
    total: 1918,
  },
  {
    client: "EDOTCO Group",
    network: "E.CO",
    scope: "MS + Site Security",
    period: "2020-2022",
    central: "-",
    north: 547,
    south: 373,
    total: 920,
  },
  {
    client: "Huawei Pakistan",
    network: "Ufone (Core)",
    scope: "Managed Services",
    period: "2011-2024",
    central: 5,
    north: 3,
    south: 5,
    total: 13,
  },
]

const benefits = [
  { icon: Shield, title: "99.7% Uptime", description: "Industry-leading network reliability" },
  { icon: MapPin, title: "144 Offices", description: "Nationwide coverage across Pakistan" },
  { icon: Users, title: "2,120+ Engineers", description: "Certified technical workforce" },
  { icon: Clock, title: "24/7 NOC", description: "Round-the-clock monitoring" },
  { icon: Gauge, title: "350+ Service Vans", description: "Rapid response capability" },
  { icon: Award, title: "#1 MS Provider", description: "Market leader in Pakistan" },
]

const solutions = [
  {
    title: "FLM/MS Services",
    description: "First Line Maintenance and Managed Services for BTS sites",
    href: "/services/managed-services",
    icon: Settings,
  },
  {
    title: "DG Overhauling",
    description: "Complete generator overhaul and power backup solutions",
    href: "/services/generator-overhauling",
    icon: Wrench,
  },
  {
    title: "Network O&M",
    description: "Operations and maintenance for telecom infrastructure",
    href: "/services/operations-maintenance",
    icon: Radio,
  },
  {
    title: "Site Security",
    description: "24/7 site security and surveillance solutions",
    href: "/services/site-security",
    icon: Shield,
  },
]

const operatorTabs = [
  {
    id: "jazz",
    name: "Jazz",
    logo: "/images/jazz.png",
    color: "red",
    sites: "5,699",
    period: "2015-2025",
    regions: { central: 2203, north: 1527, south: 1969 },
    scope: "Managed Services",
    highlights: [
      "Largest private sector MS contract",
      "Nationwide coverage across all regions",
      "24/7 NOC support with dedicated team",
      "Preventive & corrective maintenance",
    ],
    quote: {
      text: "HNL's consistent service delivery has been crucial for our network reliability.",
      author: "Network Operations Director",
      company: "Jazz",
    },
  },
  {
    id: "telenor",
    name: "Telenor",
    logo: "/images/telenor.png",
    color: "blue",
    sites: "8,023",
    period: "2018-2025",
    regions: { central: 1640, north: 3739, south: 2644 },
    scope: "Managed Services & Asset Management",
    highlights: [
      "Dual contract: MS + Asset Management",
      "Strong presence in North region",
      "Multi-vendor equipment expertise",
      "Integrated service delivery model",
    ],
    quote: {
      text: "HNL's technical expertise and nationwide reach make them our preferred infrastructure partner.",
      author: "Infrastructure Head",
      company: "Telenor Pakistan",
    },
  },
  {
    id: "ufone",
    name: "Ufone",
    logo: "/images/ufone.png",
    color: "orange",
    sites: "13",
    period: "2011-2024",
    regions: { central: 5, north: 3, south: 5 },
    scope: "Core Location Services",
    highlights: [
      "Long-standing 13-year partnership",
      "Critical core location management",
      "High-security site operations",
      "Premium SLA compliance",
    ],
    quote: {
      text: "Over a decade of partnership with HNL speaks to their reliability and commitment.",
      author: "Technical Director",
      company: "Ufone",
    },
  },
  {
    id: "towers",
    name: "Tower Companies",
    logo: "/images/tower.png",
    color: "gray",
    sites: "2,838",
    period: "2019-2024",
    regions: { central: 578, north: 547, south: 1713 },
    scope: "MS + Site Security",
    highlights: [
      "Enfrashare: 1,918 sites",
      "EDOTCO: 920 sites",
      "Site security services",
      "Asset protection & monitoring",
    ],
    quote: {
      text: "HNL provides comprehensive tower management with exceptional security standards.",
      author: "Operations Manager",
      company: "Enfrashare",
    },
  },
]

const executiveQuotes = [
  {
    text: "HNL's comprehensive infrastructure management and technical expertise have been instrumental in maintaining our network reliability across Pakistan.",
    author: "Muhammad Kamran",
    role: "Director Network Operations",
    company: "Major Telecom Operator",
  },
  {
    text: "Their ability to scale operations while maintaining service quality makes them an invaluable partner for nationwide deployments.",
    author: "Ahmad Raza",
    role: "VP Infrastructure",
    company: "Leading Cellular Network",
  },
  {
    text: "With 50% market share in the south, HNL has proven themselves as the undisputed leader in telecom infrastructure management.",
    author: "Industry Analyst",
    role: "Telecom Sector Review",
    company: "2024 Report",
  },
]

const timelineData = [
  { year: "1992", title: "Foundation", desc: "Started telecom infrastructure services in Pakistan", icon: Building2 },
  { year: "2011", title: "Huawei Partnership", desc: "Core location services for Ufone network", icon: Server },
  { year: "2015", title: "Jazz MS Contract", desc: "Nationwide managed services for 5,000+ sites", icon: Radio },
  { year: "2018", title: "Telenor Expansion", desc: "Nokia partnership for 8,000+ sites", icon: Zap },
  { year: "2020", title: "Tower Companies", desc: "Enfrashare & EDOTCO partnerships", icon: Building2 },
  { year: "2024", title: "#1 MS Provider", desc: "Market leader with 16,870+ sites", icon: Trophy },
]

export default function TelecomIndustryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Telecommunications", href: "/industries/telecom" },
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
              <Award className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-medium text-sm tracking-wide">
                Pakistan's #1 Managed Services Provider
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Telecom Infrastructure
              <span className="block text-red-500">Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Powering Pakistan's connectivity with mission-critical infrastructure management for leading telecom
              operators.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#use-case">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Explore Our Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 px-8 bg-transparent"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "23,215", label: "FLM/MS Sites" },
                { value: "10,921", label: "DG Overhauls" },
                { value: "99.7%", label: "Uptime" },
                { value: "50%+", label: "South Market Share" },
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Infrastructure at Scale
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Powering Pakistan's Digital Connectivity
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With over three decades of experience, HNL has built an unmatched nationwide infrastructure network. Our
                certified resources, strategic partnerships, and proven track record make us the trusted choice for
                telecom operators nationwide.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Nationwide Coverage", desc: "144 offices across all major cities" },
                  { label: "Expert Workforce", desc: "2,120+ certified engineers and technicians" },
                  { label: "24/7 Operations", desc: "Round-the-clock NOC monitoring and support" },
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
                  src="/telecom-bts-tower-site-with-equipment-and-engineer.jpg"
                  alt="Telecom Infrastructure Site"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-red-600">
                <div className="text-3xl font-bold text-gray-900">16,870+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Managed BTS Sites</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-5 border-l-4 border-gray-900">
                <div className="text-3xl font-bold text-gray-900">4,210</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Equipment Deployments</div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">#1</div>
                <div className="text-xs font-medium uppercase tracking-wide">MS Provider</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANGE: Replacing Pakistan map section with R8 spiral animated feature */}
      <section className="py-20 bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Nationwide Presence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Coverage Across Pakistan</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Strategic presence with 144 offices delivering 50%+ market dominance in the south
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated R8 Spiral */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Outer rotating dashed ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/40"
                  style={{
                    animation: "spin 25s linear infinite reverse",
                  }}
                />

                {/* Middle pulsing ring */}
                <div
                  className="absolute inset-6 rounded-full border border-red-500/30"
                  style={{
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                />

                {/* R8 Spiral Image with smooth rotation */}
                <div
                  className="absolute inset-12 flex items-center justify-center"
                  style={{
                    animation: "spin 20s linear infinite",
                  }}
                >
                  <Image
                    src="/r8-spiral.png"
                    alt="HNL R8 Network Coverage"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]"
                  />
                </div>

                {/* Center stats circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-gray-900">144</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wide">Offices</div>
                  </div>
                </div>

                {/* Floating city indicators */}
                <div
                  className="absolute -top-2 right-8 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-red-600"
                  style={{ animation: "bounce 3s ease-in-out infinite" }}
                >
                  <div className="text-xs font-bold text-gray-900">Islamabad</div>
                  <div className="text-[10px] text-gray-500">North Region</div>
                </div>
                <div
                  className="absolute top-1/3 -left-4 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-gray-900"
                  style={{ animation: "bounce 2.5s ease-in-out infinite", animationDelay: "0.5s" }}
                >
                  <div className="text-xs font-bold text-gray-900">Lahore</div>
                  <div className="text-[10px] text-gray-500">Central Region</div>
                </div>
                <div
                  className="absolute -bottom-2 left-12 bg-red-600 text-white rounded-lg shadow-xl px-4 py-2"
                  style={{ animation: "bounce 2s ease-in-out infinite", animationDelay: "1s" }}
                >
                  <div className="text-xs font-bold">Karachi</div>
                  <div className="text-[10px] text-red-200">South HQ • 50%+ Share</div>
                </div>
                <div
                  className="absolute bottom-1/4 -right-4 bg-white rounded-lg shadow-xl px-4 py-2 border-l-2 border-red-600"
                  style={{ animation: "bounce 2.8s ease-in-out infinite", animationDelay: "1.5s" }}
                >
                  <div className="text-xs font-bold text-gray-900">Peshawar</div>
                  <div className="text-[10px] text-gray-500">KPK Region</div>
                </div>
              </div>
            </div>

            {/* Regional Stats */}
            <div className="space-y-6">
              {[
                {
                  region: "South Region",
                  sites: "6,331",
                  share: "50%+",
                  cities: "Karachi, Hyderabad, Sukkur",
                  color: "bg-red-600",
                  highlight: true,
                },
                {
                  region: "North Region",
                  sites: "5,816",
                  share: "40%",
                  cities: "Islamabad, Peshawar, Gilgit",
                  color: "bg-gray-800",
                },
                {
                  region: "Central Region",
                  sites: "4,426",
                  share: "35%",
                  cities: "Lahore, Faisalabad, Multan",
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
                      <h3 className="text-lg font-bold text-white">{item.region}</h3>
                    </div>
                    <div className={`text-sm font-bold ${item.highlight ? "text-red-500" : "text-gray-400"}`}>
                      {item.share} Share
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold text-white">{item.sites}</div>
                      <div className="text-sm text-gray-500">Managed Sites</div>
                    </div>
                    <div className="text-right text-sm text-gray-400">{item.cities}</div>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-white">2,120+</div>
                  <div className="text-sm text-gray-500">Technical Staff</div>
                </div>
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-white">350+</div>
                  <div className="text-sm text-gray-500">Service Vans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-case" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Case Study</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nationwide Telecom Managed Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              How HNL became Pakistan's leading telecom infrastructure management partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Challenge</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pakistan's telecom operators needed a reliable partner to manage distributed BTS infrastructure across
                challenging terrain, ensure 24/7 uptime, reduce operational costs, and maintain regulatory compliance
                while supporting rapid 4G/5G expansion nationwide.
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
                Operators sought a partner with nationwide presence, technical expertise in multi-vendor environments,
                proven track record in managed services, and the ability to scale operations rapidly. HNL's three
                decades of experience positioned us as the ideal partner.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Solution</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Complete FLM/MS for 16,870+ sites with 24/7 NOC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Preventive & corrective maintenance across all regions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                  <span>DG overhauling and power backup optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Multi-vendor support across operators</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Outcome</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>99.7% uptime</strong> across all managed sites
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>50%+ market share</strong> in south region
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>25-30% OPEX reduction</strong> for clients
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span>
                    <strong>#1 MS Provider</strong> status achieved
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operator Partnerships</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Trusted by Pakistan's leading telecom operators</p>
          </div>

          <Tabs defaultValue="jazz" className="w-full">
            <TabsList className="grid grid-cols-4 gap-2 bg-transparent h-auto mb-8">
              {operatorTabs.map((op) => (
                <TabsTrigger
                  key={op.id}
                  value={op.id}
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white bg-white border border-gray-200 rounded-xl py-4 px-6 font-semibold transition-all hover:border-red-200"
                >
                  {op.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {operatorTabs.map((op) => (
              <TabsContent key={op.id} value={op.id} className="mt-0">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Image
                            src={op.logo || "/placeholder.svg"}
                            alt={op.name}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{op.name}</h3>
                          <p className="text-gray-500">{op.scope}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-red-600">{op.sites}</div>
                          <div className="text-xs text-gray-500 uppercase">Total Sites</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-gray-900">{op.period.split("-")[0]}</div>
                          <div className="text-xs text-gray-500 uppercase">Since</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {Object.values(op.regions).filter((v) => typeof v === "number").length}
                          </div>
                          <div className="text-xs text-gray-500 uppercase">Regions</div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {op.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-900 p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <Quote className="w-10 h-10 text-red-600/50 mb-4" />
                        <p className="text-lg text-gray-300 italic leading-relaxed mb-6">"{op.quote.text}"</p>
                        <div>
                          <div className="font-semibold text-white">{op.quote.author}</div>
                          <div className="text-sm text-gray-500">{op.quote.company}</div>
                        </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-gray-800">
                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">Regional Distribution</div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className="text-xl font-bold text-white">{op.regions.central.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">Central</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-white">{op.regions.north.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">North</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-red-500">{op.regions.south.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">South</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">What Leaders Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Industry Recognition</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {executiveQuotes.map((quote, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-colors"
              >
                <Quote className="w-8 h-8 text-red-600/30 mb-4 mx-auto" />
                <p className="text-gray-400 italic mb-6 leading-relaxed">"{quote.text}"</p>
                <div>
                  <div className="font-semibold text-white">{quote.author}</div>
                  <div className="text-sm text-gray-500">{quote.role}</div>
                  <div className="text-xs text-red-500 mt-1">{quote.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose HNL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Industry-leading capabilities that set us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-red-600 rounded-2xl overflow-hidden">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 hover:bg-red-50 transition-colors group relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gray-900 group-hover:bg-red-600 flex items-center justify-center transition-colors">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Telecom Growth Timeline</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three decades of building Pakistan's telecom infrastructure
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-red-600 to-gray-200 hidden lg:block" />

            <div className="grid lg:grid-cols-6 gap-6">
              {timelineData.map((item, i) => (
                <div key={i} className="relative text-center group">
                  <div
                    className={`w-16 h-16 rounded-full ${i === timelineData.length - 1 ? "bg-red-600" : "bg-gray-900"} text-white flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 group-hover:border-red-200 group-hover:shadow-lg transition-all">
                    <div className="text-red-600 font-bold text-lg mb-1">{item.year}</div>
                    <div className="text-gray-900 font-semibold text-sm mb-1">{item.title}</div>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLM/MS Footprint Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Regional Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FLM/MS Footprint</h2>
            <p className="text-gray-600 text-lg">
              #1 MS provider, managing more than <span className="font-semibold text-red-600">16,870 BTS sites</span>{" "}
              nationwide
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Client</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Network</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Scope</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Period</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Central</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">North</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold bg-red-600">South</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {clientData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-red-50/30 transition-colors`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.client}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.network}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.scope}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.period}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center font-medium">{row.central}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center font-medium">{row.north}</td>
                      <td className="px-6 py-4 text-sm text-red-600 text-center font-bold">{row.south}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 text-center font-bold">
                        {row.total.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-900 text-white">
                    <td colSpan={4} className="px-6 py-4 text-sm font-semibold">
                      Total Sites Managed
                    </td>
                    <td className="px-6 py-4 text-sm text-center font-bold">4,426</td>
                    <td className="px-6 py-4 text-sm text-center font-bold">5,816</td>
                    <td className="px-6 py-4 text-sm text-center font-bold bg-red-600">6,331</td>
                    <td className="px-6 py-4 text-sm text-center font-bold">16,573</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Telecom Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive infrastructure services for telecom operators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.href} className="group">
                <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 group-hover:bg-red-600 flex items-center justify-center mb-4 transition-all">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-500">{solution.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner with Pakistan's <span className="text-red-600">#1</span> Telecom Infrastructure Provider
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join leading telecom operators who trust HNL for nationwide managed services and network operations support.
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
                <Phone className="w-4 h-4 mr-2" />
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <FaqSection
            title="Frequently Asked Questions"
            description="Common questions about our telecom infrastructure services"
            faqs={faqs}
          />
        </div>
      </section>
    </>
  )
}
