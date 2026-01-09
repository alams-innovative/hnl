"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import {
  ChevronDown,
  Radio,
  Zap,
  Cloud,
  Wifi,
  Battery,
  Server,
  Brain,
  Database,
  Network,
  Factory,
  Shield,
  Briefcase,
  FileText,
  BookOpen,
  Users,
  Mail,
  Target,
  Award,
  Leaf,
  Building2,
  Package,
  Sun,
  Cpu,
  Settings,
  HardDrive,
  BatteryCharging,
  ImageIcon,
  Play,
  Newspaper,
  Calendar,
  GraduationCap as GraduateCap,
  HelpCircle,
  BookText,
} from "lucide-react"

const services = [
  {
    division: "Telecom Infrastructure",
    href: "/telecom-infrastructure",
    icon: Radio,
    description: "Turnkey network deployment",
    services: [
      { name: "Fiber Rollout", href: "/telecom-infrastructure/fiber-rollout", icon: Wifi },
      { name: "Civil Works", href: "/telecom-infrastructure/civil-works", icon: Network },
      { name: "Site Integration", href: "/telecom-infrastructure/site-integration", icon: Server },
      { name: "Operation & Maintenance", href: "/telecom-infrastructure/operation-maintenance", icon: Radio },
      { name: "NOC Monitoring", href: "/telecom-infrastructure/noc-monitoring", icon: Network },
    ],
  },
  {
    division: "Energy & Power",
    href: "/energy-power",
    icon: Zap,
    description: "Reliable power solutions",
    services: [
      { name: "Diesel Generators", href: "/energy-power/diesel-generators", icon: Zap },
      { name: "Battery Storage (BESS)", href: "/energy-power/bess", icon: Battery },
      { name: "Hybrid Power Systems", href: "/energy-power/hybrid-power-systems", icon: Zap },
      { name: "EPC Solutions", href: "/energy-power/epc-project-solutions", icon: Server },
      { name: "Energy O&M", href: "/energy-power/energy-operations-maintenance", icon: Zap },
    ],
  },
  {
    division: "Software, Cloud & AI",
    href: "/software-cloud-ai",
    icon: Cloud,
    description: "Enterprise technology",
    services: [
      { name: "Cloud Migration", href: "/software-cloud-ai/cloud-migration", icon: Cloud },
      { name: "Enterprise IT Services", href: "/software-cloud-ai/enterprise-it-services", icon: Server },
      { name: "AI Agents", href: "/software-cloud-ai/ai-agents", icon: Brain },
      { name: "Big Data Analytics", href: "/software-cloud-ai/big-data-analytics", icon: Database },
      { name: "ICT Infrastructure", href: "/software-cloud-ai/ict-infrastructure", icon: Network },
    ],
  },
]

const industries = [
  { name: "Telecom", href: "/industries/telecom", icon: Radio },
  { name: "Energy", href: "/industries/energy", icon: Zap },
  { name: "Enterprise", href: "/industries/enterprise", icon: Briefcase },
  { name: "Government", href: "/industries/government", icon: Shield },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
]

const aboutSections = [
  {
    name: "Our Story & Mission",
    href: "/about/vision-mission",
    icon: Target,
    description: "Know about our journey & vision",
  },
  {
    name: "Leadership & Team",
    href: "/about/leadership",
    icon: Users,
    description: "Meet our expert team",
  },
  {
    name: "Company Profile",
    href: "/about/company",
    icon: Building2,
    description: "Our history and values",
  },
  {
    name: "Certifications & Partners",
    href: "/about/certifications",
    icon: Award,
    description: "ISO certifications & partnerships",
  },
  {
    name: "Sustainability",
    href: "/about/sustainability",
    icon: Leaf,
    description: "Our environmental commitment",
  },
  {
    name: "Careers",
    href: "/careers",
    icon: Briefcase,
    description: "Join our growing team",
  },
]

