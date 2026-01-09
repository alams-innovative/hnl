import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedService {
  title: string
  description: string
  href: string
}

interface RelatedServicesProps {
  title?: string
  services: RelatedService[]
}

export function RelatedServices({ title = "Related Services", services }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.href} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <Button asChild variant="link" className="text-hnl-red p-0">
                <Link href={service.href} className="flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedServices
