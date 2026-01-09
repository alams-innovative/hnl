"use client"

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
  MapPin,
  ArrowRight,
  Gauge,
  Zap,
  Network,
  Drill,
  Quote,
  Server,
  Wifi,
  Cable,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqs = [
  {
    question: "What telecom infrastructure services does HNL provide?",
    answer:
      "HNL offers comprehensive telecom infrastructure services including fiber rollout (FTTH, FTTx, backbone), civil works (trenching, ducting, tower foundations), site integration (BTS installation, commissioning), O&M services, and 24/7 NOC monitoring.",
  },
  {
    question: "Can HNL handle large-scale fiber deployment projects?",
    answer:
      "Yes, with 144 offices nationwide and 2,120+ certified engineers, we execute large-scale fiber deployments across Pakistan. We've deployed thousands of kilometers of fiber for major telecom operators and ISPs.",
  },
  {
    question: "What is HNL's response time for maintenance issues?",
    answer:
      "With 350+ fully equipped service vans positioned nationwide, we achieve average response times under 2 hours for critical issues. Our 24/7 NOC provides real-time monitoring and dispatch.",
  },
  {
    question: "Does HNL provide end-to-end project management?",
    answer:
      "Yes, we offer turnkey solutions from initial site survey and design through construction, installation, testing, commissioning, and ongoing O&M support.",
  },
  {
    question: "What certifications does HNL maintain for telecom work?",
    answer:
      "HNL maintains ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications. Our engineers are trained and certified by major OEMs including Nokia, Huawei, and Ericsson.",
  },
  {
    question: "Which regions does HNL cover for telecom services?",
    answer:
      "We have complete nationwide coverage across all provinces including Punjab, Sindh, KPK, Balochistan, and GB/AJK with regional teams in all major cities.",
  },
]

const services = [
  {
    id: "fiber",
    name: "Fiber Rollout",
    icon: Cable,
    description: "FTTH, FTTx & Backbone Deployment",
    stats: { projects: "500+", km: "10,000+", uptime: "99.9%" },
    features: [
      "FTTH/FTTB/FTTC deployment",
      "Backbone fiber installation",
      "Aerial & underground routing",
      "Splicing & testing services",
      "Network documentation",
    ],
    benefits: [
      "Experienced fiber teams",
      "Own splicing equipment",
      "Rapid deployment capability",
      "Quality testing protocols",
    ],
    quote: {
      text: "HNL's fiber deployment capabilities have significantly accelerated our network expansion across Pakistan.",
      author: "Network Planning Director",
      company: "Leading ISP",
    },
  },
  {
    id: "civil",
    name: "Civil Works",
    icon: Drill,
    description: "Site Development & Preparation",
    stats: { sites: "1,000+", towers: "200+", foundations: "500+" },
    features: [
      "Trenching & ducting",
      "Tower foundation construction",
      "Shelter & cabinet installation",
      "Site grounding systems",
      "Access road development",
    ],
    benefits: ["Own construction equipment", "Experienced civil teams", "All terrain capability", "Safety compliance"],
    quote: {
      text: "Reliable civil work partner with excellent safety record and on-time delivery.",
      author: "Project Manager",
      company: "Tower Company",
    },
  },
  {
    id: "integration",
    name: "Site Integration",
    icon: Server,
    description: "BTS Installation & Commissioning",
    stats: { sites: "16,870+", vendors: "5+", uptime: "99.7%" },
    features: [
      "BTS/NodeB/eNodeB installation",
      "Multi-vendor expertise",
      "RF optimization support",
      "Power system integration",
      "Full site commissioning",
    ],
    benefits: [
      "Multi-vendor certified teams",
      "Complete integration capability",
      "Testing & optimization",
      "Handover documentation",
    ],
    quote: {
      text: "HNL's multi-vendor expertise ensures seamless integration across our diverse network.",
      author: "Technical Director",
      company: "Telecom Operator",
    },
  },
  {
    id: "om",
    name: "O&M Services",
    icon: Wrench,
    description: "Operations & Maintenance",
    stats: { sites: "23,215", vans: "350+", sla: "99.7%" },
    features: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Power system servicing",
      "Environmental monitoring",
      "Spare parts management",
    ],
    benefits: ["24/7 NOC support", "Rapid response teams", "Comprehensive SLAs", "Performance reporting"],
    quote: {
      text: "Consistent service delivery and proactive maintenance have kept our network running smoothly.",
      author: "Operations Head",
      company: "Major Cellular Network",
    },
  },
  {
    id: "noc",
    name: "NOC Services",
    icon: Wifi,
    description: "24/7 Network Monitoring",
    stats: { monitoring: "24/7", alerts: "Real-time", coverage: "Nationwide" },
    features: [
      "Real-time network monitoring",
      "Alarm management",
      "Incident escalation",
      "Performance analytics",
      "Reporting dashboards",
    ],
    benefits: ["Dedicated NOC facility", "Experienced operators", "Multi-vendor NMS", "Custom reporting"],
    quote: {
      text: "HNL's NOC provides the visibility and control we need for our nationwide network.",
      author: "Network Operations Manager",
      company: "ISP Network",
    },
  },
]

