import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CTASection } from "@/components/cta-section"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Pakistan Operations & Coverage | About HNL",
  description:
    "HNL operates across 30+ cities in Pakistan with regional offices, engineering teams, and nationwide project delivery capabilities.",
}

export default function PakistanOperationsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pakistan Operations", href: "/about/pakistan-operations" },
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pakistan Operations</h1>
            <p className="text-xl text-gray-600 mb-12">
              Nationwide presence with regional expertise and local engineering teams
            </p>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Coverage Map</h2>
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <p className="text-gray-500 italic">[Pakistan map showing HNL presence across 30+ cities]</p>
                <p className="text-sm text-gray-600 mt-4">
                  HNL operates in major cities including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan,
                  Peshawar, Quetta, Gujranwala, and 20+ additional locations
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Regional Offices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Head Office - Lahore</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Main headquarters with engineering, operations, and management teams
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>123 Main Boulevard, Gulberg III, Lahore</div>
                    <div>Phone: +92 42 1234 5678</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Regional Office - Karachi</h3>
                  <p className="text-gray-600 text-sm mb-4">Southern region operations and project management</p>
                  <div className="text-sm text-gray-500">
                    <div>456 Shahrah-e-Faisal, Karachi</div>
                    <div>Phone: +92 21 1234 5678</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Regional Office - Islamabad</h3>
                  <p className="text-gray-600 text-sm mb-4">Northern region operations and government sector focus</p>
                  <div className="text-sm text-gray-500">
                    <div>789 Blue Area, Islamabad</div>
                    <div>Phone: +92 51 1234 5678</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Project Offices</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    On-site presence in 25+ cities for active project delivery
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>Faisalabad, Multan, Peshawar, Quetta, and more</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Operational Scale</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-hnl-red mb-2">144</div>
                  <div className="text-sm text-gray-600">Offices Nationwide</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-hnl-red mb-2">16,000+</div>
                  <div className="text-sm text-gray-600">Managed Sites</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-hnl-red mb-2">8</div>
                  <div className="text-sm text-gray-600">DG Overhauling Workshops</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-hnl-red mb-2">2,120+</div>
                  <div className="text-sm text-gray-600">Technical Workforce</div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Operational Capabilities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Pakistan-Based Engineering Teams</h3>
                  <p className="text-gray-600">
                    200+ engineers, project managers, and technicians based across Pakistan, delivering projects with
                    local expertise and international standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">24/7 NOC & Support</h3>
                  <p className="text-gray-600">
                    Round-the-clock Network Operations Center in Lahore providing monitoring, maintenance, and emergency
                    response across all client deployments.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Local Supply Chain</h3>
                  <p className="text-gray-600">
                    Partnerships with certified suppliers and logistics providers across Pakistan, ensuring rapid
                    equipment deployment and minimal downtime.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-600">
                    Full compliance with PTA (Pakistan Telecommunication Authority), NEPRA (National Electric Power
                    Regulatory Authority), and local government regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Technical Workforce</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Engineering & Technical Staff</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Qualified Engineers</span>
                      <span className="font-bold text-hnl-red">180+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Mechanical & Electrical Experts</span>
                      <span className="font-bold text-hnl-red">410+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Field / Service Technicians</span>
                      <span className="font-bold text-hnl-red">980+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Skilled Field Staff</span>
                      <span className="font-bold text-hnl-red">550+</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Operations Capabilities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Fully Equipped Service Vans</span>
                      <span className="font-bold text-hnl-red">350+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Asset / Site Facilitators</span>
                      <span className="font-bold text-hnl-red">5,250+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly DG Overhauling Capacity</span>
                      <span className="font-bold text-hnl-red">450+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">DG Overhauling Workshops</span>
                      <span className="font-bold text-hnl-red">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Major Clients & Projects</h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Jazz (PMCL)</h3>
                  <p className="text-gray-600">Managed Services (2015-2025) - Nationwide infrastructure management</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Telenor (via Nokia Solutions)</h3>
                  <p className="text-gray-600">Managed Services & Asset Management - Complete site operations</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Huawei Pakistan (Ufone Core Locations)</h3>
                  <p className="text-gray-600">Core network infrastructure management and maintenance</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">edotco & Enfrashare</h3>
                  <p className="text-gray-600">Tower infrastructure and power solutions management</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Punjab Safe City (PSCA)</h3>
                  <p className="text-gray-600">
                    Main Data Center (MDC) & Disaster Recovery Center (DRC) - Turnkey solutions
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">CMPak Zong - Lahore KLP</h3>
                  <p className="text-gray-600">
                    2.6 MW load enhancement, HT/LT switchgear, 3000 kVA transformers, 4000A bus-ducts
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Certifications & Standards</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hnl-red rounded-full mt-2" />
                  <div>
                    <div className="font-semibold">ISO 9001:2015</div>
                    <div className="text-sm text-gray-600">Quality Management Systems</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hnl-red rounded-full mt-2" />
                  <div>
                    <div className="font-semibold">OSHA Standards</div>
                    <div className="text-sm text-gray-600">Occupational Safety & Health</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hnl-red rounded-full mt-2" />
                  <div>
                    <div className="font-semibold">PTA Licensed</div>
                    <div className="text-sm text-gray-600">Telecom Infrastructure Provider</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-hnl-red rounded-full mt-2" />
                  <div>
                    <div className="font-semibold">Certified Partners</div>
                    <div className="text-sm text-gray-600">Leading equipment manufacturers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work with a Nationwide Partner"
        description="HNL delivers projects across Pakistan with local expertise and international standards"
        primaryText="Request a Quote"
        secondaryText="Schedule a Meeting"
        page="Pakistan Operations"
      />
    </>
  )
}
