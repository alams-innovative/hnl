import nodemailer from "nodemailer"

// Career notification email recipients
const CAREER_EMAIL_TO = ["Jobs@hnl.com.pk", "hrconnect@hnl.com.pk"]
const CAREER_EMAIL_BCC = ["majid@alamsinnovate.com"]

// Create a transporter using SMTP
// For now uses environment variables for SMTP config
// Will be replaced with Resend API or dedicated SMTP later
function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

interface CareerEmailData {
  applicantName: string
  applicantEmail: string
  applicantPhone: string
  positionTitle: string
  positionLayer: string
  currentCompany?: string
  currentRole?: string
  yearsOfExperience?: number
  city?: string
  linkedinUrl?: string
  cvFileName?: string
  motivation?: string
  applicationId: string
}

interface InternshipEmailData {
  applicantName: string
  applicantEmail: string
  applicantPhone: string
  track: string
  university: string
  fieldOfStudy: string
  educationLevel: string
  city?: string
  linkedinUrl?: string
  cvFileName?: string
  whyHnl?: string
  availabilityQuarter?: string
  applicationId: string
}

export async function sendCareerNotificationEmail(data: CareerEmailData) {
  try {
    const transporter = getTransporter()

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #dc2626; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Career Application</h1>
        </div>
        <div style="padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb;">
          <h2 style="color: #111827; font-size: 18px; margin-top: 0;">Application ID: ${data.applicationId}</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 40%;">Name</td>
              <td style="padding: 10px 0; color: #111827;">${data.applicantName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${data.applicantEmail}">${data.applicantEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 10px 0; color: #111827;"><a href="tel:${data.applicantPhone}">${data.applicantPhone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Position</td>
              <td style="padding: 10px 0; color: #111827;">${data.positionTitle} (${data.positionLayer})</td>
            </tr>
            ${data.currentCompany ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">Current Company</td><td style="padding: 10px 0; color: #111827;">${data.currentCompany}</td></tr>` : ""}
            ${data.currentRole ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">Current Role</td><td style="padding: 10px 0; color: #111827;">${data.currentRole}</td></tr>` : ""}
            ${data.yearsOfExperience ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">Experience</td><td style="padding: 10px 0; color: #111827;">${data.yearsOfExperience} years</td></tr>` : ""}
            ${data.city ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">Location</td><td style="padding: 10px 0; color: #111827;">${data.city}</td></tr>` : ""}
            ${data.linkedinUrl ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">LinkedIn</td><td style="padding: 10px 0; color: #111827;"><a href="${data.linkedinUrl}">${data.linkedinUrl}</a></td></tr>` : ""}
            ${data.cvFileName ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">CV File</td><td style="padding: 10px 0; color: #111827;">${data.cvFileName}</td></tr>` : ""}
          </table>

          ${
            data.motivation
              ? `
          <div style="margin-top: 20px; padding: 16px; background-color: white; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; font-size: 14px; margin-top: 0;">Motivation</h3>
            <p style="color: #111827; margin: 0;">${data.motivation}</p>
          </div>`
              : ""
          }

          <div style="margin-top: 24px; padding: 12px; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d;">
            <p style="color: #92400e; margin: 0; font-size: 13px;">
              This is an automated notification from the HNL website career application system. 
              Please review the full application in the admin dashboard.
            </p>
          </div>
        </div>
        <div style="padding: 16px; text-align: center; background-color: #111827;">
          <p style="color: #9ca3af; margin: 0; font-size: 12px;">HNL - Hitech Networks Private Limited</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@hnl.com.pk",
      to: CAREER_EMAIL_TO.join(", "),
      bcc: CAREER_EMAIL_BCC.join(", "),
      subject: `New Career Application: ${data.applicantName} - ${data.positionTitle}`,
      html: htmlBody,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Failed to send career notification email:", error)
    // Don't throw - email failure should not block the application submission
    return { success: false, error }
  }
}

export async function sendInternshipNotificationEmail(data: InternshipEmailData) {
  try {
    const transporter = getTransporter()

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #ea580c); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Internship Application</h1>
        </div>
        <div style="padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb;">
          <h2 style="color: #111827; font-size: 18px; margin-top: 0;">Application ID: ${data.applicationId}</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151; width: 40%;">Name</td>
              <td style="padding: 10px 0; color: #111827;">${data.applicantName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${data.applicantEmail}">${data.applicantEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 10px 0; color: #111827;"><a href="tel:${data.applicantPhone}">${data.applicantPhone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Track</td>
              <td style="padding: 10px 0; color: #111827;">${data.track}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">University</td>
              <td style="padding: 10px 0; color: #111827;">${data.university}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Field of Study</td>
              <td style="padding: 10px 0; color: #111827;">${data.fieldOfStudy}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 10px 0; font-weight: bold; color: #374151;">Education Level</td>
              <td style="padding: 10px 0; color: #111827;">${data.educationLevel}</td>
            </tr>
            ${data.availabilityQuarter ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">Availability</td><td style="padding: 10px 0; color: #111827;">${data.availabilityQuarter}</td></tr>` : ""}
            ${data.city ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">City</td><td style="padding: 10px 0; color: #111827;">${data.city}</td></tr>` : ""}
            ${data.linkedinUrl ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">LinkedIn</td><td style="padding: 10px 0; color: #111827;"><a href="${data.linkedinUrl}">${data.linkedinUrl}</a></td></tr>` : ""}
            ${data.cvFileName ? `<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px 0; font-weight: bold; color: #374151;">CV File</td><td style="padding: 10px 0; color: #111827;">${data.cvFileName}</td></tr>` : ""}
          </table>

          ${
            data.whyHnl
              ? `
          <div style="margin-top: 20px; padding: 16px; background-color: white; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; font-size: 14px; margin-top: 0;">Why HNL?</h3>
            <p style="color: #111827; margin: 0;">${data.whyHnl}</p>
          </div>`
              : ""
          }

          <div style="margin-top: 24px; padding: 12px; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d;">
            <p style="color: #92400e; margin: 0; font-size: 13px;">
              This is an automated notification from the HNL website internship application system. 
              Please review the full application in the admin dashboard.
            </p>
          </div>
        </div>
        <div style="padding: 16px; text-align: center; background-color: #111827;">
          <p style="color: #9ca3af; margin: 0; font-size: 12px;">HNL - Hitech Networks Private Limited</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@hnl.com.pk",
      to: CAREER_EMAIL_TO.join(", "),
      bcc: CAREER_EMAIL_BCC.join(", "),
      subject: `New Internship Application: ${data.applicantName} - ${data.track} Track`,
      html: htmlBody,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Failed to send internship notification email:", error)
    // Don't throw - email failure should not block the application submission
    return { success: false, error }
  }
}