const products = {
  generators: [
    {
      name: "A Series 16.5-150 kVA",
      href: "/products/generators/a-series-small",
      description: "Powered by AGG engines",
      icon: Zap,
    },
    {
      name: "P Series 10-220 kVA",
      href: "/products/generators/p-series-small",
      description: "Powered by Perkins engines",
      icon: Zap,
    },
    {
      name: "A Series 165-388 kVA",
      href: "/products/generators/a-series-medium",
      description: "AGG mid-range power",
      icon: Zap,
    },
    {
      name: "P Series 250-1100 kVA",
      href: "/products/generators/p-series-medium",
      description: "Perkins mid-range power",
      icon: Zap,
    },
    {
      name: "P Series 825-1880 kVA",
      href: "/products/generators/p-series-large",
      description: "Perkins heavy-duty industrial",
      icon: Zap,
    },
  ],
  solar: [
    {
      name: "Residential Solar Systems",
      href: "/products/solar/residential",
      description: "Home solar solutions",
      icon: Sun,
    },
    {
      name: "Commercial Solar Systems",
      href: "/products/solar/commercial",
      description: "Business solar solutions",
      icon: Sun,
    },
    {
      name: "Industrial Solar Systems",
      href: "/products/solar/industrial",
      description: "Large-scale solar farms",
      icon: Sun,
    },
  ],
  specifications: [
    {
      name: "Technical Specs",
      href: "/products/specifications/technical",
      description: "Detailed technical information",
      icon: Settings,
    },
    {
      name: "EPA Certification",
      href: "/products/specifications/epa",
      description: "Emission standards & compliance",
      icon: BatteryCharging,
    },
    {
      name: "Performance Data",
      href: "/products/specifications/performance",
      description: "Noise, smoke, efficiency metrics",
      icon: Cpu,
    },
    {
      name: "Field Strength Overview",
      href: "/products/specifications/field-strength",
      description: "Nationwide capacity & resources",
      icon: HardDrive,
    },
  ],
}

const resources = [
  { name: "Blog & Articles", href: "/resources/blog", icon: BookOpen, description: "Latest insights & news" },
  {
    name: "Case Studies",
    href: "/case-studies",
    icon: FileText,
    description: "Real-world success stories",
  },
  { name: "FAQs", href: "/resources/faq", icon: HelpCircle, description: "Common questions answered" },
  {
    name: "Technical Guides",
    href: "/resources/technical-guides",
    icon: BookText,
    description: "Tutorials and documentation",
  },
  { name: "Glossary", href: "/resources/glossary", icon: GraduateCap, description: "Industry terminology" },
]

const media = [
  { name: "Project Gallery", href: "/media/project-gallery", icon: ImageIcon, description: "Installation photos" },
  { name: "Videos & Demos", href: "/media/videos-demos", icon: Play, description: "Product demonstrations" },
  { name: "Press & Features", href: "/media/press-features", icon: Newspaper, description: "Media coverage" },
  { name: "Events", href: "/media/events", icon: Calendar, description: "Industry events and exhibitions" },
]

