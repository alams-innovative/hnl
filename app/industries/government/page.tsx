import type { Metadata } from "next"
import GovernmentIndustryClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Government Infrastructure Solutions | Smart City & Public Sector | HNL",
  description:
    "Mission-critical infrastructure for Pakistan's government sector. Punjab Police, PSCA Safe City, PMU, Pakistan Railways. ICT, surveillance, and power solutions.",
}

export default function GovernmentIndustryPage() {
  return <GovernmentIndustryClientPage />
}
