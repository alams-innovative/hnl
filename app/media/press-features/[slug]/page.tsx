import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import { Calendar, ArrowLeft, Mail, Building2 } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ShareButton from "./ShareButton"
import PrintButton from "./PrintButton"

// Press releases data
const pressReleases: Record<
  string,
  {
    type: "press-release"
    title: string
    date: string
    publication: string
    image: string
    leadParagraph: string
    sections: Array<{
      type: "paragraph" | "heading" | "quote" | "image" | "stats" | "list"
      content?: string
      cite?: string
      src?: string
      alt?: string
      caption?: string
      title?: string
      items?: Array<{ label: string; value: string } | string>
    }>
  }
> = {
  "powering-pakistan-digital-backbone-largest-managed-services-provider": {
    type: "press-release",
    title:
      "Powering Pakistan's Digital Backbone: How HNL Quietly Became the Country's Largest Managed Services Provider",
    date: "March 2023",
    publication: "HNL Official",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    leadParagraph:
      "For nearly two decades, Pakistan's digital expansion has relied on an infrastructure layer that rarely makes headlines—until scale, resilience, and reliability become mission-critical. At the center of this transformation stands Hitech Network (Pvt.) Limited (HNL), now managing more telecom and enterprise infrastructure sites than any other service provider in the country.",
    sections: [
      {
        type: "paragraph",
        content:
          "Since its establishment in 2004, HNL has grown into Pakistan's number-one Managed Services (MS) and Field Lifecycle Management (FLM) provider, overseeing more than 16,870 live telecom sites nationwide, with a commanding over 50 percent market share in the southern region.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1000&h=500&fit=crop",
        alt: "Telecom infrastructure across Pakistan",
        caption: "HNL's operational footprint spans urban centers and remote regions across Pakistan",
      },
      {
        type: "heading",
        content: "Unmatched Operational Footprint",
      },
      {
        type: "paragraph",
        content:
          "Industry observers point to HNL's unmatched operational footprint as its defining strength. With 144 offices across Pakistan, a workforce exceeding 6,000 field professionals, and 350+ fully equipped service vans, the company has built an execution engine capable of operating at national scale—24 hours a day, in all terrains.",
      },
      {
        type: "quote",
        content:
          "What distinguishes HNL is not just size, but depth. The company operates with an integrated capability that allows it to design, deploy, maintain, and modernize infrastructure without third-party dependency.",
        cite: "Industry Analysis Report",
      },
      {
        type: "heading",
        content: "Beyond Telecom",
      },
      {
        type: "paragraph",
        content:
          "Beyond telecom, HNL's work spans enterprise networks, financial institutions, government infrastructure, and mission-critical data centers, delivering everything from AC/DC power systems and diesel generators to switchgear, containment solutions, and energy optimization.",
      },
      {
        type: "list",
        title: "Key Certifications & Capabilities",
        items: [
          "PERKINS (UK)–approved overhauling workshops",
          "PEC constructor/operator licenses",
          "Engineering Development Board certification for generator manufacturing",
        ],
      },
      {
        type: "heading",
        content: "Strategic Infrastructure Partner",
      },
      {
        type: "paragraph",
        content:
          "As Pakistan accelerates toward a data-driven economy, HNL's role has evolved from service provider to strategic infrastructure partner, ensuring the networks powering millions remain stable, secure, and future-ready.",
      },
    ],
  },
  "advanced-public-sector-data-centers-mission-critical-systems": {
    type: "press-release",
    title:
      "Inside Pakistan's Most Advanced Public-Sector Data Centers: HNL's End-to-End Transformation of Mission-Critical Systems",
    date: "August 2022",
    publication: "HNL Official",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    leadParagraph:
      "When public safety, real-time surveillance, and national data integrity converge, failure is not an option. This reality shaped one of Pakistan's most complex government infrastructure deployments—where HNL delivered complete, end-to-end data center and power solutions for major public-sector command facilities.",
    sections: [
      {
        type: "paragraph",
        content:
          "The project scope extended far beyond conventional installation. HNL engineered and implemented full-scale data center environments, including UPS systems, battery banks, HT/LT panels, precision cooling, contained cold aisle systems, and FM200 fire suppression, all designed to operate continuously under extreme load conditions.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=500&fit=crop",
        alt: "Modern data center infrastructure",
        caption: "State-of-the-art data center facility with precision cooling and containment systems",
      },
      {
        type: "heading",
        content: "Comprehensive IT Infrastructure",
      },
      {
        type: "paragraph",
        content:
          "In facilities supporting 24/7 surveillance, emergency response, and centralized command operations, HNL integrated servers, switches, firewalls, routers, storage systems, and IP communication gateways, ensuring seamless interoperability between IT and power infrastructure.",
      },
      {
        type: "quote",
        content:
          "HNL's ability to deliver both IT hardware services and heavy electrical infrastructure under a single execution framework has positioned it as a preferred partner for government modernization initiatives.",
        cite: "Sector Specialist",
      },
      {
        type: "heading",
        content: "Ensuring Uninterrupted Operations",
      },
      {
        type: "paragraph",
        content:
          "The deployment also included high-capacity diesel generators ranging from 45kVA to 400kVA, with ongoing maintenance services to guarantee uninterrupted operations during grid instability—an increasingly critical requirement across public institutions.",
      },
      {
        type: "paragraph",
        content:
          "As Pakistan's cities adopt smart governance models, HNL's work demonstrates how local engineering expertise can meet international standards—securely, efficiently, and at scale.",
      },
    ],
  },
  "redefining-energy-reliability-hybrid-power-renewable-adoption": {
    type: "press-release",
    title:
      "Redefining Energy Reliability: How HNL Is Driving Hybrid Power and Renewable Adoption Across Enterprise Pakistan",
    date: "November 2021",
    publication: "HNL Official",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    leadParagraph:
      "As energy volatility continues to challenge businesses nationwide, enterprises are rethinking how power is generated, stored, and managed. At the forefront of this transition is HNL, delivering hybrid energy and backup power solutions that reduce operational risk while improving efficiency.",
    sections: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&h=500&fit=crop",
        alt: "Solar panels and hybrid power installation",
        caption:
          "Commercial rooftop solar installation with hybrid inverters—part of HNL's enterprise energy solutions",
      },
      {
        type: "heading",
        content: "Banking & Enterprise Sector Impact",
      },
      {
        type: "paragraph",
        content:
          "Across the banking and enterprise sector, HNL has deployed UPS systems in more than 200 branches, supported on-call annual maintenance contracts for 250+ locations, and implemented solar inverter and lithium battery trials to test next-generation energy models.",
      },
      {
        type: "stats",
        title: "By the Numbers",
        items: [
          { label: "UPS Deployments", value: "200+" },
          { label: "AMC Locations", value: "250+" },
          { label: "Hybrid Sites", value: "50+" },
        ],
      },
      {
        type: "heading",
        content: "Hybrid Inverter Systems",
      },
      {
        type: "paragraph",
        content:
          "More than 50 enterprise sites have already transitioned to hybrid inverter systems, enabling seamless switching between grid, generator, and renewable sources—cutting fuel costs and reducing downtime.",
      },
      {
        type: "quote",
        content:
          "As Pakistan's energy landscape shifts, HNL is not merely responding—it is engineering the transition, combining conventional reliability with forward-looking sustainability.",
      },
      {
        type: "heading",
        content: "Diesel Generator Excellence",
      },
      {
        type: "paragraph",
        content:
          "In parallel, HNL's diesel generator portfolio, powered by PERKINS engines and supported by authorized genuine parts, continues to anchor mission-critical operations where zero interruption is non-negotiable.",
      },
      {
        type: "list",
        title: "Certifications & Capabilities",
        items: [
          "Certified by the Alternative Energy Development Board (AEDB) for C1-category renewable implementations above 500kW",
          "HNL is now scaling its renewable and energy-storage capabilities to meet enterprise and industrial demand",
        ],
      },
    ],
  },
}

