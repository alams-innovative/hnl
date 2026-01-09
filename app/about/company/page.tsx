import Image from "next/image"
import {
  Building2,
  Users,
  Globe,
  Award,
  CheckCircle,
  Zap,
  Server,
  Shield,
  Target,
  Cpu,
  Handshake,
  MapPin,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata = {
  title: "About HNL | Pakistan's Leading Infrastructure & Energy Company",
  description:
    "Learn about Hitech Network Limited (HNL), Pakistan's premier provider of telecommunications, energy, and IT infrastructure solutions since 2004.",
}

export default function CompanyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Company", href: "/about/company" },
  ]

  const timelineItems = [
    {
      year: "2004",
      title: "HNL Founded",
      description:
        "Hitech Network (Pvt.) Limited established in Lahore to redefine Pakistan's energy industry with reliable AC & DC Power Solutions.",
      milestone: "Foundation",
    },
    {
      year: "2008",
      title: "Managed Services Launch",
      description:
        "Expanded into managed services for telecom infrastructure, becoming Pakistan's pioneer in comprehensive telecom site management.",
      milestone: "Expansion",
    },
    {
      year: "2012",
      title: "Energy Division Growth",
      description:
        "Strengthened power solutions portfolio with diesel generators and hybrid power systems across industrial and enterprise sectors.",
      milestone: "Diversification",
    },
    {
      year: "2015",
      title: "National Coverage",
      description:
        "Achieved nationwide presence with operations in 30+ cities, managing thousands of critical infrastructure sites.",
      milestone: "Scale",
    },
    {
      year: "2018",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2015 certification for quality management systems, solidifying commitment to engineering excellence.",
      milestone: "Quality",
    },
    {
      year: "2020",
      title: "Market Leadership",
      description:
        "Became Pakistan's largest Managed Services provider with 50%+ market share in South region, managing 16,000+ active sites.",
      milestone: "Leadership",
    },
    {
      year: "2023",
      title: "Infrastructure Excellence",
      description:
        "Operating 8 Perkins-standard workshops, 144 offices nationwide, and 2,120+ technical workforce including 180+ qualified engineers.",
      milestone: "Excellence",
    },
    {
      year: "2025",
      title: "Future Ready",
      description:
        "Investing in AI-driven operations, renewable energy solutions, and enterprise digital transformation capabilities.",
      milestone: "Innovation",
    },
  ]

  const capabilities = [
    {
      title: "Infrastructure Solutions",
      description: "Planning, deployment, integration, and lifecycle management of critical infrastructure systems.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      title: "Energy Solutions",
      description:
        "Designing and implementing energy solutions that prioritize efficiency, sustainability, and reliability.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    },
    {
      title: "IT & Digital",
      description: "Software development, cloud migration, and AI-driven services for modern enterprises.",
      icon: Server,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    },
    {
      title: "Managed Services",
      description:
        "End-to-end operations, maintenance, and support services for telecom and enterprise infrastructure.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1581092918056-c627a92ad1ab?w=400&h=300&fit=crop",
    },
  ]

  const values = [
    { title: "Excellence", text: "Pursuing the highest standards in everything we do", icon: Award },
    { title: "Integrity", text: "Operating with honesty and transparency", icon: Shield },
    { title: "Innovation", text: "Embracing new technologies and approaches", icon: Zap },
    { title: "Partnership", text: "Building lasting relationships with clients", icon: Handshake },
    { title: "Reliability", text: "Delivering consistent, dependable results", icon: CheckCircle },
  ]

  const whyHNL = [
    {
      title: "Local Expertise",
      text: "Deep understanding of Pakistan's market dynamics",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      title: "Proven Track Record",
      text: "20+ years of successful project delivery",
      icon: Award,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    },
    {
      title: "Risk Management",
      text: "Strong governance and compliance discipline",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
    {
      title: "Integrated Solutions",
      text: "End-to-end capabilities across all domains",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    },
    {
      title: "Partnership Mindset",
      text: "Long-term relationships over transactions",
      icon: Handshake,
      image: "https://images.unsplash.com/photo-1521791136064-7986c292021c?w=400&h=300&fit=crop",
    },
    {
      title: "Technical Strength",
      text: "2,120+ skilled professionals nationwide",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
  ]

  const partners = [
    { name: "AGG Power", logo: "/images/29.png", country: "China", flag: "🇨🇳" },
    { name: "Huawei", logo: "/images/8.png", country: "China", flag: "🇨🇳" },
    { name: "ZTE", logo: "/images/9.png", country: "China", flag: "🇨🇳" },
    { name: "Nokia", logo: "/images/6.png", country: "Finland", flag: "🇫🇮" },
    { name: "Perkins", logo: "/images/24.png", country: "UK", flag: "🇬🇧" },
    { name: "Cummins", logo: "/images/25.png", country: "USA", flag: "🇺🇸" },
  ]

  const clients = [
    { name: "Jazz", logo: "/images/1.png" },
    { name: "Telenor", logo: "/images/2.png" },
    { name: "Zong 4G", logo: "/images/3.png" },
    { name: "Ufone", logo: "/images/4.png" },
    { name: "PTCL", logo: "/images/5.png" },
    { name: "Nokia", logo: "/images/6.png" },
    { name: "Engro Enfrashare", logo: "/images/7.png" },
    { name: "Huawei", logo: "/images/8.png" },
    { name: "ZTE", logo: "/images/9.png" },
    { name: "PMU - Govt of Punjab", logo: "/images/10.png" },
    { name: "Wateen", logo: "/images/11.png" },
    { name: "EDOTCO", logo: "/images/12.png" },
    { name: "TAWAL", logo: "/images/13.png" },
    { name: "Gourmet Foods", logo: "/images/14.png" },
    { name: "Olympia", logo: "/images/15.png" },
    { name: "University of Lahore", logo: "/images/17.png" },
  ]

  const industries = [
    {
      title: "Telecommunications",
      description: "Supporting all major operators with infrastructure and managed services",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      title: "Government & Public Sector",
      description: "Powering critical national infrastructure and public services",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=400&h=300&fit=crop",
    },
    {
      title: "Enterprise & Corporate",
      description: "Enabling business continuity and digital transformation",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      title: "Manufacturing & Industrial",
      description: "Reliable power and infrastructure for production facilities",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Image src="/images/r8.png" alt="" width={600} height={600} className="w-[600px] h-[600px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-red-400">Since 2004</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Powering Pakistan's
              <span className="text-red-500"> Digital Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              For over two decades, HNL has been at the forefront of building and maintaining the critical
              infrastructure that keeps Pakistan connected and powered.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-red-500">20+</div>
                <div className="text-gray-400">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500">16,000+</div>
                <div className="text-gray-400">Sites Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500">2,120+</div>
                <div className="text-gray-400">Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500">144</div>
                <div className="text-gray-400">Offices Nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white text-center">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">30+ Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="font-semibold">8 Workshops</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span className="font-semibold">50%+ Market Share (South)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-6">
                <span className="text-sm font-semibold text-red-600">WHO WE ARE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Pakistan's Premier Infrastructure Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hitech Network Limited (HNL) is Pakistan's leading provider of integrated telecommunications, energy,
                and IT infrastructure solutions. Since 2004, we have been instrumental in building and maintaining the
                critical systems that power Pakistan's digital economy.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From our headquarters in Lahore, we operate across 30+ cities with a team of over 2,120 professionals,
                including 180+ qualified engineers committed to delivering excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">180+ Engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">8 Perkins Workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 NOC Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                  alt="HNL Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">2004</div>
                <div className="text-red-100">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">WHAT WE DO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across infrastructure, energy, IT, and managed services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-red-900/80 group-hover:via-red-900/40 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Integrated Approach */}
      <section className="py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-600/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-400">OUR APPROACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Integrated Approach</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nationwide coverage with centralized excellence and local expertise
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated Circles */}
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/30 animate-spin"
                style={{ animationDuration: "40s" }}
              ></div>
              {/* Middle rotating ring */}
              <div
                className="absolute inset-6 rounded-full border-2 border-dashed border-red-600/50 animate-spin"
                style={{ animationDuration: "30s", animationDirection: "reverse" }}
              ></div>
              {/* Inner ring */}
              <div className="absolute inset-12 rounded-full border-2 border-red-600/70"></div>

              <div className="absolute inset-16 flex items-center justify-center">
                <div className="relative w-full h-full animate-spin" style={{ animationDuration: "180s" }}>
                  <Image src="/images/r8.png" alt="HNL" fill className="object-contain" />
                </div>
              </div>

              {/* Center Stats */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl z-10">
                  <span className="text-2xl font-bold text-gray-900">144</span>
                  <span className="text-xs text-gray-600">OFFICES</span>
                </div>
              </div>

              {/* Floating Labels */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="font-bold">Islamabad</div>
                <div className="text-xs text-gray-500">North Region</div>
              </div>
              <div
                className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg animate-bounce"
                style={{ animationDuration: "3.5s" }}
              >
                <div className="font-bold">Lahore</div>
                <div className="text-xs text-gray-500">Central HQ</div>
              </div>
              <div
                className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="font-bold">Peshawar</div>
                <div className="text-xs text-gray-500">KPK Region</div>
              </div>
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce"
                style={{ animationDuration: "3.2s" }}
              >
                <div className="font-bold">Karachi</div>
                <div className="text-xs text-red-100">South HQ • 50%+ Share</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Minimalist Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Two Decades of Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building Pakistan's critical infrastructure since 2004
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0 group">
                {/* Timeline Line */}
                {index !== timelineItems.length - 1 && (
                  <div className="absolute left-[23px] top-12 w-0.5 h-full bg-gray-200 group-hover:bg-red-200 transition-colors"></div>
                )}

                {/* Year Circle - ALWAYS red background with white text */}
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all z-10">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="bg-gray-50 rounded-xl p-5 group-hover:bg-red-50 group-hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full uppercase">
                        {item.milestone}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="HNL Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-6">
                <span className="text-sm font-semibold text-red-600">OUR PEOPLE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The HNL Team</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our greatest asset is our people. With over 2,120 professionals across Pakistan, including 180+
                qualified engineers, we bring together diverse expertise united by a common purpose.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">2,120+</div>
                  <div className="text-gray-600">Total Workforce</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">180+</div>
                  <div className="text-gray-600">Engineers</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">144</div>
                  <div className="text-gray-600">Office Locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">30+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Fixed hover issue */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">OUR VALUES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Guiding Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that guide every interaction, decision, and delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-100 rounded-xl p-5 text-center hover:border-red-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all">
                  <value.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Separate Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">INDUSTRIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across Pakistan's key economic sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-200 text-sm">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Choose HNL - Separate Section */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-600/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-400">WHY HNL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Organizations Choose HNL</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The competitive advantages that set us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyHNL.map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-red-900/90 group-hover:via-red-900/60 transition-all"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnerships - With flags and handshakes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">GLOBAL PARTNERSHIPS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Joint Ventures with Global Leaders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with world-renowned infrastructure industry leaders, boosting client confidence and
              ensuring world-class solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Perkins Engines</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium diesel engines & genuine parts</li>
                <li>• Authorized distributor in Pakistan</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">AGG Power Solutions Networks</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete diesel generator solutions</li>
                <li>• DC power systems & battery solutions</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
                  alt="Switzerland"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Centiel</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Uninterruptible power supplies (UPS)</li>
                <li>• Mission-critical power protection</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
                  alt="China"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Huawei & Sorotec Partnership</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HVAC & containment cooling systems</li>
                <li>• LT distribution panels & HVDC solutions</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
                  alt="China"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">HAIWU Precision Cooling</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Precision air conditioning for data centers</li>
                <li>• Imported & local containment solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valuable Clients - 8 per row desktop, 4 on mobile, rounded square */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">TRUSTED BY LEADERS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Valuable Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with Pakistan's most prominent organizations across telecom, government, and enterprise sectors
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="aspect-square bg-white border-2 border-gray-100 rounded-2xl p-4 hover:border-red-600 hover:shadow-lg transition-all flex items-center justify-center"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Image src="/images/r8.png" alt="" width={500} height={500} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-red-600/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-red-400">LOOKING AHEAD</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Pakistan's Tomorrow</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              As we look to the future, HNL remains committed to driving Pakistan's digital transformation through
              innovative solutions, sustainable practices, and unwavering dedication to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">2025</div>
                <div className="text-gray-400">Vision Year</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">AI</div>
                <div className="text-gray-400">Driven Operations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">Green</div>
                <div className="text-gray-400">Energy Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
