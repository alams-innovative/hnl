import type { Metadata } from "next"
import { TechnicalSpecsClient } from "./client-page"

export const metadata: Metadata = {
  title: "Technical Specifications | Product Documentation | HNL",
  description:
    "Browse and download technical specifications for AGG diesel generators, solar panels, batteries, and AC/DC power solutions. HNL is the official distributor in Pakistan.",
}

export default function TechnicalSpecsPage() {
  return <TechnicalSpecsClient />
}
