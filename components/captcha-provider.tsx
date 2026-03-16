"use client"

import { useEffect, useState } from "react"

// Track if script is already loaded globally
let captchaScriptLoaded = false
let captchaLoadPromise: Promise<void> | null = null

// Function to load captcha script on demand
export function loadCaptchaScript(): Promise<void> {
  if (captchaScriptLoaded) {
    return Promise.resolve()
  }
  
  if (captchaLoadPromise) {
    return captchaLoadPromise
  }

  captchaLoadPromise = new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}`
    script.async = true
    script.onload = () => {
      captchaScriptLoaded = true
      resolve()
    }
    document.head.appendChild(script)
  })

  return captchaLoadPromise
}

// CaptchaProvider is now a no-op - script loads on demand when form is interacted with
export function CaptchaProvider() {
  // Don't load script immediately - it will be loaded on demand by forms
  return null
}

export function useCaptcha() {
  const getCaptchaToken = async (action: string): Promise<string> => {
    if (typeof window === "undefined") {
      return ""
    }
    
    // Load captcha script on demand when token is requested
    await loadCaptchaScript()
    
    return new Promise((resolve) => {
      if (!(window as any).grecaptcha) {
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
