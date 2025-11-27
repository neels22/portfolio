import Link from 'next/link'
import { getAllPosts, Post } from '@/lib/posts'
import { Card } from '@/components/ui/card'

export const revalidate = 60 // Revalidate every minute

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
