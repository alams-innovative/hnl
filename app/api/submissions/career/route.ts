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
      INSERT INTO career_applications (
        application_type, position_layer, position_title, full_name, email, phone,
        linkedin_url, current_location, willing_to_relocate, years_of_experience,
        current_company, current_position, education_level, education_field, certifications,
        technical_skills, leadership_experience, budget_management_experience,
        team_size_managed, availability, salary_expectation, motivation,
        portfolio_url, cv_file_url, cv_file_name, internal_employee, employee_id
      ) VALUES (
        'expert', ${formData.positionLayer}, ${formData.positionTitle}, ${formData.fullName},
        ${formData.email}, ${formData.phone}, ${formData.linkedinUrl}, ${formData.currentLocation},
        ${formData.willingToRelocate}, ${formData.yearsOfExperience}, ${formData.currentCompany},
        ${formData.currentRole}, ${formData.educationLevel}, ${formData.educationField},
        ${formData.certifications}, ${JSON.stringify(formData.technicalSkills)},
        ${formData.leadershipExperience}, ${formData.budgetManagementExperience},
        ${formData.teamSizeManaged}, ${formData.availability}, ${formData.salaryExpectation},
        ${formData.motivation}, ${formData.portfolioUrl}, ${formData.cvFileUrl},
        ${formData.cvFileName}, ${formData.internalEmployee}, ${formData.employeeId}
      ) RETURNING id
    `

    return NextResponse.json({
      success: true,
      id: result[0].id,
      message: "Career application submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Career submission error:", error)
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}
