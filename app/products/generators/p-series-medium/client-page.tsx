"use client"

import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Download, Zap, Shield, Gauge, Award, Clock, Wrench, TrendingUp } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PSeriesMediumClientPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "P Series 250-1250 kVA", href: "/products/generators/p-series-medium" },
  ]

  // Data from AGG Power website - Perkins powered models
  const models = [
    {
      model: "P250E5",
      esp: "250 kVA / 200 kW",
      prp: "228 kVA / 182 kW",
      engine: "1206A-E70TTAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P250E5-1206A-E70TTAG2-.pdf",
    },
    {
      model: "P275E5",
      esp: "275 kVA / 220 kW",
      prp: "250 kVA / 200 kW",
      engine: "1206A-E70TTAG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P275E5-1206A-E70TTAG3-.pdf",
    },
    {
      model: "P300E5",
      esp: "300 kVA / 240 kW",
      prp: "275 kVA / 220 kW",
      engine: "1506A-E88TAG4",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P300E5-1506A-E88TAG4.pdf",
    },
    {
      model: "P330E5",
      esp: "330 kVA / 264 kW",
      prp: "300 kVA / 240 kW",
      engine: "1506A-E88TAG5",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P330E5-1506A-E88TAG5.pdf",
    },
    {
      model: "P330E5A",
      esp: "330 kVA / 264 kW",
      prp: "300 kVA / 240 kW",
      engine: "1706A-E93TAG1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P330E5A-1706A-E93TAG1.pdf",
    },
    {
      model: "P385E5",
      esp: "385 kVA / 308 kW",
      prp: "350 kVA / 280 kW",
      engine: "1706A-E93TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P385E5-1706A-E93TAG2-.pdf",
    },
    {
      model: "P400E5",
      esp: "400 kVA / 320 kW",
      prp: "365 kVA / 292 kW",
      engine: "2206C-E13TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P400E5-2206C-E13TAG2-1.pdf",
    },
    {
      model: "P450E5",
      esp: "450 kVA / 360 kW",
      prp: "400 kVA / 320 kW",
      engine: "2206C-E13TAG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P450E5-2206C-E13TAG3-.pdf",
    },
    {
      model: "P500E5",
      esp: "500 kVA / 400 kW",
      prp: "450 kVA / 360 kW",
      engine: "2506C-E15TAG1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P500E5-2506C-E15TAG1-.pdf",
    },
    {
      model: "P550E5",
      esp: "550 kVA / 440 kW",
      prp: "500 kVA / 400 kW",
      engine: "2506C-E15TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P550E5-2506C-E15TAG2-.pdf",
    },
    {
      model: "P660E5",
      esp: "660 kVA / 528 kW",
      prp: "600 kVA / 480 kW",
      engine: "2806C-E18TAG1A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P660E5-2806C-E18TAG1A-.pdf",
    },
    {
      model: "P770E5",
      esp: "770 kVA / 616 kW",
      prp: "700 kVA / 560 kW",
      engine: "2806A-E18TTAG4",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P770E5-2806A-E18TTAG4-.pdf",
    },
    {
      model: "P825E5",
      esp: "825 kVA / 660 kW",
      prp: "750 kVA / 600 kW",
      engine: "2806A-E18TTAG5",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P825E5-2806A-E18TTAG5-.pdf",
    },
    {
      model: "P825D5",
      esp: "825 kVA / 660 kW",
      prp: "750 kVA / 600 kW",
      engine: "4006-23TAG2A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P825D5-4006-23TAG2A-.pdf",
    },
    {
      model: "P880D5",
      esp: "880 kVA / 704 kW",
      prp: "800 kVA / 640 kW",
      engine: "4006-23TAG3A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P880D5-4006-23TAG3A-.pdf",
    },
    {
      model: "P1000D5",
      esp: "1000 kVA / 800 kW",
      prp: "900 kVA / 720 kW",
      engine: "4008TAG1A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1000D5-4008TAG1A-.pdf",
    },
    {
      model: "P1100D5",
      esp: "1100 kVA / 880 kW",
      prp: "1000 kVA / 800 kW",
      engine: "4008-30TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1100D5-4008-30TAG2-.pdf",
    },
    {
      model: "P1250D5",
      esp: "1250 kVA / 1000 kW",
      prp: "1125 kVA / 900 kW",
      engine: "4008-30TAG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1250D5-4008-30TAG3-.pdf",
    },
  ]

  const features = [
    {
      icon: Award,
      title: "AGG Authorized Distributor",
      description: "HNL is the authorized sole distributor of AGG Power in Pakistan",
    },
    {
      icon: Shield,
      title: "Perkins Engine Technology",
      description: "Powered by world-renowned Perkins engines with 85+ years of British engineering excellence",
    },
    {
      icon: Gauge,
      title: "Superior Efficiency",
      description: "Optimized fuel consumption reducing operational costs significantly",
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
      description: "99.8% uptime with global manufacturing standards",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="AGG P Series 250-1250 kVA"
        description="Industrial-grade diesel generators powered by Perkins engines. HNL is the authorized sole distributor of AGG Power Technology in Pakistan, offering world-class diesel generator sets ranging from 250 to 1250 kVA for heavy industrial and commercial applications."
        primaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Specs", href: "/products/specifications/technical" }}
        backgroundImage="/images/hero-medium-generators.jpg"
      />

      {/* AGG Distributor Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <Award className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold">Authorized Sole Distributor</h3>
                <p className="text-white/90">HNL is the official AGG Power distributor in Pakistan</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/80">Powered by Perkins - British engineering excellence since 1932</p>
              <p className="text-sm text-white/80">Local expert support with global manufacturing standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose AGG P Series?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for Pakistan's most demanding industrial applications with proven Perkins engine technology and
              exceptional reliability
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
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl">
                      <img
                        src="/images/image.png"
                        alt="AGG P Series Generator with Soundproof Canopy"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <p className="text-white text-lg font-semibold">With Soundproof Canopy</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl">
                      <img
                        src="/images/image.png"
                        alt="AGG P Series Generator Open Frame Without Canopy"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <p className="text-white text-lg font-semibold">Open Frame - Without Canopy</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              AGG P Series Models
            </h2>
            <p className="text-lg text-gray-600">Comprehensive range powered by Perkins engines from 250 to 1250 kVA</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Generator Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">ESP (kVA/kW)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">PRP (kVA/kW)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Perkins Engine Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Frequency / RPM</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Specification</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{model.model}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.esp}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.prp}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{model.engine}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{model.frequency}</td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={model.specPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                        download
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-2">Power Rating Information:</p>
                <ul className="space-y-1 text-blue-800">
                  <li>
                    <strong>ESP (Emergency Standby Power):</strong> Maximum power available for emergency use with
                    variable load
                  </li>
                  <li>
                    <strong>PRP (Prime Rated Power):</strong> Continuous power available with 10% overload capacity
                  </li>
                  <li>All models are EPA-certified and come with 2-year comprehensive warranty</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Installation, commissioning, and after-sales support included with every AGG generator from HNL.
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

      {/* Technical Specifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Common Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">Standard features across all AGG P Series 250-1250 kVA models</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Engine Specifications */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Engine Specifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Engine Manufacturer:</span>
                  <span className="text-sm text-gray-900 text-right">Perkins (UK)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Engine Type:</span>
                  <span className="text-sm text-gray-900 text-right">4-Stroke, Water-Cooled, Inline</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Aspiration:</span>
                  <span className="text-sm text-gray-900 text-right">Turbocharged & Charge Air Cooled</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Compression Ratio:</span>
                  <span className="text-sm text-gray-900 text-right">16.5:1 to 17.5:1</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Injection System:</span>
                  <span className="text-sm text-gray-900 text-right">Direct Injection / Common Rail</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Governor Type:</span>
                  <span className="text-sm text-gray-900 text-right">Electronic (ECU)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Speed Regulation:</span>
                  <span className="text-sm text-gray-900 text-right">±0.25% (No Load to Full Load)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Engine Speed:</span>
                  <span className="text-sm text-gray-900 text-right">1500 RPM @ 50Hz</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Starting System:</span>
                  <span className="text-sm text-gray-900 text-right">Electric Start, 24V DC</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Emissions:</span>
                  <span className="text-sm text-gray-900 text-right">EPA Tier 2 / Euro Stage II Compliant</span>
                </div>
              </div>
            </div>

            {/* Electrical Specifications */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Electrical Specifications</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Voltage:</span>
                  <span className="text-sm text-gray-900 text-right">400/230V</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Frequency:</span>
                  <span className="text-sm text-gray-900 text-right">50Hz</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Phase:</span>
                  <span className="text-sm text-gray-900 text-right">3-Phase, 4-Wire + Earth</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Power Factor:</span>
                  <span className="text-sm text-gray-900 text-right">0.8 (Lagging)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Voltage Regulation:</span>
                  <span className="text-sm text-gray-900 text-right">±1% (Steady State)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Frequency Regulation:</span>
                  <span className="text-sm text-gray-900 text-right">±0.5% (Steady State)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Alternator Type:</span>
                  <span className="text-sm text-gray-900 text-right">Brushless, Self-Excited, 4-Pole</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Insulation Class:</span>
                  <span className="text-sm text-gray-900 text-right">Class H (Temp Rise Class B)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Protection Rating:</span>
                  <span className="text-sm text-gray-900 text-right">IP23 (IP55 Optional)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Waveform Distortion:</span>
                  <span className="text-sm text-gray-900 text-right">THD ≤2% (No Load), ≤5% (Linear Load)</span>
                </div>
              </div>
            </div>

            {/* Control System */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Control System</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Control Panel:</span>
                  <span className="text-sm text-gray-900 text-right">SmartGen/ComAp/DSE Deep Sea Electronics</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Display:</span>
                  <span className="text-sm text-gray-900 text-right">Multifunction LCD/LED Display</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Auto Start:</span>
                  <span className="text-sm text-gray-900 text-right">≤10 Seconds (Power Failure Detection)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Circuit Breaker:</span>
                  <span className="text-sm text-gray-900 text-right">MCCB - IEC 60947 Standard</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Remote Monitoring:</span>
                  <span className="text-sm text-gray-900 text-right">RS232/RS485/Ethernet/GPRS (Optional)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Protection Functions:</span>
                  <span className="text-sm text-gray-900 text-right">Over/Under Voltage, Frequency, Overcurrent</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Engine Protection:</span>
                  <span className="text-sm text-gray-900 text-right">
                    Low Oil Pressure, High Coolant Temp, Overspeed
                  </span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Instrumentation:</span>
                  <span className="text-sm text-gray-900 text-right">V, A, Hz, kW, kWh, Hours Run, Battery V</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Safety Shutdown:</span>
                  <span className="text-sm text-gray-900 text-right">Automatic with Visual & Audible Alarms</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Parallel Operation:</span>
                  <span className="text-sm text-gray-900 text-right">Available (Optional)</span>
                </div>
              </div>
            </div>

            {/* Cooling & Fuel System */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cooling & Fuel System</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Cooling System:</span>
                  <span className="text-sm text-gray-900 text-right">Closed Circuit, Pressurized</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Radiator:</span>
                  <span className="text-sm text-gray-900 text-right">Heavy-Duty, Tropical Climate Rated</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Coolant Capacity:</span>
                  <span className="text-sm text-gray-900 text-right">Model Dependent (50-250 L)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Type:</span>
                  <span className="text-sm text-gray-900 text-right">Diesel (HSD - High Speed Diesel)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Consumption:</span>
                  <span className="text-sm text-gray-900 text-right">~0.21-0.23 L/kWh @ 75% Load</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Base Fuel Tank:</span>
                  <span className="text-sm text-gray-900 text-right">8-12 Hours Runtime @ 100% Load</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Filter:</span>
                  <span className="text-sm text-gray-900 text-right">Primary & Secondary with Water Separator</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Ambient Temperature:</span>
                  <span className="text-sm text-gray-900 text-right">-15°C to +50°C</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Altitude:</span>
                  <span className="text-sm text-gray-900 text-right">Up to 1000m (Derated Above)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Service Interval:</span>
                  <span className="text-sm text-gray-900 text-right">500 Hours / Annual (Whichever First)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Construction & Standards */}
          <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Construction & Standards</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Base Frame:</span>
                  <span className="text-sm text-gray-900 text-right">Heavy-Duty Steel, Corrosion Resistant</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Mounting:</span>
                  <span className="text-sm text-gray-900 text-right">Anti-Vibration Rubber Isolators</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Canopy (Optional):</span>
                  <span className="text-sm text-gray-900 text-right">Weather-Proof, Soundproof, Lockable</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Noise Level:</span>
                  <span className="text-sm text-gray-900 text-right">≤75 dB(A) @ 7m (With Canopy)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Paint Finish:</span>
                  <span className="text-sm text-gray-900 text-right">Industrial Grade, Powder Coated</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Compliance:</span>
                  <span className="text-sm text-gray-900 text-right">ISO 8528, IEC 60034-1, BS 5000</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Emissions:</span>
                  <span className="text-sm text-gray-900 text-right">EPA Tier 2 / Euro Stage II</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">CE Marking:</span>
                  <span className="text-sm text-gray-900 text-right">Available on Request</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Warranty:</span>
                  <span className="text-sm text-gray-900 text-right">2 Years / 2000 Hours (Whichever First)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">After Sales Support:</span>
                  <span className="text-sm text-gray-900 text-right">24/7 Technical Support in Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Features */}
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Optional Features</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Block Heater (Engine Pre-heating)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Battery Charger (Float/Boost)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Remote Radiator Configuration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Parallel Operation System</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Automatic Transfer Switch (ATS)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Synchronizing Control Panel</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Extended Fuel Tank</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Acoustic Enclosure (Super Silent)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-sm text-gray-700">Remote Monitoring System</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
