"use client"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Breadcrumbs from "@/components/breadcrumbs"
import FaqSection from "@/components/faq-section"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  Cloud,
  Server,
  Shield,
  Brain,
  CheckCircle2,
  Users,
  Clock,
  Target,
  Lightbulb,
  CheckCheck,
  ArrowRight,
  Building2,
  Quote,
  Lock,
  Cpu,
  TrendingUp,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqs = [
  {
    question: "Does HNL work with banks and financial institutions?",
    answer:
      "Yes, we have extensive experience with regulated industries including banking, ensuring compliance with SBP and PCI-DSS requirements. We serve major banks like HBL, MCB, Allied Bank, Faysal Bank, and NBP.",
  },
  {
    question: "Can you support our existing IT team?",
    answer:
      "Absolutely. We augment in-house teams with specialized expertise for cloud, AI, and infrastructure projects. Our managed services model provides 24/7 support while your team focuses on core business initiatives.",
  },
  {
    question: "What cloud platforms do you specialize in?",
    answer:
      "We are certified partners for AWS, Microsoft Azure, and Google Cloud, and recommend platforms based on your specific needs. Our team has completed 50+ enterprise cloud migrations with zero-downtime cutover strategies.",
  },
  {
    question: "How does HNL ensure data security and compliance?",
    answer:
      "We implement multi-layered security architecture with ISO 27001 frameworks, DDoS protection, and continuous monitoring. Our SOC team operates 24/7 ensuring enterprise-grade security for all managed infrastructure.",
  },
  {
    question: "What is HNL's experience with AI and automation?",
    answer:
      "We have deployed AI solutions for customer service automation, predictive maintenance, and business intelligence across banking, telecom, and government sectors. Our AI agents handle 100,000+ monthly interactions.",
  },
  {
    question: "Can HNL handle mission-critical infrastructure?",
    answer:
      "Yes, we manage mission-critical infrastructure for telecom operators, banks, and government agencies. Our 99.9% uptime guarantee and 24/7 NOC support ensure business continuity for the most demanding environments.",
  },
]

