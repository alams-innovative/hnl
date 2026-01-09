"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("article h2, article h3"))
    const items: TOCItem[] = elements.map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number(element.tagName.charAt(1)),
    }))
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${heading.level === 3 ? "pl-4" : ""} ${
              activeId === heading.id ? "text-hnl-red font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </Card>
  )
}
