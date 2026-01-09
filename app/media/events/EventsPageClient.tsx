"use client"

import { useMemo } from "react"
import Breadcrumbs from "@/components/breadcrumbs"
import { Calendar, MapPin, Users, MessageCircle } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"
import Link from "next/link"

interface Event {
  title: string
  date: string
  dateSort: Date
  location: string
  type: string
  description: string
  industry: string
}

const allEvents2026: Omit<Event, "dateSort">[] = [
  {
    title: "Pakistan Energy Conference",
    date: "Jan 08, 2026",
    location: "Islamabad (Serena Hotel)",
    type: "Energy Sector Conference",
    description:
      "High-level energy industry platform bringing together key decision-makers, policymakers, and industry leaders to discuss Pakistan's energy future.",
    industry: "Energy Sector Conference",
  },
  {
    title: "ITCN Asia 2026 (27th Edition)",
    date: "Jan 17–19, 2026",
    location: "Expo Centre Lahore",
    type: "IT & Telecom",
    description:
      "Pakistan's biggest tech & telecom expo showcasing latest innovations in ICT, Cloud, AI, and Telecom infrastructure.",
    industry: "IT & Telecom",
  },
  {
    title: "ISEM Pakistan Solar Energy Exhibition 2026 (13th Edition)",
    date: "Jun 12–14, 2026",
    location: "Expo Centre Lahore",
    type: "Solar & Renewable Energy",
    description:
      "Premium B2B solar energy trade show for C-level engagement, featuring latest solar technologies and sustainable energy solutions.",
    industry: "Solar & Renewable Energy",
  },
  {
    title: "Pakistan Energy Exhibition (PEEC) 2026",
    date: "Aug 21–23, 2026",
    location: "Expo Centre Karachi",
    type: "Energy & Power",
    description:
      "Flagship energy event for power, grid, and smart energy technologies bringing together Oil & Gas, Power Technology sectors.",
    industry: "Energy & Power",
  },
  {
    title: "ITCN Asia 2026 (28th Edition)",
    date: "Sep 22–24, 2026",
    location: "Expo Centre Karachi",
    type: "IT & Telecom",
    description:
      "Largest regional ICT hub expo showcasing innovations in IT infrastructure, telecom networks, and digital solutions.",
    industry: "IT & Telecom",
  },
]

const pastEvents2025 = [
  {
    date: "May 23–25, 2025",
    title: "ISEM Pakistan Solar Exhibition",
    location: "Expo Centre Lahore",
    industry: "Solar & Renewable Energy",
  },
  {
    date: "Aug 15–17, 2025",
    title: "Solar Pakistan 2025 (Pak Solar Expo)",
    location: "Karachi Expo Centre",
    industry: "Solar & Sustainable Energy",
  },
  {
    date: "Aug 1–3, 2025",
    title: "Electricity Pakistan & Energy / Power Expo",
    location: "Lahore Expo Centre",
    industry: "Power, Energy, Storage",
  },
  {
    date: "Sep 23–25, 2025",
    title: "ITCN Asia 2025",
    location: "Karachi Expo Centre",
    industry: "IT & Telecom",
  },
  {
    date: "Nov 19–20, 2025",
    title: "Pakistan Energy Exhibition & Conference (PEEC)",
    location: "Islamabad – Pak China Convention Centre",
    industry: "Power & Energy",
  },
  {
    date: "Nov 28–30, 2025",
    title: "ISEM Solar (Peshawar)",
    location: "Peshawar",
    industry: "Solar Energy",
  },
]

function parseEventDate(dateStr: string): Date {
  // Extract the last date from date ranges (e.g., "Jan 17–19, 2026" -> "Jan 19, 2026")
  const dateMatch = dateStr.match(/([A-Za-z]+)\s+(\d+)(?:–\d+)?,\s+(\d{4})/)
  if (dateMatch) {
    const [, month, day, year] = dateMatch
    const lastDay = dateStr.includes("–") ? dateStr.match(/–(\d+)/)?.[1] || day : day
    return new Date(`${month} ${lastDay}, ${year}`)
  }
  return new Date(dateStr)
}

