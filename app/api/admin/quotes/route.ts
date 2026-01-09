import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import { getAdminUser, hasAccessToSection } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const user = await getAdminUser(session.userId)
    if (!user || !hasAccessToSection(user.role, "quotes")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const quotes = await sql`
      SELECT * FROM quote_requests
      ORDER BY submitted_at DESC
    `

    return NextResponse.json({ quotes })
  } catch (error) {
    console.error("[v0] Load quotes error:", error)
    return NextResponse.json({ error: "Failed to load quotes" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const user = await getAdminUser(session.userId)
    if (!user || !hasAccessToSection(user.role, "quotes")) {
      return NextResponse.json({ error: "Access denied" }, { status: 403 })
    }

    const { id, status } = await request.json()

    await sql`
      UPDATE quote_requests
      SET status = ${status}
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Update quote status error:", error)
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 })
  }
}
