import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import { Play } from "lucide-react"
import { generateBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Videos & Demos | HNL Pakistan - Product Demonstrations",
  description:
    "Watch HNL product demonstrations, installation guides, and technical tutorials for generators, solar systems, and telecom equipment.",
}

const videoCategories = [
  {
    category: "Product Demonstrations",
    videos: [
      {
        title: "AGG Diesel Generator Series - Complete Overview",
        description: "Comprehensive demonstration of AGG engine features, performance, and specifications",
        duration: "12:34",
        views: "5.2K",
        thumbnail: "/industrial-diesel-generator-running.jpg",
      },
      {
        title: "Perkins P Series 1100 kVA Installation",
        description: "Step-by-step installation process for large-scale Perkins generators",
        duration: "18:45",
        views: "3.8K",
        thumbnail: "/perkins-generator-installation-site.jpg",
      },
      {
        title: "BESS Battery Storage System Demo",
        description: "How battery energy storage systems work with telecom towers",
        duration: "9:23",
        views: "6.1K",
        thumbnail: "/battery-storage-system-for-telecom-tower.jpg",
      },
      {
        title: "Hybrid Solar-Diesel System Operation",
        description: "Real-world operation of hybrid power systems in Pakistan",
        duration: "15:12",
        views: "4.5K",
        thumbnail: "/solar-panels-with-diesel-generator-hybrid.jpg",
      },
      {
        title: "AGG Diesel Generator Presentation Video - C55D6",
        description:
          "55 kVA AGG Y Type soundproof generator powered by Cummins engine - highly customizable for construction, residential, retail and telecommunications",
        duration: "2:30",
        views: "1.6K",
        thumbnail: "https://img.youtube.com/vi/Tt6DnHDRiIA/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=Tt6DnHDRiIA",
      },
      {
        title: "AGG AS Series Generator Set Multi-side View",
        description:
          "AGG AS series equipped with engine, alternator and canopy of AGG brand - wide power range with world-class ISO9000 and ISO14001 certified production",
        duration: "1:45",
        views: "161",
        thumbnail: "https://img.youtube.com/vi/R_Ll14R7zbM/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=R_Ll14R7zbM",
      },
      {
        title: "AGG P Series Generator Set Multi-side View",
        description:
          "Perkins engine powered generator sets ranging from 10kVA to 2500kVA - designed for secure and reliable power across various applications",
        duration: "1:30",
        views: "150",
        thumbnail: "https://img.youtube.com/vi/Ele7j2nruo4/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=Ele7j2nruo4",
      },
      {
        title: "AGG Factory One Minute Quick View",
        description:
          "Quick tour of AGG manufacturing facility featuring trailer type units and high power range generator sets",
        duration: "1:00",
        views: "85",
        thumbnail: "https://img.youtube.com/vi/oNd1UEWLF9Q/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=oNd1UEWLF9Q",
      },
    ],
  },
  {
    category: "Installation Guides",
    videos: [
      {
        title: "Fiber Optic Cable Splicing Tutorial",
        description: "Professional fiber splicing techniques for FTTH deployment",
        duration: "22:18",
        views: "8.3K",
        thumbnail: "/fiber-optic-cable-splicing-equipment.jpg",
      },
      {
        title: "Cell Tower Site Integration Process",
        description: "Complete site integration workflow from civil works to commissioning",
        duration: "16:47",
        views: "4.2K",
        thumbnail: "/telecom-tower-construction-site.jpg",
      },
      {
        title: "Solar Panel Installation Best Practices",
        description: "Rooftop and ground-mount solar installation guidelines",
        duration: "14:30",
        views: "5.7K",
        thumbnail: "/solar-panel-installation-on-commercial-building.jpg",
      },
      {
        title: "AGG Generator Set Testing Process Introduced By AGG Klein",
        description: "Complete testing process demonstration for AGG generator sets by AGG Klein",
        duration: "8:45",
        views: "2.1K",
        thumbnail: "https://img.youtube.com/vi/S1WNly9NzhI/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=S1WNly9NzhI",
      },
      {
        title: "AGG 1375kVA Genset As a Mains Grid Connected Emergency Power Supply",
        description:
          "1375kVA 4.16kV Cummins KTA50-G3 engine in 40ft containerized type - shipped to serve as mains grid-connected emergency power supply for local community",
        duration: "0:50",
        views: "38",
        thumbnail: "https://img.youtube.com/vi/SlwKghxk9vM/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=SlwKghxk9vM",
      },
    ],
  },
  {
    category: "Project Case Studies",
    videos: [
      {
        title: "Empowering Southeast Asia with Over 80MW of Reliable Energy",
        description:
          "Over 80 units of 1375kVA AGG gensets delivered to Southeast Asia with Cummins KTA50G3 engines, Nidec Leroy Somer alternators, and Deep Sea Electronics controllers",
        duration: "0:30",
        views: "19K",
        thumbnail: "https://img.youtube.com/vi/AgAr2QcM_qI/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=AgAr2QcM_qI",
      },
      {
        title: "AGG Generator Sets Power the Railway Project",
        description:
          "High quality and robust AGG generator sets withstanding extreme weather conditions to maximize performance for railway infrastructure projects",
        duration: "1:30",
        views: "165",
        thumbnail: "https://img.youtube.com/vi/mcVGYHzN5C4/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=mcVGYHzN5C4",
      },
      {
        title: "Extensive Experience in Power Supply for Large Projects",
        description:
          "AGG's track record powering 2018 Asian Games, Expo Dubai 2020, Far East Energy Centre and overseas telecommunication base stations",
        duration: "2:00",
        views: "84",
        thumbnail: "https://img.youtube.com/vi/-WK6ZyCrHds/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=-WK6ZyCrHds",
      },
    ],
  },
  {
    category: "Industry Applications",
    videos: [
      {
        title: "The Application of Generator Sets in Hospitals",
        description:
          "How generator sets ensure stable power supply for hospitals - a fundamental requirement for normal medical operations during power outages",
        duration: "2:30",
        views: "419",
        thumbnail: "https://img.youtube.com/vi/BkfG2ZWbnQA/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=BkfG2ZWbnQA",
      },
      {
        title: "The Application of Generator Sets in Agriculture",
        description:
          "How modern agriculture uses generator sets to solve unstable power supply, production demands and emergency response challenges",
        duration: "1:45",
        views: "154",
        thumbnail: "https://img.youtube.com/vi/w48GLBp9if4/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=w48GLBp9if4",
      },
    ],
  },
  {
    category: "Technical Training",
    videos: [
      {
        title: "Generator Maintenance & Troubleshooting",
        description: "Preventive maintenance procedures and common issue resolution",
        duration: "25:12",
        views: "7.1K",
        thumbnail: "/technician-maintaining-diesel-generator.jpg",
      },
      {
        title: "NOC Monitoring Dashboard Training",
        description: "How to use network operations center monitoring tools effectively",
        duration: "19:34",
        views: "3.4K",
        thumbnail: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  {
    category: "Corporate",
    videos: [
      {
        title: "Power Customer Success and Power Excellence - AGG Corporate Video",
        description:
          "Discover AGG's mission and commitment to powering customer success through excellence in power generation solutions",
        duration: "3:00",
        views: "499",
        thumbnail: "https://img.youtube.com/vi/xXaZalqsfew/hqdefault.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=xXaZalqsfew",
      },
    ],
  },
]

export default function VideosDemosPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Media", href: "/media/project-gallery" },
    { label: "Videos & Demos", href: "/media/videos-demos" },
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
              <Play className="h-10 w-10 text-red-600" />
              <h1 className="text-4xl font-bold md:text-5xl">Videos & Demos</h1>
            </div>
            <p className="mt-4 max-w-3xl text-lg text-gray-300">
              Product demonstrations, installation guides, and technical training videos. Learn from our experts and see
              our solutions in action.
            </p>
          </div>
        </section>

        {/* Video Sections */}
        {videoCategories.map((category) => (
          <section key={category.category} className="py-16 odd:bg-white even:bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold">{category.category}</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.videos.map((video) => (
                  <a
                    key={video.title}
                    href={(video as any).youtubeUrl ? (video as any).youtubeUrl : "#"}
                    target={(video as any).youtubeUrl ? "_blank" : undefined}
                    rel={(video as any).youtubeUrl ? "noopener noreferrer" : undefined}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl block cursor-pointer"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-8 w-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                      <div className="text-xs text-gray-500">{video.views} views</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
