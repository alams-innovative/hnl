"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Phone, Cloud, Shield, Clock, MessageCircle, Lock, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "50+", label: "Migrations Completed", icon: Cloud },
  { value: "0", label: "Data Loss Incidents", icon: Shield },
  { value: "40%", label: "Cost Reduction", icon: TrendingUp },
  { value: "24/7", label: "Migration Support", icon: Clock },
]

const cloudPlatforms = [
  {
    id: "aws",
    name: "AWS",
    fullName: "Amazon Web Services",
    description: "Best for startups, scalable workloads, and global reach with 200+ services",
    strengths: [
      "Largest service catalog (200+ services)",
      "Global infrastructure (30+ regions)",
      "Strong startup ecosystem",
      "Market leader in IaaS",
    ],
    bestFor: ["Startups and scale-ups", "Global applications", "AI/ML workloads", "Serverless architectures"],
    services: ["EC2", "S3", "RDS", "Lambda", "EKS"],
    logo: "/aws-logo-orange.jpg",
  },
  {
    id: "azure",
    name: "Azure",
    fullName: "Microsoft Azure",
    description: "Ideal for Microsoft-heavy environments with seamless Office 365 and Active Directory integration",
    strengths: [
      "Seamless Microsoft integration",
      "Hybrid cloud leader",
      "Strong enterprise security",
      "Comprehensive compliance",
    ],
    bestFor: ["Microsoft shops", "Hybrid cloud", "Enterprise workloads", "Government sector"],
    services: ["VMs", "Blob Storage", "SQL Database", "Functions", "AKS"],
    logo: "/microsoft-azure-logo-blue.jpg",
  },
  {
    id: "gcp",
    name: "GCP",
    fullName: "Google Cloud Platform",
    description: "Superior for data analytics, AI/ML, and Kubernetes-native applications",
    strengths: [
      "Best-in-class data analytics",
      "Leading AI/ML platform",
      "Kubernetes originator",
      "Competitive pricing",
    ],
    bestFor: ["Data-driven companies", "AI/ML projects", "Kubernetes workloads", "Analytics pipelines"],
    services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Run", "GKE"],
    logo: "/images/partners/google-cloud-logo.png",
  },
]

const migrationStrategies = [
  {
    name: "Rehost (Lift & Shift)",
    description: "Move applications as-is to cloud infrastructure with minimal changes",
    timeline: "2-4 weeks per app",
    costSavings: "20-30%",
    complexity: "Low",
    bestFor: "Legacy apps, quick wins, compliance-driven moves",
  },
  {
    name: "Replatform",
    description: "Make targeted optimizations during migration (e.g., managed database)",
    timeline: "4-8 weeks per app",
    costSavings: "30-50%",
    complexity: "Medium",
    bestFor: "Apps needing minor modernization",
  },
  {
    name: "Refactor",
    description: "Re-architect applications to be cloud-native with microservices",
    timeline: "2-6 months per app",
    costSavings: "50-70%",
    complexity: "High",
    bestFor: "Strategic apps, long-term investment",
  },
]

const migrationProcess = [
  {
    phase: "Discovery",
    duration: "1-2 weeks",
    activities: [
      "Infrastructure audit and inventory",
      "Application dependency mapping",
      "Performance baseline capture",
      "Compliance and security review",
    ],
    deliverables: "Migration assessment report, TCO analysis",
  },
  {
    phase: "Planning",
    duration: "2-3 weeks",
    activities: [
      "Cloud architecture design",
      "Migration wave planning",
      "Risk mitigation strategy",
      "Resource and timeline planning",
    ],
    deliverables: "Migration roadmap, architecture diagrams",
  },
  {
    phase: "Pilot",
    duration: "2-4 weeks",
    activities: ["Non-critical workload migration", "Validation and testing", "Process refinement", "Team training"],
    deliverables: "Validated migration playbook",
  },
  {
    phase: "Migration",
    duration: "4-12 weeks",
    activities: ["Phased workload migration", "Data synchronization", "Cutover execution", "Go-live support"],
    deliverables: "Migrated infrastructure, runbooks",
  },
  {
    phase: "Optimization",
    duration: "Ongoing",
    activities: [
      "Cost optimization (rightsizing)",
      "Performance tuning",
      "Security hardening",
      "Automation implementation",
    ],
    deliverables: "Optimized cloud environment, FinOps reports",
  },
]

