import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PartnershipInquiryForm } from "./partnership-form"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { Award, CheckCircle, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Certifications & Partners | HNL Infrastructure Solutions Pakistan",
  description:
    "HNL's ISO certifications and strategic partnerships with global technology leaders. EPA-approved, ISO 9001:2015 certified with partnerships across Pakistan.",
}

export default function CertificationsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Certifications & Partners", href: "/about/certifications" },
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      issuer: "International Organization for Standardization",
      description:
        "Demonstrates HNL's commitment to consistent quality management systems across all service delivery operations including telecom infrastructure, energy solutions, and IT services.",
    },
    {
      name: "PEC Registration",
      category: "Engineering Council",
      issuer: "Pakistan Engineering Council",
      description:
        "Registered Constructor & Operator License with specializations EE01-EE11 and ME01-ME07, ensuring all engineering practices meet national professional and technical standards.",
    },
    {
      name: "EDB Certificate",
      category: "DG Manufacturing",
      issuer: "Engineering Development Board",
      description:
        "Official certification for diesel generator manufacturing operations, validating HNL's technical capabilities and quality standards in power generation equipment.",
    },
    {
      name: "AEDB C1 Category",
      category: "Renewable Energy",
      issuer: "Alternative Energy Development Board",
      description:
        "Certified for renewable energy projects 500 kW and above, enabling HNL to deliver large-scale solar and hybrid power installations across Pakistan.",
    },
    {
      name: "Perkins Authorized Supplier",
      category: "Genuine Parts & Engines",
      issuer: "Perkins Engines Company Limited (UK)",
      description:
        "Official authorization to supply Perkins genuine parts and engines, ensuring quality, warranty coverage, and technical support for all Perkins-powered generator systems.",
    },
    {
      name: "PTA Registered Vendor",
      category: "Telecom Compliance",
      issuer: "Pakistan Telecommunication Authority",
      description:
        "Registered vendor status with PTA enabling HNL to provide telecom infrastructure services to all licensed operators across Pakistan.",
    },
  ]

  const partners = [
    {
      name: "Perkins (UK)",
      category: "Engine & Parts",
      region: "United Kingdom",
      description:
        "Authorized supplier for Perkins diesel engines and genuine parts, providing reliable power generation solutions for Pakistan's infrastructure with global warranty coverage.",
    },
    {
      name: "AGG Power",
      category: "DG Manufacturing",
      region: "Global",
      description:
        "Authorized partnership for diesel generator manufacturing, enabling HNL to deliver A-Series and P-Series generators with AGG's proven technology and reliability.",
    },
    {
      name: "Huawei / Haiwu / Sorotec",
      category: "Power & Cooling Solutions",
      region: "China",
      description:
        "Strategic partnership for advanced power systems and precision cooling solutions deployed in telecom infrastructure and data centers across Pakistan.",
    },
    {
      name: "Centiel",
      category: "UPS Systems",
      region: "Switzerland",
      description:
        "Partnership for enterprise-grade uninterruptible power supply systems ensuring continuous operations for data centers and mission-critical facilities.",
    },
    {
      name: "Leoch",
      category: "Battery Solutions",
      region: "Global",
      description:
        "Collaboration for high-performance battery systems including VRLA and lithium-ion batteries for telecom, data center, and renewable energy applications.",
    },
    {
      name: "TNSS Global",
      category: "E2E RF / NPO Services",
      region: "Global",
      description:
        "Partnership for end-to-end RF engineering and network performance optimization services supporting Pakistan's major telecom operators.",
    },
    {
      name: "Coppergat",
      category: "OEM Cable Partner",
      region: "Pakistan",
      description:
        "Strategic OEM partnership for high-quality cables and wiring solutions used in telecom, power, and data center infrastructure projects nationwide.",
    },
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero-about-company.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-12 w-12 text-hnl-red" />
            <h1 className="text-4xl md:text-5xl font-bold">Certifications & Partners</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            ISO-certified quality backed by strategic partnerships with global technology leaders
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">International Certifications</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                HNL maintains rigorous international quality, environmental, and safety certifications ensuring
                world-class service delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-hnl-red to-red-700 flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{cert.name}</h3>
                      <div className="text-sm text-hnl-red font-medium mb-2">{cert.category}</div>
                      <p className="text-sm text-gray-500 mb-3 italic">{cert.issuer}</p>
                      <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Technology Partners</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Collaborating with world-leading technology providers to deliver cutting-edge solutions across
                Pakistan's infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-hnl-red transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0">
                      <Globe className="h-8 w-8 text-hnl-red" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{partner.name}</h3>
                      <div className="text-xs text-gray-500">{partner.region}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-hnl-red mb-2">{partner.category}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Commitment to Excellence</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-[#E31B23]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-[#E31B23]" />
                  </div>
                  <h3 className="font-bold mb-2">Quality Assured</h3>
                  <p className="text-sm text-gray-600">
                    ISO-certified processes ensuring consistent excellence in every project delivery
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-[#E31B23]/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#E31B23]" />
                  </div>
                  <h3 className="font-bold mb-2">Global Standards</h3>
                  <p className="text-sm text-gray-600">
                    Partnerships with world leaders bringing international best practices to Pakistan
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-[#E31B23]/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#E31B23]" />
                  </div>
                  <h3 className="font-bold mb-2">Continuous Improvement</h3>
                  <p className="text-sm text-gray-600">
                    Regular audits and certifications maintaining our commitment to excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form Section */}
      <PartnershipInquiryForm />
    </>
  )
}
