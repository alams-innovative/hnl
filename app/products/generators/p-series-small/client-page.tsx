"use client"

import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Download, Zap, Shield, Gauge, Award, Clock, Wrench, TrendingUp } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export default function PSeriesSmallClientPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "P Series 10-220 kVA", href: "/products/generators/p-series-small" },
  ]

  // Complete models list from AGG Power with PDF links
  const models = [
    {
      model: "P220D5",
      esp: "220 kVA / 176 kW",
      prp: "200 kVA / 160 kW",
      engine: "1106A-70TAG4",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P220D5-1106A-70TAG4-.pdf",
    },
    {
      model: "P200D5",
      esp: "200 kVA / 160 kW",
      prp: "180 kVA / 144 kW",
      engine: "1106A-70TAG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P200D5-1106A-70TAG3-.pdf",
    },
    {
      model: "P165D5",
      esp: "165 kVA / 132 kW",
      prp: "150 kVA / 120 kW",
      engine: "1106A-70TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P165D5-1106A-70TAG2-.pdf",
    },
    {
      model: "P150D5",
      esp: "150 kVA / 120 kW",
      prp: "135 kVA / 108 kW",
      engine: "1106A-70TG1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P150D5-1106A-70TG1-.pdf",
    },
    {
      model: "P110D5",
      esp: "110 kVA / 88 kW",
      prp: "100 kVA / 80 kW",
      engine: "1104C-44TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P110D5-1104C-44TAG2-.pdf",
    },
    {
      model: "P88D5",
      esp: "88 kVA / 70 kW",
      prp: "80 kVA / 64 kW",
      engine: "1104A-44TG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P88D5-1104A-44TG2-1.pdf",
    },
    {
      model: "P72D5",
      esp: "72 kVA / 58 kW",
      prp: "65 kVA / 52 kW",
      engine: "1104A-44TG1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P72D5-1104A-44TG1-1.pdf",
    },
    {
      model: "P66D5",
      esp: "66 kVA / 53 kW",
      prp: "60 kVA / 48 kW",
      engine: "1103A-33TG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P66D5-1103A-33TG2-1.pdf",
    },
    {
      model: "P50D5",
      esp: "50 kVA / 40 kW",
      prp: "45 kVA / 36 kW",
      engine: "1103A-33TG1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P50D5-1103A-33TG1-1.pdf",
    },
    {
      model: "P33D5",
      esp: "33 kVA / 26 kW",
      prp: "30 kVA / 24 kW",
      engine: "1103A-33G",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P33D5-1103A-33G-1.pdf",
    },
    {
      model: "P22D5",
      esp: "22 kVA / 18 kW",
      prp: "20 kVA / 16 kW",
      engine: "404A-22G1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P22D5-404A-22G1-1.pdf",
    },
    {
      model: "P16.5D5",
      esp: "16.5 kVA / 13 kW",
      prp: "15 kVA / 12 kW",
      engine: "403A-15G2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P16.5D5-403A-15G2-1.pdf",
    },
    {
      model: "P15D5",
      esp: "15 kVA / 12 kW",
      prp: "13 kVA / 10 kW",
      engine: "403A-15G1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P15D5-403A-15G1-1.pdf",
    },
    {
      model: "P10D5",
      esp: "10 kVA / 8 kW",
      prp: "9 kVA / 7 kW",
      engine: "403A-11G1",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P10D5-403A-11G1-1.pdf",
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
      description: "Powered by world-renowned Perkins engines with global reputation",
    },
    {
      icon: Gauge,
      title: "Superior Efficiency",
      description: "Perkins engines deliver exceptional fuel economy and performance",
    },
    {
      icon: Clock,
      title: "Quick Start",
      description: "Rapid response with automatic transfer switch capability",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Extended service intervals with worldwide parts availability",
    },
    {
      icon: TrendingUp,
      title: "Proven Reliability",
      description: "Perkins engines trusted by millions worldwide since 1932",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="AGG P Series 10-220 kVA"
        description="Reliable diesel generators powered by Perkins engines. HNL is the authorized sole distributor of AGG Power Technology in Pakistan, offering world-class diesel generator sets ranging from 10 to 220 kVA with proven Perkins engine technology."
        primaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Specs", href: "/products/specifications/technical" }}
        backgroundImage="/images/hero-small-generators.jpg"
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
              <p className="text-sm text-white/80">Powered by Perkins - World's leading diesel engine manufacturer</p>
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
              Trusted Perkins engine technology combined with AGG's world-class generator manufacturing
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

      {/* Models Table with Image Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl">
                      <img
                        src="https://cdnus.globalso.com/aggpower/96fc8a4728.jpg"
                        alt="AGG P Series with Soundproof Canopy"
                        className="h-full w-full object-contain p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-center text-white font-semibold text-lg">
                          AGG P Series with Soundproof Canopy
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl">
                      <img
                        src="/images/image.png"
                        alt="AGG P Series Open Frame Configuration"
                        className="h-full w-full object-contain p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-center text-white font-semibold text-lg">
                          AGG P Series Open Frame Configuration
                        </p>
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
            <p className="text-lg text-gray-600">Complete range powered by Perkins engines from 10 to 220 kVA</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Generator Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">ESP (kVA/kW)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">PRP (kVA/kW)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Perkins Engine</th>
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
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
                        asChild
                      >
                        <a href={model.specPdf} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </a>
                      </Button>
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
                  <li>All models feature genuine Perkins engines and come with 2-year comprehensive warranty</li>
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

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">Common specifications across AGG P Series Small (10-220 kVA)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Engine Specifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Engine Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Engine Brand</span>
                  <span className="font-semibold text-gray-900 text-sm">Perkins (UK)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Engine Type</span>
                  <span className="font-semibold text-gray-900 text-sm">4-Stroke, Water Cooled, Turbocharged</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Fuel System</span>
                  <span className="font-semibold text-gray-900 text-sm">Electronic Direct Injection</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Aspiration</span>
                  <span className="font-semibold text-gray-900 text-sm">Naturally Aspirated / Turbocharged</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Compression Ratio</span>
                  <span className="font-semibold text-gray-900 text-sm">18:1 - 23:1</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Rated Speed</span>
                  <span className="font-semibold text-gray-900 text-sm">1500 RPM (50Hz)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Governor</span>
                  <span className="font-semibold text-gray-900 text-sm">Electronic / Mechanical</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Emission Standard</span>
                  <span className="font-semibold text-gray-900 text-sm">EPA Tier 2, EU Stage IIIA</span>
                </div>
              </div>
            </div>

            {/* Electrical Specifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Electrical Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Alternator Brand</span>
                  <span className="font-semibold text-gray-900 text-sm">Stamford / Leroy Somer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Alternator Type</span>
                  <span className="font-semibold text-gray-900 text-sm">Brushless, Self-Excited</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Voltage</span>
                  <span className="font-semibold text-gray-900 text-sm">400/230V</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Frequency</span>
                  <span className="font-semibold text-gray-900 text-sm">50Hz</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Power Factor</span>
                  <span className="font-semibold text-gray-900 text-sm">0.8 Lagging</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Voltage Regulation</span>
                  <span className="font-semibold text-gray-900 text-sm">±1% AVR</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Waveform Distortion (THD)</span>
                  <span className="font-semibold text-gray-900 text-sm">&lt;3%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Insulation Class</span>
                  <span className="font-semibold text-gray-900 text-sm">Class H (180°C)</span>
                </div>
              </div>
            </div>

            {/* Control System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">Control System</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Control Panel</span>
                  <span className="font-semibold text-gray-900 text-sm">Deep Sea / ComAp / Smart Gen</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Display Type</span>
                  <span className="font-semibold text-gray-900 text-sm">LCD / LED Multi-Function</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Starting System</span>
                  <span className="font-semibold text-gray-900 text-sm">Electric Start (24V DC)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Protection Features</span>
                  <span className="font-semibold text-gray-900 text-sm">Multi-Parameter Protection</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Battery Charger</span>
                  <span className="font-semibold text-gray-900 text-sm">Automatic Float Charger</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Emergency Stop</span>
                  <span className="font-semibold text-gray-900 text-sm">Push Button Type</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Remote Monitoring</span>
                  <span className="font-semibold text-gray-900 text-sm">Available (Optional)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Auto Start</span>
                  <span className="font-semibold text-gray-900 text-sm">Automatic Mains Failure (AMF)</span>
                </div>
              </div>
            </div>

            {/* Cooling & Fuel System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Cooling & Fuel System
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Cooling System</span>
                  <span className="font-semibold text-gray-900 text-sm">Water-Cooled with Radiator</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Radiator Capacity</span>
                  <span className="font-semibold text-gray-900 text-sm">50°C Ambient Temperature</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Fuel Type</span>
                  <span className="font-semibold text-gray-900 text-sm">Diesel (EN 590)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Fuel Consumption</span>
                  <span className="font-semibold text-gray-900 text-sm">210-230 g/kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Fuel Tank</span>
                  <span className="font-semibold text-gray-900 text-sm">Base Mounted / External</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Fuel Filter</span>
                  <span className="font-semibold text-gray-900 text-sm">Dual Stage with Water Separator</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Oil Filter</span>
                  <span className="font-semibold text-gray-900 text-sm">Full Flow Spin-On Type</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Air Filter</span>
                  <span className="font-semibold text-gray-900 text-sm">Heavy Duty Dry Type</span>
                </div>
              </div>
            </div>

            {/* Construction & Standards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Construction & Standards
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Enclosure Type</span>
                  <span className="font-semibold text-gray-900 text-sm">Soundproof / Open Type</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Canopy Material</span>
                  <span className="font-semibold text-gray-900 text-sm">Galvanized Steel, Powder Coated</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Noise Level (Canopy)</span>
                  <span className="font-semibold text-gray-900 text-sm">65-75 dB(A) @ 7m</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Mounting</span>
                  <span className="font-semibold text-gray-900 text-sm">Anti-Vibration Mounts</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Standards Compliance</span>
                  <span className="font-semibold text-gray-900 text-sm">ISO 8528, IEC 60034</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Protection Rating</span>
                  <span className="font-semibold text-gray-900 text-sm">IP23 / IP54 (Canopy)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Certification</span>
                  <span className="font-semibold text-gray-900 text-sm">CE, ISO 9001</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Warranty</span>
                  <span className="font-semibold text-gray-900 text-sm">2 Years / 2000 Hours</span>
                </div>
              </div>
            </div>

            {/* Environmental Conditions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                Environmental Conditions
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Operating Temperature</span>
                  <span className="font-semibold text-gray-900 text-sm">-15°C to +50°C</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Storage Temperature</span>
                  <span className="font-semibold text-gray-900 text-sm">-25°C to +55°C</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Max Altitude</span>
                  <span className="font-semibold text-gray-900 text-sm">1000m (Derated Above)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Relative Humidity</span>
                  <span className="font-semibold text-gray-900 text-sm">Up to 95% Non-Condensing</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Seismic Rating</span>
                  <span className="font-semibold text-gray-900 text-sm">Zone 4 Compliant</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Marine Environment</span>
                  <span className="font-semibold text-gray-900 text-sm">Suitable with Coating</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Dust Protection</span>
                  <span className="font-semibold text-gray-900 text-sm">Heavy Duty Air Filtration</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600 text-sm">Weather Protection</span>
                  <span className="font-semibold text-gray-900 text-sm">All-Weather Canopy Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Features */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Optional Features Available</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white rounded-xl p-4 shadow">
                <h4 className="font-semibold text-gray-900 mb-3">Power Options</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automatic Transfer Switch (ATS)</li>
                  <li>• Synchronization Panel</li>
                  <li>• Load Bank Testing</li>
                  <li>• Power Factor Correction</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <h4 className="font-semibold text-gray-900 mb-3">Protection & Safety</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fire Suppression System</li>
                  <li>• Fuel Leak Detection</li>
                  <li>• Circuit Breakers (MCB/MCCB)</li>
                  <li>• Earth Leakage Protection</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <h4 className="font-semibold text-gray-900 mb-3">Monitoring & Control</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Remote Monitoring System</li>
                  <li>• SCADA Integration</li>
                  <li>• SMS/Email Alerts</li>
                  <li>• Web-Based Interface</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