// Media Features - Expert articles with authors
const mediaFeatures: Record<
  string,
  {
    type: "media-feature"
    title: string
    date: string
    category: string
    image: string
    leadParagraph: string
    author: {
      name: string
      title: string
      email: string
      image: string
      bio: string
    }
    sections: Array<{
      type: "paragraph" | "heading" | "subheading" | "quote" | "image" | "stats" | "list" | "pullquote"
      content?: string
      cite?: string
      src?: string
      alt?: string
      caption?: string
      title?: string
      items?: Array<{ label: string; value: string } | string>
    }>
  }
> = {
  "engineering-invisible-pakistan-digital-economy-infrastructure": {
    type: "media-feature",
    title: "Engineering the Invisible: How Pakistan's Digital Economy Runs on Physical Infrastructure",
    date: "December 2024",
    category: "Industry Feature | Engineering & Telecom Systems",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    leadParagraph:
      "In the global conversation around digital transformation, attention often gravitates toward software, cloud platforms, and artificial intelligence. Yet beneath every successful digital economy lies a less visible but far more demanding foundation: physical infrastructure. In Pakistan, where network density is increasing while environmental and energy constraints intensify, this infrastructure layer has become both the greatest challenge and the greatest opportunity.",
    author: {
      name: "Kamran Ahmed Shah",
      title: "Chief Technology Officer",
      email: "kamran.shah@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      bio: "Kamran Ahmed Shah has over 18 years of experience leading technology strategy and telecom infrastructure initiatives across Pakistan. As CTO, he drives HNL's digital transformation agenda and oversees strategic technology partnerships with major operators nationwide.",
    },
    sections: [
      {
        type: "paragraph",
        content:
          "At the intersection of telecom engineering, power systems, and enterprise reliability stands Hitech Network (Pvt.) Limited (HNL)—a company that has quietly evolved into one of Pakistan's most consequential infrastructure organizations.",
      },
      {
        type: "paragraph",
        content:
          "Unlike conventional contractors, HNL operates across the entire infrastructure lifecycle: design, deployment, operations, maintenance, optimization, and renewal. This systems-level approach is increasingly critical as telecom networks expand from voice and data delivery platforms into mission-critical national assets supporting finance, governance, transportation, and emergency services.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1000&h=500&fit=crop",
        alt: "Telecom tower infrastructure at sunset",
        caption: "Pakistan's expanding telecom infrastructure requires round-the-clock engineering support",
      },
      {
        type: "heading",
        content: "From Coverage to Continuity",
      },
      {
        type: "paragraph",
        content:
          "Pakistan's telecom landscape has shifted dramatically over the last decade. The early challenge was coverage—deploying towers fast enough to connect populations. Today, the challenge is continuity: ensuring always-on networks capable of supporting high-density data traffic, low latency services, and uninterrupted operations despite grid instability and climate stress.",
      },
      {
        type: "pullquote",
        content:
          "HNL currently manages over 16,870 live telecom sites nationwide, making it the largest Managed Services and Field Lifecycle Management provider in Pakistan.",
      },
      {
        type: "paragraph",
        content:
          "This scale is not accidental. It is the result of deliberate investments in workforce depth, regional presence, and engineering specialization. With 144 offices, thousands of trained technicians, and fully equipped mobile service units, HNL's operational model resembles that of global infrastructure operators rather than traditional service vendors.",
      },
      {
        type: "heading",
        content: "Why Power Engineering Defines Network Performance",
      },
      {
        type: "paragraph",
        content:
          "One of the least understood aspects of telecom reliability is power engineering. Radio equipment failures are often blamed on hardware or software, but in practice, power instability is the leading cause of downtime.",
      },
      {
        type: "paragraph",
        content:
          "HNL's expertise in AC/DC power systems, diesel generators, UPS platforms, and battery technologies has become a differentiator in an environment where grid reliability cannot be assumed. By integrating power design into telecom planning—rather than treating it as an afterthought—HNL reduces failure rates while extending equipment life cycles.",
      },
      {
        type: "stats",
        title: "Infrastructure at Scale",
        items: [
          { label: "Live Telecom Sites", value: "16,870+" },
          { label: "Field Offices", value: "144" },
          { label: "Service Vehicles", value: "350+" },
        ],
      },
      {
        type: "heading",
        content: "Infrastructure as a National Capability",
      },
      {
        type: "paragraph",
        content:
          "Perhaps HNL's most significant contribution is conceptual rather than technical: treating infrastructure as a national capability, not a project-based activity. Through PERKINS-approved overhauling workshops, local manufacturing certifications, and renewable energy integration, the company has localized expertise that would otherwise depend on external markets.",
      },
      {
        type: "quote",
        content:
          "As Pakistan's digital economy matures, organizations like HNL are redefining what infrastructure leadership looks like—not through visibility, but through resilience.",
        cite: "Industry Analysis",
      },
      {
        type: "paragraph",
        content:
          "The digital economy's foundation is physical. And in Pakistan, that foundation is increasingly engineered by organizations that understand infrastructure not as construction, but as continuous capability.",
      },
    ],
  },
  "hybrid-power-systems-physics-reliability-telecom-networks": {
    type: "media-feature",
    title: "Hybrid Power Systems and the Physics of Reliability in Modern Telecom Networks",
    date: "November 2024",
    category: "Energy Systems & Applied Engineering Feature",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    leadParagraph:
      "The future of telecom reliability does not lie in a single energy source. It lies in hybridization—the intelligent orchestration of grid power, diesel generation, solar input, and battery storage. This transition is not theoretical; it is already reshaping how telecom operators manage cost, uptime, and environmental impact.",
    author: {
      name: "Faisal Mahmood",
      title: "Lead, Energy Solutions",
      email: "faisal.mahmood@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Faisal Mahmood brings 15 years of specialized experience in power systems design for telecom and enterprise applications. A certified energy auditor, he leads HNL's hybrid power initiatives and has overseen the deployment of renewable energy solutions across hundreds of sites nationwide.",
    },
    sections: [
      {
        type: "paragraph",
        content:
          "At the forefront of this shift is HNL, whose hybrid power deployments are redefining energy resilience across Pakistan's telecom and enterprise sectors.",
      },
      {
        type: "heading",
        content: "The Reliability Equation",
      },
      {
        type: "paragraph",
        content:
          "Telecom networks operate under a simple equation: uptime equals revenue, trust, and national connectivity. Yet achieving near-perfect uptime in regions with inconsistent grid supply requires engineering solutions that account for load variability, fuel logistics, thermal stress, and battery degradation.",
      },
      {
        type: "paragraph",
        content:
          "HNL approaches this challenge through systems engineering, not component substitution. Hybrid power solutions are designed as closed-loop ecosystems, where energy sources complement one another based on availability, efficiency, and demand.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&h=500&fit=crop",
        alt: "Solar panels integrated with telecom infrastructure",
        caption: "Integrated solar-diesel-battery systems reduce operational costs while improving reliability",
      },
      {
        type: "list",
        title: "How Hybrid Systems Work",
        items: [
          "Solar reduces fuel burn during daylight hours",
          "Batteries absorb transient loads and stabilize voltage",
          "Diesel generators provide deterministic backup during prolonged outages",
          "Control logic determines priority and switching behavior",
        ],
      },
      {
        type: "heading",
        content: "Beyond Fuel Savings",
      },
      {
        type: "paragraph",
        content:
          "While fuel reduction remains a measurable benefit—often exceeding 30–60 percent depending on deployment—the real value of hybrid systems lies in predictability. Stable voltage profiles reduce equipment failures. Controlled generator runtimes extend engine life. Battery buffering minimizes hard shutdowns.",
      },
      {
        type: "pullquote",
        content:
          "HNL's hybrid deployments across enterprise branches, telecom sites, and public-sector installations demonstrate that reliability improvements often exceed financial savings in long-term value.",
      },
      {
        type: "heading",
        content: "Scaling Hybrid Infrastructure",
      },
      {
        type: "paragraph",
        content:
          "One of the challenges in hybrid power adoption is scalability. Pilot projects succeed, but nationwide rollouts fail due to maintenance complexity or inconsistent performance.",
      },
      {
        type: "paragraph",
        content:
          "HNL's advantage lies in its managed services DNA. By embedding hybrid systems into its existing maintenance and monitoring frameworks, the company ensures performance consistency across thousands of sites.",
      },
      {
        type: "stats",
        title: "Hybrid Power Impact",
        items: [
          { label: "Fuel Reduction", value: "30-60%" },
          { label: "Uptime Improvement", value: "99.9%" },
          { label: "Equipment Life Extension", value: "40%" },
        ],
      },
      {
        type: "quote",
        content:
          "As renewable penetration increases, hybrid systems are no longer optional—they are foundational to sustainable telecom operations.",
        cite: "Energy Sector Review",
      },
    ],
  },
  "data-centers-switchgear-engineering-always-on-enterprises": {
    type: "media-feature",
    title: "Data Centers, Switchgear, and the Engineering Discipline Behind Always-On Enterprises",
    date: "October 2024",
    category: "Enterprise Infrastructure & Data Engineering Feature",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    leadParagraph:
      "In an era where milliseconds define user experience and downtime equates to financial loss, enterprise infrastructure has become a discipline of precision engineering. Data centers are no longer rooms filled with servers—they are electromechanical ecosystems requiring exact coordination between power, cooling, containment, and fire suppression.",
    author: {
      name: "Sana Malik",
      title: "Head of Delivery, Enterprise Solutions",
      email: "sana.malik@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      bio: "Sana Malik is a pioneer in enterprise data center solutions in Pakistan, with over 12 years of experience designing and deploying mission-critical infrastructure for banking, government, and corporate clients. She leads delivery operations ensuring projects meet the highest standards of quality and reliability.",
    },
    sections: [
      {
        type: "paragraph",
        content:
          "HNL's work in large-scale data center and switchgear deployments reflects this reality—where engineering precision determines business continuity.",
      },
      {
        type: "heading",
        content: "Power as Architecture",
      },
      {
        type: "paragraph",
        content:
          "Modern data centers are designed around power flow. From utility intake to transformers, HT/LT panels, bus ducts, UPS systems, and battery banks, every component must align with load growth projections and redundancy requirements.",
      },
      {
        type: "paragraph",
        content:
          "HNL's engineering teams approach data center projects as power-first architectures, ensuring that electrical integrity precedes IT expansion. This methodology minimizes retrofitting risks and supports long-term scalability.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=500&fit=crop",
        alt: "Data center with precision cooling systems",
        caption: "Contained cold aisle configurations optimize cooling efficiency in modern data centers",
      },
      {
        type: "heading",
        content: "Thermal and Containment Engineering",
      },
      {
        type: "paragraph",
        content:
          "Cooling inefficiency remains one of the leading causes of operational instability. Through contained cold aisle systems, precision HVAC, and airflow management, HNL reduces thermal gradients that degrade hardware reliability.",
      },
      {
        type: "pullquote",
        content:
          "Fire suppression, often overlooked, is treated as a core system rather than a compliance checkbox—integrated seamlessly into the overall design.",
      },
      {
        type: "list",
        title: "Data Center Engineering Components",
        items: [
          "UPS systems with N+1 redundancy",
          "Battery banks with real-time monitoring",
          "HT/LT switchgear panels",
          "Precision cooling and containment",
          "FM200 fire suppression systems",
          "Environmental monitoring and BMS integration",
        ],
      },
      {
        type: "heading",
        content: "Why Local Expertise Matters",
      },
      {
        type: "paragraph",
        content:
          "Large data center projects often rely heavily on foreign consultants. HNL's ability to deliver end-to-end engineering locally reduces dependency risks while accelerating deployment timelines.",
      },
      {
        type: "quote",
        content:
          "As enterprise digitalization accelerates, infrastructure competence will increasingly define competitiveness. Organizations that treat data centers as strategic assets—not IT overhead—will lead.",
        cite: "Enterprise Technology Review",
      },
    ],
  },
  "field-technicians-infrastructure-intelligence-managed-services": {
    type: "media-feature",
    title: "From Field Technicians to Infrastructure Intelligence: The Evolution of Managed Services",
    date: "September 2024",
    category: "Telecom Operations & Systems Management Feature",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    leadParagraph:
      "Managed services were once defined by response times and fault resolution. Today, they are defined by predictive intelligence, lifecycle optimization, and operational foresight. HNL's evolution mirrors this industry-wide transformation—from reactive maintenance to proactive infrastructure management.",
    author: {
      name: "Engr. Rizwan Khalid",
      title: "Chief Operations Officer",
      email: "rizwan.khalid@hnl.com.pk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Engr. Rizwan Khalid has spent over 20 years building and scaling operational excellence in telecom infrastructure. As COO, he oversees HNL's nationwide service delivery operations, workforce development, and the company's transition toward intelligent infrastructure management.",
    },
    sections: [
      {
        type: "heading",
        content: "Lifecycle Thinking",
      },
      {
        type: "paragraph",
        content:
          "Managing infrastructure at scale requires thinking beyond repairs. Equipment selection, installation quality, load profiling, preventive maintenance, and end-of-life planning are interconnected variables that determine total cost of ownership.",
      },
      {
        type: "paragraph",
        content:
          "By managing thousands of sites nationwide, HNL has transformed field data into operational intelligence, enabling trend analysis and proactive intervention before failures occur.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&h=500&fit=crop",
        alt: "Field technician with diagnostic equipment",
        caption: "Field teams equipped with advanced diagnostics enable predictive maintenance at scale",
      },
      {
        type: "stats",
        title: "Operational Scale",
        items: [
          { label: "Sites Managed", value: "16,870+" },
          { label: "Field Technicians", value: "6,000+" },
          { label: "Service Response", value: "24/7" },
        ],
      },
      {
        type: "heading",
        content: "Human Capital as a Strategic Asset",
      },
      {
        type: "paragraph",
        content:
          "Technology alone does not sustain infrastructure. Skilled technicians, engineers, and planners do. HNL's investment in training, certifications, and specialization has created one of the largest technical workforces in the sector.",
      },
      {
        type: "pullquote",
        content:
          "This human infrastructure is increasingly rare—and increasingly valuable. As automation handles routine tasks, skilled personnel become critical for complex diagnostics and system optimization.",
      },
      {
        type: "list",
        title: "Workforce Capabilities",
        items: [
          "Certified power systems technicians",
          "RF and antenna specialists",
          "Fiber optic splicing and testing teams",
          "Generator overhaul and maintenance crews",
          "Data center operations personnel",
          "NOC monitoring and incident response",
        ],
      },
      {
        type: "heading",
        content: "The Future of Managed Infrastructure",
      },
      {
        type: "paragraph",
        content:
          "As networks move toward 5G, edge computing, and distributed energy systems, managed services will evolve into infrastructure orchestration—coordinating physical, digital, and energy assets as unified systems.",
      },
      {
        type: "quote",
        content:
          "HNL is already operating in this future—quietly, systematically, and at scale. The transition from reactive maintenance to predictive intelligence is not a strategy; it is an operational reality.",
        cite: "Operations Leadership",
      },
    ],
  },
}

