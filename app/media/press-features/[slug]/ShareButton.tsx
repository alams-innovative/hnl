"use client"

import { Share2 } from "lucide-react"

export default function ShareButton({ title }: { title: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href })
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
      aria-label="Share article"
    >
      <Share2 className="h-5 w-5" />
    </button>
  )
}
