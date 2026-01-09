export async function verifyCaptcha(token: string): Promise<boolean> {
  // In development, skip captcha verification
  if (process.env.NODE_ENV === "development") {
    return true
  }

  // For production, integrate with reCAPTCHA
  // User needs to add RECAPTCHA_SECRET_KEY to environment variables
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.warn("[v0] RECAPTCHA_SECRET_KEY not set, skipping verification")
    return true
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success && data.score > 0.5
  } catch (error) {
    console.error("[v0] Captcha verification error:", error)
    return false
  }
}

export async function getCaptchaToken(): Promise<string | null> {
  // Check if running in browser
  if (typeof window === "undefined") {
    return null
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    console.warn("[v0] NEXT_PUBLIC_RECAPTCHA_SITE_KEY not set, skipping captcha")
    return "dev-bypass-token"
  }

  try {
    // Wait for grecaptcha to be ready
    await new Promise<void>((resolve) => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve())
      } else {
        // If grecaptcha not loaded, resolve anyway
        resolve()
      }
    })

    // Execute reCAPTCHA
    if (window.grecaptcha && window.grecaptcha.execute) {
      const token = await window.grecaptcha.execute(siteKey, { action: "submit" })
      return token
    }

    return "dev-bypass-token"
  } catch (error) {
    console.error("[v0] Get captcha token error:", error)
    return "dev-bypass-token"
  }
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}
