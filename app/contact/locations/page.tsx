import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { ContactHeader } from "@/components/contact-header"

export const metadata: Metadata = {
  title: "Office Locations | HNL Pakistan",
  description: "Visit our offices in Lahore, Islamabad, Karachi, and other major cities across Pakistan.",
}

export default function LocationsPage() {
  const offices = [
    {
      city: "Lahore",
      type: "Head Office",
      address: "Commercial Arcade, Divine Gardens, New Airport Road, Lahore",
      phone: "(+92-42) 111-000-845",
      email: "info@hnl.com.pk",
      hours: "Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 4 PM",
      mapUrl: "https://maps.app.goo.gl/11XV23YjRDYQ9ph78",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7899999999995!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1234567890",
    },
    {
      city: "Islamabad",
      type: "Regional Office",
      address: "Plot 23, Street 9, I-9/3, Islamabad",
      phone: "(+92-51) 111-000-845",
      email: "islamabad@hnl.com.pk",
      hours: "Mon-Fri: 9 AM - 6 PM",
      mapUrl: "#",
    },
    {
      city: "Karachi",
      type: "Regional Office",
      address: "Block 4, Clifton, Karachi",
      phone: "(+92-21) 111-000-845",
      email: "karachi@hnl.com.pk",
      hours: "Mon-Fri: 9 AM - 6 PM",
      mapUrl: "#",
    },
  ]

  const mainOffice = offices[0]

  return (
    <main>
      <ContactHeader title="Our Office Locations" description="Visit us at any of our locations across Pakistan" />

      <section className="py-12">
        <div className="container">
          {/* Main Office with Map */}
          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="bg-gradient-to-br from-black to-gray-900 text-white p-8 rounded-2xl">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                {mainOffice.type}
              </div>
              <h2 className="text-2xl font-bold mb-6">{mainOffice.city}</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{mainOffice.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${mainOffice.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {mainOffice.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${mainOffice.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {mainOffice.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{mainOffice.hours}</p>
                </div>
              </div>

              <a
                href={mainOffice.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 font-semibold"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border-4 border-gray-200 h-[400px]">
              <iframe
                src={mainOffice.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${mainOffice.city} Office Location`}
              />
            </div>
          </div>

          {/* Other Offices */}
          <h3 className="text-xl font-bold mb-6">Regional Offices</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {offices.slice(1).map((office) => (
              <div key={office.city} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3">
                  {office.type}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{office.city}</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <p>{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
