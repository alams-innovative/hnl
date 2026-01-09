import { generateOrganizationSchema, generateFAQSchema } from "@/lib/seo"
import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Telecom, Energy & Enterprise IT Solutions in Pakistan | HNL",
  description:
    "HNL delivers enterprise-grade telecom infrastructure, energy solutions, and IT services across Pakistan. Trusted partner for fiber rollout, BESS, cloud migration, and mission-critical operations.",
  keywords: [
    "telecom infrastructure Pakistan",
    "energy solutions Pakistan",
    "enterprise IT Pakistan",
    "fiber rollout Pakistan",
    "BESS Pakistan",
    "cloud migration Pakistan",
    "HNL Pakistan",
  ],
}

export default function HomePage() {
  const jsonLd = generateOrganizationSchema()

  const faqJsonLd = generateFAQSchema([
    {
      question: "What services does HNL provide in Pakistan?",
      answer:
        "HNL provides comprehensive telecom infrastructure (fiber rollout, civil works, site integration), energy solutions (diesel generators, BESS, hybrid systems), and enterprise IT services (cloud migration, AI agents, big data analytics) across Pakistan.",
    },
    {
      question: "Which industries does HNL serve?",
      answer:
        "HNL serves telecom operators, energy sector companies, enterprises, government agencies, and manufacturing industries throughout Pakistan with integrated infrastructure and technology solutions.",
    },
    {
      question: "Where is HNL located in Pakistan?",
      answer:
        "HNL has offices in Islamabad (headquarters), Karachi, and Lahore, with nationwide project deployment capabilities across all provinces of Pakistan.",
    },
  ])

  const testimonials = [
    {
      author: "Li Wei",
      title: "Regional Director",
      company: "China Mobile Pakistan",
      rating: 5,
      text: "HNL has been instrumental in our network expansion across Pakistan. Their technical expertise in fiber deployment and site integration helped us meet our ambitious rollout targets. Outstanding partnership.",
    },
    {
      author: "Muhammad Tariq",
      title: "Head of Network Operations",
      company: "Ufone",
      rating: 5,
      text: "We've worked with HNL on multiple infrastructure projects. Their understanding of telecom requirements and execution excellence consistently exceeds our expectations. A truly reliable partner.",
    },
    {
      author: "Sarah Ahmed",
      title: "IT Director",
      company: "University of Lahore",
      rating: 5,
      text: "HNL transformed our campus IT infrastructure with cutting-edge solutions. Their team understood our educational environment perfectly and delivered a scalable system that serves thousands of students seamlessly.",
    },
    {
      author: "Zhang Min",
      title: "Operations Manager",
      company: "Huawei Technologies",
      rating: 5,
      text: "Excellent collaboration on site installations and power solutions. HNL's technical competence and professional approach align perfectly with our quality standards. Highly recommend their services.",
    },
    {
      author: "Kamran Hassan",
      title: "VP Infrastructure",
      company: "Wateen Telecom",
      rating: 4,
      text: "HNL's fiber rollout services helped us expand our network coverage significantly. Their project management and execution quality have been consistently reliable across multiple cities.",
    },
    {
      author: "Chen Jian",
      title: "Technical Director",
      company: "ZTE Corporation",
      rating: 5,
      text: "We've partnered with HNL on several telecom infrastructure projects. Their local expertise combined with technical excellence makes them an invaluable partner in Pakistan's market.",
    },
    {
      author: "Ayesha Malik",
      title: "Security Operations Head",
      company: "Punjab Safe Cities Authority",
      rating: 5,
      text: "HNL's infrastructure solutions for our surveillance network have been exceptional. They delivered critical systems on time and their ongoing support ensures 24/7 operational reliability.",
    },
    {
      author: "Ahmed Rashid",
      title: "Facilities Manager",
      company: "HBL Bank",
      rating: 5,
      text: "Our branch network depends on reliable power solutions, and HNL has never let us down. Their hybrid power systems and maintenance services ensure uninterrupted banking operations nationwide.",
    },
    {
      author: "Fatima Noor",
      title: "Head of Supply Chain",
      company: "Gourmet Foods",
      rating: 4,
      text: "HNL's power infrastructure for our cold storage facilities has been outstanding. Their team understood our critical requirements and delivered solutions that maintain product quality 24/7.",
    },
    {
      author: "Mohammad Saleem",
      title: "Construction Manager",
      company: "Habib Construction Services",
      rating: 5,
      text: "We rely on HNL for power solutions at our construction sites across Pakistan. Their generator fleet and responsive maintenance team keep our projects running on schedule without power-related delays.",
    },
    {
      author: "Zainab Khan",
      title: "Operations Director",
      company: "Beaconhouse School System",
      rating: 5,
      text: "HNL implemented reliable power backup systems across our 200+ campuses. Their professional approach and ongoing support ensure uninterrupted learning for thousands of students every day.",
    },
    {
      author: "Hassan Ali",
      title: "General Manager",
      company: "Sadiq Poultry",
      rating: 5,
      text: "Our poultry operations require constant power for climate control systems. HNL's energy solutions have been flawless, and their rapid response maintenance team gives us complete peace of mind.",
    },
  ]

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HNL Pakistan",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "15",
      bestRating: "5",
      worstRating: "4",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.author,
        jobTitle: t.title,
        worksFor: {
          "@type": "Organization",
          name: t.company,
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.text,
    })),
  }

  return (
    <HomePageClient jsonLd={jsonLd} faqJsonLd={faqJsonLd} reviewsSchema={reviewsSchema} testimonials={testimonials} />
  )
}
