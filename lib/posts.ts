import { prisma } from './db'

export type Post = {
  id: string
  title: string
  slug: string
  content: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  published: boolean
}

export type CreatePostInput = {
  title: string
  slug: string
  content: string
  tags: string[]
  published?: boolean
}

export type UpdatePostInput = Partial<CreatePostInput>

export async function getAllPosts() {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
  })
}

export async function createPost(data: CreatePostInput) {
  return prisma.post.create({
    data: {
      ...data,
      published: data.published ?? true,
    },
  })
}

export async function updatePost(slug: string, data: UpdatePostInput) {
  return prisma.post.update({
    where: { slug },
    data,
  })
}

export async function deletePost(slug: string) {
  return prisma.post.delete({
    where: { slug },
  })
} 