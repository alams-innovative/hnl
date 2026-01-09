import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CaseStudyCard({
  title,
  industry,
  results,
  image,
  slug,
}: {
  title: string
  industry: string
  results: string
  image: string
  slug: string
}) {
  return (
    <Link href={`/case-studies/${slug}`} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1 overflow-hidden rounded-2xl border-gray-200 hover:border-primary">
        <div className="relative h-52 w-full bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="pb-3">
          <div className="mb-3">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary font-semibold">
              {industry}
            </Badge>
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="mb-5 text-gray-600 leading-relaxed">{results}</p>
          <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
