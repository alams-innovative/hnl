import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { verifyCaptcha } from "@/lib/captcha"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { captchaToken, ...formData } = body

    console.log("[v0] Quote submission received:", formData)

    const isValidCaptcha = await verifyCaptcha(captchaToken)
    if (!isValidCaptcha) {
      console.error("[v0] Captcha verification failed")
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO quote_requests (
        solution_category, specific_services, quantity_specs, project_location,
        location_details, timeline_urgency, expected_response_days, budget_range,
        budget_flexibility, payment_terms, uploaded_documents, opportunity_type,
        competitors_count, decision_timeline, contact_name, contact_email, contact_phone,
        company_name, preferred_contact
      ) VALUES (
        ${formData.category || null},
        ${formData.productService ? JSON.stringify(formData.productService) : null},
        ${formData.quantity || formData.additionalSpecs || null},
        ${formData.projectLocation || null},
        ${formData.city || null},
        ${formData.urgency || null},
        ${formData.expectedResponseTime ? Number.parseInt(formData.expectedResponseTime) : null},
        ${formData.budgetRange || null},
        ${formData.budgetFlexibility || null},
        ${formData.paymentTerms || null},
        ${formData.uploadedFiles ? JSON.stringify(formData.uploadedFiles) : null},
        ${formData.opportunityType || null},
        ${formData.competitorsBidding ? Number.parseInt(formData.competitorsBidding) : null},
        ${formData.decisionTimeline || null},
        ${formData.fullName || null},
        ${formData.email || null},
        ${formData.phone || null},
        ${formData.company || null},
        ${formData.preferredContact ? JSON.stringify(formData.preferredContact) : null}
      ) RETURNING id
    `

    console.log("[v0] Quote inserted successfully, result:", result)

    const insertedId = result[0]?.id || result.rows?.[0]?.id

    console.log("[v0] Inserted ID:", insertedId)

    return NextResponse.json({
      success: true,
      id: insertedId,
      message: "Quote request submitted successfully",
    })
  } catch (error: any) {
    console.error("[v0] Quote submission error:", error)
    console.error("[v0] Error stack:", error.stack)
    return NextResponse.json(
      {
        error: "Submission failed",
        details: error.message || "Unknown error occurred",
      },
      { status: 500 },
    )
  }
}
