import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/breadcrumbs"
import { generateBreadcrumbSchema } from "@/lib/seo"
import {
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Quote,
  ArrowRight,
  MapPin,
  Clock,
  Building2,
  Layers,
} from "lucide-react"

/* ===========================================
   REUSABLE COMPONENTS FOR CASE STUDY
=========================================== */

// Section Heading with proper spacing
function SectionHeading({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <div className="mt-20 mb-10 pt-10 border-t border-gray-200 first:border-t-0 first:pt-0 first:mt-0">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
        {Icon && <Icon className="w-8 h-8 text-red-600" />}
        {children}
      </h2>
    </div>
  )
}

// Paragraph with generous spacing
function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{children}</p>
}

// Important Quote block
function ImportantQuote({ quote, author, role }: { quote: string; author: string; role?: string }) {
  return (
    <blockquote className="my-16 relative">
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600 rounded-full" />
      <div className="pl-8 pr-4 py-6 bg-gray-50 rounded-r-xl">
        <Quote className="w-10 h-10 text-red-600/20 mb-4" />
        <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">"{quote}"</p>
        <div className="mt-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{author}</div>
            {role && <div className="text-sm text-gray-500">{role}</div>}
          </div>
        </div>
      </div>
    </blockquote>
  )
}

// Metric Card
function MetricCard({
  metric,
  value,
  description,
  icon: Icon,
}: {
  metric: string
  value: string
  description: string
  icon?: any
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{metric}</span>
        {Icon && <Icon className="w-6 h-6 text-red-600" />}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3">{value}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Execution Step
function ExecutionStep({ number, title, description }: { number: number; title: string; description?: string }) {
  return (
    <div className="flex gap-6 mb-8">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="flex-1 pt-2">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
      </div>
    </div>
  )
}

// Service Chip
function ServiceChip({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium hover:bg-red-100 transition-colors"
    >
      {name}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}

// Info Badge
function InfoBadge({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <Icon className="w-5 h-5 text-red-500" />
      <span className="text-gray-400">{label}:</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  )
}

/* ===========================================
   CASE STUDY DATA
=========================================== */

const caseStudiesData: Record<string, any> = {
  "jazz-fiber-rollout-lahore": {
    title: "450km Fiber Rollout for Jazz in Lahore",
    subtitle: "How HNL delivered Pakistan's fastest urban FTTH deployment",
    client: "Jazz (CMPak)",
    industry: "Telecom",
    location: "Lahore, Punjab",
    duration: "8 months",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",

    // The Challenge
    challenge: {
      overview:
        "Jazz, Pakistan's leading telecom operator, faced a critical growth challenge. Their existing copper network couldn't meet the surging demand for high-speed broadband in Lahore's rapidly expanding housing societies.",
      painPoints: [
        "Legacy copper infrastructure limiting speeds to 20 Mbps",
        "45,000 homes in 12 societies without fiber connectivity",
        "Competitors gaining market share with faster rollouts",
        "Complex coordination required with multiple housing authorities",
        "Underground cabling challenges in congested urban areas",
      ],
      businessImpact:
        "Jazz was losing an estimated PKR 50M monthly in potential revenue to competitors who had already deployed fiber in adjacent areas.",
    },

    // The Opportunity
    opportunity: {
      overview:
        "With the right partner and execution strategy, Jazz could not only catch up but leapfrog competitors by deploying a future-proof FTTH network capable of delivering gigabit speeds.",
      scope:
        "450km of fiber optic cable across 12 housing societies, connecting 45,000 homes with next-generation broadband infrastructure.",
    },

    // The Solution
    solution: {
      overview:
        "HNL proposed a comprehensive turnkey solution that would handle everything from route surveys to final testing, allowing Jazz to focus on customer acquisition while we handled the infrastructure.",
      approach: [
        {
          title: "Parallel Workstream Execution",
          description:
            "Instead of sequential deployment, we established 6 parallel teams working simultaneously across different societies, cutting the timeline by 60%.",
        },
        {
          title: "Pre-Fabricated Duct Systems",
          description:
            "We used pre-fabricated HDPE duct modules that reduced installation time from 3 days to 8 hours per kilometer.",
        },
        {
          title: "Automated Splicing & Testing",
          description:
            "Deployed fusion splicers with automated alignment and integrated OTDR testing, ensuring consistent quality across 15,000+ splice points.",
        },
        {
          title: "Stakeholder Management Hub",
          description:
            "Created a centralized coordination center to manage approvals, schedules, and communications with all 12 housing societies.",
        },
      ],
      techSpecs: {
        fiberType: "G.652.D Single Mode Fiber",
        cableCapacity: "96-core trunk, 12-core distribution",
        spliceStandard: "< 0.05 dB average loss",
        testingProtocol: "100% OTDR bi-directional testing",
      },
    },

    // Execution Timeline
    execution: [
      {
        phase: "Phase 1: Planning & Survey",
        duration: "Month 1",
        activities: [
          "Route surveys for all 12 societies",
          "Fiber network design and optimization",
          "Regulatory approvals and permits",
          "Housing society coordination setup",
        ],
      },
      {
        phase: "Phase 2: Civil Works",
        duration: "Months 2-4",
        activities: [
          "Underground ducting installation",
          "Manhole and handhole construction",
          "Road crossing bore pits",
          "Fiber cable laying",
        ],
      },
      {
        phase: "Phase 3: Fiber Installation",
        duration: "Months 4-6",
        activities: [
          "Cable pulling and splicing",
          "Distribution cabinet installation",
          "Drop cable preparation",
          "OTDR testing and documentation",
        ],
      },
      {
        phase: "Phase 4: Integration & Handover",
        duration: "Months 7-8",
        activities: [
          "Core network integration",
          "End-to-end testing",
          "Documentation and as-built drawings",
          "Training and handover",
        ],
      },
    ],

    // The Outcome
    results: [
      {
        metric: "Network Deployed",
        value: "450km",
        description: "FTTH fiber network across Lahore",
        icon: "Layers",
      },
      {
        metric: "Homes Connected",
        value: "45,000",
        description: "Residential connections enabled",
        icon: "Building2",
      },
      {
        metric: "Time Saved",
        value: "2 months",
        description: "Completed ahead of schedule",
        icon: "Clock",
      },
      {
        metric: "Quality Score",
        value: "99.8%",
        description: "Splice loss within specification",
        icon: "Target",
      },
    ],

    businessOutcome: {
      revenue: "PKR 180M additional annual revenue from new subscriptions",
      marketShare: "Jazz became #1 broadband provider in deployed areas",
      customerSatisfaction: "NPS score of 72 for fiber customers (vs 45 for DSL)",
    },

    // Testimonial
    testimonial: {
      quote:
        "HNL delivered our most complex urban fiber rollout on time and within budget. Their coordination with multiple stakeholders was exceptional. We've already contracted them for Phase 2 covering 8 more societies.",
      author: "Asad Mehmood",
      role: "Network Planning Manager, Jazz",
    },

    // Services Used
    servicesUsed: [
      { name: "Fiber Rollout", href: "/telecom-infrastructure/fiber-rollout" },
      { name: "Civil Works", href: "/telecom-infrastructure/civil-works" },
      { name: "Site Integration", href: "/telecom-infrastructure/site-integration" },
    ],

    // Key Learnings
    keyLearnings: [
      "Parallel execution can reduce timelines by 50-60% if properly coordinated",
      "Pre-fabricated systems significantly improve quality consistency",
      "Dedicated stakeholder management is essential for multi-society projects",
      "Automated testing ensures quality at scale",
    ],

    // Related Case Studies
    relatedCaseStudies: [
      { slug: "ptcl-noc-monitoring", title: "NOC Monitoring for PTCL" },
      { slug: "telenor-bess-installation", title: "BESS for Telenor Sites" },
    ],

    // Gallery Images (stock photos)
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
        alt: "Fiber optic cable installation",
        caption: "Fiber cable installation in progress",
      },
      {
        src: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80",
        alt: "Underground cable ducting",
        caption: "Underground ducting work",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
        alt: "Network testing equipment",
        caption: "OTDR testing and quality assurance",
      },
    ],
  },

  // Placeholder data for other case studies (will be expanded later)
  "telenor-bess-installation": {
    title: "BESS Installation for 200 Telenor Tower Sites",
    subtitle: "Transforming telecom tower economics with hybrid power across Punjab & KPK",
    client: "Telenor Pakistan",
    industry: "Telecom",
    location: "Punjab & Khyber Pakhtunkhwa",
    duration: "12 months",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",

    challenge: {
      overview:
        "Telenor Pakistan operates over 10,000 BTS sites nationwide, with 200 critical sites in Punjab and KPK facing severe power challenges. Grid availability averaged just 12-14 hours daily, forcing heavy reliance on diesel generators that were draining operational budgets and creating logistical nightmares.",
      painPoints: [
        "8-12 hours of daily grid outages requiring constant diesel backup",
        "PKR 180M annual diesel expenditure across 200 sites",
        "Diesel theft incidents accounting for 15% fuel loss",
        "Remote sites with difficult fuel delivery logistics",
        "Environmental compliance pressure from corporate sustainability goals",
        "Generator maintenance consuming 30% of site OPEX",
        "Noise pollution complaints from nearby communities",
      ],
      businessImpact:
        "Rising operational costs were eroding site profitability by 25% year-over-year. Sites in remote areas of KPK were particularly affected, with some locations spending PKR 150,000/month on diesel alone.",
    },

    opportunity: {
      overview:
        "Modern Battery Energy Storage Systems (BESS) combined with solar had matured to the point where total cost of ownership was now lower than diesel-dependent operations. Telenor saw an opportunity to not only reduce costs but also improve network reliability and meet sustainability targets.",
      scope:
        "200 BTS sites across Punjab and KPK requiring custom hybrid power solutions. Each site would be assessed individually to determine optimal solar + BESS + diesel configuration based on load profiles, grid availability, and local conditions.",
    },

    solution: {
      overview:
        "HNL designed a comprehensive hybrid power transformation program. Rather than one-size-fits-all, we created site-specific configurations that maximized ROI while ensuring 99.9% uptime. The solution integrated lithium iron phosphate (LiFePO4) batteries, mono-crystalline solar panels, and intelligent energy management systems.",
      approach: [
        {
          title: "Granular Site Assessment",
          description:
            "Our team conducted 2-week load profiling at each site, measuring consumption patterns every 15 minutes. This data drove precise BESS sizing - avoiding both over-investment and under-capacity.",
        },
        {
          title: "Custom BESS Sizing Algorithm",
          description:
            "We developed a proprietary algorithm that considered grid patterns, solar irradiance data, and seasonal load variations to determine optimal battery capacity (ranging from 10kWh to 50kWh per site).",
        },
        {
          title: "Solar Integration Strategy",
          description:
            "Each site received 5-15kW solar arrays based on available roof/ground space. Bi-facial panels were used where ground reflection could boost yields by 10-15%.",
        },
        {
          title: "Intelligent Energy Management",
          description:
            "Cloud-connected EMS at each site optimizes power source selection in real-time, predicts grid outages using ML, and schedules battery charging during off-peak hours.",
        },
        {
          title: "Remote Monitoring & Predictive Maintenance",
          description:
            "24/7 monitoring from HNL's NOC with automated alerts for battery health, solar degradation, and anomaly detection. Predictive algorithms forecast maintenance needs 2-4 weeks in advance.",
        },
        {
          title: "Diesel Backup Optimization",
          description:
            "Existing diesel generators retained as tertiary backup, but runtime reduced from 8+ hours to under 1 hour daily on average. Auto-start only when battery SOC drops below 20%.",
        },
      ],
      techSpecs: {
        batteryType: "48V Lithium Iron Phosphate (LiFePO4)",
        batteryCapacity: "10-50 kWh per site (total 4.8 MWh)",
        solarCapacity: "5-15 kW per site (total 1.8 MW)",
        cycleLife: "6,000+ cycles at 80% DoD",
        monitoring: "Cloud-based EMS with 4G/LTE connectivity",
        warranty: "10 years battery, 25 years solar panels",
        efficiency: "Round-trip efficiency >95%",
      },
    },

    execution: [
      {
        phase: "Phase 1: Assessment & Design",
        duration: "Months 1-3",
        activities: [
          "Detailed site surveys for all 200 locations",
          "2-week load profiling per site",
          "Solar resource assessment using satellite data",
          "Custom system design and BOQ preparation",
          "Procurement and logistics planning",
          "Regulatory approvals where required",
        ],
      },
      {
        phase: "Phase 2: Pilot Deployment",
        duration: "Month 4",
        activities: [
          "Installation at 10 pilot sites across different regions",
          "System integration and commissioning",
          "Performance baseline establishment",
          "Fine-tuning of EMS algorithms",
          "Training of local O&M teams",
        ],
      },
      {
        phase: "Phase 3: Mass Rollout",
        duration: "Months 5-10",
        activities: [
          "Parallel deployment across 6 regional teams",
          "35-40 sites completed per month",
          "Quality assurance at each installation",
          "Progressive handover to Telenor operations",
          "Real-time monitoring activation",
        ],
      },
      {
        phase: "Phase 4: Optimization & Handover",
        duration: "Months 11-12",
        activities: [
          "Performance analysis vs design targets",
          "EMS algorithm optimization based on real data",
          "Complete documentation and as-built drawings",
          "Comprehensive training program",
          "Warranty activation and SLA commencement",
        ],
      },
    ],

    results: [
      {
        metric: "Diesel Reduction",
        value: "65%",
        description: "Annual diesel consumption reduced from 180M to 63M liters equivalent",
        icon: "TrendingUp",
      },
      {
        metric: "Cost Savings",
        value: "117M",
        description: "PKR annual operational cost reduction",
        icon: "Target",
      },
      {
        metric: "Sites Deployed",
        value: "200",
        description: "BTS sites upgraded with hybrid power",
        icon: "Building2",
      },
      {
        metric: "Network Uptime",
        value: "99.9%",
        description: "Improved from 97.2% pre-deployment",
        icon: "CheckCircle2",
      },
      {
        metric: "Carbon Offset",
        value: "2,400",
        description: "Tons CO2 reduced annually",
        icon: "Layers",
      },
      {
        metric: "Payback Period",
        value: "2.1 yrs",
        description: "Faster than projected 2.5 years",
        icon: "Clock",
      },
    ],

    businessOutcome: {
      revenue: "PKR 117M annual savings with 2.1 year payback period",
      marketShare: "Model adopted for Telenor's network expansion strategy across remaining 800+ sites",
      customerSatisfaction: "Zero network downtime complaints from hybrid-powered sites vs 15/month average before",
    },

    testimonial: {
      quote:
        "The hybrid power solution has fundamentally transformed our site economics. What impressed us most was HNL's data-driven approach - every site got exactly what it needed, no more, no less. We've already contracted them for Phase 2 covering 300 additional sites in Sindh and Balochistan.",
      author: "Faisal Khan",
      role: "Head of Network Operations, Telenor Pakistan",
    },

    servicesUsed: [
      { name: "BESS Solutions", href: "/energy-power/bess" },
      { name: "Hybrid Power Systems", href: "/energy-power/hybrid-power-systems" },
      { name: "Energy O&M", href: "/energy-power/energy-operations-maintenance" },
    ],

    keyLearnings: [
      "Site-specific sizing based on actual load data maximizes ROI vs standardized solutions",
      "Pilot deployments are essential to fine-tune EMS algorithms before mass rollout",
      "LiFePO4 chemistry is ideal for Pakistan's climate with superior thermal stability",
      "Remote monitoring with predictive maintenance reduces truck rolls by 60%",
      "Retaining diesel as backup provides insurance against edge cases",
    ],

    relatedCaseStudies: [
      { slug: "k-electric-hybrid-power", title: "K-Electric Hybrid Power" },
      { slug: "jazz-fiber-rollout-lahore", title: "Jazz Fiber Rollout" },
    ],

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
        alt: "Solar panels installation at telecom site",
        caption: "Solar array installation at a Punjab BTS site",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        alt: "Battery storage system",
        caption: "48V LiFePO4 battery bank in weather-rated enclosure",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
        alt: "Energy monitoring dashboard",
        caption: "Real-time energy management dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
        alt: "Telecom tower with solar",
        caption: "Completed hybrid power installation",
      },
    ],
  },

  "k-electric-hybrid-power": {
    title: "Hybrid Power System for K-Electric Grid Substations",
    subtitle: "Ensuring grid stability with intelligent power backup for Karachi's critical infrastructure",
    client: "K-Electric",
    industry: "Energy & Utilities",
    location: "Karachi, Sindh",
    duration: "18 months",
    year: "2022-2023",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",

    challenge: {
      overview:
        "K-Electric, Karachi's sole electricity provider serving 25 million people, faced a critical challenge at their 132kV and 66kV grid substations. During load shedding and grid instabilities, auxiliary systems at these substations would fail, causing cascading outages affecting thousands of industrial and residential customers.",
      painPoints: [
        "15-20 critical substations experiencing auxiliary power failures monthly",
        "Aging diesel backup systems with 40% failure rate during emergencies",
        "Average 45-minute delay in manual generator startup during outages",
        "PKR 35M monthly in industrial customer penalty claims",
        "High diesel and maintenance costs for 35-year-old generator fleet",
        "No visibility into substation power status until customer complaints",
        "Environmental compliance pressure from SEPA regulations",
      ],
      businessImpact:
        "Each substation failure triggered cascading outages affecting 50,000-200,000 customers. Industrial customers were claiming PKR 35M monthly in SLA penalties, and K-Electric's reputation was suffering with a Net Promoter Score of -12.",
    },

    opportunity: {
      overview:
        "Modern hybrid power systems could provide instantaneous backup during grid instabilities while dramatically reducing lifecycle costs. The opportunity extended beyond cost savings to improving K-Electric's service reliability metrics and customer satisfaction.",
      scope:
        "15 critical 132kV and 66kV substations across Karachi's industrial and high-density residential areas. Each substation required 200-500kW of backup capacity for auxiliary systems including SCADA, protection relays, cooling systems, and lighting.",
    },

    solution: {
      overview:
        "HNL engineered a comprehensive hybrid backup solution combining rooftop solar, industrial-grade BESS, and modernized diesel generators with seamless transfer switching. The system provides instantaneous switchover (<20ms) ensuring zero disruption to critical substation equipment.",
      approach: [
        {
          title: "Critical Load Analysis",
          description:
            "Detailed assessment of each substation's auxiliary loads, categorizing into Tier-1 (SCADA, protection - no interruption allowed), Tier-2 (cooling, essential lighting - 100ms tolerance), and Tier-3 (general loads - 1s tolerance).",
        },
        {
          title: "Hybrid Architecture Design",
          description:
            "Three-tier power architecture: Grid primary + BESS for instant backup + Solar for daytime charging + Diesel for extended outages. UPS integration for Tier-1 loads with 10ms transfer.",
        },
        {
          title: "Industrial BESS Selection",
          description:
            "Selected high-power density lithium batteries rated for 10C discharge to handle substation inrush currents. Total 2.4 MWh storage capacity across 15 sites.",
        },
        {
          title: "Smart Energy Management",
          description:
            "Custom EMS integrating with K-Electric's existing SCADA to predict outages and pre-charge batteries. AI-based algorithms optimize solar utilization and battery cycling.",
        },
        {
          title: "Diesel Modernization",
          description:
            "Replaced aging generators with modern Cummins units featuring auto-start, load-sharing, and remote monitoring. Diesel now serves as fourth-tier backup only.",
        },
        {
          title: "Centralized Monitoring",
          description:
            "All 15 substations connected to K-Electric's central control room with real-time visibility into power status, battery health, solar generation, and predictive alerts.",
        },
      ],
      techSpecs: {
        batteryCapacity: "160 kWh average per site (2.4 MWh total)",
        batteryType: "Industrial LiFePO4, 10C discharge rated",
        solarCapacity: "500 kW total across 15 sites",
        transferTime: "<20ms to battery, <10ms for UPS-protected loads",
        dieselBackup: "400 kVA per site, 8-hour runtime",
        monitoring: "Integrated with K-Electric SCADA",
        designLife: "15 years battery, 25 years system",
      },
    },

    execution: [
      {
        phase: "Phase 1: Engineering & Procurement",
        duration: "Months 1-6",
        activities: [
          "Detailed site surveys and load studies",
          "Protection coordination studies",
          "System architecture finalization",
          "Equipment procurement (8-week lead time for batteries)",
          "Factory acceptance testing",
          "Civil and structural assessments",
        ],
      },
      {
        phase: "Phase 2: Pilot Installation",
        duration: "Months 7-9",
        activities: [
          "Installation at 3 pilot substations",
          "System integration with existing switchgear",
          "SCADA integration and testing",
          "Commissioning and performance validation",
          "Operator training at pilot sites",
        ],
      },
      {
        phase: "Phase 3: Full Deployment",
        duration: "Months 10-16",
        activities: [
          "Phased rollout to remaining 12 substations",
          "Night-time installations to minimize disruption",
          "Integration testing at each site",
          "Progressive system handover",
          "Documentation and as-built drawings",
        ],
      },
      {
        phase: "Phase 4: Optimization & Support",
        duration: "Months 17-18",
        activities: [
          "System performance optimization",
          "AI model training on actual outage patterns",
          "Comprehensive operator training program",
          "Warranty activation and SLA commencement",
          "Handover to K-Electric O&M team",
        ],
      },
    ],

    results: [
      {
        metric: "Annual Savings",
        value: "120M",
        description: "PKR reduction in operational and penalty costs",
        icon: "TrendingUp",
      },
      {
        metric: "Substations",
        value: "15",
        description: "Critical grid substations upgraded",
        icon: "Building2",
      },
      {
        metric: "Transfer Time",
        value: "<20ms",
        description: "Instant backup activation",
        icon: "Clock",
      },
      {
        metric: "Penalty Reduction",
        value: "95%",
        description: "SLA penalty claims eliminated",
        icon: "Target",
      },
      {
        metric: "Uptime",
        value: "99.99%",
        description: "Auxiliary system availability",
        icon: "CheckCircle2",
      },
      {
        metric: "Diesel Reduction",
        value: "75%",
        description: "Generator runtime reduced",
        icon: "Layers",
      },
    ],

    businessOutcome: {
      revenue: "PKR 120M annual savings through reduced diesel, maintenance, and eliminated SLA penalties",
      marketShare: "K-Electric NPS improved from -12 to +18 in covered areas within 6 months",
      customerSatisfaction: "Industrial customer retention rate improved from 78% to 94%",
    },

    testimonial: {
      quote:
        "The hybrid power solution delivered by HNL has transformed our substation reliability. We went from firefighting mode to proactive operations. The instantaneous switchover means our customers don't even know when the grid hiccups anymore. This project has become a model for our future infrastructure investments.",
      author: "Ali Hassan",
      role: "Chief Operating Officer, K-Electric",
    },

    servicesUsed: [
      { name: "Hybrid Power Systems", href: "/energy-power/hybrid-power-systems" },
      { name: "BESS Solutions", href: "/energy-power/bess" },
      { name: "Diesel Generators", href: "/energy-power/diesel-generators" },
      { name: "EPC Solutions", href: "/energy-power/epc-project-solutions" },
    ],

    keyLearnings: [
      "Critical infrastructure requires <20ms transfer times - standard UPS is insufficient",
      "Integration with existing SCADA maximizes operational value",
      "Night-time installation scheduling essential for utility projects",
      "Predictive AI can pre-position systems before outages occur",
      "Industrial battery ratings (C-rate) matter more than capacity alone",
      "Stakeholder alignment across utility operations teams is critical",
    ],

    relatedCaseStudies: [
      { slug: "telenor-bess-installation", title: "Telenor BESS Installation" },
      { slug: "lucky-cement-data-analytics", title: "Lucky Cement Analytics" },
    ],

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
        alt: "Electrical substation",
        caption: "132kV grid substation in Karachi",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        alt: "Industrial battery system",
        caption: "Industrial-grade BESS installation",
      },
      {
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
        alt: "Solar panels on rooftop",
        caption: "Rooftop solar array at substation",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
        alt: "Control room monitoring",
        caption: "Centralized monitoring integration",
      },
    ],
  },

  "hbl-cloud-migration": {
    title: "Cloud Migration for HBL Core Banking Applications",
    subtitle: "Zero-downtime migration of mission-critical banking systems serving 10 million customers",
    client: "Habib Bank Limited (HBL)",
    industry: "Banking & Financial Services",
    location: "Karachi, Pakistan (with nationwide impact)",
    duration: "14 months",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",

    challenge: {
      overview:
        "HBL, Pakistan's largest private bank with 10 million+ customers and 1,700+ branches, was running critical banking applications on aging on-premise infrastructure. During peak periods like salary disbursements and Eid, systems would slow dramatically, affecting customer experience and processing capacity.",
      painPoints: [
        "20-year-old data center infrastructure reaching end-of-life",
        "4x traffic spikes during peak periods causing 40% slower response times",
        "PKR 200M annual infrastructure maintenance and upgrade costs",
        "6-month lead time to provision new capacity for business initiatives",
        "Disaster recovery site 8 hours behind primary (RPO)",
        "State Bank of Pakistan regulatory pressure for improved resilience",
        "Inability to support digital banking growth ambitions",
      ],
      businessImpact:
        "Peak period slowdowns were causing PKR 15M daily in failed transactions. Customer complaints increased 3x during salary weeks, and HBL was losing digital banking market share to more agile competitors.",
    },

    opportunity: {
      overview:
        "A well-executed hybrid cloud migration could deliver elastic scalability, sub-second disaster recovery, and dramatically reduced provisioning times - all while meeting stringent banking regulations and security requirements.",
      scope:
        "Migration of 47 critical banking applications including core banking, internet banking, mobile banking, ATM switching, and payment gateway systems. Total data migration of 85TB with zero tolerance for data loss or extended downtime.",
    },

    solution: {
      overview:
        "HNL architected a hybrid cloud solution combining Microsoft Azure for elastic compute with HBL's enhanced private data center for sensitive core banking. The migration followed a 'strangler fig' pattern, progressively moving workloads while maintaining full service availability.",
      approach: [
        {
          title: "Application Portfolio Assessment",
          description:
            "Deep analysis of all 47 applications using the 6R framework (Rehost, Replatform, Refactor, Repurchase, Retire, Retain). Identified 31 for cloud migration, 12 for modernization, and 4 for retirement.",
        },
        {
          title: "Hybrid Architecture Design",
          description:
            "Designed a hybrid architecture with Azure for customer-facing applications (internet/mobile banking) and enhanced private cloud for core banking ledgers. Secure ExpressRoute connectivity between environments.",
        },
        {
          title: "Zero-Downtime Migration Strategy",
          description:
            "Implemented blue-green deployment with real-time data synchronization. Traffic gradually shifted using weighted routing, allowing instant rollback if issues detected.",
        },
        {
          title: "Security & Compliance Framework",
          description:
            "Built comprehensive security controls exceeding SBP regulations: encryption at rest and in transit, SIEM integration, DDoS protection, and SOC 2 Type II compliance.",
        },
        {
          title: "Performance Optimization",
          description:
            "Re-architected database tier with Azure SQL Managed Instance and implemented Redis caching, reducing average response time from 800ms to 180ms.",
        },
        {
          title: "Disaster Recovery Transformation",
          description:
            "Implemented active-active DR across two Azure regions plus on-premise, reducing RPO from 8 hours to <1 minute and RTO from 4 hours to 15 minutes.",
        },
      ],
      techSpecs: {
        cloudPlatform: "Microsoft Azure (UAE North & South) + Private DC",
        compute: "Azure VMs, AKS, App Services",
        database: "Azure SQL MI, Cosmos DB, PostgreSQL",
        storage: "Azure Blob, Managed Disks (85TB migrated)",
        networking: "ExpressRoute 10Gbps, Azure Front Door",
        security: "Azure Sentinel, WAF, Private Endpoints",
        compliance: "PCI-DSS, SOC 2 Type II, SBP Guidelines",
      },
    },

    execution: [
      {
        phase: "Phase 1: Discovery & Planning",
        duration: "Months 1-2",
        activities: [
          "Application dependency mapping",
          "Data classification and sensitivity assessment",
          "Regulatory compliance review with SBP",
          "Migration wave planning",
          "Risk assessment and mitigation strategies",
          "Team training on Azure services",
        ],
      },
      {
        phase: "Phase 2: Foundation Setup",
        duration: "Months 3-4",
        activities: [
          "Azure landing zone deployment",
          "ExpressRoute connectivity establishment",
          "Security controls implementation",
          "CI/CD pipeline setup",
          "Monitoring and alerting configuration",
          "DR environment provisioning",
        ],
      },
      {
        phase: "Phase 3: Wave 1 Migration (Non-Critical)",
        duration: "Months 5-7",
        activities: [
          "Development and test environment migration",
          "Internal portals and reporting systems",
          "Validation and performance baseline",
          "Process refinement for production waves",
        ],
      },
      {
        phase: "Phase 4: Wave 2 Migration (Customer-Facing)",
        duration: "Months 8-11",
        activities: [
          "Internet banking platform migration",
          "Mobile banking backend migration",
          "Payment gateway migration",
          "ATM switching modernization",
          "Blue-green cutover with rollback capability",
        ],
      },
      {
        phase: "Phase 5: Optimization & Handover",
        duration: "Months 12-14",
        activities: [
          "Performance optimization and cost right-sizing",
          "FinOps implementation for cloud cost management",
          "Comprehensive documentation",
          "Operations team training and certification",
          "Warranty period and hypercare support",
        ],
      },
    ],

    results: [
      {
        metric: "Uptime Achieved",
        value: "99.99%",
        description: "Zero unplanned downtime during or after migration",
        icon: "Target",
      },
      {
        metric: "Performance Gain",
        value: "4.4x",
        description: "Response time improved from 800ms to 180ms",
        icon: "TrendingUp",
      },
      {
        metric: "Cost Reduction",
        value: "30%",
        description: "Annual infrastructure cost savings",
        icon: "Layers",
      },
      {
        metric: "Provisioning Time",
        value: "95%",
        description: "Reduced from 6 months to 2 days",
        icon: "Clock",
      },
      {
        metric: "Data Migrated",
        value: "85TB",
        description: "Zero data loss across all applications",
        icon: "Building2",
      },
      {
        metric: "DR Improvement",
        value: "99.8%",
        description: "RPO reduced from 8 hours to <1 minute",
        icon: "CheckCircle2",
      },
    ],

    businessOutcome: {
      revenue: "30% infrastructure cost reduction (PKR 60M annual savings) with 4.4x performance improvement",
      marketShare: "HBL's digital banking market share grew from 18% to 24% within 6 months post-migration",
      customerSatisfaction: "Mobile app store rating improved from 3.2 to 4.5 stars",
    },

    testimonial: {
      quote:
        "This was the most complex IT transformation in HBL's history, and HNL delivered flawlessly. Zero downtime during migration of systems serving 10 million customers - that's extraordinary. The performance improvements have directly translated to customer satisfaction and competitive advantage.",
      author: "Kamran Ali",
      role: "Chief Technology Officer, Habib Bank Limited",
    },

    servicesUsed: [
      { name: "Cloud Migration", href: "/software-cloud-ai/cloud-migration" },
      { name: "ICT Infrastructure", href: "/software-cloud-ai/ict-infrastructure" },
      { name: "Big Data Analytics", href: "/software-cloud-ai/big-data-analytics" },
    ],

    keyLearnings: [
      "Blue-green deployment is essential for zero-downtime banking migrations",
      "Early engagement with regulators (SBP) prevents compliance surprises",
      "Hybrid architecture balances innovation with data sovereignty requirements",
      "Investment in FinOps from day one prevents cloud cost overruns",
      "Change management and training are as important as technical execution",
      "Real-time data sync enables confident cutover with instant rollback",
    ],

    relatedCaseStudies: [
      { slug: "lucky-cement-data-analytics", title: "Lucky Cement Analytics" },
      { slug: "ptcl-noc-monitoring", title: "PTCL NOC Monitoring" },
    ],

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        alt: "Data center servers",
        caption: "Hybrid cloud architecture deployment",
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        alt: "Network operations center",
        caption: "Migration command center operations",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
        alt: "Cloud monitoring dashboard",
        caption: "Azure monitoring and performance dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        alt: "Banking application",
        caption: "Modernized internet banking platform",
      },
    ],
  },

  "ptcl-noc-monitoring": {
    title: "24/7 NOC Monitoring for PTCL National Fiber Backbone",
    subtitle: "AI-powered network operations center monitoring Pakistan's largest fiber infrastructure",
    client: "Pakistan Telecommunication Company Limited (PTCL)",
    industry: "Telecom",
    location: "Nationwide Pakistan",
    duration: "Ongoing (since 2022)",
    year: "2022-Present",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",

    challenge: {
      overview:
        "PTCL operates Pakistan's largest fiber backbone spanning 5,000+ km, serving as the critical infrastructure for national internet connectivity, enterprise WANs, and wholesale carrier services. Network faults were being detected reactively through customer complaints, resulting in extended outages and SLA penalties.",
      painPoints: [
        "Average 4.2 hours Mean Time to Detect (MTTD) for fiber faults",
        "Manual fault correlation across 12 legacy monitoring tools",
        "PKR 45M monthly in enterprise SLA penalty payments",
        "No predictive capability for preventive maintenance",
        "Skilled NOC staff shortage with 40% annual turnover",
        "Fragmented visibility across transport, IP, and access layers",
        "No unified view for management dashboards",
      ],
      businessImpact:
        "Extended MTTD was causing average 6-hour outages affecting thousands of enterprise customers. PTCL was paying PKR 45M monthly in SLA penalties and losing large accounts to competitors with better reliability.",
    },

    opportunity: {
      overview:
        "A modern, AI-powered NOC could transform PTCL's operations from reactive to predictive, dramatically reducing MTTD and enabling preventive maintenance before faults impact customers.",
      scope:
        "End-to-end monitoring of PTCL's national infrastructure: 5,000+ km fiber backbone, 200+ PoPs, 15,000+ enterprise circuits, and integration with regional NOCs across all four provinces.",
    },

    solution: {
      overview:
        "HNL designed and operates a state-of-the-art Network Operations Center with AI/ML-powered fault detection, automated correlation, and predictive analytics. The solution unified 12 legacy tools into a single pane of glass with intelligent automation.",
      approach: [
        {
          title: "Unified Monitoring Platform",
          description:
            "Integrated all 12 legacy monitoring tools into a unified platform providing single-pane-of-glass visibility across transport (DWDM), IP/MPLS, access networks, and customer CPE.",
        },
        {
          title: "AI-Powered Fault Detection",
          description:
            "Deployed ML models trained on 3 years of historical fault data to detect anomalies before they become outages. The system identifies degrading fiber spans, failing equipment, and capacity bottlenecks.",
        },
        {
          title: "Automated Event Correlation",
          description:
            "Smart correlation engine that analyzes thousands of alarms and identifies root cause within seconds, reducing alarm noise by 85% and presenting operators with actionable insights.",
        },
        {
          title: "Predictive Maintenance Engine",
          description:
            "ML models predict equipment failures 2-4 weeks in advance based on performance trends, enabling scheduled maintenance during low-traffic windows.",
        },
        {
          title: "Tiered Response Framework",
          description:
            "Structured escalation with L1 (monitoring & triage), L2 (technical resolution), and L3 (expert engineering) tiers. Clear SLAs and automated escalation triggers.",
        },
        {
          title: "Executive Dashboards",
          description:
            "Real-time KPI dashboards for PTCL management showing network health, SLA performance, capacity utilization, and trend analysis.",
        },
      ],
      techSpecs: {
        coverage: "5,000+ km fiber backbone",
        PoPs: "200+ Points of Presence",
        circuits: "15,000+ enterprise circuits",
        alarmProcessing: "500,000+ alarms/day processed",
        MTTD: "<5 minutes (from 4.2 hours)",
        correlation: "85% alarm noise reduction",
        staffing: "24/7 x 365, 45 FTE",
        tools: "ServiceNow, SolarWinds, custom AI platform",
      },
    },

    execution: [
      {
        phase: "Phase 1: Assessment & Design",
        duration: "Months 1-3",
        activities: [
          "Audit of existing monitoring tools and processes",
          "Network topology discovery and documentation",
          "SLA and KPI framework definition",
          "NOC facility design and equipment planning",
          "Staffing model and training curriculum development",
          "AI/ML model requirements definition",
        ],
      },
      {
        phase: "Phase 2: Platform Deployment",
        duration: "Months 4-6",
        activities: [
          "Unified monitoring platform deployment",
          "Integration with 12 legacy tools via APIs",
          "Custom dashboard development",
          "Initial AI model training on historical data",
          "NOC facility build-out and equipment installation",
        ],
      },
      {
        phase: "Phase 3: Operational Go-Live",
        duration: "Months 7-9",
        activities: [
          "Staff recruitment and intensive training",
          "Phased transition from PTCL's internal NOC",
          "24/7 operations commencement",
          "Process refinement and playbook development",
          "AI model fine-tuning with live data",
        ],
      },
      {
        phase: "Phase 4: Continuous Improvement",
        duration: "Ongoing",
        activities: [
          "Monthly AI model retraining",
          "Quarterly process optimization",
          "New circuit onboarding",
          "Technology refresh and tool upgrades",
          "Performance reporting and SLA reviews",
        ],
      },
    ],

    results: [
      {
        metric: "Fault Detection",
        value: "98%",
        description: "Faster - MTTD reduced from 4.2 hours to <5 minutes",
        icon: "TrendingUp",
      },
      {
        metric: "Coverage",
        value: "5,000km",
        description: "National fiber backbone monitored 24/7",
        icon: "Layers",
      },
      {
        metric: "SLA Penalties",
        value: "92%",
        description: "Reduction in monthly penalty payments",
        icon: "Target",
      },
      {
        metric: "Alarm Reduction",
        value: "85%",
        description: "Noise reduced through smart correlation",
        icon: "CheckCircle2",
      },
      {
        metric: "Predictive Alerts",
        value: "340+",
        description: "Failures prevented monthly through prediction",
        icon: "Building2",
      },
      {
        metric: "Response Time",
        value: "<15min",
        description: "Average time to dispatch field team",
        icon: "Clock",
      },
    ],

    businessOutcome: {
      revenue: "PKR 41M monthly savings through eliminated SLA penalties and reduced truck rolls",
      marketShare: "Enterprise customer churn reduced from 8% to 2% annually",
      customerSatisfaction: "Enterprise NPS improved from 22 to 58",
    },

    testimonial: {
      quote:
        "HNL's NOC has revolutionized how we manage our network. We've gone from finding out about outages through customer complaints to predicting and preventing them before they happen. The AI-powered correlation has been a game-changer - our operators now focus on real issues instead of drowning in alarms.",
      author: "Rashid Ahmed",
      role: "VP Network Operations, PTCL",
    },

    servicesUsed: [
      { name: "NOC Monitoring", href: "/telecom-infrastructure/noc-monitoring" },
      { name: "Operation & Maintenance", href: "/telecom-infrastructure/operation-maintenance" },
      { name: "AI Agents", href: "/software-cloud-ai/ai-agents" },
    ],

    keyLearnings: [
      "AI/ML transforms NOC from reactive to predictive operations",
      "Tool consolidation dramatically improves operator effectiveness",
      "Automated correlation reduces alarm fatigue by 85%",
      "Predictive maintenance ROI exceeds monitoring cost within 6 months",
      "Tiered staffing model balances cost with expertise availability",
      "Executive dashboards drive organizational alignment on network quality",
    ],

    relatedCaseStudies: [
      { slug: "jazz-fiber-rollout-lahore", title: "Jazz Fiber Rollout" },
      { slug: "hbl-cloud-migration", title: "HBL Cloud Migration" },
    ],

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        alt: "Network operations center",
        caption: "HNL's 24/7 Network Operations Center",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
        alt: "Monitoring dashboards",
        caption: "Unified monitoring dashboard with AI alerts",
      },
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
        alt: "Fiber optic network",
        caption: "National fiber backbone infrastructure",
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        alt: "Server room",
        caption: "NOC platform infrastructure",
      },
    ],
  },

  "lucky-cement-data-analytics": {
    title: "Big Data Analytics Platform for Lucky Cement",
    subtitle:
      "AI-driven production optimization delivering 18% output increase in Pakistan's largest cement manufacturer",
    client: "Lucky Cement Limited",
    industry: "Manufacturing",
    location: "Karachi & Pezu Plants",
    duration: "10 months",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",

    challenge: {
      overview:
        "Lucky Cement, Pakistan's largest cement manufacturer with 14 MTPA capacity, was operating their kilns and mills based on operator experience rather than data-driven insights. Despite having modern equipment, production efficiency was 15-20% below global benchmarks, and unplanned downtime was costing millions monthly.",
      painPoints: [
        "Kiln efficiency averaging 72% vs 85%+ global benchmark",
        "28 hours average monthly unplanned downtime per production line",
        "Energy consumption 15% above industry best practice",
        "Reactive maintenance causing PKR 25M monthly in emergency repairs",
        "Quality variations requiring costly blending adjustments",
        "Siloed data across 15 different control systems",
        "No visibility into real-time production KPIs for management",
      ],
      businessImpact:
        "Conservative estimates showed PKR 800M+ annual opportunity cost from sub-optimal operations. Unplanned downtime alone was causing PKR 200M in lost production yearly.",
    },

    opportunity: {
      overview:
        "Lucky Cement's modern equipment generated vast amounts of data that wasn't being leveraged. An integrated IoT and AI analytics platform could unlock significant value through predictive maintenance, process optimization, and real-time decision support.",
      scope:
        "Two production facilities (Karachi and Pezu) with 6 production lines, 500+ critical equipment assets, and integration with existing DCS/SCADA systems. Goal: 15% production increase and 30% reduction in unplanned downtime within 12 months.",
    },

    solution: {
      overview:
        "HNL deployed a comprehensive Industrial IoT and AI analytics platform that collects data from 500+ sensors, processes it in real-time, and delivers actionable insights to operators, maintenance teams, and management through role-specific dashboards.",
      approach: [
        {
          title: "IoT Sensor Network Deployment",
          description:
            "Installed 500+ additional sensors for vibration, temperature, pressure, and quality parameters. Upgraded existing sensors with edge computing gateways for real-time data collection.",
        },
        {
          title: "Data Integration Layer",
          description:
            "Built unified data lake integrating 15 siloed systems: DCS, SCADA, quality lab systems, ERP, maintenance management, and energy meters. Historical data from 5 years ingested for model training.",
        },
        {
          title: "Predictive Maintenance Models",
          description:
            "Developed ML models for critical equipment (kilns, mills, fans, gearboxes) predicting failures 2-4 weeks in advance with 92% accuracy. Models continuously improve with new failure data.",
        },
        {
          title: "Process Optimization Engine",
          description:
            "AI models that recommend optimal operating parameters for kilns and mills based on raw material quality, ambient conditions, and production targets. Operators receive real-time guidance.",
        },
        {
          title: "Quality Prediction System",
          description:
            "ML models predicting cement quality 30 minutes before lab results, enabling proactive adjustments. Reduced quality variations by 40%.",
        },
        {
          title: "Executive Analytics Platform",
          description:
            "Real-time dashboards showing production KPIs, energy consumption, equipment health, and predictive alerts. Drill-down capability from plant overview to individual equipment.",
        },
      ],
      techSpecs: {
        sensors: "500+ (vibration, temperature, pressure, flow, quality)",
        dataVolume: "2TB daily from production systems",
        processing: "Apache Kafka + Spark Streaming",
        storage: "Azure Data Lake + Time Series DB",
        mlPlatform: "Azure ML + custom models",
        visualization: "Power BI + custom operator dashboards",
        integration: "OPC-UA, Modbus, REST APIs",
      },
    },

    execution: [
      {
        phase: "Phase 1: Assessment & Architecture",
        duration: "Months 1-2",
        activities: [
          "Production process deep-dive with operations team",
          "Existing data systems audit",
          "Sensor gap analysis",
          "Platform architecture design",
          "Use case prioritization with business impact analysis",
          "Change management planning",
        ],
      },
      {
        phase: "Phase 2: Infrastructure Deployment",
        duration: "Months 3-4",
        activities: [
          "IoT sensor installation (planned shutdown windows)",
          "Edge gateway deployment",
          "Cloud platform provisioning",
          "Data integration pipelines",
          "Historical data migration",
          "Network upgrades for sensor connectivity",
        ],
      },
      {
        phase: "Phase 3: Model Development",
        duration: "Months 5-7",
        activities: [
          "Predictive maintenance model training",
          "Process optimization model development",
          "Quality prediction system build",
          "Model validation with operations team",
          "Dashboard development",
          "Pilot deployment on 1 production line",
        ],
      },
      {
        phase: "Phase 4: Rollout & Optimization",
        duration: "Months 8-10",
        activities: [
          "Platform rollout to all 6 production lines",
          "Operator training program",
          "Model fine-tuning based on feedback",
          "Integration with maintenance workflows",
          "Executive dashboard deployment",
          "Hypercare support and knowledge transfer",
        ],
      },
    ],

    results: [
      {
        metric: "Production Increase",
        value: "18%",
        description: "Output improvement across both plants",
        icon: "TrendingUp",
      },
      {
        metric: "Downtime Reduction",
        value: "35%",
        description: "Unplanned stops reduced through prediction",
        icon: "Target",
      },
      {
        metric: "Energy Savings",
        value: "12%",
        description: "Reduction in energy consumption per ton",
        icon: "Layers",
      },
      {
        metric: "Prediction Accuracy",
        value: "92%",
        description: "Equipment failure prediction accuracy",
        icon: "CheckCircle2",
      },
      {
        metric: "Quality Improvement",
        value: "40%",
        description: "Reduction in quality variations",
        icon: "Building2",
      },
      {
        metric: "Annual Savings",
        value: "200M+",
        description: "PKR in operational improvements",
        icon: "Clock",
      },
    ],

    businessOutcome: {
      revenue: "PKR 200M+ annual savings through production increase, energy reduction, and downtime prevention",
      marketShare: "Strengthened cost leadership position in Pakistan's cement industry",
      customerSatisfaction: "Quality consistency improved customer satisfaction scores by 25%",
    },

    testimonial: {
      quote:
        "The transformation has been remarkable. Our operators now have AI-powered guidance that helps them optimize in real-time. We're predicting equipment failures weeks in advance and preventing them during planned shutdowns. The 18% production increase alone paid for the entire project in 4 months.",
      author: "Muhammad Imran",
      role: "Plant Director, Lucky Cement Karachi",
    },

    servicesUsed: [
      { name: "Big Data Analytics", href: "/software-cloud-ai/big-data-analytics" },
      { name: "AI Agents", href: "/software-cloud-ai/ai-agents" },
      { name: "ICT Infrastructure", href: "/software-cloud-ai/ict-infrastructure" },
    ],

    keyLearnings: [
      "Domain expertise (cement manufacturing) is as important as data science skills",
      "Operator buy-in is critical - involve them in model development",
      "Start with high-impact, achievable use cases to build momentum",
      "Edge computing essential for real-time industrial applications",
      "Continuous model retraining maintains prediction accuracy",
      "Executive sponsorship drives adoption across the organization",
    ],

    relatedCaseStudies: [
      { slug: "hbl-cloud-migration", title: "HBL Cloud Migration" },
      { slug: "ptcl-noc-monitoring", title: "PTCL NOC Monitoring" },
    ],

    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
        alt: "Cement plant",
        caption: "Lucky Cement production facility",
      },
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
        alt: "Analytics dashboard",
        caption: "Real-time production analytics dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        alt: "Industrial IoT",
        caption: "IoT sensor deployment in production area",
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        alt: "Control room",
        caption: "Modernized control room with AI dashboards",
      },
    ],
  },
}

