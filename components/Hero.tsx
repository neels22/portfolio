
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
}

const Hero = ({ name, title }: HeroProps) => {
  return (
    <div className="group w-full p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="flex flex-col space-y-2">
        <div className="inline-flex items-center mb-1">
          <span className="text-xs font-medium px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full">
            Portfolio
          </span>
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight text-balance group-hover:text-neutral-800 transition-colors">
          Hi, I am {name}
        </h1>
        <p className="text-lg text-neutral-600">
          {title}
        </p>
        <div className="pt-2">
          <a 
            href="#about" 
            className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors"
          >
            Learn more
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
