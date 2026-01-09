import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { verifyCaptcha } from "@/lib/captcha"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { captchaToken, ...formData } = body

    // Verify captcha
    const isValidCaptcha = await verifyCaptcha(captchaToken)
    if (!isValidCaptcha) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 })
    }

    // Normalize payload to DB schema (supports both old + new form field names)
    const companyName = formData.companyName ?? formData.company_name ?? null
    const contactName = formData.contactName ?? formData.fullName ?? formData.contact_name ?? null
    const contactEmail = formData.contactEmail ?? formData.email ?? formData.contact_email ?? null
    const contactPhone = formData.contactPhone ?? formData.phone ?? formData.contact_phone ?? null

    if (!companyName || !contactName || !contactEmail) {
      return NextResponse.json(
        { error: "Missing required fields", missing: { companyName: !companyName, contactName: !contactName, contactEmail: !contactEmail } },
        { status: 400 },
      )
    }

    const teamSize = formData.teamSize ?? formData.companySize ?? null

    // years_in_business expects an integer; if the UI provides yearEstablished, convert it.
    let yearsInBusiness: number | null = null
    const yearsRaw = formData.yearsInBusiness ?? formData.years_in_business ?? null
    const yearEstablishedRaw = formData.yearEstablished ?? null
    const parseIntOrNull = (v: any) => {
      const n = Number.parseInt(String(v), 10)
      return Number.isFinite(n) ? n : null
    }
    const yrs = parseIntOrNull(yearsRaw)
    if (typeof yrs === "number") yearsInBusiness = yrs
    const yearEstablished = parseIntOrNull(yearEstablishedRaw)
    if (yearsInBusiness === null && typeof yearEstablished === "number" && yearEstablished > 1900 && yearEstablished <= new Date().getFullYear()) {
      yearsInBusiness = Math.max(0, new Date().getFullYear() - yearEstablished)
    }

    // Headquarters parsing: allow a freeform string like "Lahore, Pakistan"
    const hqCity = formData.headquartersCity ?? formData.headquarters_city ?? null
    const hqCountry = formData.headquartersCountry ?? formData.headquarters_country ?? null
    const headquarters = formData.headquarters ?? null
    let headquartersCity = hqCity
    let headquartersCountry = hqCountry
    if ((!headquartersCity || !headquartersCountry) && typeof headquarters === "string" && headquarters.trim()) {
      const parts = headquarters.split(",").map((p: string) => p.trim()).filter(Boolean)
      if (!headquartersCity && parts[0]) headquartersCity = parts[0]
      if (!headquartersCountry && parts[1]) headquartersCountry = parts.slice(1).join(", ")
    }

    const partnershipTypesArr = formData.partnershipTypes ?? formData.partnershipType ?? formData.partnership_types ?? []
    const interestAreasArr = formData.interestAreas ?? formData.areasOfInterest ?? formData.interest_areas ?? []

    const operatingCities =
      formData.operatingCities ??
      formData.operating_cities ??
      (Array.isArray(formData.deploymentRegions) ? JSON.stringify(formData.deploymentRegions) : null)

    const activeTender =
      typeof formData.activeTender === "boolean"
        ? formData.activeTender
        : Boolean(formData.tenderReference || formData.tenderDetails || formData.tender_details)

    // opportunity_status is VARCHAR(50) in DB. Keep it short (e.g. timeframe/status).
    const rawOpportunityStatus =
      formData.opportunityStatus ?? formData.opportunity_status ?? formData.timeframe ?? formData.currentPresencePakistan ?? null
    const opportunityStatus =
      rawOpportunityStatus == null
        ? null
        : typeof rawOpportunityStatus === "string"
          ? rawOpportunityStatus.slice(0, 50)
          : String(rawOpportunityStatus).slice(0, 50)

    // tender_details is TEXT in DB, so it can safely store structured/longer data.
    const tenderDetails = formData.tenderDetails ?? formData.tenderReference ?? formData.tender_details ?? null
    const extraDetails = {
      tenderReference: formData.tenderReference ?? null,
      designation: formData.designation ?? null,
      linkedIn: formData.linkedIn ?? null,
      currentPresencePakistan: formData.currentPresencePakistan ?? null,
      projectScale: formData.projectScale ?? null,
      timeframe: formData.timeframe ?? null,
      howDidYouHear: formData.howDidYouHear ?? null,
      projectDescription: formData.projectDescription ?? null,
      specificRequirements: formData.specificRequirements ?? null,
      additionalComments: formData.additionalComments ?? null,
      deploymentRegions: formData.deploymentRegions ?? null,
    }
    const hasExtraDetails = Object.values(extraDetails).some((v) => {
      if (v == null) return false
      if (Array.isArray(v)) return v.length > 0
      return String(v).trim().length > 0
    })
    const tenderDetailsText =
      hasExtraDetails ? JSON.stringify({ tenderDetails: tenderDetails ?? null, ...extraDetails }) : (tenderDetails ?? null)

    // Insert into database
    const result = await sql`
      INSERT INTO partnership_applications (
        company_name, company_registration, years_in_business, industry, website,
        headquarters_country, headquarters_city, operating_cities, team_size,
        partnership_types, interest_areas, annual_revenue, credit_requirements,
        opportunity_status, active_tender, tender_details,
        contact_name, contact_email, contact_phone,
        leadership_name, leadership_phone,
        consent_background_check, consent_terms
      ) VALUES (
        ${companyName}, ${formData.companyRegistration ?? null}, ${yearsInBusiness},
        ${formData.industry ?? null}, ${formData.website ?? null}, ${headquartersCountry ?? null},
        ${headquartersCity ?? null}, ${operatingCities ?? null}, ${teamSize ?? null},
        ${JSON.stringify(partnershipTypesArr ?? [])}, ${JSON.stringify(interestAreasArr ?? [])},
        ${formData.annualRevenue ?? formData.projectScale ?? null}, ${formData.creditRequirements ?? null}, ${opportunityStatus},
        ${activeTender}, ${tenderDetailsText}, ${contactName},
        ${contactEmail}, ${contactPhone}, ${formData.leadershipName ?? null},
        ${formData.leadershipPhone ?? null}, ${Boolean(formData.consentBackgroundCheck)}, ${Boolean(formData.consentTerms)}
      ) RETURNING id
    `

    const insertedId = result?.[0]?.id || result?.rows?.[0]?.id

    return NextResponse.json({
      success: true,
      id: insertedId,
      message: "Partnership application submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Partnership submission error:", error)
    return NextResponse.json(
      {
        error: "Submission failed",
        details: process.env.NODE_ENV === "development" && error instanceof Error ? error.message : undefined,
      },
      { status: 500 },
    )
  }
}
