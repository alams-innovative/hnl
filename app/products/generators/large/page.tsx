import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Gauge, Clock, Shield, TrendingUp, Radio, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "500-2000 kVA Generators | Heavy Industrial Power | HNL",
  description:
    "Enterprise-grade 500-2000 kVA diesel generators for large industrial plants, data centers, and critical infrastructure in Pakistan. Mission-critical reliability.",
}

export default function LargeGeneratorsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "500-2000 kVA", href: "/products/generators/large" },
  ]

  const models = [
    {
      model: "HNL-DG-625",
      power: "625 kVA",
      fuelConsumption: "135.9 L/hr",
      noiseLevel: "83 dB(A)",
      dimensions: "6000 x 2200 x 2700 mm",
      weight: "10500 kg",
      applications: "Heavy industry, Large data centers",
    },
    {
      model: "HNL-DG-800",
      power: "800 kVA",
      fuelConsumption: "174.0 L/hr",
      noiseLevel: "84 dB(A)",
      dimensions: "6800 x 2400 x 2900 mm",
      weight: "13200 kg",
      applications: "Manufacturing plants, Refineries",
    },
    {
      model: "HNL-DG-1000",
      power: "1000 kVA",
      fuelConsumption: "217.5 L/hr",
      noiseLevel: "85 dB(A)",
      dimensions: "7500 x 2600 x 3100 mm",
      weight: "16800 kg",
      applications: "Power plants, Mining operations",
    },
    {
      model: "HNL-DG-1500",
      power: "1500 kVA",
      fuelConsumption: "326.3 L/hr",
      noiseLevel: "86 dB(A)",
      dimensions: "9000 x 3000 x 3500 mm",
      weight: "24500 kg",
      applications: "Industrial complexes, Utilities",
    },
    {
      model: "HNL-DG-2000",
      power: "2000 kVA",
      fuelConsumption: "435.0 L/hr",
      noiseLevel: "87 dB(A)",
      dimensions: "10500 x 3200 x 3800 mm",
      weight: "32000 kg",
      applications: "Critical infrastructure, Grid support",
    },
  ]

  const features = [
    {
      icon: Radio,
      title: "Mission Critical",
      description: "99.99% uptime with redundant systems for zero-tolerance applications",
    },
    {
      icon: Shield,
      title: "Military Grade",
      description: "Ruggedized construction meeting international defense standards",
    },
    {
      icon: Layers,
      title: "Modular Design",
      description: "Scalable architecture supporting N+1 redundancy configurations",
    },
    {
      icon: Clock,
      title: "Continuous Operation",
      description: "Designed for 24/7 baseload operation with 2000-hour service intervals",
    },
    {
      icon: Gauge,
      title: "Advanced Controls",
      description: "PLC-based control systems with SCADA integration capability",
    },
    {
      icon: TrendingUp,
      title: "Predictive Maintenance",
      description: "AI-powered analytics for proactive maintenance scheduling",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="500-2000 kVA Generators"
        description="Enterprise-class diesel generators engineered for mission-critical applications, heavy industrial operations, and large-scale infrastructure projects across Pakistan."
        primaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Specs", href: "/products/specifications/technical" }}
        backgroundImage="/images/hero-large-generators.jpg"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Mission-Critical Power Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for zero-downtime applications with military-grade reliability and advanced monitoring
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
            <p className="text-lg text-gray-600">Enterprise range from 500 to 2000 kVA for critical infrastructure</p>
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
              All models include comprehensive warranty, turnkey installation, SCADA integration, and dedicated support
              team.
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
