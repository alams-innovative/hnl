import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Radio, Zap, Cloud, Shield, Settings, FileText, Users, AlertTriangle } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Technical Guides & Documentation | HNL Pakistan",
  description:
    "Comprehensive technical guides, installation manuals, and troubleshooting documentation for telecom, energy, and IT infrastructure in Pakistan.",
  keywords:
    "technical guides pakistan, fiber installation manual, generator installation guide, solar maintenance, network configuration, telecom infrastructure documentation",
}

const guides = [
  {
    category: "Telecom Infrastructure",
    icon: Radio,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    items: [
      {
        slug: "fiber-optic-installation-guide",
        title: "Fiber Optic Installation Guide",
        description:
          "Complete step-by-step guide for underground and aerial fiber deployment with quality standards for Pakistan's telecom infrastructure",
        duration: "45 min read",
        level: "Intermediate",
        chapters: 12,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      },
      {
        slug: "tower-site-survey-checklist",
        title: "Tower Site Survey Checklist",
        description:
          "Comprehensive checklist for telecom tower site assessment covering structural, electrical, and RF requirements",
        duration: "20 min read",
        level: "Beginner",
        chapters: 8,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      },
      {
        slug: "network-integration-best-practices",
        title: "Network Integration Best Practices",
        description:
          "Technical standards for integrating active equipment into existing telecom networks with minimal downtime",
        duration: "35 min read",
        level: "Advanced",
        chapters: 10,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      },
      {
        slug: "noc-monitoring-setup-guide",
        title: "NOC Monitoring Setup Guide",
        description: "How to configure 24/7 network monitoring systems with alarm thresholds and escalation procedures",
        duration: "30 min read",
        level: "Intermediate",
        chapters: 9,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Energy & Power Systems",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    items: [
      {
        slug: "hybrid-power-system-design",
        title: "Hybrid Power System Design",
        description:
          "Engineering guide for designing solar-diesel-battery systems with load calculations and ROI modeling",
        duration: "50 min read",
        level: "Advanced",
        chapters: 14,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      },
      {
        slug: "generator-installation-manual",
        title: "Generator Installation Manual",
        description:
          "Detailed installation procedures for diesel generators including civil works, fuel systems, and commissioning",
        duration: "40 min read",
        level: "Intermediate",
        chapters: 11,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
      },
      {
        slug: "solar-system-maintenance-schedule",
        title: "Solar System Maintenance Schedule",
        description:
          "Preventive maintenance guidelines for commercial solar installations to ensure optimal performance",
        duration: "25 min read",
        level: "Beginner",
        chapters: 7,
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
      },
      {
        slug: "bess-configuration-guide",
        title: "BESS Configuration Guide",
        description:
          "Battery Energy Storage System setup including BMS configuration, charging profiles, and safety protocols",
        duration: "45 min read",
        level: "Advanced",
        chapters: 13,
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Enterprise IT & Cloud",
    icon: Cloud,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    items: [
      {
        slug: "cloud-migration-playbook",
        title: "Cloud Migration Playbook",
        description:
          "Complete framework for migrating enterprise workloads to AWS/Azure with risk mitigation strategies",
        duration: "60 min read",
        level: "Advanced",
        chapters: 15,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      },
      {
        slug: "data-center-colocation-setup",
        title: "Data Center Colocation Setup",
        description: "Technical requirements and procedures for deploying equipment in data centers across Pakistan",
        duration: "30 min read",
        level: "Intermediate",
        chapters: 8,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      },
      {
        slug: "backup-dr-planning-guide",
        title: "Backup & DR Planning Guide",
        description:
          "Best practices for implementing enterprise backup solutions with disaster recovery testing procedures",
        duration: "40 min read",
        level: "Intermediate",
        chapters: 10,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      },
      {
        slug: "network-security-hardening",
        title: "Network Security Hardening",
        description:
          "Step-by-step guide for securing enterprise networks with firewall rules, VPNs, and access controls",
        duration: "55 min read",
        level: "Advanced",
        chapters: 12,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    category: "Safety & Compliance",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    items: [
      {
        slug: "site-safety-procedures",
        title: "Site Safety Procedures",
        description:
          "Comprehensive safety protocols for telecom and energy installation sites including PPE and hazard management",
        duration: "35 min read",
        level: "Beginner",
        chapters: 9,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      },
      {
        slug: "quality-assurance-checklist",
        title: "Quality Assurance Checklist",
        description: "QA procedures and acceptance criteria for all types of infrastructure deployments",
        duration: "25 min read",
        level: "Intermediate",
        chapters: 7,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      },
      {
        slug: "environmental-compliance-guide",
        title: "Environmental Compliance Guide",
        description:
          "Regulatory requirements and best practices for environmentally responsible infrastructure projects in Pakistan",
        duration: "40 min read",
        level: "Intermediate",
        chapters: 10,
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      },
    ],
  },
]

const levelColors = {
  Beginner: "bg-green-100 text-green-800 border-green-300",
  Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-300",
  Advanced: "bg-red-100 text-red-800 border-red-300",
}

export default function TechnicalGuidesPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Resources", item: "/resources" },
    { name: "Technical Guides", item: "/resources/technical-guides" },
  ]

  const totalGuides = guides.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl">
              <Badge className="bg-red-600 text-white mb-6">Technical Documentation</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Technical Guides & Documentation</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive installation manuals, configuration guides, and operational best practices for telecom,
                energy, and IT infrastructure deployment across Pakistan. Written by field engineers with decades of
                hands-on experience.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
                <div>
                  <p className="text-3xl font-bold text-red-500">{totalGuides}</p>
                  <p className="text-gray-400">Technical Guides</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500">4</p>
                  <p className="text-gray-400">Categories</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500">500+</p>
                  <p className="text-gray-400">Checklists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500">20+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">Important Disclaimer</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  These technical guides represent industry best practices and general procedures. Actual engineering
                  protocols, SOPs, and implementation methods are determined by mutual understanding between HNL and the
                  client based on project-specific requirements, site conditions, regulatory compliance, and contractual
                  terms of engagement. Always consult with the assigned engineering team before implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guides by Category */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            {guides.map((category, idx) => (
              <div key={category.category} className={idx > 0 ? "mt-24" : ""}>
                <div className={`flex items-center gap-4 mb-10 pb-6 border-b-2 border-gray-200`}>
                  <div className={`p-4 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{category.category}</h2>
                    <p className="text-gray-600">{category.items.length} comprehensive guides</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((guide) => (
                    <Link key={guide.slug} href={`/resources/technical-guides/${guide.slug}`} className="group">
                      <Card className="h-full hover:shadow-xl hover:border-red-500 transition-all duration-300 overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={guide.image || "/placeholder.svg"}
                            alt={guide.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <Badge
                            className={`absolute bottom-4 left-4 ${levelColors[guide.level as keyof typeof levelColors]}`}
                          >
                            {guide.level}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                            {guide.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {guide.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                {guide.chapters} chapters
                              </span>
                            </div>
                            <span className="text-red-600 font-medium group-hover:translate-x-1 transition-transform">
                              Read Guide →
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Uses These Guides */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Who Uses These Guides</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Field Engineers", desc: "Step-by-step installation and maintenance procedures" },
                { icon: Settings, title: "Operations Teams", desc: "Daily operational checklists and troubleshooting" },
                { icon: Shield, title: "Quality Managers", desc: "QA/QC standards and acceptance criteria" },
                { icon: BookOpen, title: "Training Staff", desc: "Structured learning materials for new hires" },
              ].map((item) => (
                <Card key={item.title} className="text-center p-6">
                  <item.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Custom Technical Documentation?</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our engineering team can provide customized documentation, on-site training, and technical consulting
                tailored to your specific project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Contact Technical Team
                  </Button>
                </Link>
                <Link href="/contact/inquiry">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Request Training
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
