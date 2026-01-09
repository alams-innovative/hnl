import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | HNL Pakistan",
  description:
    "Find answers to common questions about HNL's telecom infrastructure, energy solutions, and enterprise IT services in Pakistan.",
}

const faqCategories = [
  {
    name: "Telecom Infrastructure",
    questions: [
      {
        question: "What telecom infrastructure services does HNL provide?",
        answer:
          "HNL offers comprehensive telecom infrastructure services including fiber optic network deployment, tower installation and maintenance, active and passive equipment integration, site surveys and planning, and 24/7 network operations center monitoring for Pakistan's leading telecom operators.",
      },
      {
        question: "How long does a typical fiber optic deployment take?",
        answer:
          "Deployment timelines vary based on project scope. A standard 10-50km fiber route typically takes 6-12 weeks including planning, civil works, cable laying, splicing, and testing. We've successfully completed over 1000km of fiber deployments across Pakistan with proven project management methodologies.",
      },
      {
        question: "Do you provide maintenance after installation?",
        answer:
          "Yes, HNL offers comprehensive Operations & Maintenance contracts with 24/7 monitoring, preventive maintenance schedules, emergency repair services, spare parts management, and SLA-driven performance guarantees. Our NOC teams ensure 99.9% uptime for critical infrastructure.",
      },
      {
        question: "What areas in Pakistan do you cover?",
        answer:
          "HNL operates nationwide across all major cities and remote regions of Pakistan including Islamabad, Lahore, Karachi, Peshawar, Quetta, and tier-2/3 cities. We have established logistics, local partnerships, and experienced teams in every region to ensure consistent service delivery.",
      },
    ],
  },
  {
    name: "Energy & Power Solutions",
    questions: [
      {
        question: "What is a Battery Energy Storage System (BESS)?",
        answer:
          "BESS is an advanced energy storage solution that stores electricity from solar panels or grid during off-peak hours and supplies power during peak demand or outages. Our lithium-ion BESS systems reduce diesel generator runtime by 60-80%, lowering operational costs and carbon emissions significantly.",
      },
      {
        question: "How much can I save with hybrid solar-diesel systems?",
        answer:
          "Typical ROI is 3-4 years for telecom sites in Pakistan. A standard site consuming 200L diesel/month can save PKR 8-12 million over 10 years with hybrid power systems. Savings depend on diesel prices, sunlight hours (5-7 hrs/day in Pakistan), load profiles, and system sizing.",
      },
      {
        question: "What generator capacities do you supply?",
        answer:
          "HNL supplies diesel generators from 10 kVA to 3000 kVA across leading brands including Cummins, Perkins, FG Wilson, and Volvo. We provide complete solutions including installation, commissioning, AMC contracts, genuine spare parts, and 24/7 breakdown support nationwide.",
      },
      {
        question: "Do you install solar systems for commercial buildings?",
        answer:
          "Yes, HNL designs and installs commercial solar systems from 50kW to 5MW for offices, factories, hospitals, and data centers. Our turnkey solutions include site assessment, engineering design, grid-tie or off-grid systems, net metering approvals, installation, and long-term O&M support.",
      },
    ],
  },
  {
    name: "Enterprise IT & Cloud",
    questions: [
      {
        question: "What cloud migration services does HNL offer?",
        answer:
          "HNL provides end-to-end cloud migration including assessment and roadmap development, infrastructure setup on AWS/Azure/Google Cloud, application migration with minimal downtime, data migration and validation, security and compliance implementation, and post-migration support and optimization.",
      },
      {
        question: "Do you provide managed IT services?",
        answer:
          "Yes, HNL offers fully managed IT services including 24/7 helpdesk support, infrastructure monitoring, server and network management, cybersecurity services, backup and disaster recovery, vendor management, and strategic IT consulting for enterprises across Pakistan.",
      },
      {
        question: "What is your data center colocation offering?",
        answer:
          "HNL operates Tier-3 certified data centers in Islamabad and Lahore offering secure colocation with 99.99% uptime SLA, redundant power (N+1 UPS and generators), precision cooling, 24/7 security and monitoring, carrier-neutral connectivity, and flexible rack space options from quarter to full racks.",
      },
      {
        question: "Can you help with cybersecurity and compliance?",
        answer:
          "Absolutely. HNL provides cybersecurity consulting, vulnerability assessments, penetration testing, firewall and SIEM implementation, security operations center services, compliance audits for ISO 27001, PCI-DSS, and local regulations, employee security awareness training, and incident response planning.",
      },
    ],
  },
  {
    name: "General & Business",
    questions: [
      {
        question: "How do I request a quote or consultation?",
        answer:
          "Contact us through our website contact form, email info@hnl.com.pk, or call our offices directly. Our sales team will schedule a consultation to understand your requirements, conduct site assessments if needed, and provide a detailed technical and commercial proposal within 3-5 business days.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Standard payment terms are 30-60 days for enterprise clients with milestone-based payments for large projects. We accept bank transfers, LCs, and post-dated cheques. For government projects, we follow public procurement regulations with appropriate bank guarantees.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes, HNL serves international telecom operators, multinational enterprises, and development organizations operating in Pakistan. We have experience with international standards, compliance requirements, and can facilitate foreign currency transactions and international logistics.",
      },
      {
        question: "What certifications does HNL hold?",
        answer:
          "HNL is ISO 9001:2015 certified for quality management, ISO 14001 for environmental management, and ISO 45001 for health and safety. We're also certified partners with leading technology vendors including Cisco, Microsoft, AWS, Huawei, and major generator manufacturers.",
      },
    ],
  },
]

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Resources", item: "/resources" },
    { name: "FAQs", item: "/resources/faq" },
  ]

  const allQuestions = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({
      questionName: q.question,
      acceptedAnswerText: q.answer,
    })),
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(allQuestions)) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Find quick answers to common questions about HNL's infrastructure, energy, and IT solutions across
              Pakistan.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {faqCategories.map((category, idx) => (
              <div key={category.name} className={idx > 0 ? "mt-12" : ""}>
                <h2 className="text-3xl font-bold mb-6 text-hnl-red">{category.name}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`${idx}-${qIdx}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-hnl-red">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <Card className="border-hnl-red">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Our expert team is ready to help with your specific requirements. Contact us for personalized
                  assistance.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-hnl-red text-white px-8 py-3 rounded-md font-semibold hover:bg-hnl-red-dark transition-colors"
                >
                  Contact Our Team
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}
