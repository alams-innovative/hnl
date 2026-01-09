"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { ScrollManager } from "@/components/scroll-manager"

export function SiteChromeConditional({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith("/admin")

  return (
    <>
      {!isAdmin && <Header />}
      <ScrollManager />
      {children}
      {!isAdmin && (
        <>
          <CtaSection />
          <Footer />
        </>
      )}
    </>
  )
}


