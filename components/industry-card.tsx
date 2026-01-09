import type React from "react"
import Link from "next/link"

export default function IndustryCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-black group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 mb-5 shadow-md group-hover:scale-110 group-hover:shadow-lg">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-black mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </Link>
  )
}
