import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Download, Shield, BarChart3, Zap, ArrowRight } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Technical Specifications | Product Documentation | HNL",
  description:
    "Access detailed technical specifications, EPA certifications, performance data, and documentation for HNL's diesel generators, solar systems, and power solutions.",
}

const specCategories = [
  {
    title: "Technical Specifications Library",
    description:
      "Comprehensive technical datasheets for all AGG generators, solar panels, inverters, and power systems. Download detailed specifications in PDF format.",
    icon: FileText,
    href: "/products/specifications/technical",
    items: ["Generator Datasheets", "Solar Panel Specs", "Inverter Documentation", "Battery Specifications"],
  },
  {
    title: "EPA Certifications",
    description:
      "Environmental compliance documentation and EPA certification details for our diesel generator range. Emission standards compliance verification.",
    icon: Shield,
    href: "/products/specifications/epa",
    items: ["EPA Tier Certifications", "Emission Standards", "Compliance Reports", "Environmental Data"],
  },
  {
    title: "Performance Data",
    description:
      "Real-world performance metrics, efficiency ratings, and operational data for informed decision-making on power solutions.",
    icon: BarChart3,
    href: "/products/specifications/performance",
    items: ["Fuel Consumption", "Power Output Curves", "Efficiency Ratings", "Load Performance"],
  },
  {
    title: "Field Strength Analysis",
    description:
      "Technical analysis and field performance data from installations across Pakistan. Site-specific considerations and recommendations.",
    icon: Zap,
    href: "/products/specifications/field-strength",
    items: ["Installation Data", "Field Reports", "Performance Analysis", "Site Assessments"],
  },
]

export default function SpecificationsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Specifications", href: "/products/specifications" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <span className="text-primary font-semibold">Documentation Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Specifications</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Access comprehensive technical documentation, certifications, and performance data for all HNL products.
              Download datasheets, review specifications, and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Specification Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {specCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href={category.href}
                  className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all flex-shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Downloads */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Downloads</h2>
            <p className="text-gray-600">Most requested technical documents</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              href="/products/specifications/technical"
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow transition-all"
            >
              <Download className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-700">Generator Catalog</span>
            </Link>
            <Link
              href="/products/specifications/technical"
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow transition-all"
            >
              <Download className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-700">Solar Brochure</span>
            </Link>
            <Link
              href="/products/specifications/epa"
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow transition-all"
            >
              <Download className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-700">EPA Certificates</span>
            </Link>
            <Link
              href="/resources/downloads"
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow transition-all"
            >
              <Download className="h-5 w-5 text-primary" />
              <span className="font-medium text-gray-700">All Downloads</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact our technical team for specific documentation or customized specifications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            Contact Technical Support
          </Link>
        </div>
      </section>
    </div>
  )
}
