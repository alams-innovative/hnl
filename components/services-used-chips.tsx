import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ServicesUsedChips({
  services,
}: {
  services: { name: string; href: string }[]
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {services.map((service) => (
        <Link key={service.href} href={service.href}>
          <Badge
            variant="outline"
            className="cursor-pointer border-hnl-red text-hnl-red hover:bg-hnl-red hover:text-white"
          >
            {service.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
