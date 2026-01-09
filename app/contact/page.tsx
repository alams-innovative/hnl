import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageSquare, FileText, Users, MapPinned } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { getWhatsAppLink } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Contact HNL Pakistan | Get in Touch | Request Quote",
  description:
    "Contact HNL for telecom infrastructure, energy solutions, and enterprise IT services. Offices in Lahore, Islamabad, and Karachi with nationwide support across 40+ cities in Pakistan.",
}

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ]

  const supportCities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Gujranwala",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Bahawalpur",
    "Sargodha",
    "Sukkur",
    "Larkana",
    "Hyderabad",
    "Jhang",
    "Gujrat",
    "Mardan",
    "Kasur",
    "Rahim Yar Khan",
    "Sahiwal",
    "Okara",
    "Wah Cantonment",
    "Dera Ghazi Khan",
    "Mirpur Khas",
    "Nawabshah",
    "Mingora",
    "Chiniot",
    "Kamoke",
    "Mandi Bahauddin",
    "Jhelum",
    "Sadiqabad",
    "Jacobabad",
    "Shikarpur",
    "Khanewal",
    "Hafizabad",
    "Kohat",
    "Muzaffargarh",
    "Khanpur",
    "Gojra",
    "Mandi Burewala",
    "Abbottabad",
    "Turbat",
    "Dadu",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact HNL",
            description: "Contact page for HNL Pakistan",
            url: "https://hnl.com.pk/contact",
          }),
        }}
      />

      <main>
        <Breadcrumbs items={breadcrumbItems} />

        <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in Touch with HNL
              </h1>
              <p className="text-lg text-gray-300 md:text-xl mb-8">
                Pakistan's trusted partner for telecom infrastructure, energy solutions, and enterprise IT services. Our
                team is ready to help you build the future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+924211100845"
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  Call: (+92-42) 111-000-845
                </a>
                <a
                  href="mailto:info@hnl.com.pk"
                  className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  info@hnl.com.pk
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">How Can We Help You?</h2>
              <p className="text-gray-600">Choose the best way to reach our team</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/contact/inquiry" className="group">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-primary h-full hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white/20 text-white mb-4 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <MessageSquare className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Inquiry Form</h3>
                  <p className="text-white/80 text-sm">Send us a message and we'll respond within 24 hours</p>
                </div>
              </Link>

              <Link href="/contact/locations" className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary h-full hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300">
                    <MapPinned className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Office Locations
                  </h3>
                  <p className="text-gray-600 text-sm">Find our offices across Pakistan</p>
                </div>
              </Link>

              <Link href="/contact/distributors" className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary h-full hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Distributor Network
                  </h3>
                  <p className="text-gray-600 text-sm">Connect with our partner network</p>
                </div>
              </Link>

              <Link href="/contact/quote" className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary h-full hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Request Quote</h3>
                  <p className="text-gray-600 text-sm">Get detailed pricing for your project</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Head Office</h2>
              <p className="text-gray-600">Visit us at our main location in Lahore</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div className="bg-gradient-to-br from-black to-gray-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">HNL Head Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Address</div>
                      <p className="text-gray-300">
                        Commercial Arcade, Divine Gardens
                        <br />
                        New Airport Road
                        <br />
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Phone</div>
                      <a href="tel:+924211100845" className="text-gray-300 hover:text-primary transition-colors">
                        (+92-42) 111-000-845
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Email</div>
                      <div className="space-y-1">
                        <a
                          href="mailto:info@hnl.com.pk"
                          className="block text-gray-300 hover:text-primary transition-colors"
                        >
                          info@hnl.com.pk
                        </a>
                        <a
                          href="mailto:sales@hnl.com.pk"
                          className="block text-gray-300 hover:text-primary transition-colors"
                        >
                          sales@hnl.com.pk
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Business Hours</div>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <a
                      href={getWhatsAppLink({ action: "Meeting", page: "Contact Page" })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] border-4 border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.7899999999995!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HNL Head Office Location"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Nationwide Sales Support</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our sales and support teams are available across Pakistan's major cities to assist you with
                infrastructure deployment, energy solutions, and enterprise IT services.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {supportCities.map((city) => (
                <div
                  key={city}
                  className="px-5 py-2.5 bg-white border-2 border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer hover:scale-105 shadow-sm hover:shadow-md"
                >
                  {city}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">Don't see your city? We can still help you.</p>
              <a
                href={getWhatsAppLink({ action: "Meeting", page: "Contact Page", section: "City Support" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Us for Your Location
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
