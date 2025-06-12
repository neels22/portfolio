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
      <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
        <span className="text-neutral-400 font-medium">Image</span>
      </div>
    );
  }

  return (
    <div className="aspect-video relative overflow-hidden">
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
      className="group block aspect-[9/16] overflow-hidden bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-full flex flex-col">
        <ImageSlideshow images={images} />
        
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">{title}</h3>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </div>
          <p className="text-xs text-neutral-600 mb-auto line-clamp-3">{description}</p>
          <div className="mt-4 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] px-3 py-2 bg-neutral-100 text-neutral-900 rounded-2xl">
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
