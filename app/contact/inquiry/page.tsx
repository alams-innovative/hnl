import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact-header"
import { TypeformInquiry } from "@/components/typeform-inquiry"

export const metadata: Metadata = {
  title: "General Inquiry | Contact HNL Pakistan",
  description: "Send us your inquiry and our team will respond within 24 hours.",
}

export default function InquiryPage() {
  return (
    <main>
      <ContactHeader title="Send Us an Inquiry" description="Tell us what you need and we'll respond within 24 hours" />

      <section className="py-12">
        <div className="container max-w-2xl">
          <TypeformInquiry />
        </div>
      </section>
    </main>
  )
}
