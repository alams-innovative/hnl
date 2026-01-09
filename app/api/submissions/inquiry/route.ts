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

    const result = await sql`
      INSERT INTO inquiries (
        interest_type, full_name, email, phone, company_name, company_industry,
        job_title, message, preferred_contact_method
      ) VALUES (
        ${formData.interestType}, ${formData.fullName}, ${formData.email}, ${formData.phone},
        ${formData.companyName}, ${formData.companyIndustry}, ${formData.jobTitle},
        ${formData.message}, ${formData.preferredContactMethod}
      ) RETURNING id
    `

    return NextResponse.json({
      success: true,
      id: result[0].id,
      message: "Inquiry submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Inquiry submission error:", error)
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}
