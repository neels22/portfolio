import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const adminToken = cookieStore.get('admin_token')?.value;

    if (adminToken === process.env.ADMIN_TOKEN) {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  } catch (err) {
    console.error('Auth check error:', err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}