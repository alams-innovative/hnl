"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Mail, MessageSquare, MapPinned, Users, FileText } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"

interface ContactHeaderProps {
  title?: string
  description?: string
}

export function ContactHeader({ title, description }: ContactHeaderProps) {
  const pathname = usePathname()

  const tabs = [
    { href: "/contact/inquiry", label: "Inquiry", icon: MessageSquare },
    { href: "/contact/locations", label: "Office Locations", icon: MapPinned },
    { href: "/contact/distributors", label: "Distributor Network", icon: Users },
    { href: "/contact/quote", label: "Request Quote", icon: FileText },
  ]

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {/* Minimalist Hero */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-10 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{title || "How Can We Help You?"}</h1>
              <p className="text-gray-400 text-sm">{description || "Choose how you'd like to connect with our team"}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+924211100845"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                <Phone className="h-4 w-4" />
                (+92-42) 111-000-845
              </a>
              <a
                href="mailto:info@hnl.com.pk"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                <Mail className="h-4 w-4" />
                info@hnl.com.pk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-gray-100 border-b border-gray-200 sticky top-[80px] z-40">
        <div className="container">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href
              const Icon = tab.icon
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                    isActive
                      ? "border-primary text-primary bg-white"
                      : "border-transparent text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
