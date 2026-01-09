import { Button } from "@/components/ui/button"
import { getWhatsAppLink } from "@/lib/whatsapp"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description?: string
  primaryCTA: string | { text: string; href: string }
  secondaryCTA?: string | { text: string; href: string }
  backgroundVariant?: "dark" | "light"
  serviceName?: string
  backgroundImage?: string
}

export function ServiceHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundVariant = "dark",
  serviceName,
  backgroundImage,
}: ServiceHeroProps) {
  const isDark = backgroundVariant === "dark"

  const getPrimaryCTAText = () => (typeof primaryCTA === "string" ? primaryCTA : primaryCTA.text)
  const getPrimaryCTAHref = () =>
    typeof primaryCTA === "string" ? getWhatsAppLink({ action: "Quote", page: serviceName || title }) : primaryCTA.href

  const getSecondaryCTAText = () => (typeof secondaryCTA === "string" ? secondaryCTA : secondaryCTA?.text)
  const getSecondaryCTAHref = () => (typeof secondaryCTA === "string" ? "/contact" : secondaryCTA?.href || "/contact")

  const isAnchorLink = (href: string) => href.startsWith("#")
  const primaryHref = getPrimaryCTAHref()
  const secondaryHref = getSecondaryCTAHref()

  return (
    <section
      className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-16 md:py-24 relative overflow-hidden`}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={`absolute inset-0 ${isDark ? "bg-black/85" : "bg-white/90"}`} />
        </>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-hnl-red uppercase tracking-wider mb-4">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{title}</h1>
          {description && (
            <p className={`text-lg md:text-xl mb-8 text-pretty ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAnchorLink(primaryHref) ? (
              <Button asChild size="lg" className="bg-hnl-red text-white hover:bg-hnl-red-dark">
                <a href={primaryHref} className="scroll-smooth">
                  {getPrimaryCTAText()}
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" className="bg-hnl-red text-white hover:bg-hnl-red-dark">
                <Link href={primaryHref}>{getPrimaryCTAText()}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <>
                {isAnchorLink(secondaryHref) ? (
                  <Button
                    asChild
                    size="lg"
                    className={
                      isDark ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"
                    }
                  >
                    <a href={secondaryHref} className="scroll-smooth">
                      {getSecondaryCTAText()}
                    </a>
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="lg"
                    className={
                      isDark ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-900"
                    }
                  >
                    <Link href={secondaryHref}>{getSecondaryCTAText()}</Link>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
