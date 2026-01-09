import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowRight } from "lucide-react"

interface ArticleCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  featured?: boolean
  image?: string
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  date,
  featured,
  image,
}: ArticleCardProps) {
  return (
    <Link href={`/resources/blog/${slug}`} className="group block">
      <Card
        className={`h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-1 rounded-2xl overflow-hidden ${
          featured ? "border-primary shadow-glow" : "border-gray-200 hover:border-primary"
        }`}
      >
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {featured && (
              <div className="absolute top-3 left-3">
                <Badge className="bg-primary text-white shadow-lg">Featured</Badge>
              </div>
            )}
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant={featured ? "default" : "outline"}
              className={
                featured
                  ? "bg-gradient-to-r from-primary to-primary/80 shadow-md"
                  : "border-primary/20 bg-primary/5 text-primary"
              }
            >
              {category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground bg-gray-100 px-2.5 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {readTime}
            </div>
          </div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-2">{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed mb-5 text-gray-600">{excerpt}</p>
          <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
            Read Article
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export { ArticleCard }
