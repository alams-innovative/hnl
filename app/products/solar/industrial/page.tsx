import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { CheckCircle2, Zap, Shield, TrendingUp, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Industrial Solar Systems - Large-Scale Renewable Energy | HNL",
  description:
    "Industrial-scale solar power solutions for factories, warehouses, and manufacturing facilities in Pakistan. Multi-MW systems with maximum ROI and energy independence.",
  keywords:
    "industrial solar, factory solar power, warehouse solar, manufacturing solar, large scale solar Pakistan, MW solar systems",
}

export default function IndustrialSolarPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Solar Energy", href: "/products/solar" },
    { label: "Industrial Solar Systems", href: "/products/solar/industrial" },
  ]

  const features = [
    {
      icon: Zap,
      title: "Multi-MW Capacity",
      description: "Large-scale installations from 500 kW to 10+ MW for heavy industrial loads",
    },
    {
      icon: TrendingUp,
      title: "Maximum ROI",
      description: "Typical payback period of 3-5 years with 25+ year system lifespan",
    },
    {
      icon: Shield,
      title: "Grid Stability",
      description: "Advanced inverters with grid support functions and reactive power control",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Real-time performance tracking with predictive maintenance alerts",
    },
    {
      icon: Award,
      title: "Tier 1 Components",
      description: "Premium modules and inverters from world-leading manufacturers",
    },
    {
      icon: CheckCircle2,
      title: "Turnkey Solutions",
      description: "Complete EPC service from design to commissioning and O&M",
    },
  ]

  const systems = [
    {
      name: "500 kW Industrial System",
      capacity: "500 kW",
      production: "~0.75 Million kWh/year",
      panels: "1,250 x 400W modules",
      inverters: "500 kW central inverter",
      area: "~3,000 sqm",
      ideal: "Medium factories, processing plants",
    },
    {
      name: "1 MW Industrial System",
      capacity: "1 MW (1,000 kW)",
      production: "~1.5 Million kWh/year",
      panels: "2,500 x 400W modules",
      inverters: "1 MW central inverter",
      area: "~6,000 sqm",
      ideal: "Large factories, cement plants",
    },
    {
      name: "2 MW Industrial System",
      capacity: "2 MW (2,000 kW)",
      production: "~3 Million kWh/year",
      panels: "5,000 x 400W modules",
      inverters: "2x 1 MW inverters",
      area: "~12,000 sqm",
      ideal: "Steel mills, textile facilities",
    },
    {
      name: "5 MW Industrial System",
      capacity: "5 MW (5,000 kW)",
      production: "~7.5 Million kWh/year",
      panels: "12,500 x 400W modules",
      inverters: "5x 1 MW inverters",
      area: "~30,000 sqm",
      ideal: "Large manufacturing complexes",
    },
    {
      name: "10 MW+ Utility Scale",
      capacity: "10+ MW",
      production: "~15 Million+ kWh/year",
      panels: "25,000+ x 400W modules",
      inverters: "Multiple MW-class units",
      area: "~60,000+ sqm",
      ideal: "Industrial parks, mega facilities",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="Industrial Solar Systems"
        subtitle="Multi-MW renewable energy solutions for Pakistan's industrial sector"
        description="Power your factory, warehouse, or manufacturing facility with large-scale solar installations designed for maximum energy production and ROI. From 500 kW to 10+ MW systems."
        backgroundImage="/images/hero-industrial-solar.jpg"
        primaryCTA={{ text: "Request Industrial Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "View Specifications", href: "/products/specifications/technical" }}
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Why Choose Industrial Solar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce electricity costs by 60-80%, achieve energy independence, and meet sustainability goals with proven
              solar technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #1f2937 100%)",
                }}
                className="group p-8 rounded-2xl border border-red-800 hover:border-red-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Solar Systems */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Industrial Solar Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable solar systems designed for heavy industrial loads and 24/7 operations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left font-semibold">System</th>
                  <th className="px-6 py-4 text-left font-semibold">Capacity</th>
                  <th className="px-6 py-4 text-left font-semibold">Annual Production</th>
                  <th className="px-6 py-4 text-left font-semibold">Solar Panels</th>
                  <th className="px-6 py-4 text-left font-semibold">Inverters</th>
                  <th className="px-6 py-4 text-left font-semibold">Required Area</th>
                  <th className="px-6 py-4 text-left font-semibold">Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {systems.map((system, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-black">{system.name}</td>
                    <td className="px-6 py-4 text-gray-700">{system.capacity}</td>
                    <td className="px-6 py-4 text-gray-700">{system.production}</td>
                    <td className="px-6 py-4 text-gray-700">{system.panels}</td>
                    <td className="px-6 py-4 text-gray-700">{system.inverters}</td>
                    <td className="px-6 py-4 text-gray-700">{system.area}</td>
                    <td className="px-6 py-4 text-gray-700">{system.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              All systems include tier 1 solar panels, inverters, mounting structures, cables, and complete
              installation.
            </p>
            <Link
              href="/contact/quote"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-hnl-red transition-colors font-semibold"
            >
              Get Custom Industrial Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ROI & Financial Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-black">Financial Benefits</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-200">
                <div className="text-5xl font-bold text-green-600 mb-4">60-80%</div>
                <h3 className="text-xl font-bold mb-2 text-black">Electricity Cost Reduction</h3>
                <p className="text-gray-600">
                  Dramatically reduce your monthly utility bills with clean solar energy during peak production hours.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200">
                <div className="text-5xl font-bold text-blue-600 mb-4">3-5 Years</div>
                <h3 className="text-xl font-bold mb-2 text-black">Typical Payback Period</h3>
                <p className="text-gray-600">
                  Fast return on investment with 25+ year system lifespan providing decades of free electricity.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-200">
                <div className="text-5xl font-bold text-purple-600 mb-4">25+ Years</div>
                <h3 className="text-xl font-bold mb-2 text-black">System Lifespan</h3>
                <p className="text-gray-600">
                  Premium components ensure decades of reliable performance with minimal degradation.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-200">
                <div className="text-5xl font-bold text-orange-600 mb-4">100%</div>
                <h3 className="text-xl font-bold mb-2 text-black">Energy Independence</h3>
                <p className="text-gray-600">
                  Protect against grid outages and rising electricity rates with on-site power generation.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Example: 1 MW Factory Installation</h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Annual Energy Production:</span>
                  <span className="font-bold">1.5 Million kWh</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Savings (@ PKR 30/kWh):</span>
                  <span className="font-bold">45 Million PKR</span>
                </div>
                <div className="flex justify-between">
                  <span>System Investment:</span>
                  <span className="font-bold">150 Million PKR</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-3 mt-3">
                  <span>Simple Payback Period:</span>
                  <span className="font-bold text-green-400">3.3 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-black">System Components</h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hnl-red to-red-700 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  Solar Panels
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tier 1 monocrystalline modules (400-550W) from leading manufacturers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>25-year linear power output warranty with minimal degradation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>High efficiency (20-22%) optimized for Pakistan climate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Certified for extreme weather conditions (IEC 61215, IEC 61730)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hnl-red to-red-700 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  Central Inverters
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Commercial-grade central inverters (500 kW - 2 MW+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced grid support functions and reactive power control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Peak efficiency &gt;98% with wide MPPT voltage range</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Built-in monitoring and remote diagnostics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hnl-red to-red-700 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  Mounting & Installation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hot-dip galvanized steel structures designed for 150 km/h winds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Rooftop or ground-mount configurations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional ballast or penetration mounting systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complete civil, electrical, and mechanical installation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
