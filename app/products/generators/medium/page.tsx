import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Gauge, Clock, Shield, TrendingUp, Factory, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "100-500 kVA Generators | Medium Power Solutions | HNL",
  description:
    "Industrial-grade 100-500 kVA diesel generators for factories, hotels, hospitals, and commercial facilities in Pakistan. EPA-certified with advanced monitoring.",
}

export default function MediumGeneratorsPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "100-500 kVA", href: "/products/generators/medium" },
  ]

  const models = [
    {
      model: "HNL-DG-125",
      power: "125 kVA",
      fuelConsumption: "27.3 L/hr",
      noiseLevel: "76 dB(A)",
      dimensions: "3000 x 1200 x 1650 mm",
      weight: "2100 kg",
      applications: "Medium factories, Shopping centers",
    },
    {
      model: "HNL-DG-200",
      power: "200 kVA",
      fuelConsumption: "43.5 L/hr",
      noiseLevel: "78 dB(A)",
      dimensions: "3500 x 1400 x 1850 mm",
      weight: "3200 kg",
      applications: "Large hotels, Hospitals",
    },
    {
      model: "HNL-DG-300",
      power: "300 kVA",
      fuelConsumption: "65.2 L/hr",
      noiseLevel: "80 dB(A)",
      dimensions: "4200 x 1600 x 2100 mm",
      weight: "4800 kg",
      applications: "Data centers, Manufacturing",
    },
    {
      model: "HNL-DG-400",
      power: "400 kVA",
      fuelConsumption: "87.0 L/hr",
      noiseLevel: "81 dB(A)",
      dimensions: "4800 x 1800 x 2300 mm",
      weight: "6500 kg",
      applications: "Industrial plants, Universities",
    },
    {
      model: "HNL-DG-500",
      power: "500 kVA",
      fuelConsumption: "108.7 L/hr",
      noiseLevel: "82 dB(A)",
      dimensions: "5400 x 2000 x 2500 mm",
      weight: "8200 kg",
      applications: "Large facilities, Telecom towers",
    },
  ]

  const features = [
    {
      icon: Factory,
      title: "Industrial Grade",
      description: "Heavy-duty construction for continuous operation in demanding environments",
    },
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Multi-level safety systems with automatic shutdown and fault detection",
    },
    {
      icon: Gauge,
      title: "Load Management",
      description: "Intelligent load balancing for optimal performance and fuel efficiency",
    },
    {
      icon: Clock,
      title: "Extended Runtime",
      description: "1000-hour service intervals with robust components for minimal downtime",
    },
    {
      icon: Building2,
      title: "Parallel Capability",
      description: "Can operate in parallel configuration for scalable power solutions",
    },
    {
      icon: TrendingUp,
      title: "Remote Monitoring",
      description: "Cloud-based monitoring system for real-time performance tracking",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="100-500 kVA Generators"
        description="Industrial-strength diesel generators designed for medium to large commercial and industrial facilities requiring reliable, continuous power across Pakistan."
        primaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Specs", href: "/products/specifications/technical" }}
        backgroundImage="/images/hero-medium-generators.jpg"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Industrial-Grade Reliability
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built for demanding commercial and industrial applications with advanced features and monitoring
              capabilities
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
            <p className="text-lg text-gray-600">Professional range from 100 to 500 kVA for industrial applications</p>
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
              All models include EPA certification, 3-year warranty, installation, commissioning, and 24/7 support.
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
