import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  
  try {
    const files = await fs.readdir(blogDir);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = path.join(blogDir, file);
          const content = await fs.readFile(filePath, 'utf-8');
          const { data, content: markdownContent } = matter(content);
          
          return {
            slug: file.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            tags: data.tags || [],
            content: markdownContent,
          };
        })
    );
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, content: markdownContent } = matter(content);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      content: markdownContent,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
} 