const complianceFrameworks = [
  { name: "ISO 27001", description: "Information security management" },
  { name: "SOC 2", description: "Service organization controls" },
  { name: "PCI DSS", description: "Payment card security" },
  { name: "HIPAA", description: "Healthcare data protection" },
  { name: "GDPR", description: "Data privacy compliance" },
  { name: "Local Data Residency", description: "Pakistan data sovereignty" },
]

const faqs = [
  {
    question: "How long does a typical cloud migration take?",
    answer:
      "Timeline depends on complexity. Small workloads (5-10 servers) take 4-6 weeks. Medium environments (20-50 servers) take 2-3 months. Large enterprise migrations (100+ servers) can take 6-12 months. We provide detailed timelines after the assessment phase.",
  },
  {
    question: "Will there be downtime during migration?",
    answer:
      "We use zero-downtime strategies wherever possible: blue-green deployments, database replication, and phased cutovers. Critical systems are migrated during planned maintenance windows with rollback capabilities.",
  },
  {
    question: "How do you ensure data security during migration?",
    answer:
      "All data transfers use encrypted VPN tunnels and TLS 1.3. We conduct pre-migration security audits, implement IAM policies, and maintain full audit trails. Data is encrypted at rest and in transit throughout the process.",
  },
  {
    question: "Can you migrate legacy applications that are 10+ years old?",
    answer:
      "Yes. We've migrated legacy systems running on Windows Server 2008, Oracle 11g, and custom applications. Options include lift-and-shift to IaaS, containerization, or phased modernization depending on your roadmap.",
  },
  {
    question: "What happens to our on-premises licenses?",
    answer:
      "We help you optimize licensing: bring existing licenses to cloud (BYOL), convert to cloud-native licensing, or leverage hybrid use benefits. We conduct a license audit as part of the assessment.",
  },
  {
    question: "Do you provide post-migration support?",
    answer:
      "Yes. We offer managed cloud services including 24/7 monitoring, incident response, cost optimization, and ongoing optimization. Support contracts range from basic helpdesk to full managed services.",
  },
  {
    question: "What if we need to keep some workloads on-premises?",
    answer:
      "Hybrid cloud is our specialty. We design architectures with secure connectivity (VPN/ExpressRoute/Direct Connect) between on-premises and cloud, with unified management and security policies.",
  },
  {
    question: "How do you handle compliance requirements?",
    answer:
      "We design cloud architectures that meet your compliance needs: ISO 27001, PCI DSS, HIPAA, local data residency laws. We implement required controls and provide compliance documentation.",
  },
]

