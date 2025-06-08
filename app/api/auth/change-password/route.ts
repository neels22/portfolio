import { NextResponse } from 'next/server'
import { updateAdminPassword, verifyAdminCredentials } from '@/lib/admin'
import { z } from 'zod'

const changePasswordSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const { username, currentPassword, newPassword } = changePasswordSchema.parse(json)

    // Verify current credentials
    const isValid = await verifyAdminCredentials(username, currentPassword)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 401 }
      )
    }

    // Update password
    await updateAdminPassword(username, newPassword)

    return NextResponse.json({ success: true, message: 'Password updated successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }

    console.error('Change password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 