"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatCurrency } from "@/lib/format-currency"
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Database,
  BarChart3,
  TrendingUp,
  Clock,
  MessageCircle,
  PieChart,
  LineChart,
  Layers,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const stats = [
  { value: "10+", label: "Data Warehouses", icon: Database },
  { value: "100M+", label: "Records Processed", icon: Layers },
  { value: "Real-time", label: "Dashboard Updates", icon: Clock },
  { value: "50+", label: "Custom Dashboards", icon: BarChart3 },
]

const capabilities = [
  {
    id: "warehouse",
    name: "Data Warehousing",
    icon: Database,
    description: "Build modern cloud data warehouses that centralize all your enterprise data",
    features: [
      "Single source of truth for all business data",
      "Sub-second query performance on billions of rows",
      "Automatic scaling based on workload",
      "Built-in data governance and lineage",
    ],
    platforms: ["Snowflake", "Google BigQuery", "AWS Redshift", "Azure Synapse"],
    useCases: ["Financial reporting", "Customer 360", "Supply chain analytics", "Regulatory compliance"],
  },
  {
    id: "bi",
    name: "BI Dashboards",
    icon: BarChart3,
    description: "Create interactive dashboards that provide real-time business insights",
    features: [
      "Self-service analytics for business users",
      "Real-time data refresh and alerts",
      "Mobile-optimized dashboards",
      "Embedded analytics in your applications",
    ],
    platforms: ["Power BI", "Tableau", "Looker", "Metabase"],
    useCases: ["Executive dashboards", "Sales performance", "Operational metrics", "Marketing analytics"],
  },
  {
    id: "predictive",
    name: "Predictive Analytics",
    icon: TrendingUp,
    description: "Use machine learning to forecast trends and optimize business decisions",
    features: [
      "Demand forecasting with 90%+ accuracy",
      "Customer churn prediction",
      "Anomaly detection for fraud/errors",
      "Price optimization models",
    ],
    platforms: ["Python/R", "AWS SageMaker", "Azure ML", "Google Vertex AI"],
    useCases: ["Inventory optimization", "Risk assessment", "Customer lifetime value", "Predictive maintenance"],
  },
  {
    id: "etl",
    name: "Data Engineering",
    icon: Layers,
    description: "Build robust data pipelines that automate data collection and transformation",
    features: [
      "Automated ETL/ELT pipelines",
      "Real-time data streaming",
      "Data quality monitoring",
      "Schema evolution handling",
    ],
    platforms: ["Apache Spark", "dbt", "Airflow", "Fivetran"],
    useCases: ["Data integration", "Data lake architecture", "Event streaming", "Data catalog"],
  },
]

const implementationProcess = [
  {
    phase: "Data Assessment",
    duration: "1-2 weeks",
    activities: [
      "Audit existing data sources and quality",
      "Identify key business questions to answer",
      "Define KPIs and success metrics",
      "Map data flows and dependencies",
    ],
    deliverables: "Data assessment report, analytics roadmap",
  },
  {
    phase: "Architecture Design",
    duration: "2-3 weeks",
    activities: [
      "Design data warehouse schema",
      "Select platform and tools",
      "Plan data governance framework",
      "Design security and access controls",
    ],
    deliverables: "Architecture diagrams, platform selection",
  },
  {
    phase: "Data Pipeline Build",
    duration: "4-8 weeks",
    activities: [
      "Build ETL/ELT pipelines",
      "Implement data quality checks",
      "Configure automated scheduling",
      "Set up monitoring and alerts",
    ],
    deliverables: "Operational data pipelines, data warehouse",
  },
  {
    phase: "Dashboard Development",
    duration: "2-4 weeks",
    activities: [
      "Design dashboard layouts with stakeholders",
      "Build interactive visualizations",
      "Implement drill-downs and filters",
      "Configure mobile access",
    ],
    deliverables: "Live dashboards, user training",
  },
  {
    phase: "ML Model Deployment",
    duration: "4-8 weeks",
    activities: [
      "Feature engineering and selection",
      "Model training and validation",
      "Deploy to production with monitoring",
      "Integrate predictions into dashboards",
    ],
    deliverables: "Production ML models, prediction APIs",
  },
]

const industryUseCases = [
  {
    industry: "Banking & Finance",
    useCases: [
      "Risk scoring and credit analysis",
      "Fraud detection in real-time",
      "Customer segmentation",
      "Regulatory reporting (SBP, SECP)",
    ],
  },
  {
    industry: "Telecom",
    useCases: ["Network performance analytics", "Churn prediction", "Revenue assurance", "Tower site analytics"],
  },
  {
    industry: "Retail & E-commerce",
    useCases: ["Demand forecasting", "Customer lifetime value", "Basket analysis", "Inventory optimization"],
  },
  {
    industry: "Manufacturing",
    useCases: [
      "Predictive maintenance",
      "Quality control analytics",
      "Supply chain optimization",
      "Production efficiency",
    ],
  },
]

