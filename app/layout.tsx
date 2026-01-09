import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChatWidgetConditional } from "@/components/floating-chat-widget-conditional"
import { ScrollManager } from "@/components/scroll-manager"
import { CtaSection } from "@/components/cta-section"
import { siteConfig } from "@/lib/site-config"
import { CaptchaProvider } from "@/components/captcha-provider"
import { SiteChromeConditional } from "@/components/site-chrome-conditional"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.main),
  title: {
    default: `${siteConfig.company.name} | ${siteConfig.company.tagline} - Enterprise Infrastructure & Power Solutions Pakistan`,
    template: `%s | ${siteConfig.company.name} Pakistan`,
  },
  description:
    "HNL (Hitech Network Pvt. Ltd.) - Pakistan's trusted partner for telecom infrastructure, diesel generators, UPS systems, solar solutions, BESS, and enterprise IT services. Energy Anytime Anywhere.",
  keywords: [
    "HNL Pakistan",
    "Hitech Network",
    "telecom infrastructure Pakistan",
    "diesel generators Pakistan",
    "UPS systems Pakistan",
    "solar solutions Pakistan",
    "BESS Pakistan",
    "energy solutions Pakistan",
    "IT services Pakistan",
    "fiber rollout Pakistan",
    "tower installation Pakistan",
    "AGG Power Pakistan",
    "Perkins generators Pakistan",
    "Centiel UPS Pakistan",
    "cloud migration Pakistan",
    "AI agents Pakistan",
    "NOC monitoring Pakistan",
    "EPC contractor Pakistan",
  ],
  authors: [{ name: siteConfig.company.legalName, url: siteConfig.urls.main }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.urls.main,
    siteName: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
    title: `${siteConfig.company.name} | Enterprise Infrastructure, Energy & Power Solutions Pakistan`,
    description:
      "Pakistan's trusted partner for telecom infrastructure, energy solutions, and enterprise IT services. 20+ years of excellence, 144+ offices nationwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.company.name} - ${siteConfig.company.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} | ${siteConfig.company.tagline}`,
    description: "Pakistan's trusted partner for telecom infrastructure, energy solutions, and enterprise IT services.",
    images: ["/og-image.jpg"],
    creator: "@HNLPakistan",
    site: "@HNLPakistan",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    other: {
      "msvalidate.01": "bing-verification-code-here",
      "facebook-domain-verification": "facebook-verification-code-here",
    },
  },
  alternates: {
    canonical: siteConfig.urls.main,
    languages: {
      "en-PK": siteConfig.urls.main,
      en: siteConfig.urls.main,
    },
  },
  category: "technology",
  classification: "Business/Technology/Energy",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  other: {
    "geo.region": "PK",
    "geo.placename": "Lahore",
    "geo.position": "31.4804;74.3239",
    ICBM: "31.4804, 74.3239",
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
    coverage: "Pakistan",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E31B23" },
    { media: "(prefers-color-scheme: dark)", color: "#E31B23" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#E31B23" />
        <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* App Names */}
        <meta name="application-name" content={siteConfig.company.name} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.company.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "Pakistan's trusted partner for telecom infrastructure, energy solutions, and enterprise IT services.",
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
              ],
              sameAs: [
                siteConfig.social.linkedin,
                siteConfig.social.facebook,
                siteConfig.social.twitter,
                siteConfig.social.youtube,
              ],
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
              knowsAbout: [
                "Telecom Infrastructure",
                "Fiber Optic Networks",
                "Diesel Generators",
                "Battery Energy Storage",
                "Solar Power",
                "Cloud Computing",
                "AI Agents",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />

        {/* Google Analytics Placeholder */}
        {/* Uncomment and add your GA4 ID
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}

        {/* Microsoft Clarity Placeholder */}
        {/* Uncomment and add your Clarity ID
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
            `,
          }}
        />
        */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CaptchaProvider />
        <SiteChromeConditional>
          <main className="w-full max-w-[1920px] mx-auto">{children}</main>
        </SiteChromeConditional>
        <FloatingChatWidgetConditional />
        <Analytics />
      </body>
    </html>
  )
}
