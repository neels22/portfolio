"use client";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import PastelGridBackgroundDarker from "@/components/BackgroundGrid";

const allProjects = [
  {
    title: "BookIt",
    description: "Restaurant table booking platform with real-time availability and reservation management",
    tags: ["React", "Next-js", "Tailwind-css", "Springboot", "MongoDB"],
    link: "https://github.com/neels22/BookIt",
    images: ["/Bookit-1.png", "/Bookit-2.png"],
  },
  {
    title: "Eventure",
    description: "Event management platform for creating and managing events and booking tickets",
    tags: ["Next-js", "Springboot", "Paypal"],
    link: "https://github.com/neels22/Eventure-EMA",
    images: ["/eventure-1.png", "/eventure-2.png"],
  },
  {
    title: "Inventory Management System",
    description: "Inventory management system for a company with real-time tracking and reporting",
    tags: ["Next-js", "Tailwind-css", "Fastapi", "PostgreSQL"],
    link: "https://github.com/neels22/Inventory-management",
    images: ["/inventory-1.png", "/inventory-2.png"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "https://github.com/neels22/ecommerce-platform",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features",
    tags: ["Vue.js", "Firebase", "Tailwind-css", "Socket.io"],
    link: "https://github.com/neels22/task-manager",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts and interactive maps",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    link: "https://github.com/neels22/weather-dashboard",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comments, and user authentication",
    tags: ["Next-js", "Prisma", "PostgreSQL", "NextAuth"],
    link: "https://github.com/neels22/blog-platform",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design and smooth animations",
    tags: ["Next-js", "Tailwind-css", "Framer Motion", "TypeScript"],
    link: "https://github.com/neels22/portfolio",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];

const AllProjects = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.1 }
    );

    const contentElement = contentRef.current;
    if (contentElement) {
      const children = contentElement.querySelectorAll(".animate-fade-in");
      children.forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (contentElement) {
        const children = contentElement.querySelectorAll(".animate-fade-in");
        children.forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <>
      <PastelGridBackgroundDarker />
      
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-12 space-y-8"
      >
        {/* Header Section */}
        <div className="animate-fade-in opacity-0 translate-y-5 transition-all duration-500">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800">
              All Projects
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A comprehensive collection of my work, showcasing various technologies and problem-solving approaches
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="animate-fade-in animate-delay-200 opacity-0 translate-y-5 transition-all duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                images={project.images}
                link={project.link}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="animate-fade-in animate-delay-400 opacity-0 translate-y-5 transition-all duration-500">
          <div className="text-center space-y-4 pt-8 border-t border-neutral-200/50">
            <p className="text-neutral-600">
              Interested in collaborating or have a project in mind?
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/neels22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <span className="text-neutral-400">•</span>
              <Link
                href="/#contact"
                className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;