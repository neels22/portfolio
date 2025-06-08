import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This is a simple authentication check
// In a real app, you would want to use a proper auth solution like NextAuth.js
const isAuthenticated = (request: NextRequest) => {
  // For demo purposes, we'll check for a simple cookie
  // In production, use proper authentication
  const authCookie = request.cookies.get('auth')
  return authCookie?.value === 'true'
}

export function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/blog/admin')) {
    if (!isAuthenticated(request)) {
      try {
        const loginUrl = new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
      } catch (error) {
        // Fallback to a simple string concatenation if URL construction fails
        return NextResponse.redirect('/login')
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/blog/admin/:path*'],
} 