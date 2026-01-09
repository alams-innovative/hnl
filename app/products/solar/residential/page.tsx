import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Sun, Battery, Zap, Home, TrendingDown, Shield } from "lucide-react"
import SolarCalculatorClient from "@/components/solar-calculator-client"

export const metadata: Metadata = {
  title: "Residential Solar Systems | Home Solar Solutions | HNL",
  description:
    "Complete residential solar power systems for Pakistani homes. Reduce electricity bills by up to 90% with net metering and battery backup options.",
}

export default function ResidentialSolarPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Solar Energy", href: "/products/solar" },
    { label: "Residential Solar", href: "/products/solar/residential" },
  ]

  const features = [
    {
      icon: TrendingDown,
      title: "Energy Independence",
      description: "Break free from rising electricity costs and load shedding with your own clean energy",
    },
    {
      icon: Battery,
      title: "Battery Backup",
      description: "Optional lithium battery storage for uninterrupted power during outages and night usage",
    },
    {
      icon: Sun,
      title: "25-Year Performance",
      description: "Premium tier-1 solar panels with guaranteed performance warranty for 25 years",
    },
    {
      icon: Home,
      title: "Professional Installation",
      description: "Expert rooftop installation completed in 2-3 days with minimal disruption",
    },
    {
      icon: Shield,
      title: "Net Metering Ready",
      description: "Sell excess electricity back to the grid and earn credits on your bill",
    },
    {
      icon: Zap,
      title: "Smart Monitoring",
      description: "Mobile app to track generation, consumption, and savings in real-time",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="Residential Solar Systems"
        description="Transform your home with clean, renewable solar energy. Invest in your future while contributing to Pakistan's green economy and environmental sustainability."
        primaryCTA={{ text: "Calculate Your Solar Needs", href: "#calculator" }}
        secondaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        backgroundImage="/images/hero-residential-solar.jpg"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Solar for Your Home?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of Pakistani families creating value, saving money, and protecting the environment with
              solar power
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
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

      {/* Solar Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Solar System Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Calculate your exact solar requirements based on your home appliances and energy consumption
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <SolarCalculatorClient />
          </div>
        </div>
      </section>

      {/* Sample Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Sample Solar Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our popular configurations - Get a customized quote based on your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Compact Home",
                capacity: "3-5 kW",
                coverage: "2-3 bedroom apartment",
                appliances: "5-8 lights, 2-3 fans, TV, fridge, washing machine",
                panels: "8-14 panels",
                inverter: "3-5 kW hybrid",
                battery: "5-10 kWh (optional)",
              },
              {
                name: "Standard Home",
                capacity: "5-8 kW",
                coverage: "3-4 bedroom house",
                appliances: "10-15 lights, 4-6 fans, 2 ACs, TV, fridge, appliances",
                panels: "14-22 panels",
                inverter: "5-8 kW hybrid",
                battery: "10-15 kWh (optional)",
              },
              {
                name: "Large Villa",
                capacity: "10-15 kW",
                coverage: "5+ bedroom villa/mansion",
                appliances: "20+ lights, 8+ fans, 4+ ACs, multiple TVs, heavy appliances",
                panels: "27-40 panels",
                inverter: "10-15 kW hybrid",
                battery: "15-30 kWh (optional)",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-amber-50 text-sm">{plan.capacity} System</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ideal For</p>
                    <p className="text-gray-900 font-semibold">{plan.coverage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Typical Appliances</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{plan.appliances}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Solar Panels:</span>
                      <span className="text-gray-900 font-medium">{plan.panels}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Inverter:</span>
                      <span className="text-gray-900 font-medium">{plan.inverter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Battery:</span>
                      <span className="text-gray-900 font-medium">{plan.battery}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a
                      href="/contact/quote"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Request Custom Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Why Quote-Based Pricing?</h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Every home is unique! Your final system cost depends on your roof type, location, energy needs, battery
              requirements, and current electricity bills. We provide transparent, customized quotes that ensure you get
              the perfect system for your specific situation - no hidden costs, just honest value.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-gray-900 mb-1">✓ Includes Installation</p>
                <p className="text-gray-600">Professional setup & commissioning</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-gray-900 mb-1">✓ Net Metering Support</p>
                <p className="text-gray-600">Complete application assistance</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-gray-900 mb-1">✓ Warranty & Support</p>
                <p className="text-gray-600">5-25 year comprehensive coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
