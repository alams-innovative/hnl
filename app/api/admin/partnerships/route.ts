import { NextResponse } from "next/server"
import { getSession } from "@/lib/session"
import { query } from "@/lib/db"

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check permissions
    if (session.role !== "senior_management") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const result = await query(`SELECT * FROM partnership_applications ORDER BY submitted_at DESC`, [])

    return NextResponse.json({ partnerships: result.rows })
  } catch (error) {
    console.error("Failed to fetch partnerships:", error)
    return NextResponse.json({ error: "Failed to fetch partnerships" }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (session.role !== "senior_management") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { id, status } = await request.json()

    await query(`UPDATE partnership_applications SET status = $1 WHERE id = $2`, [status, id])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to update partnership status:", error)
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 })
  }
}
