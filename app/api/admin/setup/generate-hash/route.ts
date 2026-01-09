import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: "Password is required" }, { status: 400 })
    }

    const hash = await bcrypt.hash(password, 10)

    return NextResponse.json({ hash })
  } catch (error) {
    console.error("[v0] Generate hash error:", error)
    return NextResponse.json({ error: "Failed to generate hash" }, { status: 500 })
  }
}
