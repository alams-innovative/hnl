import { NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import { hasAccessToSection } from "@/lib/auth"
import { getAdminUser } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const user = await getAdminUser(session.userId)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const stats: any = {}

    // Get stats for sections user has access to
    if (hasAccessToSection(user.role, "partnerships")) {
      const partnerships = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM partnership_applications
      `
      stats.partnerships = { total: Number(partnerships[0].total), pending: Number(partnerships[0].pending) }
    }

    if (hasAccessToSection(user.role, "careers")) {
      const careers = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM career_applications
      `
      stats.careers = { total: Number(careers[0].total), pending: Number(careers[0].pending) }
    }

    if (hasAccessToSection(user.role, "internships")) {
      const internships = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM internship_applications
      `
      stats.internships = { total: Number(internships[0].total), pending: Number(internships[0].pending) }
    }

    if (hasAccessToSection(user.role, "inquiries")) {
      const inquiries = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM inquiries
      `
      stats.inquiries = { total: Number(inquiries[0].total), pending: Number(inquiries[0].pending) }
    }

    if (hasAccessToSection(user.role, "distributors")) {
      const distributors = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM distributor_applications
      `
      stats.distributors = { total: Number(distributors[0].total), pending: Number(distributors[0].pending) }
    }

    if (hasAccessToSection(user.role, "quotes")) {
      const quotes = await sql`
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'pending') as pending
        FROM quote_requests
      `
      stats.quotes = { total: Number(quotes[0].total), pending: Number(quotes[0].pending) }
    }

    if (hasAccessToSection(user.role, "chatbot")) {
      const chatbot = await sql`
        SELECT 
          COUNT(*) as total,
          AVG(feedback_rating) as avg_rating
        FROM chatbot_conversations
      `
      stats.chatbot = {
        total: Number(chatbot[0].total),
        avgRating: chatbot[0].avg_rating ? Number(chatbot[0].avg_rating).toFixed(1) : 0,
      }
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("[v0] Stats error:", error)
    return NextResponse.json({ error: "Failed to get stats" }, { status: 500 })
  }
}
