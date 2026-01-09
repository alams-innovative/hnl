"use client"

import { ServiceHero } from "@/components/service-hero"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Zap,
  Gauge,
  Thermometer,
  Droplets,
  Shield,
  LineChart,
  Sun,
  Battery,
  Wind,
  Leaf,
  Download,
  Mail,
  MessageCircle,
  TrendingUp,
  Power,
  Settings,
  CheckCircle2,
} from "lucide-react"

export default function PerformanceClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Specifications", href: "/products/specifications" },
    { label: "Performance" },
  ]

  return (
    <>
      <ServiceHero
        title="Performance Specifications"
        subtitle="Technical Excellence"
        description="Engineered for Maximum Reliability, Efficiency, and Longevity Across Pakistan's Toughest Conditions"
        backgroundImage="/generators-lineup-industrial-facility-night-ill.jpg"
        primaryCTA="Request Detailed Specs"
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Introduction */}
        <div className="mt-12 mb-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every HNL power solution is built around proven engine platforms and high-efficiency solar
            technology—delivering industrial-grade performance, energy efficiency, and endurance across diverse
            applications from 10 kVA to 2750 kVA diesel generators and scalable solar installations up to multiple
            megawatts.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download Full Specifications
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Mail className="h-4 w-4" />
            Email Specifications
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <MessageCircle className="h-4 w-4" />
            Share via WhatsApp
          </Button>
        </div>

        {/* Summary Performance Highlights - Diesel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-2 text-center">Diesel Generator Performance Highlights</h2>
          <p className="text-center text-muted-foreground mb-8">AGG Power | A, P, C, K & S Series (10-2750 kVA)</p>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Zap className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">10-2750 kVA</div>
              <div className="text-sm text-muted-foreground">Power Range</div>
            </Card>
            <Card className="p-6 text-center">
              <Gauge className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">±1%</div>
              <div className="text-sm text-muted-foreground">Voltage Regulation</div>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">Up to 96%</div>
              <div className="text-sm text-muted-foreground">Fuel Efficiency</div>
            </Card>
            <Card className="p-6 text-center">
              <Wind className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">63-75 dB(A)</div>
              <div className="text-sm text-muted-foreground">Noise @ 7m</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Thermometer className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">-25°C to +55°C</div>
              <div className="text-sm text-muted-foreground">Operating Range</div>
            </Card>
            <Card className="p-6 text-center">
              <Power className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">Continuous</div>
              <div className="text-sm text-muted-foreground">Prime & Standby</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">ISO & EPA</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-red-600" />
              <div className="text-3xl font-bold mb-1">2-3 Years</div>
              <div className="text-sm text-muted-foreground">Warranty Coverage</div>
            </Card>
          </div>
        </div>

        {/* Summary Performance Highlights - Solar */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-2 text-center">Solar Energy Performance Highlights</h2>
          <p className="text-center text-muted-foreground mb-8">
            LONGi, JinKO, Canadian Solar | Residential to Utility Scale
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Sun className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">21-23%</div>
              <div className="text-sm text-muted-foreground">Panel Efficiency</div>
            </Card>
            <Card className="p-6 text-center">
              <Battery className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">5-15 kWh</div>
              <div className="text-sm text-muted-foreground">Storage Capacity</div>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">98%+</div>
              <div className="text-sm text-muted-foreground">Inverter Efficiency</div>
            </Card>
            <Card className="p-6 text-center">
              <Leaf className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">25+ Years</div>
              <div className="text-sm text-muted-foreground">Design Lifespan</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Thermometer className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">-40°C to +85°C</div>
              <div className="text-sm text-muted-foreground">Operating Range</div>
            </Card>
            <Card className="p-6 text-center">
              <LineChart className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">80%+</div>
              <div className="text-sm text-muted-foreground">Power @ 25 Years</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">IEC Certified</div>
              <div className="text-sm text-muted-foreground">Quality Standards</div>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-amber-600" />
              <div className="text-3xl font-bold mb-1">10-25 Years</div>
              <div className="text-sm text-muted-foreground">Warranty Coverage</div>
            </Card>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="p-6 mb-16 bg-gray-50">
          <h3 className="text-xl font-bold mb-4 text-center">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#diesel-power-output">Power Output</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#diesel-ratings">Power Ratings</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#diesel-environmental">Environmental</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#diesel-fuel">Fuel Economy</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#diesel-electrical">Electrical Output</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#solar-modules">Solar Modules</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#solar-inverters">Inverters</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#solar-storage">Energy Storage</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#reliability">Reliability</a>
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent" asChild>
              <a href="#safety">Safety</a>
            </Button>
          </div>
        </Card>

        {/* DIESEL GENERATOR SPECIFICATIONS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Diesel Generator Performance</h2>
            <p className="text-muted-foreground">Comprehensive specifications for AGG Power diesel gensets</p>
          </div>

          {/* Power Output Performance */}
          <div id="diesel-power-output" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Power className="h-7 w-7 text-red-600" />
              Power Output Performance
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">Rating Category</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Definition</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Operation Type</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Overload Capacity</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Typical Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Prime Power (PRP)</td>
                      <td className="px-4 py-3">Continuous power at variable loads, unlimited annual hours</td>
                      <td className="px-4 py-3">Continuous Duty</td>
                      <td className="px-4 py-3">+10% for 1hr per 12hrs</td>
                      <td className="px-4 py-3">Factories, Data Centers, Hospitals</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Standby Power (ESP)</td>
                      <td className="px-4 py-3">Emergency backup rating for limited annual hours</td>
                      <td className="px-4 py-3">Backup Duty</td>
                      <td className="px-4 py-3">No overload allowed</td>
                      <td className="px-4 py-3">Offices, Homes, Commercial</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Continuous Power (COP)</td>
                      <td className="px-4 py-3">Fixed load continuous operation, 24/7 base load</td>
                      <td className="px-4 py-3">Base Load Duty</td>
                      <td className="px-4 py-3">None</td>
                      <td className="px-4 py-3">Utility & Industrial Base Load</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-sm text-muted-foreground">
                <strong>Performance Standard:</strong> ISO 8528-1:2018, ISO 3046, BS 5514 compliant
              </div>
            </Card>
          </div>

          {/* Performance by Power Rating */}
          <div id="diesel-ratings" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Gauge className="h-7 w-7 text-red-600" />
              Performance by Power Rating
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">Model Series</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Prime Power (kVA/kW)</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Standby Power (kVA/kW)</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Engine Brand</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Fuel @ 100% (L/hr)</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Voltage Reg.</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">A Series Small</td>
                      <td className="px-4 py-3">10-150 / 8-120</td>
                      <td className="px-4 py-3">11-165 / 9-132</td>
                      <td className="px-4 py-3">Cummins, Perkins</td>
                      <td className="px-4 py-3">2.5-32</td>
                      <td className="px-4 py-3">±1%</td>
                      <td className="px-4 py-3">±0.5 Hz</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">A Series Medium</td>
                      <td className="px-4 py-3">165-388 / 132-310</td>
                      <td className="px-4 py-3">181-427 / 145-342</td>
                      <td className="px-4 py-3">Cummins</td>
                      <td className="px-4 py-3">35-85</td>
                      <td className="px-4 py-3">±1%</td>
                      <td className="px-4 py-3">±0.5 Hz</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">P Series Small</td>
                      <td className="px-4 py-3">10-220 / 8-176</td>
                      <td className="px-4 py-3">11-242 / 9-194</td>
                      <td className="px-4 py-3">Perkins</td>
                      <td className="px-4 py-3">2.5-48</td>
                      <td className="px-4 py-3">±1%</td>
                      <td className="px-4 py-3">±0.5 Hz</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">P Series Medium</td>
                      <td className="px-4 py-3">250-1100 / 200-880</td>
                      <td className="px-4 py-3">275-1210 / 220-968</td>
                      <td className="px-4 py-3">Perkins</td>
                      <td className="px-4 py-3">55-240</td>
                      <td className="px-4 py-3">±1%</td>
                      <td className="px-4 py-3">±0.25 Hz</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">P Series Large</td>
                      <td className="px-4 py-3">825-2500 / 660-2000</td>
                      <td className="px-4 py-3">907-2750 / 726-2200</td>
                      <td className="px-4 py-3">Perkins</td>
                      <td className="px-4 py-3">180-545</td>
                      <td className="px-4 py-3">±1%</td>
                      <td className="px-4 py-3">±0.25 Hz</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">C/K/S Series</td>
                      <td className="px-4 py-3">10-2500 / 8-2000</td>
                      <td className="px-4 py-3">11-2750 / 9-2200</td>
                      <td className="px-4 py-3">Cummins/Kubota/Scania</td>
                      <td className="px-4 py-3">2.5-545</td>
                      <td className="px-4 py-3">±1%</td>
                      <td className="px-4 py-3">±0.25 Hz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Environmental & Operating Performance */}
          <div id="diesel-environmental" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Thermometer className="h-7 w-7 text-red-600" />
              Environmental & Operating Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Ambient Operating Range</span>
                    <span className="text-muted-foreground">-25°C to +55°C</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Altitude Operation</span>
                    <span className="text-muted-foreground">Up to 3000m ASL</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Emission Class</span>
                    <span className="text-muted-foreground">EPA Tier II - Tier III</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Fuel Type</span>
                    <span className="text-muted-foreground">Diesel (HSD Compliant)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Combustion Type</span>
                    <span className="text-muted-foreground">Direct Injection</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Exhaust Temperature</span>
                    <span className="text-muted-foreground">300°C - 480°C</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Smoke Emission</span>
                    <span className="text-muted-foreground">≤ 1.5 Bosch units</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Noise Level (Silent)</span>
                    <span className="text-muted-foreground">63-75 dB(A) @ 7m</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Vibration Level</span>
                    <span className="text-muted-foreground">&lt; 2.0 mm/s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Ingress Protection</span>
                    <span className="text-muted-foreground">IP23 / IP44 (Canopy)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Fuel Economy & Efficiency */}
          <div id="diesel-fuel" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Droplets className="h-7 w-7 text-red-600" />
              Fuel Economy & Efficiency
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">Load Level</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">
                        Specific Fuel Consumption (g/kWh)
                      </th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Typical Fuel Use (20-100 kVA)</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Efficiency (%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">25% Load</td>
                      <td className="px-4 py-3">320-330 g/kWh</td>
                      <td className="px-4 py-3">2.8-5.2 L/hr</td>
                      <td className="px-4 py-3">73-78%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">50% Load</td>
                      <td className="px-4 py-3">255-275 g/kWh</td>
                      <td className="px-4 py-3">4.2-8.5 L/hr</td>
                      <td className="px-4 py-3">83-88%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">75% Load</td>
                      <td className="px-4 py-3">235-245 g/kWh</td>
                      <td className="px-4 py-3">6.0-13 L/hr</td>
                      <td className="px-4 py-3">90-93%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">100% Load</td>
                      <td className="px-4 py-3">228-238 g/kWh</td>
                      <td className="px-4 py-3">7.5-24 L/hr</td>
                      <td className="px-4 py-3">93-96%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">110% Overload (PRP)</td>
                      <td className="px-4 py-3">233-248 g/kWh</td>
                      <td className="px-4 py-3">+10%</td>
                      <td className="px-4 py-3">88-93%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 text-sm text-muted-foreground">
                <strong>Note:</strong> Actual fuel efficiency depends on load profile, ambient temperature, fuel
                quality, and maintenance conditions.
              </div>
            </Card>
          </div>

          {/* Electrical Output & Power Quality */}
          <div id="diesel-electrical" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="h-7 w-7 text-red-600" />
              Electrical Output & Power Quality
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Output Voltage Range</span>
                    <span className="text-muted-foreground">190/110V - 415/240V</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Power Factor</span>
                    <span className="text-muted-foreground">0.8 (Lagging)</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Waveform Distortion (THD)</span>
                    <span className="text-muted-foreground">≤ 2.5%</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Transient Voltage Dip</span>
                    <span className="text-muted-foreground">≤ 12% for 100% step</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Voltage Recovery Time</span>
                    <span className="text-muted-foreground">≤ 2.0 seconds</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Frequency Stability</span>
                    <span className="text-muted-foreground">±0.25 Hz steady state</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Load Acceptance</span>
                    <span className="text-muted-foreground">100% single step</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Starting kVA Capability</span>
                    <span className="text-muted-foreground">300% for 10 sec</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Alternator Efficiency</span>
                    <span className="text-muted-foreground">92-96%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Alternator Class</span>
                    <span className="text-muted-foreground">Brushless, Class H</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* SOLAR ENERGY SPECIFICATIONS */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Solar Energy Performance</h2>
            <p className="text-muted-foreground">Comprehensive specifications for solar PV systems</p>
          </div>

          {/* Solar Module Performance */}
          <div id="solar-modules" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Sun className="h-7 w-7 text-amber-600" />
              Solar Module Performance
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-amber-600 to-amber-500">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">Brand</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Module Type</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Power Range (W)</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Efficiency</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Warranty</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Temperature Coeff.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">LONGi Solar</td>
                      <td className="px-4 py-3">Monocrystalline PERC</td>
                      <td className="px-4 py-3">540-585W</td>
                      <td className="px-4 py-3">21.2-22.5%</td>
                      <td className="px-4 py-3">25 Years Linear</td>
                      <td className="px-4 py-3">-0.34%/°C</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">JinKO Solar</td>
                      <td className="px-4 py-3">Mono PERC/TOPCon</td>
                      <td className="px-4 py-3">530-590W</td>
                      <td className="px-4 py-3">21.0-22.8%</td>
                      <td className="px-4 py-3">25 Years Linear</td>
                      <td className="px-4 py-3">-0.35%/°C</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Canadian Solar</td>
                      <td className="px-4 py-3">Monocrystalline HiKu7</td>
                      <td className="px-4 py-3">545-580W</td>
                      <td className="px-4 py-3">21.0-22.3%</td>
                      <td className="px-4 py-3">25 Years Linear</td>
                      <td className="px-4 py-3">-0.34%/°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-amber-50 text-sm text-muted-foreground">
                <strong>Performance Guarantee:</strong> All modules maintain ≥80% power output after 25 years under
                standard test conditions
              </div>
            </Card>
          </div>

          {/* Solar Inverter Performance */}
          <div id="solar-inverters" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Settings className="h-7 w-7 text-amber-600" />
              Solar Inverter Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4">On-Grid Inverters (Solis, Huawei)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Power Range</span>
                    <span className="text-muted-foreground">3kW - 250kW</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Efficiency</span>
                    <span className="text-muted-foreground">98.5-99.0%</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">MPPT Efficiency</span>
                    <span className="text-muted-foreground">&gt; 99.9%</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Input Voltage Range</span>
                    <span className="text-muted-foreground">180-1000V DC</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Warranty</span>
                    <span className="text-muted-foreground">10 Years Standard</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4">Hybrid/Off-Grid Inverters</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Power Range</span>
                    <span className="text-muted-foreground">3kW - 30kW</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Efficiency</span>
                    <span className="text-muted-foreground">97.0-98.0%</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Battery Voltage</span>
                    <span className="text-muted-foreground">48V - 400V DC</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Grid-Tied Capability</span>
                    <span className="text-muted-foreground">Yes, with backup</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Warranty</span>
                    <span className="text-muted-foreground">5-10 Years</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Energy Storage Performance */}
          <div id="solar-storage" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Battery className="h-7 w-7 text-amber-600" />
              Energy Storage Performance
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-amber-600 to-amber-500">
                    <tr>
                      <th className="px-4 py-3 text-left text-white font-semibold">Battery Type</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Capacity Range</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Cycle Life</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Depth of Discharge</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Efficiency</th>
                      <th className="px-4 py-3 text-left text-white font-semibold">Warranty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Lithium Iron Phosphate (LiFePO4)</td>
                      <td className="px-4 py-3">5-15 kWh (Residential)</td>
                      <td className="px-4 py-3">6000+ cycles @ 80% DoD</td>
                      <td className="px-4 py-3">90-95%</td>
                      <td className="px-4 py-3">95-98%</td>
                      <td className="px-4 py-3">10 Years</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Lithium NMC (Commercial)</td>
                      <td className="px-4 py-3">50-500 kWh</td>
                      <td className="px-4 py-3">4000-5000 cycles @ 80%</td>
                      <td className="px-4 py-3">85-90%</td>
                      <td className="px-4 py-3">93-96%</td>
                      <td className="px-4 py-3">8-10 Years</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">Lead-Acid AGM/Gel</td>
                      <td className="px-4 py-3">100-1000 Ah</td>
                      <td className="px-4 py-3">1200-1500 cycles @ 50%</td>
                      <td className="px-4 py-3">50-60%</td>
                      <td className="px-4 py-3">85-90%</td>
                      <td className="px-4 py-3">2-5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Solar System Environmental Performance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Leaf className="h-7 w-7 text-amber-600" />
              Environmental Performance
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Operating Temperature</span>
                    <span className="text-muted-foreground">-40°C to +85°C</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Humidity Range</span>
                    <span className="text-muted-foreground">0-100% (non-condensing)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Wind Load</span>
                    <span className="text-muted-foreground">Up to 2400 Pa</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Snow Load</span>
                    <span className="text-muted-foreground">Up to 5400 Pa</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Hail Resistance</span>
                    <span className="text-muted-foreground">25mm @ 23 m/s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Dust Protection</span>
                    <span className="text-muted-foreground">IP68 Junction Box</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Salt Mist Corrosion</span>
                    <span className="text-muted-foreground">IEC 61701 Grade C5</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Ammonia Resistance</span>
                    <span className="text-muted-foreground">IEC 62716 Certified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Fire Safety</span>
                    <span className="text-muted-foreground">Class A/C Fire Rated</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* RELIABILITY & SAFETY */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Reliability & Safety</h2>
            <p className="text-muted-foreground">Performance standards for all HNL power solutions</p>
          </div>

          {/* Reliability Performance */}
          <div id="reliability" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-7 w-7 text-red-600" />
              Reliability Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4">Diesel Generators</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Engine Life Expectancy</span>
                    <span className="text-muted-foreground">20,000-30,000 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Service Interval</span>
                    <span className="text-muted-foreground">500 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">MTBF</span>
                    <span className="text-muted-foreground">&gt; 5,000 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Availability</span>
                    <span className="text-muted-foreground">99.5-99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Duty Cycle</span>
                    <span className="text-muted-foreground">100% continuous @ PRP</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4">Solar Systems</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Module Lifespan</span>
                    <span className="text-muted-foreground">25-30 years</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Inverter Lifespan</span>
                    <span className="text-muted-foreground">15-20 years</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Battery Cycles</span>
                    <span className="text-muted-foreground">4,000-6,000 cycles</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">System Availability</span>
                    <span className="text-muted-foreground">98-99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Maintenance</span>
                    <span className="text-muted-foreground">Minimal (Annual cleaning)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Safety & Protection Performance */}
          <div id="safety" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-7 w-7 text-red-600" />
              Safety & Protection Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4">Diesel Generator Protection</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Overspeed, underspeed, and overload shutdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Low oil pressure & high coolant temperature alarms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Emergency stop push button (lockable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Safety guards for fan and alternator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Battery low/high voltage protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reverse power and short-circuit protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Phase imbalance and loss detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exhaust temperature monitoring</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-4">Solar System Protection</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Over-voltage and under-voltage protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Anti-islanding protection (Grid-tied)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>DC surge protection (Type I & II)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>AC surge protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Ground fault detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Arc fault circuit interruption (AFCI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Battery management system (BMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Thermal management and overheat protection</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-white border-2 text-center p-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Need Detailed Performance Data?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Our technical team can provide customized performance reports, load calculations, and detailed
            specifications for your specific application requirements.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
            Request Technical Consultation
          </Button>
        </Card>
      </div>
    </>
  )
}

export { PerformanceClient }