const benefits = [
  { icon: Shield, title: "99.7% SLA", description: "Industry-leading service levels" },
  { icon: MapPin, title: "Nationwide", description: "144 offices across Pakistan" },
  { icon: Users, title: "2,120+ Engineers", description: "Certified technical workforce" },
  { icon: Clock, title: "24/7 NOC", description: "Round-the-clock operations" },
  { icon: Gauge, title: "350+ Vans", description: "Rapid response fleet" },
  { icon: Award, title: "#1 Provider", description: "Market leader in Pakistan" },
]

const capabilities = [
  { value: "10,000+", label: "KM Fiber Deployed", icon: Cable },
  { value: "1,000+", label: "Sites Developed", icon: Building2 },
  { value: "16,870+", label: "BTS Integrated", icon: Radio },
  { value: "23,215", label: "Sites Maintained", icon: Wrench },
]

export default function TelecomInfrastructurePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Telecom Infrastructure", href: "/telecom-infrastructure" },
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
              <Network className="w-4 h-4 text-red-500" />
              <span className="text-red-500 font-medium text-sm tracking-wide">End-to-End Infrastructure Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Telecom Infrastructure
              <span className="block text-red-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              From fiber deployment to NOC monitoring, HNL delivers turnkey telecom infrastructure solutions for
              Pakistan's leading operators.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="#services">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
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
              {capabilities.map((stat, i) => {
                const IconComponent = stat.icon
                return (
                  <div key={i} className="text-center">
                    <IconComponent className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Hook Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Infrastructure Excellence
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Building Pakistan's Digital Future
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                HNL provides comprehensive telecom infrastructure services from initial planning through deployment and
                ongoing operations. Our nationwide presence and technical expertise enable rapid, reliable network
                buildouts.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Turnkey Solutions", desc: "End-to-end project delivery capability" },
                  { label: "Multi-Vendor Expertise", desc: "Nokia, Huawei, Ericsson, ZTE certified" },
                  { label: "Rapid Deployment", desc: "Fast-track execution with quality assurance" },
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
                  alt="Telecom Infrastructure"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10,000+</div>
                    <div className="text-sm text-gray-500">KM Fiber Deployed</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Radio className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">16,870+</div>
                    <div className="text-sm text-gray-500">BTS Integrated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated R8 Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Reach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nationwide Infrastructure <span className="text-red-600">Coverage</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* R8 Animation */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-200 animate-[spin_30s_linear_infinite_reverse]" />

                {/* R8 Spiral */}
                <div className="absolute inset-4 animate-[spin_20s_linear_infinite]">
                  <Image src="/r8-spiral.png" alt="HNL R8" fill className="object-contain" />
                </div>

                {/* Center Stats */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex flex-col items-center justify-center z-10">
                    <span className="text-2xl font-bold text-red-600">144</span>
                    <span className="text-xs text-gray-500">Offices</span>
                  </div>
                </div>

                {/* Floating Labels */}
                {[
                  { label: "Punjab", value: "45", angle: 0 },
                  { label: "Sindh", value: "38", angle: 90 },
                  { label: "KPK", value: "32", angle: 180 },
                  { label: "Balochistan", value: "29", angle: 270 },
                ].map((region, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-lg shadow-md px-3 py-2 text-center"
                    style={{
                      top: `${50 + 45 * Math.sin((region.angle * Math.PI) / 180)}%`,
                      left: `${50 + 45 * Math.cos((region.angle * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="text-lg font-bold text-red-600">{region.value}</div>
                    <div className="text-xs text-gray-500">{region.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Infrastructure Capabilities</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Cable, title: "Fiber Networks", desc: "FTTH, FTTx, Backbone" },
                  { icon: Building2, title: "Civil Works", desc: "Sites & Foundations" },
                  { icon: Server, title: "Site Integration", desc: "Multi-vendor BTS" },
                  { icon: Wrench, title: "O&M Services", desc: "Preventive & Corrective" },
                  { icon: Wifi, title: "NOC Operations", desc: "24/7 Monitoring" },
                  { icon: Shield, title: "Site Security", desc: "Asset Protection" },
                ].map((cap, i) => {
                  const IconComponent = cap.icon
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all"
                    >
                      <IconComponent className="w-8 h-8 text-red-600 mb-3" />
                      <div className="font-semibold text-gray-900">{cap.title}</div>
                      <div className="text-sm text-gray-500">{cap.desc}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section id="use-case" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Use Case</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nationwide Network <span className="text-red-600">Deployment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenge */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Challenge</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A major telecom operator needed to rapidly expand network coverage across rural Pakistan with limited
                local expertise, challenging terrain, and tight deployment timelines for new 4G sites.
              </p>
            </div>

            {/* Opportunity */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Opportunity</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The operator sought a single partner capable of delivering turnkey infrastructure solutions including
                site acquisition, civil works, equipment installation, and ongoing maintenance.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Solution</h3>
              </div>
              <p className="text-gray-600 mb-4">HNL deployed a comprehensive infrastructure solution:</p>
              <ul className="space-y-2">
                {[
                  "Site survey and acquisition across 500+ locations",
                  "Civil works including tower foundations and shelters",
                  "Multi-vendor BTS installation and commissioning",
                  "24/7 NOC monitoring with rapid response teams",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Outcome</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {[
                  "500+ sites deployed within 12 months",
                  "99.7% network uptime achieved",
                  "30% faster rollout vs. industry average",
                  "Seamless transition to managed services",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-green-700 italic text-sm border-t border-green-100 pt-4">
                The project established HNL as the operator's primary infrastructure partner for future expansions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Infrastructure <span className="text-red-600">Solutions</span>
            </h2>
          </div>

          <Tabs defaultValue="fiber" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="px-6 py-3 rounded-full border-2 border-gray-200 data-[state=active]:border-red-600 data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
                >
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <TabsContent key={service.id} value={service.id}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                      {/* Left: Service Details */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-red-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                            <p className="text-gray-500">{service.description}</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {Object.entries(service.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-xl font-bold text-red-600">{value}</div>
                              <div className="text-xs text-gray-500 uppercase">{key}</div>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="font-semibold text-gray-900 mb-4">Service Features</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href={`/telecom-infrastructure/${service.id}`}>
                          <Button className="bg-red-600 hover:bg-red-700 text-white">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>

                      {/* Right: Quote & Benefits */}
                      <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-between">
                        {/* Quote */}
                        <div className="mb-8">
                          <Quote className="w-10 h-10 text-red-200 mb-4" />
                          <p className="text-lg text-gray-700 italic mb-4">"{service.quote.text}"</p>
                          <div>
                            <div className="font-semibold text-gray-900">{service.quote.author}</div>
                            <div className="text-sm text-gray-500">{service.quote.company}</div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Why Choose HNL</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Why HNL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Key <span className="text-red-600">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-red-500 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              How We <span className="text-red-500">Deliver</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Survey & Design",
                desc: "Site assessment, feasibility study, and detailed engineering design",
              },
              { step: "02", title: "Build & Deploy", desc: "Civil works, equipment installation, and integration" },
              { step: "03", title: "Test & Commission", desc: "Comprehensive testing, optimization, and handover" },
              { step: "04", title: "Operate & Maintain", desc: "24/7 monitoring, preventive & corrective maintenance" },
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-red-600/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 right-0 w-12 h-0.5 bg-red-600/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Common <span className="text-red-600">Questions</span>
            </h2>
          </div>

          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* Final Section - Not a CTA */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Build Your <span className="text-red-600">Network?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Partner with Pakistan's leading telecom infrastructure provider. Our team is ready to discuss your
                requirements and deliver solutions that exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  "Free site survey and assessment",
                  "Customized solution design",
                  "Competitive pricing with flexible terms",
                  "Dedicated project management",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>

              <div className="space-y-4">
                <Link href="/contact/sales" className="block">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                    Request a Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link href="/contact" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 py-6 text-lg bg-transparent"
                  >
                    Talk to Our Team
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Or reach us directly:</p>
                <div className="flex items-center gap-4 text-gray-700">
                  <span className="font-semibold">0800-111-465</span>
                  <span className="text-gray-300">|</span>
                  <span>info@hnl.com.pk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
