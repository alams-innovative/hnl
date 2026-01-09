import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import { Newspaper, ArrowRight } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Press & Features | HNL Pakistan - Media Coverage",
  description:
    "HNL Pakistan in the news. Read about our latest projects, awards, and industry recognition in national and international media.",
}

const pressReleases = [
  {
    slug: "powering-pakistan-digital-backbone-largest-managed-services-provider",
    title:
      "Powering Pakistan's Digital Backbone: How HNL Quietly Became the Country's Largest Managed Services Provider",
    date: "March 2023",
    publication: "HNL Official",
    excerpt:
      "For nearly two decades, Pakistan's digital expansion has relied on an infrastructure layer that rarely makes headlines—until scale, resilience, and reliability become mission-critical. At the center of this transformation stands Hitech Network (Pvt.) Limited (HNL).",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
  },
  {
    slug: "advanced-public-sector-data-centers-mission-critical-systems",
    title:
      "Inside Pakistan's Most Advanced Public-Sector Data Centers: HNL's End-to-End Transformation of Mission-Critical Systems",
    date: "August 2022",
    publication: "HNL Official",
    excerpt:
      "When public safety, real-time surveillance, and national data integrity converge, failure is not an option. This reality shaped one of Pakistan's most complex government infrastructure deployments.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
  },
  {
    slug: "redefining-energy-reliability-hybrid-power-renewable-adoption",
    title:
      "Redefining Energy Reliability: How HNL Is Driving Hybrid Power and Renewable Adoption Across Enterprise Pakistan",
    date: "November 2021",
    publication: "HNL Official",
    excerpt:
      "As energy volatility continues to challenge businesses nationwide, enterprises are rethinking how power is generated, stored, and managed. At the forefront of this transition is HNL.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop",
  },
]

const mediaFeatures = [
  {
    slug: "engineering-invisible-pakistan-digital-economy-infrastructure",
    title: "Engineering the Invisible: How Pakistan's Digital Economy Runs on Physical Infrastructure",
    date: "December 2024",
    category: "Industry Feature | Engineering & Telecom Systems",
    excerpt:
      "In the global conversation around digital transformation, attention often gravitates toward software, cloud platforms, and artificial intelligence. Yet beneath every successful digital economy lies a less visible but far more demanding foundation: physical infrastructure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    author: {
      name: "Kamran Ahmed Shah",
      title: "Chief Technology Officer",
      email: "kamran.shah@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    },
  },
  {
    slug: "hybrid-power-systems-physics-reliability-telecom-networks",
    title: "Hybrid Power Systems and the Physics of Reliability in Modern Telecom Networks",
    date: "November 2024",
    category: "Energy Systems & Applied Engineering Feature",
    excerpt:
      "The future of telecom reliability does not lie in a single energy source. It lies in hybridization—the intelligent orchestration of grid power, diesel generation, solar input, and battery storage.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop",
    author: {
      name: "Faisal Mahmood",
      title: "Lead, Energy Solutions",
      email: "faisal.mahmood@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
  },
  {
    slug: "data-centers-switchgear-engineering-always-on-enterprises",
    title: "Data Centers, Switchgear, and the Engineering Discipline Behind Always-On Enterprises",
    date: "October 2024",
    category: "Enterprise Infrastructure & Data Engineering Feature",
    excerpt:
      "In an era where milliseconds define user experience and downtime equates to financial loss, enterprise infrastructure has become a discipline of precision engineering.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    author: {
      name: "Sana Malik",
      title: "Head of Delivery, Enterprise Solutions",
      email: "sana.malik@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    },
  },
  {
    slug: "field-technicians-infrastructure-intelligence-managed-services",
    title: "From Field Technicians to Infrastructure Intelligence: The Evolution of Managed Services",
    date: "September 2024",
    category: "Telecom Operations & Systems Management Feature",
    excerpt:
      "Managed services were once defined by response times and fault resolution. Today, they are defined by predictive intelligence, lifecycle optimization, and operational foresight.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop",
    author: {
      name: "Rizwan Khalid",
      title: "Chief Operations Officer",
      email: "rizwan.khalid@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
  },
]

const awards = [
  {
    title: "Best Infrastructure Service Provider 2024",
    organization: "Pakistan Telecom Awards",
    year: "2024",
    description: "Recognized for excellence in telecom infrastructure deployment and maintenance services.",
  },
  {
    title: "Excellence in Energy Solutions",
    organization: "Energy & Power Pakistan",
    year: "2024",
    description: "Award for innovative hybrid power system deployments across telecom and enterprise sectors.",
  },
  {
    title: "Top Enterprise IT Partner",
    organization: "CIO Pakistan",
    year: "2023",
    description: "Acknowledged as leading system integrator for cloud migration and enterprise IT services.",
  },
]

export default function PressFeaturesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media/project-gallery" },
    { label: "Press & Features", href: "/media/press-features" },
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
        <section className="bg-black py-16 text-white">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="mt-8 flex items-center gap-3">
              <Newspaper className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold md:text-5xl">Press & Features</h1>
            </div>
            <p className="mt-4 max-w-3xl text-lg text-gray-300">
              HNL in the news. Our latest projects, achievements, and industry recognition featured in national and
              international media.
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Press Releases</h2>
                <p className="mt-2 text-gray-600">Official announcements and company news</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {pressReleases.map((release) => (
                <Link
                  key={release.slug}
                  href={`/media/press-features/${release.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={release.image || "/placeholder.svg"}
                      alt={release.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded">
                        {release.publication}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">{release.date}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{release.excerpt}</p>
                    <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                      Read Full Story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Expert Insights</h2>
              <p className="mt-2 text-gray-600">Industry perspectives from HNL leadership and engineering experts</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {mediaFeatures.map((feature) => (
                <Link
                  key={feature.slug}
                  href={`/media/press-features/${feature.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded">
                        {feature.category.split("|")[0].trim()}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/80 text-sm mb-2">{feature.date}</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6">{feature.excerpt}</p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={feature.author.image || "/placeholder.svg"}
                          alt={feature.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">{feature.author.name}</p>
                        <p className="text-gray-500 text-xs truncate">{feature.author.title}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-red-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">Awards & Recognition</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {awards.map((award) => (
                <div key={award.title} className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-6">
                  <div className="text-5xl mb-4">🏆</div>
                  <div className="text-sm text-red-600 font-medium mb-2">{award.organization}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <div className="text-sm text-gray-500 mb-3">{award.year}</div>
                  <p className="text-gray-700">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
