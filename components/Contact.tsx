
import { Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="w-full md:w-3/3 my-4 p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-300">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">Contact Me</h2>
      <div className="space-y-3">
        <a 
          href="mailto:hello@example.com" 
          className="flex items-center gap-2 w-full px-3 py-2 bg-neutral-50 border border-neutral-100 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
        >
          <Mail className="w-4 h-4" />
          indraneelsarode@gmail.com
        </a>
        
      </div>
    </div>
  );
};

export default Contact;
