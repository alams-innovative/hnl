import { NextResponse, type NextRequest } from "next/server"
import { getSession } from "@/lib/session"
import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"

type AdminRole = "senior_management" | "hr_manager" | "marketing_sales"

function isValidRole(role: any): role is AdminRole {
  return role === "senior_management" || role === "hr_manager" || role === "marketing_sales"
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    if (session.role !== "senior_management") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

    // Next.js 16 can provide `params` as a Promise in route handlers.
    const resolvedParams: any = typeof (params as any)?.then === "function" ? await (params as any) : params
    const id = Number(resolvedParams?.id)
    if (!Number.isFinite(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 })

    const { name, role, newPassword, isActive } = await request.json()

    if (typeof name === "string") {
      await sql`UPDATE admin_users SET name = ${name.trim()} WHERE id = ${id}`
    }

    if (typeof role !== "undefined") {
      if (!isValidRole(role)) return NextResponse.json({ error: "Invalid role" }, { status: 400 })
      await sql`UPDATE admin_users SET role = ${role} WHERE id = ${id}`
    }

    if (typeof isActive !== "undefined") {
      await sql`UPDATE admin_users SET is_active = ${Boolean(isActive)} WHERE id = ${id}`
    }

    if (typeof newPassword !== "undefined") {
      if (typeof newPassword !== "string" || newPassword.length < 8) {
        return NextResponse.json({ error: "New password must be at least 8 characters" }, { status: 400 })
      }
      const hash = await bcrypt.hash(newPassword, 10)
      await sql`UPDATE admin_users SET password_hash = ${hash} WHERE id = ${id}`
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Update user error:", error)
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()
    if (!session) return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    if (session.role !== "senior_management") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

    const resolvedParams: any = typeof (params as any)?.then === "function" ? await (params as any) : params
    const id = Number(resolvedParams?.id)
    if (!Number.isFinite(id)) return NextResponse.json({ error: "Invalid id" }, { status: 400 })

    // Soft-delete by disabling account
    await sql`UPDATE admin_users SET is_active = false WHERE id = ${id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Delete user error:", error)
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 })
  }
}