// Combine all articles
const allArticles = { ...pressReleases, ...mediaFeatures }

export async function generateStaticParams() {
  return Object.keys(allArticles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = allArticles[slug]

  if (!article) {
    return { title: "Article Not Found | HNL Pakistan" }
  }

  return {
    title: `${article.title} | HNL Pakistan`,
    description: article.leadParagraph.substring(0, 160),
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = allArticles[slug]

  if (!article) {
    notFound()
  }

  const isMediaFeature = article.type === "media-feature"
  const mediaArticle = isMediaFeature ? (article as (typeof mediaFeatures)[string]) : null

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media/project-gallery" },
    { label: "Press & Features", href: "/media/press-features" },
    { label: isMediaFeature ? "Expert Insight" : "Press Release", href: `/media/press-features/${slug}` },
  ]

  // Get related articles
  const relatedArticles = Object.entries(allArticles)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({
      slug: key,
      title: value.title,
      date: value.date,
      image: value.image,
      type: value.type,
    }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...generateBreadcrumbSchema(breadcrumbItems),
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            author: mediaArticle?.author
              ? {
                  "@type": "Person",
                  name: mediaArticle.author.name,
                  jobTitle: mediaArticle.author.title,
                }
              : {
                  "@type": "Organization",
                  name: "HNL Pakistan",
                },
            publisher: {
              "@type": "Organization",
              name: "HNL Pakistan",
            },
          }),
        }}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Header */}
        <header className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
          <div className="absolute inset-0">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-8 pb-12 h-full flex flex-col">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mt-auto max-w-4xl pb-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {isMediaFeature && mediaArticle ? (
                  <span className="px-4 py-1.5 bg-white text-gray-900 text-sm font-semibold rounded">
                    {mediaArticle.category.split("|")[0].trim()}
                  </span>
                ) : (
                  <span className="px-4 py-1.5 bg-red-600 text-white text-sm font-semibold rounded">
                    {(article as (typeof pressReleases)[string]).publication}
                  </span>
                )}
                <span className="text-gray-300 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug text-balance">
                {article.title}
              </h1>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Author Card for Media Features */}
            {isMediaFeature && mediaArticle && (
              <div className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-red-600">
                <div className="flex items-start gap-5">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-lg">
                    <Image
                      src={mediaArticle.author.image || "/placeholder.svg"}
                      alt={mediaArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg">{mediaArticle.author.name}</p>
                    <p className="text-red-600 font-medium text-sm mb-2">{mediaArticle.author.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{mediaArticle.author.bio}</p>
                    <a
                      href={`mailto:${mediaArticle.author.email}`}
                      className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 mt-3 font-medium"
                    >
                      <Mail className="h-4 w-4" />
                      {mediaArticle.author.email}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between py-6 border-b border-gray-200 mb-10">
              <Link
                href="/media/press-features"
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Press & Features
              </Link>

              <div className="flex items-center gap-4">
                <PrintButton />
                <ShareButton title={article.title} />
              </div>
            </div>

            {/* Lead Paragraph */}
            <p className="text-xl text-gray-700 leading-relaxed mb-10 font-serif">{article.leadParagraph}</p>

            {/* Article Body - Render sections */}
            {article.sections.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed mb-8">
                      {section.content}
                    </p>
                  )
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-gray-900 mt-14 mb-6 pb-3 border-b border-gray-200"
                    >
                      {section.content}
                    </h2>
                  )
                case "subheading":
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-800 mt-10 mb-4">
                      {section.content}
                    </h3>
                  )
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-red-600 pl-6 py-4 my-10 bg-gray-50 rounded-r-lg"
                    >
                      <p className="text-xl text-gray-800 italic font-serif leading-relaxed">{section.content}</p>
                      {section.cite && (
                        <cite className="block mt-4 text-gray-600 not-italic text-sm">— {section.cite}</cite>
                      )}
                    </blockquote>
                  )
                case "pullquote":
                  return (
                    <div key={index} className="my-12 py-8 border-t-2 border-b-2 border-red-600">
                      <p className="text-2xl md:text-3xl text-gray-900 font-serif text-center leading-relaxed italic">
                        "{section.content}"
                      </p>
                    </div>
                  )
                case "image":
                  return (
                    <figure key={index} className="my-12">
                      <Image
                        src={section.src || "/placeholder.svg"}
                        alt={section.alt || ""}
                        width={1000}
                        height={500}
                        className="w-full rounded-lg shadow-lg"
                      />
                      {section.caption && (
                        <figcaption className="mt-4 text-center text-sm text-gray-500 italic">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  )
                case "stats":
                  return (
                    <div key={index} className="bg-gray-900 text-white rounded-xl p-8 my-12">
                      {section.title && <h3 className="text-xl font-bold mb-8 text-center">{section.title}</h3>}
                      <div className="grid md:grid-cols-3 gap-8 text-center">
                        {(section.items as Array<{ label: string; value: string }>)?.map((item, i) => (
                          <div key={i}>
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{item.value}</div>
                            <div className="text-gray-300">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                case "list":
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-8 my-10 border border-gray-200">
                      {section.title && <h3 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h3>}
                      <ul className="space-y-4">
                        {(section.items as string[])?.map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0"></span>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                default:
                  return null
              }
            })}

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              {isMediaFeature && mediaArticle ? (
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-4">About the Author</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={mediaArticle.author.image || "/placeholder.svg"}
                        alt={mediaArticle.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{mediaArticle.author.name}</p>
                      <p className="text-red-600 text-sm">{mediaArticle.author.title}</p>
                      <a
                        href={`mailto:${mediaArticle.author.email}`}
                        className="text-sm text-gray-600 hover:text-red-600"
                      >
                        {mediaArticle.author.email}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">HNL Official</div>
                    <div className="text-sm text-gray-500">Press & Communications</div>
                  </div>
                </div>
              )}

              <p className="text-gray-600 text-sm mt-6">
                For media inquiries, please contact our communications team at{" "}
                <a href="mailto:press@hnl.com.pk" className="text-red-600 hover:underline">
                  press@hnl.com.pk
                </a>
              </p>
            </footer>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/media/press-features/${related.slug}`}
                      className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-40">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded ${related.type === "media-feature" ? "bg-white text-gray-900" : "bg-red-600 text-white"}`}
                          >
                            {related.type === "media-feature" ? "Expert Insight" : "Press Release"}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gray-500 mb-2">{related.date}</p>
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 text-sm">
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
