import { Github, Linkedin, Twitter, Instagram, Mail, NotebookText } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const Socials = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      url: 'mailto:indraneelsarode@gmail.com',
      icon: <Mail className="w-4 h-4" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/neels22',
      icon: <Github className="w-4 h-4" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/indraneel-sarode-587178206/',
      icon: <Linkedin className="w-4 h-4" />
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
    <div className="h-full w-full p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-200">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">LINKS</h2>
      <div className="grid grid-cols-2 gap-2">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
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
