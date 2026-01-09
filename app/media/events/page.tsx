import type { Metadata } from "next"
import EventsPageClient from "./EventsPageClient"

export const metadata: Metadata = {
  title: "Events | HNL Pakistan - Industry Events & Exhibitions",
  description:
    "HNL participation in industry events, trade shows, and exhibitions across Pakistan. Meet our team and explore our latest solutions.",
}

export default function EventsPage() {
  return <EventsPageClient />
}