export function MegaMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMediaOpen, setIsMediaOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout>()
  const industriesTimeoutRef = useRef<NodeJS.Timeout>()
  const aboutTimeoutRef = useRef<NodeJS.Timeout>()
  const productsTimeoutRef = useRef<NodeJS.Timeout>()
  const resourcesTimeoutRef = useRef<NodeJS.Timeout>()
  const mediaTimeoutRef = useRef<NodeJS.Timeout>()

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
    setIsServicesOpen(true)
    setIsIndustriesOpen(false)
    setIsAboutOpen(false)
    setIsProductsOpen(false)
    setIsResourcesOpen(false)
    setIsMediaOpen(false)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current)
    setIsIndustriesOpen(true)
    setIsServicesOpen(false)
    setIsAboutOpen(false)
    setIsProductsOpen(false)
    setIsResourcesOpen(false)
    setIsMediaOpen(false)
  }

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => setIsIndustriesOpen(false), 150)
  }

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
    setIsAboutOpen(true)
    setIsServicesOpen(false)
    setIsIndustriesOpen(false)
    setIsProductsOpen(false)
    setIsResourcesOpen(false)
    setIsMediaOpen(false)
  }

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setIsAboutOpen(false), 150)
  }

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current)
    setIsProductsOpen(true)
    setIsServicesOpen(false)
    setIsIndustriesOpen(false)
    setIsAboutOpen(false)
    setIsResourcesOpen(false)
    setIsMediaOpen(false)
  }

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 150)
  }

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current)
    setIsResourcesOpen(true)
    setIsServicesOpen(false)
    setIsIndustriesOpen(false)
    setIsAboutOpen(false)
    setIsProductsOpen(false)
    setIsMediaOpen(false)
  }

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => setIsResourcesOpen(false), 150)
  }

  const handleMediaMouseEnter = () => {
    if (mediaTimeoutRef.current) clearTimeout(mediaTimeoutRef.current)
    setIsMediaOpen(true)
    setIsServicesOpen(false)
    setIsIndustriesOpen(false)
    setIsAboutOpen(false)
    setIsProductsOpen(false)
    setIsResourcesOpen(false)
  }

  const handleMediaMouseLeave = () => {
    mediaTimeoutRef.current = setTimeout(() => setIsMediaOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current)
      if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current)
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
      if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current)
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current)
      if (mediaTimeoutRef.current) clearTimeout(mediaTimeoutRef.current)
    }
  }, [])

  return (
    <>
      {/* Products Menu */}
      <div className="relative" onMouseEnter={handleProductsMouseEnter} onMouseLeave={handleProductsMouseLeave}>
        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-all duration-200 group">
          <Package className="h-4 w-4 opacity-60 group-hover:opacity-100" />
          <span>Products</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {isProductsOpen && (
          <div className="absolute left-0 top-full mt-2 w-[820px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 p-8 animate-in fade-in-0 slide-in-from-top-3 duration-200 z-50">
            <div className="grid grid-cols-12 gap-8">
              {/* Generator Models */}
              <div className="col-span-4 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Generator Models</h3>
                </div>
                <ul className="space-y-2">
                  {products.generators.map((product) => {
                    const ProductIcon = product.icon
                    return (
                      <li key={product.name}>
                        <Link
                          href={product.href}
                          className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 flex-shrink-0">
                            <ProductIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-primary">{product.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{product.description}</div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Solar Energy */}
              <div className="col-span-3 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Solar Energy</h3>
                </div>
                <ul className="space-y-2">
                  {products.solar.map((product) => {
                    const ProductIcon = product.icon
                    return (
                      <li key={product.name}>
                        <Link
                          href={product.href}
                          className="flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 flex-shrink-0">
                            <ProductIcon className="h-4 w-4 mt-0.5 opacity-60 group-hover:opacity-100" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-primary">{product.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{product.description}</div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="col-span-1 flex justify-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              </div>

              {/* Specifications */}
              <div className="col-span-4 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Specifications</h3>
                </div>
                <ul className="space-y-2">
                  {products.specifications.map((spec) => {
                    const SpecIcon = spec.icon
                    return (
                      <li key={spec.name}>
                        <Link
                          href={spec.href}
                          className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 text-green-600 group-hover:from-green-600 group-hover:to-green-600/80 group-hover:text-white transition-all duration-300 flex-shrink-0">
                            <SpecIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-primary">{spec.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{spec.description}</div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Services Menu */}
      <div className="relative" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave}>
        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-all duration-200 group">
          <span>Services</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {isServicesOpen && (
          <div className="absolute left-0 top-full mt-2 w-[780px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 p-8 animate-in fade-in-0 slide-in-from-top-3 duration-200 z-50">
            <div className="grid grid-cols-3 gap-8">
              {services.map((division) => {
                const DivisionIcon = division.icon
                return (
                  <div key={division.division} className="space-y-4">
                    <Link href={division.href} className="group block" onClick={() => setIsServicesOpen(false)}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                          <DivisionIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {division.division}
                          </div>
                          <div className="text-xs text-gray-500">{division.description}</div>
                        </div>
                      </div>
                    </Link>
                    <ul className="space-y-2">
                      {division.services.map((service) => {
                        const ServiceIcon = service.icon
                        return (
                          <li key={service.name}>
                            <Link
                              href={service.href}
                              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5 group"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <ServiceIcon className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                              <span>{service.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Industries Menu */}
      <div className="relative" onMouseEnter={handleIndustriesMouseEnter} onMouseLeave={handleIndustriesMouseLeave}>
        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-all duration-200 group">
          <span>Industries</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {isIndustriesOpen && (
          <div className="absolute left-0 top-full mt-2 w-[320px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 p-6 animate-in fade-in-0 slide-in-from-top-3 duration-200 z-50">
            <ul className="space-y-2">
              {industries.map((industry) => {
                const IndustryIcon = industry.icon
                return (
                  <li key={industry.name}>
                    <Link
                      href={industry.href}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <IndustryIcon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{industry.name}</span>
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2 border-t border-gray-200">
                <Link
                  href="/industries"
                  className="flex items-center justify-center text-sm text-primary hover:text-primary/80 font-medium p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  View All Industries →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Resources Menu */}
      <div className="relative" onMouseEnter={handleResourcesMouseEnter} onMouseLeave={handleResourcesMouseLeave}>
        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-all duration-200 group">
          <BookOpen className="h-4 w-4 opacity-60 group-hover:opacity-100" />
          <span>Resources</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {isResourcesOpen && (
          <div className="absolute left-0 top-full mt-2 w-[320px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 p-6 animate-in fade-in-0 slide-in-from-top-3 duration-200 z-50">
            <ul className="space-y-2">
              {resources.map((resource) => {
                const ResourceIcon = resource.icon
                return (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <ResourceIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-primary">{resource.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{resource.description}</div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Media Menu */}
      <div className="relative" onMouseEnter={handleMediaMouseEnter} onMouseLeave={handleMediaMouseLeave}>
        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-all duration-200 group">
          <ImageIcon className="h-4 w-4 opacity-60 group-hover:opacity-100" />
          <span>Media</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {isMediaOpen && (
          <div className="absolute left-0 top-full mt-2 w-[320px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 p-6 animate-in fade-in-0 slide-in-from-top-3 duration-200 z-50">
            <ul className="space-y-2">
              {media.map((mediaItem) => {
                const MediaIcon = mediaItem.icon
                return (
                  <li key={mediaItem.name}>
                    <Link
                      href={mediaItem.href}
                      className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                      onClick={() => setIsMediaOpen(false)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 text-green-600 group-hover:from-green-600 group-hover:to-green-600/80 group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <MediaIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-primary">{mediaItem.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{mediaItem.description}</div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      {/* About Menu */}
      <div className="relative" onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-all duration-200 group">
          <Users className="h-4 w-4 opacity-60 group-hover:opacity-100" />
          <span>About</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {isAboutOpen && (
          <div className="absolute right-0 top-full mt-2 w-[340px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200/50 p-6 animate-in fade-in-0 slide-in-from-top-3 duration-200 z-50">
            <ul className="space-y-2">
              {aboutSections.map((section) => {
                const SectionIcon = section.icon
                return (
                  <li key={section.name}>
                    <Link
                      href={section.href}
                      className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/5 group"
                      onClick={() => setIsAboutOpen(false)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <SectionIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                          {section.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{section.description}</div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Contact link with icon */}
      <Link
        href="/contact"
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors group"
      >
        <Mail className="h-4 w-4 opacity-60 group-hover:opacity-100" />
        <span>Contact</span>
      </Link>
    </>
  )
}
