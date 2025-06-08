import { sql } from '@vercel/postgres';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const { rows } = await sql`
      SELECT * FROM blog_posts 
      ORDER BY date DESC
    `;
    
    return rows.map(row => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      content: row.content,
      date: row.date,
      tags: row.tags || []
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { rows } = await sql`
      SELECT * FROM blog_posts 
      WHERE slug = ${slug}
    `;
    
    if (rows.length === 0) {
      return null;
    }
    
    return {
      id: rows[0].id,
      slug: rows[0].slug,
      title: rows[0].title,
      content: rows[0].content,
      date: rows[0].date,
      tags: rows[0].tags || []
    };
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

export async function createPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost | null> {
  try {
    const { rows } = await sql`
      INSERT INTO blog_posts (slug, title, content, date, tags)
      VALUES (
        ${post.slug},
        ${post.title},
        ${post.content},
        ${post.date},
        ${JSON.stringify(post.tags)}
      )
      RETURNING *
    `;
    
    return {
      id: rows[0].id,
      slug: rows[0].slug,
      title: rows[0].title,
      content: rows[0].content,
      date: rows[0].date,
      tags: rows[0].tags || []
    };
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
} 