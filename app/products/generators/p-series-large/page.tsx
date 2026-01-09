import type { Metadata } from "next"
import PSeriesLargeClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Perkins P Series 825-2500 kVA Generators | HNL Pakistan",
  description:
    "Perkins P Series heavy-duty diesel generators 825-2500 kVA powered by Perkins engines. HNL is the authorized sole distributor of AGG Power in Pakistan. Reliable industrial power solutions.",
}

export default function PSeriesLargePage() {
  return <PSeriesLargeClientPage />
}
