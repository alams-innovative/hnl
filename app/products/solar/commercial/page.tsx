import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Sun, Building2, TrendingDown, Zap, Shield, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Solar Solutions | Business Solar Power | HNL",
  description:
    "Enterprise solar systems for businesses, factories, and commercial facilities in Pakistan. Reduce operating costs by 70% with scalable solar solutions.",
}

export default function CommercialSolarPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Solar Energy", href: "/products/solar" },
    { label: "Commercial Solar", href: "/products/solar/commercial" },
  ]

  const solutions = [
    {
      category: "Small Business",
      capacity: "20-50 kW",
      idealFor: "Retail stores, Restaurants, Offices",
      monthlyGeneration: "3,000-7,000 kWh",
      savings: "0.3M - 0.7M PKR/month",
      payback: "2.5-3 years",
    },
    {
      category: "Medium Enterprise",
      capacity: "100-300 kW",
      idealFor: "Hotels, Hospitals, Warehouses",
      monthlyGeneration: "15,000-45,000 kWh",
      savings: "1.5M - 4.5M PKR/month",
      payback: "2-2.5 years",
    },
    {
      category: "Large Industrial",
      capacity: "500+ kW",
      idealFor: "Factories, Manufacturing, Data Centers",
      monthlyGeneration: "75,000+ kWh",
      savings: "7.5M+ PKR/month",
      payback: "1.5-2 years",
    },
  ]

  const features = [
    {
      icon: TrendingDown,
      title: "70% Cost Reduction",
      description: "Dramatically lower operational expenses with commercial-scale solar generation",
    },
    {
      icon: Building2,
      title: "Scalable Design",
      description: "Modular systems that grow with your business needs and expansion plans",
    },
    {
      icon: Shield,
      title: "Tax Benefits",
      description: "Qualify for government incentives, accelerated depreciation, and tax credits",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Enterprise-grade monitoring with detailed ROI tracking and reporting",
    },
    {
      icon: Zap,
      title: "Peak Shaving",
      description: "Reduce demand charges during peak hours with battery storage integration",
    },
    {
      icon: Sun,
      title: "Green Certification",
      description: "Earn LEED credits and enhance corporate sustainability credentials",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="Commercial Solar Solutions"
        description="Power your business with enterprise-grade solar systems. Reduce operating costs, enhance sustainability, and achieve energy independence for your commercial facility."
        primaryCTA={{ text: "Request Business Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Case Studies", href: "/case-studies" }}
        backgroundImage="/images/hero-commercial-solar.jpg"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Enterprise Solar Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your bottom line with commercial solar that pays for itself in under 3 years
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

      {/* Solutions Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Commercial Solar Solutions
            </h2>
            <p className="text-lg text-gray-600">Customized systems for every business size and energy requirement</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">System Capacity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Ideal For</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Monthly Generation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Est. Savings</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Payback Period</th>
                </tr>
              </thead>
              <tbody>
                {solutions.map((solution, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-amber-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{solution.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{solution.capacity}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{solution.idealFor}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{solution.monthlyGeneration}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{solution.savings}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{solution.payback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Turnkey Solution Includes:</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Site survey and energy audit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Custom system design and engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Tier-1 solar panels with 25-year warranty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Industrial-grade inverters and mounting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Complete installation and commissioning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Net metering application and approval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>10-year O&M contract with monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Performance guarantee and insurance</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a
                href="/contact/quote"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Site Survey
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
