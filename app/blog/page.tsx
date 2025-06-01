'use client';

import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "building-modern-web-applications",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    title: "The Future of AI in Software Development",
    description: "Exploring how artificial intelligence is transforming the way we write and maintain code.",
    date: "March 10, 2024",
    readTime: "7 min read",
    slug: "future-of-ai-in-software-development",
    tags: ["AI", "Software Development", "Technology"]
  },
  // Add more blog posts as needed
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <a 
      href={`/blog/${post.slug}`}
      className="group block bg-white/80 backdrop-blur-md border border-neutral-200/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors flex-shrink-0 ml-3" />
        </div>
        
        <p className="text-neutral-600 mb-6 line-clamp-2 text-sm leading-relaxed">
          {post.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="font-medium">{post.date}</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2.5 py-1 bg-neutral-100/80 text-neutral-700 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Blog</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Thoughts, insights, and experiences on software development, technology, and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
