import type { Metadata } from "next"
import { ContactHeader } from "@/components/contact-header"
import { DistributorApplicationForm } from "@/components/distributor-application-form"

export const metadata: Metadata = {
  title: "Become a Distributor | HNL Pakistan",
  description: "Apply to join HNL's authorized distributor and partner network across Pakistan.",
}

export default function DistributorsPage() {
  return (
    <main>
      <ContactHeader
        title="Partner & Distributor Network"
        description="Join HNL's growing network of authorized partners"
      />

      <section className="py-12">
        <div className="container max-w-3xl">
          <DistributorApplicationForm />
        </div>
      </section>
    </main>
  )
}
