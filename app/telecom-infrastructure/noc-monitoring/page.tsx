"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceEstimator } from "@/components/service-estimator"
import { FAQSection } from "@/components/faq-section"
import { formatCurrency } from "@/lib/format-currency"
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Monitor,
  Clock,
  Award,
  Target,
  Bell,
  Activity,
  BarChart3,
  Shield,
  Zap,
  Eye,
} from "lucide-react"

const stats = [
  { value: "24/7", label: "Operations", icon: Clock },
  { value: "3,000+", label: "Elements Monitored", icon: Monitor },
  { value: "15 min", label: "MTTA", icon: Target },
  { value: "99.9%", label: "Monitoring Uptime", icon: Award },
]

const monitoringServices = [
  {
    id: "network",
    name: "Network",
    fullName: "Network Monitoring",
    description: "Real-time monitoring of radio, transmission, and core network elements",
    features: ["BTS/eNodeB monitoring", "Transmission links", "Core elements", "KPI dashboards"],
    coverage: ["2G/3G/4G/5G radio", "Microwave/Fiber TX", "Switches/Routers", "Core network"],
    image: "/noc-network-monitoring-screens.jpg",
  },
  {
    id: "power",
    name: "Power",
    fullName: "Power Systems Monitoring",
    description: "Remote monitoring of site power including grid, generators, and batteries",
    features: ["Mains monitoring", "Generator status", "Battery health", "Fuel levels"],
    coverage: ["AC/DC systems", "Rectifiers", "Batteries", "DG sets"],
    image: "/power-systems-monitoring-dashboard.jpg",
  },
  {
    id: "security",
    name: "Security",
    fullName: "Physical Security Monitoring",
    description: "CCTV, access control, and intrusion detection monitoring",
    features: ["CCTV surveillance", "Door sensors", "Motion detection", "Access logs"],
    coverage: ["Video analytics", "Alarm correlation", "Incident response", "Guard dispatch"],
    image: "/security-monitoring-cctv-dashboard.jpg",
  },
  {
    id: "environmental",
    name: "Environmental",
    fullName: "Environmental Monitoring",
    description: "Temperature, humidity, and environmental condition monitoring",
    features: ["Temperature alerts", "Humidity tracking", "Smoke detection", "Flood sensors"],
    coverage: ["Equipment rooms", "Data centers", "Shelters", "Outdoor cabinets"],
    image: "/environmental-monitoring-sensors.jpg",
  },
]

const nocCapabilities = [
  {
    capability: "Alarm Correlation",
    description: "Intelligent root cause analysis to suppress redundant alarms",
    icon: Activity,
  },
  { capability: "Automated Ticketing", description: "Auto-generated tickets with dispatch to field teams", icon: Bell },
  {
    capability: "Real-Time Dashboards",
    description: "Live KPI visualization and network health views",
    icon: BarChart3,
  },
  { capability: "Escalation Management", description: "Multi-tier escalation with SLA tracking", icon: Shield },
  { capability: "Predictive Analytics", description: "AI-powered fault prediction and trending", icon: Eye },
  { capability: "Integration Hub", description: "Multi-vendor NMS integration capability", icon: Zap },
]

const integrations = [
  { vendor: "Huawei", system: "U2000/iManager", status: "Certified" },
  { vendor: "Nokia", system: "NetAct", status: "Certified" },
  { vendor: "Ericsson", system: "OSS-RC", status: "Certified" },
  { vendor: "ZTE", system: "ZXONE", status: "Certified" },
  { vendor: "Generic", system: "SNMP/TR-069", status: "Supported" },
]

const responseMetrics = [
  { metric: "Mean Time to Acknowledge", target: "< 15 min", achieved: "8 min avg" },
  { metric: "Mean Time to Dispatch", target: "< 30 min", achieved: "18 min avg" },
  { metric: "Alarm Processing Rate", target: "> 99%", achieved: "99.8%" },
  { metric: "False Alarm Suppression", target: "> 90%", achieved: "94%" },
  { metric: "Monitoring Uptime", target: "> 99.5%", achieved: "99.9%" },
  { metric: "Report Accuracy", target: "> 98%", achieved: "99.5%" },
]

const reportingPackages = [
  {
    name: "Daily Report",
    contents: ["Alarm summary", "Critical incidents", "Pending tickets", "Network status"],
    format: "Email/Portal",
  },
  {
    name: "Weekly Report",
    contents: ["KPI trends", "SLA compliance", "Top offenders", "Action items"],
    format: "PDF/Excel",
  },
  {
    name: "Monthly Report",
    contents: ["Performance analysis", "Availability stats", "Improvement plans", "Executive summary"],
    format: "Presentation",
  },
]

