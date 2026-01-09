import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
  name?: string
  label?: string
  url?: string
  href?: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const getName = (item: BreadcrumbItem): string => {
    return item.name || item.label || ""
  }

  const getUrl = (item: BreadcrumbItem): string => {
    return item.url || item.href || item.path || "#"
  }

  const filteredItems = items.filter((item) => {
    const name = getName(item)
    const url = getUrl(item)
    return name.toLowerCase() !== "home" && url !== "/"
  })

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
        </li>
        {filteredItems.map((item, index) => {
          const name = getName(item)
          const url = getUrl(item)

          return (
            <li key={url + index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {index === filteredItems.length - 1 ? (
                <span className="font-medium text-foreground">{name}</span>
              ) : (
                <Link href={url} className="text-muted-foreground hover:text-foreground transition-colors">
                  {name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
