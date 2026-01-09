"use client"

import { useState } from "react"
import { ArticleCard } from "@/components/article-card"
import { CategoryFilter } from "@/components/category-filter"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const articles = [
  {
    slug: "bess-telecom-towers-pakistan-complete-guide",
    title: "BESS for Telecom Towers in Pakistan: Complete Implementation Guide",
    excerpt:
      "Learn how Battery Energy Storage Systems reduce diesel dependency for telecom operators in Pakistan by up to 80%.",
    category: "Energy Solutions",
    readTime: "8 min read",
    date: "Dec 12, 2024",
    featured: true,
    image: "/images/blog/bess-telecom-tower.jpg",
  },
  {
    slug: "fiber-rollout-challenges-pakistan-solutions",
    title: "Fiber Rollout Challenges in Pakistan: Solutions from 1000+ km Deployments",
    excerpt:
      "Practical insights on overcoming right-of-way, civil works, and operational challenges in fiber deployment.",
    category: "Telecom Infrastructure",
    readTime: "7 min read",
    date: "Dec 10, 2024",
    image: "/images/blog/fiber-rollout-deployment.jpg",
  },
  {
    slug: "enterprise-cloud-migration-pakistan-guide",
    title: "Enterprise Cloud Migration in Pakistan: A Practical Guide",
    excerpt:
      "Step-by-step approach to migrating enterprise workloads to cloud with minimal downtime and cost optimization.",
    category: "Cloud & IT",
    readTime: "10 min read",
    date: "Dec 8, 2024",
    image: "/images/blog/cloud-migration-enterprise.jpg",
  },
  {
    slug: "hybrid-power-systems-roi-calculation",
    title: "Hybrid Power Systems ROI Calculation for Pakistan",
    excerpt:
      "Financial analysis showing how solar-diesel-battery systems deliver 3-4 year payback for telecom and industrial sites.",
    category: "Energy Solutions",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    image: "/images/blog/hybrid-power-solar-diesel.jpg",
  },
  {
    slug: "noc-monitoring-best-practices-pakistan",
    title: "NOC Monitoring Best Practices for Telecom Networks",
    excerpt: "How 24/7 Network Operations Centers maintain 99.9% uptime for critical infrastructure across Pakistan.",
    category: "Telecom Infrastructure",
    readTime: "9 min read",
    date: "Dec 3, 2024",
    image: "/images/blog/noc-monitoring-center.jpg",
  },
  {
    slug: "ai-agents-enterprise-automation-pakistan",
    title: "AI Agents for Enterprise Automation in Pakistan",
    excerpt:
      "Real-world implementations of AI-powered workflows reducing manual processes by 60-70% in Pakistani enterprises.",
    category: "Cloud & IT",
    readTime: "11 min read",
    date: "Nov 30, 2024",
    image: "/images/blog/ai-agents-automation.jpg",
  },
]

const categories = ["Telecom Infrastructure", "Energy Solutions", "Cloud & IT"]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Blog</h1>
          <p className="text-xl text-gray-300">Expert insights on infrastructure, energy, and technology in Pakistan</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
