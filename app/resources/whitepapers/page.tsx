import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Technical Whitepapers & Research | HNL Pakistan",
  description:
    "Download comprehensive technical whitepapers, ROI calculators, and implementation frameworks for infrastructure projects in Pakistan.",
}

const whitepapers = [
  {
    title: "Hybrid Power Systems ROI Calculator for Pakistan",
    description:
      "Comprehensive financial analysis model for solar-diesel-battery systems. Includes NPV calculations, payback analysis, and sensitivity scenarios for Pakistani market conditions.",
    category: "Energy Solutions",
    pages: 28,
    downloadSize: "2.4 MB",
  },
  {
    title: "Telecom Site Integration Best Practices Guide",
    description:
      "Technical standards, QA checklists, and commissioning procedures for telecom infrastructure. Covers power, transmission, and equipment installation.",
    category: "Telecom Infrastructure",
    pages: 42,
    downloadSize: "3.8 MB",
  },
  {
    title: "AI Agents Implementation Framework for Enterprises",
    description:
      "Step-by-step methodology for deploying AI-powered automation in Pakistani enterprises. Includes use case assessment, ROI modeling, and deployment roadmap.",
    category: "Cloud & IT",
    pages: 35,
    downloadSize: "2.9 MB",
  },
  {
    title: "Fiber-to-the-Home Deployment Economics in Pakistan",
    description:
      "Market analysis, cost structures, and business case modeling for FTTH projects. Based on data from 1000+ km of fiber deployments.",
    category: "Telecom Infrastructure",
    pages: 31,
    downloadSize: "2.6 MB",
  },
  {
    title: "BESS Technology Comparison: LFP vs Lead-Acid",
    description:
      "Technical and economic comparison of battery technologies for Pakistani conditions. Lifecycle costs, performance in high temperatures, and application suitability.",
    category: "Energy Solutions",
    pages: 24,
    downloadSize: "2.1 MB",
  },
  {
    title: "Enterprise Cloud Migration Framework",
    description:
      "Proven methodology for migrating enterprise workloads to cloud. Risk assessment, application prioritization, and migration sequencing for minimal disruption.",
    category: "Cloud & IT",
    pages: 38,
    downloadSize: "3.2 MB",
  },
]

export default function WhitepapersPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Resources", item: "/resources" },
    { name: "Whitepapers", item: "/resources/whitepapers" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Whitepapers & Research</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive analysis, implementation frameworks, and ROI calculators for infrastructure projects.
                Download expert knowledge compiled from hundreds of deployments across Pakistan.
              </p>
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {whitepapers.map((paper) => (
                <Card key={paper.title} className="hover:shadow-lg hover:border-hnl-red transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <FileText className="w-10 h-10 text-hnl-red" />
                      <span className="text-xs text-muted-foreground">{paper.category}</span>
                    </div>
                    <CardTitle className="text-xl">{paper.title}</CardTitle>
                    <CardDescription>{paper.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{paper.pages} pages</span>
                      <span>{paper.downloadSize}</span>
                    </div>
                    <Button className="w-full bg-hnl-red hover:bg-hnl-red-dark gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need Custom Research or Analysis?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our technical teams can develop customized feasibility studies, ROI models, and implementation
                frameworks for your specific project requirements.
              </p>
              <Button size="lg" className="bg-hnl-red hover:bg-hnl-red-dark">
                Request Custom Analysis
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