export default function CloudMigrationPage() {
  const [activeTab, setActiveTab] = useState("aws")
  const [estimatorValues, setEstimatorValues] = useState({
    servers: 20,
    storage: "500",
    platform: "aws",
    strategy: "replatform",
    support: "managed",
  })

  const calculateEstimate = () => {
    const basePerServer = 150000 // PKR per server
    const servers = estimatorValues.servers

    const storageMultipliers: Record<string, number> = {
      "100": 0.8,
      "500": 1.0,
      "1000": 1.2,
      "5000": 1.5,
      "10000": 2.0,
    }
    const strategyMultipliers: Record<string, number> = { rehost: 0.7, replatform: 1.0, refactor: 2.0 }
    const supportMultipliers: Record<string, number> = { basic: 1.0, managed: 1.3, premium: 1.6 }

    const storageMult = storageMultipliers[estimatorValues.storage] || 1
    const strategyMult = strategyMultipliers[estimatorValues.strategy] || 1
    const supportMult = supportMultipliers[estimatorValues.support] || 1

    // Volume discount
    let volumeDiscount = 1.0
    if (servers > 100) volumeDiscount = 0.7
    else if (servers > 50) volumeDiscount = 0.8
    else if (servers > 20) volumeDiscount = 0.9

    const total = basePerServer * servers * storageMult * strategyMult * supportMult * volumeDiscount
    return {
      low: Math.round(total * 0.85),
      high: Math.round(total * 1.15),
      monthly: Math.round((total * 0.15) / 12), // Estimated monthly cloud cost
    }
  }

  const estimate = calculateEstimate()

  const generateWhatsAppMessage = () => {
    const message = `Hi, I'm interested in Cloud Migration services.

My requirements:
- Servers: ${estimatorValues.servers}
- Storage: ${estimatorValues.storage} GB
- Platform: ${estimatorValues.platform.toUpperCase()}
- Strategy: ${estimatorValues.strategy}
- Support: ${estimatorValues.support}

Estimated budget: PKR ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}

Please contact me for a detailed assessment.`
    return `https://wa.me/923000000000?text=${encodeURIComponent(message)}`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cloud-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cloud-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Cloud className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Software, Cloud & AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cloud Migration<span className="text-red-500"> Services</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Migrate your workloads to AWS, Azure, or Google Cloud with zero downtime. Expert assessment, secure
              migration, and 40% average cost reduction for Pakistani enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Migration Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to Cloud Architect
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 mb-3">
                    <stat.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Hook */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
                <Image
                  src="/cloud-computing-data-center-servers-modern.jpg"
                  alt="Cloud Migration Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">Zero</div>
                    <div className="text-sm text-zinc-500">Data Loss Incidents</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">40%</div>
                    <div className="text-sm text-zinc-500">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why Migrate to the Cloud?</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Pakistani enterprises are moving to the cloud to reduce infrastructure costs, improve scalability, and
                accelerate innovation. HNL has migrated 50+ organizations with zero data loss and average 40% cost
                reduction.
              </p>
              <div className="space-y-4">
                {[
                  "Reduce capital expenditure by 60-80%",
                  "Scale instantly during peak demand",
                  "Access global infrastructure in minutes",
                  "Improve disaster recovery and business continuity",
                  "Enable remote work and collaboration",
                  "Accelerate time-to-market for new products",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-zinc-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Choose Your Cloud Platform</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We help you select the right platform based on your workloads, budget, and technical requirements
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {cloudPlatforms.map((platform) => (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="py-4 px-6 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">{platform.name}</div>
                    <div className="text-xs opacity-80">{platform.fullName}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {cloudPlatforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id}>
                <Card className="border-2 border-zinc-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{platform.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{platform.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Key Strengths</h4>
                          <div className="space-y-2">
                            {platform.strengths.map((strength, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{strength}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {platform.services.map((service, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-zinc-700">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="bg-zinc-50 rounded-xl p-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Best For</h4>
                          <ul className="space-y-2 mb-6">
                            {platform.bestFor.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Migration Strategies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Migration Strategies</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We recommend the right approach based on your application portfolio and business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {migrationStrategies.map((strategy, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{strategy.name}</h3>
                  <p className="text-zinc-600 mb-4 text-sm">{strategy.description}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Timeline:</span>
                      <span className="font-medium text-zinc-900">{strategy.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Cost Savings:</span>
                      <span className="font-medium text-green-600">{strategy.costSavings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Complexity:</span>
                      <span className="font-medium text-zinc-900">{strategy.complexity}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100">
                    <p className="text-xs text-zinc-500">
                      <strong>Best for:</strong> {strategy.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Timeline */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Migration Process</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A proven 5-phase methodology that ensures secure, successful cloud migrations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-red-600/50 transform md:-translate-x-1/2"></div>

              {migrationProcess.map((phase, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 border-4 border-black"></div>

                  <div className={`md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                      <div className="flex items-center gap-3 mb-3 justify-start md:justify-end">
                        <span className="text-red-500 font-bold">Phase {idx + 1}</span>
                        <span className="text-zinc-500">|</span>
                        <span className="text-zinc-400">{phase.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{phase.phase}</h3>
                      <ul className="space-y-2 mb-4">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-red-500 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-zinc-500 pt-3 border-t border-zinc-800">
                        <strong>Deliverables:</strong> {phase.deliverables}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Cost Estimator */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Migration Cost Estimator</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Get an instant estimate for your cloud migration project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-600/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Number of Servers/VMs: {estimatorValues.servers}
                      </Label>
                      <Slider
                        value={[estimatorValues.servers]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, servers: v[0] })}
                        min={1}
                        max={200}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>1</span>
                        <span>200</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Total Storage (GB)</Label>
                      <Select
                        value={estimatorValues.storage}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, storage: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">Up to 100 GB</SelectItem>
                          <SelectItem value="500">100-500 GB</SelectItem>
                          <SelectItem value="1000">500 GB - 1 TB</SelectItem>
                          <SelectItem value="5000">1-5 TB</SelectItem>
                          <SelectItem value="10000">5+ TB</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Cloud Platform</Label>
                      <Select
                        value={estimatorValues.platform}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, platform: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aws">Amazon Web Services (AWS)</SelectItem>
                          <SelectItem value="azure">Microsoft Azure</SelectItem>
                          <SelectItem value="gcp">Google Cloud Platform</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Migration Strategy</Label>
                      <Select
                        value={estimatorValues.strategy}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, strategy: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rehost">Rehost (Lift & Shift)</SelectItem>
                          <SelectItem value="replatform">Replatform (Optimize)</SelectItem>
                          <SelectItem value="refactor">Refactor (Cloud-Native)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Post-Migration Support</Label>
                      <Select
                        value={estimatorValues.support}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, support: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic (Helpdesk)</SelectItem>
                          <SelectItem value="managed">Managed (24/7 Monitoring)</SelectItem>
                          <SelectItem value="premium">Premium (Full Managed)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-zinc-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-zinc-900 mb-4">Your Estimate</h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Migration Project Cost</div>
                        <div className="text-2xl font-bold text-zinc-900">
                          {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Est. Monthly Cloud Cost</div>
                        <div className="text-xl font-bold text-red-600">{formatCurrency(estimate.monthly)}/mo</div>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-500 mb-6">
                      *Estimates are indicative. Final pricing based on detailed assessment.
                    </div>

                    <div className="space-y-3">
                      <Link href={generateWhatsAppMessage()} target="_blank">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Share on WhatsApp
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full bg-transparent">
                          <Phone className="w-4 h-4 mr-2" />
                          Talk to Expert
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Compliance & Security</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We design cloud architectures that meet your regulatory and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {complianceFrameworks.map((framework, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-4 text-center hover:bg-zinc-100 transition-colors">
                <Lock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-zinc-900 text-sm">{framework.name}</div>
                <div className="text-xs text-zinc-500">{framework.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Migrate to the Cloud?</h2>
                <p className="text-neutral-300 mb-6">
                  Get a free migration assessment from our cloud architects. We'll analyze your infrastructure,
                  recommend the right platform, and provide a detailed migration roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Free Assessment
                    </Button>
                  </Link>
                  <Link href="tel:+924235761999">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-6 py-3 bg-transparent"
                    >
                      Call: +92 42 3576 1999
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">50+</div>
                  <div className="text-neutral-300 text-sm">Migrations Done</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">0</div>
                  <div className="text-neutral-300 text-sm">Data Loss</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">40%</div>
                  <div className="text-neutral-300 text-sm">Cost Savings</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">24/7</div>
                  <div className="text-neutral-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Cloud Migration Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-50 rounded-lg border border-zinc-200 px-6">
                <AccordionTrigger className="text-left font-semibold text-neutral-900 hover:text-red-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
