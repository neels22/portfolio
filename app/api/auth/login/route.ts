import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { password } = await request.json();
  
  // Debug log (remove in production)
  console.log('Login attempt:', {
    providedPassword: password,
    expectedPassword: process.env.ADMIN_PASSWORD,
    hasToken: !!process.env.ADMIN_TOKEN
  });
  
  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    
    // Set the admin token cookie
    response.cookies.set('admin_token', process.env.ADMIN_TOKEN!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    
    return response;
  }
  
  return NextResponse.json(
    { success: false, message: 'Invalid password' },
    { status: 401 }
  );
} 