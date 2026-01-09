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
  Database,
  Network,
  CheckCircle2,
  Users,
  Clock,
  Target,
  Lightbulb,
  CheckCheck,
  ArrowRight,
  Cpu,
  Quote,
  TrendingUp,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqs = [
  {
    question: "What cloud platforms does HNL specialize in?",
    answer:
      "We are certified partners for AWS, Microsoft Azure, and Google Cloud. We recommend platforms based on your specific workload requirements, budget, and technical needs. Our team has completed 50+ enterprise cloud migrations with zero-downtime strategies.",
  },
  {
    question: "How long does a cloud migration typically take?",
    answer:
      "Timeline depends on infrastructure complexity. Small workloads (5-10 servers) take 2-4 weeks, while enterprise migrations (100+ servers) can take 3-6 months. We provide a detailed timeline after the assessment phase.",
  },
  {
    question: "Can AI agents speak Urdu and handle local languages?",
    answer:
      "Yes. Our AI agents support multilingual conversations including English, Urdu, and Roman Urdu. They can switch languages mid-conversation based on customer preference, making them ideal for Pakistani businesses.",
  },
  {
    question: "How secure is data in HNL-managed infrastructure?",
    answer:
      "We implement ISO 27001 certified security frameworks with multi-layered protection including encryption at rest and in transit, role-based access control, 24/7 SOC monitoring, and full audit logging. We comply with SBP and PCI-DSS requirements.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes. We offer 24/7 managed services with proactive monitoring, incident response, and continuous optimization. Our NOC monitors infrastructure around the clock ensuring 99.9% uptime SLA.",
  },
  {
    question: "What industries does HNL serve for software and cloud solutions?",
    answer:
      "We serve banking and financial institutions (HBL, MCB, Allied Bank), government agencies (Punjab Police, PSCA, Pakistan Railways), telecom operators, manufacturing companies, and corporate enterprises across Pakistan.",
  },
]

