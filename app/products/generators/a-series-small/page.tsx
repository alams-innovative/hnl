import type { Metadata } from "next"
import ASeriesSmallClientPage from "./a-series-small-client-page"

export const metadata: Metadata = {
  title: "AGG A Series 16.5-150 kVA Generators | HNL Pakistan",
  description:
    "AGG A Series diesel generators powered by AGG engines. HNL is the authorized sole distributor of AGG Power in Pakistan. Reliable 16.5-150 kVA solutions for homes and businesses.",
}

export default function ASeriesSmallPage() {
  return <ASeriesSmallClientPage />
}
