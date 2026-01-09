import type { Metadata } from "next"
import Link from "next/link"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Breadcrumbs from "@/components/breadcrumbs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Zap, Factory, Landmark, Cog } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries We Serve | Infrastructure Solutions Across Pakistan | HNL",
  description:
    "HNL provides specialized telecom, energy, and IT infrastructure solutions for telecom operators, energy sector, enterprises, government, and manufacturing industries across Pakistan.",
}

const industries = [
  {
    icon: Building2,
    title: "Telecommunications",
    description:
      "End-to-end infrastructure deployment, site integration, and operations support for telecom operators nationwide.",
    href: "/industries/telecom",
  },
  {
    icon: Zap,
    title: "Energy Sector",
    description:
      "Power generation, distribution infrastructure, and renewable energy solutions for utilities and IPPs.",
    href: "/industries/energy",
  },
  {
    icon: Cog,
    title: "Enterprise",
    description: "Cloud migration, IT infrastructure, and digital transformation services for corporate organizations.",
    href: "/industries/enterprise",
  },
  {
    icon: Landmark,
    title: "Government",
    description:
      "Mission-critical infrastructure, smart city solutions, and secure IT systems for public sector entities.",
    href: "/industries/government",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial power systems, IoT integration, and facility infrastructure for manufacturing plants.",
    href: "/industries/manufacturing",
  },
]

export default function IndustriesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-industries.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Tailored infrastructure solutions for Pakistan's most demanding sectors. From telecom rollouts to enterprise
            IT, we understand your industry's unique challenges.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card key={index} className="p-8 hover:border-red-600 transition-colors">
                  <Icon className="h-12 w-12 text-red-600 mb-4" />
                  <h2 className="text-2xl font-semibold mb-3">{industry.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  <Button asChild className="bg-red-600 hover:bg-red-700 w-full">
                    <Link href={industry.href}>View Solutions</Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
