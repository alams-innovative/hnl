import { NextResponse, type NextRequest } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import { getAdminUser, hasAccessToSection } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const user = await getAdminUser(session.userId)
    if (!user || !hasAccessToSection(user.role, "inquiries")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const inquiries = await sql`
      SELECT * FROM inquiries
      ORDER BY submitted_at DESC
    `

    return NextResponse.json({ inquiries })
  } catch (error) {
    console.error("[v0] Get inquiries error:", error)
    return NextResponse.json({ error: "Failed to get inquiries" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const user = await getAdminUser(session.userId)
    if (!user || !hasAccessToSection(user.role, "inquiries")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const { id, status, assigned_to, notes } = await request.json()

    await sql`
      UPDATE inquiries
      SET status = ${status},
          assigned_to = ${assigned_to || null},
          notes = ${notes || null}
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Update inquiry error:", error)
    return NextResponse.json({ error: "Failed to update inquiry" }, { status: 500 })
  }
}


