/**
 * SEO Utility Functions
 * JSON-LD Schema generation for structured data
 * 2025/2026 SEO Standards Compliant
 */

import { siteConfig } from "./site-config"

export interface BreadcrumbItem {
  name: string
  url: string
}

// Breadcrumb Schema (Google Rich Results)
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.urls.main}${item.url}`,
    })),
  }
}

// Organization Schema (Enhanced for AI/LLM)
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.urls.main}/#organization`,
    name: siteConfig.company.legalName,
    alternateName: siteConfig.company.name,
    url: siteConfig.urls.main,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.urls.main}/hnl-logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.urls.main}/hnl-logo-mark.png`,
    description:
      "Pakistan's trusted partner for telecom infrastructure, energy solutions, and enterprise IT services. 20+ years of excellence.",
    slogan: siteConfig.company.tagline,
    foundingDate: siteConfig.company.foundedYear.toString(),
    foundingLocation: {
      "@type": "Place",
      name: "Lahore, Pakistan",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: siteConfig.company.employees,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.headquarters.address,
      addressLocality: siteConfig.headquarters.city,
      addressRegion: siteConfig.headquarters.province,
      postalCode: siteConfig.headquarters.postalCode,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.headquarters.coordinates.lat,
      longitude: siteConfig.headquarters.coordinates.lng,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.primary,
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.sales,
        contactType: "sales",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.support,
        contactType: "technical support",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
      siteConfig.social.instagram,
    ],
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    knowsAbout: [
      "Telecom Infrastructure",
      "Fiber Optic Networks",
      "Diesel Generators",
      "Battery Energy Storage Systems",
      "Solar Power Solutions",
      "Cloud Computing",
      "Enterprise IT Services",
      "AI Agents",
      "NOC Monitoring",
      "EPC Projects",
    ],
  }
}

// Website Schema with SearchAction
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.urls.main}/#website`,
    name: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
    url: siteConfig.urls.main,
    description: "Enterprise infrastructure, energy & power solutions, and IT services provider in Pakistan",
    publisher: {
      "@id": `${siteConfig.urls.main}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.urls.main}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en", "ur"],
  }
}

// Local Business Schema (for each office)
export function generateLocalBusinessSchema(officeId?: string) {
  const office = officeId
    ? siteConfig.offices.find((o) => o.id === officeId)
    : siteConfig.offices.find((o) => o.type === "headquarters")

  if (!office) return null

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.urls.main}/contact/locations#${office.id}`,
    name: `${siteConfig.company.name} - ${office.name}`,
    image: `${siteConfig.urls.main}/hnl-logo-mark.png`,
    telephone: office.phone,
    email: office.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressRegion: office.province,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: office.coordinates.lat,
      longitude: office.coordinates.lng,
    },
    url: `${siteConfig.urls.main}/contact/locations`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    parentOrganization: {
      "@id": `${siteConfig.urls.main}/#organization`,
    },
  }
}

// Service Schema
export function generateServiceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = "Pakistan",
  image,
}: {
  name: string
  description: string
  serviceType: string
  url: string
  areaServed?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.urls.main}${url}#service`,
    name,
    description,
    url: `${siteConfig.urls.main}${url}`,
    image: image || `${siteConfig.urls.main}/hnl-logo-mark.png`,
    provider: {
      "@id": `${siteConfig.urls.main}/#organization`,
    },
    serviceType,
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.urls.main}/contact/quote`,
      servicePhone: siteConfig.phone.sales,
      serviceSmsNumber: siteConfig.whatsapp.displayNumber,
    },
  }
}

// Product Schema
export function generateProductSchema({
  name,
  description,
  brand,
  category,
  url,
  image,
  sku,
}: {
  name: string
  description: string
  brand: string
  category: string
  url: string
  image?: string
  sku?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.urls.main}${url}#product`,
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    url: `${siteConfig.urls.main}${url}`,
    image: image || `${siteConfig.urls.main}/placeholder.svg?height=600&width=600&query=${encodeURIComponent(name)}`,
    sku,
    manufacturer: {
      "@type": "Organization",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PKR",
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      seller: {
        "@id": `${siteConfig.urls.main}/#organization`,
      },
    },
  }
}

// FAQ Schema (Google Rich Snippets)
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.urls.main}/resources/faq#faqpage`,
    mainEntity: faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${siteConfig.urls.main}/resources/faq#question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// Article Schema (for blog posts)
export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.urls.main}${url}#article`,
    headline: title,
    description,
    url: `${siteConfig.urls.main}${url}`,
    image: image || `${siteConfig.urls.main}/og-image.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || siteConfig.company.legalName,
      url: siteConfig.urls.main,
    },
    publisher: {
      "@id": `${siteConfig.urls.main}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.urls.main}${url}`,
    },
  }
}

// HowTo Schema (for technical guides)
export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
  url,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
  totalTime?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${siteConfig.urls.main}${url}#howto`,
    name,
    description,
    totalTime: totalTime || "PT30M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// Video Schema
export function generateVideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
  url,
}: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  embedUrl: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${siteConfig.urls.main}${url}#video`,
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    embedUrl,
    contentUrl: embedUrl,
    publisher: {
      "@id": `${siteConfig.urls.main}/#organization`,
    },
  }
}

// Event Schema (for events page)
export function generateEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  url,
  image,
}: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteConfig.urls.main}${url}#event`,
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
    },
    image: image || `${siteConfig.urls.main}/hnl-logo-mark.png`,
    organizer: {
      "@id": `${siteConfig.urls.main}/#organization`,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  }
}

// Page Metadata Generator
export function generatePageMetadata({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
  noIndex = false,
}: {
  title: string
  description: string
  keywords?: string[]
  url: string
  image?: string
  type?: "website" | "article" | "product"
  noIndex?: boolean
}) {
  const ogImage = image || `${siteConfig.urls.main}/og-image.jpg`

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: siteConfig.company.legalName, url: siteConfig.urls.main }],
    creator: siteConfig.company.name,
    publisher: siteConfig.company.legalName,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      type,
      locale: "en_PK",
      url: `${siteConfig.urls.main}${url}`,
      siteName: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@HNLPakistan",
      site: "@HNLPakistan",
    },
    alternates: {
      canonical: `${siteConfig.urls.main}${url}`,
    },
  }
}

// Speakable Schema (for voice search / AI assistants)
export function generateSpeakableSchema(url: string, cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.urls.main}${url}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  }
}
