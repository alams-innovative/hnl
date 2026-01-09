import type { Metadata } from "next"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { Target, Rocket, Shield, Users, Zap, Globe, TrendingUp, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Vision & Mission | About HNL",
  description:
    "HNL's vision: Power Pakistan's digital and energy future. Our mission: Engineering excellence, client partnership, Pakistan-first commitment.",
}

export default function VisionMissionPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Vision & Mission", href: "/about/vision-mission" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section with Logo Integration */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Logo Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Image src="/images/r8.png" alt="" width={800} height={800} className="w-[600px] md:w-[800px]" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Image src="/images/r8.png" alt="HNL" width={60} height={60} className="w-14 h-14 md:w-16 md:h-16" />
              <div className="h-12 w-px bg-white/30" />
              <span className="text-sm md:text-base text-gray-300 uppercase tracking-widest font-medium">
                Energy Anytime Anywhere
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Vision <span className="text-hnl-red">&</span> Mission
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Building the infrastructure that powers Pakistan's growth—connecting communities, energizing industries,
              and transforming the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section - Full Width Impact */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-hnl-red/10 text-hnl-red text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Our Vision
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Power Pakistan's Digital & Energy Future
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                To be Pakistan's most trusted partner for mission-critical infrastructure—connecting millions through
                reliable networks, powering operations with sustainable energy, and accelerating digital transformation
                across every sector.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-hnl-red rounded-full" />
                  <span className="font-medium">Network Connectivity</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-hnl-red rounded-full" />
                  <span className="font-medium">Sustainable Energy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-hnl-red rounded-full" />
                  <span className="font-medium">Digital Transformation</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-300/50 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-gray-300/50 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gray-300/50 rounded-full" />
                </div>

                <Image
                  src="/images/r8.png"
                  alt="HNL Vision"
                  width={300}
                  height={300}
                  className="w-48 md:w-64 h-48 md:h-64 relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Dark Theme */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
              <Rocket className="w-4 h-4" />
              Our Mission
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">Engineering Excellence for Pakistan</h2>

            <p className="text-xl text-gray-400">
              Four pillars that guide every project, every partnership, every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Mission Pillar 1 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-hnl-red rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Deliver World-Class Solutions</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Deploy ISO-certified infrastructure, energy, and IT solutions that meet international standards
                    while addressing Pakistan's unique challenges and requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Pillar 2 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-hnl-red rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Drive Client Success</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Partner with Pakistan's leading organizations to achieve measurable outcomes—from network expansion
                    to energy efficiency to digital transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Pillar 3 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-hnl-red rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Build Pakistan's Capabilities</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Invest in Pakistan-based engineering teams, local supply chains, and knowledge transfer to
                    strengthen the nation's infrastructure capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Pillar 4 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-hnl-red rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Operate with Integrity</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Maintain unwavering commitment to safety, compliance, transparency, and ethical business practices
                    in every project we deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="py-6 bg-hnl-red">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">Innovation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">Reliability</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">Partnership</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">Pakistan First</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities - Modern Card Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-hnl-red font-bold uppercase tracking-wider text-sm">Strategic Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Priorities 2024–2027</h2>
            <p className="text-xl text-gray-600">
              Four strategic pillars driving HNL's growth and Pakistan's infrastructure evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Priority 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">Infrastructure Expansion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lead Pakistan's 5G rollout and FTTH expansion with turnkey fiber and site integration solutions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-3xl font-bold text-gray-900">5G</span>
                <span className="text-gray-500 text-sm ml-2">Readiness</span>
              </div>
            </div>

            {/* Priority 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">Energy Leadership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Become Pakistan's #1 BESS integrator, deploying sustainable hybrid power solutions nationwide.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-3xl font-bold text-gray-900">#1</span>
                <span className="text-gray-500 text-sm ml-2">BESS Partner</span>
              </div>
            </div>

            {/* Priority 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">Digital Transformation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scale cloud migration and AI services for Pakistan's banking, telecom, and government sectors.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-3xl font-bold text-gray-900">AI</span>
                <span className="text-gray-500 text-sm ml-2">Enabled</span>
              </div>
            </div>

            {/* Priority 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-3">Operational Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Achieve 99.5%+ uptime SLAs through advanced NOC monitoring and predictive maintenance.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-3xl font-bold text-gray-900">99.5%</span>
                <span className="text-gray-500 text-sm ml-2">Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section - No CTA Buttons */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="/images/r8.png"
              alt="HNL"
              width={80}
              height={80}
              className="w-20 h-20 mx-auto mb-8 opacity-20"
            />

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Join Us in Building Pakistan's Future</h2>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Partner with HNL to achieve your infrastructure, energy, and IT goals. Together, we're building the
              foundation for a connected, powered, and digitally-enabled Pakistan.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-1">20+</div>
                <div className="text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="w-px h-16 bg-gray-200 hidden md:block" />
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="w-px h-16 bg-gray-200 hidden md:block" />
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm uppercase tracking-wider">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