const faqs = [
  {
    question: "What is a data warehouse and why do I need one?",
    answer:
      "A data warehouse centralizes data from multiple sources (ERP, CRM, sales, operations) into a single system optimized for reporting and analysis. Without it, you're stuck with data silos, inconsistent reports, and slow queries. Modern cloud warehouses like Snowflake can query billions of rows in seconds.",
  },
  {
    question: "How do you handle data from multiple systems?",
    answer:
      "We build ETL (Extract, Transform, Load) pipelines that automatically pull data from your existing systems - Oracle, SAP, Salesforce, custom databases, APIs, flat files. Data is cleaned, transformed, and loaded into the warehouse on a schedule (real-time, hourly, daily).",
  },
  {
    question: "Can you create custom dashboards for our specific KPIs?",
    answer:
      "Yes. We work with your business stakeholders to define KPIs, design dashboard layouts, and build interactive visualizations. Dashboards can include drill-downs, filters, alerts, and can be accessed on desktop, tablet, and mobile.",
  },
  {
    question: "How secure is our data in the warehouse?",
    answer:
      "Enterprise-grade security: encryption at rest and in transit, role-based access control, column-level security, audit logging, and compliance with ISO 27001, SOC 2. We can also deploy on-premises for highly sensitive data.",
  },
  {
    question: "What's the difference between BI dashboards and predictive analytics?",
    answer:
      "BI dashboards show you what happened (historical data, current metrics). Predictive analytics tells you what will happen (forecasts, predictions). Both are valuable - dashboards for monitoring, predictions for proactive decision-making.",
  },
  {
    question: "How long does it take to see ROI from analytics?",
    answer:
      "Initial dashboards can be live within 4-6 weeks, providing immediate visibility. Full ROI typically comes within 6-12 months as you optimize operations based on insights. Clients typically see 10-20% efficiency gains.",
  },
  {
    question: "Do we need a data science team to use these solutions?",
    answer:
      "No. We build self-service analytics that business users can use without SQL or coding. For advanced analytics, we provide managed services where our team maintains and updates models. We also offer training to build internal capabilities.",
  },
  {
    question: "Can you integrate with our existing BI tools?",
    answer:
      "Yes. If you already have Power BI, Tableau, or other tools, we can connect them to the new data warehouse. We're tool-agnostic and recommend the best fit based on your existing investments and requirements.",
  },
]

