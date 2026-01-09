import { NextResponse } from "next/server"
import { verifySession } from "@/lib/session"
import { query } from "@/lib/db"

export async function GET() {
  const session = await verifySession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!["senior_management", "marketing_sales"].includes(session.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  try {
    const result = await query(`SELECT * FROM chatbot_conversations ORDER BY started_at DESC`)

    return NextResponse.json({ conversations: result.rows })
  } catch (error) {
    console.error("[v0] Fetch chatbot conversations error:", error)
    return NextResponse.json({ error: "Failed to fetch conversations" }, { status: 500 })
  }
}
