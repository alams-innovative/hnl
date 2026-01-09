/**
 * HNL Site Configuration
 * Master configuration file - Change contact details, offices, emails here ONCE
 * All components and pages import from this file
 */

export const siteConfig = {
  // Company Info
  company: {
    name: "HNL",
    legalName: "Hitech Network Pvt. Ltd.",
    tagline: "Energy Anytime Anywhere",
    foundedYear: 2004,
    registrationNumber: "0012345-6",
    jurisdiction: "Islamic Republic of Pakistan",
    employees: 2000,
  },

  // Primary Contact Numbers (change here to update everywhere)
  phone: {
    primary: "+92-42-35761999",
    sales: "+92-42-35761888",
    support: "+92-42-35761777",
    emergency: "+92-300-8426299",
  },

  // WhatsApp Number (used in floating chat, contact pages, etc.)
  whatsapp: {
    number: "923008426299", // Format: country code + number without +
    displayNumber: "+92-300-8426299",
  },

  // Email Addresses
  email: {
    info: "info@hnl.com.pk",
    sales: "sales@hnl.com.pk",
    support: "support@hnl.com.pk",
    careers: "careers@hnl.com.pk",
    legal: "legal@hnl.com.pk",
    compliance: "compliance@hnl.com.pk",
    security: "security@hnl.com.pk",
    partnerships: "partnerships@hnl.com.pk",
    media: "media@hnl.com.pk",
  },

  // Headquarters
  headquarters: {
    name: "Head Office - Lahore",
    address: "44 Tipu Block, New Garden Town",
    city: "Lahore",
    province: "Punjab",
    country: "Pakistan",
    postalCode: "54000",
    coordinates: {
      lat: 31.4804,
      lng: 74.3239,
    },
    phone: "+92-42-35761999",
    fax: "+92-42-35761998",
  },

  // Regional Offices
  offices: [
    {
      id: "lahore",
      name: "Head Office - Lahore",
      type: "headquarters",
      address: "44 Tipu Block, New Garden Town",
      city: "Lahore",
      province: "Punjab",
      phone: "+92-42-35761999",
      email: "lahore@hnl.com.pk",
      coordinates: { lat: 31.4804, lng: 74.3239 },
    },
    {
      id: "karachi",
      name: "Karachi Office",
      type: "regional",
      address: "Suite 501, Business Plaza, I.I. Chundrigar Road",
      city: "Karachi",
      province: "Sindh",
      phone: "+92-21-32631999",
      email: "karachi@hnl.com.pk",
      coordinates: { lat: 24.8607, lng: 67.0011 },
    },
    {
      id: "islamabad",
      name: "Islamabad Office",
      type: "regional",
      address: "Office 201, Evacuee Trust Complex, F-5",
      city: "Islamabad",
      province: "Federal Capital",
      phone: "+92-51-2871999",
      email: "islamabad@hnl.com.pk",
      coordinates: { lat: 33.6844, lng: 73.0479 },
    },
    {
      id: "faisalabad",
      name: "Faisalabad Office",
      type: "regional",
      address: "Office 12, Allied Bank Building, D-Ground",
      city: "Faisalabad",
      province: "Punjab",
      phone: "+92-41-8731999",
      email: "faisalabad@hnl.com.pk",
      coordinates: { lat: 31.4504, lng: 73.135 },
    },
    {
      id: "multan",
      name: "Multan Office",
      type: "regional",
      address: "Suite 8, Business Center, Nishtar Road",
      city: "Multan",
      province: "Punjab",
      phone: "+92-61-4571999",
      email: "multan@hnl.com.pk",
      coordinates: { lat: 30.1575, lng: 71.5249 },
    },
    {
      id: "peshawar",
      name: "Peshawar Office",
      type: "regional",
      address: "Office 45, Sarhad Chamber, University Road",
      city: "Peshawar",
      province: "KPK",
      phone: "+92-91-5871999",
      email: "peshawar@hnl.com.pk",
      coordinates: { lat: 34.0151, lng: 71.5249 },
    },
    {
      id: "quetta",
      name: "Quetta Office",
      type: "regional",
      address: "Office 12, Jinnah Road Commercial Area",
      city: "Quetta",
      province: "Balochistan",
      phone: "+92-81-2831999",
      email: "quetta@hnl.com.pk",
      coordinates: { lat: 30.1798, lng: 66.975 },
    },
  ],

  // Operating Cities (where HNL has field presence)
  operatingCities: [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
    "Hyderabad",
    "Sukkur",
    "Bahawalpur",
    "Sargodha",
    "Sahiwal",
    "Abbottabad",
    "Mardan",
    "Gwadar",
    "Dera Ghazi Khan",
    "Rahim Yar Khan",
  ],

  // Social Media Links
  social: {
    linkedin: "https://www.linkedin.com/company/hnl-pakistan",
    facebook: "https://www.facebook.com/hnlpakistan",
    twitter: "https://twitter.com/HNLPakistan",
    youtube: "https://www.youtube.com/@HNLPakistan",
    instagram: "https://www.instagram.com/hnlpakistan",
  },

  // Website URLs
  urls: {
    main: "https://hnl.com.pk",
    seo: "https://seo.hnl.com.pk",
  },

  // Business Hours
  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
    sunday: "Sunday: Closed",
    timezone: "PKT (UTC+5)",
    support247: true,
  },

  // Response Times (for forms and legal)
  responseTimes: {
    inquiry: "24-48 hours",
    quote: "2-3 business days",
    distributor: "4-6 business days",
    legal: "3 months minimum",
    security: "Internal assessment - no committed timeline",
  },

  // Legal Information
  legal: {
    privacyEmail: "legal@hnl.com.pk",
    complianceEmail: "compliance@hnl.com.pk",
    securityEmail: "security@hnl.com.pk",
    responseTime: "3 months minimum for initial response",
    jurisdiction: "Islamic Republic of Pakistan",
    governingLaw: "Laws of Pakistan",
    disputeResolution: "Courts of Lahore, Pakistan",
  },
} as const

// Helper functions
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.whatsapp.number}`
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}

export function getPhoneUrl(type: keyof typeof siteConfig.phone = "primary"): string {
  return `tel:${siteConfig.phone[type].replace(/-/g, "")}`
}

export function getEmailUrl(type: keyof typeof siteConfig.email = "info"): string {
  return `mailto:${siteConfig.email[type]}`
}

export function getOfficeByCity(city: string) {
  return siteConfig.offices.find((office) => office.city.toLowerCase() === city.toLowerCase())
}

export function getHeadquarters() {
  return siteConfig.offices.find((office) => office.type === "headquarters")
}

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig
export type Office = (typeof siteConfig.offices)[number]
export type EmailType = keyof typeof siteConfig.email
export type PhoneType = keyof typeof siteConfig.phone
