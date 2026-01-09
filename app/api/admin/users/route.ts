import { NextResponse, type NextRequest } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"

type AdminRole = "senior_management" | "hr_manager" | "marketing_sales"

function isValidRole(role: any): role is AdminRole {
  return role === "senior_management" || role === "hr_manager" || role === "marketing_sales"
}

export async function GET() {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    if (session.role !== "senior_management") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

    const users = await sql`
      SELECT id, email, name, role, is_active, created_at, last_login
      FROM admin_users
      ORDER BY created_at DESC
    `

    return NextResponse.json({ users })
  } catch (error) {
    console.error("[v0] Get users error:", error)
    return NextResponse.json({ error: "Failed to load users" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    if (session.role !== "senior_management") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

    const { email, name, role, password } = await request.json()

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }
    if (!isValidRole(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 })
    }
    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    const hash = await bcrypt.hash(password, 10)

    const inserted = await sql`
      INSERT INTO admin_users (email, password_hash, name, role, is_active)
      VALUES (${email.toLowerCase()}, ${hash}, ${name.trim()}, ${role}, true)
      RETURNING id, email, name, role, is_active, created_at, last_login
    `

    return NextResponse.json({ success: true, user: inserted[0] })
  } catch (error: any) {
    console.error("[v0] Create user error:", error)
    // Unique violation etc.
    const message = typeof error?.message === "string" ? error.message : "Failed to create user"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


