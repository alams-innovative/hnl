import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DivisionCard({
  title,
  description,
  icon,
  services,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  services: string[]
  href: string
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-premium hover:shadow-glow hover:-translate-y-1"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 shadow-lg group-hover:scale-110">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-black group-hover:text-primary transition-colors">{title}</h3>
        </div>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed text-base">{description}</p>
      <ul className="space-y-3 mb-6">
        {services.map((service) => (
          <li key={service} className="flex items-center gap-3 text-sm text-gray-600">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/80" />
            {service}
          </li>
        ))}
      </ul>
      <span className="text-primary font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
        Explore Services
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}
