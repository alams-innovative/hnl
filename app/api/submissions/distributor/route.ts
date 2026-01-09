import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { verifyCaptcha } from "@/lib/captcha"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { captchaToken, ...formData } = body

    const isValidCaptcha = await verifyCaptcha(captchaToken)
    if (!isValidCaptcha) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 })
    }

    // Normalize payload to DB schema (supports UI field names)
    const partnershipType = formData.partnershipType ?? formData.partnership_type ?? null
    const companyName = formData.companyName ?? formData.company_name ?? null
    const companyRegistration = formData.companyRegistration ?? formData.registrationNumber ?? formData.company_registration ?? null

    const parseYearsInBusiness = (v: any): number | null => {
      if (v == null) return null
      const s = String(v).trim()
      if (!s) return null
      // UI sends ranges like "2-5" or "10+"
      if (s.includes("+")) return Number.isFinite(Number.parseInt(s, 10)) ? Number.parseInt(s, 10) : null
      if (s.includes("-")) {
        const first = s.split("-")[0]?.trim()
        const n = Number.parseInt(first, 10)
        return Number.isFinite(n) ? n : null
      }
      const n = Number.parseInt(s, 10)
      return Number.isFinite(n) ? n : null
    }

    const yearsInBusiness = parseYearsInBusiness(formData.yearsInBusiness ?? formData.years_in_business)

    const headquartersCity = formData.headquartersCity ?? formData.headquarterCity ?? formData.headquarters_city ?? null
    const headquartersCountry = formData.headquartersCountry ?? formData.headquarters_country ?? "Pakistan"

    const operatingCitiesText = Array.isArray(formData.operatingCities)
      ? JSON.stringify(formData.operatingCities)
      : formData.operatingCities ?? formData.operating_cities ?? null

    const contactName = formData.contactName ?? formData.ownerName ?? formData.contact_name ?? null
    const contactEmail = formData.contactEmail ?? formData.ownerEmail ?? formData.contact_email ?? null
    const contactPhone = formData.contactPhone ?? formData.ownerPhone ?? formData.contact_phone ?? null

    if (!partnershipType || !companyName || !contactName || !contactEmail) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          missing: {
            partnershipType: !partnershipType,
            companyName: !companyName,
            contactName: !contactName,
            contactEmail: !contactEmail,
          },
        },
        { status: 400 },
      )
    }

    const opportunityStatusRaw = formData.opportunityStatus ?? formData.opportunityType ?? formData.opportunity_status ?? null
    const opportunityStatus =
      opportunityStatusRaw == null
        ? null
        : typeof opportunityStatusRaw === "string"
          ? opportunityStatusRaw.slice(0, 50)
          : String(opportunityStatusRaw).slice(0, 50)

    const isUrgentByType = ["active_tender", "active_rfq"].includes(String(formData.opportunityType ?? "").trim())
    const tenderUrgent = typeof formData.tenderUrgent === "boolean" ? formData.tenderUrgent : isUrgentByType

    const teamComposition = JSON.stringify({
      teamSize: formData.teamSize ?? null,
      salesTeamSize: formData.salesTeamSize ?? null,
      technicalTeamSize: formData.technicalTeamSize ?? null,
      warehouseCapacity: formData.warehouseCapacity ?? null,
    })

    const tenderDetails = JSON.stringify({
      opportunityDetails: formData.opportunityDetails ?? formData.tenderDetails ?? null,
      expectedMonthlyVolume: formData.expectedMonthlyVolume ?? null,
      productInterest: formData.productInterest ?? null,
      preferredContactMethod: formData.preferredContactMethod ?? null,
      additionalNotes: formData.additionalNotes ?? null,
    })

    const pipelineDetails = JSON.stringify({
      opportunityDetails: formData.opportunityDetails ?? formData.pipelineDetails ?? null,
      expectedMonthlyVolume: formData.expectedMonthlyVolume ?? null,
      productInterest: formData.productInterest ?? null,
      preferredContactMethod: formData.preferredContactMethod ?? null,
      additionalNotes: formData.additionalNotes ?? null,
    })

    const consentBackgroundCheck = Boolean(formData.consentBackgroundCheck ?? formData.agreeBackgroundCheck)
    const consentTerms = Boolean(formData.consentTerms ?? formData.agreeTerms)

    const result = await sql`
      INSERT INTO distributor_applications (
        partnership_type, company_name, company_registration, years_in_business,
        industry, website, headquarters_country, headquarters_city, operating_cities,
        team_composition, annual_revenue, credit_line_required, existing_distributorships,
        opportunity_status, tender_urgent, tender_details, pipeline_details,
        contact_name, contact_email, contact_phone, leadership_name, leadership_title,
        leadership_phone, consent_background_check, consent_terms
      ) VALUES (
        ${partnershipType}, ${companyName}, ${companyRegistration},
        ${yearsInBusiness}, ${formData.industry ?? null}, ${formData.website ?? null},
        ${headquartersCountry ?? null}, ${headquartersCity ?? null}, ${operatingCitiesText ?? null},
        ${teamComposition}, ${formData.annualRevenue ?? null},
        ${formData.creditLineRequired ?? formData.creditLimit ?? null}, ${formData.existingDistributorships ?? null},
        ${opportunityStatus}, ${tenderUrgent}, ${tenderUrgent ? tenderDetails : null},
        ${!tenderUrgent ? pipelineDetails : null}, ${contactName}, ${contactEmail},
        ${contactPhone}, ${formData.leadershipName ?? formData.ownerName ?? null}, ${formData.leadershipTitle ?? formData.ownerDesignation ?? null},
        ${formData.leadershipPhone ?? formData.ownerPhone ?? null}, ${consentBackgroundCheck}, ${consentTerms}
      ) RETURNING id
    `

    const insertedId = result?.[0]?.id || result?.rows?.[0]?.id

    return NextResponse.json({
      success: true,
      id: insertedId,
      message: "Distributor application submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Distributor submission error:", error)
    return NextResponse.json(
      {
        error: "Submission failed",
        details: process.env.NODE_ENV === "development" && error instanceof Error ? error.message : undefined,
      },
      { status: 500 },
    )
  }
}
