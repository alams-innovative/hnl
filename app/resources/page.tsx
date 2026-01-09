import type { Metadata } from "next"
import Link from "next/link"
import { ArticleCard } from "@/components/article-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  Download,
  BookOpen,
  ArrowRight,
  GraduationCap as GraduateCap,
  HelpCircle,
  BookIcon,
} from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Resources, Guides & Insights | HNL Pakistan",
  description:
    "Technical guides, industry insights, and expert knowledge on telecom infrastructure, energy solutions, and enterprise IT in Pakistan.",
}

const featuredArticles = [
  {
    slug: "bess-telecom-towers-pakistan-complete-guide",
    title: "BESS for Telecom Towers in Pakistan: Complete Implementation Guide",
    excerpt:
      "Learn how Battery Energy Storage Systems reduce diesel dependency for telecom operators in Pakistan by up to 80%.",
    category: "Energy Solutions",
    readTime: "8 min read",
    date: "Dec 12, 2024",
    featured: true,
  },
  {
    slug: "fiber-rollout-challenges-pakistan-solutions",
    title: "Fiber Rollout Challenges in Pakistan: Solutions from 1000+ km Deployments",
    excerpt:
      "Practical insights on overcoming right-of-way, civil works, and operational challenges in fiber deployment.",
    category: "Telecom Infrastructure",
    readTime: "7 min read",
    date: "Dec 10, 2024",
  },
  {
    slug: "enterprise-cloud-migration-pakistan-guide",
    title: "Enterprise Cloud Migration in Pakistan: A Practical Guide",
    excerpt:
      "Step-by-step approach to migrating enterprise workloads to cloud with minimal downtime and cost optimization.",
    category: "Cloud & IT",
    readTime: "10 min read",
    date: "Dec 8, 2024",
  },
]

const whitepapers = [
  {
    title: "Hybrid Power Systems ROI Calculator for Pakistan",
    description: "Financial analysis model for solar-diesel-battery systems",
  },
  {
    title: "Telecom Site Integration Best Practices",
    description: "Technical standards and QA checklists for site commissioning",
  },
  {
    title: "AI Agents for Enterprise Automation",
    description: "Implementation framework for AI-powered business processes",
  },
]

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Resources", item: "/resources" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-resources.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/85" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Knowledge for Infrastructure Excellence</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Technical guides, case studies, and industry insights from Pakistan's leading enterprise service
                provider. Real-world solutions for telecom, energy, and IT challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Articles</h2>
              <Link href="/resources/blog">
                <Button variant="outline" className="gap-2 bg-transparent">
                  View All Articles <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/resources/blog">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <BookOpen className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>Blog & Articles</CardTitle>
                    <CardDescription>Latest insights & news</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      30+ articles covering telecom deployment, power systems, cloud migration, and enterprise IT.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      Browse Articles <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/case-studies">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>Case Studies</CardTitle>
                    <CardDescription>Real-world success stories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore successful deployments across telecom, energy, and enterprise sectors in Pakistan.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      View Case Studies <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/resources/whitepapers">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>Whitepapers</CardTitle>
                    <CardDescription>Comprehensive research reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Detailed technical papers, ROI calculators, and implementation frameworks.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      Download Whitepapers <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/resources/technical-guides">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <BookIcon className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>Technical Guides</CardTitle>
                    <CardDescription>Tutorials and documentation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Step-by-step guides for installation, configuration, and troubleshooting.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      Access Guides <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/resources/faq">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <HelpCircle className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>FAQs</CardTitle>
                    <CardDescription>Common questions answered</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Find quick answers to frequently asked questions about our products and services.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      View FAQs <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/resources/glossary">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <GraduateCap className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>Glossary</CardTitle>
                    <CardDescription>Industry terminology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Understand technical terms and acronyms used in telecom, energy, and IT sectors.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      Browse Glossary <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/resources/downloads">
                <Card className="h-full hover:shadow-lg hover:border-hnl-red transition-all cursor-pointer">
                  <CardHeader>
                    <Download className="w-12 h-12 text-hnl-red mb-4" />
                    <CardTitle>Downloads</CardTitle>
                    <CardDescription>Technical specifications and tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Checklists, templates, calculators, and technical datasheets for your projects.
                    </p>
                    <div className="flex items-center text-hnl-red font-medium text-sm">
                      Browse Downloads <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Whitepapers Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Popular Whitepapers</h2>
              <Link href="/resources/whitepapers">
                <Button variant="outline" className="gap-2 bg-transparent">
                  View All <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whitepapers.map((paper) => (
                <Card key={paper.title} className="hover:shadow-lg hover:border-hnl-red transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{paper.title}</CardTitle>
                    <CardDescription>{paper.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-hnl-red hover:bg-hnl-red-dark gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
