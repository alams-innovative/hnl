import type { Metadata } from "next"
import PSeriesMediumClientPage from "./client-page"

export const metadata: Metadata = {
  title: "AGG P Series 250-1100 kVA Generators | Perkins Powered | HNL Pakistan",
  description:
    "AGG P Series diesel generators 250-1100 kVA powered by Perkins engines. HNL is the authorized sole distributor of AGG Power in Pakistan. World-class reliability for industrial applications.",
}

export default function PSeriesMediumPage() {
  return <PSeriesMediumClientPage />
}
