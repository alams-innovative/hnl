import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Zap, Gauge, Clock, Wrench, Shield, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "10-100 kVA Generators | Small to Mid-Sized Power Solutions | HNL",
  description:
    "Reliable 10-100 kVA diesel generators for homes, small businesses, and remote sites in Pakistan. EPA-compliant with excellent fuel efficiency.",
}

export default function SmallGeneratorsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "10-100 kVA", href: "/products/generators/small" },
  ]

  const models = [
    {
      model: "HNL-DG-10",
      power: "10 kVA",
      fuelConsumption: "2.5 L/hr",
      noiseLevel: "68 dB(A)",
      dimensions: "1200 x 600 x 900 mm",
      weight: "350 kg",
      applications: "Homes, Small offices",
    },
    {
      model: "HNL-DG-25",
      power: "25 kVA",
      fuelConsumption: "5.8 L/hr",
      noiseLevel: "70 dB(A)",
      dimensions: "1600 x 750 x 1100 mm",
      weight: "620 kg",
      applications: "Retail shops, Clinics",
    },
    {
      model: "HNL-DG-50",
      power: "50 kVA",
      fuelConsumption: "11.2 L/hr",
      noiseLevel: "72 dB(A)",
      dimensions: "2200 x 900 x 1350 mm",
      weight: "980 kg",
      applications: "Restaurants, Warehouses",
    },
    {
      model: "HNL-DG-75",
      power: "75 kVA",
      fuelConsumption: "16.5 L/hr",
      noiseLevel: "74 dB(A)",
      dimensions: "2500 x 1000 x 1450 mm",
      weight: "1350 kg",
      applications: "Medium offices, Hotels",
    },
    {
      model: "HNL-DG-100",
      power: "100 kVA",
      fuelConsumption: "21.8 L/hr",
      noiseLevel: "75 dB(A)",
      dimensions: "2800 x 1100 x 1550 mm",
      weight: "1650 kg",
      applications: "Large facilities, Factories",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "EPA Certified",
      description: "Meets international emission standards for clean power generation",
    },
    {
      icon: Gauge,
      title: "Superior Efficiency",
      description: "Optimized fuel consumption reducing operational costs by up to 25%",
    },
    {
      icon: Clock,
      title: "Quick Start",
      description: "Auto-start capability within 10 seconds of power failure",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "500-hour service intervals with accessible components",
    },
    {
      icon: TrendingUp,
      title: "High Reliability",
      description: "99.8% uptime with proven track record across Pakistan",
    },
    {
      icon: Zap,
      title: "Smart Controls",
      description: "Digital control panel with remote monitoring capabilities",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="10-100 kVA Generators"
        description="Reliable small to mid-sized diesel generators perfect for residential, commercial, and light industrial applications across Pakistan."
        primaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Specs", href: "/products/specifications/technical" }}
        backgroundImage="/images/hero-small-generators.jpg"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Our Small Generators?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for Pakistan's challenging conditions with proven reliability and exceptional fuel efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Models Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Available Models
            </h2>
            <p className="text-lg text-gray-600">Comprehensive range from 10 to 100 kVA with detailed specifications</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Power Output</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Fuel Consumption</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Noise Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Dimensions</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Weight</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Applications</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{model.model}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.power}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.fuelConsumption}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.noiseLevel}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.dimensions}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.weight}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{model.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              All models are EPA-certified and come with 2-year warranty. Installation and commissioning included.
            </p>
            <a
              href="/contact/quote"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Request Detailed Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
