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
  Brain,
  Zap,
  Bot,
  Clock,
  Users,
  TrendingUp,
  MessageCircle,
  Globe,
  Headphones,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatCurrency } from "@/lib/format-currency"

const stats = [
  { value: "80%", label: "Faster Responses", icon: Clock },
  { value: "24/7", label: "Availability", icon: Bot },
  { value: "70%", label: "Cost Reduction", icon: TrendingUp },
  { value: "3+", label: "Languages", icon: Globe },
]

const useCases = [
  {
    id: "customer-service",
    name: "Customer Service",
    icon: Headphones,
    description: "AI agents that handle tier-1 support, answer FAQs, and escalate complex issues",
    capabilities: [
      "Handle 80% of routine inquiries automatically",
      "24/7 availability in Urdu, English, Roman Urdu",
      "Seamless escalation to human agents",
      "Integration with CRM and ticketing systems",
    ],
    metrics: { responseTime: "< 2 seconds", resolution: "70% first contact", satisfaction: "92%" },
    industries: ["Banking", "Telecom", "E-commerce", "Healthcare"],
  },
  {
    id: "operations",
    name: "Operations",
    icon: Zap,
    description: "Automate repetitive tasks like data entry, invoice processing, and report generation",
    capabilities: [
      "Automate document processing and data extraction",
      "Generate reports and dashboards automatically",
      "Process invoices and purchase orders",
      "Integrate with ERP and accounting systems",
    ],
    metrics: { timeSaved: "70%", accuracy: "99.5%", throughput: "10x faster" },
    industries: ["Manufacturing", "Logistics", "Finance", "Government"],
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    icon: TrendingUp,
    description: "AI agents that qualify leads, personalize outreach, and optimize campaigns",
    capabilities: [
      "Qualify and score leads automatically",
      "Personalize email and WhatsApp outreach",
      "Schedule meetings and demos",
      "Analyze campaign performance",
    ],
    metrics: { conversionLift: "+35%", leadQualification: "5x faster", engagement: "+50%" },
    industries: ["Real Estate", "SaaS", "Education", "Retail"],
  },
  {
    id: "hr",
    name: "HR & Recruitment",
    icon: Users,
    description: "Streamline hiring, onboarding, and employee support with AI assistants",
    capabilities: [
      "Screen resumes and shortlist candidates",
      "Schedule interviews automatically",
      "Answer employee HR queries",
      "Automate onboarding workflows",
    ],
    metrics: { hiringTime: "-40%", screeningAccuracy: "95%", employeeSatisfaction: "4.5/5" },
    industries: ["All Industries"],
  },
]

const deploymentProcess = [
  {
    phase: "Discovery",
    duration: "1 week",
    activities: [
      "Identify high-impact use cases",
      "Map existing workflows",
      "Define success metrics",
      "Gather training data",
    ],
  },
  {
    phase: "Design",
    duration: "1-2 weeks",
    activities: [
      "Design conversation flows",
      "Define integration points",
      "Create knowledge base structure",
      "Plan escalation paths",
    ],
  },
  {
    phase: "Build",
    duration: "2-4 weeks",
    activities: [
      "Train AI models on your data",
      "Develop integrations",
      "Build admin dashboard",
      "Configure multilingual support",
    ],
  },
  {
    phase: "Pilot",
    duration: "2 weeks",
    activities: [
      "Deploy to limited users",
      "Monitor and collect feedback",
      "Refine responses and flows",
      "Train human-in-the-loop",
    ],
  },
  {
    phase: "Launch",
    duration: "Ongoing",
    activities: [
      "Full production deployment",
      "Continuous learning and improvement",
      "Performance monitoring",
      "Monthly optimization reviews",
    ],
  },
]

