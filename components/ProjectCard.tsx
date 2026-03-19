import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link: string;
  index: number;
}

const ImageSlideshow = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
        <span className="text-neutral-500 font-medium">Image</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-t-2xl h-56 sm:h-64 lg:h-72">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const ProjectCard = ({ title, description, tags, images, link, index }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block overflow-hidden bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 card-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-full flex flex-col">
        <ImageSlideshow images={images} />
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-neutral-50 group-hover:text-white transition-colors">{title}</h3>
            <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
          </div>
          <p className="text-sm text-neutral-300 mb-auto leading-relaxed line-clamp-3">{description}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 bg-white/15 text-neutral-200 rounded-2xl">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
