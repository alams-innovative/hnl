import { NextResponse } from "next/server"
import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST() {
  try {
    const password = "HNL@2026!"
    const hash = await bcrypt.hash(password, 10)

    // Clear existing users
    await sql`TRUNCATE TABLE admin_users CASCADE`

    // Create default users with fresh hash
    await sql`
      INSERT INTO admin_users (email, password_hash, name, role) VALUES
      ('talha@hnl.com.pk', ${hash}, 'Talha', 'senior_management'),
      ('admin@hnl.com.pk', ${hash}, 'Senior Admin', 'senior_management'),
      ('hr@hnl.com.pk', ${hash}, 'HR Manager', 'hr_manager'),
      ('sales@hnl.com.pk', ${hash}, 'Sales Team', 'marketing_sales'),
      ('marketing@hnl.com.pk', ${hash}, 'Marketing Team', 'marketing_sales')
    `

    return NextResponse.json({
      message: "Default admin users created successfully",
      password: password,
      accounts: ["talha@hnl.com.pk", "admin@hnl.com.pk", "hr@hnl.com.pk", "sales@hnl.com.pk", "marketing@hnl.com.pk"],
    })
  } catch (error) {
    console.error("[v0] Create users error:", error)
    return NextResponse.json({ error: "Failed to create users" }, { status: 500 })
  }
}
