import { NextResponse, type NextRequest } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })

    const { name, currentPassword, newPassword } = await request.json()

    if (typeof name !== "undefined" && (typeof name !== "string" || !name.trim())) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 })
    }

    if (typeof newPassword !== "undefined") {
      if (typeof currentPassword !== "string" || !currentPassword) {
        return NextResponse.json({ error: "Current password is required" }, { status: 400 })
      }
      if (typeof newPassword !== "string" || newPassword.length < 8) {
        return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 })
      }
    }

    const rows = await sql`
      SELECT id, password_hash
      FROM admin_users
      WHERE id = ${session.userId} AND is_active = true
    `

    if (!rows?.length) return NextResponse.json({ error: "User not found" }, { status: 404 })

    if (typeof name === "string") {
      await sql`
        UPDATE admin_users
        SET name = ${name.trim()}
        WHERE id = ${session.userId}
      `
    }

    if (typeof newPassword !== "undefined") {
      const ok = await bcrypt.compare(currentPassword, rows[0].password_hash)
      if (!ok) return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 })
      const hash = await bcrypt.hash(newPassword, 10)
      await sql`
        UPDATE admin_users
        SET password_hash = ${hash}
        WHERE id = ${session.userId}
      `
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Profile update error:", error)
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
}


