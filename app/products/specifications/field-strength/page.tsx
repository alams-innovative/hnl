import type { Metadata } from "next"
import { FieldStrengthClient } from "./field-strength-client"

export const metadata: Metadata = {
  title: "Field Strength Overview - HNL Nationwide Capacity | HNL",
  description:
    "Discover HNL's nationwide infrastructure strength with 144 offices, 180+ qualified engineers, 980+ field technicians, and strategic partnerships with global industry leaders.",
  keywords: [
    "HNL field strength",
    "nationwide coverage Pakistan",
    "engineering capacity",
    "service network",
    "HNL partnerships",
  ],
}

export default function FieldStrengthPage() {
  return <FieldStrengthClient />
}
