import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

interface CtaSectionProps {
  title?: string
  description?: string
}

export function CtaSection({
  title = "Ready to Power Your Next Project?",
  description = "Partner with Pakistan's leading infrastructure and energy solutions provider. Let's build something extraordinary together.",
}: CtaSectionProps) {
  return (
    <section className="w-full">
      <div className="h-32 bg-gradient-to-b from-white via-white to-red-600 w-full"></div>

      {/* Main CTA content with red to black gradient - full width background */}
      <div className="w-full bg-gradient-to-b from-red-600 via-red-700 to-black py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 2xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white text-balance">{title}</h2>
            <p className="text-base md:text-lg mb-10 text-white/80 text-balance leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                <Link href="/contact/quote">
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">
                  <Phone className="mr-2 w-4 h-4" /> Talk to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
export { CtaSection as CTASection }
