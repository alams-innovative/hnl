import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Award, Shield, Gauge, ArrowRight, Download } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Diesel Generators | AGG Power Generators 10-2750 kVA | HNL",
  description:
    "HNL is the authorized sole distributor of AGG Power diesel generators in Pakistan. Explore our complete range from 10 kVA to 2750 kVA with Perkins engines.",
}

const generatorSeries = [
  {
    series: "A Series Small",
    range: "16.5-150 kVA",
    description:
      "Compact diesel generators ideal for small commercial and residential applications with reliable Perkins engines.",
    href: "/products/generators/a-series-small",
    models: "9 models",
    engine: "Perkins 400/1100 Series",
  },
  {
    series: "A Series Medium",
    range: "165-388 kVA",
    description: "Medium capacity generators for commercial buildings, hotels, and mid-size industrial facilities.",
    href: "/products/generators/a-series-medium",
    models: "6 models",
    engine: "Perkins 1100/1700/2200 Series",
  },
  {
    series: "P Series Small",
    range: "10-220 kVA",
    description:
      "Versatile small-capacity Perkins-powered generators for diverse applications from backup to prime power.",
    href: "/products/generators/p-series-small",
    models: "14 models",
    engine: "Perkins 400/1100 Series",
  },
  {
    series: "P Series Medium",
    range: "250-825 kVA",
    description:
      "Industrial-grade medium capacity generators for manufacturing, healthcare, and data center applications.",
    href: "/products/generators/p-series-medium",
    models: "14 models",
    engine: "Perkins 1200/1500/2500/2800 Series",
  },
  {
    series: "P Series Large",
    range: "825-2750 kVA",
    description: "Heavy-duty generators for large industrial, mining, and mission-critical power applications.",
    href: "/products/generators/p-series-large",
    models: "15 models",
    engine: "Perkins 4000 Series",
  },
]

export default function GeneratorsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold">Authorized Sole Distributor</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AGG Power Diesel Generators</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                HNL is the authorized sole distributor of AGG Power Technology in Pakistan, offering world-class diesel
                generator sets from 10 kVA to 2750 kVA powered by legendary Perkins engines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Request Quote
                </Link>
                <Link
                  href="/products/specifications/technical"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Specs
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <img src="/images/image.png" alt="AGG Power Diesel Generator" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Authorized Distributor</p>
                <p className="text-sm text-gray-600">Official AGG Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Perkins Engines</p>
                <p className="text-sm text-gray-600">UK Engineering</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">10-2750 kVA</p>
                <p className="text-sm text-gray-600">Complete Range</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Fast Delivery</p>
                <p className="text-sm text-gray-600">Fastest in Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Series */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Generator Series</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of diesel generators designed for every application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generatorSeries.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {item.series}
                    </h3>
                    <p className="text-2xl font-bold text-primary mt-1">{item.range}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{item.models}</span>
                  <span className="text-gray-500">{item.engine}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Selecting the Right Generator?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our power experts can help you determine the optimal generator capacity for your specific requirements.
          </p>
          <Link
            href="/contact/quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
