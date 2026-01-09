import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact-header"
import { QuoteRequestForm } from "@/components/quote-request-form"

export const metadata: Metadata = {
  title: "Request a Quote | HNL Pakistan",
  description:
    "Get detailed pricing for your energy, telecom, or IT project. Our sales team will provide a comprehensive quote tailored to your requirements.",
}

export default function QuotePage() {
  return (
    <main>
      <ContactHeader
        title="Request a Quote"
        description="Get a comprehensive quote tailored to your project requirements"
      />

      <section className="py-8 md:py-12">
        <div className="container max-w-4xl">
          <QuoteRequestForm />
        </div>
      </section>
    </main>
  )
}
