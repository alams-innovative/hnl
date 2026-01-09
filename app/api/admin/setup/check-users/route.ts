import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET() {
  try {
    const users = await sql`
      SELECT id, email, name, role, is_active, created_at, last_login
      FROM admin_users
      ORDER BY id
    `

    return NextResponse.json({ users })
  } catch (error) {
    console.error("[v0] Check users error:", error)
    return NextResponse.json({ error: "Failed to check users", users: [] }, { status: 500 })
  }
}
