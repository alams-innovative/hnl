import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"

export interface AdminUser {
  id: number
  email: string
  name: string
  role: "senior_management" | "hr_manager" | "marketing_sales"
  isActive: boolean
}

export async function verifyAdminCredentials(email: string, password: string): Promise<AdminUser | null> {
  try {
    console.log("[v0] Verifying credentials for:", email)

    const result = await sql`
      SELECT id, email, name, password_hash, role, is_active
      FROM admin_users
      WHERE email = ${email} AND is_active = true
    `

    console.log("[v0] User found in database:", result.length > 0)

    if (result.length === 0) {
      return null
    }

    const user = result[0]
    console.log("[v0] Compare password with hash...")

    const isValidPassword = await bcrypt.compare(password, user.password_hash)

    console.log("[v0] Password valid:", isValidPassword)

    if (!isValidPassword) {
      return null
    }

    await sql`
      UPDATE admin_users
      SET last_login = CURRENT_TIMESTAMP
      WHERE id = ${user.id}
    `

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isActive: user.is_active,
    }
  } catch (error) {
    console.error("[v0] Admin auth error:", error)
    return null
  }
}

export async function getAdminUser(userId: number): Promise<AdminUser | null> {
  try {
    const result = await sql`
      SELECT id, email, name, role, is_active
      FROM admin_users
      WHERE id = ${userId} AND is_active = true
    `

    if (result.length === 0) {
      return null
    }

    return {
      id: result[0].id,
      email: result[0].email,
      name: result[0].name,
      role: result[0].role,
      isActive: result[0].is_active,
    }
  } catch (error) {
    console.error("[v0] Get admin user error:", error)
    return null
  }
}

// Role-based permissions
export const permissions = {
  senior_management: {
    canAccessAll: true,
    sections: ["partnerships", "careers", "internships", "inquiries", "distributors", "quotes", "chatbot"],
  },
  hr_manager: {
    canAccessAll: false,
    sections: ["careers", "internships"],
  },
  marketing_sales: {
    canAccessAll: false,
    sections: ["inquiries", "distributors", "quotes", "chatbot"],
  },
}

export function hasAccessToSection(role: AdminUser["role"], section: string): boolean {
  const rolePermissions = permissions[role]
  return rolePermissions.canAccessAll || rolePermissions.sections.includes(section)
}