const benefits = [
  { icon: Cloud, title: "99.9% Uptime", description: "Enterprise-grade cloud reliability" },
  { icon: Shield, title: "ISO 27001", description: "Certified security frameworks" },
  { icon: Users, title: "100+ Clients", description: "Enterprise organizations served" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock IT helpdesk" },
  { icon: TrendingUp, title: "40% Savings", description: "Average IT cost reduction" },
  { icon: Award, title: "50+ Migrations", description: "Successful cloud projects" },
]

const solutions = [
  {
    title: "Cloud Migration",
    description: "AWS, Azure, and Google Cloud migration with managed services",
    href: "/software-cloud-ai/cloud-migration",
    icon: Cloud,
  },
  {
    title: "AI Agents",
    description: "Custom AI solutions for automation and business intelligence",
    href: "/software-cloud-ai/ai-agents",
    icon: Brain,
  },
  {
    title: "Enterprise IT",
    description: "Managed IT infrastructure and 24/7 helpdesk support",
    href: "/software-cloud-ai/enterprise-it-services",
    icon: Server,
  },
  {
    title: "Cybersecurity",
    description: "Multi-layered security and compliance solutions",
    href: "/software-cloud-ai/cybersecurity",
    icon: Lock,
  },
]

const solutionTabs = [
  {
    id: "cloud",
    name: "Cloud",
    icon: Cloud,
    color: "red",
    stats: { projects: "50+", uptime: "99.9%", savings: "40%" },
    description: "Enterprise cloud migration and managed services",
    highlights: [
      "Zero-downtime migration strategies",
      "Multi-cloud architecture design",
      "Cost optimization and FinOps",
      "24/7 managed cloud operations",
    ],
    quote: {
      text: "HNL's cloud migration transformed our IT operations, reducing costs by 45% while improving performance.",
      author: "CTO",
      company: "Leading Financial Institution",
    },
  },
  {
    id: "ai",
    name: "AI & Analytics",
    icon: Brain,
    color: "red",
    stats: { interactions: "100K+", accuracy: "95%", automation: "60%" },
    description: "AI-powered automation and business intelligence",
    highlights: [
      "Custom AI agent development",
      "Natural language processing",
      "Predictive analytics platforms",
      "Business intelligence dashboards",
    ],
    quote: {
      text: "The AI chatbot HNL deployed handles 70% of our customer queries automatically with excellent accuracy.",
      author: "Head of Digital",
      company: "Major Bank",
    },
  },
  {
    id: "infrastructure",
    name: "IT Infrastructure",
    icon: Server,
    color: "red",
    stats: { endpoints: "10K+", tickets: "5K/mo", resolution: "98%" },
    description: "Managed IT services and infrastructure support",
    highlights: [
      "End-to-end IT management",
      "Network design and optimization",
      "Data center solutions",
      "Unified communications",
    ],
    quote: {
      text: "HNL's managed services freed our IT team to focus on innovation rather than maintenance.",
      author: "IT Director",
      company: "Multinational Corporation",
    },
  },
  {
    id: "security",
    name: "Security",
    icon: Shield,
    color: "red",
    stats: { threats: "1M+", blocked: "99.9%", compliance: "100%" },
    description: "Enterprise cybersecurity and compliance",
    highlights: [
      "SOC-as-a-Service",
      "Threat detection and response",
      "Compliance management",
      "Security awareness training",
    ],
    quote: {
      text: "Since partnering with HNL, we've achieved full regulatory compliance and zero security incidents.",
      author: "CISO",
      company: "Government Agency",
    },
  },
]

const clientLogos = [
  { name: "HBL", sector: "Banking" },
  { name: "MCB", sector: "Banking" },
  { name: "Allied Bank", sector: "Banking" },
  { name: "Faysal Bank", sector: "Banking" },
  { name: "NBP", sector: "Banking" },
  { name: "Punjab Police", sector: "Government" },
  { name: "PSCA", sector: "Government" },
  { name: "Pakistan Railways", sector: "Government" },
]

export default function EnterpriseIndustryPage() {
  const [activeTab, setActiveTab] = useState("cloud")

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Enterprise", href: "/industries/enterprise" },
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
              <Building2 className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-medium text-sm tracking-wide">Digital Transformation Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Enterprise IT
              <span className="block text-red-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Transform your IT infrastructure with cloud, AI, and data solutions. We help Pakistan's leading
              enterprises modernize technology stacks and unlock digital capabilities.
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
                  Talk to an Expert
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "100+", label: "Enterprise Clients" },
                { value: "50+", label: "Cloud Migrations" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Support" },
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Powering Pakistan's Digital <span className="text-red-600">Enterprise</span> Ecosystem
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                From legacy system modernization to cutting-edge AI deployments, HNL delivers end-to-end IT
                transformation for banks, corporations, and government agencies across Pakistan.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Cloud-First Strategy</h3>
                    <p className="text-neutral-600 text-sm">AWS, Azure, and GCP certified migrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">AI-Powered Automation</h3>
                    <p className="text-neutral-600 text-sm">Custom AI agents and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Enterprise Security</h3>
                    <p className="text-neutral-600 text-sm">ISO 27001 certified, 24/7 SOC monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-enterprise-data-center-with-servers-and-clo.jpg"
                  alt="Enterprise Data Center"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-neutral-100">
                <div className="text-2xl font-bold text-red-600">50+</div>
                <div className="text-sm text-neutral-600">Cloud Migrations</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-neutral-100">
                <div className="text-2xl font-bold text-red-600">100K+</div>
                <div className="text-sm text-neutral-600">AI Interactions/mo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated R8 Spiral Section */}
      <section className="py-20 bg-neutral-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise <span className="text-red-600">Footprint</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Serving major enterprises across banking, government, and corporate sectors with comprehensive IT
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated R8 Spiral */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/30 animate-[spin_30s_linear_infinite]" />

                {/* Middle ring */}
                <div className="absolute inset-4 rounded-full border border-red-600/20 animate-[spin_20s_linear_infinite_reverse]" />

                {/* R8 Spiral Image */}
                <div className="absolute inset-8 flex items-center justify-center animate-[spin_25s_linear_infinite]">
                  <Image
                    src="/r8-spiral.png"
                    alt="HNL R8 Brand Element"
                    width={280}
                    height={280}
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>

                {/* Center stats */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-neutral-950/80 rounded-full w-24 h-24 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-red-600">100+</div>
                    <div className="text-xs text-neutral-400">Clients</div>
                  </div>
                </div>

                {/* Floating sector labels */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-red-600 rounded-full text-xs font-medium animate-bounce">
                  Banking
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs font-medium border border-neutral-700">
                  Government
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs font-medium border border-neutral-700">
                  Corporate
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs font-medium border border-neutral-700">
                  Telecom
                </div>
              </div>
            </div>

            {/* Sector Stats */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 bg-neutral-900/50 transition-all hover:bg-neutral-900">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Banking & Finance</h3>
                  <span className="text-red-600 font-bold">5+ Major Banks</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-neutral-400">Branches Served</div>
                    <div className="font-semibold">500+</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">ATMs Managed</div>
                    <div className="font-semibold">1,000+</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Uptime</div>
                    <div className="font-semibold text-green-500">99.9%</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 bg-neutral-900/50 transition-all hover:bg-neutral-900">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Government & Public Sector</h3>
                  <span className="text-red-600 font-bold">10+ Agencies</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-neutral-400">Projects</div>
                    <div className="font-semibold">25+</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Cities Covered</div>
                    <div className="font-semibold">50+</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Users</div>
                    <div className="font-semibold">10,000+</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 bg-neutral-900/50 transition-all hover:bg-neutral-900">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Corporate & MNCs</h3>
                  <span className="text-red-600 font-bold">50+ Companies</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-neutral-400">Endpoints</div>
                    <div className="font-semibold">10,000+</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Monthly Tickets</div>
                    <div className="font-semibold">5,000+</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Resolution</div>
                    <div className="font-semibold text-green-500">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Challenge/Opportunity/Solution/Outcome */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Use Case: <span className="text-red-600">Enterprise Cloud Migration</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              How HNL transformed a leading financial institution's IT infrastructure with zero-downtime cloud migration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenge */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Challenge</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Legacy on-premise systems creating high operational costs and limiting business agility. Outdated
                infrastructure required significant capital expenditure for upgrades while struggling to meet growing
                digital demands and regulatory compliance requirements.
              </p>
            </div>

            {/* Opportunity */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Opportunity</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                The client sought a partner capable of engineering a phased cloud migration that could modernize
                infrastructure without disrupting 24/7 banking operations, while achieving compliance with SBP
                regulations and international standards.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Solution</h3>
              </div>
              <p className="text-neutral-600 mb-4">HNL deployed a comprehensive hybrid cloud architecture with:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Zero-downtime migration with parallel systems
                </li>
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Multi-cloud disaster recovery architecture
                </li>
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  24/7 managed services with dedicated NOC
                </li>
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Complete compliance with SBP and PCI-DSS
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Outcome</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  45% reduction in IT infrastructure costs
                </li>
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  99.99% uptime verified over 24 months
                </li>
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  60% faster application deployment
                </li>
                <li className="flex items-center gap-2 text-neutral-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Full regulatory compliance achieved
                </li>
              </ul>
              <p className="text-sm text-green-700 italic">
                The project became a reference implementation for enterprise cloud adoption in Pakistan's banking
                sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Enterprise <span className="text-red-600">Solutions</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive IT infrastructure and digital transformation solutions tailored for enterprise needs
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-8">
              {solutionTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-3 rounded-full border-2 border-neutral-200 data-[state=active]:border-red-600 data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutionTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">{tab.description}</h3>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white rounded-xl">
                      {Object.entries(tab.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-red-600">{value}</div>
                          <div className="text-xs text-neutral-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {tab.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="text-neutral-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote Card */}
                  <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                    <Quote className="w-10 h-10 text-red-600 mb-6" />
                    <blockquote className="text-xl leading-relaxed mb-6">"{tab.quote.text}"</blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Users className="w-6 h-6 text-neutral-400" />
                      </div>
                      <div>
                        <div className="font-semibold">{tab.quote.author}</div>
                        <div className="text-neutral-400 text-sm">{tab.quote.company}</div>
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
      <section className="py-20 bg-neutral-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key <span className="text-red-600">Benefits</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Why leading enterprises choose HNL for their digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-neutral-800 hover:border-red-600/50 bg-neutral-900/50 transition-all hover:bg-neutral-900"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-colors">
                    <benefit.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-neutral-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Related <span className="text-red-600">Solutions</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive IT services for modern enterprise requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.href}
                className="group p-6 rounded-xl border border-neutral-200 hover:border-red-600 bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <solution.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-red-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 text-sm">{solution.description}</p>
                <div className="mt-4 flex items-center text-red-600 text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ready to <span className="text-red-600">Transform</span> Your IT?
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our solution architects to discuss your digital transformation roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">
                Talk to a Solution Architect
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white bg-transparent"
            >
              <Link href="/software-cloud-ai">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection faqs={faqs} />
    </>
  )
}
