import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Wrench,
  FileText,
  Lightbulb,
  Target,
  Shield,
  AlertCircle,
} from "lucide-react"

// Reusable Components for Guide Content
function SectionHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="text-3xl font-bold mt-20 mb-8 pt-10 border-t-2 border-gray-200 scroll-mt-24">
      {children}
    </h2>
  )
}

function SubHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3 id={id} className="text-2xl font-semibold mt-14 mb-6 scroll-mt-24">
      {children}
    </h3>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg leading-loose text-gray-700 mb-8">{children}</p>
}

function ImportantNote({
  title,
  children,
  type = "warning",
}: { title: string; children: React.ReactNode; type?: "warning" | "info" | "danger" }) {
  const styles = {
    warning: { bg: "bg-amber-50", border: "border-amber-500", icon: AlertTriangle, iconColor: "text-amber-600" },
    info: { bg: "bg-blue-50", border: "border-blue-500", icon: Lightbulb, iconColor: "text-blue-600" },
    danger: { bg: "bg-red-50", border: "border-red-500", icon: AlertCircle, iconColor: "text-red-600" },
  }
  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-6 my-10 rounded-r-lg`}>
      <div className="flex items-start gap-4">
        <Icon className={`w-6 h-6 ${style.iconColor} flex-shrink-0 mt-1`} />
        <div>
          <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

function StepBox({
  number,
  title,
  children,
  description,
}: { number: number; title: string; children?: React.ReactNode; description?: string }) {
  return (
    <div className="flex gap-6 my-10">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold mb-4">{title}</h4>
        {description && <p className="text-gray-700 leading-relaxed mb-4">{description}</p>}
        {children}
      </div>
    </div>
  )
}

function ChecklistItem({ children, checked = true }: { children: React.ReactNode; checked?: boolean }) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      {checked ? (
        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
      )}
      <span className="text-gray-700">{children}</span>
    </li>
  )
}

function EquipmentTable({
  items,
}: { items: { item: string; specification: string; quantity: string; notes: string }[] }) {
  return (
    <div className="overflow-x-auto my-10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="text-left p-4 font-semibold">Equipment/Material</th>
            <th className="text-left p-4 font-semibold">Specification</th>
            <th className="text-left p-4 font-semibold">Quantity</th>
            <th className="text-left p-4 font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="p-4 border-b border-gray-200 font-medium">{item.item}</td>
              <td className="p-4 border-b border-gray-200">{item.specification}</td>
              <td className="p-4 border-b border-gray-200">{item.quantity}</td>
              <td className="p-4 border-b border-gray-200 text-gray-600">{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProcedureCard({ title, duration, steps }: { title: string; duration: string; steps: string[] }) {
  return (
    <Card className="my-8 border-l-4 border-l-red-600">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold">{title}</h4>
          <Badge variant="outline" className="text-gray-600">
            <Clock className="w-3 h-3 mr-1" />
            {duration}
          </Badge>
        </div>
        <ol className="space-y-3">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-sm flex items-center justify-center font-medium">
                {idx + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

function TroubleshootingItem({ problem, cause, solution }: { problem: string; cause: string; solution: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 my-6">
      <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        Problem: {problem}
      </h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-1">Likely Cause</p>
          <p className="text-gray-700">{cause}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-1">Solution</p>
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>
    </div>
  )
}

// Helper component for tables used in new guides
function StyledTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white">
            {headers.map((header) => (
              <th key={header} className="text-left p-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-4 border-b border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Helper component for bullet lists
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 my-8">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Helper component for pricing explanations
function PricingExplanation({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 font-mono">
      <h4 className="font-bold text-lg mb-4 text-red-400">{title}</h4>
      <div className="space-y-4 text-sm">
        {items.map((item, index) => (
          <p key={index}>
            <span className="text-red-300">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>
    </div>
  )
}

// Helper for quoting important figures
function ImportantQuote({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="my-10 p-6 border-l-4 border-red-600 bg-gray-100 rounded-r-lg">
      <p className="text-lg italic leading-relaxed text-gray-700">"{quote}"</p>
      <footer className="mt-4 font-semibold text-gray-900">- {author}</footer>
    </blockquote>
  )
}

// Full Fiber Optic Installation Guide Content
const fiberOpticContent = (
  <div className="prose-custom">
    {/* Introduction */}
    <section id="introduction">
      <SectionHeading id="introduction">1. Introduction & Scope</SectionHeading>

      <Paragraph>
        This technical guide provides comprehensive procedures for fiber optic cable installation in Pakistan's telecom
        infrastructure projects. It covers both underground and aerial deployment methods, applicable to metro,
        backbone, and last-mile FTTH networks.
      </Paragraph>

      <Paragraph>
        The procedures outlined in this guide are based on ITU-T recommendations, Pakistan Telecommunication Authority
        (PTA) guidelines, and over 15 years of field experience deploying more than 25,000 kilometers of fiber across
        Pakistan's diverse terrain.
      </Paragraph>

      <SubHeading>Scope of Application</SubHeading>

      <Paragraph>This guide applies to the following fiber deployment scenarios:</Paragraph>

      <ul className="space-y-3 my-8">
        <ChecklistItem>Underground fiber deployment in urban and suburban areas</ChecklistItem>
        <ChecklistItem>Aerial fiber installation on existing pole infrastructure</ChecklistItem>
        <ChecklistItem>FTTH/FTTx last-mile distribution networks</ChecklistItem>
        <ChecklistItem>Metro ring and backbone fiber networks</ChecklistItem>
        <ChecklistItem>Inter-city long-haul fiber routes</ChecklistItem>
      </ul>

      <ImportantNote title="Standards Reference" type="info">
        All procedures comply with ITU-T G.652, G.655, and G.657 standards for single-mode fiber. Testing parameters
        follow ITU-T G.650 and G.651 recommendations. Local regulations from PTA and municipal authorities supersede any
        conflicting procedures in this guide.
      </ImportantNote>

      <SubHeading>Document Structure</SubHeading>

      <Paragraph>
        This guide is organized into 12 chapters covering the complete installation lifecycle from initial route survey
        through final acceptance testing. Each chapter includes step-by-step procedures, quality checkpoints, and
        troubleshooting guidance.
      </Paragraph>
    </section>

    {/* Pre-Installation */}
    <section id="pre-installation">
      <SectionHeading id="pre-installation">2. Pre-Installation Requirements</SectionHeading>

      <Paragraph>
        Successful fiber installation begins with thorough preparation. This chapter outlines the prerequisites that
        must be completed before any field work commences. Skipping these steps is the leading cause of project delays
        and quality issues.
      </Paragraph>

      <SubHeading>Permits & Approvals</SubHeading>

      <Paragraph>Before mobilizing equipment to site, ensure all required permits are obtained:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Required Permits Checklist</h4>
        <ul className="space-y-3">
          <ChecklistItem>PTA Right of Way (ROW) approval</ChecklistItem>
          <ChecklistItem>Municipal excavation permit (for underground work)</ChecklistItem>
          <ChecklistItem>Traffic management plan approval (urban areas)</ChecklistItem>
          <ChecklistItem>Railway crossing permit (if applicable)</ChecklistItem>
          <ChecklistItem>Cantonment board NOC (for cantonment areas)</ChecklistItem>
          <ChecklistItem>Environmental clearance (for protected areas)</ChecklistItem>
          <ChecklistItem>Utility crossing agreements (gas, water, power)</ChecklistItem>
        </ul>
      </div>

      <ImportantNote title="Permit Processing Time" type="warning">
        Allow 4-8 weeks for permit processing in major cities. Cantonment and railway permits may take 12+ weeks. Begin
        permit applications immediately after route finalization to avoid project delays.
      </ImportantNote>

      <SubHeading>Team Composition</SubHeading>

      <Paragraph>A standard fiber installation team for a 10km underground project consists of:</Paragraph>

      <EquipmentTable
        items={[
          {
            item: "Project Manager",
            specification: "PMP certified, 5+ years fiber experience",
            quantity: "1",
            notes: "Overall responsibility",
          },
          {
            item: "Site Supervisor",
            specification: "Telecom diploma, splicing certified",
            quantity: "2",
            notes: "Day/night shift",
          },
          {
            item: "Splicing Technician",
            specification: "OEM certified, OTDR proficient",
            quantity: "4",
            notes: "2 per splice team",
          },
          { item: "Cable Laying Team", specification: "Trained laborers", quantity: "12", notes: "3 teams of 4" },
          {
            item: "Civil Works Team",
            specification: "Excavation experience",
            quantity: "8",
            notes: "Trenching/backfill",
          },
          { item: "Safety Officer", specification: "NEBOSH certified", quantity: "1", notes: "Full-time on site" },
          { item: "Quality Inspector", specification: "QA/QC experience", quantity: "1", notes: "Documentation" },
        ]}
      />

      <SubHeading>Pre-Installation Checklist</SubHeading>

      <Paragraph>Complete this checklist before mobilizing to site:</Paragraph>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-red-600" />
          Pre-Mobilization Checklist
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <ChecklistItem>Route survey completed and approved</ChecklistItem>
            <ChecklistItem>All permits obtained and on-site</ChecklistItem>
            <ChecklistItem>Materials delivered and inspected</ChecklistItem>
            <ChecklistItem>Equipment calibrated and tested</ChecklistItem>
            <ChecklistItem>Team safety briefing conducted</ChecklistItem>
          </ul>
          <ul className="space-y-2">
            <ChecklistItem>Emergency contacts established</ChecklistItem>
            <ChecklistItem>Traffic management plan ready</ChecklistItem>
            <ChecklistItem>Utility locations marked</ChecklistItem>
            <ChecklistItem>Weather forecast checked</ChecklistItem>
            <ChecklistItem>Client kickoff meeting done</ChecklistItem>
          </ul>
        </div>
      </div>
    </section>

    {/* Route Survey */}
    <section id="route-survey">
      <SectionHeading id="route-survey">3. Route Survey & Planning</SectionHeading>

      <Paragraph>
        Route survey is the foundation of successful fiber deployment. A thorough survey identifies optimal cable paths,
        potential obstacles, and infrastructure requirements. This chapter covers survey procedures for both desktop
        planning and field verification.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=500&fit=crop"
        alt="Survey team conducting route assessment"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Desktop Survey</SubHeading>

      <Paragraph>Begin with desktop analysis using available mapping resources:</Paragraph>

      <StepBox number={1} title="Gather Base Maps">
        <p className="mb-4">Obtain the following mapping resources:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Google Earth Pro imagery (latest available)
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Municipal infrastructure maps (roads, utilities)
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Existing telecom infrastructure maps
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Topographic survey data (if available)
          </li>
        </ul>
      </StepBox>

      <StepBox number={2} title="Identify Route Options">
        <p className="mb-4">Plot at least 2-3 alternative routes considering:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Shortest distance vs. ease of construction
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Existing duct availability for sharing
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Road crossing minimization
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Permit complexity for each route
          </li>
        </ul>
      </StepBox>

      <StepBox number={3} title="Preliminary Cost Estimate">
        <p>
          Prepare rough cost estimates for each route option including civil works, materials, permits, and labor.
          Present options to client with cost-benefit analysis before field survey.
        </p>
      </StepBox>

      <SubHeading>Field Survey Procedures</SubHeading>

      <Paragraph>
        After route selection, conduct detailed field survey to verify desktop findings and collect precise
        measurements:
      </Paragraph>

      <ProcedureCard
        title="Field Survey Procedure"
        duration="2-3 days per 10km"
        steps={[
          "Mobilize survey team with GPS, measuring wheel, and camera equipment",
          "Walk entire route photographing key locations every 50 meters",
          "Mark all obstacle crossings (roads, railways, rivers, utilities)",
          "Record GPS coordinates for splice points and equipment locations",
          "Identify manholes, hand holes, and cabinet locations",
          "Note soil conditions and potential excavation challenges",
          "Document existing infrastructure that can be leveraged",
          "Interview local residents about underground utilities",
          "Compile survey report with photos, coordinates, and recommendations",
        ]}
      />

      <ImportantNote title="GPS Accuracy" type="info">
        Use survey-grade GPS equipment with sub-meter accuracy for splice point and equipment locations. Consumer GPS
        devices are acceptable for general route documentation but not for as-built records.
      </ImportantNote>

      <SubHeading>Survey Deliverables</SubHeading>

      <Paragraph>The route survey must produce the following documentation:</Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="p-4 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-2">Route Map Package</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Detailed route map (1:1000 scale)</li>
            <li>• Splice point locations with GPS</li>
            <li>• Crossing details and depths</li>
            <li>• Cable drum placement plan</li>
          </ul>
        </Card>
        <Card className="p-4 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-2">Survey Report</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Photo documentation (geotagged)</li>
            <li>• Obstacle crossing details</li>
            <li>• Permit requirements list</li>
            <li>• Risk assessment findings</li>
          </ul>
        </Card>
        <Card className="p-4 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-2">Bill of Materials</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Cable quantity (with 10% slack)</li>
            <li>• Duct requirements</li>
            <li>• Closure and splice tray count</li>
            <li>• Civil works materials</li>
          </ul>
        </Card>
        <Card className="p-4 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-2">Project Schedule</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Milestone-based timeline</li>
            <li>• Resource loading plan</li>
            <li>• Critical path analysis</li>
            <li>• Weather contingency</li>
          </ul>
        </Card>
      </div>
    </section>

    {/* Equipment & Materials */}
    <section id="equipment-materials">
      <SectionHeading id="equipment-materials">4. Equipment & Materials</SectionHeading>

      <Paragraph>
        Using quality equipment and materials is critical for reliable fiber networks. This chapter lists approved
        equipment, material specifications, and inspection procedures to ensure only compliant items are used in
        construction.
      </Paragraph>

      <SubHeading>Fiber Cable Specifications</SubHeading>

      <Paragraph>Standard fiber cable specifications for different network segments:</Paragraph>

      <EquipmentTable
        items={[
          {
            item: "Backbone Cable",
            specification: "96F G.652D, armored",
            quantity: "Per design",
            notes: "Long-haul routes",
          },
          {
            item: "Metro Distribution",
            specification: "48F G.652D, ADSS",
            quantity: "Per design",
            notes: "Aerial deployment",
          },
          {
            item: "Access Network",
            specification: "24F G.657A1, duct",
            quantity: "Per design",
            notes: "Underground feeder",
          },
          {
            item: "Drop Cable",
            specification: "2F G.657A2, flat",
            quantity: "Per subscriber",
            notes: "Last 100m to premises",
          },
          {
            item: "Patch Cords",
            specification: "SC/APC, 3m",
            quantity: "2 per termination",
            notes: "Equipment connection",
          },
        ]}
      />

      <ImportantNote title="Cable Storage" type="warning">
        Store fiber cable drums in covered, dry areas. Never stack drums more than 2 high. Check cable ends for moisture
        ingress before deployment. Reject any cable showing signs of water damage or physical stress.
      </ImportantNote>

      <SubHeading>Splicing Equipment</SubHeading>

      <Paragraph>Approved fusion splicer models and required accessories:</Paragraph>

      <EquipmentTable
        items={[
          {
            item: "Fusion Splicer",
            specification: "Fujikura 90S or equivalent",
            quantity: "1 per splice team",
            notes: "Core alignment type",
          },
          {
            item: "OTDR",
            specification: "EXFO/VIAVI, 1310/1550nm",
            quantity: "1 per project",
            notes: "Calibrated within 1 year",
          },
          {
            item: "Cleaver",
            specification: "Precision cleaver",
            quantity: "2 per splicer",
            notes: "Replace blade every 5000 cleaves",
          },
          {
            item: "Fiber Stripper",
            specification: "3-hole stripper set",
            quantity: "2 per team",
            notes: "250/900um sizes",
          },
          {
            item: "Power Meter",
            specification: "Calibrated, -70 to +10dBm",
            quantity: "2 per project",
            notes: "SC/LC adapters",
          },
          { item: "VFL", specification: "Visual Fault Locator", quantity: "1 per team", notes: "Red laser, 650nm" },
        ]}
      />

      <SubHeading>Civil Works Equipment</SubHeading>

      <Paragraph>Equipment required for underground cable installation:</Paragraph>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        {[
          {
            title: "Excavation",
            items: ["Mini excavator (1-3 ton)", "Concrete cutter", "Jack hammer", "Hand tools"],
          },
          { title: "Cable Laying", items: ["Cable drum trailer", "Cable rollers", "Pulling winch", "Duct rodder"] },
          {
            title: "Safety Equipment",
            items: ["Barriers & cones", "Warning signs", "First aid kit", "Fire extinguisher"],
          },
        ].map((category) => (
          <Card key={category.title} className="p-4">
            <h4 className="font-bold mb-3">{category.title}</h4>
            <ul className="space-y-2 text-sm">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <SubHeading>Material Inspection Checklist</SubHeading>

      <Paragraph>Inspect all materials upon delivery using this checklist:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <ul className="space-y-3">
          <ChecklistItem>Verify cable type and fiber count matches order</ChecklistItem>
          <ChecklistItem>Check cable drum for physical damage during transport</ChecklistItem>
          <ChecklistItem>Confirm cable length on drum label matches specification</ChecklistItem>
          <ChecklistItem>Inspect cable ends for moisture or damage</ChecklistItem>
          <ChecklistItem>Verify closure and hardware quantities</ChecklistItem>
          <ChecklistItem>Check splice protection sleeves are correct size</ChecklistItem>
          <ChecklistItem>Confirm duct color coding matches network standard</ChecklistItem>
          <ChecklistItem>Document any discrepancies with photos</ChecklistItem>
        </ul>
      </div>
    </section>

    {/* Civil Works */}
    <section id="civil-works">
      <SectionHeading id="civil-works">5. Civil Works Procedures</SectionHeading>

      <Paragraph>
        Civil works represent the most labor-intensive phase of underground fiber installation. This chapter covers
        trenching, duct installation, backfilling, and reinstatement procedures compliant with municipal regulations
        across Pakistan.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop"
        alt="Trench excavation for fiber duct installation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Trenching Specifications</SubHeading>

      <Paragraph>Standard trench dimensions for fiber duct installation:</Paragraph>

      <EquipmentTable
        items={[
          {
            item: "Footpath Installation",
            specification: "450mm deep x 150mm wide",
            quantity: "Standard",
            notes: "Single duct",
          },
          {
            item: "Road Shoulder",
            specification: "600mm deep x 200mm wide",
            quantity: "Standard",
            notes: "With warning tape",
          },
          {
            item: "Road Crossing",
            specification: "900mm deep x 300mm wide",
            quantity: "As required",
            notes: "Steel casing required",
          },
          {
            item: "Agricultural Land",
            specification: "1200mm deep x 200mm wide",
            quantity: "Per agreement",
            notes: "Below plow depth",
          },
        ]}
      />

      <ProcedureCard
        title="Trenching Procedure"
        duration="100-200m per day"
        steps={[
          "Mark trench alignment using spray paint and stakes",
          "Notify utility companies and request location marking",
          "Set up traffic management and safety barriers",
          "Cut asphalt/concrete surface using saw cutter",
          "Excavate trench to specified depth",
          "Remove loose soil and level trench bottom",
          "Apply 50mm sand bedding layer",
          "Place duct and secure with spacers",
          "Apply 100mm sand cover over duct",
          "Install warning tape 200mm above duct",
          "Backfill in 150mm layers with compaction",
          "Reinstatete surface to original condition",
        ]}
      />

      <ImportantNote title="Utility Protection" type="danger">
        Hand dig within 1 meter of any marked utility. Strike damage to gas lines or electrical cables can cause serious
        injury or death. If an unmarked utility is encountered, stop work immediately and contact the utility company.
      </ImportantNote>

      <SubHeading>Duct Installation</SubHeading>

      <Paragraph>
        Proper duct installation ensures cables can be pulled and maintained throughout the network lifecycle:
      </Paragraph>

      <StepBox number={1} title="Duct Selection">
        <p className="mb-4">Select appropriate duct type for installation location:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            <strong>HDPE 40/33:</strong> Standard underground, black with green stripe for telecom
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            <strong>HDPE 50/42:</strong> High fiber count routes, road crossings
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            <strong>Micro-duct 14/10:</strong> FTTH distribution, blown fiber
          </li>
        </ul>
      </StepBox>

      <StepBox number={2} title="Duct Laying">
        <p>
          Lay duct in trench ensuring no kinks or sharp bends. Maximum bend radius is 20x outer diameter. Use
          factory-made bends for direction changes greater than 15 degrees. Join ducts using approved couplers with
          proper alignment.
        </p>
      </StepBox>

      <StepBox number={3} title="Duct Testing">
        <p>
          After installation, test duct continuity by pulling a mandrel through the entire length. The mandrel should
          pass freely without resistance. Document any blockages for remediation before cable installation.
        </p>
      </StepBox>

      <SubHeading>Manhole & Handhole Installation</SubHeading>

      <Paragraph>
        Access points are required at regular intervals for cable installation and future maintenance:
      </Paragraph>

      <EquipmentTable
        items={[
          {
            item: "Handhole",
            specification: "600x600x600mm",
            quantity: "Every 300-500m",
            notes: "Straight runs, no splicing",
          },
          {
            item: "Manhole Type A",
            specification: "1200x900x1200mm",
            quantity: "At splice points",
            notes: "Up to 24F splice capacity",
          },
          {
            item: "Manhole Type B",
            specification: "1800x1200x1500mm",
            quantity: "Major junctions",
            notes: "48F+ splice capacity",
          },
          {
            item: "Equipment Pit",
            specification: "2400x1800x1800mm",
            quantity: "At POP sites",
            notes: "ODF and equipment housing",
          },
        ]}
      />
    </section>

    {/* Cable Laying */}
    <section id="cable-laying">
      <SectionHeading id="cable-laying">6. Cable Laying Techniques</SectionHeading>

      <Paragraph>
        Proper cable handling during installation is critical to prevent fiber damage and ensure long-term network
        reliability. This chapter covers cable pulling, blowing, and aerial installation techniques.
      </Paragraph>

      <SubHeading>Cable Pulling - Underground</SubHeading>

      <Paragraph>Standard procedure for pulling fiber cable through installed ducts:</Paragraph>

      <ProcedureCard
        title="Cable Pulling Procedure"
        duration="500-1000m per pull"
        steps={[
          "Calculate maximum pulling tension (typically 2700N for 96F cable)",
          "Position cable drum at pulling start point on drum stand",
          "Feed pilot rope through duct using duct rodder",
          "Attach pulling eye to cable using approved grip",
          "Connect tension meter inline with pulling rope",
          "Begin pull at slow, steady pace (max 30m/min)",
          "Monitor tension continuously - stop if exceeds limit",
          "Use cable lubricant for pulls exceeding 300m",
          "Leave minimum 5m slack at each access point",
          "Coil and secure slack in figure-8 pattern",
          "Install temporary end caps on cable ends",
          "Document pull tension and cable length records",
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop"
        alt="Fiber cable drum and pulling equipment"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <ImportantNote title="Tension Monitoring" type="danger">
        Exceeding maximum pulling tension will damage fiber and cause permanent signal loss. Always use a calibrated
        tension meter. If tension approaches limit, stop and investigate cause before continuing.
      </ImportantNote>

      <SubHeading>Cable Blowing - Micro-duct</SubHeading>

      <Paragraph>
        For micro-duct installations, cable blowing offers faster deployment with lower risk of fiber damage:
      </Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="p-5 bg-green-50 border-green-200">
          <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Advantages
          </h4>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• No tension on fiber during installation</li>
            <li>• Longer distances per blow (up to 2km)</li>
            <li>• Faster installation speed</li>
            <li>• Lower labor requirements</li>
          </ul>
        </Card>
        <Card className="p-5 bg-red-50 border-red-200">
          <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Limitations
          </h4>
          <ul className="space-y-2 text-sm text-red-900">
            <li>• Requires specialized blowing equipment</li>
            <li>• Only suitable for small diameter cables</li>
            <li>• Duct must be clean and continuous</li>
            <li>• Higher equipment rental cost</li>
          </ul>
        </Card>
      </div>

      <SubHeading>Aerial Installation</SubHeading>

      <Paragraph>For aerial routes using existing pole infrastructure:</Paragraph>

      <StepBox number={1} title="Pole Survey">
        <p>
          Survey all poles for structural integrity, available attachment height, and existing cables. Document any
          poles requiring reinforcement or replacement. Coordinate with pole owner for attachment approval.
        </p>
      </StepBox>

      <StepBox number={2} title="Hardware Installation">
        <p className="mb-4">Install aerial hardware before cable stringing:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Suspension clamps at intermediate poles
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Dead-end clamps at terminal and corner poles
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Storage brackets for slack loops
          </li>
        </ul>
      </StepBox>

      <StepBox number={3} title="Cable Stringing">
        <p>
          String cable using bucket truck or climbing. Maintain proper sag between poles per manufacturer
          specifications. Install cable markers at road crossings and every 500m for identification.
        </p>
      </StepBox>
    </section>

    {/* Splicing */}
    <section id="splicing">
      <SectionHeading id="splicing">7. Fiber Splicing Procedures</SectionHeading>

      <Paragraph>
        Fiber splicing creates permanent, low-loss connections between cable segments. This chapter covers fusion
        splicing procedures, acceptable loss limits, and splice closure installation.
      </Paragraph>

      <SubHeading>Splice Point Preparation</SubHeading>

      <Paragraph>Before splicing, prepare the work area and cable ends:</Paragraph>

      <ProcedureCard
        title="Splice Point Setup"
        duration="30-45 minutes"
        steps={[
          "Position splice enclosure in manhole on clean work mat",
          "Arrange cable entry direction to match enclosure ports",
          "Strip outer jacket 1.5m from each cable end",
          "Clean aramid yarns and cut to 150mm length",
          "Identify buffer tubes using color code chart",
          "Separate tubes and route to splice trays",
          "Label each tube with source and destination",
          "Set up fusion splicer on stable, clean surface",
          "Verify splicer calibration and electrode condition",
        ]}
      />

      <SubHeading>Fusion Splicing Steps</SubHeading>

      <Paragraph>Standard fusion splicing procedure for single-mode fiber:</Paragraph>

      <StepBox number={1} title="Fiber Preparation">
        <p className="mb-4">For each fiber to be spliced:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Strip 40mm of 250um coating using fiber stripper
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Clean bare fiber with lint-free wipe and alcohol
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Slide heat-shrink splice protector onto fiber before cleaving
          </li>
        </ul>
      </StepBox>

      <StepBox number={2} title="Cleaving">
        <p>
          Place fiber in cleaver with 10-16mm extending past blade. Score and break fiber in single motion. Inspect
          cleave angle - reject if greater than 1 degree or if fiber end shows chips or cracks.
        </p>
      </StepBox>

      <StepBox number={3} title="Fusion">
        <p>
          Load both fibers into splicer V-grooves. Initiate automatic alignment and fusion cycle. Review estimated
          splice loss - re-splice if exceeding 0.05dB for same-fiber splices or 0.1dB for different fibers.
        </p>
      </StepBox>

      <StepBox number={4} title="Protection">
        <p>
          Slide heat-shrink protector over splice point. Place in heater and run shrink cycle (typically 40 seconds).
          Allow to cool before handling. Store protected splice in tray with proper bend radius.
        </p>
      </StepBox>

      <ImportantNote title="Splice Loss Limits" type="info">
        <div className="mt-2">
          <p className="mb-2">Acceptable splice loss limits for HNL projects:</p>
          <ul className="space-y-1">
            <li>
              • <strong>Backbone network:</strong> ≤0.05dB per splice
            </li>
            <li>
              • <strong>Metro distribution:</strong> ≤0.08dB per splice
            </li>
            <li>
              • <strong>Access network:</strong> ≤0.10dB per splice
            </li>
          </ul>
        </div>
      </ImportantNote>

      <SubHeading>Splice Loss Troubleshooting</SubHeading>

      <TroubleshootingItem
        problem="Splice loss exceeds 0.1dB"
        cause="Poor cleave quality, contamination, or fiber mismatch"
        solution="Re-cleave both fibers, clean with fresh alcohol wipe, verify fiber types match"
      />

      <TroubleshootingItem
        problem="Bubble in splice point"
        cause="Contamination on fiber or insufficient fusion current"
        solution="Clean fibers thoroughly, check electrode condition, increase fusion current"
      />

      <TroubleshootingItem
        problem="Fiber breaks during handling"
        cause="Heat-shrink not properly positioned or excessive handling"
        solution="Center protector on splice, minimize fiber bending during tray installation"
      />
    </section>

    {/* Testing */}
    <section id="testing">
      <SectionHeading id="testing">8. Testing & Validation</SectionHeading>

      <Paragraph>
        Comprehensive testing validates installation quality and provides baseline documentation for future maintenance.
        This chapter covers OTDR testing, power meter measurements, and acceptance criteria.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop"
        alt="Network testing equipment and OTDR display"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>OTDR Testing</SubHeading>

      <Paragraph>OTDR testing is required for all fiber spans before acceptance:</Paragraph>

      <EquipmentTable
        items={[
          {
            item: "Wavelength",
            specification: "1310nm and 1550nm",
            quantity: "Both required",
            notes: "Detect different fault types",
          },
          {
            item: "Pulse Width",
            specification: "10ns to 1us",
            quantity: "Per distance",
            notes: "Shorter for resolution",
          },
          { item: "Range", specification: "2x cable length", quantity: "Minimum", notes: "Capture full trace" },
          { item: "Averaging", specification: "30 seconds minimum", quantity: "Both ends", notes: "Reduce noise" },
        ]}
      />

      <ProcedureCard
        title="OTDR Testing Procedure"
        duration="15-20 minutes per fiber"
        steps={[
          "Clean OTDR port and launch cord connector",
          "Connect 500m launch fiber to OTDR",
          "Connect to fiber under test via patch panel",
          "Set wavelength to 1310nm, appropriate pulse width",
          "Acquire trace with 30-second averaging",
          "Verify all events (splices, connectors) within limits",
          "Save trace with standardized filename",
          "Repeat at 1550nm wavelength",
          "Test from opposite end (bidirectional required)",
          "Calculate average loss for each splice/connector",
          "Generate test report with pass/fail status",
        ]}
      />

      <SubHeading>Acceptance Criteria</SubHeading>

      <Paragraph>Test results must meet these criteria for project acceptance:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Pass/Fail Criteria</h4>
        <EquipmentTable
          items={[
            {
              item: "Splice Loss",
              specification: "≤0.1dB average",
              quantity: "Per splice",
              notes: "Bidirectional average",
            },
            {
              item: "Connector Loss",
              specification: "≤0.3dB",
              quantity: "Per connector",
              notes: "Including pigtail splice",
            },
            {
              item: "Fiber Attenuation",
              specification: "≤0.35dB/km @1310nm",
              quantity: "Per span",
              notes: "≤0.22dB/km @1550nm",
            },
            {
              item: "End-to-End Loss",
              specification: "Per link budget",
              quantity: "Total route",
              notes: "Including all elements",
            },
            { item: "ORL", specification: "≥45dB", quantity: "APC connectors", notes: "≥35dB for UPC" },
          ]}
        />
      </div>

      <ImportantNote title="Bidirectional Testing" type="warning">
        Single-direction OTDR testing can hide faults or show incorrect splice losses due to fiber mismatch. Always test
        from both ends and use bidirectional average for acceptance criteria.
      </ImportantNote>
    </section>

    {/* Documentation */}
    <section id="documentation">
      <SectionHeading id="documentation">9. Documentation Requirements</SectionHeading>

      <Paragraph>
        Complete documentation is essential for network operations and future maintenance. This chapter outlines
        required as-built records, test reports, and handover documents.
      </Paragraph>

      <SubHeading>As-Built Documentation</SubHeading>

      <Paragraph>The following documents must be prepared within 14 days of project completion:</Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        {[
          {
            title: "Route Documentation",
            items: [
              "As-built route map (CAD format)",
              "GPS coordinates of all access points",
              "Crossing details and depths",
              "Photo documentation (geotagged)",
            ],
          },
          {
            title: "Fiber Records",
            items: [
              "Fiber assignment matrix",
              "Splice schedule with loss values",
              "OTDR traces (all fibers, both directions)",
              "End-to-end loss measurements",
            ],
          },
          {
            title: "Civil Works Records",
            items: [
              "Trench profiles and dimensions",
              "Manhole/handhole locations",
              "Reinstatement photographs",
              "Permit closure documentation",
            ],
          },
          {
            title: "Equipment Records",
            items: ["ODF port assignments", "Patch panel labels", "Equipment serial numbers", "Warranty certificates"],
          },
        ].map((section) => (
          <Card key={section.title} className="p-5">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-600" />
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <SubHeading>Handover Package</SubHeading>

      <Paragraph>Compile the following for formal project handover:</Paragraph>

      <ol className="space-y-4 my-8">
        {[
          "Executive summary with project scope and key metrics",
          "Complete as-built documentation package (digital and printed)",
          "All OTDR test reports with pass/fail summary",
          "Warranty certificates and manufacturer documentation",
          "Spare parts inventory list",
          "Operations and maintenance manual",
          "Emergency contact list and escalation procedures",
          "Training completion records (if applicable)",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
              {idx + 1}
            </span>
            <span className="text-gray-700 pt-1">{item}</span>
          </li>
        ))}
      </ol>
    </section>

    {/* Safety */}
    <section id="safety">
      <SectionHeading id="safety">10. Safety Guidelines</SectionHeading>

      <Paragraph>
        Safety is non-negotiable on HNL projects. This chapter covers mandatory safety requirements for fiber
        installation work sites.
      </Paragraph>

      <ImportantNote title="Zero Tolerance Policy" type="danger">
        HNL operates a zero-tolerance policy for safety violations. Any worker found operating without proper PPE or
        bypassing safety procedures will be immediately removed from site and may face permanent exclusion from HNL
        projects.
      </ImportantNote>

      <SubHeading>Personal Protective Equipment (PPE)</SubHeading>

      <Paragraph>Mandatory PPE for all fiber installation activities:</Paragraph>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        {[
          {
            title: "Head Protection",
            items: ["Hard hat (EN 397)", "Safety glasses (clear)", "Fiber safety glasses (splicing)"],
          },
          { title: "Body Protection", items: ["High-visibility vest", "Safety boots (steel toe)", "Work gloves"] },
          {
            title: "Specialized PPE",
            items: ["Full harness (heights >2m)", "Respirator (dusty conditions)", "Hearing protection (machinery)"],
          },
        ].map((category) => (
          <Card key={category.title} className="p-4 border-l-4 border-l-red-600">
            <h4 className="font-bold mb-3">{category.title}</h4>
            <ul className="space-y-2 text-sm">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <SubHeading>Hazard-Specific Procedures</SubHeading>

      <Accordion type="multiple" className="my-8">
        <AccordionItem value="heights">
          <AccordionTrigger className="text-lg font-semibold">Working at Heights</AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pt-4">
            <ul className="space-y-2">
              <li>• Full body harness required for any work above 2 meters</li>
              <li>• Two points of attachment at all times when climbing</li>
              <li>• Bucket trucks preferred over ladders for aerial work</li>
              <li>• Weather restrictions: No work in winds exceeding 40 km/h</li>
              <li>• Tool lanyards required for all hand tools</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="confined">
          <AccordionTrigger className="text-lg font-semibold">Confined Space Entry</AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pt-4">
            <ul className="space-y-2">
              <li>• Permit required before entering any manhole</li>
              <li>• Atmosphere testing mandatory (O2, LEL, H2S, CO)</li>
              <li>• Continuous ventilation while occupied</li>
              <li>• Attendant stationed at entry point at all times</li>
              <li>• Rescue plan and equipment in place before entry</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="electrical">
          <AccordionTrigger className="text-lg font-semibold">Electrical Safety</AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pt-4">
            <ul className="space-y-2">
              <li>• Assume all cables are live until verified dead</li>
              <li>• Maintain safe distances from power lines per voltage</li>
              <li>• Use insulated tools near electrical equipment</li>
              <li>• Report any damaged electrical infrastructure immediately</li>
              <li>• GFCI protection for all portable power tools</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="traffic">
          <AccordionTrigger className="text-lg font-semibold">Traffic Management</AccordionTrigger>
          <AccordionContent className="text-gray-700 leading-relaxed pt-4">
            <ul className="space-y-2">
              <li>• Traffic management plan required for all road work</li>
              <li>• Cones, barriers, and signage per approved plan</li>
              <li>• Flag person required for active traffic lanes</li>
              <li>• High-visibility clothing mandatory in traffic areas</li>
              <li>• Night work requires additional lighting and reflective gear</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Troubleshooting */}
    <section id="troubleshooting">
      <SectionHeading id="troubleshooting">11. Troubleshooting Guide</SectionHeading>

      <Paragraph>
        This chapter provides solutions to common problems encountered during fiber installation. Use this guide for
        initial troubleshooting before escalating to engineering support.
      </Paragraph>

      <SubHeading>Cable Installation Issues</SubHeading>

      <TroubleshootingItem
        problem="Cable won't pull through duct"
        cause="Blockage, collapsed duct, or excessive bends"
        solution="Run mandrel to locate blockage. If intermittent, use lubricant and reduce pull speed. Excavate and repair if duct is damaged."
      />

      <TroubleshootingItem
        problem="High pulling tension"
        cause="Long pull distance, multiple bends, or duct friction"
        solution="Set up intermediate pull point to reduce total distance. Apply cable lubricant. Consider figure-8 method for complex routes."
      />

      <TroubleshootingItem
        problem="Cable jacket damage during pulling"
        cause="Sharp edges at duct entry, kinked cable, or excessive speed"
        solution="Install duct bell at entry point. Straighten cable before entry. Reduce pull speed to maximum 30m/min."
      />

      <SubHeading>Splicing Issues</SubHeading>

      <TroubleshootingItem
        problem="Consistently high splice loss"
        cause="Contaminated fiber, worn cleaver blade, or splicer calibration"
        solution="Clean work area and fibers thoroughly. Replace cleaver blade. Run splicer arc calibration routine."
      />

      <TroubleshootingItem
        problem="Fiber breaks in cleaver"
        cause="Fiber tension or contamination on cleaver anvil"
        solution="Reduce fiber tension during cleaving. Clean cleaver anvil and blade. Check fiber for pre-existing damage."
      />

      <SubHeading>OTDR Testing Issues</SubHeading>

      <TroubleshootingItem
        problem="Ghost events on trace"
        cause="Reflections from high-loss connectors or dirty ports"
        solution="Clean all connectors in test path. Use APC connectors where possible. Increase OTDR range to differentiate real vs ghost events."
      />

      <TroubleshootingItem
        problem="Unable to see far end of cable"
        cause="Total loss exceeds OTDR dynamic range"
        solution="Increase pulse width and averaging time. Test from both ends. Use higher dynamic range OTDR for long routes."
      />
    </section>

    {/* Checklists */}
    <section id="checklists">
      <SectionHeading id="checklists">12. QA/QC Checklists</SectionHeading>

      <Paragraph>
        Use these checklists at each project phase to ensure quality standards are met. All checklists must be completed
        and signed before proceeding to the next phase.
      </Paragraph>

      <SubHeading>Pre-Installation Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Phase 1: Pre-Installation Verification</h4>
          <Badge variant="outline">Required before mobilization</Badge>
        </div>
        <ul className="space-y-3">
          <ChecklistItem>All permits obtained and copies on site</ChecklistItem>
          <ChecklistItem>Route survey approved by client</ChecklistItem>
          <ChecklistItem>Materials delivered and inspection completed</ChecklistItem>
          <ChecklistItem>Equipment calibration certificates valid</ChecklistItem>
          <ChecklistItem>Team safety briefing completed and documented</ChecklistItem>
          <ChecklistItem>Emergency response plan communicated</ChecklistItem>
          <ChecklistItem>Traffic management plan approved</ChecklistItem>
          <ChecklistItem>Weather forecast acceptable for work</ChecklistItem>
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Verified by:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Date:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
        </div>
      </div>

      <SubHeading>Cable Installation Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Phase 2: Cable Installation Verification</h4>
          <Badge variant="outline">Required before splicing</Badge>
        </div>
        <ul className="space-y-3">
          <ChecklistItem>Trench dimensions meet specification</ChecklistItem>
          <ChecklistItem>Duct continuity tested with mandrel</ChecklistItem>
          <ChecklistItem>Cable pulling tension within limits</ChecklistItem>
          <ChecklistItem>Minimum slack left at all access points</ChecklistItem>
          <ChecklistItem>Cable secured in figure-8 coils</ChecklistItem>
          <ChecklistItem>End caps installed on all cable ends</ChecklistItem>
          <ChecklistItem>Backfill compaction meets specification</ChecklistItem>
          <ChecklistItem>Warning tape installed at correct depth</ChecklistItem>
          <ChecklistItem>Surface reinstatement completed</ChecklistItem>
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Verified by:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Date:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
        </div>
      </div>

      <SubHeading>Testing & Acceptance Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold">Phase 3: Testing & Acceptance</h4>
          <Badge variant="outline">Required for handover</Badge>
        </div>
        <ul className="space-y-3">
          <ChecklistItem>All splices tested and within loss limits</ChecklistItem>
          <ChecklistItem>OTDR testing completed (both directions, both wavelengths)</ChecklistItem>
          <ChecklistItem>End-to-end loss within link budget</ChecklistItem>
          <ChecklistItem>ORL measurements pass specification</ChecklistItem>
          <ChecklistItem>All fibers verified to correct endpoints</ChecklistItem>
          <ChecklistItem>Enclosures properly sealed and labeled</ChecklistItem>
          <ChecklistItem>As-built documentation completed</ChecklistItem>
          <ChecklistItem>Test reports generated and reviewed</ChecklistItem>
          <ChecklistItem>Deficiency list cleared or accepted</ChecklistItem>
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">QA Inspector:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Project Manager:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
          <div>
            <p className="text-gray-500">Date:</p>
            <p className="border-b border-dotted border-gray-400 mt-2 h-6" />
          </div>
        </div>
      </div>

      <ImportantNote title="Document Retention" type="info">
        All completed checklists must be scanned and uploaded to the project document management system within 48 hours
        of completion. Original signed copies should be retained in the site document file for duration of the project.
      </ImportantNote>
    </section>

    {/* Key Takeaways */}
    <section className="mt-20 pt-10 border-t-2 border-gray-200">
      <h2 className="text-3xl font-bold mb-8">Key Takeaways</h2>

      <div className="bg-green-50 rounded-xl p-8">
        <ul className="space-y-4">
          {[
            "Thorough route survey prevents 80% of installation problems - invest time upfront",
            "Never exceed maximum pulling tension - fiber damage is permanent and expensive",
            "Cleanliness is critical for low-loss splices - treat fiber like surgical equipment",
            "Always test bidirectionally - single-direction OTDR can hide faults",
            "Document everything - good records save countless hours during maintenance",
            "Safety is non-negotiable - no deadline is worth an injury",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Version History */}
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="font-bold text-lg mb-4">Document Version History</h3>
      <div className="text-sm text-gray-600 space-y-2">
        <p>
          <strong>Version 3.2</strong> (December 2024) - Updated OTDR testing procedures, added troubleshooting section
        </p>
        <p>
          <strong>Version 3.1</strong> (August 2024) - Added micro-duct blowing procedures
        </p>
        <p>
          <strong>Version 3.0</strong> (March 2024) - Complete revision with new ITU-T references
        </p>
      </div>
    </section>
  </div>
)

// Tower Site Survey Content
const towerSiteSurveyContent = (
  <div className="prose-custom">
    {/* Introduction */}
    <section id="introduction">
      <SectionHeading id="introduction">1. Survey Overview</SectionHeading>

      <Paragraph>
        This technical guide provides comprehensive procedures for conducting telecom tower site surveys across
        Pakistan. A thorough site survey is the foundation of successful tower deployment, whether for greenfield
        installations, co-location assessments, or infrastructure upgrades.
      </Paragraph>

      <Paragraph>
        The procedures outlined here are based on Pakistan Telecommunication Authority (PTA) regulations, international
        TIA/EIA-222 tower standards, and over 15 years of experience surveying more than 8,000 tower sites across
        Pakistan's diverse terrain—from the coastal areas of Karachi to the mountainous regions of Gilgit-Baltistan.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1562408590-e32931084e23?w=1200&h=500&fit=crop"
        alt="Telecom tower against sky"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Purpose of Site Survey</SubHeading>

      <Paragraph>A comprehensive tower site survey serves multiple critical objectives:</Paragraph>

      <ul className="space-y-3 my-8">
        <ChecklistItem>Verify site suitability for proposed equipment installation</ChecklistItem>
        <ChecklistItem>Assess structural capacity for additional antenna loading</ChecklistItem>
        <ChecklistItem>Evaluate power availability and backup requirements</ChecklistItem>
        <ChecklistItem>Document RF environment and potential interference sources</ChecklistItem>
        <ChecklistItem>Identify safety hazards and mitigation requirements</ChecklistItem>
        <ChecklistItem>Establish baseline for construction cost estimation</ChecklistItem>
        <ChecklistItem>Ensure regulatory compliance with PTA and local authorities</ChecklistItem>
      </ul>

      <ImportantNote title="Engineering Disclaimer" type="warning">
        The procedures in this guide represent best practices shared for educational purposes. Actual site surveys must
        be conducted by qualified engineers following agreed terms of engagement, site-specific protocols, and Standard
        Operating Procedures (SOPs) established between HNL and the client. Engineering decisions must be made by
        licensed professionals based on actual site conditions.
      </ImportantNote>

      <SubHeading>Survey Types</SubHeading>

      <Paragraph>Different project requirements call for different survey scopes:</Paragraph>

      <StyledTable
        headers={["Survey Type", "Duration", "Team Size", "When Used"]}
        rows={[
          ["Preliminary Survey", "2-4 hours", "2 persons", "Initial site feasibility assessment"],
          ["Detailed Survey", "1-2 days", "3-4 persons", "Full engineering assessment for new build"],
          ["Co-location Survey", "4-6 hours", "2-3 persons", "Adding equipment to existing tower"],
          ["Upgrade Survey", "1 day", "3 persons", "Capacity expansion or technology upgrade"],
          ["Audit Survey", "4-8 hours", "2 persons", "Compliance verification and safety audit"],
        ]}
      />
    </section>

    {/* Pre-Survey Preparation */}
    <section id="preparation">
      <SectionHeading id="preparation">2. Pre-Survey Preparation</SectionHeading>

      <Paragraph>
        Thorough preparation before arriving at site significantly improves survey quality and reduces the need for
        follow-up visits. This chapter covers all preparatory activities that must be completed before field
        mobilization.
      </Paragraph>

      <SubHeading>Documentation Gathering</SubHeading>

      <Paragraph>Collect and review the following documents before site visit:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Required Pre-Survey Documents</h4>
        <ul className="space-y-3">
          <ChecklistItem>Site coordinates and access directions</ChecklistItem>
          <ChecklistItem>Existing tower drawings (if co-location)</ChecklistItem>
          <ChecklistItem>Previous structural analysis reports</ChecklistItem>
          <ChecklistItem>Equipment specifications for proposed installation</ChecklistItem>
          <ChecklistItem>RF design requirements (antenna heights, azimuths)</ChecklistItem>
          <ChecklistItem>Power consumption estimates for new equipment</ChecklistItem>
          <ChecklistItem>Landlord contact information and access requirements</ChecklistItem>
          <ChecklistItem>Local area map showing nearby structures and roads</ChecklistItem>
        </ul>
      </div>

      <SubHeading>Equipment Checklist</SubHeading>

      <Paragraph>Ensure the survey team carries all required equipment:</Paragraph>

      <EquipmentTable
        items={[
          { item: "GPS Device", specification: "Sub-meter accuracy", quantity: "1", notes: "For precise coordinates" },
          { item: "Laser Range Finder", specification: "100m+ range", quantity: "1", notes: "Height measurements" },
          { item: "Compass/Clinometer", specification: "Digital preferred", quantity: "1", notes: "Azimuth readings" },
          { item: "Digital Camera", specification: "12MP minimum", quantity: "1", notes: "Documentation photos" },
          { item: "Measuring Tape", specification: "50m steel tape", quantity: "2", notes: "Ground measurements" },
          { item: "Multimeter", specification: "True RMS", quantity: "1", notes: "Electrical measurements" },
          { item: "Clamp Meter", specification: "AC/DC capable", quantity: "1", notes: "Load current readings" },
          { item: "Earth Tester", specification: "3-pole method", quantity: "1", notes: "Grounding verification" },
          { item: "RF Analyzer", specification: "Band-specific", quantity: "1", notes: "Interference survey" },
          { item: "Safety Equipment", specification: "Full PPE set", quantity: "Per person", notes: "Mandatory" },
          {
            item: "Survey Forms",
            specification: "Printed templates",
            quantity: "Multiple copies",
            notes: "Backup for digital",
          },
          { item: "Laptop/Tablet", specification: "With survey software", quantity: "1", notes: "Data recording" },
        ]}
      />

      <ImportantNote title="Equipment Calibration" type="info">
        All measuring equipment must have valid calibration certificates. Earth testers and RF analyzers should be
        calibrated within the last 12 months. Maintain calibration records as part of survey documentation.
      </ImportantNote>

      <SubHeading>Team Composition</SubHeading>

      <Paragraph>A standard detailed site survey team consists of:</Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Survey Lead</h4>
          <p className="text-gray-600 text-sm mb-2">Qualifications:</p>
          <ul className="text-sm space-y-1">
            <li>• Telecom engineering degree</li>
            <li>• 3+ years tower survey experience</li>
            <li>• Certified tower climber (if climb required)</li>
            <li>• Knowledge of PTA regulations</li>
          </ul>
        </Card>
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">RF Engineer</h4>
          <p className="text-gray-600 text-sm mb-2">Qualifications:</p>
          <ul className="text-sm space-y-1">
            <li>• RF/Telecom engineering background</li>
            <li>• Experience with spectrum analyzers</li>
            <li>• Understanding of propagation models</li>
            <li>• Antenna pattern knowledge</li>
          </ul>
        </Card>
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Electrical Technician</h4>
          <p className="text-gray-600 text-sm mb-2">Qualifications:</p>
          <ul className="text-sm space-y-1">
            <li>• Electrical diploma/certification</li>
            <li>• Experience with power systems</li>
            <li>• Generator/UPS knowledge</li>
            <li>• Safety trained for electrical work</li>
          </ul>
        </Card>
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Safety Officer</h4>
          <p className="text-gray-600 text-sm mb-2">Qualifications:</p>
          <ul className="text-sm space-y-1">
            <li>• NEBOSH/IOSH certification</li>
            <li>• First aid certified</li>
            <li>• Rescue training for tower work</li>
            <li>• Incident reporting experience</li>
          </ul>
        </Card>
      </div>

      <SubHeading>Access Coordination</SubHeading>

      <Paragraph>Coordinate site access at least 48 hours before survey:</Paragraph>

      <ProcedureCard
        title="Access Coordination Steps"
        duration="1-2 days before survey"
        steps={[
          "Contact site landlord/owner to confirm visit date and time",
          "Obtain gate keys or access codes if required",
          "Confirm escort requirements for restricted areas (cantonments, airports)",
          "Notify existing tenants on tower of planned survey activities",
          "Arrange security clearance for team members if required",
          "Confirm parking arrangements for survey vehicles",
          "Obtain emergency contact numbers for site personnel",
        ]}
      />
    </section>

    {/* Structural Assessment */}
    <section id="structural">
      <SectionHeading id="structural">3. Structural Assessment</SectionHeading>

      <Paragraph>
        Structural assessment determines whether an existing tower can safely support additional equipment or if a new
        tower meets design specifications. This is a critical safety evaluation that must be conducted methodically.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1586953208270-767889db66a8?w=1200&h=500&fit=crop"
        alt="Close-up of tower steel structure"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Tower Type Identification</SubHeading>

      <Paragraph>First, identify the tower type as this determines the assessment approach:</Paragraph>

      <StyledTable
        headers={["Tower Type", "Height Range", "Common Use", "Key Assessment Points"]}
        rows={[
          ["Greenfield Monopole", "20-45m", "Urban sites", "Foundation condition, pole verticality, baseplate"],
          ["Self-Supporting Tower (SST)", "30-100m", "Suburban/rural", "Leg members, bracing, foundations, anchors"],
          ["Guyed Mast", "50-150m+", "Rural/broadcast", "Guy wire tension, anchor blocks, mast sections"],
          ["Rooftop Tower (RTT)", "6-15m", "Buildings", "Building structural capacity, mounting, waterproofing"],
          ["Camouflage Tower", "15-35m", "Urban/sensitive", "Concealment integrity, internal structure access"],
        ]}
      />

      <SubHeading>Visual Inspection Procedure</SubHeading>

      <Paragraph>Conduct a systematic visual inspection from ground level before any climbing activities:</Paragraph>

      <StepBox number={1} title="Foundation Inspection">
        <p className="mb-4">Examine the tower foundation for signs of distress:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Cracks in concrete (note location, width, direction)
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Exposed reinforcement or anchor bolts
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Settlement or tilting visible at base
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Standing water or poor drainage around foundation
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Soil erosion undermining foundation
          </li>
        </ul>
      </StepBox>

      <StepBox number={2} title="Steel Member Inspection">
        <p className="mb-4">Inspect all visible steel members for:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Corrosion levels (surface rust vs. section loss)
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Bent or damaged members
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Missing or loose bolts at connections
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Paint condition and galvanizing integrity
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Weld quality at critical joints
          </li>
        </ul>
      </StepBox>

      <StepBox number={3} title="Verticality Check">
        <p className="mb-4">Measure tower plumbness using theodolite or digital inclinometer:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Acceptable deviation: Maximum 0.25% of tower height
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            For a 40m tower: Maximum 100mm (10cm) deviation at top
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Take readings from at least two perpendicular directions
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Document any twist or rotation in tower sections
          </li>
        </ul>
      </StepBox>

      <ImportantNote title="Critical Safety Issue" type="danger">
        If foundation cracking exceeds 3mm width, visible settlement exists, or steel section loss exceeds 10%,
        immediately flag the site as requiring structural engineering evaluation before any equipment installation. Do
        not proceed with loading assessment until structural integrity is confirmed.
      </ImportantNote>

      <SubHeading>Loading Assessment</SubHeading>

      <Paragraph>Document all existing equipment on the tower to assess remaining capacity:</Paragraph>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-red-600" />
          Equipment Loading Inventory
        </h4>
        <p className="text-gray-600 mb-4">Record for each antenna/equipment:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <ChecklistItem>Equipment type and model</ChecklistItem>
            <ChecklistItem>Mounting height (AGL)</ChecklistItem>
            <ChecklistItem>Physical dimensions (H x W x D)</ChecklistItem>
            <ChecklistItem>Weight (with mounting bracket)</ChecklistItem>
            <ChecklistItem>Wind load area (EPA)</ChecklistItem>
          </ul>
          <ul className="space-y-2">
            <ChecklistItem>Azimuth orientation</ChecklistItem>
            <ChecklistItem>Tilt angle (if applicable)</ChecklistItem>
            <ChecklistItem>Feeder cable size and quantity</ChecklistItem>
            <ChecklistItem>Mounting bracket type</ChecklistItem>
            <ChecklistItem>Operator/tenant identification</ChecklistItem>
          </ul>
        </div>
      </div>

      <SubHeading>Structural Capacity Calculation</SubHeading>

      <Paragraph>
        For preliminary capacity assessment, use the following guidelines specific to Pakistan's wind zones:
      </Paragraph>

      <StyledTable
        headers={["Pakistan Region", "Basic Wind Speed", "Design Category", "Safety Factor"]}
        rows={[
          ["Coastal (Karachi, Gwadar)", "47 m/s (170 km/h)", "Severe", "1.5"],
          ["Plain Areas (Punjab, Sindh Interior)", "39 m/s (140 km/h)", "Moderate", "1.4"],
          ["Northern Areas (KPK, AJK)", "44 m/s (158 km/h)", "High", "1.5"],
          ["Mountainous (Gilgit, Chitral)", "47 m/s (170 km/h)", "Severe", "1.6"],
        ]}
      />

      <ImportantNote title="Professional Analysis Required" type="warning">
        Field survey loading assessment is for preliminary screening only. Any tower with proposed loading exceeding 70%
        of original design capacity must undergo formal structural analysis by a licensed structural engineer using
        current TIA-222-H or equivalent standards.
      </ImportantNote>
    </section>

    {/* Electrical Evaluation */}
    <section id="electrical">
      <SectionHeading id="electrical">4. Electrical Evaluation</SectionHeading>

      <Paragraph>
        Electrical evaluation ensures the site can support power requirements for new equipment and meets safety
        standards. This assessment covers grid connection, backup power, grounding, and surge protection systems.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=500&fit=crop"
        alt="Electrical distribution panel"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Grid Power Assessment</SubHeading>

      <Paragraph>Evaluate the main power supply to the site:</Paragraph>

      <ProcedureCard
        title="Grid Power Evaluation Steps"
        duration="30-45 minutes"
        steps={[
          "Verify WAPDA/K-Electric connection and sanctioned load",
          "Measure incoming voltage (should be 380-420V three-phase)",
          "Check voltage balance across all three phases (max 5% deviation)",
          "Record current load on each phase during peak operation",
          "Inspect main breaker and distribution panel condition",
          "Verify metering is functional and accessible for reading",
          "Check power factor (should be above 0.85)",
          "Document any voltage fluctuation history from site personnel",
        ]}
      />

      <StyledTable
        headers={["Parameter", "Acceptable Range", "Action if Outside Range"]}
        rows={[
          ["Phase Voltage", "380-420V", "Report to utility, consider voltage stabilizer"],
          ["Voltage Imbalance", "Less than 5%", "Balance loads, check connections"],
          ["Frequency", "49.5-50.5 Hz", "Report to utility (grid issue)"],
          ["Power Factor", "Greater than 0.85", "Install capacitor bank"],
          ["THD (Harmonics)", "Less than 8%", "Add harmonic filters"],
        ]}
      />

      <SubHeading>Backup Power Assessment</SubHeading>

      <Paragraph>Assess existing backup power systems and capacity for additional load:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Generator Inspection Checklist</h4>
        <ul className="space-y-3">
          <ChecklistItem>Generator make, model, and rated capacity (kVA)</ChecklistItem>
          <ChecklistItem>Current loading (measure with clamp meter)</ChecklistItem>
          <ChecklistItem>Fuel type and tank capacity</ChecklistItem>
          <ChecklistItem>Auto-start functionality test</ChecklistItem>
          <ChecklistItem>Transfer switch condition and rating</ChecklistItem>
          <ChecklistItem>Last service date and maintenance records</ChecklistItem>
          <ChecklistItem>Fuel consumption rate and autonomy calculation</ChecklistItem>
          <ChecklistItem>Exhaust system and noise levels</ChecklistItem>
        </ul>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Battery/UPS Inspection Checklist</h4>
        <ul className="space-y-3">
          <ChecklistItem>UPS make, model, and capacity (kVA)</ChecklistItem>
          <ChecklistItem>Battery bank configuration (voltage, Ah)</ChecklistItem>
          <ChecklistItem>Battery age and replacement date</ChecklistItem>
          <ChecklistItem>Backup time at current load (test or calculate)</ChecklistItem>
          <ChecklistItem>Battery room ventilation adequacy</ChecklistItem>
          <ChecklistItem>Charging system condition</ChecklistItem>
          <ChecklistItem>Individual cell voltage readings (for VRLA banks)</ChecklistItem>
        </ul>
      </div>

      <SubHeading>Grounding System Evaluation</SubHeading>

      <Paragraph>
        Proper grounding is critical for equipment protection and personnel safety. Measure and document:
      </Paragraph>

      <StepBox number={1} title="Earth Resistance Measurement">
        <p className="mb-4">Using 3-pole fall of potential method:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Tower base earth: Must be less than 5 ohms
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Equipment shelter earth: Must be less than 5 ohms
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Combined earth system: Must be less than 2 ohms (preferred)
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Take readings during dry season for worst-case values
          </li>
        </ul>
      </StepBox>

      <StepBox number={2} title="Bonding Verification">
        <p className="mb-4">Verify equipotential bonding:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Tower legs bonded to earth ring
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Equipment racks bonded to master ground bar
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Feeder cable shields grounded at both ends
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
            Fence grounded and isolated from tower earth
          </li>
        </ul>
      </StepBox>

      <ImportantNote title="Pakistan Soil Conditions" type="info">
        Earth resistance values vary significantly across Pakistan. Rocky terrain in northern areas may require chemical
        earthing or extensive electrode arrays. Coastal areas with high water tables typically achieve lower resistance
        but require corrosion-resistant electrodes. Always specify soil resistivity testing for new installations.
      </ImportantNote>

      <SubHeading>Surge Protection Audit</SubHeading>

      <Paragraph>Verify lightning and surge protection systems:</Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Lightning Protection</h4>
          <ul className="text-sm space-y-2">
            <ChecklistItem>Air terminals on tower top</ChecklistItem>
            <ChecklistItem>Down conductors (minimum 2 paths)</ChecklistItem>
            <ChecklistItem>Strike counter (if installed)</ChecklistItem>
            <ChecklistItem>Aviation warning lights grounded</ChecklistItem>
          </ul>
        </Card>
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Surge Protection Devices</h4>
          <ul className="text-sm space-y-2">
            <ChecklistItem>AC SPD at main panel (Type 1+2)</ChecklistItem>
            <ChecklistItem>DC SPD at rectifier output</ChecklistItem>
            <ChecklistItem>Coaxial SPDs on all feeders</ChecklistItem>
            <ChecklistItem>Data line protection on telecom cables</ChecklistItem>
          </ul>
        </Card>
      </div>
    </section>

    {/* RF Survey */}
    <section id="rf-survey">
      <SectionHeading id="rf-survey">5. RF Survey</SectionHeading>

      <Paragraph>
        The RF survey documents the radio frequency environment at the site, identifies potential interference sources,
        and validates the proposed antenna configuration. This is essential for network planning and regulatory
        compliance.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=500&fit=crop"
        alt="Antenna array on tower"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Existing Antenna Documentation</SubHeading>

      <Paragraph>Create a detailed inventory of all antennas on the tower:</Paragraph>

      <EquipmentTable
        items={[
          { item: "Antenna Type", specification: "Panel/Omni/Parabolic/Other", quantity: "-", notes: "Identify each" },
          { item: "Band/Technology", specification: "900/1800/2100/2600 MHz", quantity: "-", notes: "Per operator" },
          { item: "Height AGL", specification: "Measure with laser", quantity: "-", notes: "Center of antenna" },
          { item: "Azimuth", specification: "Compass reading", quantity: "-", notes: "All three sectors" },
          { item: "Mechanical Tilt", specification: "Degrees downtilt", quantity: "-", notes: "Bracket setting" },
          { item: "Electrical Tilt", specification: "RET setting", quantity: "-", notes: "If accessible" },
        ]}
      />

      <SubHeading>Interference Assessment</SubHeading>

      <Paragraph>Scan the RF environment for potential interference sources:</Paragraph>

      <ProcedureCard
        title="RF Interference Survey"
        duration="1-2 hours"
        steps={[
          "Configure spectrum analyzer for bands of interest",
          "Scan from ground level in all directions (0°, 90°, 180°, 270°)",
          "Scan at proposed antenna mounting height (if accessible)",
          "Identify and log all signals above noise floor",
          "Note any unusual spurious emissions or interference patterns",
          "Document nearby RF sources (other towers, broadcast stations, radar)",
          "Measure ambient noise floor in target bands",
          "Compare with acceptable interference thresholds",
        ]}
      />

      <StyledTable
        headers={["Frequency Band", "Typical Use in Pakistan", "Interference Threshold"]}
        rows={[
          ["700 MHz", "4G/LTE (APT700)", "-110 dBm"],
          ["850 MHz", "CDMA legacy", "-108 dBm"],
          ["900 MHz", "GSM/2G/4G", "-108 dBm"],
          ["1800 MHz", "GSM/4G", "-105 dBm"],
          ["2100 MHz", "3G/UMTS", "-105 dBm"],
          ["2300 MHz", "4G TDD", "-103 dBm"],
          ["2600 MHz", "4G FDD", "-103 dBm"],
        ]}
      />

      <SubHeading>Line of Sight Verification</SubHeading>

      <Paragraph>For microwave links, verify clear line of sight to far-end:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">LOS Survey Checklist</h4>
        <ul className="space-y-3">
          <ChecklistItem>Confirm far-end coordinates and antenna height</ChecklistItem>
          <ChecklistItem>Calculate Fresnel zone clearance requirements</ChecklistItem>
          <ChecklistItem>Visual confirmation using binoculars/telescope</ChecklistItem>
          <ChecklistItem>Photograph far-end site from proposed mount position</ChecklistItem>
          <ChecklistItem>Document any obstructions (buildings, trees, terrain)</ChecklistItem>
          <ChecklistItem>Note potential future obstructions (construction, tree growth)</ChecklistItem>
          <ChecklistItem>Record atmospheric conditions during survey</ChecklistItem>
        </ul>
      </div>

      <ImportantNote title="Seasonal Considerations" type="warning">
        In agricultural areas of Punjab and Sindh, consider seasonal vegetation that may obstruct microwave paths. Sugar
        cane and wheat crops can grow to 3-4 meters. Design links with adequate fade margin or conduct surveys during
        peak growth season.
      </ImportantNote>
    </section>

    {/* Documentation */}
    <section id="documentation">
      <SectionHeading id="documentation">6. Documentation</SectionHeading>

      <Paragraph>
        Comprehensive documentation is the tangible output of the site survey. Proper documentation enables accurate
        engineering design, cost estimation, and serves as a baseline for future reference.
      </Paragraph>

      <SubHeading>Photography Requirements</SubHeading>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <Card className="p-4">
          <h5 className="font-bold text-sm mb-2">General Site Views</h5>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>• Site entrance and access road</li>
            <li>• Panoramic view (4 directions)</li>
            <li>• Tower full height view</li>
            <li>• Compound overview</li>
            <li>• Surrounding area (500m radius)</li>
          </ul>
        </Card>
        <Card className="p-4">
          <h5 className="font-bold text-sm mb-2">Structural Details</h5>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>• Foundation close-up</li>
            <li>• Base section and anchor bolts</li>
            <li>• Each tower section joint</li>
            <li>• Any damage or corrosion</li>
            <li>• Guy wire anchors (if applicable)</li>
          </ul>
        </Card>
        <Card className="p-4">
          <h5 className="font-bold text-sm mb-2">Equipment & Electrical</h5>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>• Main electrical panel</li>
            <li>• Generator and fuel tank</li>
            <li>• Battery bank/UPS</li>
            <li>• Earth bar and connections</li>
            <li>• All installed antennas</li>
          </ul>
        </Card>
      </div>

      <SubHeading>Survey Report Structure</SubHeading>

      <Paragraph>The final survey report must include the following sections:</Paragraph>

      <StyledTable
        headers={["Section", "Contents", "Responsibility"]}
        rows={[
          ["Executive Summary", "Key findings, recommendations, go/no-go decision", "Survey Lead"],
          ["Site Information", "Location, coordinates, access, landlord details", "Survey Lead"],
          ["Structural Assessment", "Tower type, condition, loading, capacity analysis", "Survey Lead"],
          ["Electrical Assessment", "Power supply, backup, grounding, protection", "Electrical Tech"],
          ["RF Assessment", "Antenna inventory, interference, LOS verification", "RF Engineer"],
          ["Safety Assessment", "Hazards identified, mitigation requirements", "Safety Officer"],
          ["Photo Documentation", "Indexed photos with annotations", "All team members"],
          ["Checklists", "Completed and signed inspection forms", "Survey Lead"],
          ["Recommendations", "Required works, estimated costs, timeline", "Survey Lead"],
        ]}
      />

      <ImportantNote title="Report Turnaround" type="info">
        Survey reports should be completed within 5 working days of site visit. For urgent projects, preliminary
        findings can be communicated within 24 hours with the full report to follow. All reports require technical
        review before client submission.
      </ImportantNote>
    </section>

    {/* Safety Considerations */}
    <section id="safety">
      <SectionHeading id="safety">7. Safety Considerations</SectionHeading>

      <Paragraph>
        Safety is non-negotiable in all survey activities. This chapter outlines the minimum safety requirements that
        must be followed during every site survey, regardless of survey type or site conditions.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop"
        alt="Safety equipment and PPE"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Mandatory PPE Requirements</SubHeading>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
        <h4 className="font-bold text-red-800 mb-4">Required Personal Protective Equipment</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <ChecklistItem>Safety helmet (ANSI Z89.1 rated)</ChecklistItem>
            <ChecklistItem>High-visibility vest (Class 2 minimum)</ChecklistItem>
            <ChecklistItem>Safety boots (steel toe, EH rated)</ChecklistItem>
            <ChecklistItem>Safety glasses (ANSI Z87.1)</ChecklistItem>
          </ul>
          <ul className="space-y-2">
            <ChecklistItem>Work gloves (task appropriate)</ChecklistItem>
            <ChecklistItem>Hearing protection (if generator running)</ChecklistItem>
            <ChecklistItem>Sun protection (hat, sunscreen)</ChecklistItem>
            <ChecklistItem>First aid kit (team minimum)</ChecklistItem>
          </ul>
        </div>
      </div>

      <SubHeading>Tower Climbing Safety</SubHeading>

      <Paragraph>If tower climbing is required during survey:</Paragraph>

      <ProcedureCard
        title="Pre-Climb Safety Checklist"
        duration="15-20 minutes"
        steps={[
          "Verify climber certification is current (within 12 months)",
          "Conduct equipment inspection (harness, lanyards, connectors)",
          "Check weather conditions (no climbing if wind speed exceeds 35 km/h)",
          "Brief rescue plan and ensure rescue-capable person on ground",
          "Establish communication method (radio or voice)",
          "Verify RF hazard status (reduce power if required)",
          "Complete climb permit documentation",
          "Identify fall zones and establish exclusion area",
        ]}
      />

      <ImportantNote title="RF Radiation Safety" type="danger">
        Never climb into RF hazard zones without power reduction coordination. Exposure to high RF levels can cause
        serious injury. Always verify that all operators have reduced power or that exclusion distances are maintained.
        Use personal RF monitors when working near active antennas.
      </ImportantNote>

      <SubHeading>Electrical Safety</SubHeading>

      <Paragraph>When conducting electrical assessments:</Paragraph>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <h4 className="font-bold mb-4">Electrical Safety Rules</h4>
        <ul className="space-y-3">
          <ChecklistItem>Only qualified personnel may open electrical panels</ChecklistItem>
          <ChecklistItem>Use insulated tools rated for working voltage</ChecklistItem>
          <ChecklistItem>Never work on live circuits - always isolate first</ChecklistItem>
          <ChecklistItem>Test before touch - verify de-energized state</ChecklistItem>
          <ChecklistItem>Maintain safe distances from exposed conductors</ChecklistItem>
          <ChecklistItem>Use appropriate PPE (insulated gloves, face shield)</ChecklistItem>
          <ChecklistItem>Never work alone on electrical systems</ChecklistItem>
        </ul>
      </div>

      <SubHeading>Emergency Procedures</SubHeading>

      <Paragraph>All team members must know emergency procedures before survey begins:</Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Emergency Contacts</h4>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Rescue:</strong> 1122 (Pakistan Emergency)
            </li>
            <li>
              <strong>Police:</strong> 15
            </li>
            <li>
              <strong>Fire:</strong> 16
            </li>
            <li>
              <strong>HNL Emergency:</strong> Document before survey
            </li>
            <li>
              <strong>Nearest Hospital:</strong> Identify before survey
            </li>
          </ul>
        </Card>
        <Card className="p-6 border-l-4 border-l-red-600">
          <h4 className="font-bold mb-3">Emergency Actions</h4>
          <ul className="text-sm space-y-2">
            <li>1. Ensure scene safety</li>
            <li>2. Call for help immediately</li>
            <li>3. Provide first aid if trained</li>
            <li>4. Preserve evidence</li>
            <li>5. Report to HNL safety team</li>
          </ul>
        </Card>
      </div>
    </section>

    {/* Master Checklists */}
    <section id="checklists">
      <SectionHeading id="checklists">8. Master Checklists</SectionHeading>

      <Paragraph>
        The following checklists should be printed and completed on-site during every survey. Signed checklists must be
        included as appendices to the survey report.
      </Paragraph>

      <SubHeading>Pre-Survey Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 my-8 print:break-inside-avoid">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="font-bold text-lg">PRE-SURVEY CHECKLIST</h4>
            <p className="text-sm text-gray-500">Complete before site mobilization</p>
          </div>
          <div className="text-right text-sm">
            <p>Site ID: _____________</p>
            <p>Date: _____________</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Site coordinates and access directions confirmed</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Existing tower drawings reviewed (if applicable)</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Equipment specifications received from client</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Survey equipment inspected and calibrated</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Site access coordinated with landlord/operator</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Team briefed on scope and safety requirements</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>PPE available for all team members</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Emergency contacts and nearest hospital identified</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">Survey Lead Signature</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>

      <SubHeading>Structural Assessment Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 my-8 print:break-inside-avoid">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="font-bold text-lg">STRUCTURAL ASSESSMENT CHECKLIST</h4>
            <p className="text-sm text-gray-500">Complete during site survey</p>
          </div>
          <div className="text-right text-sm">
            <p>Site ID: _____________</p>
            <p>Tower Type: _____________</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Foundation visual inspection completed - no cracks exceeding 3mm</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Steel members inspected - no section loss exceeding 10%</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Bolt connections checked - no missing or loose bolts</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Tower verticality measured - within 0.25% tolerance</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Climbing facilities inspected - safe for use</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>All existing equipment inventoried with heights and weights</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Guy wires checked (if applicable) - proper tension</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Photos taken of all structural elements</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <p className="font-semibold mb-2">Structural Assessment Result:</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-gray-400 rounded"></span>
              <span>PASS - Suitable for proposed loading</span>
            </label>
            <label className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-gray-400 rounded"></span>
              <span>REFER - Requires structural analysis</span>
            </label>
            <label className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-gray-400 rounded"></span>
              <span>FAIL - Not suitable</span>
            </label>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">Surveyor Signature</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>

      <SubHeading>Electrical Assessment Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 my-8 print:break-inside-avoid">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="font-bold text-lg">ELECTRICAL ASSESSMENT CHECKLIST</h4>
            <p className="text-sm text-gray-500">Complete during site survey</p>
          </div>
          <div className="text-right text-sm">
            <p>Site ID: _____________</p>
            <p>Date: _____________</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Grid voltage measured: R-Y: ___V, Y-B: ___V, B-R: ___V</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Voltage imbalance calculated: ____% (must be less than 5%)</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Generator capacity: ____kVA, Current load: ____kW</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Battery backup time tested/calculated: ____ hours</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Earth resistance measured: Tower: ____Ω, Shelter: ____Ω</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Surge protection devices inspected and functional</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Available spare capacity identified: ____kW</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <p className="font-semibold mb-2">Electrical Assessment Result:</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-gray-400 rounded"></span>
              <span>PASS - Adequate for proposed load</span>
            </label>
            <label className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-gray-400 rounded"></span>
              <span>UPGRADE - Requires power enhancement</span>
            </label>
            <label className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-gray-400 rounded"></span>
              <span>FAIL - Major remediation needed</span>
            </label>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">Electrical Technician Signature</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>

      <SubHeading>Survey Completion Checklist</SubHeading>

      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 my-8 print:break-inside-avoid">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="font-bold text-lg">SURVEY COMPLETION CHECKLIST</h4>
            <p className="text-sm text-gray-500">Complete before leaving site</p>
          </div>
          <div className="text-right text-sm">
            <p>Site ID: _____________</p>
            <p>Date: _____________</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>All required photographs captured and backed up</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>GPS coordinates recorded for all key points</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>All checklists completed and signed</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Measurement data verified for accuracy</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Site secured and landlord notified of departure</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>No equipment or materials left on site</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
          <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center border-b pb-2">
            <span className="w-6 h-6 border-2 border-gray-400 rounded"></span>
            <span>Preliminary findings communicated to project manager</span>
            <span className="text-gray-400 text-sm">Init: ___</span>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t">
          <p className="font-semibold mb-4">Survey Team Sign-Off:</p>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Survey Lead</p>
              <div className="border-b border-gray-400 h-8 mb-2"></div>
              <p className="text-xs text-gray-400">Name & Signature</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">RF Engineer</p>
              <div className="border-b border-gray-400 h-8 mb-2"></div>
              <p className="text-xs text-gray-400">Name & Signature</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Electrical Tech</p>
              <div className="border-b border-gray-400 h-8 mb-2"></div>
              <p className="text-xs text-gray-400">Name & Signature</p>
            </div>
          </div>
        </div>
      </div>

      <ImportantNote title="Document Retention" type="info">
        All completed survey checklists must be retained for a minimum of 7 years as per quality management
        requirements. Digital copies should be stored in the project document management system within 48 hours of
        survey completion.
      </ImportantNote>
    </section>
  </div>
)

// Hybrid Power System Content
const hybridPowerSystemContent = (
  <div className="space-y-16">
    {/* Chapter 1: Introduction */}
    <section id="introduction">
      <SectionHeading>Chapter 1: Introduction to Hybrid Power Systems</SectionHeading>
      <Paragraph>
        Hybrid power systems combine multiple energy sources—typically solar PV, battery storage, and diesel
        generators—to provide reliable, cost-effective power for telecom sites, industrial facilities, and remote
        installations across Pakistan.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop"
        alt="Hybrid power system installation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <ImportantQuote
        quote="Hybrid systems have reduced our operational costs by 45% while improving site uptime to 99.9%. The ROI was achieved in under 3 years."
        author="Energy Director, Major Telecom Operator"
      />
      <SubHeading>System Benefits</SubHeading>
      <BulletList
        items={[
          "Fuel cost reduction of 40-70% compared to diesel-only systems",
          "Extended generator life through reduced runtime hours",
          "Lower carbon emissions and environmental compliance",
          "Improved reliability with multiple power sources",
          "Remote monitoring and intelligent load management",
          "Scalable design to accommodate future growth",
        ]}
      />
    </section>

    {/* Chapter 2: Load Analysis */}
    <section id="load-analysis">
      <SectionHeading>Chapter 2: Load Analysis</SectionHeading>
      <Paragraph>
        Accurate load analysis is the foundation of hybrid system design. Underestimating loads leads to system
        failures, while overestimating increases capital costs unnecessarily.
      </Paragraph>
      <SubHeading>Load Classification</SubHeading>
      <StyledTable
        headers={["Load Type", "Examples", "Priority", "Typical Power"]}
        rows={[
          ["Critical", "BTS, transmission, core network", "Highest", "2-5 kW per site"],
          ["Essential", "Cooling, security, lighting", "High", "1-3 kW"],
          ["Non-Essential", "Office equipment, convenience", "Low", "0.5-1 kW"],
          ["Intermittent", "Battery charging, maintenance", "Variable", "0.5-2 kW"],
        ]}
      />
      <SubHeading>Load Calculation Formula</SubHeading>
      <PricingExplanation
        title="Daily Energy Consumption"
        items={[
          { label: "Total Connected Load", value: "Sum of all equipment ratings (kW)" },
          { label: "Diversity Factor", value: "0.7-0.9 (accounts for non-simultaneous operation)" },
          { label: "Operating Hours", value: "24 hours for critical loads" },
          { label: "Daily Energy (kWh)", value: "Connected Load × Diversity × Hours" },
          { label: "Design Margin", value: "Add 20% for future growth" },
        ]}
      />
      <ImportantNote type="info">
        For Pakistan's climate, add 15-25% to cooling loads during summer months (April-September) when ambient
        temperatures exceed 40°C.
      </ImportantNote>
    </section>

    {/* Chapter 3: Solar Sizing */}
    <section id="solar-sizing">
      <SectionHeading>Chapter 3: Solar System Sizing</SectionHeading>
      <Paragraph>
        Pakistan receives excellent solar irradiation averaging 5-7 kWh/m²/day, making solar PV an ideal primary energy
        source for hybrid systems.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=400&fit=crop"
        alt="Solar panel installation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>Regional Solar Irradiation</SubHeading>
      <StyledTable
        headers={["Region", "Peak Sun Hours", "Annual Yield", "Best Months"]}
        rows={[
          ["Balochistan", "6.5-7.0", "1,800-2,000 kWh/kWp", "March-October"],
          ["Sindh", "5.5-6.5", "1,600-1,800 kWh/kWp", "February-November"],
          ["Punjab", "5.0-6.0", "1,500-1,700 kWh/kWp", "March-October"],
          ["KPK", "4.5-5.5", "1,400-1,600 kWh/kWp", "April-September"],
          ["Northern Areas", "4.0-5.0", "1,200-1,500 kWh/kWp", "May-August"],
        ]}
      />
      <SubHeading>Panel Selection Criteria</SubHeading>
      <BulletList
        items={[
          "Tier-1 manufacturers with proven track record",
          "Monocrystalline panels for higher efficiency in limited space",
          "Temperature coefficient below -0.35%/°C for Pakistan's hot climate",
          "PID-free certification for grid-connected systems",
          "25-year performance warranty with local support",
          "IP67 junction box rating for dust and moisture protection",
        ]}
      />
    </section>

    {/* Chapter 4: Battery Sizing */}
    <section id="battery-sizing">
      <SectionHeading>Chapter 4: Battery Bank Sizing</SectionHeading>
      <Paragraph>
        Battery storage provides backup power during grid outages and nighttime operation. Proper sizing ensures
        adequate autonomy without excessive capital investment.
      </Paragraph>
      <SubHeading>Battery Technology Comparison</SubHeading>
      <StyledTable
        headers={["Technology", "Cycle Life", "DoD", "Cost/kWh", "Best For"]}
        rows={[
          ["Lithium LFP", "4,000-6,000", "80-90%", "25-35K PKR", "High-cycle applications"],
          ["Lithium NMC", "2,000-3,000", "80%", "22-30K PKR", "Space-constrained sites"],
          ["Lead-Acid AGM", "500-800", "50%", "12-18K PKR", "Low-budget projects"],
          ["Lead-Acid Gel", "800-1,200", "50%", "15-22K PKR", "High-temperature sites"],
          ["Lead-Acid Tubular", "1,200-1,500", "60%", "10-15K PKR", "Cost-sensitive applications"],
        ]}
      />
      <SubHeading>Autonomy Calculation</SubHeading>
      <PricingExplanation
        title="Battery Capacity Sizing"
        items={[
          { label: "Daily Energy Requirement", value: "From load analysis (kWh)" },
          { label: "Autonomy Required", value: "4-8 hours typical for telecom" },
          { label: "Depth of Discharge", value: "50% for lead-acid, 80% for lithium" },
          { label: "Temperature Derating", value: "10-15% for hot climates" },
          { label: "Aging Factor", value: "20% capacity loss over life" },
        ]}
      />
      <ImportantNote title="Temperature Impact" type="warning">
        Always install batteries in climate-controlled enclosures. Operating temperatures above 35°C significantly
        reduce battery life.
      </ImportantNote>
    </section>

    {/* Chapter 5: Generator Selection */}
    <section id="generator-sizing">
      <SectionHeading>Chapter 5: Generator Selection</SectionHeading>
      <Paragraph>
        The diesel generator serves as the backup power source when solar and battery cannot meet demand. Proper sizing
        ensures efficient operation and long service life.
      </Paragraph>
      <SubHeading>Generator Sizing Guidelines</SubHeading>
      <BulletList
        items={[
          "Size for 60-80% loading at peak demand for optimal efficiency",
          "Consider battery charging load in addition to site load",
          "Account for altitude derating (3% per 300m above sea level)",
          "Select variable speed generators for hybrid applications",
          "Ensure compatibility with hybrid controller protocols",
          "Specify low fuel consumption models (below 0.3L/kWh)",
        ]}
      />
      <StyledTable
        headers={["Site Load", "Recommended Generator", "Fuel Tank", "Runtime"]}
        rows={[
          ["Up to 5 kW", "10 kVA", "100L", "20+ hours"],
          ["5-10 kW", "15-20 kVA", "150L", "15+ hours"],
          ["10-20 kW", "30 kVA", "200L", "12+ hours"],
          ["20-50 kW", "60 kVA", "400L", "10+ hours"],
          ["50+ kW", "100+ kVA", "500L+", "8+ hours"],
        ]}
      />
    </section>

    {/* Chapter 6: System Integration */}
    <section id="integration">
      <SectionHeading>Chapter 6: System Integration</SectionHeading>
      <Paragraph>
        The hybrid controller is the brain of the system, managing power flow between solar, battery, generator, and
        loads based on programmed logic and real-time conditions.
      </Paragraph>
      <SubHeading>Controller Features</SubHeading>
      <BulletList
        items={[
          "MPPT solar charge controller with 98%+ efficiency",
          "Automatic source selection based on availability and cost",
          "Generator auto-start based on battery SOC thresholds",
          "Load shedding capability for non-critical loads",
          "Remote monitoring via GSM/Ethernet connectivity",
          "Data logging for performance analysis",
        ]}
      />
    </section>

    {/* Chapter 7: Installation Guide */}
    <section id="installation">
      <SectionHeading>Chapter 7: Installation Guide</SectionHeading>
      <Paragraph>
        Proper installation of components is critical for system safety and performance. Follow these guidelines for all
        hybrid power system installations.
      </Paragraph>
      <SubHeading>Component Mounting</SubHeading>
      <BulletList
        items={[
          "Mount solar panels on robust, wind-rated structures",
          "Install batteries in well-ventilated enclosures",
          "Secure generator set on anti-vibration pads",
          "Ensure adequate clearance around all components for maintenance",
        ]}
      />
      <SubHeading>Wiring and Cabling</SubHeading>
      <BulletList
        items={[
          "Use appropriately sized DC and AC cables",
          "Ensure all connections are torqued to specification",
          "Maintain proper separation between DC and AC wiring",
          "Label all cables clearly",
        ]}
      />
    </section>

    {/* Chapter 8: Commissioning */}
    <section id="commissioning">
      <SectionHeading>Chapter 8: Commissioning Procedures</SectionHeading>
      <Paragraph>
        Commissioning verifies that the system is installed correctly and operates as designed before handing over to
        operations.
      </Paragraph>
      <SubHeading>Pre-Commissioning Checks</SubHeading>
      <BulletList
        items={[
          "Verify all installations comply with design drawings",
          "Confirm all safety checks are completed",
          "Test all manual overrides and controls",
        ]}
      />
    </section>

    {/* Chapter 9: Monitoring Setup */}
    <section id="monitoring">
      <SectionHeading>Chapter 9: Monitoring Setup</SectionHeading>
      <Paragraph>
        Remote monitoring systems allow for real-time performance tracking, fault detection, and optimization of hybrid
        power systems.
      </Paragraph>
      <SubHeading>Monitoring Parameters</SubHeading>
      <BulletList
        items={[
          "Solar PV generation (kW, kWh)",
          "Battery State of Charge (SoC) and Voltage",
          "Generator runtime and fuel level",
          "Site load demand (kW)",
          "System alarms and fault codes",
        ]}
      />
    </section>

    {/* Chapter 10: Maintenance Schedule */}
    <section id="maintenance">
      <SectionHeading>Chapter 10: Maintenance Schedule</SectionHeading>
      <Paragraph>Regular preventive maintenance is crucial for maximizing system lifespan and reliability.</Paragraph>
      <SubHeading>Maintenance Tasks</SubHeading>
      <StyledTable
        headers={["Frequency", "Tasks"]}
        rows={[
          ["Daily", "Check system status via remote monitoring"],
          ["Monthly", "Inspect solar panels for dirt/damage, check battery terminals"],
          ["Quarterly", "Test generator auto-start, check fuel quality"],
          ["Annually", "Full system performance test, battery health check"],
        ]}
      />
    </section>

    {/* Chapter 11: Troubleshooting */}
    <section id="troubleshooting">
      <SectionHeading>Chapter 11: Troubleshooting Common Issues</SectionHeading>
      <TroubleshootingItem
        problem="Low solar generation"
        cause="Panel shading, dirt, or component failure"
        solution="Clean panels, inspect wiring, test charge controller"
      />
      <TroubleshootingItem
        problem="Generator not starting"
        cause="Low fuel, battery fault, or control system issue"
        solution="Check fuel level, verify battery voltage, inspect control panel"
      />
      <TroubleshootingItem
        problem="System capacity insufficient"
        cause="Underestimated load or component degradation"
        solution="Re-evaluate load profile, check component performance, consider system expansion"
      />
    </section>

    {/* Chapter 12: Safety Guidelines */}
    <section id="safety">
      <SectionHeading>Chapter 12: Safety Guidelines</SectionHeading>
      <Paragraph>Safety must be prioritized during all installation, maintenance, and operation activities.</Paragraph>
      <ImportantNote type="danger">
        Always follow electrical safety procedures. Wear appropriate PPE and ensure proper grounding.
      </ImportantNote>
    </section>

    {/* Chapter 13: ROI Calculations */}
    <section id="roi">
      <SectionHeading>Chapter 13: Return on Investment (ROI) Calculations</SectionHeading>
      <Paragraph>
        Hybrid systems offer significant cost savings over time. Accurate ROI analysis is essential for project
        approval.
      </Paragraph>
      <PricingExplanation
        title="ROI Calculation Components"
        items={[
          { label: "Capital Expenditure (CAPEX)", value: "Initial system cost" },
          { label: "Operational Expenditure (OPEX)", value: "Fuel, maintenance, repairs" },
          { label: "Savings", value: "Reduced diesel consumption" },
          { label: "Payback Period", value: "CAPEX / Annual Savings" },
        ]}
      />
    </section>

    {/* Chapter 14: Design Checklists */}
    <section id="checklists">
      <SectionHeading>Chapter 14: Design Checklists</SectionHeading>
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 my-8">
        <h4 className="text-xl font-bold mb-6">Hybrid System Design Checklist</h4>
        <div className="space-y-3">
          <ChecklistItem>Load analysis completed with growth projection</ChecklistItem>
          <ChecklistItem>Site solar irradiation data collected</ChecklistItem>
          <ChecklistItem>Solar array sized with appropriate margin</ChecklistItem>
          <ChecklistItem>Battery bank sized for required autonomy</ChecklistItem>
          <ChecklistItem>Generator selected for optimal loading</ChecklistItem>
          <ChecklistItem>Hybrid controller specified and compatible</ChecklistItem>
          <ChecklistItem>Cable sizes calculated for voltage drop</ChecklistItem>
          <ChecklistItem>Protection devices selected and coordinated</ChecklistItem>
          <ChecklistItem>Mounting structure designed for wind loads</ChecklistItem>
          <ChecklistItem>Ventilation/cooling requirements addressed</ChecklistItem>
          <ChecklistItem>Monitoring system specified</ChecklistItem>
          <ChecklistItem>Commissioning test plan prepared</ChecklistItem>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Design Engineer</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// Generator Installation Content
const generatorInstallationContent = (
  <div className="space-y-16">
    <section id="introduction">
      <SectionHeading>Chapter 1: Introduction</SectionHeading>
      <Paragraph>
        This manual provides comprehensive procedures for diesel generator installation, from site preparation through
        commissioning and handover. Following these guidelines ensures safe, reliable, and code-compliant installations.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop"
        alt="Diesel generator installation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>Scope of Work</SubHeading>
      <BulletList
        items={[
          "Civil foundation and equipment pad construction",
          "Generator set positioning and leveling",
          "Fuel system installation and testing",
          "Exhaust system and silencer installation",
          "Electrical connections to ATS and distribution",
          "Control panel wiring and configuration",
          "Commissioning tests and performance verification",
          "Operator training and documentation handover",
        ]}
      />
    </section>

    <section id="site-preparation">
      <SectionHeading>Chapter 2: Site Preparation</SectionHeading>
      <Paragraph>
        Proper site preparation is critical for generator longevity and performance. The foundation must support the
        generator weight and vibration loads.
      </Paragraph>
      <SubHeading>Foundation Requirements</SubHeading>
      <StyledTable
        headers={["Generator Size", "Foundation Size", "Concrete Grade", "Reinforcement"]}
        rows={[
          ["Up to 30 kVA", "1.5m × 1m × 0.3m", "M20", "10mm @ 150mm c/c"],
          ["30-100 kVA", "2.5m × 1.5m × 0.4m", "M25", "12mm @ 150mm c/c"],
          ["100-250 kVA", "3.5m × 2m × 0.5m", "M25", "16mm @ 150mm c/c"],
          ["250-500 kVA", "4.5m × 2.5m × 0.6m", "M30", "16mm @ 125mm c/c"],
          ["500+ kVA", "Custom design", "M30", "Structural engineer"],
        ]}
      />
      <ImportantNote type="warning">
        Allow minimum 28 days concrete curing before generator placement. Use anti-vibration mounts for all
        installations.
      </ImportantNote>
    </section>

    <section id="fuel-system">
      <SectionHeading>Chapter 3: Fuel System Installation</SectionHeading>
      <Paragraph>
        The fuel system must provide reliable diesel supply while meeting environmental and safety regulations.
      </Paragraph>
      <SubHeading>Fuel Tank Sizing</SubHeading>
      <PricingExplanation
        title="Tank Capacity Calculation"
        items={[
          { label: "Generator Consumption", value: "Liters/hour at 75% load" },
          { label: "Required Runtime", value: "8-24 hours typical" },
          { label: "Reserve Margin", value: "20% additional capacity" },
          { label: "Day Tank (if applicable)", value: "4-8 hours supply" },
        ]}
      />
      <SubHeading>Installation Requirements</SubHeading>
      <BulletList
        items={[
          "Double-wall tanks for environmental protection",
          "Leak detection systems for underground tanks",
          "Proper venting to prevent vacuum during consumption",
          "Fuel return line for excess fuel from injectors",
          "Water separator and primary filter installation",
          "Lockable fill point with spill containment",
        ]}
      />
    </section>

    <section id="electrical">
      <SectionHeading>Chapter 4: Electrical Connections</SectionHeading>
      <Paragraph>
        Electrical installation must comply with local regulations and ensure proper coordination between generator,
        ATS, and distribution systems.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=400&fit=crop"
        alt="Electrical panel installation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>Cable Sizing Guide</SubHeading>
      <StyledTable
        headers={["Generator Output", "Cable Size", "Breaker Rating", "Neutral Size"]}
        rows={[
          ["30 kVA / 40A", "16mm² Cu", "63A", "16mm²"],
          ["60 kVA / 80A", "25mm² Cu", "100A", "16mm²"],
          ["100 kVA / 140A", "50mm² Cu", "160A", "25mm²"],
          ["200 kVA / 280A", "95mm² Cu", "315A", "50mm²"],
          ["500 kVA / 700A", "2×150mm² Cu", "800A", "95mm²"],
        ]}
      />
    </section>

    <section id="exhaust">
      <SectionHeading>Chapter 5: Exhaust System</SectionHeading>
      <Paragraph>Proper exhaust system design prevents dangerous gas buildup and noise pollution.</Paragraph>
      <SubHeading>Installation Guidelines</SubHeading>
      <BulletList
        items={[
          "Use corrosion-resistant piping (e.g., stainless steel)",
          "Ensure adequate slope away from the generator",
          "Install silencers to meet local noise regulations",
          "Provide expansion joints for thermal movement",
          "Secure piping with appropriate supports to prevent vibration",
        ]}
      />
    </section>

    <section id="commissioning">
      <SectionHeading>Chapter 6: Commissioning</SectionHeading>
      <Paragraph>Commissioning validates that the installed generator operates correctly and safely.</Paragraph>
      <SubHeading>Pre-Start Checks</SubHeading>
      <BulletList
        items={[
          "Verify all fluid levels (oil, coolant, fuel)",
          "Check battery voltage and connections",
          "Confirm emergency stop button functionality",
          "Inspect all electrical connections",
        ]}
      />
    </section>

    <section id="testing">
      <SectionHeading>Chapter 7: Load Testing</SectionHeading>
      <Paragraph>Load testing verifies the generator's ability to meet its rated capacity.</Paragraph>
      <StyledTable
        headers={["Load Level", "Duration", "Parameters to Monitor"]}
        rows={[
          ["No Load", "30 minutes", "Voltage, frequency, temperature"],
          ["30% Load", "1 hour", "Voltage, frequency, fuel consumption"],
          ["75% Load", "2 hours", "Voltage, frequency, fuel consumption, exhaust temp"],
          ["100% Load (if required)", "1 hour", "Voltage, frequency, exhaust temp, vibration"],
        ]}
      />
    </section>

    <section id="safety">
      <SectionHeading>Chapter 8: Safety Guidelines</SectionHeading>
      <Paragraph>Adherence to safety protocols is paramount during generator installation and operation.</Paragraph>
      <ImportantNote type="danger">
        Always disconnect power and LOTO before performing any maintenance. Ensure proper ventilation to avoid carbon
        monoxide poisoning.
      </ImportantNote>
    </section>

    <section id="checklists">
      <SectionHeading>Chapter 11: Installation Checklists</SectionHeading>
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 my-8">
        <h4 className="text-xl font-bold mb-6">Generator Installation Checklist</h4>
        <div className="space-y-3">
          <ChecklistItem>Foundation cured and level verified</ChecklistItem>
          <ChecklistItem>Anti-vibration mounts installed</ChecklistItem>
          <ChecklistItem>Generator positioned and bolted down</ChecklistItem>
          <ChecklistItem>Fuel tank installed with leak test passed</ChecklistItem>
          <ChecklistItem>Fuel lines connected and primed</ChecklistItem>
          <ChecklistItem>Exhaust system installed with proper support</ChecklistItem>
          <ChecklistItem>Electrical cables sized and installed</ChecklistItem>
          <ChecklistItem>ATS wired and tested</ChecklistItem>
          <ChecklistItem>Battery installed and charged</ChecklistItem>
          <ChecklistItem>Coolant and oil levels verified</ChecklistItem>
          <ChecklistItem>Safety devices tested (overspeed, low oil, high temp)</ChecklistItem>
          <ChecklistItem>Load bank test completed</ChecklistItem>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Installation Engineer</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// BESS Configuration Content
const bessConfigurationContent = (
  <div className="space-y-16">
    <section id="introduction">
      <SectionHeading>Chapter 1: Introduction to BESS</SectionHeading>
      <Paragraph>
        Battery Energy Storage Systems (BESS) are transforming power infrastructure across Pakistan. This guide covers
        the technical aspects of configuring, installing, and commissioning BESS for telecom, commercial, and industrial
        applications.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&h=400&fit=crop"
        alt="Battery energy storage system"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>BESS Applications</SubHeading>
      <BulletList
        items={[
          "Telecom tower backup power (4-8 hour autonomy)",
          "Peak shaving for industrial facilities",
          "Load shifting for time-of-use optimization",
          "UPS replacement for critical facilities",
          "Renewable energy integration and smoothing",
          "Grid services and frequency regulation",
        ]}
      />
    </section>

    <section id="battery-technologies">
      <SectionHeading>Chapter 2: Battery Technologies</SectionHeading>
      <Paragraph>
        Understanding battery chemistry characteristics is essential for proper system design and operation. Each
        technology has specific advantages and limitations.
      </Paragraph>
      <SubHeading>Lithium Battery Comparison</SubHeading>
      <StyledTable
        headers={["Chemistry", "Energy Density", "Cycle Life", "Safety", "Cost"]}
        rows={[
          ["LFP (LiFePO4)", "90-120 Wh/kg", "4,000-6,000", "Excellent", "Medium"],
          ["NMC", "150-220 Wh/kg", "2,000-3,000", "Good", "Medium-High"],
          ["LTO", "50-80 Wh/kg", "15,000-20,000", "Excellent", "High"],
          ["NCA", "200-260 Wh/kg", "1,500-2,500", "Moderate", "High"],
        ]}
      />
      <ImportantNote type="info">
        For Pakistan's hot climate, LFP chemistry is recommended due to superior thermal stability and longer cycle life
        at elevated temperatures.
      </ImportantNote>
    </section>

    <section id="sizing">
      <SectionHeading>Chapter 3: System Sizing</SectionHeading>
      <Paragraph>
        Proper BESS sizing balances capital cost against performance requirements. Key factors include load profile,
        autonomy requirement, and charge/discharge rates.
      </Paragraph>
      <SubHeading>Sizing Parameters</SubHeading>
      <PricingExplanation
        title="BESS Capacity Calculation"
        items={[
          { label: "Peak Load", value: "Maximum instantaneous demand (kW)" },
          { label: "Energy Requirement", value: "Load × Autonomy hours (kWh)" },
          { label: "Depth of Discharge", value: "80% for lithium, 50% for lead-acid" },
          { label: "Round-Trip Efficiency", value: "90-95% for lithium systems" },
          { label: "Temperature Derating", value: "5-10% for high ambient" },
          { label: "End-of-Life Capacity", value: "80% of initial (typically)" },
        ]}
      />
    </section>

    <section id="bms-configuration">
      <SectionHeading>Chapter 4: BMS Configuration</SectionHeading>
      <Paragraph>
        The Battery Management System (BMS) is critical for safe and efficient BESS operation. Proper configuration
        prevents damage and optimizes performance.
      </Paragraph>
      <SubHeading>Key BMS Parameters</SubHeading>
      <StyledTable
        headers={["Parameter", "LFP Setting", "Purpose"]}
        rows={[
          ["Cell Over-Voltage", "3.65V", "Prevent overcharge damage"],
          ["Cell Under-Voltage", "2.50V", "Prevent over-discharge"],
          ["Charge Current Limit", "0.5C typical", "Prevent lithium plating"],
          ["Discharge Current Limit", "1C typical", "Prevent overheating"],
          ["High Temp Cutoff", "55°C", "Thermal protection"],
          ["Low Temp Charge Cutoff", "0°C", "Prevent lithium plating"],
          ["Cell Balance Threshold", "30mV", "Maintain cell uniformity"],
        ]}
      />
      <ImportantNote type="warning">
        Never modify BMS parameters without manufacturer approval. Incorrect settings can cause fires, explosions, or
        permanent battery damage.
      </ImportantNote>
    </section>

    <section id="site-preparation">
      <SectionHeading>Chapter 5: Site Preparation</SectionHeading>
      <Paragraph>
        Ensure the installation site meets environmental and safety requirements for battery systems.
      </Paragraph>
      <SubHeading>Environmental Considerations</SubHeading>
      <BulletList
        items={[
          "Temperature range: 0°C to 40°C (operational), -10°C to 50°C (storage)",
          "Humidity: Below 85% non-condensing",
          "Ventilation: Adequate airflow to prevent heat buildup",
          "Fire safety: Install fire suppression systems as per local codes",
        ]}
      />
    </section>

    <section id="installation">
      <SectionHeading>Chapter 6: Installation Procedures</SectionHeading>
      <Paragraph>Follow manufacturer guidelines and safety protocols during BESS installation.</Paragraph>
      <SubHeading>Module Mounting</SubHeading>
      <BulletList
        items={[
          "Mount battery racks securely to the floor or wall",
          "Ensure proper grounding of all racks and modules",
          "Follow specific torque requirements for busbars and connections",
        ]}
      />
    </section>

    <section id="charging-profiles">
      <SectionHeading>Chapter 7: Charging Profiles</SectionHeading>
      <Paragraph>Configuring appropriate charging profiles maximizes battery life and performance.</Paragraph>
      <SubHeading>Recommended Settings</SubHeading>
      <BulletList
        items={[
          "Bulk, Absorption, Float stages for lead-acid",
          "Constant Current (CC) / Constant Voltage (CV) for lithium",
          "Temperature compensation for charging voltage",
        ]}
      />
    </section>

    <section id="integration">
      <SectionHeading>Chapter 8: System Integration</SectionHeading>
      <Paragraph>Integrate the BESS with inverters, charge controllers, and monitoring systems.</Paragraph>
      <SubHeading>Communication Protocols</SubHeading>
      <BulletList
        items={[
          "RS485, CAN bus, Modbus RTU for BMS communication",
          "Ethernet, RS232 for inverter/monitoring communication",
        ]}
      />
    </section>

    <section id="commissioning">
      <SectionHeading>Chapter 9: Commissioning</SectionHeading>
      <Paragraph>Commissioning ensures safe and correct operation of the BESS.</Paragraph>
      <SubHeading>Key Commissioning Steps</SubHeading>
      <BulletList
        items={[
          "Verify all connections and settings",
          "Perform insulation resistance tests",
          "Conduct initial charge cycle",
          "Test discharge capacity",
          "Validate BMS alarms and communication",
        ]}
      />
    </section>

    <section id="monitoring">
      <SectionHeading>Chapter 10: Monitoring & Alerts</SectionHeading>
      <Paragraph>
        Implement a robust monitoring system for real-time performance tracking and early fault detection.
      </Paragraph>
      <SubHeading>Alert Configuration</SubHeading>
      <BulletList
        items={[
          "Cell voltage deviations",
          "Temperature anomalies",
          "Charge/discharge current limits exceeded",
          "Communication failures",
        ]}
      />
    </section>

    <section id="maintenance">
      <SectionHeading>Chapter 11: Maintenance Schedule</SectionHeading>
      <Paragraph>Regular maintenance extends battery life and ensures system reliability.</Paragraph>
      <SubHeading>Maintenance Tasks</SubHeading>
      <StyledTable
        headers={["Frequency", "Tasks"]}
        rows={[
          ["Quarterly", "Inspect connections, check temperature, verify BMS data"],
          ["Annually", "Full system diagnostic, battery capacity test"],
        ]}
      />
    </section>

    <section id="safety">
      <SectionHeading>Chapter 12: Safety Protocols</SectionHeading>
      <Paragraph>
        Battery systems involve high voltage and chemical hazards. Strict safety protocols are mandatory.
      </Paragraph>
      <ImportantNote type="danger">
        Always wear arc-rated PPE and insulated tools. Never bypass BMS safety features. Follow LOTO procedures.
      </ImportantNote>
    </section>

    <section id="checklists">
      <SectionHeading>Chapter 13: Configuration Checklists</SectionHeading>
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 my-8">
        <h4 className="text-xl font-bold mb-6">BESS Commissioning Checklist</h4>
        <div className="space-y-3">
          <ChecklistItem>All modules delivered and inspected for damage</ChecklistItem>
          <ChecklistItem>Installation environment meets specifications</ChecklistItem>
          <ChecklistItem>Rack/cabinet properly grounded</ChecklistItem>
          <ChecklistItem>DC bus connections torqued to specification</ChecklistItem>
          <ChecklistItem>BMS communication cables connected</ChecklistItem>
          <ChecklistItem>Individual cell voltages within 50mV</ChecklistItem>
          <ChecklistItem>BMS parameters configured per design</ChecklistItem>
          <ChecklistItem>Inverter/charger communication verified</ChecklistItem>
          <ChecklistItem>Protection coordination tested</ChecklistItem>
          <ChecklistItem>Charge cycle completed successfully</ChecklistItem>
          <ChecklistItem>Discharge test meets capacity specification</ChecklistItem>
          <ChecklistItem>Remote monitoring operational</ChecklistItem>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Commissioning Engineer</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// Cloud Migration Content
const cloudMigrationContent = (
  <div className="space-y-16">
    <section id="introduction">
      <SectionHeading>Chapter 1: Cloud Migration Overview</SectionHeading>
      <Paragraph>
        Cloud migration enables Pakistani enterprises to modernize IT infrastructure, reduce capital expenditure, and
        improve agility. This playbook provides a structured approach for planning and executing successful cloud
        migrations.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
        alt="Cloud computing infrastructure"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>Migration Drivers</SubHeading>
      <BulletList
        items={[
          "Reduce data center operational costs by 30-50%",
          "Eliminate hardware refresh cycles and capital expenditure",
          "Enable rapid scaling for business growth",
          "Improve disaster recovery and business continuity",
          "Access advanced services (AI, ML, analytics)",
          "Support remote workforce and digital transformation",
        ]}
      />
    </section>

    <section id="assessment">
      <SectionHeading>Chapter 2: Discovery and Assessment</SectionHeading>
      <Paragraph>
        Comprehensive assessment identifies migration candidates, dependencies, and potential challenges before
        committing resources to the migration effort.
      </Paragraph>
      <SubHeading>Application Portfolio Analysis</SubHeading>
      <StyledTable
        headers={["Category", "Migration Strategy", "Complexity", "Timeline"]}
        rows={[
          ["Web Applications", "Rehost or Replatform", "Low-Medium", "2-4 weeks"],
          ["Custom Applications", "Refactor or Replatform", "Medium-High", "4-12 weeks"],
          ["Legacy Systems", "Retain or Replace", "High", "12-24 weeks"],
          ["Databases", "Rehost or Replatform", "Medium", "4-8 weeks"],
          ["File Servers", "Rehost", "Low", "1-2 weeks"],
        ]}
      />
      <ImportantNote type="info">
        Start with low-complexity workloads to build team expertise before tackling mission-critical systems.
      </ImportantNote>
    </section>

    <section id="strategy">
      <SectionHeading>Chapter 3: Migration Strategies</SectionHeading>
      <Paragraph>
        The 6 Rs framework provides options for each workload based on business requirements, technical constraints, and
        cost considerations.
      </Paragraph>
      <SubHeading>The 6 Rs of Migration</SubHeading>
      <BulletList
        items={[
          "Rehost (Lift and Shift): Move as-is to cloud infrastructure",
          "Replatform (Lift and Reshape): Minor optimizations during migration",
          "Refactor: Re-architect for cloud-native benefits",
          "Repurchase: Replace with SaaS alternative",
          "Retain: Keep on-premises for now",
          "Retire: Decommission if no longer needed",
        ]}
      />
      <SubHeading>Strategy Selection Criteria</SubHeading>
      <PricingExplanation
        title="Decision Factors"
        items={[
          { label: "Time Pressure", value: "High = Rehost, Low = Refactor" },
          { label: "Budget", value: "Limited = Rehost, Flexible = Refactor" },
          { label: "Application Age", value: "Legacy = Retain/Replace, Modern = Replatform" },
          { label: "Business Criticality", value: "High = Careful planning required" },
          { label: "Technical Debt", value: "High = Consider Refactor/Replace" },
        ]}
      />
    </section>

    <section id="planning">
      <SectionHeading>Chapter 4: Migration Planning</SectionHeading>
      <Paragraph>A detailed migration plan is crucial for a smooth transition and minimizing disruption.</Paragraph>
      <SubHeading>Key Planning Elements</SubHeading>
      <BulletList
        items={[
          "Define migration waves and timelines",
          "Assign roles and responsibilities",
          "Develop detailed runbooks for each migration task",
          "Plan for testing and validation at each stage",
          "Establish communication channels with stakeholders",
        ]}
      />
    </section>

    <section id="architecture">
      <SectionHeading>Chapter 5: Cloud Architecture Design</SectionHeading>
      <Paragraph>
        Design a scalable, secure, and cost-effective cloud architecture tailored to application needs.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
        alt="Cloud architecture diagram"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>Core Components</SubHeading>
      <BulletList
        items={[
          "Virtual Private Clouds (VPCs) for network isolation",
          "Scalable compute instances (EC2, Azure VM)",
          "Managed databases (RDS, Azure SQL)",
          "Object storage solutions (S3, Azure Blob)",
          "Load balancing and auto-scaling",
        ]}
      />
    </section>

    <section id="security">
      <SectionHeading>Chapter 6: Security Planning</SectionHeading>
      <Paragraph>
        Security must be designed into the migration from the start. Cloud security follows a shared responsibility
        model between the provider and customer.
      </Paragraph>
      <SubHeading>Security Controls</SubHeading>
      <BulletList
        items={[
          "Identity and Access Management (IAM) with MFA",
          "Network segmentation with VPCs and security groups",
          "Encryption at rest and in transit",
          "Security monitoring and threat detection",
          "Vulnerability scanning and patch management",
          "Compliance with local data residency requirements",
        ]}
      />
      <ImportantNote title="Pakistan Data Protection" type="warning">
        Pakistan's data protection regulations may require certain data to remain within the country. Verify compliance
        requirements before migration.
      </ImportantNote>
    </section>

    <section id="networking">
      <SectionHeading>Chapter 7: Network Configuration</SectionHeading>
      <Paragraph>
        Establish secure and reliable network connectivity between on-premises environments and the cloud.
      </Paragraph>
      <SubHeading>Connectivity Options</SubHeading>
      <BulletList
        items={[
          "Site-to-site VPN for secure connections",
          "Direct Connect/ExpressRoute for high bandwidth and low latency",
          "Public internet with TLS/SSL encryption",
        ]}
      />
    </section>

    <section id="data-migration">
      <SectionHeading>Chapter 8: Data Migration</SectionHeading>
      <Paragraph>Migrate data efficiently and securely, minimizing downtime.</Paragraph>
      <SubHeading>Migration Methods</SubHeading>
      <BulletList
        items={[
          "Online migration tools (e.g., AWS DMS, Azure DMS)",
          "Offline data transfer appliances (e.g., Snowball, Data Box)",
          "Database backup and restore",
        ]}
      />
    </section>

    <section id="application-migration">
      <SectionHeading>Chapter 9: Application Migration</SectionHeading>
      <Paragraph>Execute application migration based on the chosen strategy for each workload.</Paragraph>
      <SubHeading>Migration Execution</SubHeading>
      <BulletList
        items={[
          "Deploy target cloud infrastructure",
          "Migrate application binaries/code",
          "Configure application settings and dependencies",
          "Perform smoke tests",
        ]}
      />
    </section>

    <section id="testing">
      <SectionHeading>Chapter 10: Testing & Validation</SectionHeading>
      <Paragraph>Thorough testing ensures applications function correctly in the cloud environment.</Paragraph>
      <SubHeading>Testing Phases</SubHeading>
      <BulletList
        items={[
          "Unit testing",
          "Integration testing",
          "User Acceptance Testing (UAT)",
          "Performance and load testing",
          "Security testing",
        ]}
      />
    </section>

    <section id="cutover">
      <SectionHeading>Chapter 11: Cutover Planning</SectionHeading>
      <Paragraph>
        Plan the final cutover to minimize disruption and ensure a successful transition to the cloud.
      </Paragraph>
      <SubHeading>Cutover Steps</SubHeading>
      <BulletList
        items={[
          "Final data synchronization",
          "Update DNS records",
          "Redirect traffic to cloud environment",
          "Perform final validation",
          "Decommission on-premises systems (phased approach)",
        ]}
      />
    </section>

    <section id="optimization">
      <SectionHeading>Chapter 12: Cost Optimization</SectionHeading>
      <Paragraph>Continuously monitor and optimize cloud spending to maximize value.</Paragraph>
      <SubHeading>Optimization Techniques</SubHeading>
      <BulletList
        items={[
          "Right-sizing instances",
          "Utilizing reserved instances or savings plans",
          "Implementing auto-scaling",
          "Deleting unused resources",
          "Leveraging cost management tools",
        ]}
      />
    </section>

    <section id="monitoring">
      <SectionHeading>Chapter 13: Cloud Monitoring Setup</SectionHeading>
      <Paragraph>Implement comprehensive monitoring for performance, security, and cost.</Paragraph>
      <SubHeading>Monitoring Tools</SubHeading>
      <BulletList
        items={[
          "Cloud provider native tools (CloudWatch, Azure Monitor)",
          "Third-party APM solutions",
          "Log aggregation and analysis",
        ]}
      />
    </section>

    <section id="governance">
      <SectionHeading>Chapter 14: Cloud Governance</SectionHeading>
      <Paragraph>Establish policies and procedures for managing cloud resources effectively.</Paragraph>
      <SubHeading>Governance Framework</SubHeading>
      <BulletList
        items={[
          "Resource tagging strategy",
          "Access control policies",
          "Change management process",
          "Compliance and auditing",
        ]}
      />
    </section>

    <section id="checklists">
      <SectionHeading>Chapter 15: Migration Checklists</SectionHeading>
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 my-8">
        <h4 className="text-xl font-bold mb-6">Pre-Migration Checklist</h4>
        <div className="space-y-3">
          <ChecklistItem>Application inventory completed</ChecklistItem>
          <ChecklistItem>Dependencies mapped and documented</ChecklistItem>
          <ChecklistItem>Migration strategy selected per workload</ChecklistItem>
          <ChecklistItem>Cloud architecture designed and approved</ChecklistItem>
          <ChecklistItem>Security controls defined</ChecklistItem>
          <ChecklistItem>Network connectivity established</ChecklistItem>
          <ChecklistItem>Landing zone configured</ChecklistItem>
          <ChecklistItem>Backup and DR strategy defined</ChecklistItem>
          <ChecklistItem>Performance baselines captured</ChecklistItem>
          <ChecklistItem>Rollback plan documented</ChecklistItem>
          <ChecklistItem>Stakeholder communication plan ready</ChecklistItem>
          <ChecklistItem>Training completed for operations team</ChecklistItem>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Project Lead</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// Site Safety Content
const siteSafetyContent = (
  <div className="space-y-16">
    <section id="introduction">
      <SectionHeading>Chapter 1: Safety Policy and Principles</SectionHeading>
      <Paragraph>
        Safety is our highest priority. This manual establishes mandatory procedures for all personnel working on HNL
        project sites. Zero incidents is our goal—every worker has the right and responsibility to stop unsafe work.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop"
        alt="Construction site safety"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <ImportantNote type="danger">
        Stop work immediately if you observe unsafe conditions. Report all incidents, near-misses, and hazards to your
        supervisor.
      </ImportantNote>
      <SubHeading>Core Safety Principles</SubHeading>
      <BulletList
        items={[
          "All injuries and incidents are preventable",
          "Safety is everyone's responsibility",
          "Working safely is a condition of employment",
          "No task is so urgent that it cannot be done safely",
          "Management is accountable for safety performance",
          "Continuous improvement through learning from incidents",
        ]}
      />
    </section>

    <section id="ppe">
      <SectionHeading>Chapter 2: Personal Protective Equipment</SectionHeading>
      <Paragraph>
        PPE is the last line of defense against workplace hazards. All personnel must wear appropriate PPE for the work
        being performed.
      </Paragraph>
      <SubHeading>Minimum PPE Requirements by Work Area</SubHeading>
      <StyledTable
        headers={["Work Area", "Required PPE", "Additional Items"]}
        rows={[
          ["General Site", "Hard hat, safety boots, hi-vis vest", "Safety glasses"],
          ["Tower Work", "Full body harness, helmet with chin strap", "Tool lanyard, gloves"],
          ["Electrical Work", "Arc flash suit, insulated gloves", "Face shield, voltage detector"],
          ["Excavation", "Hard hat, safety boots, gloves", "Respiratory if dusty"],
          ["Confined Space", "Gas detector, rescue harness", "Respiratory equipment"],
        ]}
      />
      <ImportantNote type="warning">
        Damaged or worn PPE must be replaced immediately. Never modify or disable safety features.
      </ImportantNote>
    </section>

    <section id="heights">
      <SectionHeading>Chapter 3: Working at Heights</SectionHeading>
      <Paragraph>
        Falls are the leading cause of fatalities in construction and telecom industries. Strict protocols apply to any
        work above 2 meters.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop"
        alt="Tower climbing safety"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
      <SubHeading>Fall Protection Requirements</SubHeading>
      <BulletList
        items={[
          "100% tie-off required at all times above 2 meters",
          "Use twin-leg lanyards for continuous protection during movement",
          "Inspect harness and lanyards before each use",
          "Anchor points must support 22 kN minimum",
          "Rescue plan must be in place before work begins",
          "Weather restrictions: No climbing in wind above 40 km/h or during lightning",
        ]}
      />
      <SubHeading>Pre-Climb Checklist</SubHeading>
      <BulletList
        items={[
          "Valid climbing certification verified",
          "Medical fitness confirmed (no heart conditions, vertigo)",
          "Harness and lanyards inspected",
          "Rescue equipment available and functional",
          "Communication devices tested",
          "Weather conditions monitored",
          "Tower owner permission obtained",
          "RF hazard assessment completed",
        ]}
      />
    </section>

    <section id="electrical-safety">
      <SectionHeading>Chapter 4: Electrical Safety</SectionHeading>
      <Paragraph>
        Electrical hazards can cause serious injury or death. Only qualified personnel may perform electrical work, and
        all applicable safety procedures must be followed.
      </Paragraph>
      <SubHeading>Lock-Out Tag-Out (LOTO) Procedure</SubHeading>
      <BulletList
        items={[
          "Notify all affected personnel",
          "Identify all energy sources",
          "Isolate equipment from energy sources",
          "Apply locks and tags to isolation points",
          "Verify zero energy state before work",
          "Remove locks only after work completion and verification",
        ]}
      />
      <StyledTable
        headers={["Voltage Level", "Approach Distance", "PPE Required"]}
        rows={[
          ["Below 50V", "No restriction", "Basic PPE"],
          ["50-600V", "1 meter", "Insulated gloves, safety glasses"],
          ["600V-15kV", "3 meters", "Arc flash suit, face shield"],
          ["Above 15kV", "5+ meters", "Specialized HV PPE"],
        ]}
      />
    </section>

    <section id="emergency">
      <SectionHeading>Chapter 5: Emergency Procedures</SectionHeading>
      <Paragraph>
        All personnel must know emergency procedures and evacuation routes. Regular drills ensure readiness for actual
        emergencies.
      </Paragraph>
      <SubHeading>Emergency Response Steps</SubHeading>
      <BulletList
        items={[
          "Ensure your own safety first",
          "Alert others in the immediate area",
          "Call emergency services (1122 for Rescue)",
          "Notify site supervisor immediately",
          "Provide first aid if trained and safe to do so",
          "Secure the area to prevent additional incidents",
          "Do not move injured persons unless in immediate danger",
          "Preserve evidence for incident investigation",
        ]}
      />
      <ImportantNote type="danger">
        Post emergency contact numbers at all work locations. Ensure first aid kits are stocked and accessible.
      </ImportantNote>
    </section>

    <section id="reporting">
      <SectionHeading>Chapter 6: Incident Reporting</SectionHeading>
      <Paragraph>Thorough incident reporting is crucial for learning and preventing future occurrences.</Paragraph>
      <SubHeading>Reporting Process</SubHeading>
      <BulletList
        items={[
          "Report all incidents, accidents, and near-misses immediately",
          "Complete incident report form within 24 hours",
          "Provide details of conditions, actions, and contributing factors",
          "Cooperate fully with investigation",
        ]}
      />
    </section>

    <section id="procedures">
      <SectionHeading>Chapter 7: Safe Work Procedures</SectionHeading>
      <Paragraph>Specific procedures for high-risk activities ensure safe execution.</Paragraph>
      <SubHeading>Examples</SubHeading>
      <BulletList
        items={[
          "Confined space entry permit and procedures",
          "Excavation safety: shoring, utility identification",
          "Hot work permit and fire watch",
          "Equipment lifting and rigging safety",
        ]}
      />
    </section>

    <section id="hazards">
      <SectionHeading>Chapter 8: Hazard Identification and Risk Assessment</SectionHeading>
      <Paragraph>Proactively identify and mitigate hazards before starting work.</Paragraph>
      <SubHeading>Risk Assessment Steps</SubHeading>
      <BulletList
        items={[
          "Identify potential hazards",
          "Assess the risks associated with each hazard",
          "Implement control measures",
          "Review and update risk assessments regularly",
        ]}
      />
    </section>

    <section id="checklists">
      <SectionHeading>Chapter 9: Safety Checklists</SectionHeading>
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 my-8">
        <h4 className="text-xl font-bold mb-6">Daily Safety Checklist</h4>
        <div className="space-y-3">
          <ChecklistItem>Toolbox talk conducted</ChecklistItem>
          <ChecklistItem>Work permits obtained for hazardous tasks</ChecklistItem>
          <ChecklistItem>PPE inspected and worn correctly</ChecklistItem>
          <ChecklistItem>Work area inspected for hazards</ChecklistItem>
          <ChecklistItem>Equipment inspected before use</ChecklistItem>
          <ChecklistItem>Emergency equipment accessible</ChecklistItem>
          <ChecklistItem>First aid kit checked and stocked</ChecklistItem>
          <ChecklistItem>Communication devices functional</ChecklistItem>
          <ChecklistItem>Weather conditions monitored</ChecklistItem>
          <ChecklistItem>Housekeeping maintained throughout day</ChecklistItem>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Supervisor Signature</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// Network Integration Best Practices Content
const networkIntegrationContent = (
  <div className="prose-custom">
    {/* Chapter 1: Introduction */}
    <section id="introduction">
      <SectionHeading id="introduction">Chapter 1: Integration Overview</SectionHeading>

      <Paragraph>
        This technical guide provides comprehensive procedures for network integration projects in Pakistan's telecom
        and enterprise infrastructure. It covers planning, compatibility assessment, configuration, testing, and cutover
        procedures for integrating new network equipment with existing systems.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
        alt="Network operations center with multiple monitoring screens"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <Paragraph>
        Network integration requires careful planning to minimize service disruption and ensure seamless operation
        between legacy and new systems. This guide is based on industry best practices and over a decade of experience
        integrating networks for Pakistan's major telecom operators, banks, and enterprises.
      </Paragraph>

      <ImportantNote title="Engineering Disclaimer" type="warning">
        This guide provides best practice recommendations. Actual implementation must follow project-specific
        engineering designs, vendor documentation, and protocols agreed upon between HNL and the client. Site
        conditions, regulatory requirements, and equipment specifications may require deviations from these general
        guidelines. Always consult with qualified engineers before implementation.
      </ImportantNote>

      <SubHeading>Scope of Application</SubHeading>

      <BulletList
        items={[
          "Core network equipment integration (routers, switches, firewalls)",
          "Telecom infrastructure integration (BTS, NodeB, eNodeB, gNodeB)",
          "Data center network migrations and expansions",
          "Enterprise WAN/LAN integration projects",
          "Cloud connectivity and hybrid network setups",
          "Legacy system migration to modern infrastructure",
        ]}
      />

      <SubHeading>Integration Types</SubHeading>

      <StyledTable
        headers={["Integration Type", "Complexity", "Typical Duration", "Risk Level"]}
        rows={[
          ["Equipment Replacement", "Low", "4-8 hours", "Medium"],
          ["Network Expansion", "Medium", "1-3 days", "Medium"],
          ["Technology Migration", "High", "1-4 weeks", "High"],
          ["Multi-Vendor Integration", "High", "2-6 weeks", "High"],
          ["Full Network Cutover", "Very High", "2-8 weeks", "Critical"],
        ]}
      />
    </section>

    {/* Chapter 2: Planning */}
    <section id="planning">
      <SectionHeading id="planning">Chapter 2: Integration Planning</SectionHeading>

      <Paragraph>
        Thorough planning is the foundation of successful network integration. This phase establishes the scope,
        timeline, resources, and risk mitigation strategies for the project.
      </Paragraph>

      <SubHeading>Pre-Integration Assessment</SubHeading>

      <Paragraph>
        Before any integration work begins, a comprehensive assessment of the existing network must be completed:
      </Paragraph>

      <BulletList
        items={[
          "Document current network topology and all active connections",
          "Identify all network services and their dependencies",
          "Catalog existing equipment models, firmware versions, and configurations",
          "Map IP addressing schemes and VLAN configurations",
          "Review current traffic patterns and bandwidth utilization",
          "Identify critical applications and their network requirements",
          "Document existing SLAs and performance baselines",
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
        alt="Network planning and documentation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Stakeholder Identification</SubHeading>

      <StyledTable
        headers={["Stakeholder", "Role", "Involvement"]}
        rows={[
          ["Network Operations", "Day-to-day network management", "Configuration review, testing support"],
          ["Security Team", "Security policy enforcement", "Firewall rules, access controls"],
          ["Application Teams", "Application owners", "Service requirements, testing"],
          ["Management", "Decision making", "Approval, escalation"],
          ["Vendor Support", "Equipment expertise", "Technical support, configuration assistance"],
          ["End Users", "Service consumers", "UAT, feedback"],
        ]}
      />

      <SubHeading>Risk Assessment Matrix</SubHeading>

      <Paragraph>
        Every integration project must include a formal risk assessment. Common risks and mitigation strategies include:
      </Paragraph>

      <StyledTable
        headers={["Risk Category", "Potential Impact", "Mitigation Strategy"]}
        rows={[
          ["Service Disruption", "Business operations halt", "Maintenance window, rollback plan"],
          ["Data Loss", "Configuration or traffic loss", "Backup all configs, staged migration"],
          ["Compatibility Issues", "Equipment malfunction", "Lab testing, vendor consultation"],
          ["Security Breach", "Unauthorized access", "Access controls, monitoring"],
          ["Timeline Overrun", "Extended downtime", "Buffer time, parallel paths"],
          ["Resource Unavailability", "Delayed completion", "Backup resources, cross-training"],
        ]}
      />

      <SubHeading>Integration Timeline Template</SubHeading>

      <PricingExplanation
        title="Typical Integration Project Phases"
        items={[
          { label: "Week 1-2", value: "Assessment and planning" },
          { label: "Week 3-4", value: "Lab testing and staging" },
          { label: "Week 5", value: "Pre-integration preparation" },
          { label: "Week 6", value: "Integration execution" },
          { label: "Week 7-8", value: "Validation and optimization" },
        ]}
      />
    </section>

    {/* Chapter 3: Compatibility */}
    <section id="compatibility">
      <SectionHeading id="compatibility">Chapter 3: Equipment Compatibility</SectionHeading>

      <Paragraph>
        Ensuring compatibility between new and existing equipment is critical for successful integration. Incompatible
        systems can cause service outages, performance degradation, or security vulnerabilities.
      </Paragraph>

      <SubHeading>Compatibility Assessment Checklist</SubHeading>

      <BulletList
        items={[
          "Verify protocol support (OSPF, BGP, MPLS, etc.) between all devices",
          "Check interface compatibility (speed, duplex, connector type)",
          "Confirm firmware interoperability between vendors",
          "Validate encryption and security protocol compatibility",
          "Test QoS marking and handling consistency",
          "Verify SNMP and management protocol versions",
          "Check power requirements and rack space availability",
        ]}
      />

      <SubHeading>Common Compatibility Issues in Pakistan</SubHeading>

      <Paragraph>Based on our field experience, these are the most common compatibility issues encountered:</Paragraph>

      <StyledTable
        headers={["Issue", "Symptoms", "Resolution"]}
        rows={[
          ["MTU Mismatch", "Fragmentation, slow transfers", "Standardize MTU across path"],
          ["Duplex Mismatch", "Collisions, packet loss", "Force matching duplex settings"],
          ["STP Version", "Topology instability", "Standardize STP version (RSTP/MSTP)"],
          ["BGP Timer Mismatch", "Session flapping", "Align keepalive and hold timers"],
          ["VLAN Tagging", "Connectivity issues", "Verify 802.1Q support and native VLAN"],
          ["Clock Synchronization", "Protocol instability", "Deploy NTP/PTP across network"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop"
        alt="Network equipment compatibility testing"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Vendor-Specific Considerations</SubHeading>

      <Paragraph>Multi-vendor environments require extra attention to ensure interoperability:</Paragraph>

      <BulletList
        items={[
          "Cisco to Huawei: Verify OSPF and BGP attribute handling differences",
          "Juniper to Nokia: Check IS-IS metric style and authentication compatibility",
          "Legacy to Modern: Plan for protocol translation or overlay networks",
          "Wireless Controllers: Ensure AP compatibility and roaming support",
          "Firewalls: Verify security zone and policy migration paths",
        ]}
      />

      <ImportantNote type="info">
        Always conduct lab testing before production integration. Many compatibility issues only manifest under specific
        traffic conditions or failover scenarios that cannot be predicted from documentation alone.
      </ImportantNote>
    </section>

    {/* Chapter 4: Configuration */}
    <section id="configuration">
      <SectionHeading id="configuration">Chapter 4: Network Configuration</SectionHeading>

      <Paragraph>
        Proper configuration management ensures consistency, enables rollback capabilities, and maintains documentation
        for future reference.
      </Paragraph>

      <SubHeading>Configuration Management Best Practices</SubHeading>

      <BulletList
        items={[
          "Use version control for all configuration files",
          "Implement configuration templates for standardization",
          "Document all configuration changes with timestamps and reasons",
          "Maintain separate configurations for different environments (lab, staging, production)",
          "Use configuration management tools (Ansible, NAPALM, Netmiko)",
          "Implement peer review for all configuration changes",
        ]}
      />

      <SubHeading>Standard Configuration Elements</SubHeading>

      <StyledTable
        headers={["Element", "Standard", "Notes"]}
        rows={[
          ["Hostname Convention", "SITE-FUNCTION-NUMBER", "e.g., KHI-CORE-01"],
          ["Management VLAN", "VLAN 100", "Isolated from user traffic"],
          ["NTP Servers", "Primary: PTA source, Secondary: pool.ntp.org", "All devices synchronized"],
          ["SNMP Community", "Unique per site", "v3 preferred for security"],
          ["Syslog Server", "Centralized logging", "Retain 90 days minimum"],
          ["Banner Message", "Authorized access only", "Legal requirement"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
        alt="Network configuration management dashboard"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>IP Address Planning</SubHeading>

      <Paragraph>Proper IP address management prevents conflicts and ensures scalability:</Paragraph>

      <PricingExplanation
        title="Recommended IP Allocation Scheme"
        items={[
          { label: "Infrastructure", value: "10.0.0.0/16 - Routers, switches, management" },
          { label: "User Networks", value: "10.1.0.0/16 - End user devices" },
          { label: "Servers", value: "10.2.0.0/16 - Data center servers" },
          { label: "Voice/Video", value: "10.3.0.0/16 - Unified communications" },
          { label: "Guest/IoT", value: "10.4.0.0/16 - Isolated networks" },
        ]}
      />

      <SubHeading>Routing Protocol Configuration</SubHeading>

      <Paragraph>Select and configure routing protocols based on network requirements:</Paragraph>

      <StyledTable
        headers={["Protocol", "Use Case", "Key Configuration"]}
        rows={[
          ["OSPF", "Internal routing, enterprise", "Area design, authentication"],
          ["BGP", "Inter-AS, WAN, service provider", "AS numbers, route policies"],
          ["IS-IS", "Large-scale SP networks", "Level design, metric style"],
          ["EIGRP", "Cisco-only environments", "AS number, K-values"],
          ["Static", "Simple paths, backup routes", "Administrative distance"],
        ]}
      />

      <ImportantNote type="warning">
        Always use routing protocol authentication in production environments. Unauthenticated routing protocols are
        vulnerable to route injection attacks.
      </ImportantNote>
    </section>

    {/* Chapter 5: Testing */}
    <section id="testing">
      <SectionHeading id="testing">Chapter 5: Pre-Integration Testing</SectionHeading>

      <Paragraph>
        Comprehensive testing before production integration reduces risk and identifies potential issues in a controlled
        environment.
      </Paragraph>

      <SubHeading>Lab Testing Requirements</SubHeading>

      <BulletList
        items={[
          "Replicate production topology as closely as possible",
          "Use actual equipment models and firmware versions",
          "Simulate production traffic patterns and volumes",
          "Test all failover scenarios and redundancy paths",
          "Validate all routing protocol adjacencies",
          "Verify QoS policies and traffic prioritization",
          "Test security policies and access controls",
        ]}
      />

      <SubHeading>Test Case Categories</SubHeading>

      <StyledTable
        headers={["Category", "Test Cases", "Pass Criteria"]}
        rows={[
          ["Connectivity", "Ping, traceroute, path verification", "All expected paths functional"],
          ["Routing", "Protocol adjacencies, convergence", "Convergence within 30 seconds"],
          ["Failover", "Link failure, device failure", "Automatic recovery, no packet loss"],
          ["Performance", "Throughput, latency, jitter", "Meets SLA requirements"],
          ["Security", "ACL, firewall rules", "Only authorized traffic passes"],
          ["Management", "SNMP, syslog, NTP", "All management functions operational"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
        alt="Network testing and validation equipment"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Performance Baseline Measurements</SubHeading>

      <Paragraph>Establish performance baselines before integration to enable post-integration comparison:</Paragraph>

      <PricingExplanation
        title="Key Performance Metrics"
        items={[
          { label: "Latency", value: "End-to-end delay in milliseconds" },
          { label: "Jitter", value: "Variation in packet delay" },
          { label: "Packet Loss", value: "Percentage of dropped packets" },
          { label: "Throughput", value: "Actual data transfer rate" },
          { label: "Utilization", value: "Percentage of available bandwidth used" },
        ]}
      />

      <ImportantNote type="info">
        Document all test results thoroughly. These records are essential for troubleshooting post-integration issues
        and demonstrating compliance with SLAs.
      </ImportantNote>
    </section>

    {/* Chapter 6: Cutover */}
    <section id="cutover">
      <SectionHeading id="cutover">Chapter 6: Cutover Procedures</SectionHeading>

      <Paragraph>
        The cutover phase is when new equipment is brought into production. This is the highest-risk phase and requires
        careful execution and coordination.
      </Paragraph>

      <SubHeading>Cutover Planning Checklist</SubHeading>

      <BulletList
        items={[
          "Obtain formal change approval from all stakeholders",
          "Schedule maintenance window with adequate buffer time",
          "Notify all affected users and teams in advance",
          "Prepare detailed step-by-step cutover procedure",
          "Document rollback procedure with time estimates",
          "Stage all required equipment and cables",
          "Verify spare parts availability",
          "Confirm vendor support availability during cutover",
          "Test communication channels (radio, phone, chat)",
        ]}
      />

      <SubHeading>Cutover Team Roles</SubHeading>

      <StyledTable
        headers={["Role", "Responsibility", "Required Skills"]}
        rows={[
          ["Cutover Lead", "Overall coordination, decision making", "Project management, technical depth"],
          ["Network Engineer", "Configuration and troubleshooting", "CLI expertise, protocol knowledge"],
          ["NOC Support", "Monitoring, alarm handling", "Monitoring tools, escalation procedures"],
          ["Vendor Support", "Equipment-specific assistance", "Product expertise"],
          ["Application Support", "Application testing and validation", "Application knowledge"],
          ["Communications", "Stakeholder updates", "Clear communication skills"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop"
        alt="Network operations team during cutover"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Cutover Execution Steps</SubHeading>

      <Paragraph>Follow this general sequence for cutover execution:</Paragraph>

      <BulletList
        items={[
          "Step 1: Final backup of all existing configurations",
          "Step 2: Verify rollback procedure and timing",
          "Step 3: Announce maintenance window start",
          "Step 4: Disable monitoring alerts for affected devices",
          "Step 5: Execute configuration changes in sequence",
          "Step 6: Verify each change before proceeding to next",
          "Step 7: Conduct connectivity and functionality tests",
          "Step 8: Re-enable monitoring and verify baselines",
          "Step 9: Conduct user acceptance testing",
          "Step 10: Announce maintenance window completion",
        ]}
      />

      <SubHeading>Rollback Decision Criteria</SubHeading>

      <ImportantNote type="danger">
        Define clear rollback triggers before cutover begins. Do not hesitate to rollback if criteria are met. It is
        better to reschedule than to cause extended outage.
      </ImportantNote>

      <BulletList
        items={[
          "Critical services remain unavailable after 30 minutes",
          "Multiple unexpected issues discovered simultaneously",
          "Rollback window expiring with issues unresolved",
          "Key resources or vendor support become unavailable",
          "Customer-impacting issues exceed acceptable threshold",
        ]}
      />
    </section>

    {/* Chapter 7: Validation */}
    <section id="validation">
      <SectionHeading id="validation">Chapter 7: Post-Integration Validation</SectionHeading>

      <Paragraph>
        After cutover completion, thorough validation ensures the integration meets all requirements and the network
        operates as expected.
      </Paragraph>

      <SubHeading>Validation Checklist</SubHeading>

      <BulletList
        items={[
          "Verify all routing protocol adjacencies are established",
          "Confirm all expected network paths are active",
          "Test failover scenarios and verify recovery",
          "Validate QoS policies are functioning correctly",
          "Check security policies and access controls",
          "Verify management access and monitoring",
          "Conduct end-to-end application testing",
          "Compare performance metrics against baselines",
        ]}
      />

      <SubHeading>Performance Validation</SubHeading>

      <StyledTable
        headers={["Metric", "Pre-Integration", "Post-Integration", "Acceptable Variance"]}
        rows={[
          ["Latency", "Baseline value", "Measured value", "Plus or minus 10%"],
          ["Packet Loss", "Baseline value", "Measured value", "No increase"],
          ["Throughput", "Baseline value", "Measured value", "Plus or minus 5%"],
          ["Jitter", "Baseline value", "Measured value", "Plus or minus 20%"],
          ["CPU Utilization", "Baseline value", "Measured value", "Below 70%"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop"
        alt="Network performance monitoring dashboard"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>User Acceptance Testing</SubHeading>

      <Paragraph>Engage end users and application teams to validate service functionality:</Paragraph>

      <BulletList
        items={[
          "Test all critical applications from end-user perspective",
          "Verify voice and video quality for UC applications",
          "Confirm remote access and VPN functionality",
          "Test printing, file sharing, and other network services",
          "Validate external connectivity (internet, cloud services)",
          "Document any issues reported by users",
        ]}
      />

      <ImportantNote type="info">
        Maintain heightened monitoring for at least 7 days after integration. Many issues only manifest during specific
        business cycles or peak usage periods.
      </ImportantNote>
    </section>

    {/* Chapter 8: Documentation */}
    <section id="documentation">
      <SectionHeading id="documentation">Chapter 8: Documentation Requirements</SectionHeading>

      <Paragraph>
        Complete documentation is essential for ongoing operations, troubleshooting, and future changes. Poor
        documentation leads to operational issues and increased risk.
      </Paragraph>

      <SubHeading>Required Documentation</SubHeading>

      <StyledTable
        headers={["Document", "Content", "Update Frequency"]}
        rows={[
          ["Network Diagram", "Physical and logical topology", "After every change"],
          ["IP Address Plan", "All assigned addresses and VLANs", "After every change"],
          ["Configuration Backup", "Device configurations", "Daily automated"],
          ["Change Log", "All changes with dates and reasons", "After every change"],
          ["Runbook", "Standard operating procedures", "Quarterly review"],
          ["Vendor Contacts", "Support contacts and contracts", "Annual review"],
        ]}
      />

      <SubHeading>Network Diagram Standards</SubHeading>

      <BulletList
        items={[
          "Use consistent symbols and colors across all diagrams",
          "Include device hostnames, IP addresses, and interface names",
          "Show both physical connectivity and logical topology",
          "Document redundant paths and failover relationships",
          "Include WAN circuit IDs and provider information",
          "Maintain separate diagrams for different network layers",
          "Use version control with change history",
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
        alt="Network documentation and planning"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>As-Built Documentation</SubHeading>

      <Paragraph>
        After integration completion, update all documentation to reflect the actual deployed configuration:
      </Paragraph>

      <BulletList
        items={[
          "Final network diagrams showing new topology",
          "Updated IP address assignments",
          "Final device configurations with comments",
          "Test results and performance baselines",
          "Lessons learned and recommendations",
          "Outstanding issues and remediation plans",
          "Handover document for operations team",
        ]}
      />
    </section>

    {/* Chapter 9: Troubleshooting */}
    <section id="troubleshooting">
      <SectionHeading id="troubleshooting">Chapter 9: Troubleshooting Guide</SectionHeading>

      <Paragraph>
        Effective troubleshooting requires systematic approach and understanding of common integration issues.
      </Paragraph>

      <SubHeading>Troubleshooting Methodology</SubHeading>

      <BulletList
        items={[
          "Step 1: Identify the problem - Gather symptoms and impact information",
          "Step 2: Establish scope - Determine what is and is not affected",
          "Step 3: Identify recent changes - What changed before the issue started?",
          "Step 4: Form hypothesis - What could cause these symptoms?",
          "Step 5: Test hypothesis - Verify or disprove with evidence",
          "Step 6: Implement solution - Make corrective changes",
          "Step 7: Verify resolution - Confirm the issue is resolved",
          "Step 8: Document - Record the issue and resolution for future reference",
        ]}
      />

      <SubHeading>Common Integration Issues</SubHeading>

      <StyledTable
        headers={["Issue", "Symptoms", "Likely Cause", "Resolution"]}
        rows={[
          ["Routing Loop", "Packet loss, high latency", "Inconsistent route policies", "Review and align route maps"],
          [
            "STP Instability",
            "Intermittent connectivity",
            "Topology changes, priority mismatch",
            "Verify STP configuration",
          ],
          ["VLAN Mismatch", "No connectivity", "Different VLAN IDs on trunk", "Align VLAN configuration"],
          ["MTU Issues", "Large packet drops", "MTU mismatch on path", "Standardize MTU settings"],
          ["Authentication Failure", "Protocol not forming", "Credential mismatch", "Verify authentication settings"],
          ["Asymmetric Routing", "Firewall drops", "Different outbound and inbound paths", "Review routing design"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
        alt="Network troubleshooting and diagnostics"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>Useful Troubleshooting Commands</SubHeading>

      <Paragraph>Common commands for diagnosing network issues:</Paragraph>

      <BulletList
        items={[
          "show ip route / show route - Verify routing table entries",
          "show ip ospf neighbor / show ospf neighbor - Check OSPF adjacencies",
          "show ip bgp summary / show bgp summary - Verify BGP sessions",
          "show interface / show interfaces - Check interface status and errors",
          "show spanning-tree / show stp - Verify STP topology",
          "traceroute / tracepath - Identify path and locate failures",
          "ping with size and df-bit - Test MTU and connectivity",
        ]}
      />

      <ImportantNote type="warning">
        Always use read-only commands first. Avoid making changes until you understand the root cause. Hasty changes
        often make problems worse.
      </ImportantNote>
    </section>

    {/* Chapter 10: Checklists */}
    <section id="checklists">
      <SectionHeading id="checklists">Chapter 10: Integration Checklists</SectionHeading>

      <Paragraph>
        Use these checklists to ensure thorough preparation and execution of network integration projects.
      </Paragraph>

      {/* Pre-Integration Checklist */}
      <SubHeading>Pre-Integration Checklist</SubHeading>

      <div className="bg-white border border-gray-200 rounded-lg p-6 my-8 print:border-black">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <div>
            <h4 className="font-bold text-lg">Pre-Integration Checklist</h4>
            <p className="text-sm text-gray-600">Complete before starting integration work</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Project: _________________</p>
            <p className="text-sm text-gray-600">Date: _________________</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Planning</h5>
            <ul className="space-y-3">
              <ChecklistItem>Network assessment documentation complete</ChecklistItem>
              <ChecklistItem>Stakeholder identification and notification done</ChecklistItem>
              <ChecklistItem>Risk assessment completed and mitigations identified</ChecklistItem>
              <ChecklistItem>Integration plan reviewed and approved</ChecklistItem>
              <ChecklistItem>Change request submitted and approved</ChecklistItem>
              <ChecklistItem>Maintenance window scheduled and communicated</ChecklistItem>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Technical Preparation</h5>
            <ul className="space-y-3">
              <ChecklistItem>All equipment received and inventoried</ChecklistItem>
              <ChecklistItem>Firmware versions verified and updated if needed</ChecklistItem>
              <ChecklistItem>Compatibility testing completed in lab</ChecklistItem>
              <ChecklistItem>Configuration templates prepared and reviewed</ChecklistItem>
              <ChecklistItem>IP addresses allocated and documented</ChecklistItem>
              <ChecklistItem>Cables and accessories staged</ChecklistItem>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Resources</h5>
            <ul className="space-y-3">
              <ChecklistItem>Cutover team confirmed and briefed</ChecklistItem>
              <ChecklistItem>Vendor support availability confirmed</ChecklistItem>
              <ChecklistItem>Communication channels tested</ChecklistItem>
              <ChecklistItem>Rollback procedure documented and reviewed</ChecklistItem>
              <ChecklistItem>Backup configurations saved</ChecklistItem>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8 pt-4 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Prepared By</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Approved By</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>

      {/* Cutover Checklist */}
      <SubHeading>Cutover Execution Checklist</SubHeading>

      <div className="bg-white border border-gray-200 rounded-lg p-6 my-8 print:border-black">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <div>
            <h4 className="font-bold text-lg">Cutover Execution Checklist</h4>
            <p className="text-sm text-gray-600">Complete during cutover window</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Start Time: _________________</p>
            <p className="text-sm text-gray-600">End Time: _________________</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Pre-Cutover</h5>
            <ul className="space-y-3">
              <ChecklistItem>Team assembled and communication verified</ChecklistItem>
              <ChecklistItem>Final configuration backup completed</ChecklistItem>
              <ChecklistItem>Rollback procedure confirmed with team</ChecklistItem>
              <ChecklistItem>Monitoring alerts disabled for affected devices</ChecklistItem>
              <ChecklistItem>Stakeholders notified of maintenance start</ChecklistItem>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Execution</h5>
            <ul className="space-y-3">
              <ChecklistItem>Physical connections completed</ChecklistItem>
              <ChecklistItem>Configuration changes applied</ChecklistItem>
              <ChecklistItem>Routing protocol adjacencies verified</ChecklistItem>
              <ChecklistItem>Connectivity tests passed</ChecklistItem>
              <ChecklistItem>Security policies verified</ChecklistItem>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Post-Cutover</h5>
            <ul className="space-y-3">
              <ChecklistItem>Monitoring re-enabled and baselines verified</ChecklistItem>
              <ChecklistItem>User acceptance testing completed</ChecklistItem>
              <ChecklistItem>Performance metrics within acceptable range</ChecklistItem>
              <ChecklistItem>Documentation updated</ChecklistItem>
              <ChecklistItem>Stakeholders notified of completion</ChecklistItem>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8 pt-4 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Cutover Lead</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Operations Acceptance</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>

      {/* Post-Integration Checklist */}
      <SubHeading>Post-Integration Validation Checklist</SubHeading>

      <div className="bg-white border border-gray-200 rounded-lg p-6 my-8 print:border-black">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <div>
            <h4 className="font-bold text-lg">Post-Integration Validation Checklist</h4>
            <p className="text-sm text-gray-600">Complete within 7 days of integration</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Validation Date: _________________</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Technical Validation</h5>
            <ul className="space-y-3">
              <ChecklistItem>All routing adjacencies stable for 24+ hours</ChecklistItem>
              <ChecklistItem>No unexpected errors or warnings in logs</ChecklistItem>
              <ChecklistItem>Performance metrics match or exceed baseline</ChecklistItem>
              <ChecklistItem>Failover testing completed successfully</ChecklistItem>
              <ChecklistItem>All management and monitoring functional</ChecklistItem>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Documentation</h5>
            <ul className="space-y-3">
              <ChecklistItem>Network diagrams updated</ChecklistItem>
              <ChecklistItem>Configuration backups current</ChecklistItem>
              <ChecklistItem>Change log updated</ChecklistItem>
              <ChecklistItem>Lessons learned documented</ChecklistItem>
              <ChecklistItem>Handover to operations completed</ChecklistItem>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700 mb-3">Stakeholder Sign-Off</h5>
            <ul className="space-y-3">
              <ChecklistItem>Network operations acceptance</ChecklistItem>
              <ChecklistItem>Security team approval</ChecklistItem>
              <ChecklistItem>Application teams confirmation</ChecklistItem>
              <ChecklistItem>Management sign-off</ChecklistItem>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8 pt-4 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">Project Lead</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Operations Manager</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// NOC Monitoring Setup Guide Content
const nocMonitoringSetupGuideContent = (
  <div className="prose-custom">
    {/* Chapter 1: Introduction */}
    <section id="introduction">
      <SectionHeading id="introduction">Chapter 1: NOC Overview</SectionHeading>

      <Paragraph>
        This guide outlines the setup and configuration of Network Operations Center (NOC) monitoring systems for 24/7
        network visibility. It covers essential components, best practices for alarm thresholds, escalation procedures,
        and dashboard design.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
        alt="Network operations center dashboard"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />

      <SubHeading>NOC Objectives</SubHeading>

      <BulletList
        items={[
          "Ensure network availability and performance",
          "Detect and resolve network issues proactively",
          "Respond to incidents within defined SLAs",
          "Provide accurate reporting and trend analysis",
          "Maintain optimal network resource utilization",
          "Support engineering teams with network insights",
        ]}
      />

      <ImportantNote title="24/7 Operations" type="info">
        A robust NOC ensures continuous network health. This requires dedicated teams, effective tools, and clear
        procedures for handling incidents around the clock.
      </ImportantNote>
    </section>

    {/* Chapter 2: Monitoring Architecture */}
    <section id="architecture">
      <SectionHeading id="architecture">Chapter 2: Monitoring Architecture</SectionHeading>

      <Paragraph>
        A well-designed monitoring architecture is crucial for efficient data collection, correlation, and alerting.
      </Paragraph>

      <SubHeading>Key Components</SubHeading>

      <BulletList
        items={[
          "Data Collection Agents (SNMP, NetFlow, Syslog)",
          "Centralized Data Storage (Time-series database, logs)",
          "Data Processing and Correlation Engine",
          "Alerting System (Thresholds, rules)",
          "Dashboarding and Visualization Tools",
          "Ticketing System Integration",
        ]}
      />

      <SubHeading>Monitoring Protocols</SubHeading>

      <StyledTable
        headers={["Protocol", "Purpose", "Typical Use Case"]}
        rows={[
          ["SNMP", "Device status, metrics, configuration", "Routers, switches, servers"],
          ["Syslog", "Event logging, error messages", "All network devices and applications"],
          ["NetFlow/sFlow", "Traffic analysis, bandwidth utilization", "Routers, switches"],
          ["APIs", "Application performance, cloud services", "Databases, web services"],
          ["ICMP", "Reachability, latency", "Basic connectivity checks"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
        alt="Network monitoring architecture diagram"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
    </section>

    {/* Chapter 3: Monitoring Tools Setup */}
    <section id="tools">
      <SectionHeading id="tools">Chapter 3: Monitoring Tools Setup</SectionHeading>

      <Paragraph>Selecting and configuring the right monitoring tools is vital for effective NOC operations.</Paragraph>

      <SubHeading>Recommended Tools</SubHeading>

      <BulletList
        items={[
          "Nagios Core/XI: For device health and availability monitoring",
          "Zabbix: Comprehensive network and application monitoring",
          "Prometheus & Grafana: For time-series data and advanced visualization",
          "ELK Stack (Elasticsearch, Logstash, Kibana): For log management and analysis",
          "SolarWinds: Integrated network management suite",
          "PRTG Network Monitor: All-in-one monitoring solution",
        ]}
      />

      <SubHeading>Tool Configuration Steps</SubHeading>

      <Paragraph>General steps for configuring monitoring tools:</Paragraph>

      <ProcedureCard
        title="Basic Tool Setup"
        duration="2-4 hours per tool"
        steps={[
          "Install monitoring server(s) in a secure location",
          "Configure network access for data collection",
          "Import device credentials securely",
          "Deploy agents or configure SNMP/Syslog on network devices",
          "Define target devices and services for monitoring",
          "Set up basic data collection intervals",
        ]}
      />

      <ImportantNote title="Security Configuration" type="warning">
        Secure all monitoring systems with strong authentication, encryption, and access controls. Monitor access logs
        for unauthorized activity.
      </ImportantNote>
    </section>

    {/* Chapter 4: Alarm Thresholds */}
    <section id="thresholds">
      <SectionHeading id="thresholds">Chapter 4: Alarm Thresholds</SectionHeading>

      <Paragraph>
        Setting appropriate alarm thresholds is critical to distinguish between normal fluctuations and genuine issues,
        preventing alert fatigue.
      </Paragraph>

      <SubHeading>Key Metrics and Thresholds</SubHeading>

      <StyledTable
        headers={["Metric", "Warning Threshold", "Critical Threshold", "Context"]}
        rows={[
          ["CPU Utilization", ">75%", ">90%", "Device performance"],
          ["Memory Utilization", ">70%", ">85%", "Device performance"],
          ["Disk Usage", ">80%", ">90%", "Storage availability"],
          ["Latency (WAN Link)", ">50ms", ">100ms", "Connectivity quality"],
          ["Packet Loss (WAN Link)", ">1%", ">3%", "Connectivity quality"],
          ["Interface Errors", ">1/min", ">5/min", "Physical layer issues"],
          ["Service Availability", "Down for 5 min", "Down for 15 min", "Service status"],
        ]}
      />

      <SubHeading>Threshold Tuning</SubHeading>

      <Paragraph>
        Thresholds should be tuned based on historical data and operational experience. Regularly review and adjust them
        to reflect network behavior and minimize false positives/negatives.
      </Paragraph>

      <Image
        src="https://images.unsplash.com/photo-1517245386807-733c93985094?w=800&h=400&fit=crop"
        alt="Alarm threshold configuration"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
    </section>

    {/* Chapter 5: Dashboard Configuration */}
    <section id="dashboards">
      <SectionHeading id="dashboards">Chapter 5: Dashboard Configuration</SectionHeading>

      <Paragraph>
        NOC dashboards provide a centralized, real-time view of network health and performance. They should be tailored
        to the needs of NOC engineers and management.
      </Paragraph>

      <SubHeading>Dashboard Design Principles</SubHeading>

      <BulletList
        items={[
          "Prioritize critical metrics",
          "Use clear visualizations (graphs, maps, status indicators)",
          "Group related information logically",
          "Provide drill-down capabilities",
          "Ensure responsiveness across different screen sizes",
          "Limit information density to avoid clutter",
        ]}
      />

      <SubHeading>Key Dashboard Widgets</SubHeading>

      <StyledTable
        headers={["Widget", "Purpose", "Example Data"]}
        rows={[
          ["Network Map", "Geographic or logical overview", "Site status, link utilization"],
          ["Critical Service Status", "Health of key applications/services", "Uptime, latency, error rates"],
          ["Alarm Summary", "Active alerts by severity", "Count of critical, warning, info alarms"],
          ["Performance Trends", "Historical data for key metrics", "CPU, memory, bandwidth usage over time"],
          ["Bandwidth Utilization", "Link load status", "Current and historical usage per link"],
        ]}
      />

      <ImportantNote title="Customization" type="info">
        Dashboards should be customizable by NOC staff to focus on their specific areas of responsibility, while
        management views can provide an aggregated overview.
      </ImportantNote>
    </section>

    {/* Chapter 6: Escalation Procedures */}
    <section id="escalation">
      <SectionHeading id="escalation">Chapter 6: Escalation Procedures</SectionHeading>

      <Paragraph>
        Clear escalation paths are essential for timely resolution of network incidents. These procedures define who to
        contact and when, based on incident severity and impact.
      </Paragraph>

      <SubHeading>Incident Severity Levels</SubHeading>

      <StyledTable
        headers={["Severity", "Definition", "Example", "Response Time"]}
        rows={[
          ["SEV-1 (Critical)", "Major outage affecting most services/users", "Core router failure", "Immediate"],
          ["SEV-2 (High)", "Significant degradation, affecting key services", "Major link failure", "Within 15 mins"],
          [
            "SEV-3 (Medium)",
            "Degradation affecting non-critical services",
            "High latency on secondary link",
            "Within 1 hour",
          ],
          ["SEV-4 (Low)", "Minor issue, no service impact", "Minor configuration error", "Within 4 hours"],
        ]}
      />

      <SubHeading>Escalation Matrix</SubHeading>

      <Paragraph>The escalation matrix defines contact points for each severity level and incident type.</Paragraph>

      <PricingExplanation
        title="Escalation Example (SEV-1)"
        items={[
          { label: "Tier 1 NOC", value: "Initial diagnosis and containment" },
          { label: "Tier 2 Network Engineer", value: "Advanced troubleshooting, root cause analysis" },
          { label: "Network Architect/Manager", value: "Strategic decision making, vendor engagement" },
          { label: "Senior Management", value: "Major impact situations, executive notification" },
        ]}
      />

      <ImportantNote title="Communication Channels" type="warning">
        Maintain clear communication channels (phone, email, chat, ticketing system) during escalations. Document all
        communication and actions taken.
      </ImportantNote>
    </section>

    {/* Chapter 7: Reporting Setup */}
    <section id="reporting">
      <SectionHeading id="reporting">Chapter 7: Reporting Setup</SectionHeading>

      <Paragraph>
        Regular reporting provides insights into network performance, trends, and potential issues, supporting informed
        decision-making.
      </Paragraph>

      <SubHeading>Types of Reports</SubHeading>

      <BulletList
        items={[
          "Daily availability reports",
          "Weekly performance summaries",
          "Monthly trend analysis",
          "Incident reports",
          "Capacity planning reports",
        ]}
      />

      <SubHeading>Report Generation Tools</SubHeading>

      <StyledTable
        headers={["Tool", "Capabilities", "Typical Use"]}
        rows={[
          ["Grafana", "Visualizing time-series data", "Dashboarding, trend reporting"],
          ["Kibana", "Analyzing log data", "Troubleshooting, security audits"],
          ["Built-in Tool Reports", "Standard reports", "Daily/Weekly summaries"],
          ["Custom Scripts", "Specific data extraction", "Ad-hoc analysis"],
        ]}
      />

      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
        alt="Network report generation"
        width={1200}
        height={500}
        className="rounded-lg my-10"
      />
    </section>

    {/* Chapter 8: SLA Management */}
    <section id="sla">
      <SectionHeading id="sla">Chapter 8: SLA Management</SectionHeading>

      <Paragraph>
        Service Level Agreements (SLAs) define performance expectations. NOC monitoring ensures compliance and provides
        data for SLA adherence reporting.
      </Paragraph>

      <SubHeading>Key SLA Metrics</SubHeading>

      <BulletList
        items={[
          "Network Uptime (e.g., 99.95%)",
          "Mean Time To Repair (MTTR)",
          "Mean Time Between Failures (MTBF)",
          "Latency and Jitter guarantees",
          "Packet Loss targets",
        ]}
      />

      <SubHeading>Monitoring for SLA Compliance</SubHeading>

      <Paragraph>
        Configure monitoring tools to track metrics relevant to SLAs and generate reports for compliance verification.
      </Paragraph>

      <ImportantNote title="Contractual Obligations" type="warning">
        Understand the specific terms and conditions of all SLAs. Failure to meet SLA targets can result in financial
        penalties.
      </ImportantNote>
    </section>

    {/* Chapter 9: Checklists */}
    <section id="checklists">
      <SectionHeading id="checklists">Chapter 9: Checklists</SectionHeading>

      <SubHeading>NOC Setup Checklist</SubHeading>

      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 my-8">
        <h4 className="text-xl font-bold mb-6">NOC Monitoring Setup Checklist</h4>
        <div className="space-y-3">
          <ChecklistItem>Monitoring servers installed and secured</ChecklistItem>
          <ChecklistItem>Network connectivity to devices verified</ChecklistItem>
          <ChecklistItem>Credentials managed securely</ChecklistItem>
          <ChecklistItem>Key network devices added to monitoring system</ChecklistItem>
          <ChecklistItem>Essential services defined and monitored</ChecklistItem>
          <ChecklistItem>Basic alarm thresholds configured</ChecklistItem>
          <ChecklistItem>Initial dashboard created with critical widgets</ChecklistItem>
          <ChecklistItem>Escalation matrix documented and shared</ChecklistItem>
          <ChecklistItem>Reporting schedule defined</ChecklistItem>
          <ChecklistItem>NOC team trained on tools and procedures</ChecklistItem>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 pt-6 border-t">
          <div>
            <p className="text-sm text-gray-600 mb-2">NOC Lead</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Date</p>
            <div className="border-b border-gray-400 h-8"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// Guides Data
const guides: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    category: string
    level: string
    duration: string
    chapters: number
    lastUpdated: string
    version: string
    author: string
    image: string
    tableOfContents: { id: string; title: string }[]
  }
> = {
  "fiber-optic-installation-guide": {
    title: "Fiber Optic Installation Guide",
    subtitle: "Complete Field Manual for Fiber Deployment",
    description:
      "Comprehensive procedures for fiber optic cable installation including underground and aerial deployment methods for Pakistan's telecom infrastructure.",
    category: "Telecom Infrastructure",
    level: "Intermediate",
    duration: "45 min read",
    chapters: 12,
    lastUpdated: "December 2024",
    version: "3.2",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "Introduction & Scope" },
      { id: "pre-installation", title: "Pre-Installation Requirements" },
      { id: "route-survey", title: "Route Survey & Planning" },
      { id: "equipment-materials", title: "Equipment & Materials" }, // Changed from 'equipment'
      { id: "civil-works", title: "Civil Works Procedures" },
      { id: "cable-laying", title: "Cable Laying Techniques" },
      { id: "splicing", title: "Fiber Splicing Procedures" },
      { id: "testing", title: "Testing & Validation" },
      { id: "documentation", title: "Documentation Requirements" },
      { id: "safety", title: "Safety Guidelines" },
      { id: "troubleshooting", title: "Troubleshooting Guide" },
      { id: "checklists", title: "QA/QC Checklists" },
    ],
  },
  "tower-site-survey-checklist": {
    title: "Tower Site Survey Checklist",
    subtitle: "Pre-Deployment Assessment Procedures",
    description:
      "Comprehensive checklist for conducting telecom tower site surveys including structural, electrical, and RF assessments.",
    category: "Telecom Infrastructure",
    level: "Beginner",
    duration: "20 min read",
    chapters: 8,
    lastUpdated: "December 2024",
    version: "2.1",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "Survey Overview" },
      { id: "preparation", title: "Pre-Survey Preparation" },
      { id: "structural", title: "Structural Assessment" },
      { id: "electrical", title: "Electrical Evaluation" },
      { id: "rf-survey", title: "RF Survey" },
      { id: "documentation", title: "Documentation" },
      { id: "safety", title: "Safety Considerations" },
      { id: "checklists", title: "Master Checklists" },
    ],
  },
  "hybrid-power-system-design": {
    title: "Hybrid Power System Design",
    subtitle: "Solar-Diesel-Battery Integration Manual",
    description:
      "Technical guide for designing hybrid power systems combining solar, diesel, and battery storage for off-grid and backup power applications.",
    category: "Energy & Power Systems",
    level: "Advanced",
    duration: "60 min read",
    chapters: 14,
    lastUpdated: "December 2024",
    version: "2.0",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "System Overview" },
      { id: "load-analysis", title: "Load Analysis" },
      { id: "solar-sizing", title: "Solar Panel Sizing" },
      { id: "battery-sizing", title: "Battery Bank Sizing" },
      { id: "generator-sizing", title: "Generator Selection" }, // Changed from 'generator'
      { id: "integration", title: "System Integration" },
      { id: "installation", title: "Installation Procedures" },
      { id: "commissioning", title: "Commissioning" },
      { id: "monitoring", title: "Monitoring Setup" },
      { id: "maintenance", title: "Maintenance Schedule" },
      { id: "troubleshooting", title: "Troubleshooting" },
      { id: "safety", title: "Safety Protocols" },
      { id: "roi", title: "ROI Calculations" },
      { id: "checklists", title: "Checklists" },
    ],
  },
  "generator-installation-manual": {
    title: "Generator Installation Manual",
    subtitle: "Diesel Generator Setup & Commissioning",
    description:
      "Step-by-step procedures for installing and commissioning diesel generators from 20kVA to 2000kVA capacity.",
    category: "Energy & Power Systems",
    level: "Intermediate",
    duration: "40 min read",
    chapters: 11,
    lastUpdated: "December 2024",
    version: "3.1",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "site-preparation", title: "Site Preparation" },
      { id: "civil-works", title: "Civil Works" },
      { id: "installation", title: "Generator Installation" },
      { id: "fuel-system", title: "Fuel System" },
      { id: "electrical", title: "Electrical Connections" },
      { id: "exhaust", title: "Exhaust System" },
      { id: "commissioning", title: "Commissioning" },
      { id: "testing", title: "Load Testing" }, // Changed from 'load-testing'
      { id: "safety", title: "Safety Guidelines" },
      { id: "checklists", title: "Checklists" },
    ],
  },
  "bess-configuration-guide": {
    title: "BESS Configuration Guide",
    subtitle: "Battery Energy Storage System Setup",
    description:
      "Technical procedures for configuring Battery Energy Storage Systems including BMS setup, charge profiles, and integration with existing power systems.",
    category: "Energy & Power Systems",
    level: "Advanced",
    duration: "50 min read",
    chapters: 13,
    lastUpdated: "December 2024",
    version: "1.5",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "BESS Overview" },
      { id: "battery-technologies", title: "Battery Technologies" }, // Changed from 'battery-types'
      { id: "sizing", title: "System Sizing" },
      { id: "site-preparation", title: "Site Preparation" },
      { id: "installation", title: "Installation" },
      { id: "bms-configuration", title: "BMS Configuration" }, // Changed from 'bms-config'
      { id: "charging-profiles", title: "Charging Profiles" }, // Changed from 'charging'
      { id: "integration", title: "Grid Integration" }, // Changed from 'integration'
      { id: "commissioning", title: "Commissioning" },
      { id: "monitoring", title: "Monitoring" },
      { id: "maintenance", title: "Maintenance" },
      { id: "safety", title: "Safety Protocols" },
      { id: "checklists", title: "Checklists" },
    ],
  },
  "cloud-migration-playbook": {
    title: "Cloud Migration Playbook",
    subtitle: "Enterprise Cloud Transition Guide",
    description:
      "Strategic and technical guide for migrating enterprise workloads to cloud platforms including AWS, Azure, and Google Cloud.",
    category: "Software & Cloud",
    level: "Advanced",
    duration: "55 min read",
    chapters: 15,
    lastUpdated: "December 2024",
    version: "2.0",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "Overview" },
      { id: "assessment", title: "Assessment" },
      { id: "strategy", title: "Migration Strategy" },
      { id: "planning", title: "Planning" },
      { id: "architecture", title: "Cloud Architecture" },
      { id: "security", title: "Security Framework" },
      { id: "networking", title: "Networking" },
      { id: "data-migration", title: "Data Migration" },
      { id: "application-migration", title: "Application Migration" }, // Changed from 'app-migration'
      { id: "testing", title: "Testing" },
      { id: "cutover", title: "Cutover" },
      { id: "optimization", title: "Optimization" },
      { id: "monitoring", title: "Monitoring" },
      { id: "governance", title: "Governance" },
      { id: "checklists", title: "Checklists" },
    ],
  },
  "site-safety-procedures": {
    title: "Site Safety Procedures",
    subtitle: "Health & Safety Manual for Field Operations",
    description: "Comprehensive safety procedures for telecom and power infrastructure field operations in Pakistan.",
    category: "Safety & Compliance",
    level: "Beginner",
    duration: "30 min read",
    chapters: 9,
    lastUpdated: "December 2024",
    version: "4.0",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "Safety Policy" },
      { id: "ppe", title: "PPE Requirements" },
      { id: "heights", title: "Working at Heights" },
      { id: "electrical-safety", title: "Electrical Safety" }, // Changed from 'electrical'
      { id: "emergency", title: "Emergency Procedures" },
      { id: "hazards", title: "Hazard Management" }, // Changed from 'hazards'
      { id: "reporting", title: "Incident Reporting" },
      { id: "checklists", title: "Safety Checklists" },
    ],
  },
  "network-integration-best-practices": {
    title: "Network Integration Best Practices",
    subtitle: "Technical Standards for Active Equipment Integration",
    description:
      "Technical standards for integrating active equipment into existing telecom networks with minimal downtime and maximum reliability.",
    category: "Telecom Infrastructure",
    level: "Advanced",
    duration: "35 min read",
    chapters: 10,
    lastUpdated: "December 2024",
    version: "2.5",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "planning", title: "Integration Planning" },
      { id: "compatibility", title: "Equipment Compatibility" },
      { id: "configuration", title: "Network Configuration" },
      { id: "testing", title: "Pre-Integration Testing" },
      { id: "cutover", title: "Cutover Procedures" },
      { id: "validation", title: "Post-Integration Validation" },
      { id: "documentation", title: "Documentation" },
      { id: "troubleshooting", title: "Troubleshooting" },
      { id: "checklists", title: "Checklists" },
    ],
  },
  "noc-monitoring-setup-guide": {
    title: "NOC Monitoring Setup Guide",
    subtitle: "24/7 Network Operations Center Configuration",
    description:
      "How to configure 24/7 network monitoring systems with alarm thresholds, escalation procedures, and dashboard setup.",
    category: "Telecom Infrastructure",
    level: "Intermediate",
    duration: "30 min read",
    chapters: 9,
    lastUpdated: "December 2024",
    version: "3.0",
    author: "HNL Engineering Team",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    tableOfContents: [
      { id: "introduction", title: "NOC Overview" },
      { id: "architecture", title: "Monitoring Architecture" },
      { id: "tools", title: "Monitoring Tools Setup" },
      { id: "thresholds", title: "Alarm Thresholds" },
      { id: "dashboards", title: "Dashboard Configuration" },
      { id: "escalation", title: "Escalation Procedures" },
      { id: "reporting", title: "Reporting Setup" },
      { id: "sla", title: "SLA Management" },
      { id: "checklists", title: "Checklists" },
    ],
  },
}

// Content getter function
function getGuideContent(slug: string) {
  switch (slug) {
    case "fiber-optic-installation-guide":
      return fiberOpticContent
    case "tower-site-survey-checklist":
      return towerSiteSurveyContent
    case "hybrid-power-system-design":
      return hybridPowerSystemContent
    case "generator-installation-manual":
      return generatorInstallationContent
    case "bess-configuration-guide":
      return bessConfigurationContent
    case "cloud-migration-playbook":
      return cloudMigrationContent
    case "site-safety-procedures":
      return siteSafetyContent
    case "network-integration-best-practices":
      return networkIntegrationContent
    case "noc-monitoring-setup-guide":
      // Return placeholder content for guides being developed
      return (
        <div className="prose-custom">
          <SectionHeading id="introduction">Guide Content</SectionHeading>
          <Paragraph>
            This technical guide is currently being developed. The full content will include comprehensive procedures,
            checklists, and best practices specific to {guides[slug]?.title || "this topic"}.
          </Paragraph>
          <ImportantNote title="Coming Soon" type="info">
            Our engineering team is finalizing this guide. Check back soon for the complete documentation with
            step-by-step procedures, safety guidelines, and quality checklists.
          </ImportantNote>
        </div>
      )
    default:
      // Fallback to fiber optic guide content if slug not found or for development purposes
      return fiberOpticContent
  }
}

// Metadata generation
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  // Use await inside the async function if params is a Promise
  // For non-async function, destructure directly
  // const { slug } = params;
  // For demonstration purposes, assuming params is already destructured or resolved
  // In a real Next.js scenario, params would likely be available directly in a sync function or awaited in async
  const slug = "fiber-optic-installation-guide" // Placeholder for demonstration if params is not awaited directly
  const guide = guides[slug]

  if (!guide) {
    return {
      title: "Guide Not Found | HNL Technical Resources",
    }
  }

  return {
    title: `${guide.title} | HNL Technical Guides`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      images: [guide.image],
    },
  }
}

// Static params for build
export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }))
}

// Main page component
export default async function TechnicalGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides[slug]

  if (!guide) {
    notFound()
  }

  const content = getGuideContent(slug)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="border-red-500 text-red-400">
                {guide.category}
              </Badge>
              <Badge variant="outline" className="border-gray-500 text-gray-400">
                {guide.level}
              </Badge>
              <Badge variant="outline" className="border-gray-500 text-gray-400">
                v{guide.version}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{guide.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{guide.subtitle}</p>
            <p className="text-gray-400 mb-8">{guide.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {guide.duration}
              </span>
              <span>{guide.chapters} Chapters</span>
              <span>Updated: {guide.lastUpdated}</span>
              <span>By: {guide.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full">
        <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Disclaimer */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ImportantNote title="Disclaimer" type="warning">
            This guide shares industry best practices for educational purposes. Actual engineering procedures follow
            project-specific protocols, SOPs, and terms agreed upon between HNL and the client. Site conditions,
            regulatory requirements, and equipment specifications may require deviations from these general guidelines.
            Always consult with qualified engineers before implementation.
          </ImportantNote>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {guide.tableOfContents.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 px-3 py-2 rounded transition-colors"
                      >
                        {index + 1}. {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-2 mt-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      href="/contact/quote"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      <Target className="w-4 h-4" />
                      Request Implementation Support
                    </Link>
                    <Link
                      href="/resources/technical-guides"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600"
                    >
                      <FileText className="w-4 h-4" />
                      Browse All Guides
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {content}

            {/* Document Info Footer */}
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-lg mb-4">Document Information</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  <strong>Document:</strong> {guide.title}
                </p>
                <p>
                  <strong>Version:</strong> {guide.version}
                </p>
                <p>
                  <strong>Last Updated:</strong> {guide.lastUpdated}
                </p>
                <p>
                  <strong>Author:</strong> {guide.author}
                </p>
                <p>
                  <strong>Category:</strong> {guide.category}
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Related Guides */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Related Technical Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(guides)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedGuide]) => (
                <Link key={key} href={`/resources/technical-guides/${key}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={relatedGuide.image || "/placeholder.svg"}
                        alt={relatedGuide.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {relatedGuide.category}
                      </Badge>
                      <h3 className="font-bold mb-2">{relatedGuide.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedGuide.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
