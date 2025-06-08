'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Check if user is already logged in
  useEffect(() => {
    const authCookie = document.cookie.split('; ').find(row => row.startsWith('auth='))
    if (authCookie && authCookie.split('=')[1] === 'true') {
      router.push('/blog/admin')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const username = formData.get('username')
      const password = formData.get('password')

      console.log('Login attempt:', { username, password })
      console.log('Environment variables:', {
        envUsername: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
        envPassword: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
      })

      // Check credentials against environment variables
      if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && 
          password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
        // Set auth cookie with expiration (7 days)
        const expirationDate = new Date()
        expirationDate.setDate(expirationDate.getDate() + 7)
        document.cookie = `auth=true; path=/; expires=${expirationDate.toUTCString()}`
        toast.success('Login successful')
        router.push('/blog/admin')
      } else {
        toast.error('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('An error occurred during login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              required
              placeholder="admin"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Card>
    </div>
  )
} 