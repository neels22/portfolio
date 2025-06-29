'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export default function AdminPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    tags: '',
  })

  const handleLogout = () => {
    // Remove the auth cookie
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    toast.success('Logged out successfully')
    router.push('/login')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
        }),
      })

      if (!response.ok) throw new Error('Failed to create post')

      toast.success('Post created successfully')
      router.push('/blog')
      router.refresh()
    } catch (error) {
      toast.error('Failed to create post')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create New Blog Post</h1>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          Logout
        </Button>
      </div>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              placeholder="my-blog-post"
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="tech, programming, web"
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="min-h-[300px]"
              placeholder={`# Welcome to Your Blog Post

## Introduction

This is a **bold** word and *italic* word. You can also use ~~strikethrough~~ text.

### Key Points

- List item 1
- List item 2
- List item 3

1. Ordered item 1
2. Ordered item 2
3. Ordered item 3

> This is a blockquote that will be styled beautifully.

---

### Code Examples

Inline code: \`console.log('Hello World')\`

Code blocks:
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Links

[Visit our website](https://example.com)

---

Your content will be rendered with beautiful Medium-style formatting!`}
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Post'}
          </Button>
        </form>
      </Card>
    </div>
  )
} 