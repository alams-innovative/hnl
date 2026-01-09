"use client"

import Breadcrumbs from "@/components/breadcrumbs"
import ServiceHero from "@/components/service-hero"
import { Download, Zap, Shield, Gauge, Award, Clock, Wrench, TrendingUp } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PSeriesLargeClientPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Generators", href: "/products/generators" },
    { label: "P Series 825-2500 kVA", href: "/products/generators/p-series-large" },
  ]

  // Data from AGG Power website
  const models = [
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
      prp: "910 kVA / 728 kW",
      engine: "4008TAG1A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1000D5-4008TAG1A-.pdf",
    },
    {
      model: "P1000D5",
      esp: "1000 kVA / 800 kW",
      prp: "910 kVA / 728 kW",
      engine: "4008TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1000D5-4008TAG2-.pdf",
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
      model: "P1100D5",
      esp: "1100 kVA / 880 kW",
      prp: "1000 kVA / 800 kW",
      engine: "4008TAG2",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1100D5-4008TAG2-.pdf",
    },
    {
      model: "P1250D5",
      esp: "1250 kVA / 1000 kW",
      prp: "1125 kVA / 900 kW",
      engine: "4008-30TAG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1250D5-4008-30TAG3-.pdf",
    },
    {
      model: "P1375D5",
      esp: "1375 kVA / 1100 kW",
      prp: "1250 kVA / 1000 kW",
      engine: "4012-46TWG2A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1375D5-4012-46TWG2A-.pdf",
    },
    {
      model: "P1500D5",
      esp: "1500 kVA / 1200 kW",
      prp: "1350 kVA / 1080 kW",
      engine: "4012-46TWG3A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1500D5-4012-46TWG3A-.pdf",
    },
    {
      model: "P1650D5",
      esp: "1650 kVA / 1320 kW",
      prp: "1500 kVA / 1200 kW",
      engine: "4012-46TAG2A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1650D5-4012-46TAG2A-.pdf",
    },
    {
      model: "P1800D5",
      esp: "1800 kVA / 1440 kW",
      prp: "1650 kVA / 1320 kW",
      engine: "4012-46TAG3A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/82a8b0ee.pdf",
    },
    {
      model: "P1875D5",
      esp: "1875 kVA / 1500 kW",
      prp: "1705 kVA / 1364 kW",
      engine: "4012-46TAG3A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P1875D5-4012-46TAG3A-.pdf",
    },
    {
      model: "P2030D5",
      esp: "2030 kVA / 1624 kW",
      prp: "1845 kVA / 1476 kW",
      engine: "4016TAG1A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P2030D5-4016TAG1A-.pdf",
    },
    {
      model: "P2260D5",
      esp: "2260 kVA / 1808 kW",
      prp: "2050 kVA / 1640 kW",
      engine: "4016TAG2A",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P2260D5-4016TAG2A-.pdf",
    },
    {
      model: "P2500D5",
      esp: "2500 kVA / 2000 kW",
      prp: "2250 kVA / 1800 kW",
      engine: "4016-61TRG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/DG-SPEC-P2500D5-4016-61TRG3-.pdf",
    },
    {
      model: "P2750D5",
      esp: "2750 kVA / 2200 kW",
      prp: "2500 kVA / 2000 kW",
      engine: "4016-61TRG3",
      frequency: "50Hz / 1500 RPM",
      specPdf: "https://www.aggpower.com/uploads/56bf3d9a.pdf",
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
      description: "Powered by legendary Perkins heavy-duty engines with proven performance",
    },
    {
      icon: Gauge,
      title: "Industrial Grade Power",
      description: "Designed for 24/7 continuous operation in harsh industrial environments",
    },
    {
      icon: Clock,
      title: "Extended Service Intervals",
      description: "1000-hour maintenance intervals reducing operational costs",
    },
    {
      icon: Wrench,
      title: "Heavy-Duty Construction",
      description: "Reinforced components for maximum durability and longevity",
    },
    {
      icon: TrendingUp,
      title: "Maximum Uptime",
      description: "99.9% reliability with advanced monitoring and protection systems",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <ServiceHero
        title="Perkins P Series 825-2500 kVA"
        description="Heavy-duty diesel generators powered by Perkins engines. HNL is the authorized sole distributor of AGG Power Technology in Pakistan, offering world-class diesel generator sets ranging from 825 to 2500 kVA for large industrial, mining, and mission-critical applications."
        primaryCTA={{ text: "Request Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Download Specs", href: "/products/specifications/technical" }}
        backgroundImage="/images/hero-large-generators.jpg"
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
              Why Choose Perkins P Series Large?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for the most demanding industrial applications with legendary Perkins reliability and maximum
              power output
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
                        alt="Perkins Generator with Soundproof Canopy"
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
                        alt="Perkins Generator Open Frame Without Canopy"
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
              Perkins P Series Models
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive heavy-duty range powered by Perkins engines from 825 to 2500 kVA
            </p>
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
                  <li>All models are EPA-certified and come with comprehensive warranty coverage</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Installation, commissioning, and after-sales support included with every Perkins generator from HNL.
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
            <p className="text-lg text-gray-600">Standard features across all Perkins P Series 825-2500 kVA models</p>
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
                  <span className="text-sm font-semibold text-gray-700">Manufacturer:</span>
                  <span className="text-sm text-gray-900 text-right">Perkins (UK)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Aspiration:</span>
                  <span className="text-sm text-gray-900 text-right">Turbocharged & Aftercooled</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Compression Ratio:</span>
                  <span className="text-sm text-gray-900 text-right">14:1 to 16.5:1</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Injection System:</span>
                  <span className="text-sm text-gray-900 text-right">Electronic Direct Injection</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Governor Type:</span>
                  <span className="text-sm text-gray-900 text-right">Electronic ADEM A4</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Speed Regulation:</span>
                  <span className="text-sm text-gray-900 text-right">±0.25% (Isochronous)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Engine Speed:</span>
                  <span className="text-sm text-gray-900 text-right">1500 RPM @ 50Hz</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Starting System:</span>
                  <span className="text-sm text-gray-900 text-right">Electric Start, 24V DC Heavy-Duty</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Emissions:</span>
                  <span className="text-sm text-gray-900 text-right">EPA Tier 3 / Euro Stage IIIA Compliant</span>
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
                  <span className="text-sm text-gray-900 text-right">±0.5% (Steady State)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Frequency Regulation:</span>
                  <span className="text-sm text-gray-900 text-right">±0.25% (Steady State)</span>
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
                  <span className="text-sm font-semibold text-gray-700">Protection Degree:</span>
                  <span className="text-sm text-gray-900 text-right">IP23 (Standard) / IP54 (Optional)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Waveform Distortion:</span>
                  <span className="text-sm text-gray-900 text-right">THD &lt; 2% (Linear Load)</span>
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
                  <span className="text-sm text-gray-900 text-right">Deep Sea / ComAp / Datakom</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Display:</span>
                  <span className="text-sm text-gray-900 text-right">7" Color LCD Touchscreen</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Communication:</span>
                  <span className="text-sm text-gray-900 text-right">RS485 Modbus, CAN Bus</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Auto Start:</span>
                  <span className="text-sm text-gray-900 text-right">Within 10 Seconds</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Protection Features:</span>
                  <span className="text-sm text-gray-900 text-right">Over 30 Protection Alarms</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Circuit Breakers:</span>
                  <span className="text-sm text-gray-900 text-right">ACB/MCCB Industrial Grade</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Emergency Stop:</span>
                  <span className="text-sm text-gray-900 text-right">Red Mushroom Button (Front Panel)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Remote Monitoring:</span>
                  <span className="text-sm text-gray-900 text-right">GSM/GPRS Module (Optional)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Battery Charger:</span>
                  <span className="text-sm text-gray-900 text-right">Automatic Float Charger 24V DC</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Parallel Operation:</span>
                  <span className="text-sm text-gray-900 text-right">Up to 32 Units Synchronization</span>
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
                  <span className="text-sm text-gray-900 text-right">Forced Water Circulation</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Radiator Type:</span>
                  <span className="text-sm text-gray-900 text-right">Heavy-Duty Copper/Brass Core</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Cooling Fan:</span>
                  <span className="text-sm text-gray-900 text-right">Engine-Driven, Thermostat Controlled</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Ambient Temperature:</span>
                  <span className="text-sm text-gray-900 text-right">-15°C to +50°C (Standard)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Type:</span>
                  <span className="text-sm text-gray-900 text-right">Diesel (EN 590 / ASTM D975)</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Consumption:</span>
                  <span className="text-sm text-gray-900 text-right">190-210 g/kWh @ 75% Load</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Tank:</span>
                  <span className="text-sm text-gray-900 text-right">Base Tank or External Tank</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Fuel Filter:</span>
                  <span className="text-sm text-gray-900 text-right">Dual-Stage with Water Separator</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Oil Filter:</span>
                  <span className="text-sm text-gray-900 text-right">Full-Flow Spin-On Type</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Service Intervals:</span>
                  <span className="text-sm text-gray-900 text-right">500-1000 Hours (Based on Load)</span>
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
                  <span className="text-sm text-gray-900 text-right">Heavy-Duty Steel Fabricated</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Anti-Vibration:</span>
                  <span className="text-sm text-gray-900 text-right">Spring-Type Isolators</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Canopy Material:</span>
                  <span className="text-sm text-gray-900 text-right">Galvanized Steel / Stainless Steel</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Sound Attenuation:</span>
                  <span className="text-sm text-gray-900 text-right">75-85 dB(A) @ 7m (Canopy)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Paint Finish:</span>
                  <span className="text-sm text-gray-900 text-right">Industrial Polyester Powder Coating</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Standards:</span>
                  <span className="text-sm text-gray-900 text-right">ISO 8528, IEC 60034</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Emissions:</span>
                  <span className="text-sm text-gray-900 text-right">EPA Tier 3, Euro Stage IIIA</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Quality Certification:</span>
                  <span className="text-sm text-gray-900 text-right">ISO 9001:2015</span>
                </div>
                <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                  <span className="text-sm font-semibold text-gray-700">Warranty:</span>
                  <span className="text-sm text-gray-900 text-right">2-5 Years Comprehensive</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Service Network:</span>
                  <span className="text-sm text-gray-900 text-right">Nationwide Pakistan Coverage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Features */}
          <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Optional Features & Upgrades</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Automatic Transfer Switch (ATS)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Load Bank Testing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Weather-Proof Enclosure IP54/IP55</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Remote Monitoring System</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Exhaust Silencer (Hospital Grade)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Block Heater for Cold Start</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Fuel Polishing System</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Synchronization Panel (Multi-Unit)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Extended Fuel Tank Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
