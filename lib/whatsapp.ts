/**
 * WhatsApp Utility Function
 * Generates WhatsApp links with pre-filled context for tracking and better UX
 */

export interface WhatsAppLinkParams {
  action: "RFQ" | "Meeting" | "Quote" | "SiteSurvey" | "Consultation" | "General"
  page?: string
  section?: string
  service?: string
  industry?: string
}

export function getWhatsAppLink({ action, page, section, service, industry }: WhatsAppLinkParams): string {
  // HNL WhatsApp Business Number (Pakistan format)
  const phone = "923001234567" // Replace with actual HNL number

  // Build contextual message
  let message = `Hi HNL Team, I'm interested in ${action}`

  if (service) {
    message += ` for ${service}`
  }

  if (industry) {
    message += ` (${industry} sector)`
  }

  if (page) {
    message += ` via ${page}`
  }

  if (section) {
    message += ` - ${section}`
  }

  message += `. Please get in touch.`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

/**
 * Preset WhatsApp links for common actions
 */
export const whatsappPresets = {
  requestQuote: getWhatsAppLink({ action: "Quote" }),
  scheduleMeeting: getWhatsAppLink({ action: "Meeting" }),
  siteSurvey: getWhatsAppLink({ action: "SiteSurvey" }),
  general: getWhatsAppLink({ action: "General" }),
}
