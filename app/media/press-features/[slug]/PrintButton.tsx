"use client"

import { Printer } from "lucide-react"

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
      aria-label="Print article"
    >
      <Printer className="h-5 w-5" />
    </button>
  )
}
