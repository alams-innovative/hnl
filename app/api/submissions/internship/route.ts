import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { verifyCaptcha } from "@/lib/captcha"
import { sendInternshipNotificationEmail } from "@/lib/email"

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

    const applicationId = result[0].id

    // Send email notification (non-blocking - don't fail submission if email fails)
    sendInternshipNotificationEmail({
      applicationId: String(applicationId),
      applicantName: formData.fullName,
      applicantEmail: formData.email,
      applicantPhone: formData.phone,
      track: formData.track,
      university: formData.institution,
      fieldOfStudy: formData.fieldOfStudy,
      educationLevel: formData.educationLevel,
      city: formData.city,
      linkedinUrl: formData.linkedinUrl,
      cvFileName: formData.cvFileName,
      whyHnl: formData.whyHnl,
      availabilityQuarter: formData.availabilityQuarter,
    }).catch((err) => console.error("[v0] Internship email send failed:", err))

    return NextResponse.json({
      success: true,
      id: applicationId,
      message: "Internship application submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Internship submission error:", error)
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}
