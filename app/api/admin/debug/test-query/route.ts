import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log("[v0] Testing direct database query for:", email)

    // Test database connection
    const testQuery = await sql`SELECT NOW() as current_time`
    console.log("[v0] Database connection test:", testQuery)

    // Try to find the user
    const users = await sql`
      SELECT id, email, name, role, is_active, password_hash, created_at
      FROM admin_users 
      WHERE email = ${email}
    `

    console.log("[v0] User query result:", users)

    if (users.length === 0) {
      return NextResponse.json({
        found: false,
        message: "User not found in database",
        email: email,
        databaseConnected: true,
      })
    }

    const user = users[0]

    return NextResponse.json({
      found: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        is_active: user.is_active,
        created_at: user.created_at,
        hasPasswordHash: !!user.password_hash,
        passwordHashLength: user.password_hash?.length || 0,
      },
      databaseConnected: true,
    })
  } catch (error) {
    console.error("[v0] Debug query error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
        databaseConnected: false,
      },
      { status: 500 },
    )
  }
}
