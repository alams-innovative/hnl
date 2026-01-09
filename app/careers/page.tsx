import type { Metadata } from "next"
import {
  Briefcase,
  GraduationCap,
  Users,
  Globe,
  Award,
  MapPin,
  Building2,
  Sparkles,
  CheckCircle2,
  Clock,
  Heart,
  Shield,
  TrendingUp,
  Linkedin,
  ExternalLink,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { RecruitmentForm } from "@/components/recruitment-form"
import { InternshipForm } from "@/components/internship-form"

export const metadata: Metadata = {
  title: "Careers at HNL Pakistan | Join Our Winning Team",
  description:
    "Join HNL and build critical infrastructure across Pakistan. Apply as a Subject Matter Expert or join our internship program. We hire the best of the best.",
}

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical coverage for you and family" },
  { icon: TrendingUp, title: "Growth & Learning", description: "Continuous training and career advancement" },
  { icon: Users, title: "Collaborative Culture", description: "Work with Pakistan's top infrastructure experts" },
  { icon: Shield, title: "Job Security", description: "Stable employment with a market leader" },
  { icon: Award, title: "Recognition", description: "Performance bonuses and appreciation programs" },
  { icon: Globe, title: "Nationwide Impact", description: "Your work powers Pakistan's critical infrastructure" },
]

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "100+", label: "Cities Covered" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Interns Hired Yearly" },
]

export default function CareersPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/careers" },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <main>
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-black py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-hnl-red/20 to-transparent" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span>Join Pakistan's Leading Infrastructure Company</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Build Your Career at <span className="text-hnl-red">HNL</span>
              </h1>
              <p className="text-lg text-gray-300 md:text-xl mb-8">
                We're looking for Subject Matter Experts who want to make an impact. No open positions listed here -
                just talent waiting to be discovered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#apply">
                  <Button size="lg" className="bg-hnl-red hover:bg-red-700 gap-2">
                    <Briefcase className="h-5 w-5" />
                    Apply as Expert
                  </Button>
                </a>
                <a href="#internship">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 gap-2 bg-transparent"
                  >
                    <GraduationCap className="h-5 w-5" />
                    Internship Program
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-hnl-red mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join HNL */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join HNL?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Be part of a team that's deploying fiber networks, powering critical sites, and modernizing enterprise
                IT across Pakistan.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-10 w-10 text-hnl-red mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Hire Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How We Hire</h2>
                <p className="text-gray-600">
                  We don't list vacant positions. Instead, we continuously look for exceptional talent who can
                  contribute to Pakistan's infrastructure growth.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      What We Look For
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-hnl-red mt-1">•</span>
                        Subject Matter Experts with proven track records
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-hnl-red mt-1">•</span>
                        Problem solvers who thrive in challenging environments
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-hnl-red mt-1">•</span>
                        Team players with strong communication skills
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-hnl-red mt-1">•</span>
                        Leaders who can mentor and grow teams
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Our Process
                    </h3>
                    <ol className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hnl-red text-white text-xs flex-shrink-0">
                          1
                        </span>
                        Submit your application via our form below
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hnl-red text-white text-xs flex-shrink-0">
                          2
                        </span>
                        HR reviews and shortlists within 5-7 days
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hnl-red text-white text-xs flex-shrink-0">
                          3
                        </span>
                        Technical interview with department heads
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hnl-red text-white text-xs flex-shrink-0">
                          4
                        </span>
                        Final interview and offer
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> We do not accept applications via email or WhatsApp. All applications must
                      be submitted through our official form to ensure proper evaluation. We occasionally post specific
                      roles on LinkedIn and Indeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="py-16 scroll-mt-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-hnl-red/10 text-hnl-red px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Briefcase className="h-4 w-4" />
                  Professional Application
                </div>
                <h2 className="text-3xl font-bold mb-4">Apply as Subject Matter Expert</h2>
                <p className="text-gray-600">
                  Complete the form below to be considered for current and future opportunities. Your profile will be
                  added to our talent pool.
                </p>
              </div>
              <RecruitmentForm />
            </div>
          </div>
        </section>

        {/* Internship Program Section */}
        <section id="internship" className="py-16 bg-gradient-to-br from-gray-900 to-black text-white scroll-mt-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hnl-red to-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="h-4 w-4" />
                  For Gen-Z Talent
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">HNL Internship Program</h2>
                <p className="text-gray-300 text-lg">
                  3 months of hands-on experience with Pakistan's top professionals. We hire{" "}
                  <span className="text-hnl-red font-semibold">100+ brilliant minds</span> every year.
                </p>
              </div>

              {/* Internship Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <Clock className="h-8 w-8 text-hnl-red mb-4" />
                  <h3 className="font-semibold text-lg mb-2">3 Months Duration</h3>
                  <p className="text-gray-400 text-sm">Full-time immersive experience with real projects</p>
                </div>
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <MapPin className="h-8 w-8 text-hnl-red mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Every Major City</h3>
                  <p className="text-gray-400 text-sm">Opportunities in Lahore, Karachi, Islamabad & more</p>
                </div>
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                  <Award className="h-8 w-8 text-hnl-red mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Certificate & Perks</h3>
                  <p className="text-gray-400 text-sm">Stipend, certificate, and potential full-time offer</p>
                </div>
              </div>

              {/* Internship Tracks */}
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 mb-8 border border-white/10">
                <h3 className="font-semibold text-lg mb-4 text-center">Available Tracks</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Marketing", "Sales", "Digital", "Engineering", "Commercial", "Project Management"].map((track) => (
                    <span key={track} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                      {track}
                    </span>
                  ))}
                </div>
              </div>

              {/* Internship Form */}
              <InternshipForm />
            </div>
          </div>
        </section>

        {/* Job Portals Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Also Find Us On</h2>
              <p className="text-gray-600 mb-8">
                We occasionally post specific roles on leading job portals. Follow us to stay updated.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/company/hnl-pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#006699] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://pk.indeed.com/cmp/HNL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2164f3] text-white px-6 py-3 rounded-lg hover:bg-[#1a4fc7] transition-colors"
                >
                  <Building2 className="h-5 w-5" />
                  Indeed
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://www.rozee.pk/company/hnl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00a650] text-white px-6 py-3 rounded-lg hover:bg-[#008c44] transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  Rozee.pk
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
