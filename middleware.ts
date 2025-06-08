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
  // Check if the request is for the admin route
  if (request.nextUrl.pathname.startsWith('/blog/admin')) {
    // Get the auth cookie
    const authCookie = request.cookies.get('auth')
    
    // If no auth cookie or auth is not true, redirect to login
    if (!authCookie || authCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/blog/admin/:path*'
} 