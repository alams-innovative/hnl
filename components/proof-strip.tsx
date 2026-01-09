import { CheckCircle2 } from "lucide-react"

interface ProofStripProps {
  items?: string[]
  stats?: Array<{ value: string; label: string }>
}

export function ProofStrip({ items, stats }: ProofStripProps) {
  if (stats) {
    return (
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-hnl-red mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {items?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-hnl-red flex-shrink-0" />
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofStrip
