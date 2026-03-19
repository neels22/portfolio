import { Github, Linkedin, Twitter, Instagram, Mail, NotebookText, FileText, Code2 } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
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
      name:"Medium",
      url:"https://medium.com/@indraneelsarode22neel",
      icon:<NotebookText className="w-4 h-4" />
    }
  ];

  return (
    <div className="h-full w-full p-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-200">
      <h2 className="text-xl font-semibold text-neutral-50 mb-4">Links</h2>
      <div className="grid grid-cols-2 gap-2">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/10 rounded-md text-sm font-medium text-neutral-200 hover:bg-white/20 transition-colors"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
