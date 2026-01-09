"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Network,
  Shield,
  Wifi,
  Server,
  Clock,
  MessageCircle,
  Lock,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "100+", label: "Network Deployments", icon: Network },
  { value: "99.9%", label: "Network Uptime", icon: Clock },
  { value: "24/7", label: "NOC Support", icon: Shield },
  { value: "10+", label: "Years Experience", icon: Server },
]

const services = [
  {
    id: "lan-wan",
    name: "LAN/WAN Design",
    icon: Network,
    description: "Design and deploy enterprise-grade local and wide-area networks with high availability",
    features: [
      "Redundant network topology design",
      "QoS for voice, video, and data",
      "VLAN segmentation and security",
      "SD-WAN implementation",
    ],
    technologies: ["Cisco", "Juniper", "HPE Aruba", "Fortinet"],
    useCases: ["Head office connectivity", "Multi-branch networks", "Data center interconnect", "Hybrid cloud"],
  },
  {
    id: "wifi",
    name: "WiFi & Wireless",
    icon: Wifi,
    description: "Deploy enterprise WiFi networks with seamless roaming and high-density support",
    features: [
      "High-density WiFi 6/6E deployment",
      "Seamless roaming across campus",
      "Captive portal for guest access",
      "Location analytics and heat mapping",
    ],
    technologies: ["Cisco Meraki", "Aruba", "Ubiquiti", "Ruckus"],
    useCases: ["Corporate offices", "Warehouses", "Retail stores", "Educational campuses"],
  },
  {
    id: "datacenter",
    name: "Data Center",
    icon: Server,
    description: "Build on-premises data centers with enterprise-grade infrastructure",
    features: [
      "Tier 2/3 data center design",
      "Precision cooling systems",
      "Redundant power with UPS/genset",
      "Fire suppression and access control",
    ],
    technologies: ["HPE", "Dell EMC", "Schneider", "APC"],
    useCases: ["Private cloud", "DR site", "Edge computing", "Colocation"],
  },
  {
    id: "security",
    name: "Network Security",
    icon: Shield,
    description: "Implement comprehensive network security with zero-trust architecture",
    features: [
      "Next-gen firewalls (NGFW)",
      "Intrusion detection/prevention (IDS/IPS)",
      "VPN for remote access",
      "Network segmentation and micro-segmentation",
    ],
    technologies: ["Palo Alto", "Fortinet", "Cisco", "Check Point"],
    useCases: ["Perimeter security", "Branch security", "Remote workforce", "Compliance"],
  },
]

const implementationProcess = [
  {
    phase: "Site Survey",
    duration: "1-2 weeks",
    activities: [
      "Physical site assessment",
      "Existing infrastructure audit",
      "Requirements gathering",
      "Environmental assessment",
    ],
    deliverables: "Site survey report, requirements document",
  },
  {
    phase: "Design",
    duration: "2-4 weeks",
    activities: [
      "Network architecture design",
      "Equipment selection and BOM",
      "Cable routing plans",
      "Security architecture",
    ],
    deliverables: "HLD/LLD documents, BOQ",
  },
  {
    phase: "Procurement",
    duration: "2-6 weeks",
    activities: ["Equipment ordering", "Staging and pre-configuration", "License procurement", "Cabling materials"],
    deliverables: "Staged equipment, configurations",
  },
  {
    phase: "Implementation",
    duration: "4-12 weeks",
    activities: [
      "Structured cabling installation",
      "Equipment rack and stack",
      "Configuration and testing",
      "Integration with existing systems",
    ],
    deliverables: "Installed infrastructure, test results",
  },
  {
    phase: "Handover",
    duration: "1-2 weeks",
    activities: ["As-built documentation", "Admin and user training", "Support transition", "Warranty activation"],
    deliverables: "Documentation, trained team, support contract",
  },
]

