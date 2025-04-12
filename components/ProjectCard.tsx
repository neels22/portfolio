
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, image, link, index }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block aspect-[9/16] overflow-hidden bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-full flex flex-col">
        {image ? (
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
            <span className="text-neutral-400 font-medium">Image</span>
          </div>
        )}
        
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
