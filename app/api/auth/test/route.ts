import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasPassword: !!process.env.ADMIN_PASSWORD,
    hasToken: !!process.env.ADMIN_TOKEN,
    // Don't send the actual values for security
  });
} 