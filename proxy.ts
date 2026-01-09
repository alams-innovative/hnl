import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Full session verification happens in API routes
export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  const publicAdminPaths = ["/admin/login", "/admin/setup", "/admin/debug-login"]

  // Protect admin routes - simple cookie presence check
  // Full JWT verification happens in API routes
  if (path.startsWith("/admin") && !publicAdminPaths.includes(path)) {
    const sessionCookie = request.cookies.get("admin_session")

    if (!sessionCookie?.value) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // Redirect to dashboard if already logged in
  if (path === "/admin/login") {
    const sessionCookie = request.cookies.get("admin_session")
    if (sessionCookie?.value) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
