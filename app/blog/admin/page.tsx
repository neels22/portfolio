'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FiSave, FiEye, FiEdit2 } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Import the Editor component dynamically
const Editor = dynamic(() => import('./Editor'), { ssr: false });

interface BlogPost {
  title: string;
  content: string;
  tags: string;
}

export default function AdminBlogPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  
  const { register, handleSubmit, setValue, watch } = useForm<BlogPost>({
    defaultValues: {
      title: '',
      content: '',
      tags: '',
    },
  });

  const content = watch('content');

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check');
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          router.push('/blog/admin/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/blog/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const onSubmit = async (data: BlogPost) => {
    try {
      const response = await fetch('/api/blog/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Blog post saved successfully!');
      } else {
        throw new Error('Failed to save blog post');
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Failed to save blog post. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Blog Admin</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            {...register('tags')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setIsPreview(false)}
                className={`flex items-center px-3 py-1 rounded-md ${
                  !isPreview ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                <FiEdit2 className="mr-1" /> Write
              </button>
              <button
                type="button"
                onClick={() => setIsPreview(true)}
                className={`flex items-center px-3 py-1 rounded-md ${
                  isPreview ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                <FiEye className="mr-1" /> Preview
              </button>
            </div>
          </div>

          {!isPreview ? (
            <Editor
              value={content}
              onChange={(value: string) => setValue('content', value)}
            />
          ) : (
            <div className="prose max-w-none p-4 border border-gray-300 rounded-md min-h-[24rem]">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <FiSave className="mr-2" /> Save Post
          </button>
        </div>
      </form>
    </div>
  );
} 