export default function BigDataAnalyticsPage() {
  const [activeTab, setActiveTab] = useState("warehouse")
  const [estimatorValues, setEstimatorValues] = useState({
    dataSources: 5,
    dataVolume: "medium",
    dashboards: "5",
    predictive: "basic",
    support: "managed",
  })

  const calculateEstimate = () => {
    const baseSetup = 800000 // Base warehouse setup

    const sourceMultipliers: Record<string, number> = { "3": 0.8, "5": 1.0, "10": 1.3, "20": 1.6 }
    const volumeMultipliers: Record<string, number> = { small: 0.7, medium: 1.0, large: 1.5, enterprise: 2.5 }
    const dashboardMultipliers: Record<string, number> = { "3": 0.8, "5": 1.0, "10": 1.3, "20": 1.6 }
    const predictiveMultipliers: Record<string, number> = { none: 0, basic: 0.5, advanced: 1.0, enterprise: 2.0 }
    const supportMultipliers: Record<string, number> = { basic: 1.0, managed: 1.4, premium: 2.0 }

    const sources = estimatorValues.dataSources
    let sourceMult = 1.0
    if (sources <= 3) sourceMult = 0.8
    else if (sources <= 5) sourceMult = 1.0
    else if (sources <= 10) sourceMult = 1.3
    else sourceMult = 1.6

    const volumeMult = volumeMultipliers[estimatorValues.dataVolume] || 1
    const dashMult = dashboardMultipliers[estimatorValues.dashboards] || 1
    const predMult = predictiveMultipliers[estimatorValues.predictive] || 0
    const supportMult = supportMultipliers[estimatorValues.support] || 1

    const setupCost = baseSetup * sourceMult * volumeMult * dashMult * supportMult
    const predictiveCost = predMult * 500000
    const totalSetup = setupCost + predictiveCost
    const monthlyCost = totalSetup * 0.08 // ~8% of setup for monthly operations

    return {
      setup: { low: Math.round(totalSetup * 0.85), high: Math.round(totalSetup * 1.15) },
      monthly: { low: Math.round(monthlyCost * 0.9), high: Math.round(monthlyCost * 1.1) },
    }
  }

  const estimate = calculateEstimate()

  const generateWhatsAppMessage = () => {
    const message = `Hi, I'm interested in Big Data & Analytics services.

My requirements:
- Data sources: ${estimatorValues.dataSources}
- Data volume: ${estimatorValues.dataVolume}
- Dashboards needed: ${estimatorValues.dashboards}
- Predictive analytics: ${estimatorValues.predictive}
- Support level: ${estimatorValues.support}

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
              <pattern id="data-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#data-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">Software, Cloud & AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Big Data &<span className="text-red-500"> Analytics</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn enterprise data into actionable insights with modern data warehouses, real-time dashboards, and
              predictive analytics. Make data-driven decisions that grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg">
                Get Analytics Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 text-lg bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to Data Engineer
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
                  src="/data-analytics-dashboard-modern-visualization.jpg"
                  alt="Data Analytics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">Real-time</div>
                    <div className="text-sm text-zinc-500">Data Updates</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">100M+</div>
                    <div className="text-sm text-zinc-500">Records Processed</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Why Invest in Data Analytics?</h2>
              <p className="text-lg text-zinc-600 mb-6">
                Pakistani enterprises sit on mountains of untapped data. HNL helps you transform this data into
                competitive advantage with modern analytics infrastructure that scales with your business.
              </p>
              <div className="space-y-4">
                {[
                  "Eliminate data silos with a single source of truth",
                  "Get real-time visibility into business performance",
                  "Predict trends before they happen",
                  "Empower business users with self-service analytics",
                  "Reduce reporting time from days to minutes",
                  "Make data-driven decisions across all departments",
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

      {/* Capabilities Tabs */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Our Analytics Capabilities</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              End-to-end data and analytics solutions - from data warehouses to predictive models
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto bg-white border border-zinc-200 rounded-xl p-1 mb-8">
              {capabilities.map((cap) => (
                <TabsTrigger
                  key={cap.id}
                  value={cap.id}
                  className="py-3 px-4 rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <cap.icon className="w-4 h-4" />
                    <span className="text-sm font-medium hidden sm:inline">{cap.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {capabilities.map((cap) => (
              <TabsContent key={cap.id} value={cap.id}>
                <Card className="border-2 border-zinc-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                            <cap.icon className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-zinc-900">{cap.name}</h3>
                        </div>
                        <p className="text-zinc-600 mb-6">{cap.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {cap.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-red-600" />
                                <span className="text-zinc-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {cap.platforms.map((platform, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-zinc-700">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="bg-zinc-50 rounded-xl p-6">
                          <h4 className="font-semibold text-zinc-900 mb-3">Common Use Cases</h4>
                          <ul className="space-y-2">
                            {cap.useCases.map((useCase, idx) => (
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

      {/* Implementation Process */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A proven methodology that delivers analytics value in weeks, not months
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-red-600/50 transform md:-translate-x-1/2"></div>

              {implementationProcess.map((phase, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
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

      {/* Analytics Cost Estimator */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Analytics Investment Estimator</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Get an instant estimate for your data analytics project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-600/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Number of Data Sources: {estimatorValues.dataSources}
                      </Label>
                      <Slider
                        value={[estimatorValues.dataSources]}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, dataSources: v[0] })}
                        min={1}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-zinc-500 mt-1">
                        <span>1</span>
                        <span>20</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Data Volume</Label>
                      <Select
                        value={estimatorValues.dataVolume}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, dataVolume: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (Up to 10GB)</SelectItem>
                          <SelectItem value="medium">Medium (10-100GB)</SelectItem>
                          <SelectItem value="large">Large (100GB-1TB)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (1TB+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Dashboards Required</Label>
                      <Select
                        value={estimatorValues.dashboards}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, dashboards: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">1-3 Dashboards</SelectItem>
                          <SelectItem value="5">4-5 Dashboards</SelectItem>
                          <SelectItem value="10">6-10 Dashboards</SelectItem>
                          <SelectItem value="20">10+ Dashboards</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Predictive Analytics</Label>
                      <Select
                        value={estimatorValues.predictive}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, predictive: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Not Required</SelectItem>
                          <SelectItem value="basic">Basic (1-2 Models)</SelectItem>
                          <SelectItem value="advanced">Advanced (3-5 Models)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (5+ Models)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">Support Level</Label>
                      <Select
                        value={estimatorValues.support}
                        onValueChange={(v) => setEstimatorValues({ ...estimatorValues, support: v })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic (Helpdesk)</SelectItem>
                          <SelectItem value="managed">Managed (Monitoring + Updates)</SelectItem>
                          <SelectItem value="premium">Premium (Full Managed)</SelectItem>
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
                        <div className="text-sm text-zinc-500 mb-1">Est. Monthly Operations</div>
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
                          Talk to Data Expert
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

      {/* Industry Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Industry Use Cases</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Analytics solutions tailored to your industry challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industryUseCases.map((industry, idx) => (
              <Card key={idx} className="border-l-4 border-l-red-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-zinc-900 mb-4">{industry.industry}</h3>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Your Data?</h2>
                <p className="text-neutral-300 mb-6">
                  Get a free data assessment from our analytics experts. We'll identify high-impact use cases and
                  provide an implementation roadmap.
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
                  <div className="text-3xl font-bold text-red-500">10+</div>
                  <div className="text-neutral-300 text-sm">Warehouses Built</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">100M+</div>
                  <div className="text-neutral-300 text-sm">Records Processed</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">50+</div>
                  <div className="text-neutral-300 text-sm">Dashboards</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-red-500">Real-time</div>
                  <div className="text-neutral-300 text-sm">Updates</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Analytics Questions</h2>
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
