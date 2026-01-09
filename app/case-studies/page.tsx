import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import CaseStudyCard from "@/components/case-study-card"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Case Studies | HNL - Infrastructure & Enterprise Solutions",
  description:
    "Explore HNL case studies showcasing successful telecom rollouts, energy solutions, and IT implementations across Pakistan.",
}

const caseStudies = [
  {
    slug: "jazz-fiber-rollout-lahore",
    title: "450km Fiber Rollout for Jazz in Lahore",
    industry: "Telecom",
    results:
      "Complete FTTH network deployment across 12 housing societies in Lahore, connecting 45,000 homes in 8 months.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", // fiber optic cables
  },
  {
    slug: "telenor-bess-installation",
    title: "BESS Installation for 200 Telenor Sites",
    industry: "Telecom",
    results: "Hybrid power solution deployment across Punjab and KPK, reducing diesel consumption by 65%.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", // solar panels
  },
  {
    slug: "k-electric-hybrid-power",
    title: "Hybrid Power System for K-Electric Substations",
    industry: "Energy",
    results: "Solar-diesel-battery hybrid systems for 15 critical substations in Karachi with PKR 120M annual savings.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80", // power infrastructure
  },
  {
    slug: "hbl-cloud-migration",
    title: "Cloud Migration for HBL Banking Applications",
    industry: "Enterprise",
    results: "Migration of core banking applications to hybrid cloud infrastructure with 99.99% uptime achieved.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", // data center
  },
  {
    slug: "ptcl-noc-monitoring",
    title: "NOC Monitoring for PTCL Fiber Network",
    industry: "Telecom",
    results: "24/7 network monitoring for 5,000km fiber backbone across Pakistan with 40% faster fault resolution.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", // monitoring screens
  },
  {
    slug: "lucky-cement-data-analytics",
    title: "Big Data Analytics for Lucky Cement",
    industry: "Manufacturing",
    results:
      "Predictive maintenance and production optimization using IoT sensors and AI analytics for 18% production increase.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", // industrial facility
  },
]

export default function CaseStudiesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black py-20 text-white">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mt-12 max-w-3xl">
              <span className="inline-block rounded-full bg-red-600/20 px-4 py-2 text-sm font-medium text-red-400 mb-6">
                Real Projects. Real Results.
              </span>

              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">Case Studies</h1>

              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Explore how HNL delivers measurable impact through infrastructure, energy, and IT solutions for
                Pakistan's leading enterprises.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-8 max-w-xl">
                <div>
                  <div className="text-3xl font-bold text-red-500">50+</div>
                  <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500">PKR 2B+</div>
                  <div className="text-sm text-gray-400 mt-1">Client Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500">99.9%</div>
                  <div className="text-sm text-gray-400 mt-1">Avg. Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.slug} {...study} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
