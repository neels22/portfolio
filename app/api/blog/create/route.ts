import { NextResponse } from 'next/server'
import { createPost } from '@/lib/posts'
import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  content: z.string().min(1),
  tags: z.array(z.string()),
  published: z.boolean().optional(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = createPostSchema.parse(json)

    const post = await createPost(body)

    return NextResponse.json(post)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }

    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 