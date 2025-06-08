import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  name: string;
  title: string;
}

const Hero = ({ name, title }: HeroProps) => {
  return (
    <div className="group w-full p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="flex flex-col-reverse sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col space-y-2 flex-1">
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
        <div className="flex-shrink-0 flex justify-center items-center w-full sm:w-auto mt-4 sm:mt-0">
          <Image
            src="/image-1.png"
            alt="Profile photo"
            width={250}
            height={250}
            className="rounded-full object-cover border-neutral-200 w-36 h-36 sm:w-60 sm:h-60 lg:w-[280px] lg:h-[280px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
