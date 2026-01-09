import { NextResponse, type NextRequest } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import { getAdminUser, hasAccessToSection } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const user = await getAdminUser(session.userId)
    if (!user || !hasAccessToSection(user.role, "internships")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const applications = await sql`
      SELECT * FROM internship_applications
      ORDER BY submitted_at DESC
    `

    return NextResponse.json({ applications })
  } catch (error) {
    console.error("[v0] Get internships error:", error)
    return NextResponse.json({ error: "Failed to get applications" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const user = await getAdminUser(session.userId)
    if (!user || !hasAccessToSection(user.role, "internships")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const { id, status, hr_notes } = await request.json()

    await sql`
      UPDATE internship_applications
      SET status = ${status},
          hr_notes = ${hr_notes || null}
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Update internship error:", error)
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 })
  }
}