const benefits = [
  { icon: Cloud, title: "99.9% Uptime", description: "Enterprise cloud reliability" },
  { icon: Shield, title: "ISO 27001", description: "Certified security frameworks" },
  { icon: Users, title: "100+ Clients", description: "Enterprise organizations" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock helpdesk" },
  { icon: TrendingUp, title: "40% Savings", description: "Average cost reduction" },
  { icon: Award, title: "50+ Migrations", description: "Successful cloud projects" },
]

const solutionTabs = [
  {
    id: "cloud",
    name: "Cloud Migration",
    icon: Cloud,
    stats: { projects: "50+", uptime: "99.9%", savings: "40%" },
    description: "Migrate to AWS, Azure, or Google Cloud with zero downtime and optimized costs",
    highlights: [
      "Zero-downtime migration strategies",
      "Multi-cloud and hybrid cloud expertise",
      "Automated backups and disaster recovery",
      "24/7 post-migration support",
    ],
    href: "/software-cloud-ai/cloud-migration",
    quote: {
      text: "HNL's cloud migration reduced our infrastructure costs by 45% while improving performance and reliability significantly.",
      author: "Chief Technology Officer",
      company: "Leading Financial Institution",
    },
  },
  {
    id: "ai",
    name: "AI Agents",
    icon: Brain,
    stats: { interactions: "100K+", accuracy: "95%", automation: "70%" },
    description: "Deploy intelligent AI agents for customer service, operations, and business automation",
    highlights: [
      "Custom AI agents trained on your data",
      "Multilingual support (Urdu, English)",
      "Integration with CRM/ERP systems",
      "Human-in-the-loop quality control",
    ],
    href: "/software-cloud-ai/ai-agents",
    quote: {
      text: "The AI chatbot HNL deployed handles 70% of our customer queries automatically with excellent accuracy.",
      author: "Head of Digital Banking",
      company: "Major Pakistani Bank",
    },
  },
  {
    id: "bigdata",
    name: "Big Data & Analytics",
    icon: Database,
    stats: { records: "100M+", dashboards: "50+", insights: "Real-time" },
    description: "Turn enterprise data into actionable insights with modern data warehouses and BI",
    highlights: [
      "Data warehousing on Snowflake/BigQuery",
      "Real-time BI dashboards",
      "Predictive analytics and ML models",
      "Self-service analytics for users",
    ],
    href: "/software-cloud-ai/big-data-analytics",
    quote: {
      text: "HNL's analytics platform gave us visibility we never had before. Decision-making is now data-driven across the organization.",
      author: "VP of Operations",
      company: "Manufacturing Corporation",
    },
  },
  {
    id: "ict",
    name: "ICT Infrastructure",
    icon: Network,
    stats: { deployments: "100+", uptime: "99.9%", experience: "10+ Years" },
    description: "Design and deploy secure, scalable ICT infrastructure for offices and campuses",
    highlights: [
      "LAN/WAN design and deployment",
      "Enterprise WiFi networks",
      "Data center setup and management",
      "Network security and firewalls",
    ],
    href: "/software-cloud-ai/ict-infrastructure",
    quote: {
      text: "HNL designed and deployed our entire campus network with zero downtime during the transition.",
      author: "IT Director",
      company: "Multinational Corporation",
    },
  },
]

const useCaseCards = [
  {
    type: "Challenge",
    icon: Target,
    color: "border-l-red-500 bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    content:
      "Pakistani enterprises face fragmented IT systems, legacy infrastructure, and skills gaps that hinder digital transformation and competitive advantage.",
  },
  {
    type: "Opportunity",
    icon: Lightbulb,
    color: "border-l-amber-500 bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    content:
      "Organizations need a trusted partner with deep local expertise, global technology partnerships, and proven delivery capabilities to modernize IT operations.",
  },
  {
    type: "Solution",
    icon: Cpu,
    color: "border-l-blue-500 bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    content:
      "HNL delivers end-to-end digital transformation—cloud migration, AI automation, data analytics, and managed services—with certified expertise across AWS, Azure, and Google Cloud.",
  },
  {
    type: "Outcome",
    icon: CheckCheck,
    color: "border-l-green-500 bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    content:
      "40% average cost reduction, 99.9% uptime SLA, AI handling 70%+ routine tasks, and real-time business intelligence enabling data-driven decisions across the enterprise.",
  },
]

const timeline = [
  { year: "2010", title: "ICT Division Launch", description: "Started enterprise IT services for corporate clients" },
  { year: "2015", title: "Cloud Services", description: "Launched AWS and Azure partnership programs" },
  { year: "2018", title: "Data Analytics", description: "Established big data and BI practice" },
  { year: "2020", title: "AI Automation", description: "Deployed first AI agents for customer service" },
  { year: "2023", title: "100+ Enterprise Clients", description: "Serving Pakistan's leading organizations" },
  { year: "2024", title: "Gen AI Capabilities", description: "Advanced LLM integration and custom AI solutions" },
]

export default function SoftwareCloudAIPage() {
  const [activeTab, setActiveTab] = useState("cloud")

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Software, Cloud & AI", href: "/software-cloud-ai" },
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
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
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
              <Cloud className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-medium text-sm tracking-wide">Digital Transformation Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Software, Cloud
              <span className="block text-red-500">& AI Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Modernize your enterprise with cloud infrastructure, AI automation, and intelligent IT services built for
              Pakistan's digital economy.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#solutions">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
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
                Powering Pakistan's <span className="text-red-600">Digital</span> Transformation
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                From cloud migration to AI-powered automation, HNL delivers enterprise-grade software solutions that
                scale with your business. We help banks, government agencies, and corporations modernize their IT
                operations.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Multi-Cloud Expertise</h3>
                    <p className="text-neutral-600 text-sm">AWS, Azure, Google Cloud certified migrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">AI-Powered Automation</h3>
                    <p className="text-neutral-600 text-sm">Custom AI agents handling 100K+ monthly interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Data-Driven Insights</h3>
                    <p className="text-neutral-600 text-sm">Real-time BI dashboards and predictive analytics</p>
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
                  alt="Enterprise Cloud Infrastructure"
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
              Digital <span className="text-red-600">Capabilities</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Comprehensive software, cloud, and AI solutions serving Pakistan's enterprise ecosystem
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

                {/* Floating capability labels */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-red-600 rounded-full text-xs font-medium animate-bounce">
                  Cloud
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs font-medium border border-neutral-700">
                  AI & ML
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs font-medium border border-neutral-700">
                  Analytics
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-3 py-1.5 bg-neutral-800 rounded-full text-xs font-medium border border-neutral-700">
                  ICT
                </div>
              </div>
            </div>

            {/* Capability Stats */}
            <div className="space-y-6">
              {[
                {
                  label: "Cloud Migrations",
                  value: "50+",
                  detail: "AWS, Azure, Google Cloud",
                  percentage: 85,
                },
                {
                  label: "AI Deployments",
                  value: "20+",
                  detail: "Custom AI agents & automation",
                  percentage: 70,
                },
                {
                  label: "Data Warehouses",
                  value: "15+",
                  detail: "Snowflake, BigQuery, Redshift",
                  percentage: 60,
                },
                {
                  label: "Network Deployments",
                  value: "100+",
                  detail: "LAN, WAN, WiFi, Security",
                  percentage: 90,
                },
              ].map((item, i) => (
                <div key={i} className="bg-neutral-900 rounded-xl p-5 border border-neutral-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="text-red-500 font-bold">{item.value}</span>
                  </div>
                  <div className="text-sm text-neutral-500 mb-3">{item.detail}</div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Use Case: <span className="text-red-600">Enterprise Digital Transformation</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              How HNL helps Pakistani enterprises modernize IT infrastructure and unlock digital capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCaseCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={i} className={`bg-white rounded-xl p-6 border-l-4 ${card.color} shadow-sm`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-neutral-900">{card.type}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{card.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tabbed Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our <span className="text-red-600">Solutions</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive software, cloud, and AI capabilities for enterprise digital transformation
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent h-auto p-0">
              {solutionTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-5 py-3 rounded-full border border-neutral-200 data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:border-red-600 transition-all flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {tab.name}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {solutionTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Info */}
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{tab.name}</h3>
                    <p className="text-neutral-600 mb-6">{tab.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(tab.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-white rounded-lg">
                          <div className="text-xl font-bold text-red-600">{value}</div>
                          <div className="text-xs text-neutral-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 mb-6">
                      {tab.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="text-neutral-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={tab.href}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Right: Quote */}
                  <div className="bg-neutral-900 rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                    <Quote className="w-10 h-10 text-red-500 mb-6" />
                    <blockquote className="text-lg md:text-xl leading-relaxed mb-6 italic">
                      "{tab.quote.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{tab.quote.author}</div>
                      <div className="text-neutral-400 text-sm">{tab.quote.company}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose <span className="text-red-600">HNL</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Enterprise-grade capabilities with local expertise and global technology partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-red-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">{benefit.title}</h3>
                      <p className="text-sm text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Building digital capabilities for Pakistan's enterprise ecosystem
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-red-600/50 transition-colors">
                      <div className="text-red-500 font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-neutral-400 text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-4 h-4 rounded-full bg-red-600 border-4 border-neutral-950 z-10 hidden md:block" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Explore Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Dive deeper into our software, cloud, and AI capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Cloud Migration",
                description: "AWS, Azure, Google Cloud migrations with zero downtime",
                href: "/software-cloud-ai/cloud-migration",
              },
              {
                icon: Brain,
                title: "AI Agents & Automation",
                description: "Intelligent AI for customer service and operations",
                href: "/software-cloud-ai/ai-agents",
              },
              {
                icon: Database,
                title: "Big Data & Analytics",
                description: "Data warehouses, BI dashboards, predictive analytics",
                href: "/software-cloud-ai/big-data-analytics",
              },
              {
                icon: Network,
                title: "ICT Infrastructure",
                description: "LAN, WAN, WiFi, data center design and deployment",
                href: "/software-cloud-ai/ict-infrastructure",
              },
              {
                icon: Server,
                title: "Enterprise IT Services",
                description: "Managed IT, helpdesk, and infrastructure support",
                href: "/software-cloud-ai/enterprise-it-services",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Security operations, compliance, and threat protection",
                href: "/software-cloud-ai/cybersecurity",
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <Link
                  key={i}
                  href={service.href}
                  className="group bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:border-red-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                  <span className="text-red-600 text-sm font-medium flex items-center gap-1">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to <span className="text-red-600">Transform</span> Your IT?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Talk to our solution architects about cloud migration, AI automation, or enterprise IT services
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+924235761999">
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 hover:bg-neutral-100 px-8 bg-transparent"
              >
                Call +92 42 35761999
              </Button>
            </Link>
          </div>

          <p className="text-sm text-neutral-500">
            Email: <span className="text-neutral-700">cloud@hnlpk.com</span> |{" "}
            <span className="text-neutral-700">ai@hnlpk.com</span>
          </p>
        </div>
      </section>
    </>
  )
}
