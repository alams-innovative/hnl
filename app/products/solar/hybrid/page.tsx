import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Sun, Zap, Battery, RefreshCw, Shield, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Hybrid Solar + Generator Systems | Best of Both Worlds | HNL",
  description:
    "Hybrid power systems combining solar panels with diesel generators and battery storage. Ultimate reliability with maximum fuel savings for Pakistan.",
}

export default function HybridSolarPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Solar Energy", href: "/products/solar" },
    { label: "Hybrid Systems", href: "/products/solar/hybrid" },
  ]

  const configurations = [
    {
      name: "Residential Hybrid",
      solar: "5-10 kW",
      generator: "10-20 kVA",
      battery: "10-15 kWh",
      ideal: "Homes in load-shedding areas",
      savings: "85% fuel reduction",
      price: "0.95M - 1.65M PKR",
    },
    {
      name: "Commercial Hybrid",
      solar: "50-200 kW",
      generator: "100-300 kVA",
      battery: "50-100 kWh",
      ideal: "Offices, Hotels, Hospitals",
      savings: "70% fuel reduction",
      price: "6M - 20M PKR",
    },
    {
      name: "Industrial Hybrid",
      solar: "500+ kW",
      generator: "500-2000 kVA",
      battery: "200-500 kWh",
      ideal: "Factories, Data Centers",
      savings: "60% fuel reduction",
      price: "35M+ PKR",
    },
  ]

  const features = [
    {
      icon: RefreshCw,
      title: "Intelligent Switching",
      description: "Automatically prioritizes solar, then battery, then generator for optimal efficiency",
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Lithium battery banks store excess solar for nighttime use and backup power",
    },
    {
      icon: TrendingUp,
      title: "Peak Performance",
      description: "Solar handles daytime loads while generator provides backup during extended outages",
    },
    {
      icon: Shield,
      title: "Uninterrupted Power",
      description: "Zero-transfer switching ensures continuous power during source transitions",
    },
    {
      icon: Sun,
      title: "Maximum Solar Use",
      description: "Harvest every watt of solar energy to minimize generator runtime and fuel costs",
    },
    {
      icon: Zap,
      title: "Grid Synchronization",
      description: "Seamlessly works with utility power when available for triple redundancy",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="Hybrid Solar + Generator Systems"
        description="Get the best of both worlds with hybrid systems that combine solar efficiency with generator reliability. Perfect for areas with unreliable grid power across Pakistan."
        primaryCTA={{ text: "Design My Hybrid System", href: "/contact/quote" }}
        secondaryCTA={{ text: "See Case Studies", href: "/case-studies" }}
        backgroundImage="/images/hero-hybrid-solar.jpg"
      />

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How Hybrid Systems Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Intelligent energy management prioritizes the most efficient and cost-effective power source
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Solar First</h3>
              <p className="text-sm text-gray-600">
                System uses solar power during daylight hours to run loads and charge batteries
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Battery Backup</h3>
              <p className="text-sm text-gray-600">
                When solar is insufficient, battery storage seamlessly powers your facility
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Generator Support</h3>
              <p className="text-sm text-gray-600">
                Generator only runs when battery is depleted or during peak demand periods
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Grid Integration</h3>
              <p className="text-sm text-gray-600">
                When grid power is available and cheap, system can supplement or switch automatically
              </p>
            </div>
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

      {/* Configurations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Hybrid System Configurations
            </h2>
            <p className="text-lg text-gray-600">
              Tailored solutions for residential, commercial, and industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {configurations.map((config, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
                  <h3 className="text-2xl font-bold text-white">{config.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Solar Capacity</p>
                    <p className="text-gray-900 font-semibold">{config.solar}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Generator Backup</p>
                    <p className="text-gray-900 font-semibold">{config.generator}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Battery Storage</p>
                    <p className="text-gray-900 font-semibold">{config.battery}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Ideal For</p>
                    <p className="text-gray-900 font-semibold">{config.ideal}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Fuel Savings</p>
                    <p className="text-2xl font-bold text-green-600">{config.savings}</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-600">Investment Range</p>
                    <p className="text-xl font-bold text-gray-900">{config.price}</p>
                  </div>
                  <a
                    href="/contact/quote"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Hybrid Over Solar-Only or Generator-Only?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">vs. Solar-Only Systems:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Power available 24/7, even during cloudy weather or at night</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>No grid dependency for net metering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Handles heavy loads that exceed solar capacity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">vs. Generator-Only Systems:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>60-85% reduction in diesel fuel consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Lower maintenance costs and longer generator life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Environmentally friendly with reduced emissions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="/contact/quote"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Design My Custom Hybrid System
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