const structuredCabling = [
  { type: "Cat6/Cat6A", speed: "1-10 Gbps", distance: "100m", use: "Office LAN" },
  { type: "Cat7/Cat8", speed: "10-40 Gbps", distance: "30-100m", use: "Data centers" },
  { type: "Single-mode Fiber", speed: "100+ Gbps", distance: "Up to 80km", use: "Building interconnect" },
  { type: "Multi-mode Fiber", speed: "10-100 Gbps", distance: "Up to 550m", use: "Data center backbone" },
]

const faqs = [
  {
    question: "What does ICT infrastructure include?",
    answer:
      "ICT infrastructure includes: network design (LAN/WAN), structured cabling (copper and fiber), WiFi deployment, data center setup (racks, cooling, power), network security (firewalls, VPN), and ongoing management. We provide end-to-end design, deployment, and support.",
  },
  {
    question: "Can you upgrade our existing network without downtime?",
    answer:
      "Yes. We plan upgrades in phases with parallel infrastructure where possible. Critical systems are migrated during planned maintenance windows. We've completed 100+ network upgrades with minimal business disruption.",
  },
  {
    question: "Which network vendors do you work with?",
    answer:
      "We're vendor-agnostic: Cisco, Juniper, HPE Aruba, Fortinet, Palo Alto, Ubiquiti, and others. We recommend based on your requirements, budget, and existing investments. We also support multi-vendor environments.",
  },
  {
    question: "Do you provide structured cabling services?",
    answer:
      "Yes. We design and install structured cabling systems: Cat6/Cat6A/Cat7 copper, single-mode and multi-mode fiber, cable management, and testing/certification. We follow TIA/EIA standards and provide 20+ year warranties.",
  },
  {
    question: "What certifications do your engineers have?",
    answer:
      "Our team holds: CCNA/CCNP/CCIE (Cisco), JNCIA/JNCIS (Juniper), NSE4-7 (Fortinet), PCNSA/PCNSE (Palo Alto), and vendor-specific WiFi certifications. All installations are done by certified professionals.",
  },
  {
    question: "Do you offer ongoing network support?",
    answer:
      "Yes. We offer managed network services: 24/7 NOC monitoring, proactive maintenance, firmware updates, configuration management, incident response, and quarterly health checks. SLAs from 4-hour to next-business-day response.",
  },
  {
    question: "How do you handle network security?",
    answer:
      "We implement defense-in-depth: perimeter firewalls, network segmentation, intrusion prevention, endpoint security, VPN for remote access, and security monitoring. We design to meet compliance requirements (PCI-DSS, ISO 27001).",
  },
  {
    question: "Can you help with WiFi coverage issues?",
    answer:
      "Yes. We conduct WiFi site surveys (predictive and active), identify dead zones and interference, and design high-density deployments. We use WiFi 6/6E for modern requirements and provide ongoing optimization.",
  },
]