const faqs = [
  {
    question: "What network management systems can HNL NOC integrate with?",
    answer:
      "HNL NOC integrates with all major vendor NMS platforms: Huawei U2000/iManager, Nokia NetAct, Ericsson OSS-RC, and ZTE ZXONE. We also support generic SNMP and TR-069 integration for third-party equipment. Custom API integrations are available.",
  },
  {
    question: "How does alarm correlation work?",
    answer:
      "Our NOC uses intelligent correlation rules to identify root causes and suppress cascading alarms. For example, a single power failure generates one ticket rather than dozens of downstream radio alarms. This improves MTTA by 60% and reduces field team visits.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "Comprehensive reporting includes: Daily alarm summaries via email, weekly KPI reports with trend analysis, monthly performance reports with SLA metrics, and custom dashboards via web portal. All reports can be customized to client requirements.",
  },
  {
    question: "Can your NOC dispatch our field teams?",
    answer:
      "Yes, our NOC integrates with client ticketing systems (ServiceNow, JIRA, etc.) or uses our own dispatch platform. We can dispatch to HNL field teams, client teams, or third-party contractors based on escalation rules.",
  },
  {
    question: "What is your monitoring uptime guarantee?",
    answer:
      "HNL NOC guarantees 99.9% monitoring uptime through redundant systems, backup power, and disaster recovery capabilities. Our primary NOC in Karachi is backed by a DR site with automatic failover.",
  },
  {
    question: "Do you support security and environmental monitoring?",
    answer:
      "Yes, beyond network monitoring we provide: CCTV surveillance with video analytics, access control monitoring, intrusion detection, and environmental sensors (temperature, humidity, smoke, flood). All integrated into unified dashboards.",
  },
  {
    question: "How quickly do you acknowledge alarms?",
    answer:
      "Critical alarms are acknowledged within 5 minutes, with average MTTA of 8 minutes across all alarm types. Our target is 15 minutes for 99% of alarms. Automated correlation and prioritization enable rapid response.",
  },
  {
    question: "Can we access dashboards directly?",
    answer:
      "Yes, clients receive secure web portal access with real-time dashboards showing network status, active alarms, ticket status, KPI graphs, and historical reports. Mobile app access is also available for key stakeholders.",
  },
]

const estimatorFields = [
  {
    id: "monitoringScope",
    label: "Monitoring Scope",
    type: "select" as const,
    options: [
      { value: "network", label: "Network Only", multiplier: 1.0 },
      { value: "network-power", label: "Network + Power", multiplier: 1.4 },
      { value: "full", label: "Full (Network+Power+Security)", multiplier: 1.8 },
    ],
    defaultValue: "network-power",
  },
  {
    id: "elementCount",
    label: "Network Elements",
    type: "slider" as const,
    min: 100,
    max: 5000,
    step: 100,
    unit: "elements",
    defaultValue: 500,
  },
  {
    id: "slaLevel",
    label: "SLA Level",
    type: "select" as const,
    options: [
      { value: "standard", label: "Standard (15 min MTTA)", multiplier: 1.0 },
      { value: "premium", label: "Premium (10 min MTTA)", multiplier: 1.3 },
      { value: "critical", label: "Critical (5 min MTTA)", multiplier: 1.6 },
    ],
    defaultValue: "standard",
  },
  {
    id: "reporting",
    label: "Reporting Level",
    type: "select" as const,
    options: [
      { value: "basic", label: "Basic (Daily/Weekly)", multiplier: 1.0 },
      { value: "advanced", label: "Advanced (Custom Dashboards)", multiplier: 1.2 },
      { value: "enterprise", label: "Enterprise (Real-time Portal)", multiplier: 1.4 },
    ],
    defaultValue: "advanced",
  },
  {
    id: "dispatch",
    label: "Dispatch Integration",
    type: "select" as const,
    options: [
      { value: "no", label: "No Dispatch", multiplier: 1.0 },
      { value: "hnl", label: "HNL Field Teams", multiplier: 1.3 },
      { value: "client", label: "Client Team Integration", multiplier: 1.2 },
    ],
    defaultValue: "no",
  },
]

