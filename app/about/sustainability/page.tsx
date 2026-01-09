import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Leaf, Zap, Recycle, TreePine, Droplets, Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainability & Environmental Commitment | HNL Pakistan",
  description:
    "HNL's commitment to sustainable infrastructure development in Pakistan. ISO 14001 certified with green energy solutions, waste reduction, and environmental conservation initiatives.",
}

export default function SustainabilityPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sustainability", href: "/about/sustainability" },
  ]

  const initiatives = [
    {
      title: "Renewable Energy Integration",
      icon: Sun,
      description:
        "Deploying hybrid power systems combining solar, wind, and battery storage across telecom towers, reducing diesel dependency by up to 60% and cutting carbon emissions significantly.",
      impact: "15,000+ tons CO₂ reduction annually",
    },
    {
      title: "Energy-Efficient Infrastructure",
      icon: Zap,
      description:
        "Installing high-efficiency generators, LED lighting for telecom sites, and smart power management systems that optimize energy consumption across Pakistan's network infrastructure.",
      impact: "30% energy savings per site",
    },
    {
      title: "Waste Management & Recycling",
      icon: Recycle,
      description:
        "Comprehensive waste management programs for electronic waste, used batteries, and construction materials with proper recycling and disposal following EPA guidelines.",
      impact: "85% waste recycled or properly disposed",
    },
    {
      title: "Green Construction Practices",
      icon: TreePine,
      description:
        "Minimizing environmental footprint during fiber rollout and civil works through careful route planning, soil conservation, and restoration of affected areas post-construction.",
      impact: "100% site restoration compliance",
    },
    {
      title: "Water Conservation",
      icon: Droplets,
      description:
        "Implementing water-saving measures at generator installations and construction sites, with rainwater harvesting systems at HNL facilities across Pakistan.",
      impact: "40% reduction in water usage",
    },
    {
      title: "Paperless Operations",
      icon: Leaf,
      description:
        "Digital transformation of business processes with cloud-based documentation, e-signatures, and mobile apps eliminating paper consumption across operations and field services.",
      impact: "90% paperless operations achieved",
    },
  ]

  const commitments = [
    {
      category: "Carbon Neutrality",
      target: "2030",
      description:
        "Achieve net-zero carbon emissions across all operations through renewable energy and offsetting programs",
    },
    {
      category: "Renewable Energy",
      target: "2027",
      description: "70% of deployed power systems to incorporate solar or hybrid renewable energy components",
    },
    {
      category: "Waste Reduction",
      target: "2026",
      description: "Zero waste to landfill policy with 100% recycling or proper disposal of operational waste",
    },
    {
      category: "Green Fleet",
      target: "2028",
      description: "Transition 50% of vehicle fleet to electric or hybrid vehicles reducing transportation emissions",
    },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: "url('/images/hero-about-company.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="h-12 w-12 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Sustainability & Environment</h1>
          </div>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
            Building Pakistan's infrastructure responsibly with commitment to environmental conservation and sustainable
            development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Environmental Commitment</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At HNL, we recognize that infrastructure development must go hand-in-hand with environmental
              responsibility. Our ISO 14001:2015 certified environmental management system ensures every project—from
              fiber rollout to power system deployment—minimizes ecological impact while supporting Pakistan's
              sustainable development goals.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We're actively transitioning Pakistan's telecom and energy infrastructure toward renewable energy, reduced
              emissions, and circular economy principles that benefit both our clients and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability Initiatives</h2>
              <p className="text-gray-600 text-lg">
                Active programs reducing environmental impact across Pakistan's infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative) => {
                const Icon = initiative.icon
                return (
                  <div
                    key={initiative.title}
                    className="bg-white border border-green-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg flex-1">{initiative.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{initiative.description}</p>
                    <div className="pt-4 border-t border-green-100">
                      <div className="text-xs font-medium text-green-700 uppercase tracking-wide mb-1">Impact</div>
                      <div className="text-sm font-semibold text-green-900">{initiative.impact}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability Goals & Targets</h2>
              <p className="text-gray-600 text-lg">
                Measurable commitments toward environmental excellence in infrastructure development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment.category}
                  className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-green-100">{commitment.target}</div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">
                      TARGET {commitment.target}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{commitment.category}</h3>
                    <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Environmental Certifications</h2>
            <p className="text-green-100 text-lg mb-12">
              Third-party validated environmental management and compliance
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">ISO 14001:2015</h3>
                <p className="text-green-100 text-sm">Environmental Management System Certification</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">EPA Approved</h3>
                <p className="text-green-100 text-sm">Pakistan Environmental Protection Agency Compliance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Waste Management</h3>
                <p className="text-green-100 text-sm">Certified E-Waste and Hazardous Material Handling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Sustainably Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
                SUSTAINABLE PARTNERSHIP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Sustainably with HNL</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Partner with Pakistan's environmentally responsible infrastructure provider committed to sustainable
                development, reduced carbon footprint, and green energy solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Green Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  Every project designed with environmental impact in mind, from route planning to waste management
                </p>
              </div>
              <div className="text-center p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Renewable Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Solar hybrid systems, battery storage, and energy-efficient equipment reducing carbon emissions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Circular Economy</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive recycling programs and responsible disposal ensuring minimal environmental footprint
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1">15,000+</div>
                  <div className="text-sm text-gray-600">Tons CO₂ Reduced</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Diesel Dependency Cut</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Waste Recycled</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1">2030</div>
                  <div className="text-sm text-gray-600">Carbon Neutral Target</div>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Interested in sustainable infrastructure solutions? Our environmental team is ready to discuss green
                alternatives for your next project.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:sustainability@hnl.com.pk" className="text-green-600 hover:underline">
                    sustainability@hnl.com.pk
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+924235761999" className="text-green-600 hover:underline">
                    +92 42 3576 1999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
