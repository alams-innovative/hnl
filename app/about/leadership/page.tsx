import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { Linkedin, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Leadership Team | About HNL",
  description:
    "Meet the experienced leadership team driving HNL's vision of infrastructure excellence across Pakistan.",
}

const founderCEO = {
  name: "Jamil Ahmad Mayo",
  position: "Chief Executive Officer (CEO)",
  image: "/images/jamil-mayo-ceo-founder.png",
  linkedin: "https://www.linkedin.com/in/jamil-ahmed-mayo-62bb3a309",
  bio: [
    "Mr. Jamil Ahmad Mayo is a distinguished entrepreneur and visionary leader whose impact resonates across diverse spheres of influence. Armed with a professional background in mechanical engineering, he is the Founder & CEO of Hitech Network Limited (HNL), a position he has held with distinction for the last two decades. Under his leadership, HNL has grown from a nascent venture into a powerhouse of infrastructure solutions, with headquarters in Lahore and an extensive network comprising 10 regional offices complemented by a remarkable 144 branch offices across Pakistan.",
    "Beyond his pivotal role at HNL, Mr. Jamil Ahmad Mayo holds the prestigious position of President of the Pakistan Hungary Business Council (PHBC), a testament to his dedication to bilateral economic growth and cross-cultural collaboration between Pakistan and Hungary. His contributions extend to active participation in international forums and industry bodies, positioning him as a leader of global stature who blends visionary entrepreneurship with meaningful engagement in shaping Pakistan's digital and energy independence. In essence, Mr. Jamil Ahmad Mayo emerges as a transformative figure, ultimately contributing to the sustainable growth of the nation.",
  ],
  featuredIn: [
    {
      name: "GSMA",
      logo: "/gsma-logo.jpg",
      url: "https://www.gsma.com/about-us/regions/asia-pacific/gsma_people/jamil-ahmad-mayo/",
    },
    {
      name: "CXO Forum Digital Summit",
      logo: "/cxo-forum-logo.jpg",
      url: "https://digitalsummit.cxoforum.global/speaker/jamil-ahmad-mayo/",
    },
  ],
}