const integrations = [
  { name: "WhatsApp Business", category: "Messaging" },
  { name: "Facebook Messenger", category: "Messaging" },
  { name: "Website Chat", category: "Messaging" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Zoho CRM", category: "CRM" },
  { name: "SAP", category: "ERP" },
  { name: "Oracle", category: "ERP" },
  { name: "Zendesk", category: "Support" },
  { name: "Freshdesk", category: "Support" },
  { name: "Microsoft Teams", category: "Collaboration" },
  { name: "Slack", category: "Collaboration" },
]

const faqs = [
  {
    question: "What can AI agents do for my business?",
    answer:
      "AI agents can handle customer support (answering FAQs, processing requests), automate operations (data entry, invoice processing, report generation), assist sales (lead qualification, scheduling), and support HR (resume screening, employee queries). They work 24/7, reduce costs by 50-70%, and free your team for higher-value work.",
  },
  {
    question: "How do you train AI agents on our business?",
    answer:
      "We train agents using your historical data: past conversations, FAQs, SOPs, product documentation, and knowledge bases. The agent learns your terminology, processes, and brand voice. We also implement human-in-the-loop feedback to continuously improve accuracy.",
  },
  {
    question: "Are AI agents secure for sensitive data?",
    answer:
      "Yes. We deploy AI agents with enterprise-grade security: data encryption (at rest and in transit), role-based access controls, audit logging, and compliance with ISO 27001. For highly sensitive data, we offer on-premises deployment with no data leaving your infrastructure.",
  },
  {
    question: "Can AI agents speak Urdu and Roman Urdu?",
    answer:
      "Yes. Our AI agents support multilingual conversations including English, Urdu (Nastaliq script), and Roman Urdu (Romanized). They can detect language automatically and switch mid-conversation based on customer preference.",
  },
  {
    question: "How long does it take to deploy an AI agent?",
    answer:
      "A basic AI agent (FAQ bot, simple workflows) can be deployed in 2-3 weeks. More complex agents (multi-system integrations, custom workflows) take 4-8 weeks. Enterprise deployments with multiple use cases may take 2-3 months.",
  },
  {
    question: "What happens when the AI can't answer a question?",
    answer:
      "We implement intelligent escalation: the agent recognizes its limitations, collects relevant context, and seamlessly hands off to a human agent with full conversation history. This ensures no customer is left without help.",
  },
  {
    question: "How do you measure AI agent performance?",
    answer:
      "We track: containment rate (% resolved without human), first response time, customer satisfaction (CSAT), escalation rate, and business metrics (cost per interaction, conversion rate). You get a real-time dashboard and monthly performance reviews.",
  },
  {
    question: "Can AI agents integrate with our existing systems?",
    answer:
      "Yes. We integrate with CRMs (Salesforce, HubSpot, Zoho), ERPs (SAP, Oracle), helpdesk tools (Zendesk, Freshdesk), messaging platforms (WhatsApp, Messenger), and custom APIs. Most integrations are completed within 1-2 weeks.",
  },
]

export default function AIAgentsPage() {
  const [activeTab, setActiveTab] = useState("customer-service")
  const [estimatorValues, setEstimatorValues] = useState({
    conversations: 5000,
    channels: "2",
    complexity: "medium",
    integrations: "2",
    languages: "2",
  })

  const calculateEstimate = () => {
    const base = 500000 // Base setup cost
    const perConversation = 2 // PKR per conversation

    const channelMultipliers: Record<string, number> = { "1": 1.0, "2": 1.3, "3": 1.5, "5": 1.8 }
    const complexityMultipliers: Record<string, number> = { simple: 0.7, medium: 1.0, complex: 1.5, enterprise: 2.5 }
    const integrationMultipliers: Record<string, number> = { "0": 1.0, "2": 1.2, "5": 1.4, "10": 1.7 }
    const languageMultipliers: Record<string, number> = { "1": 1.0, "2": 1.1, "3": 1.2 }

    const channelMult = channelMultipliers[estimatorValues.channels] || 1
    const complexityMult = complexityMultipliers[estimatorValues.complexity] || 1
    const integrationMult = integrationMultipliers[estimatorValues.integrations] || 1
    const languageMult = languageMultipliers[estimatorValues.languages] || 1

    const setupCost = base * channelMult * complexityMult * integrationMult * languageMult
    const monthlyCost = estimatorValues.conversations * perConversation * channelMult

    return {
      setup: { low: Math.round(setupCost * 0.85), high: Math.round(setupCost * 1.15) },
      monthly: { low: Math.round(monthlyCost * 0.9), high: Math.round(monthlyCost * 1.1) },
    }
  }

  const estimate = calculateEstimate()

  const generateWhatsAppMessage = () => {
    const message = `Hi, I'm interested in AI Agent services.

My requirements:
- Monthly conversations: ${estimatorValues.conversations.toLocaleString()}
- Channels: ${estimatorValues.channels}
- Complexity: ${estimatorValues.complexity}
- Integrations: ${estimatorValues.integrations}
- Languages: ${estimatorValues.languages}

Estimated setup: PKR ${estimate.setup.low.toLocaleString()} - ${estimate.setup.high.toLocaleString()}
Estimated monthly: PKR ${estimate.monthly.low.toLocaleString()} - ${estimate.monthly.high.toLocaleString()}

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
              <pattern id="ai-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ai-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <Brain className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Software, Cloud & AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Agents &<span className="text-red-500"> Automation</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy intelligent AI agents that automate customer service, operations, and business processes. 24/7
              availability, multilingual support, and 70% cost reduction for Pakistani enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get AI Agent Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to AI Specialist
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
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why AI Agents for Your Business?</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Pakistani businesses are adopting AI agents to handle growing customer demands without scaling
                headcount. Our AI agents work 24/7, speak multiple languages, and integrate with your existing systems.
              </p>
              <div className="space-y-4">
                {[
                  "Handle 80% of routine inquiries automatically",
                  "Reduce customer service costs by 50-70%",
                  "Available 24/7 in Urdu, English, and Roman Urdu",
                  "Seamless handoff to human agents when needed",
                  "Integrate with WhatsApp, CRM, and helpdesk tools",
                  "Continuous learning from every interaction",
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
                  src="/ai-chatbot-customer-service-modern-interface.jpg"
                  alt="AI Agent Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">24/7</div>
                    <div className="text-sm text-zinc-500">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">AI Agent Use Cases</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From customer service to operations automation - AI agents for every business function
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <useCase.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{useCase.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <Card className="border-2 border-zinc-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                            <useCase.icon className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-zinc-900">{useCase.name} AI</h3>
                        </div>
                        <p className="text-zinc-600 mb-6">{useCase.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Capabilities</h4>
                          <div className="space-y-2">
                            {useCase.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {useCase.industries.map((industry, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-zinc-700">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="bg-zinc-50 rounded-xl p-6">
                          <h4 className="font-semibold text-zinc-900 mb-4">Performance Metrics</h4>
                          <div className="space-y-4">
                            {Object.entries(useCase.metrics).map(([key, value], idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <span className="text-zinc-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                                <span className="font-bold text-red-600 text-lg">{value}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Deployment Process */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deploy AI Agents</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A proven 5-phase process that ensures successful AI agent deployment
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {deploymentProcess.map((phase, idx) => (
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
                  {idx < deploymentProcess.length - 1 && (
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

      {/* AI Agent Cost Estimator */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">AI Agent Cost Estimator</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Get an instant estimate for deploying AI agents in your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-600/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Monthly Conversations: {estimatorValues.conversations.toLocaleString()}
                      </Label>
                      <Slider
                        value={[estimatorValues.conversations]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, conversations: v[0] })}
                        min={500}
                        max={100000}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>500</span>
                        <span>100,000</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Number of Channels</Label>
                      <Select
                        value={estimatorValues.channels}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, channels: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Channel (e.g., Website only)</SelectItem>
                          <SelectItem value="2">2 Channels (e.g., Website + WhatsApp)</SelectItem>
                          <SelectItem value="3">3 Channels</SelectItem>
                          <SelectItem value="5">5+ Channels (Omnichannel)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Use Case Complexity</Label>
                      <Select
                        value={estimatorValues.complexity}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, complexity: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simple">Simple (FAQ Bot)</SelectItem>
                          <SelectItem value="medium">Medium (Workflows + Integrations)</SelectItem>
                          <SelectItem value="complex">Complex (Multi-system + Custom AI)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (Full Automation)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">System Integrations</Label>
                      <Select
                        value={estimatorValues.integrations}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, integrations: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">None (Standalone)</SelectItem>
                          <SelectItem value="2">1-2 Systems (CRM/Helpdesk)</SelectItem>
                          <SelectItem value="5">3-5 Systems</SelectItem>
                          <SelectItem value="10">5+ Systems (Full Stack)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Languages Required</Label>
                      <Select
                        value={estimatorValues.languages}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, languages: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">English Only</SelectItem>
                          <SelectItem value="2">English + Urdu</SelectItem>
                          <SelectItem value="3">English + Urdu + Roman Urdu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-zinc-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-zinc-900 mb-4">Your Estimate</h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Setup & Development</div>
                        <div className="text-2xl font-bold text-zinc-900">
                          {formatCurrency(estimate.setup.low)} - {formatCurrency(estimate.setup.high)}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-zinc-500 mb-1">Monthly Operations</div>
                        <div className="text-xl font-bold text-red-600">
                          {formatCurrency(estimate.monthly.low)} - {formatCurrency(estimate.monthly.high)}/mo
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-500 mb-6">
                      *Estimates are indicative. Final pricing based on detailed requirements analysis.
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
                          Talk to AI Expert
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

      {/* Integrations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Integrations</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Our AI agents integrate with your existing tools and platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-zinc-50 rounded-lg border border-zinc-200 hover:border-red-300 transition-colors"
              >
                <span className="font-medium text-zinc-900">{integration.name}</span>
                <span className="text-xs text-zinc-500 ml-2">({integration.category})</span>
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
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy AI Agents?</h2>
                <p className="text-neutral-300 mb-6">
                  Get a free AI readiness assessment from our specialists. We'll identify high-impact use cases and
                  provide a deployment roadmap.
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
                  <div className="text-3xl font-bold text-red-500">80%</div>
                  <div className="text-neutral-300 text-sm">Faster Responses</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">24/7</div>
                  <div className="text-neutral-300 text-sm">Availability</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">70%</div>
                  <div className="text-neutral-300 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">3+</div>
                  <div className="text-neutral-300 text-sm">Languages</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">AI Agent Questions</h2>
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
