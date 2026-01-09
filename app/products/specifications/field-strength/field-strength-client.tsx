"use client"

import { useState } from "react"
import { ServiceHero } from "@/components/service-hero"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Building2, Users, Wrench, Truck, Award, Target, Zap, MapPin, Shield, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function FieldStrengthClient() {
  const [activeTab, setActiveTab] = useState<"government" | "banking">("government")

  const clients = [
    { name: "Jazz", logo: "/images/1.png" },
    { name: "Telenor", logo: "/images/2.png" },
    { name: "Zong 4G", logo: "/images/3.png" },
    { name: "Ufone", logo: "/images/4.png" },
    { name: "PTCL", logo: "/images/5.png" },
    { name: "Nokia", logo: "/images/6.png" },
    { name: "Engro Enfrashare", logo: "/images/7.png" },
    { name: "Huawei", logo: "/images/8.png" },
    { name: "ZTE", logo: "/images/9.png" },
    { name: "PMU - Govt of Punjab", logo: "/images/10.png" },
    { name: "Wateen", logo: "/images/11.png" },
    { name: "EDOTCO", logo: "/images/12.png" },
    { name: "TAWAL", logo: "/images/13.png" },
    { name: "Gourmet Foods", logo: "/images/14.png" },
    { name: "Olympia", logo: "/images/15.png" },
    { name: "HTI Express", logo: "/images/16.png" },
    { name: "University of Lahore", logo: "/images/17.png" },
    { name: "WARDA", logo: "/images/18.png" },
    { name: "Beaconhouse School System", logo: "/images/19.png" },
    { name: "PSCA", logo: "/images/20.png" },
    { name: "Habib Construction Services", logo: "/images/21.png" },
    { name: "Appetizer", logo: "/images/22.png" },
    { name: "Sadiq Poultry", logo: "/images/23.png" },
  ]

  const governmentProjects = [
    {
      name: "Central Police Office",
      logo: "/images/29.png",
      details: [
        "20+ DG units provided to Punjab Police",
        "Power range: 45kVA to 400kVA",
        "Comprehensive maintenance services",
        "Critical infrastructure support",
      ],
    },
    {
      name: "Punjab Safe City Lahore",
      logo: "/images/30.png",
      details: [
        "Data centers infrastructure (MDC & DRC)",
        "Hardware services: Servers, switches, firewalls, routers",
        "Power equipment: UPS, battery banks, LT/HT panels",
        "PDF installation & power termination",
        "HVAC installation & commissioning with FM200 modular system",
      ],
    },
    {
      name: "Project Management Unit - Govt of Punjab",
      logo: "/images/31.png",
      details: [
        "91+ DG units to PMU Sport Board",
        "Power range: 50kVA to 400kVA",
        "Stadium flood lights LED installation",
        "Sports infrastructure power solutions",
      ],
    },
    {
      name: "Pakistan Railways",
      logo: "/images/32.png",
      details: [
        "100+ DG units and power engines supply",
        "Mobile tower lights deployment",
        "Customized power backup trolleys",
        "Nationwide railway infrastructure support",
      ],
    },
  ]

  const bankingProjects = [
    {
      name: "Habib Bank Limited (HBL)",
      logo: "/images/24.png",
      details: [
        "Annual maintenance contract for 40+ branches - South Region",
        "AC & DG supplies across branch network",
        "30 DG units supplied: 20kVA to 100kVA range",
        "24/7 on-call support services",
      ],
    },
    {
      name: "MCB Bank Limited",
      logo: "/images/25.png",
      details: [
        "200+ branches UPS systems supply & deployment",
        "ON-Call AMC for 250+ branches - South Region",
        "Nationwide coverage in collaboration with MIB",
        "Critical banking infrastructure reliability",
      ],
    },
    {
      name: "Faysal Bank",
      logo: "/images/26.png",
      details: [
        "Annual maintenance contract for 16+ branches - Central Region",
        "AC & DG supplies and maintenance",
        "Rapid response service team",
        "Preventive maintenance programs",
      ],
    },
    {
      name: "Allied Bank Limited",
      logo: "/images/27.png",
      details: [
        "50+ branches equipped with hybrid inverters",
        "Energy-efficient power backup solutions",
        "Smart power management systems",
        "Reduced operational costs through hybrid technology",
      ],
    },
    {
      name: "National Bank of Pakistan (NBP)",
      logo: "/images/28.png",
      details: [
        "200+ branches with 3.2kW solar inverters",
        "Solar solutions & lithium battery trials",
        "Green energy initiatives for banking sector",
        "Sustainable power infrastructure",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title="Field Strength Overview"
        subtitle="Nationwide Infrastructure & Capability"
        description="With over three decades of experience, HNL has built an unmatched nationwide infrastructure network delivering mission-critical solutions across Pakistan. Our certified resources, strategic partnerships, and proven track record make us the trusted choice for enterprises and government agencies."
        backgroundImage="/industrial-facility-with-power-equipment-night-b.jpg"
        primaryCTA={{
          text: "Overhauling Capability",
          href: "#overhauling-capability",
        }}
        secondaryCTA={{
          text: "Project Portfolio",
          href: "#case-studies",
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Specifications", href: "/products/specifications" },
          { label: "Field Strength", href: "/products/specifications/field-strength" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Nationwide Resources */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">CERTIFIED RESOURCES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nationwide Infrastructure Network</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our extensive network of offices, certified professionals, and equipped service vehicles enables rapid
              deployment and support across every major city in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-7 w-7 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">144</div>
              <div className="text-sm text-gray-600 font-medium">Offices Nationwide</div>
              <div className="text-xs text-gray-500 mt-1">In every major city</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">180</div>
              <div className="text-sm text-gray-600 font-medium">Qualified Engineers</div>
              <div className="text-xs text-gray-500 mt-1">PEC certified professionals</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-7 w-7 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">410</div>
              <div className="text-sm text-gray-600 font-medium">Mechanical & Electrical</div>
              <div className="text-xs text-gray-500 mt-1">Skilled technicians</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">550</div>
              <div className="text-sm text-gray-600 font-medium">Skilled Field Staff</div>
              <div className="text-xs text-gray-500 mt-1">AC experts, riggers, specialists</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-7 w-7 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">350+</div>
              <div className="text-sm text-gray-600 font-medium">Service Vans</div>
              <div className="text-xs text-gray-500 mt-1">Fully equipped vehicles</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-7 w-7 text-cyan-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">980</div>
              <div className="text-sm text-gray-600 font-medium">Field Technicians</div>
              <div className="text-xs text-gray-500 mt-1">Service & installation experts</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5250</div>
              <div className="text-sm text-gray-600 font-medium">Asset Facilitators</div>
              <div className="text-xs text-gray-500 mt-1">Site management personnel</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-pink-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">Industry leadership</div>
            </div>
          </div>
        </section>

        {/* Capacity Statement */}
        <section className="mb-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
          <Zap className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Unmatched Capacity & Competency for Record-Time Delivery
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With this extensive strength of certified resources and nationwide infrastructure, HNL possesses the
            capacity and competency to deliver complex projects in record times while maintaining the highest standards
            of quality and reliability.
          </p>
        </section>

        {/* Overhauling Capability */}
        <section id="overhauling-capability" className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">TECHNICAL EXCELLENCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Overhauling Capability</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities across Pakistan equipped with PERKINS standard tools and equipment for
              comprehensive engine overhaul services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">08</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fully Equipped Facilities</div>
                    <div className="text-sm text-gray-600">PERKINS Standard Workshops</div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5kVA to 2.5MW</div>
                    <div className="text-sm text-gray-600">Complete Ratings Overhaul Capability</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-white">&gt;450</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Monthly Capacity</div>
                    <div className="text-sm text-gray-600">Engine Overhaul Units per Month</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <strong>North:</strong> Islamabad, Lahore • <strong>Central:</strong> Faisalabad, Multan, Sukkhar •{" "}
                    <strong>South:</strong> Karachi, Quetta
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/industrial-warehouse-generators-workshop.jpg"
                alt="HNL Overhauling Capability"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Strategic Partnerships */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">GLOBAL PARTNERSHIPS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Joint Ventures with Global Leaders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with world-renowned infrastructure industry leaders, boosting client confidence and
              ensuring world-class solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Perkins Engines</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium diesel engines & genuine parts</li>
                <li>• Authorized distributor in Pakistan</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">AGG Power Solutions Networks</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete diesel generator solutions</li>
                <li>• DC power systems & battery solutions</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
                  alt="Switzerland"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Centiel</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Uninterruptible power supplies (UPS)</li>
                <li>• Mission-critical power protection</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
                  alt="China"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Huawei & Sorotec Partnership</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HVAC & containment cooling systems</li>
                <li>• LT distribution panels & HVDC solutions</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
                  alt="China"
                  className="w-16 h-10 shadow-md"
                />
                <span className="text-4xl">🤝</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                  alt="Pakistan"
                  className="w-16 h-10 shadow-md"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">HAIWU Precision Cooling</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Precision air conditioning for data centers</li>
                <li>• Imported & local containment solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trusted by Leading Organizations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">TRUSTED CLIENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Pakistan's Leading Organizations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering mission-critical solutions to telecom operators, enterprises, government agencies, and
              financial institutions across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-red-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies - Tabbed */}
        <section id="case-studies" className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-red-600">PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Projects Delivered</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcase of major infrastructure projects successfully delivered to government agencies and banking
              institutions across Pakistan.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("government")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "government"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Government Sector
            </button>
            <button
              onClick={() => setActiveTab("banking")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "banking"
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Banking Sector
            </button>
          </div>

          {/* Government Projects */}
          {activeTab === "government" && (
            <div className="grid md:grid-cols-2 gap-6">
              {governmentProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={project.logo || "/placeholder.svg"}
                      alt={project.name}
                      className="h-20 w-auto object-contain mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 text-center">{project.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Banking Projects */}
          {activeTab === "banking" && (
            <div className="grid md:grid-cols-2 gap-6">
              {bankingProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={project.logo || "/placeholder.svg"}
                      alt={project.name}
                      className="h-20 w-auto object-contain mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 text-center">{project.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Leverage Our Nationwide Infrastructure?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Partner with HNL for mission-critical projects backed by certified resources, proven expertise, and
            unmatched execution capability across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold shadow-xl">
              <Link href="https://wa.me/923214845969?text=I%20want%20to%20discuss%20a%20project%20with%20HNL">
                Schedule Project Discussion
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
