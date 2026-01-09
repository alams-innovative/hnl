import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import { ImageIcon } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Project Gallery | HNL Pakistan - Installation Photos",
  description:
    "Browse HNL's project gallery featuring installation photos from telecom, energy, and IT infrastructure projects across Pakistan.",
}

const projectCategories = [
  {
    category: "Telecom Infrastructure",
    projects: [
      {
        title: "Jazz FTTH Rollout - Lahore",
        location: "DHA & Cantt, Lahore",
        year: "2024",
        images: 45,
        thumbnail: "/fiber-optic-cable-installation-in-lahore.jpg",
      },
      {
        title: "Telenor Cell Site Integration",
        location: "Punjab & KPK",
        year: "2024",
        images: 60,
        thumbnail: "/telecom-tower-installation-pakistan.jpg",
      },
      {
        title: "PTCL Fiber Backbone",
        location: "Karachi-Lahore Route",
        year: "2023",
        images: 38,
        thumbnail: "/fiber-optic-underground-cable-laying.jpg",
      },
    ],
  },
  {
    category: "Energy & Power",
    projects: [
      {
        title: "K-Electric Hybrid Solar Systems",
        location: "Karachi",
        year: "2024",
        images: 52,
        thumbnail: "/solar-panel-installation-on-industrial-building.jpg",
      },
      {
        title: "BESS Installation - Telecom Towers",
        location: "Nationwide",
        year: "2024",
        images: 41,
        thumbnail: "/battery-storage-installation.png",
      },
      {
        title: "Diesel Generator Deployment",
        location: "Multiple Sites",
        year: "2023-2024",
        images: 67,
        thumbnail: "/industrial-diesel-generator-installation.jpg",
      },
    ],
  },
  {
    category: "Enterprise IT & Cloud",
    projects: [
      {
        title: "Data Center Setup - HBL",
        location: "Karachi",
        year: "2024",
        images: 28,
        thumbnail: "/modern-data-center-server-racks.jpg",
      },
      {
        title: "ICT Infrastructure - Lucky Cement",
        location: "Karachi Plant",
        year: "2023",
        images: 34,
        thumbnail: "/enterprise-network-infrastructure-cabling.jpg",
      },
    ],
  },
]

export default function ProjectGalleryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media/project-gallery" },
    { label: "Project Gallery", href: "/media/project-gallery" },
  ]

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
              <ImageIcon className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold md:text-5xl">Project Gallery</h1>
            </div>
            <p className="mt-4 max-w-3xl text-lg text-gray-300">
              Visual documentation of our infrastructure deployments across Pakistan. From telecom rollouts to energy
              installations, see our projects in action.
            </p>
          </div>
        </section>

        {/* Gallery Sections */}
        {projectCategories.map((category) => (
          <section key={category.category} className="py-16 odd:bg-white even:bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold">{category.category}</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.projects.map((project) => (
                  <div
                    key={project.title}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-200">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                          <span>•</span>
                          <span>{project.images} photos</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <button className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
                        View Gallery
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
