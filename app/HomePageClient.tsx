"use client"

import type { generateOrganizationSchema, generateFAQSchema } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Cloud, Phone, Star } from "lucide-react"
import DivisionCard from "@/components/division-card"
import ArticleCard from "@/components/article-card"
import React from "react"

interface HomePageClientProps {
  jsonLd: ReturnType<typeof generateOrganizationSchema>
  faqJsonLd: ReturnType<typeof generateFAQSchema>
  reviewsSchema: any
  testimonials: {
    author: string
    title: string
    company: string
    rating: number
    text: string
  }[]
}

export default function HomePageClient({ jsonLd, faqJsonLd, reviewsSchema, testimonials }: HomePageClientProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const totalSlides = Math.ceil(testimonials.length / 3)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      {/* 1. HERO BANNER */}
      <section className="relative bg-white py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-green-700">AGG Power Authorized Distributor</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Infrastructure Solutions
                <span className="block mt-2 text-red-600">Built for Pakistan</span>
              </h1>

              <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                Enterprise-grade telecom, energy, and IT solutions for Pakistan's leading organizations. 21+ years of
                proven excellence.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-white">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_hnl_banner_video-1bNfAa2Gg5y42EFMOkUsennaJHJiaB.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUSTAINABILITY SECTION */}
      <section className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-8 px-4 md:px-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-balance">
                Clean Energy, Brighter Tomorrow
              </h2>

              <p className="text-lg md:text-xl text-green-700 font-semibold leading-relaxed text-balance">
                Sustainability through Environment Friendly Power Innovation preventing Smog
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                HNL is committed to providing Diesel Generators with maximum efficiency and minimal environmental
                impact. Our advanced technology ensures reliable power generation while protecting Pakistan's
                environment and contributing to a cleaner, greener future for generations to come.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Smoke Free</h3>
                    <p className="text-sm text-gray-600">EU2-EU5 Emission Control</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Noise Free</h3>
                    <p className="text-sm text-gray-600">Advanced Sound Dampening</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">EPA Compliant</h3>
                    <p className="text-sm text-gray-600">International Standards</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Green Pakistan</h3>
                    <p className="text-sm text-gray-600">Clean & Sustainable Power</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300"
                >
                  <Link href="/about/sustainability">
                    Sustainable Power <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]">
                <img
                  src="/images/hunza-20and-20skardu.jpg"
                  alt="Clean Energy for Pakistan - Scenic Mountain Landscape Hunza Valley"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Comprehensive infrastructure and technology solutions for Pakistan's most demanding projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <DivisionCard
              title="Telecom Infrastructure"
              description="Nationwide fiber rollout, civil works, and site integration for Pakistan's telecom operators"
              icon={<Phone className="w-7 h-7" />}
              services={[
                "Fiber Rollout & Installation (FTTH, FTTx)",
                "Civil Works & Site Preparation",
                "BTS Installation & Integration",
                "24/7 NOC Monitoring",
                "Preventive & Corrective Maintenance",
              ]}
              href="/telecom-infrastructure"
            />

            <DivisionCard
              title="Energy Solutions"
              description="Diesel generators, BESS, solar systems, and hybrid power solutions for mission-critical operations"
              icon={<Zap className="w-7 h-7" />}
              services={[
                "Diesel Generators (10-2000 kVA)",
                "Battery Energy Storage Systems",
                "Solar Power Solutions",
                "Hybrid Power Systems",
                "EPC & O&M Services",
              ]}
              href="/energy-power"
            />

            <DivisionCard
              title="Software, Cloud & AI"
              description="Enterprise IT, cloud migration, AI agents, and big data analytics for digital transformation"
              icon={<Cloud className="w-7 h-7" />}
              services={[
                "Cloud Migration & Management",
                "AI Agents & Automation",
                "Big Data Analytics",
                "Enterprise IT Services",
                "ICT Infrastructure",
              ]}
              href="/software-cloud-ai"
            />
          </div>
        </div>
      </section>

      {/* 4. COMPANIES WE DEAL WITH */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
              <span className="text-sm font-medium text-gray-600">Clients</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Companies We Deal With
            </h2>
          </div>

          <div className="space-y-8">
            {/* First row - scrolling left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll gap-8">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 shrink-0">
                    {[
                      { name: "Jazz", logo: "/images/1.png" },
                      { name: "Telenor", logo: "/images/2.png" },
                      { name: "Zong 4G", logo: "/images/3.png" },
                      { name: "Ufone", logo: "/images/4.png" },
                      { name: "PTCL", logo: "/images/5.png" },
                      { name: "Nokia", logo: "/images/6.png" },
                      { name: "Engro Enfrashare", logo: "/images/7.png" },
                      { name: "Huawei", logo: "/images/8.png" },
                      { name: "ZTE", logo: "/images/9.png" },
                      { name: "PMU - Govt of Punjab", logo: "/images/10.png" },
                      { name: "Wateen", logo: "/images/11.png" },
                      { name: "EDOTCO", logo: "/images/12.png" },
                    ].map((client, idx) => (
                      <div
                        key={`${setIndex}-${idx}`}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-w-[180px] h-[120px] shrink-0"
                      >
                        <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - scrolling right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse gap-8">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 shrink-0">
                    {[
                      { name: "TAWAL", logo: "/images/13.png" },
                      { name: "Gourmet Foods", logo: "/images/14.png" },
                      { name: "Olympia", logo: "/images/15.png" },
                      { name: "HTI Express", logo: "/images/16.png" },
                      { name: "University of Lahore", logo: "/images/17.png" },
                      { name: "WARDA", logo: "/images/18.png" },
                      { name: "Beaconhouse School System", logo: "/images/19.png" },
                      { name: "PSCA", logo: "/images/20.png" },
                      { name: "Habib Construction Services", logo: "/images/21.png" },
                      { name: "Appetizer", logo: "/images/22.png" },
                      { name: "Sadiq Poultry", logo: "/images/23.png" },
                    ].map((client, idx) => (
                      <div
                        key={`${setIndex}-${idx}`}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-w-[180px] h-[120px] shrink-0"
                      >
                        <img
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-900">
              More than <span className="text-red-600 font-bold">900+</span> Leading organizations in Pakistan using HNL
            </p>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY LEADERSHIP BY NUMBERS - White BG, Asymmetric Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 text-balance">
              Industry Leadership by Numbers
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Row 1 - Large + Medium + Small */}
            <div className="grid grid-cols-12 gap-4 mb-4">
              {/* Large black box */}
              <div className="col-span-12 md:col-span-5 bg-black rounded-2xl p-6 flex flex-col justify-center items-center min-h-[180px]">
                <svg className="w-8 h-8 text-red-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <div className="text-3xl font-bold text-white">#1</div>
                <div className="text-sm text-white/80 mt-1">MS Provider in Pakistan</div>
              </div>

              {/* Medium red box */}
              <div className="col-span-6 md:col-span-4 bg-red-600 rounded-2xl p-5 flex flex-col justify-center items-center min-h-[180px]">
                <div className="text-2xl font-bold text-white">16,870+</div>
                <div className="text-xs text-white/80 mt-1 text-center">BTS Sites Managed</div>
              </div>

              {/* Small white box */}
              <div className="col-span-6 md:col-span-3 bg-white border-2 border-gray-200 rounded-2xl p-4 flex flex-col justify-center items-center min-h-[180px]">
                <div className="text-xl font-bold text-gray-900">144</div>
                <div className="text-xs text-gray-600 mt-1 text-center">Offices Nationwide</div>
              </div>
            </div>

            {/* Row 2 - Small + Medium + Large */}
            <div className="grid grid-cols-12 gap-4 mb-4">
              {/* Small black box */}
              <div className="col-span-6 md:col-span-3 bg-black rounded-2xl p-4 flex flex-col justify-center items-center min-h-[160px]">
                <div className="text-xl font-bold text-red-600">23,215</div>
                <div className="text-xs text-white/80 mt-1 text-center">Sites FLM/MS</div>
              </div>

              {/* Medium red box */}
              <div className="col-span-6 md:col-span-4 bg-red-600 rounded-2xl p-5 flex flex-col justify-center items-center min-h-[160px]">
                <div className="text-2xl font-bold text-white">980+</div>
                <div className="text-xs text-white/80 mt-1 text-center">Field Technicians</div>
              </div>

              {/* Large white box */}
              <div className="col-span-12 md:col-span-5 bg-white border-2 border-gray-200 rounded-2xl p-5 flex flex-col justify-center items-center min-h-[160px]">
                <div className="text-2xl font-bold text-gray-900">50%+</div>
                <div className="text-xs text-gray-600 mt-1 text-center">Market Share in South Region</div>
              </div>
            </div>

            {/* Row 3 - Medium + Small + "Many more" */}
            <div className="grid grid-cols-12 gap-4">
              {/* Medium black box */}
              <div className="col-span-6 md:col-span-4 bg-black rounded-2xl p-5 flex flex-col justify-center items-center min-h-[140px]">
                <div className="text-xl font-bold text-red-600">10,921</div>
                <div className="text-xs text-white/80 mt-1 text-center">DG Overhauls</div>
              </div>

              {/* Small red box */}
              <div className="col-span-6 md:col-span-3 bg-red-600 rounded-2xl p-4 flex flex-col justify-center items-center min-h-[140px]">
                <div className="text-xl font-bold text-white">410+</div>
                <div className="text-xs text-white/80 mt-1 text-center">Technical Experts</div>
              </div>

              {/* Small white box */}
              <div className="col-span-6 md:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-4 flex flex-col justify-center items-center min-h-[140px]">
                <div className="text-lg font-bold text-gray-900">4,210</div>
                <div className="text-xs text-gray-600 mt-1 text-center">Implementations</div>
              </div>

              {/* "Many more" box */}
              <div className="col-span-6 md:col-span-3 rounded-2xl p-4 flex flex-col justify-center items-center min-h-[140px]">
                <p className="text-lg italic text-gray-500">and many more...</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-red-600 font-medium">Delivering excellence across Pakistan's infrastructure</p>
          </div>
        </div>
      </section>

      {/* 6. LATEST INSIGHTS */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Expert perspectives on infrastructure and technology trends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ArticleCard
              slug="bess-telecom-towers-pakistan-complete-guide"
              title="BESS for Telecom Towers: Complete Implementation Guide"
              excerpt="Comprehensive guide to implementing battery energy storage systems for telecom towers in Pakistan"
              category="Energy"
              readTime="8 min read"
              date="March 15, 2024"
              featured={true}
            />
            <ArticleCard
              slug="fiber-rollout-challenges-pakistan-solutions"
              title="Fiber Rollout Challenges in Pakistan: Solutions That Work"
              excerpt="Practical solutions to overcome fiber deployment challenges in Pakistan's diverse terrain"
              category="Telecom"
              readTime="6 min read"
              date="March 10, 2024"
            />
            <ArticleCard
              slug="ai-agents-enterprise-getting-started"
              title="AI Agents for Enterprise: Getting Started"
              excerpt="How Pakistani enterprises can leverage AI agents for automation and enhanced productivity"
              category="Technology"
              readTime="7 min read"
              date="March 5, 2024"
            />
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-balance">Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">What Our Clients Say</p>
            <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients from various industries have to say about
              our products and services.
            </p>
          </div>

          <div className="max-w-7xl mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, idx) => (
                      <div
                        key={slideIndex * 3 + idx}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                      >
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? "fill-red-600 text-red-600" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">{testimonial.text}</p>

                        <div className="border-t border-gray-200 pt-4">
                          <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                          <p className="text-xs text-gray-600 mt-1">{testimonial.title}</p>
                          <p className="text-xs text-red-600 font-medium mt-1">{testimonial.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-red-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4.8 ? "fill-red-600 text-red-600" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-900">4.8 out of 5</span>
              <span className="text-sm text-gray-500">based on 15 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. UPCOMING EVENTS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-balance">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto text-balance leading-relaxed">
              Join Us at Industry Events. Join us at the latest industry events and exhibitions. Connect with HNL teams
              at these upcoming Future Tech, Energy and Sustainability trade shows worldwide.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/bustling-energy-technology-exhibition-in-dubai-wit.jpg"
                  alt="Pakistan Energy Conference"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  March 2026
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pakistan Energy Conference</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Meet us at Pakistan's premier energy sector conference showcasing power infrastructure, transmission
                  systems, and energy distribution solutions.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>March 10-12, 2026</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/futuristic-technology-exhibition-in-beijing-with-c.jpg"
                  alt="ITCN Asia 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  September 2026
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">ITCN Asia 2026 (27th Edition)</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Join us at Asia's largest IT & Telecom exhibition featuring 5G networks, telecommunications
                  infrastructure, and digital transformation solutions.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>September 8-10, 2026</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/green-energy-sustainability-exhibition-in-islamaba.jpg"
                  alt="ISEM Pakistan Solar Energy Exhibition 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  November 2026
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  ISEM Pakistan Solar Energy Exhibition 2026 (13th Edition)
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Connect with us at Pakistan's leading solar and renewable energy exhibition focusing on photovoltaic
                  systems, green energy, and sustainable solutions.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>November 18-20, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
