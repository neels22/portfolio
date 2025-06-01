'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

// This would typically come from a CMS or database
const blogPosts = {
  'building-modern-web-applications': {
    title: "Building Modern Web Applications with Next.js",
    description: "A comprehensive guide to building scalable and performant web applications using Next.js and React.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    content: `
      <p>Next.js has revolutionized the way we build web applications. In this comprehensive guide, we'll explore how to leverage Next.js to create modern, performant, and scalable web applications.</p>
      
      <h2>Getting Started with Next.js</h2>
      <p>The first step in building a modern web application is setting up your development environment. Next.js makes this process incredibly simple with its zero-configuration setup.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>Built-in CSS support</li>
        <li>Automatic code splitting</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>When building with Next.js, it's important to follow certain best practices to ensure optimal performance and maintainability.</p>
    `
  },
  'future-of-ai-in-software-development': {
    title: "The Future of AI in Software Development",
    description: "Exploring how artificial intelligence is transforming the way we write and maintain code.",
    date: "March 10, 2024",
    readTime: "7 min read",
    tags: ["AI", "Software Development", "Technology"],
    content: `
      <p>Artificial Intelligence is rapidly transforming the landscape of software development. From code generation to bug detection, AI tools are becoming an integral part of the development process.</p>
      
      <h2>The Rise of AI Development Tools</h2>
      <p>Modern AI tools are capable of understanding context, generating code, and even debugging issues. This represents a significant shift in how developers approach their work.</p>
      
      <h2>Impact on Development Workflow</h2>
      <p>The integration of AI into development workflows is changing the way teams collaborate and deliver software.</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-6 font-display">Blog Post Not Found</h1>
          <Link 
            href="/blog" 
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium"
          >
            Return to Blog
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-12 group font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          <header className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-slate-900 mb-6 font-display leading-tight"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 text-slate-600 mb-8 font-medium"
            >
              <span className="text-sm">{post.date}</span>
              <span className="text-slate-300">•</span>
              <span className="text-sm">{post.readTime}</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-medium hover:bg-indigo-100 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </header>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none text-slate-700 prose-headings:font-display prose-headings:text-slate-900 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </main>
  );
}