export default function ICTInfrastructurePage() {
  const [activeTab, setActiveTab] = useState("lan-wan")
  const [estimatorValues, setEstimatorValues] = useState({
    users: 100,
    locations: "1",
    cabling: "cat6",
    wifi: "yes",
    security: "standard",
    datacenter: "no",
  })

  const calculateEstimate = () => {
    const basePerUser = 15000 // PKR per user for network infrastructure
    const users = estimatorValues.users

    const locationMultipliers: Record<string, number> = { "1": 1.0, "2": 1.3, "5": 1.6, "10": 2.0 }
    const cablingMultipliers: Record<string, number> = { cat6: 1.0, cat6a: 1.2, fiber: 1.5 }
    const wifiMultipliers: Record<string, number> = { no: 0, yes: 0.3 }
    const securityMultipliers: Record<string, number> = { basic: 1.0, standard: 1.3, advanced: 1.8 }
    const datacenterMultipliers: Record<string, number> = { no: 0, small: 0.5, medium: 1.0, large: 2.0 }

    const locMult = locationMultipliers[estimatorValues.locations] || 1
    const cableMult = cablingMultipliers[estimatorValues.cabling] || 1
    const wifiMult = wifiMultipliers[estimatorValues.wifi] || 0
    const secMult = securityMultipliers[estimatorValues.security] || 1
    const dcMult = datacenterMultipliers[estimatorValues.datacenter] || 0

    // Volume discount
    let volumeDiscount = 1.0
    if (users > 500) volumeDiscount = 0.7
    else if (users > 200) volumeDiscount = 0.8
    else if (users > 100) volumeDiscount = 0.9

    const networkCost = basePerUser * users * locMult * cableMult * secMult * volumeDiscount
    const wifiCost = wifiMult * networkCost
    const dcCost = dcMult * 2000000 // Base data center cost
    const totalCost = networkCost + wifiCost + dcCost

    const monthlyCost = totalCost * 0.05 // ~5% for monthly support

    return {
      setup: { low: Math.round(totalCost * 0.85), high: Math.round(totalCost * 1.15) },
      monthly: { low: Math.round(monthlyCost * 0.9), high: Math.round(monthlyCost * 1.1) },
    }
  }

  const estimate = calculateEstimate()

  const generateWhatsAppMessage = () => {
    const message = `Hi, I'm interested in ICT Infrastructure services.

My requirements:
- Users: ${estimatorValues.users}
- Locations: ${estimatorValues.locations}
- Cabling: ${estimatorValues.cabling}
- WiFi: ${estimatorValues.wifi}
- Security: ${estimatorValues.security}
- Data Center: ${estimatorValues.datacenter}

Estimated setup: PKR ${estimate.setup.low.toLocaleString()} - ${estimate.setup.high.toLocaleString()}
Estimated monthly: PKR ${estimate.monthly.low.toLocaleString()} - ${estimate.monthly.high.toLocaleString()}

Please contact me for a site survey.`
    return `https://wa.me/923000000000?text=${encodeURIComponent(message)}`
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ict-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ict-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Network className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Software, Cloud & AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ICT<span className="text-red-500"> Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Design and deploy secure, scalable ICT infrastructure for offices, campuses, and industrial sites.
              End-to-end solutions from network design to data center setup.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Request Site Survey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to Network Engineer
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why Invest in ICT Infrastructure?</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Your network is the backbone of your digital operations. HNL designs and deploys enterprise-grade ICT
                infrastructure that scales with your business and keeps you connected 24/7.
              </p>
              <div className="space-y-4">
                {[
                  "99.9% uptime with redundant network design",
                  "Structured cabling with 20+ year warranty",
                  "Enterprise WiFi with seamless roaming",
                  "Multi-layer security with zero-trust architecture",
                  "24/7 NOC monitoring and incident response",
                  "Vendor-agnostic approach for best value",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-zinc-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
                <Image
                  src="/server-room-network-infrastructure-modern.jpg"
                  alt="Network Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">99.9%</div>
                    <div className="text-sm text-zinc-500">Network Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">ICT Infrastructure Services</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Complete ICT solutions from network design to data center deployment
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm font-medium hidden sm:inline">{service.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-2 border-zinc-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-zinc-900">{service.name}</h3>
                        </div>
                        <p className="text-zinc-600 mb-6">{service.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-zinc-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="bg-zinc-50 rounded-xl p-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Common Use Cases</h4>
                          <ul className="space-y-2">
                            {service.useCases.map((useCase, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                {useCase}
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

      {/* Structured Cabling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Structured Cabling Standards</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">TIA/EIA compliant cabling with 20+ year warranty</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-100">
                    <th className="px-4 py-3 text-left font-semibold text-zinc-900 border border-zinc-200">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-zinc-900 border border-zinc-200">Speed</th>
                    <th className="px-4 py-3 text-left font-semibold text-zinc-900 border border-zinc-200">Distance</th>
                    <th className="px-4 py-3 text-left font-semibold text-zinc-900 border border-zinc-200">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {structuredCabling.map((cable, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 border border-zinc-200 font-medium">{cable.type}</td>
                      <td className="px-4 py-3 border border-zinc-200 text-red-600 font-semibold">{cable.speed}</td>
                      <td className="px-4 py-3 border border-zinc-200">{cable.distance}</td>
                      <td className="px-4 py-3 border border-zinc-200 text-zinc-600">{cable.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A structured approach that delivers reliable infrastructure
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {implementationProcess.map((phase, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 h-full">
                    <div className="text-red-500 font-bold text-sm mb-2">Phase {idx + 1}</div>
                    <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                    <div className="text-xs text-zinc-500 mb-3">{phase.duration}</div>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-xs text-zinc-400 flex items-start gap-1">
                          <span className="text-red-500 mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {idx < implementationProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-red-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ICT Infrastructure Estimator */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">ICT Infrastructure Estimator</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Get an instant estimate for your network infrastructure project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-600/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Number of Users: {estimatorValues.users}</Label>
                      <Slider
                        value={[estimatorValues.users]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, users: v[0] })}
                        min={10}
                        max={1000}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>10</span>
                        <span>1000</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Number of Locations</Label>
                      <Select
                        value={estimatorValues.locations}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, locations: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Single Location</SelectItem>
                          <SelectItem value="2">2-3 Locations</SelectItem>
                          <SelectItem value="5">4-5 Locations</SelectItem>
                          <SelectItem value="10">5+ Locations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Cabling Standard</Label>
                      <Select
                        value={estimatorValues.cabling}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, cabling: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cat6">Cat6 (1 Gbps)</SelectItem>
                          <SelectItem value="cat6a">Cat6A (10 Gbps)</SelectItem>
                          <SelectItem value="fiber">Fiber Optic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Enterprise WiFi</Label>
                      <Select
                        value={estimatorValues.wifi}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, wifi: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">Not Required</SelectItem>
                          <SelectItem value="yes">Yes, WiFi Required</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Security Level</Label>
                      <Select
                        value={estimatorValues.security}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, security: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic (Firewall only)</SelectItem>
                          <SelectItem value="standard">Standard (FW + VPN)</SelectItem>
                          <SelectItem value="advanced">Advanced (Zero Trust)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Data Center / Server Room</Label>
                      <Select
                        value={estimatorValues.datacenter}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, datacenter: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">Not Required</SelectItem>
                          <SelectItem value="small">Small (1-2 Racks)</SelectItem>
                          <SelectItem value="medium">Medium (3-5 Racks)</SelectItem>
                          <SelectItem value="large">Large (5+ Racks)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-zinc-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-zinc-900 mb-4">Your Estimate</h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Setup & Implementation</div>
                        <div className="text-2xl font-bold text-zinc-900">
                          {formatCurrency(estimate.setup.low)} - {formatCurrency(estimate.setup.high)}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Monthly Support</div>
                        <div className="text-xl font-bold text-red-600">
                          {formatCurrency(estimate.monthly.low)} - {formatCurrency(estimate.monthly.high)}/mo
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-500 mb-6">
                      *Estimates are indicative. Final pricing based on site survey.
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
                          Request Site Survey
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

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Certifications & Compliance</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Our engineers hold industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "CCNA/CCNP", vendor: "Cisco" },
              { name: "JNCIA/JNCIS", vendor: "Juniper" },
              { name: "NSE 4-7", vendor: "Fortinet" },
              { name: "PCNSA/PCNSE", vendor: "Palo Alto" },
              { name: "ACSP", vendor: "Aruba" },
              { name: "ISO 27001", vendor: "Compliance" },
            ].map((cert, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-4 text-center hover:bg-zinc-100 transition-colors">
                <Lock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="font-bold text-zinc-900 text-sm">{cert.name}</div>
                <div className="text-xs text-zinc-500">{cert.vendor}</div>
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
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Network?</h2>
                <p className="text-neutral-300 mb-6">
                  Get a free site survey from our network engineers. We'll assess your requirements and provide a
                  detailed proposal with competitive pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                      <Phone className="w-4 h-4 mr-2" />
                      Request Site Survey
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
                  <div className="text-3xl font-bold text-red-500">100+</div>
                  <div className="text-neutral-300 text-sm">Deployments</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">99.9%</div>
                  <div className="text-neutral-300 text-sm">Uptime</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">24/7</div>
                  <div className="text-neutral-300 text-sm">NOC Support</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">10+</div>
                  <div className="text-neutral-300 text-sm">Years Experience</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">ICT Infrastructure Questions</h2>
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
