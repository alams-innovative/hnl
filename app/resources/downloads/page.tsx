import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileSpreadsheet, FileCheck, Calculator } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Downloads: Templates, Checklists & Tools | HNL Pakistan",
  description:
    "Download technical specifications, project templates, QA checklists, and ROI calculators for infrastructure deployments.",
}

const downloads = [
  {
    title: "Fiber Installation QA Checklist",
    description:
      "Comprehensive quality assurance checklist covering splice validation, OTDR testing, labeling standards, and documentation requirements.",
    icon: FileCheck,
    type: "PDF Checklist",
    size: "480 KB",
  },
  {
    title: "BESS Sizing Calculator",
    description:
      "Excel-based calculator for determining optimal battery capacity, autonomy requirements, and system specifications for telecom and industrial sites.",
    icon: Calculator,
    type: "Excel Tool",
    size: "820 KB",
  },
  {
    title: "Site Integration Commissioning Template",
    description:
      "Step-by-step commissioning procedures and documentation templates for telecom site integration projects.",
    icon: FileCheck,
    type: "Word Template",
    size: "650 KB",
  },
  {
    title: "Hybrid Power System ROI Spreadsheet",
    description:
      "Financial modeling tool with NPV, IRR, and payback calculations for solar-diesel-battery systems. Includes sensitivity analysis.",
    icon: FileSpreadsheet,
    type: "Excel Tool",
    size: "1.2 MB",
  },
  {
    title: "NOC Monitoring KPI Dashboard Template",
    description:
      "Pre-built dashboard template for tracking network uptime, alarm response times, SLA compliance, and operational metrics.",
    icon: FileSpreadsheet,
    type: "Excel Template",
    size: "920 KB",
  },
  {
    title: "Cloud Migration Readiness Assessment",
    description:
      "Self-assessment tool for evaluating application readiness, dependency mapping, and migration complexity scoring.",
    icon: FileCheck,
    type: "PDF Checklist",
    size: "540 KB",
  },
]

export default function DownloadsPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Resources", item: "/resources" },
    { name: "Downloads", item: "/resources/downloads" },
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Templates, Checklists & Calculators</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Practical tools developed from hundreds of infrastructure projects. Download checklists, templates, and
                calculators to streamline your deployments.
              </p>
            </div>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.map((download) => {
                const Icon = download.icon
                return (
                  <Card key={download.title} className="hover:shadow-lg hover:border-hnl-red transition-all">
                    <CardHeader>
                      <Icon className="w-10 h-10 text-hnl-red mb-3" />
                      <CardTitle className="text-lg">{download.title}</CardTitle>
                      <CardDescription className="text-sm">{download.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{download.type}</span>
                        <span>{download.size}</span>
                      </div>
                      <Button className="w-full bg-hnl-red hover:bg-hnl-red-dark gap-2" size="sm">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
