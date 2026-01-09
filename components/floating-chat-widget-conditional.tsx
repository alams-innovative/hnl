"use client"

import { usePathname } from "next/navigation"
import { FloatingChatWidget } from "@/components/floating-chat-widget"

export function FloatingChatWidgetConditional() {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin")) return null
  return <FloatingChatWidget />
}