/* ===========================================
   METADATA & PAGE COMPONENT
=========================================== */

export async function generateStaticParams() {
  return [
    { slug: "jazz-fiber-rollout-lahore" },
    { slug: "telenor-bess-installation" },
    { slug: "zong-hybrid-power" },
    { slug: "ufone-site-deployment" },
    { slug: "scom-northern-expansion" },
    { slug: "ptcl-noc-monitoring" },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudiesData[slug]
  if (!caseStudy) return { title: "Case Study Not Found | HNL" }

  return {
    title: `${caseStudy.title} | HNL Case Study`,
    description: caseStudy.challenge.overview.slice(0, 155),
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = caseStudiesData[slug]

  if (!caseStudy) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: caseStudy.title, href: `/case-studies/${slug}` },
  ]

  const iconMap: Record<string, any> = {
    Target,
    TrendingUp,
    Building2,
    Clock,
    Layers,
    CheckCircle2,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: caseStudy.title,
            author: { "@type": "Organization", name: "HNL" },
            publisher: { "@type": "Organization", name: "HNL" },
            description: caseStudy.challenge.overview,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />

      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-black text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={caseStudy.heroImage || "/placeholder.svg"}
              alt={caseStudy.title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          </div>

          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mt-12 max-w-4xl">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <InfoBadge icon={Building2} label="Client" value={caseStudy.client} />
                <InfoBadge icon={Layers} label="Industry" value={caseStudy.industry} />
                <InfoBadge icon={MapPin} label="Location" value={caseStudy.location} />
                <InfoBadge icon={Clock} label="Duration" value={caseStudy.duration} />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{caseStudy.title}</h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">{caseStudy.subtitle}</p>
            </div>
          </div>
        </section>

        {/* ===== MAIN CONTENT ===== */}
        <article className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* ----- THE CHALLENGE ----- */}
            <SectionHeading icon={Target}>The Challenge</SectionHeading>

            <Paragraph>{caseStudy.challenge.overview}</Paragraph>

            {caseStudy.challenge.painPoints && (
              <div className="my-12 bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Pain Points</h3>
                <ul className="space-y-4">
                  {caseStudy.challenge.painPoints.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {caseStudy.challenge.businessImpact && (
              <div className="my-12 p-6 border-l-4 border-red-600 bg-gray-50">
                <p className="text-lg font-medium text-gray-800">
                  <span className="text-red-600 font-bold">Business Impact:</span> {caseStudy.challenge.businessImpact}
                </p>
              </div>
            )}

            {/* ----- THE OPPORTUNITY ----- */}
            <SectionHeading icon={Lightbulb}>The Opportunity</SectionHeading>

            <Paragraph>{caseStudy.opportunity.overview}</Paragraph>

            <div className="my-12 bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-lg font-medium text-gray-400 mb-2">Project Scope</h3>
              <p className="text-2xl font-bold">{caseStudy.opportunity.scope}</p>
            </div>

            {/* ----- THE SOLUTION ----- */}
            <SectionHeading icon={Rocket}>The Solution</SectionHeading>

            <Paragraph>{caseStudy.solution.overview}</Paragraph>

            {caseStudy.solution.approach && (
              <div className="my-12 grid gap-6 md:grid-cols-2">
                {caseStudy.solution.approach.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {caseStudy.solution.techSpecs && (
              <div className="my-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(caseStudy.solution.techSpecs).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 font-medium text-gray-900 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </td>
                          <td className="px-6 py-4 text-gray-700">{value as string}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ----- EXECUTION TIMELINE ----- */}
            {caseStudy.execution && caseStudy.execution.length > 0 && (
              <>
                <SectionHeading icon={Clock}>Execution Timeline</SectionHeading>

                <div className="my-12 space-y-8">
                  {caseStudy.execution.map((phase: any, idx: number) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-gray-200 pb-8 last:pb-0">
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {phase.activities.map((activity: string, aIdx: number) => (
                          <li key={aIdx} className="flex items-center gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ----- GALLERY ----- */}
            {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
              <div className="my-16">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Project Gallery</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {caseStudy.galleryImages.map((img: any, idx: number) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {img.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-white text-sm">{img.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- THE OUTCOME ----- */}
            <SectionHeading icon={TrendingUp}>The Outcome</SectionHeading>

            <div className="my-12 grid gap-6 sm:grid-cols-2">
              {caseStudy.results.map((result: any, idx: number) => {
                const IconComponent = iconMap[result.icon] || Target
                return (
                  <MetricCard
                    key={idx}
                    metric={result.metric}
                    value={result.value}
                    description={result.description}
                    icon={IconComponent}
                  />
                )
              })}
            </div>

            {caseStudy.businessOutcome && (
              <div className="my-12 bg-green-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Business Impact</h3>
                <div className="space-y-4">
                  {Object.entries(caseStudy.businessOutcome).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>{" "}
                        <span className="text-gray-700">{value as string}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ----- TESTIMONIAL ----- */}
            {caseStudy.testimonial && (
              <ImportantQuote
                quote={caseStudy.testimonial.quote}
                author={caseStudy.testimonial.author}
                role={caseStudy.testimonial.role}
              />
            )}

            {/* ----- KEY LEARNINGS ----- */}
            {caseStudy.keyLearnings && caseStudy.keyLearnings.length > 0 && (
              <div className="my-16 bg-gray-900 text-white rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8">Key Learnings</h3>
                <ul className="space-y-4">
                  {caseStudy.keyLearnings.map((learning: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-300">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ----- SERVICES USED ----- */}
            <div className="my-16 pt-12 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Services Used in This Project</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.servicesUsed.map((service: any, idx: number) => (
                  <ServiceChip key={idx} name={service.name} href={service.href} />
                ))}
              </div>
            </div>

            {/* ----- RELATED CASE STUDIES ----- */}
            {caseStudy.relatedCaseStudies && caseStudy.relatedCaseStudies.length > 0 && (
              <div className="my-16 pt-12 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {caseStudy.relatedCaseStudies.map((related: any, idx: number) => (
                    <Link
                      key={idx}
                      href={`/case-studies/${related.slug}`}
                      className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                        {related.title}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* ===== CTA SECTION (in footer, just informational here) ===== */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Looking for Similar Results?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is ready to discuss your infrastructure, energy, or IT project and deliver measurable outcomes
              for your organization.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
