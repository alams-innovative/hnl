import { Breadcrumbs } from "@/components/breadcrumbs"
import { ServiceHero } from "@/components/service-hero"
import { ChallengeSolutionGrid } from "@/components/challenge-solution-grid"
import { ProcessSteps } from "@/components/process-steps"
import { CtaSection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { RecommendedServices } from "@/components/recommended-services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Banking & Finance Power Solutions | HNL",
  description:
    "Secure, reliable power solutions for banks and financial institutions in Pakistan. Ensure continuous operations with AGG diesel generators.",
}

export default function BankingFinancePage() {
  const challenges = [
    {
      challenge: "24/7 Uptime Requirements",
      solution:
        "Parallel redundant generator systems with automatic load transfer ensure zero downtime for ATMs, branches, and data centers.",
    },
    {
      challenge: "Regulatory Compliance",
      solution:
        "EPA-compliant generators meeting SBP and international banking standards for environmental and operational requirements.",
    },
    {
      challenge: "Security & Access Control",
      solution:
        "Secure generator installations with remote monitoring, tamper alerts, and restricted access protocols for financial facilities.",
    },
    {
      challenge: "Multi-Site Management",
      solution:
        "Centralized monitoring and maintenance for generator networks across branches, ATMs, and regional offices nationwide.",
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Security Assessment",
      description:
        "Comprehensive site evaluation including security protocols, access requirements, and integration with existing banking infrastructure.",
    },
    {
      number: 2,
      title: "Redundant System Design",
      description:
        "Engineering parallel generator configurations with N+1 redundancy to eliminate single points of failure for critical operations.",
    },
    {
      number: 3,
      title: "Compliance Installation",
      description:
        "Installation following SBP guidelines, fire safety codes, and environmental regulations with proper documentation.",
    },
    {
      number: 4,
      title: "Remote Monitoring Setup",
      description:
        "Deploy 24/7 remote monitoring with real-time alerts, performance analytics, and integration with banking security systems.",
    },
  ]

  const faqs = [
    {
      question: "How do you ensure generator security at banking facilities?",
      answer:
        "We implement multi-layer security including physical barriers, tamper-proof enclosures, GPS tracking, remote monitoring with instant alerts, and restricted access controls integrated with your security systems.",
    },
    {
      question: "What redundancy options are available for critical banking operations?",
      answer:
        "We offer N+1 and 2N redundancy configurations with parallel generators, automatic load sharing, and seamless failover to ensure zero downtime for branches, data centers, and ATM networks.",
    },
    {
      question: "Do your solutions meet State Bank of Pakistan requirements?",
      answer:
        "Yes, all our generator installations comply with SBP guidelines for business continuity, environmental standards, and operational resilience for banking infrastructure.",
    },
    {
      question: "Can you manage generators across multiple bank branches?",
      answer:
        "Absolutely. Our centralized monitoring platform tracks all generators across your branch network, ATMs, and regional offices with unified maintenance scheduling and performance reporting.",
    },
  ]

  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Banking & Finance" }]} />

      <ServiceHero
        title="Banking & Finance Power Solutions"
        subtitle="Industry Solutions"
        description="Secure, reliable power infrastructure for Pakistan's financial institutions ensuring 24/7 operations and regulatory compliance"
        primaryCTA={{ text: "Get a Quote", href: "/contact/quote" }}
        secondaryCTA={{ text: "Talk to Expert", href: "/contact" }}
        backgroundImage="/bank-building-financial-institution-modern-archite.jpg"
      />

      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Trusted by Pakistan's Financial Leaders</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Financial institutions require absolute power reliability. HNL provides mission-critical generator
                solutions for banks, ATMs, payment processors, and financial data centers across Pakistan, ensuring your
                operations never stop.
              </p>
              <p>
                As the authorized distributor of AGG Power generators, we deliver EPA-compliant, secure power systems
                designed specifically for the banking sector. Our solutions meet State Bank of Pakistan guidelines while
                providing the redundancy and monitoring capabilities essential for financial operations.
              </p>
              <p>
                From single ATM installations to multi-site branch networks and regional data centers, our team
                understands the unique security, compliance, and uptime requirements of Pakistan's banking industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ChallengeSolutionGrid challenges={challenges} />

      <ProcessSteps
        title="Banking Power Deployment Process"
        description="Security-focused implementation for financial institutions"
        steps={processSteps}
      />

      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Banking Power Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">Branch Banking</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>50-250 kVA generators for full branch operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Automatic transfer switches for seamless failover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Weatherproof enclosures with security features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Remote monitoring and diagnostics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">ATM Networks</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>15-30 kVA compact generators for standalone ATMs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>GPS tracking and anti-theft systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Extended fuel tanks for 24-48 hour runtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Centralized monitoring across ATM fleet</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">Data Centers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>500-2000 kVA parallel redundant systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>N+1 and 2N redundancy configurations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Integration with UPS and cooling systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Tier III/IV compliant installations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-red-600">Regional Offices</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>100-500 kVA for administrative facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Load management for HVAC and IT systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Scheduled maintenance during off-hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Performance reporting and SLA compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RecommendedServices
        title="Related Banking Solutions"
        services={[
          {
            title: "Enterprise IT Services",
            description: "Comprehensive IT infrastructure for banking operations",
            href: "/software-cloud-ai/enterprise-it-services",
          },
          {
            title: "Data Center Solutions",
            description: "Complete data center power and cooling infrastructure",
            href: "/energy-power/diesel-generators",
          },
          {
            title: "Remote Monitoring",
            description: "24/7 monitoring and maintenance services",
            href: "/energy-power/energy-operations-maintenance",
          },
        ]}
      />

      <CtaSection
        title="Secure Your Banking Operations"
        description="Get a customized power solution designed for your financial institution's security and compliance requirements"
      />
    </>
  )
}
