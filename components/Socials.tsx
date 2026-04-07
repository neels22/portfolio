import Link from 'next/link';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  NotebookText,
  FileText,
  Code2,
  BookOpen
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  external?: boolean;
}

const Socials = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1BNAQ4znxmKehU4quu1nXuYjR0AVhur9q/view?usp=drive_link',
      icon: <FileText className="w-4 h-4" />
    },

    {
      name: 'Email',
      url: 'mailto:indraneelsarode@gmail.com',
      icon: <Mail className="w-4 h-4" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/indraneel-sarode-587178206/',
      icon: <Linkedin className="w-4 h-4" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/neels22',
      icon: <Github className="w-4 h-4" />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/indraneel_sarode/',
      icon: <Code2 className="w-4 h-4" />
    },

    {
      name: 'Twitter',
      url: 'https://x.com/SaneWolf91',
      icon: <Twitter className="w-4 h-4" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/indra.neel_/',
      icon: <Instagram className="w-4 h-4" />
    },

    {
      name: 'Medium',
      url: 'https://medium.com/@indraneelsarode22neel',
      icon: <NotebookText className="w-4 h-4" />
    },
    {
      name: 'Blog',
      url: '/blog',
      external: false,
      icon: <BookOpen className="w-4 h-4" />
    }
  ];

  const pillClass =
    'flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/10 rounded-md text-sm font-medium text-neutral-200 hover:bg-white/20 transition-colors';

  return (
    <div className="h-full w-full p-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-200">
      <h2 className="text-xl font-semibold text-neutral-50 mb-4">Links</h2>
      <div className="grid grid-cols-2 gap-2">
        {socialLinks.map((link, index) => {
          const isLastOdd =
            index === socialLinks.length - 1 && socialLinks.length % 2 === 1;
          const layoutClass = isLastOdd
            ? 'col-span-2 justify-self-center w-[calc((100%-0.5rem)/2)]'
            : '';
          const className = `${pillClass} ${layoutClass}`.trim();
          const style = { animationDelay: `${(index + 1) * 50}ms` };

          if (link.external === false) {
            return (
              <Link
                key={link.name}
                href={link.url}
                className={className}
                style={style}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          }

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              style={style}
            >
              {link.icon}
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
