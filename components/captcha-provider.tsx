"use client"

import { useEffect } from "react"

export function CaptchaProvider() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}` // Test key as fallback
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

export function useCaptcha() {
  const getCaptchaToken = async (action: string): Promise<string> => {
    return new Promise((resolve) => {
      if (typeof window === "undefined" || !(window as any).grecaptcha) {
        resolve("")
        return
      }
      ;(window as any).grecaptcha.ready(() => {
        ;(window as any).grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", { action })
          .then(resolve)
      })
    })
  }

  return { getCaptchaToken }
}