const boardOfDirectors = [
  {
    name: "Mehnaz Jamil",
    position: "Board Of Directors",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
  {
    name: "Humayoun Iqbal",
    position: "Managing Director",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
]

const cLevel = [
  {
    name: "Inamullah Khan",
    position: "Chief Technology Officer (CTO)",
    image: "/images/inamullah-20khan-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/inamullah-khan-a4240214/",
  },
  {
    name: "Babar Waseem",
    position: "Chief Financial Officer (CFO)",
    image: "/images/babar-20waseem-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/babar-waseem-4b2391264",
  },
  {
    name: "Khalil Ahmad",
    position: "Chief Coordinating Officer (CCO)",
    image: "/images/khalil-20ahmad-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/khalil-ahmad-b898b9117",
  },
  {
    name: "Mian Jahanzeb Naveed",
    position: "Chief Business Officer (CBO)",
    image: "/images/jahanzeb-20naveed-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/jahanzeb-naveed/",
  },
  {
    name: "TBA",
    position: "Chief Operating Officer (COO)",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
]

const directors = [
  {
    name: "Syed Shahzad Ali",
    position: "Director Sales and Marketing",
    image: "/images/syed-shahzad-ali-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/syed-shahzadali",
  },
  {
    name: "Mohsin Ali",
    position: "Head of HR & Admin",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
  {
    name: "Shahzad Ally",
    position: "Head of Internal Audit",
    image: "/images/shahzad-20ally-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/shahzad-ally-374594343",
  },
  {
    name: "Saeed Ahmad Mayo",
    position: "Head of Overhauling",
    image: "/images/saeed-20ahmed-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/saeed-ahmed-5b63459b",
  },
]

const seniorManagers = [
  {
    name: "Ejaz Ahmed",
    position: "Senior Manager Bidding and Contracts",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
  {
    name: "Asad Islam",
    position: "Senior Manager Production",
    image: "/images/asad-20islam-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/asad-islam-aca-fcca-b70b5046/",
  },
  {
    name: "Babar Zafar",
    position: "Senior Manager Procurement",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
  {
    name: "Zafar Iqbal",
    position: "Senior Manager Commercial",
    image: "/images/zafar-iqbal-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/zafar-i-93964182/",
  },
  {
    name: "Usman Ghani",
    position: "Senior Manager OH",
    image: "/images/user-placeholder.svg",
    linkedin: "https://www.linkedin.com/in/muhammad-usman-ghani-1a015078/",
  },
  {
    name: "Tahseen Iqbal",
    position: "Senior Manager Ops Excellence",
    image: "/images/tahseen-iqbal-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/tahseen-iqbal-b98a9a35",
  },
  {
    name: "Wajid Akbar",
    position: "Senior Manager Fiber/HFC",
    image: "/images/wajid-akbar-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/wajid-akbar-b2b99b18/",
  },
]

const projectManagers = [
  {
    name: "Syed Zain Tirmazi",
    position: "Head Of Nokia Project",
    image: "/images/syed-zain-tirmazi-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/syed-zain-tirmazi-5805b415/",
  },
  {
    name: "Muhammad Tahir Jamil",
    position: "Project Manager Operations - North Region Jazz",
    image: "/images/muhammad-20tahir-20jamil-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/muhammad-tahir-jamil-97a5421b7/",
  },
  {
    name: "Muhammad Ashfaq",
    position: "Project Manager Operations - South Region Jazz",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
  {
    name: "Prince Muhammad Aftab Saeed",
    position: "Project Manager Operations - Central Region Jazz",
    image: "/images/prince-20muhammad-20aftab-20saeed-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/prince-muhammad-aftab-saeed-7aabb623",
  },
  {
    name: "Tariq Mahmood",
    position: "Project Manager Operations - South Region Telenor",
    image: "/images/user-placeholder.svg",
    linkedin: "",
  },
  {
    name: "Mian Nadeem Shafqat",
    position: "Project Manager Operations - Central Region Telenor",
    image: "/images/mian-20nadeem-20shafqat-hnl.jpeg",
    linkedin: "https://www.linkedin.com/in/mian-nadeem-shafqat-0083a867",
  },
  {
    name: "Inamullah Khan",
    position: "Project Manager Operations - North Region Telenor",
    image: "/images/user-placeholder.svg",
    linkedin: "https://www.linkedin.com/in/inamullah-khan-a4240214/",
  },
]

export default function LeadershipPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96">
            <Image src="/images/r8.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-red-600 font-semibold mb-4 tracking-wider uppercase">Our People</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Leadership Team</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Visionary leaders driving Pakistan's infrastructure transformation through innovation, excellence, and an
              unwavering commitment to national progress.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section - Layer 1 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-red-600 font-semibold tracking-wider uppercase mb-2">Office of the CEO</p>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={founderCEO.image || "/placeholder.svg"}
                    alt={founderCEO.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-red-600 rounded-lg -z-10" />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{founderCEO.name}</h2>
                <p className="text-red-600 font-semibold text-lg mb-6">{founderCEO.position}</p>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  {founderCEO.bio.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? "text-lg font-medium text-gray-700" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href={founderCEO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#006097] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Featured In</p>
                  <div className="flex flex-wrap items-center gap-6">
                    {founderCEO.featuredIn.map((feature) => (
                      <Link
                        key={feature.name}
                        href={feature.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Image
                          src={feature.logo || "/placeholder.svg"}
                          alt={feature.name}
                          width={80}
                          height={30}
                          className="object-contain grayscale group-hover:grayscale-0 transition-all"
                        />
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors - Layer 2 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold tracking-wider uppercase mb-2">Layer 2</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {boardOfDirectors.map((director) => (
                <div key={director.name} className="group text-center">
                  <div className="relative mb-6 mx-auto w-48 h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -m-1" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-white transition-colors">
                      <Image
                        src={director.image || "/placeholder.svg"}
                        alt={director.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{director.name}</h3>
                  <p className="text-red-600 font-medium text-sm mb-3">{director.position}</p>
                  {director.linkedin && (
                    <Link
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C-Level Section - Layer 3 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold tracking-wider uppercase mb-2">Layer 3</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">C-Suite Executives</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {cLevel.map((executive) => (
                <div key={executive.name} className="group text-center">
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -m-1" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-white transition-colors">
                      <Image
                        src={executive.image || "/placeholder.svg"}
                        alt={executive.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{executive.name}</h3>
                  <p className="text-red-600 font-medium text-xs mb-3">{executive.position}</p>
                  {executive.linkedin && (
                    <Link
                      href={executive.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directors/Heads Section - Layer 3 continued */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold tracking-wider uppercase mb-2">Layer 3</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Directors & Department Heads</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {directors.map((director) => (
                <div
                  key={director.name}
                  className="bg-gray-800 rounded-lg p-6 group hover:bg-gray-750 transition-colors text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-gray-700 group-hover:ring-red-600 transition-colors">
                    <Image
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{director.name}</h3>
                  <p className="text-gray-400 text-xs mt-1 mb-3">{director.position}</p>
                  {director.linkedin && (
                    <Link
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-red-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mx-auto" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senior Managers - Layer 4 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold tracking-wider uppercase mb-2">Layer 4</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Senior Managers</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {seniorManagers.map((manager) => (
                <div key={manager.name} className="group text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-600 transition-colors">
                    <Image src={manager.image || "/placeholder.svg"} alt={manager.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 mb-1">{manager.name}</h3>
                  <p className="text-gray-500 text-xs leading-tight mb-2">{manager.position}</p>
                  {manager.linkedin && (
                    <Link
                      href={manager.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Managers - Layer 5 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-red-600 font-semibold tracking-wider uppercase mb-2">Layer 5</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Managers</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projectManagers.map((pm) => (
                <div
                  key={pm.name}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="relative w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image src={pm.image || "/placeholder.svg"} alt={pm.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{pm.name}</h3>
                  <p className="text-gray-500 text-xs leading-tight mb-2">{pm.position}</p>
                  {pm.linkedin && (
                    <Link
                      href={pm.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Leadership Team</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our growing team. Explore career opportunities at HNL.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  )
}
