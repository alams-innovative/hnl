import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function RecommendedServices({
  title = "Related Solutions",
  services,
}: {
  title?: string
  services: { title: string; description: string; href: string }[]
}) {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:border-red-600 hover:shadow-lg transition-all duration-300 border-2">
              <h3 className="font-semibold text-xl mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Button
                asChild
                variant="ghost"
                className="group p-0 h-auto text-red-600 hover:text-red-700 font-semibold"
              >
                <Link href={service.href}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Keep default export for backward compatibility
export default RecommendedServices
