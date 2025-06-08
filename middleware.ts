import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for the admin route
  if (request.nextUrl.pathname.startsWith('/blog/admin')) {
    // Skip middleware for login page
    if (request.nextUrl.pathname === '/blog/admin/login') {
      return NextResponse.next();
    }

    // Check for admin token in cookies
    const adminToken = request.cookies.get('admin_token')?.value;
    
    if (adminToken !== process.env.ADMIN_TOKEN) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL('/blog/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/blog/admin/:path*',
}; 