"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Book } from "lucide-react"

const glossaryTerms = [
  {
    term: "ATS",
    fullForm: "Automatic Transfer Switch",
    category: "Energy",
    definition:
      "Electrical device that automatically switches power source from grid to generator during outages and back to grid when restored. Critical for uninterrupted power supply in telecom sites, data centers, and critical facilities.",
  },
  {
    term: "AMF",
    fullForm: "Automatic Mains Failure",
    category: "Energy",
    definition:
      "Control panel system that monitors grid power and automatically starts diesel generators when mains power fails. Includes safety interlocks to prevent backfeeding and ensures seamless power transition.",
  },
  {
    term: "BESS",
    fullForm: "Battery Energy Storage System",
    category: "Energy",
    definition:
      "An advanced energy storage solution using lithium-ion or other battery technologies to store electrical energy from solar panels or grid during off-peak hours and supply power during peak demand or outages. Reduces diesel generator runtime by 60-80% in hybrid power systems.",
  },
  {
    term: "NOC",
    fullForm: "Network Operations Center",
    category: "Telecom",
    definition:
      "A centralized facility with 24/7 monitoring capabilities where telecommunications networks, IT systems, and infrastructure are monitored, managed, and maintained. NOCs track alarms, performance metrics, and coordinate incident response to ensure network uptime.",
  },
  {
    term: "FTTH",
    fullForm: "Fiber To The Home",
    category: "Telecom",
    definition:
      "A broadband network architecture that uses optical fiber cables directly to residential premises for ultra-high-speed internet connectivity. FTTH provides symmetric gigabit speeds and is the gold standard for modern telecommunications infrastructure.",
  },
  {
    term: "OPEX",
    fullForm: "Operational Expenditure",
    category: "Business",
    definition:
      "Ongoing costs for running infrastructure including diesel fuel, electricity, maintenance, repairs, and personnel. Hybrid power systems significantly reduce OPEX by cutting diesel consumption and maintenance requirements.",
  },
  {
    term: "CAPEX",
    fullForm: "Capital Expenditure",
    category: "Business",
    definition:
      "Upfront investment costs for purchasing and installing infrastructure equipment like generators, solar panels, towers, and network equipment. CAPEX decisions consider total cost of ownership including future OPEX savings.",
  },
  {
    term: "ROI",
    fullForm: "Return on Investment",
    category: "Business",
    definition:
      "Financial metric measuring the profitability of an investment calculated as (Net Profit / Cost of Investment) × 100. Hybrid power systems in Pakistan typically deliver 25-35% ROI with 3-4 year payback periods.",
  },
  {
    term: "SLA",
    fullForm: "Service Level Agreement",
    category: "Business",
    definition:
      "Contractual commitment defining service quality metrics like uptime percentage (e.g., 99.9%), response times, resolution times, and penalties for non-compliance. Critical for managed services and infrastructure operations.",
  },
  {
    term: "MPLS",
    fullForm: "Multiprotocol Label Switching",
    category: "Telecom",
    definition:
      "A routing technique that directs data packets across enterprise networks using short path labels instead of complex routing table lookups. Provides secure, high-performance connectivity between business locations.",
  },
  {
    term: "DG",
    fullForm: "Diesel Generator",
    category: "Energy",
    definition:
      "Backup or primary power generation equipment using diesel fuel to produce electricity. Available in capacities from 10 kVA to 3000 kVA. Critical for telecom sites, data centers, and facilities with unreliable grid power in Pakistan.",
  },
  {
    term: "UPS",
    fullForm: "Uninterruptible Power Supply",
    category: "Energy",
    definition:
      "Battery-based system providing instant backup power during grid outages with zero switchover time. Protects sensitive IT equipment from power fluctuations and provides sufficient time for generator startup or graceful shutdown.",
  },
  {
    term: "kVA",
    fullForm: "Kilovolt-Ampere",
    category: "Energy",
    definition:
      "Unit of apparent electrical power used to rate generators and UPS systems. 1 kVA equals 1000 volt-amperes. For diesel generators, actual output in kilowatts (kW) is typically 0.8 × kVA rating due to power factor.",
  },
  {
    term: "OTDR",
    fullForm: "Optical Time Domain Reflectometer",
    category: "Telecom",
    definition:
      "Specialized test equipment that measures fiber optic cable characteristics by sending light pulses and analyzing reflections. Used to detect fiber breaks, splice losses, connector issues, and calculate total link loss during fiber deployments.",
  },
  {
    term: "PoE",
    fullForm: "Power over Ethernet",
    category: "Telecom",
    definition:
      "Technology allowing network cables to carry electrical power alongside data to devices like IP cameras, wireless access points, and VoIP phones. Eliminates need for separate power adapters and simplifies installations.",
  },
  {
    term: "VLAN",
    fullForm: "Virtual Local Area Network",
    category: "Telecom",
    definition:
      "Network segmentation technique that creates separate broadcast domains within the same physical network infrastructure. Improves security, reduces congestion, and enables logical grouping of devices regardless of physical location.",
  },
  {
    term: "VPN",
    fullForm: "Virtual Private Network",
    category: "Cloud",
    definition:
      "Encrypted network connection over the internet providing secure remote access to enterprise resources. Essential for remote work, connecting branch offices, and protecting data transmission over public networks.",
  },
  {
    term: "DR",
    fullForm: "Disaster Recovery",
    category: "Cloud",
    definition:
      "Policies, procedures, and technical solutions for recovering IT infrastructure and data after catastrophic events. Includes backup systems, alternate sites, recovery time objectives (RTO), and recovery point objectives (RPO).",
  },
  {
    term: "RTO",
    fullForm: "Recovery Time Objective",
    category: "Cloud",
    definition:
      "Maximum acceptable downtime for a system or application after a disaster. For example, an RTO of 4 hours means systems must be restored within 4 hours of an outage to meet business continuity requirements.",
  },
  {
    term: "RPO",
    fullForm: "Recovery Point Objective",
    category: "Cloud",
    definition:
      "Maximum acceptable amount of data loss measured in time. An RPO of 1 hour means the organization can tolerate losing up to 1 hour of data, requiring backups at least every 60 minutes.",
  },
  {
    term: "SIEM",
    fullForm: "Security Information and Event Management",
    category: "Cloud",
    definition:
      "Cybersecurity solution providing real-time analysis of security alerts from network devices, servers, and applications. Enables threat detection, compliance reporting, and incident investigation through centralized log management.",
  },
  {
    term: "CDN",
    fullForm: "Content Delivery Network",
    category: "Cloud",
    definition:
      "Distributed network of servers that cache and deliver web content from locations geographically closer to end users. Improves website performance, reduces latency, and handles traffic spikes for applications and media streaming.",
  },
  {
    term: "QoS",
    fullForm: "Quality of Service",
    category: "Telecom",
    definition:
      "Network traffic management technique that prioritizes certain types of data packets to ensure consistent performance for critical applications like voice and video conferencing over shared network infrastructure.",
  },
  {
    term: "DWDM",
    fullForm: "Dense Wavelength Division Multiplexing",
    category: "Telecom",
    definition:
      "Fiber optic technology that transmits multiple wavelengths (colors) of light simultaneously through a single fiber strand. Dramatically increases fiber capacity from gigabits to terabits per second without laying new cables.",
  },
  {
    term: "OLT",
    fullForm: "Optical Line Terminal",
    category: "Telecom",
    definition:
      "Central equipment in passive optical network (PON) architecture that connects to fiber distribution network and coordinates communication with optical network terminals (ONTs) at customer premises in FTTH deployments.",
  },
  {
    term: "BMS",
    fullForm: "Battery Management System",
    category: "Energy",
    definition:
      "Electronic control system that monitors and manages lithium-ion battery packs in BESS installations. Controls charging/discharging, cell balancing, temperature management, and safety protections to maximize battery life and performance.",
  },
  {
    term: "PUE",
    fullForm: "Power Usage Effectiveness",
    category: "Cloud",
    definition:
      "Energy efficiency metric for data centers calculated as Total Facility Power / IT Equipment Power. A PUE of 1.0 is perfect efficiency. Modern data centers target PUE below 1.5, meaning cooling and infrastructure consume less than 50% additional power.",
  },
  {
    term: "API",
    fullForm: "Application Programming Interface",
    category: "Cloud",
    definition:
      "Set of protocols and tools that allow different software applications to communicate and share data. APIs enable integration between systems, cloud services, and third-party applications for automation and extended functionality.",
  },
  {
    term: "IoT",
    fullForm: "Internet of Things",
    category: "Cloud",
    definition:
      "Network of physical devices embedded with sensors, software, and connectivity that collect and exchange data over the internet. Used for remote monitoring, smart buildings, asset tracking, and industrial automation applications.",
  },
  {
    term: "AI/ML",
    fullForm: "Artificial Intelligence / Machine Learning",
    category: "Cloud",
    definition:
      "Advanced technologies enabling computers to learn from data patterns and make intelligent decisions without explicit programming. Applications include predictive maintenance, network optimization, chatbots, and business process automation.",
  },
  {
    term: "BTS",
    fullForm: "Base Transceiver Station",
    category: "Telecom",
    definition:
      "Mobile network infrastructure equipment that facilitates wireless communication between mobile devices and the telecom network. Consists of antennas, radios, and power systems mounted on towers or rooftops.",
  },
  {
    term: "CRAC",
    fullForm: "Computer Room Air Conditioning",
    category: "Cloud",
    definition:
      "Specialized precision cooling units designed for data centers and server rooms. Maintains strict temperature and humidity control to ensure optimal operating conditions for IT equipment and prevent overheating failures.",
  },
  {
    term: "EMS",
    fullForm: "Energy Management System",
    category: "Energy",
    definition:
      "Software and hardware solution that monitors, controls, and optimizes energy consumption across facilities. Provides real-time visibility into power usage, identifies inefficiencies, and automates load management for cost reduction.",
  },
  {
    term: "GPON",
    fullForm: "Gigabit Passive Optical Network",
    category: "Telecom",
    definition:
      "Fiber-to-the-home technology using passive optical splitters to enable a single optical fiber to serve multiple premises. Delivers downstream speeds up to 2.5 Gbps and upstream up to 1.25 Gbps cost-effectively.",
  },
  {
    term: "HVAC",
    fullForm: "Heating, Ventilation, and Air Conditioning",
    category: "Energy",
    definition:
      "Climate control systems essential for data centers, telecom equipment rooms, and commercial facilities. Proper HVAC design prevents equipment overheating and maintains optimal operating temperatures for infrastructure reliability.",
  },
  {
    term: "IP",
    fullForm: "Internet Protocol",
    category: "Telecom",
    definition:
      "Fundamental communication protocol for sending data across networks. IP addresses uniquely identify devices, and IP-based systems enable modern converged networks carrying voice, video, and data over shared infrastructure.",
  },
  {
    term: "kW",
    fullForm: "Kilowatt",
    category: "Energy",
    definition:
      "Unit of real electrical power representing actual work performed. 1 kilowatt equals 1000 watts. Generator output is often specified in kW, while load requirements are calculated based on connected equipment power consumption.",
  },
  {
    term: "LAN",
    fullForm: "Local Area Network",
    category: "Telecom",
    definition:
      "Network infrastructure connecting computers and devices within a limited area like an office building or campus. Modern LANs use Ethernet and Wi-Fi technologies for high-speed data communication and resource sharing.",
  },
  {
    term: "Load Shedding",
    fullForm: "",
    category: "Energy",
    definition:
      "Deliberate shutdown of electric power in parts of a distribution system to prevent entire system failure when demand exceeds supply. Common challenge in Pakistan requiring backup power solutions for business continuity.",
  },
  {
    term: "ONT",
    fullForm: "Optical Network Terminal",
    category: "Telecom",
    definition:
      "Customer premises equipment in fiber-to-the-home installations that converts optical signals to electrical for connection to routers and devices. The ONT is the demarcation point between service provider and customer networks.",
  },
  {
    term: "PaaS",
    fullForm: "Platform as a Service",
    category: "Cloud",
    definition:
      "Cloud computing model providing a platform for developers to build, run, and manage applications without infrastructure complexity. Includes development tools, databases, middleware, and runtime environments.",
  },
  {
    term: "PDU",
    fullForm: "Power Distribution Unit",
    category: "Energy",
    definition:
      "Device that distributes electric power to multiple equipment loads in data centers and telecom facilities. Rack-mounted PDUs provide circuit protection, remote monitoring, and individual outlet control for efficient power management.",
  },
  {
    term: "RAID",
    fullForm: "Redundant Array of Independent Disks",
    category: "Cloud",
    definition:
      "Data storage technology that combines multiple disk drives into a logical unit for redundancy and performance improvement. RAID protects against data loss from drive failures in servers and storage systems.",
  },
  {
    term: "RMS",
    fullForm: "Remote Monitoring System",
    category: "Energy",
    definition:
      "IoT-based solution providing real-time visibility into generator status, fuel levels, battery health, alarms, and performance metrics from anywhere via web or mobile interfaces. Enables proactive maintenance and reduces site visits.",
  },
  {
    term: "SaaS",
    fullForm: "Software as a Service",
    category: "Cloud",
    definition:
      "Cloud computing model where software applications are hosted by a provider and accessed via the internet on subscription basis. Eliminates software installation, maintenance, and infrastructure management overhead.",
  },
  {
    term: "SAN",
    fullForm: "Storage Area Network",
    category: "Cloud",
    definition:
      "High-speed network providing block-level data storage access to servers. SANs consolidate storage resources, improve data availability, enable advanced backup/recovery, and support enterprise applications requiring high-performance storage.",
  },
  {
    term: "SCADA",
    fullForm: "Supervisory Control and Data Acquisition",
    category: "Energy",
    definition:
      "Industrial control system used to monitor and control infrastructure like power plants, substations, and distributed sites. SCADA provides real-time data visualization, remote control capabilities, and automated responses to conditions.",
  },
  {
    term: "SD-WAN",
    fullForm: "Software-Defined Wide Area Network",
    category: "Telecom",
    definition:
      "Modern approach to enterprise networking that uses software to intelligently route traffic across multiple connection types (MPLS, internet, LTE). Reduces costs, improves performance, and simplifies branch connectivity management.",
  },
  {
    term: "SNMP",
    fullForm: "Simple Network Management Protocol",
    category: "Telecom",
    definition:
      "Standard protocol for monitoring and managing network devices including routers, switches, servers, and UPS systems. SNMP enables centralized monitoring, configuration management, and automated alerting for infrastructure.",
  },
  {
    term: "SolarHybrid",
    fullForm: "Solar Hybrid Power System",
    category: "Energy",
    definition:
      "Integrated solution combining solar panels, battery storage, and diesel generators to minimize fuel consumption and reduce carbon footprint. Particularly effective in Pakistan where solar irradiance averages 5-7 peak sun hours daily.",
  },
  {
    term: "Splice",
    fullForm: "Fiber Optic Splice",
    category: "Telecom",
    definition:
      "Permanent connection between two fiber optic cables achieved through fusion splicing (melting fibers together) or mechanical splicing. Proper splicing techniques are critical to minimize signal loss in long-distance fiber networks.",
  },
  {
    term: "STP",
    fullForm: "Shielded Twisted Pair",
    category: "Telecom",
    definition:
      "Network cable with additional shielding to protect against electromagnetic interference. Used in industrial environments and areas with electrical noise where standard UTP cables would experience signal degradation.",
  },
  {
    term: "TCO",
    fullForm: "Total Cost of Ownership",
    category: "Business",
    definition:
      "Comprehensive assessment of all costs associated with infrastructure over its lifetime including purchase price, installation, operation, maintenance, fuel, and disposal. TCO analysis reveals true economics beyond initial CAPEX.",
  },
  {
    term: "Tier III",
    fullForm: "Tier III Data Center",
    category: "Cloud",
    definition:
      "Data center classification with concurrent maintainability allowing maintenance without downtime. Features N+1 power and cooling, multiple distribution paths, and 99.982% uptime guarantee. Suitable for enterprise-critical applications.",
  },
  {
    term: "UTP",
    fullForm: "Unshielded Twisted Pair",
    category: "Telecom",
    definition:
      "Standard networking cable consisting of color-coded twisted wire pairs without shielding. Cat5e and Cat6 UTP cables support Gigabit Ethernet and are the most common choice for structured cabling in offices and data centers.",
  },
  {
    term: "VDI",
    fullForm: "Virtual Desktop Infrastructure",
    category: "Cloud",
    definition:
      "Technology hosting desktop operating systems on centralized servers in data centers while users access virtual desktops remotely. Improves security, simplifies management, enables remote work, and reduces endpoint device costs.",
  },
  {
    term: "VoIP",
    fullForm: "Voice over Internet Protocol",
    category: "Telecom",
    definition:
      "Technology for delivering voice communications over IP networks including the internet. VoIP reduces telephony costs, enables unified communications, and supports advanced features like video calling and presence.",
  },
  {
    term: "WAN",
    fullForm: "Wide Area Network",
    category: "Telecom",
    definition:
      "Network infrastructure connecting geographically dispersed locations across cities or countries. Enterprise WANs use technologies like MPLS, SD-WAN, and dedicated leased lines to interconnect branch offices with headquarters.",
  },
  {
    term: "Zero Downtime",
    fullForm: "",
    category: "Business",
    definition:
      "Infrastructure design philosophy ensuring continuous operation without service interruptions through redundancy, failover mechanisms, and proactive maintenance. Critical for telecom, banking, healthcare, and e-commerce sectors.",
  },
]

