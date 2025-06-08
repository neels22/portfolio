import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createPost } from '@/lib/db';

export async function POST(request: Request) {
  // Check authentication
  const cookieStore = await cookies();
  const adminToken = cookieStore.get('admin_token')?.value;
  
  if (adminToken !== process.env.ADMIN_TOKEN) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { title, content, tags } = await request.json();
    
    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Create post in database
    const post = await createPost({
      slug,
      title,
      content,
      date: new Date().toISOString(),
      tags: tags.split(',').map((tag: string) => tag.trim()),
    });
    
    if (!post) {
      throw new Error('Failed to create post');
    }
    
    return NextResponse.json({ success: true, slug });
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save blog post' },
      { status: 500 }
    );
  }
} 