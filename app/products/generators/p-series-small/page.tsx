import type { Metadata } from "next"
import PSeriesSmallClientPage from "./client-page"

export const metadata: Metadata = {
  title: "AGG P Series 10-220 kVA Generators | HNL Pakistan",
  description:
    "AGG P Series diesel generators powered by Perkins engines. HNL is the authorized sole distributor of AGG Power in Pakistan. Reliable 10-220 kVA solutions.",
}

export default function PSeriesSmallPage() {
  return <PSeriesSmallClientPage />
}