const categories = ["All", "Telecom", "Energy", "Cloud", "Business"]

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Group by first letter
  const groupedTerms = filteredTerms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase()
      if (!acc[firstLetter]) acc[firstLetter] = []
      acc[firstLetter].push(term)
      return acc
    },
    {} as Record<string, typeof glossaryTerms>,
  )

  const availableLetters = Object.keys(groupedTerms).sort()
  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-start gap-4 mb-6">
            <Book className="w-12 h-12 text-hnl-red" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Glossary</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Comprehensive dictionary of technical terms, acronyms, and terminology used in telecom, energy, and IT
                sectors across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-hnl-red text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:border-hnl-red"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alphabetical Navigation */}
      <section className="py-6 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {allLetters.map((letter) => {
              const hasTerms = availableLetters.includes(letter)
              return (
                <a
                  key={letter}
                  href={hasTerms ? `#letter-${letter}` : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-md font-bold text-base transition-all ${
                    hasTerms
                      ? "bg-white border-2 border-gray-300 text-black hover:bg-hnl-red hover:text-white hover:border-hnl-red cursor-pointer"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    if (hasTerms) {
                      e.preventDefault()
                      document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {letter}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {availableLetters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-24">
              <h2 className="text-4xl font-bold text-hnl-red mb-6 pb-2 border-b-2 border-hnl-red inline-block">
                {letter}
              </h2>
              <div className="space-y-4 mt-6">
                {groupedTerms[letter].map((item) => (
                  <Card key={item.term} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{item.term}</CardTitle>
                          {item.fullForm && (
                            <CardDescription className="text-base font-medium text-gray-700">
                              {item.fullForm}
                            </CardDescription>
                          )}
                        </div>
                        <Badge variant="outline" className="text-hnl-red border-hnl-red">
                          {item.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No terms found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
