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
      INSERT INTO internship_applications (
        track, full_name, email, phone, city, education_level, institution,
        field_of_study, graduation_year, gpa, linkedin_url, portfolio_url,
        skills, previous_internships, why_hnl, availability_quarter,
        availability_duration, cv_file_url, cv_file_name
      ) VALUES (
        ${formData.track}, ${formData.fullName}, ${formData.email}, ${formData.phone},
        ${formData.city}, ${formData.educationLevel}, ${formData.institution},
        ${formData.fieldOfStudy}, ${formData.graduationYear}, ${formData.gpa},
        ${formData.linkedinUrl}, ${formData.portfolioUrl}, ${JSON.stringify(formData.skills)},
        ${formData.previousInternships}, ${formData.whyHnl}, ${formData.availabilityQuarter},
        ${formData.availabilityDuration}, ${formData.cvFileUrl}, ${formData.cvFileName}
      ) RETURNING id
    `

    return NextResponse.json({
      success: true,
      id: result[0].id,
      message: "Internship application submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Internship submission error:", error)
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}
