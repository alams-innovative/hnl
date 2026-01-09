"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollManager() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      // If there's a hash/anchor, scroll to it with the heading centered
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - window.innerHeight / 2 + element.clientHeight / 2

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0)
    }
  }, [pathname])

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash) {
        const href = anchor.getAttribute("href")
        // Check if it's an internal anchor link (starts with #)
        if (href?.startsWith("#")) {
          e.preventDefault()
          const element = document.querySelector(anchor.hash)

          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - window.innerHeight / 2 + element.clientHeight / 2

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })

            // Update URL without triggering navigation
            window.history.pushState(null, "", anchor.hash)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return null
}
