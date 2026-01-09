import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard - HNL",
  description: "HNL Admin Dashboard",
  robots: "noindex, nofollow",
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
