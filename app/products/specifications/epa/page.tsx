import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Shield, CheckCircle2, FileCheck, Leaf, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "EPA Certification | Environmental Compliance | HNL",
  description:
    "HNL's diesel generators are EPA certified, meeting stringent environmental protection standards for emissions control and air quality compliance in Pakistan.",
}

export default function EPAPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Specifications", href: "/products/specifications" },
              { label: "EPA Certification" },
            ]}
            className="mb-8 [&_a]:text-green-100 [&_a:hover]:text-white [&_svg]:text-green-200"
          />

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-green-300" />
              <h1 className="text-5xl font-bold">EPA Certified</h1>
            </div>
            <p className="text-xl text-green-50 leading-relaxed">
              Hitech Networks Limited provides EPA-certified diesel generators that meet strict environmental protection
              standards, ensuring clean operation and regulatory compliance across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* What is EPA Certification */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding EPA Certification</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Environmental Protection Agency (EPA) establishes comprehensive emission standards for diesel-powered
              equipment to safeguard air quality and protect public health. EPA certification verifies that generator
              sets comply with rigorous requirements for particulate matter (PM), nitrogen oxides (NOx), carbon monoxide
              (CO), and hydrocarbon emissions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These standards are internationally recognized and form the foundation for environmental compliance in
              power generation equipment worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* HNL's EPA Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">HNL's Commitment to EPA Standards</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Compliance Card 1 */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Tier 2 & Tier 3 Compliance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All HNL generator sets meet EPA Tier 2 and Tier 3 emission standards, representing the highest levels
                  of environmental compliance for diesel power equipment.
                </p>
              </div>

              {/* Compliance Card 2 */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Low Emission Technology</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Advanced combustion systems, precision fuel injection, and optimized engine design drastically reduce
                  harmful emissions while maintaining peak performance.
                </p>
              </div>

              {/* Compliance Card 3 */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <FileCheck className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Independent Verification</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our generators undergo rigorous independent laboratory testing to verify EPA compliance, with
                  comprehensive certification documentation provided for every unit.
                </p>
              </div>

              {/* Compliance Card 4 */}
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Complete Documentation</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Full EPA certification documentation, compliance certificates, and emission test reports are available
                  for regulatory submissions and audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EPA Certification Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Importance of EPA Certification</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Responsibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choosing EPA-certified generators demonstrates your organization's commitment to environmental
                    stewardship and sustainable business practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Meet local and international environmental regulations without concern, ensuring your operations
                    remain compliant with evolving emission standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    EPA-certified engines feature advanced technology that improves fuel efficiency, reducing
                    operational costs while minimizing environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cleaner Operation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reduced emissions mean cleaner air around your facility, creating a healthier work environment for
                    employees and neighboring communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn More About Our EPA-Certified Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team to receive detailed EPA certification documentation and discover how HNL's
              environmentally compliant generators can power your operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/contact">Request EPA Documentation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/generators">View Generator Range</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
