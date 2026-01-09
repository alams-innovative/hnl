import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Sun, FileText, ArrowRight } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Products | Diesel Generators, Solar & Energy Solutions | HNL",
  description:
    "Explore HNL's comprehensive range of power solutions including AGG diesel generators, solar energy systems, battery storage, and DC power systems for industrial and commercial applications in Pakistan.",
}

const productCategories = [
  {
    title: "Diesel Generators",
    description:
      "AGG Power diesel generators from 10 kVA to 2750 kVA with Perkins engines. HNL is the authorized sole distributor of AGG Power in Pakistan.",
    icon: Zap,
    href: "/products/generators",
    products: [
      { name: "A Series Small (16.5-150 kVA)", href: "/products/generators/a-series-small" },
      { name: "A Series Medium (165-388 kVA)", href: "/products/generators/a-series-medium" },
      { name: "P Series Small (10-220 kVA)", href: "/products/generators/p-series-small" },
      { name: "P Series Medium (250-825 kVA)", href: "/products/generators/p-series-medium" },
      { name: "P Series Large (825-2750 kVA)", href: "/products/generators/p-series-large" },
    ],
  },
  {
    title: "Solar Energy Solutions",
    description:
      "Complete solar power systems for residential, commercial, and industrial applications with Tier-1 panels and premium inverters.",
    icon: Sun,
    href: "/products/solar",
    products: [
      { name: "Residential Solar", href: "/products/solar/residential" },
      { name: "Commercial Solar", href: "/products/solar/commercial" },
      { name: "Industrial Solar", href: "/products/solar/industrial" },
      { name: "Hybrid Solar Systems", href: "/products/solar/hybrid" },
    ],
  },
  {
    title: "Technical Specifications",
    description:
      "Detailed technical documentation, EPA certifications, and performance specifications for all our products.",
    icon: FileText,
    href: "/products/specifications",
    products: [
      { name: "Technical Specs Library", href: "/products/specifications/technical" },
      { name: "EPA Certifications", href: "/products/specifications/epa" },
      { name: "Performance Data", href: "/products/specifications/performance" },
      { name: "Field Strength Analysis", href: "/products/specifications/field-strength" },
    ],
  },
]

export default function ProductsPage() {
  const breadcrumbItems = [{ label: "Products", href: "/products" }]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Power Solutions for Every Need</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From industrial diesel generators to cutting-edge solar energy systems, HNL provides comprehensive power
              solutions backed by world-class brands and local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {productCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex-shrink-0">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <Link href={category.href} className="group">
                          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                            {category.title}
                            <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </h2>
                        </Link>
                        <p className="text-gray-600 mb-6">{category.description}</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {category.products.map((product, productIndex) => (
                            <Link
                              key={productIndex}
                              href={product.href}
                              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 hover:bg-primary/10 text-gray-700 hover:text-primary text-sm font-medium transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Choosing the Right Solution?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our technical experts can help you select the perfect power solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
