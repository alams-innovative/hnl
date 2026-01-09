"use client"

import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Download, Zap, Shield, Gauge, Award, Clock, Wrench, TrendingUp } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ASeriesMediumClientPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "A Series 165-388 kVA", href: "/products/generators/a-series-medium" },
  ]

  // Data from AGG Power website
  const models = [
    {
      model: "AS165D5",
      esp: "165 kVA / 132 kW",
      prp: "150 kVA / 120 kW",
      engine: "AS6500",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-AS165D5-AS6500.pdf",
    },
    {
      model: "AS206D5",
      esp: "206 kVA / 165 kW",
      prp: "188 kVA / 150 kW",
      engine: "AS6500",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-AS206D5-AS6500.pdf",
    },
    {
      model: "AS220D5",
      esp: "220 kVA / 176 kW",
      prp: "200 kVA / 160 kW",
      engine: "AS8900",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-AS220D5-AS8900.pdf",
    },
    {
      model: "AS250D5",
      esp: "250 kVA / 200 kW",
      prp: "225 kVA / 180 kW",
      engine: "AS8900",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-AS250D5-AS8900.pdf",
    },
    {
      model: "AS275D5",
      esp: "275 kVA / 220 kW",
      prp: "250 kVA / 200 kW",
      engine: "AS8900",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-AS275D5-AS8900.pdf",
    },
    {
      model: "AS388D5",
      esp: "388 kVA / 310 kW",
      prp: "350 kVA / 280 kW",
      engine: "AS11800",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-AS388D5-AS11800.pdf",
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
      title: "AGG Engine Technology",
      description: "Powered by reliable AGG engines with proven performance worldwide",
    },
    {
      icon: Gauge,
      title: "Superior Efficiency",
      description: "Optimized fuel consumption reducing operational costs by up to 25%",
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
        title="AGG A Series 165-388 kVA"
        description="Mid-range diesel generators powered by AGG engines. HNL is the authorized sole distributor of AGG Power Technology in Pakistan, offering world-class diesel generator sets ranging from 165 to 388 kVA for industrial, commercial, and critical infrastructure applications."
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
              <p className="text-sm text-white/80">Fastest delivery time by AGG Power worldwide dealership</p>
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
              Why Choose AGG A Series?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for Pakistan's challenging conditions with proven AGG engine technology and exceptional fuel
              efficiency
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
                        src="https://cdnus.globalso.com/aggpower/96fc8a4728.jpg"
                        alt="AGG Generator with Soundproof Canopy"
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
                        alt="AGG Generator Open Frame Without Canopy"
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
              AGG A Series Models
            </h2>
            <p className="text-lg text-gray-600">Comprehensive range powered by AGG engines from 165 to 388 kVA</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Generator Model</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">ESP (kVA/kW)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">PRP (kVA/kW)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">AGG Engine Model</th>
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
            <p className="text-lg text-gray-600">Standard features across all AGG A Series 165-388 kVA models</p>
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
                  <span className="text-sm font-semibold text-gray-700">Engine Type:</span>
                  <span className="text-sm text-gray-900 text-right">4-Stroke, Water-Cooled Diesel</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Aspiration:</span>
                  <span className="text-sm text-gray-900 text-right">Turbocharged & Intercooled</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Compression Ratio:</span>
                  <span className="text-sm text-gray-900 text-right">17:1</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Injection System:</span>
                  <span className="text-sm text-gray-900 text-right">Direct Injection</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Governor Type:</span>
                  <span className="text-sm text-gray-900 text-right">Electronic</span>
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
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Air Cleaner:</span>
                  <span className="text-sm text-gray-900 text-right">Heavy-Duty Dry Type</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Emissions:</span>
                  <span className="text-sm text-gray-900 text-right">EPA Tier 3 Compliant</span>
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
                  <span className="text-sm text-gray-900 text-right">Class H (180°C)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Protection Grade:</span>
                  <span className="text-sm text-gray-900 text-right">IP23</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Waveform Distortion:</span>
                  <span className="text-sm text-gray-900 text-right">THD {"<"} 2%</span>
                </div>
              </div>
            </div>

            {/* Control System */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Control System & Protection</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Control Panel:</span>
                  <span className="text-sm text-gray-900 text-right">SmartGen / ComAp / Deep Sea</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Display Type:</span>
                  <span className="text-sm text-gray-900 text-right">LCD / LED Digital Display</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Start Mode:</span>
                  <span className="text-sm text-gray-900 text-right">Auto / Manual / Remote</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Battery Charger:</span>
                  <span className="text-sm text-gray-900 text-right">24V / 10A Floating Charger</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Protection Features:</span>
                  <span className="text-sm text-gray-900 text-right">
                    Over/Under Voltage, Over/Under Frequency, Over Current
                  </span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Emergency Stop:</span>
                  <span className="text-sm text-gray-900 text-right">Push Button</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Circuit Breaker:</span>
                  <span className="text-sm text-gray-900 text-right">MCCB / ACB</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Communication:</span>
                  <span className="text-sm text-gray-900 text-right">RS232, RS485, Modbus</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Remote Monitoring:</span>
                  <span className="text-sm text-gray-900 text-right">Optional GSM/GPRS Module</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Safety Shutdowns:</span>
                  <span className="text-sm text-gray-900 text-right">Low Oil Pressure, High Water Temp</span>
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
                  <span className="text-sm text-gray-900 text-right">Closed Loop, Radiator Cooled</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Radiator Capacity:</span>
                  <span className="text-sm text-gray-900 text-right">50°C Ambient Rating</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fan Type:</span>
                  <span className="text-sm text-gray-900 text-right">Engine Driven, Push Type</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Coolant Capacity:</span>
                  <span className="text-sm text-gray-900 text-right">35-65 Liters</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Type:</span>
                  <span className="text-sm text-gray-900 text-right">Diesel (0#, -10#, -35#)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Tank:</span>
                  <span className="text-sm text-gray-900 text-right">Base Tank (8-12 Hours @ 75% Load)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Consumption:</span>
                  <span className="text-sm text-gray-900 text-right">190-220 g/kWh @ 75% Load</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Oil Capacity:</span>
                  <span className="text-sm text-gray-900 text-right">18-28 Liters</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Oil Type:</span>
                  <span className="text-sm text-gray-900 text-right">15W-40 CF-4 / CI-4</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Service Intervals:</span>
                  <span className="text-sm text-gray-900 text-right">500 Hours / 6 Months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Specifications */}
          <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction & Standards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Base Frame:</span>
                  <span className="text-sm text-gray-900 text-right">Heavy-Duty Steel Fabricated</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Anti-Vibration Mounts:</span>
                  <span className="text-sm text-gray-900 text-right">High-Grade Rubber Isolators</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Paint Finish:</span>
                  <span className="text-sm text-gray-900 text-right">RAL Color, Powder Coated</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Canopy Type:</span>
                  <span className="text-sm text-gray-900 text-right">Weather-Proof, Soundproof Optional</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Noise Level:</span>
                  <span className="text-sm text-gray-900 text-right">{"<"} 75 dB(A) @ 7m (with canopy)</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Standards:</span>
                  <span className="text-sm text-gray-900 text-right">ISO 8528, IEC 60034</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Certifications:</span>
                  <span className="text-sm text-gray-900 text-right">CE, ISO9001, EPA</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Ambient Temp:</span>
                  <span className="text-sm text-gray-900 text-right">-15°C to +50°C</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Altitude:</span>
                  <span className="text-sm text-gray-900 text-right">Up to 1000m (Derate 4%/500m)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Warranty:</span>
                  <span className="text-sm text-gray-900 text-right">2 Years / 2000 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Features */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Optional Features Available</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Automatic Transfer Switch (ATS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Remote Monitoring System</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Parallel Operation (Sync Panel)</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Extra Fuel Tanks (Extended Runtime)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Block Heater (Cold Climate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Battery Heater</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Super Silent Canopy (60 dB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Trailer Mounted Configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Customized Voltage & Frequency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ASeriesMediumClientPage