export default function EventsPageClient() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media/project-gallery" },
    { label: "Events", href: "/media/events" },
  ]

  const { upcomingEvent, futureEvents2026, pastEvents2026 } = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Parse and sort all 2026 events
    const events: Event[] = allEvents2026.map((event) => ({
      ...event,
      dateSort: parseEventDate(event.date),
    }))

    // Separate upcoming and past events
    const upcoming = events
      .filter((event) => event.dateSort >= today)
      .sort((a, b) => a.dateSort.getTime() - b.dateSort.getTime())
    const past = events
      .filter((event) => event.dateSort < today)
      .sort((a, b) => b.dateSort.getTime() - a.dateSort.getTime())

    return {
      upcomingEvent: upcoming[0] || null,
      futureEvents2026: upcoming.slice(1), // All upcoming except the first one
      pastEvents2026: past,
    }
  }, [])

  const generateWhatsAppLink = (eventName: string, eventDate: string, location: string) => {
    const message = `Hello HNL Team, I'm interested in meeting at ${eventName} happening on ${eventDate} at ${location}. I'd like to discuss your power solutions and explore potential partnership opportunities. Please confirm your availability.`
    return `https://wa.me/923300005605?text=${encodeURIComponent(message)}`
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black py-16 text-white">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="mt-8 flex items-center gap-3">
              <Calendar className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold md:text-5xl">Events & Exhibitions</h1>
            </div>
            <p className="mt-4 max-w-3xl text-lg text-gray-300">
              Meet HNL at industry events, trade shows, and exhibitions across Pakistan. Explore our solutions, network
              with experts, and discover partnership opportunities.
            </p>
          </div>
        </section>

        {upcomingEvent && (
          <section className="py-16 bg-gradient-to-b from-red-50 to-white">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full mb-4">
                  NEXT EVENT
                </div>
                <h2 className="text-3xl font-bold">Upcoming Event</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-2xl p-8 border-2 border-red-600">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3 animate-pulse">
                        {upcomingEvent.type}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{upcomingEvent.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="h-5 w-5 text-red-600" />
                          <span className="font-bold">{upcomingEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin className="h-5 w-5 text-red-600" />
                          <span>{upcomingEvent.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Users className="h-5 w-5 text-red-600" />
                          <span className="text-sm font-medium">{upcomingEvent.industry}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{upcomingEvent.description}</p>
                    </div>
                    <div className="lg:w-48">
                      <Link
                        href={generateWhatsAppLink(upcomingEvent.title, upcomingEvent.date, upcomingEvent.location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Book a Meeting
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {futureEvents2026.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full mb-4">
                  UPCOMING
                </div>
                <h2 className="text-3xl font-bold">Activities in 2026</h2>
                <p className="text-gray-600 mt-2">Meet HNL at these upcoming industry events across Pakistan</p>
              </div>
              <div className="space-y-6">
                {futureEvents2026.map((event) => (
                  <div
                    key={event.title}
                    className="bg-gradient-to-r from-red-50 to-white rounded-xl shadow-lg p-8 border-l-4 border-red-600"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full mb-3">
                          {event.type}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="h-5 w-5 text-red-600" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-5 w-5 text-red-600" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Users className="h-5 w-5 text-red-600" />
                            <span className="text-sm font-medium">{event.industry}</span>
                          </div>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                      <div className="lg:w-48 flex-shrink-0">
                        <Link
                          href={generateWhatsAppLink(event.title, event.date, event.location)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Book a Meeting
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {pastEvents2026.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold">Past Events 2026</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Date</th>
                        <th className="px-6 py-4 text-left font-bold">Event Name</th>
                        <th className="px-6 py-4 text-left font-bold">City/Venue</th>
                        <th className="px-6 py-4 text-left font-bold">Industry Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pastEvents2026.map((event, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">{event.date}</td>
                          <td className="px-6 py-4 text-gray-900 font-medium">{event.title}</td>
                          <td className="px-6 py-4 text-gray-700">{event.location}</td>
                          <td className="px-6 py-4 text-gray-700">{event.industry}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">Past Events 2025</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Date</th>
                      <th className="px-6 py-4 text-left font-bold">Event Name</th>
                      <th className="px-6 py-4 text-left font-bold">City/Venue</th>
                      <th className="px-6 py-4 text-left font-bold">Industry Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pastEvents2025.map((event, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">{event.date}</td>
                        <td className="px-6 py-4 text-gray-900 font-medium">{event.title}</td>
                        <td className="px-6 py-4 text-gray-700">{event.location}</td>
                        <td className="px-6 py-4 text-gray-700">{event.industry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Want Us at Your Event?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Organizing a conference, exhibition, or industry event? Invite HNL to participate as an exhibitor or
              speaker.
            </p>
            <Link
              href="https://wa.me/923300005605?text=Hello%20HNL%20Team%2C%20I%27m%20organizing%20an%20industry%20event%20and%20would%20like%20to%20invite%20HNL%20as%20an%20exhibitor%20or%20speaker.%20Please%20share%20the%20partnership%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Events Team
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
