import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CompanyStats } from "@/components/company-stats"
import { CTASection } from "@/components/cta-section"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Link from "next/link"
import { Target, Users, Building2, Award, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "About HNL | Infrastructure, Energy & IT Solutions in Pakistan",
  description:
    "Learn about HNL - Pakistan's largest Managed Services provider for telecom and enterprise markets. Since 2004, delivering AC & DC Power Solutions and infrastructure services across 16,000+ sites.",
}

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]

  const sections = [
    {
      href: "/about/vision-mission",
      icon: Target,
      title: "Our Story & Mission",
      description: "Know about our journey & vision for Pakistan's infrastructure",
    },
    {
      href: "/about/leadership",
      icon: Users,
      title: "Leadership & Team",
      description: "Meet our expert team driving innovation",
    },
    {
      href: "/about/company",
      icon: Building2,
      title: "Company Profile",
      description: "Our history, values, and commitment to Pakistan",
    },
    {
      href: "/about/certifications",
      icon: Award,
      title: "Certifications & Partners",
      description: "ISO certifications and global partnerships",
    },
    {
      href: "/about/sustainability",
      icon: Leaf,
      title: "Sustainability",
      description: "Our environmental commitment and green initiatives",
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

      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-about-company.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About HNL</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Pakistan's largest Managed Services provider and trusted partner for mission-critical power solutions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hitech Network (Pvt.) Limited, since its inception in 2004, is a dynamic group striving to re-define the
                energy industry while supplying reliable AC & DC Power Solutions and implementation services worldwide.
                HNL is the pioneer and currently the largest Managed Services provider for telecom and enterprise market
                segments across Pakistan.
              </p>
              <p>
                With the largest footprint in Pakistan covering approximately 16,000 managed sites and a nationwide
                presence through 144 offices, HNL has established itself as Pakistan's most trusted infrastructure
                partner. Our 21+ years of managed services experience, 2,120+ technical workforce, and over 50% market
                share in the South region enable us to deliver engineering excellence across Pakistan's most demanding
                sectors.
              </p>
              <p>
                From fiber rollouts and telecom tower power systems to enterprise IT infrastructure and 8
                Perkins-standard DG overhauling workshops with 450+ monthly capacity—we serve Pakistan's leading telecom
                operators including Jazz, Telenor, Ufone (via Huawei), energy providers, banks, government agencies, and
                manufacturers with turnkey solutions backed by PEC certifications, AEDB C1 Category approval, and
                Pakistan-based engineering teams.
              </p>
            </div>

            <div className="my-12">
              <CompanyStats />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group block p-6 border-2 border-gray-200 rounded-xl hover:border-hnl-red hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-hnl-red/10 to-hnl-red/5 text-hnl-red flex items-center justify-center group-hover:from-hnl-red group-hover:to-red-700 group-hover:text-white transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-hnl-red transition-colors">{section.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with HNL"
        description="Join Pakistan's leading enterprises who trust HNL for their critical infrastructure"
        primaryText="Request a Quote"
        secondaryText="Schedule a Meeting"
        page="About"
      />
    </>
  )
}
