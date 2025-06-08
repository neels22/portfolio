import { ArrowUpRight, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in animate-delay-500">
      <div className="mb-4 md:mb-0">
        <Link href="/blog" className="group">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700">Blog</h2>
            <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700" />
          </div>
          <p className="text-sm text-neutral-600 mt-1">
            Thoughts on software, design and leadership
          </p>
        </Link>
      </div>
      <div className="flex gap-3">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
