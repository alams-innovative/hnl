import type { Metadata } from "next"
import Link from "next/link"
import { Sun, Home, Building2, Factory, Battery, ArrowRight } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Solar Energy Solutions | Residential, Commercial & Industrial Solar | HNL",
  description:
    "Complete solar power solutions for homes, businesses, and industries in Pakistan. Tier-1 solar panels, premium inverters, and turnkey installation services.",
}

const solarSolutions = [
  {
    title: "Residential Solar",
    description:
      "Home solar systems from 3kW to 15kW designed to reduce your electricity bills by up to 90% with net metering support.",
    icon: Home,
    href: "/products/solar/residential",
    capacity: "3-15 kW",
    savings: "Up to 90% bill reduction",
    payback: "2-3 years",
  },
  {
    title: "Commercial Solar",
    description:
      "Enterprise solar systems for businesses, offices, and commercial facilities. Scalable solutions from 20kW to 500kW+.",
    icon: Building2,
    href: "/products/solar/commercial",
    capacity: "20-500+ kW",
    savings: "70% cost reduction",
    payback: "2-2.5 years",
  },
  {
    title: "Industrial Solar",
    description:
      "Large-scale solar power plants for factories, manufacturing units, and industrial complexes. MW-scale installations available.",
    icon: Factory,
    href: "/products/solar/industrial",
    capacity: "500kW - 10MW+",
    savings: "Massive operational savings",
    payback: "1.5-2 years",
  },
  {
    title: "Hybrid Solar Systems",
    description:
      "Solar + battery storage solutions for uninterrupted power supply. Perfect for areas with load shedding or unreliable grid.",
    icon: Battery,
    href: "/products/solar/hybrid",
    capacity: "5-100+ kW",
    savings: "Complete energy independence",
    payback: "3-4 years",
  },
]

export default function SolarPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Solar Energy", href: "/products/solar" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="h-8 w-8 text-white" />
              <span className="text-white/90 font-semibold">Clean Energy Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Solar Energy Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Harness the power of the sun with HNL's comprehensive solar solutions. From residential rooftops to
              industrial power plants, we deliver turnkey solar systems with Tier-1 panels and premium inverters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get Free Site Survey
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solar Solutions for Every Scale</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're a homeowner looking to cut electricity bills or an industrialist seeking energy
              independence, we have the right solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solarSolutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Link
                  key={index}
                  href={solution.href}
                  className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-amber-300 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all flex-shrink-0">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {solution.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-600 mt-2 mb-4">{solution.description}</p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Capacity</p>
                          <p className="font-semibold text-gray-900">{solution.capacity}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Savings</p>
                          <p className="font-semibold text-green-600">{solution.savings}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Payback</p>
                          <p className="font-semibold text-gray-900">{solution.payback}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solar Partners</h2>
            <p className="text-gray-600">We work with world-leading solar brands to deliver premium quality</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <span className="text-xl font-bold text-gray-400">LONGi</span>
            <span className="text-xl font-bold text-gray-400">JinKo Solar</span>
            <span className="text-xl font-bold text-gray-400">Canadian Solar</span>
            <span className="text-xl font-bold text-gray-400">Huawei</span>
            <span className="text-xl font-bold text-gray-400">Solis</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Solar?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a free site survey and get a customized solar proposal for your property.
          </p>
          <Link
            href="/contact/quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Schedule Free Survey
          </Link>
        </div>
      </section>
    </div>
  )
}