const calculateNocEstimate = (values: Record<string, string | number>) => {
  const elementCount = values.elementCount as number

  const baseRatePerElement = 200 // Monthly per element
  const scopeMultipliers: Record<string, number> = { network: 1.0, "network-power": 1.4, full: 1.8 }
  const slaMultipliers: Record<string, number> = { standard: 1.0, premium: 1.3, critical: 1.6 }
  const reportingMultipliers: Record<string, number> = { basic: 1.0, advanced: 1.2, enterprise: 1.4 }
  const dispatchMultipliers: Record<string, number> = { no: 1.0, hnl: 1.3, client: 1.2 }

  const scopeMult = scopeMultipliers[values.monitoringScope as string] || 1
  const slaMult = slaMultipliers[values.slaLevel as string] || 1
  const reportMult = reportingMultipliers[values.reporting as string] || 1
  const dispatchMult = dispatchMultipliers[values.dispatch as string] || 1

  const monthlyRate = baseRatePerElement * elementCount * scopeMult * slaMult * reportMult * dispatchMult
  const annualCost = monthlyRate * 12

  const lowEstimate = Math.round(annualCost * 0.9)
  const highEstimate = Math.round(annualCost * 1.1)

  return {
    lowEstimate,
    highEstimate,
    timeline: "Ongoing contract",
    breakdown: [
      { label: `${elementCount} elements monthly`, value: `${formatCurrency(Math.round(monthlyRate))}/mo` },
      { label: "Annual contract value", value: formatCurrency(Math.round(annualCost)) },
      {
        label: "Per-element monthly rate",
        value: `${formatCurrency(Math.round(monthlyRate / elementCount))}/element/mo`,
      },
      { label: "Setup & integration", value: "One-time fee quoted separately" },
    ],
  }
}

export default function NocMonitoringPage() {
  const [activeTab, setActiveTab] = useState("network")

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="noc-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#noc-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Monitor className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Telecom Infrastructure Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              NOC Monitoring &<span className="text-red-500"> Support Services</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              24/7 network operations center with intelligent alarm correlation, real-time dashboards, and integrated
              dispatch. 3,000+ network elements monitored with 15-minute MTTA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get NOC Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule NOC Demo
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/noc-operations-center-with-monitors.jpg"
                alt="NOC operations center"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">8 min</div>
                    <div className="text-sm text-zinc-500">Average MTTA</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Operations</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Intelligent Network Operations Center
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                HNL's NOC combines advanced alarm correlation, multi-vendor NMS integration, and experienced operators
                to deliver proactive network monitoring. We identify issues before they impact your customers.
              </p>

              <div className="space-y-4">
                {[
                  "Intelligent alarm correlation reduces noise by 60%",
                  "Multi-vendor NMS integration (Huawei, Nokia, Ericsson, ZTE)",
                  "Real-time dashboards with client portal access",
                  "Automated ticketing with SLA tracking",
                  "Predictive analytics for proactive maintenance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Services Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Monitoring Services</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Comprehensive monitoring across network, power, security, and environmental systems
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {monitoringServices.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">{service.name}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {monitoringServices.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{service.fullName}</h3>
                        <p className="text-zinc-600 mb-6">{service.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Features</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-zinc-900 mb-3">Coverage</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.coverage.map((item, idx) => (
                              <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.fullName}
                          fill
                          className="object-cover rounded-r-xl"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* NOC Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">NOC Capabilities</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Advanced features that set our NOC apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nocCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 hover:border-red-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.capability}</h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Metrics */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Industry-leading response times and accuracy</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {responseMetrics.map((item, idx) => (
              <div key={idx} className="text-center p-5 bg-zinc-900 rounded-xl border border-zinc-800">
                <div className="text-sm text-zinc-500 mb-2">{item.metric}</div>
                <div className="text-xl font-bold text-red-500 mb-1">{item.achieved}</div>
                <div className="text-xs text-zinc-600">Target: {item.target}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <ServiceEstimator
        title="NOC Services Cost Estimator"
        description="Get an instant estimate for 24/7 NOC monitoring services"
        fields={estimatorFields}
        calculateEstimate={calculateNocEstimate}
        serviceName="NOC Monitoring"
        whatsappNumber="+923001234567"
      />

      {/* Vendor Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">NMS Integrations</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Certified integration with major vendor management systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {integrations.map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-xl p-4 text-center border border-zinc-100">
                <div className="text-lg font-bold text-zinc-900 mb-1">{item.vendor}</div>
                <div className="text-xs text-zinc-500 mb-2">{item.system}</div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Reporting Packages</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Comprehensive reporting at every level</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reportingPackages.map((pkg, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{pkg.name}</h3>
                  <ul className="space-y-2 mb-4">
                    {pkg.contents.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                        <CheckCircle2 className="w-4 h-4 text-red-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-zinc-100">
                    <span className="text-sm text-zinc-500">Format: </span>
                    <span className="text-sm font-medium text-zinc-900">{pkg.format}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-red-600 text-white p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Need NOC Services?</h2>
                  <p className="text-red-100 mb-6">
                    Get 24/7 network monitoring with intelligent alarm correlation and rapid response.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>+92 21 111 000 HNL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5" />
                      <span>noc@hnl.com.pk</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Schedule a Demo</h3>
                  <p className="text-zinc-600 mb-6">See our NOC capabilities in action with a live demonstration.</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Request NOC Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-300 bg-transparent">
                      <Phone className="mr-2 w-4 h-4" />
                      Talk to NOC Expert
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
