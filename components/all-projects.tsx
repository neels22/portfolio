"use client";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import PastelGridBackgroundDarker from "@/components/BackgroundGrid";

export const allProjects = [
  {
    title: "SnapAsk",
    description: "An AI-powered screenshot assistant for macOS. Capture any part of your screen with a global shortcut, then ask questions about it using multimodal AI.",
    tags: ["Electron.js", "React", "LLMs", "SQLite"],
    link: "https://github.com/neels22/SnapAsk",
    images: ["/snapask.gif"],
  },
  {
    title: "Transitly (Hackathon Project)",
    description: "AWS Hackathon project that automates moving paperwork. Enter your addresses and dates; Transitly plans tasks and autofills forms (USPS, utilities, ISP) with your approval, keeping an auditable checklist.",
    tags: ["LangGraph", "FastAPI", "React", "DynamoDB", "AWS Cognito", "Nova Act"],
    link: "https://github.com/neels22/Transitly",
    images: ["/transitly.png", "/transitly2.png"],
  },
  {
    title: "Safeguard AI (Hackathon Project)",
    description: "AI-powered video intelligence for law enforcement. Ask natural-language questions about incident videos and get instant, timestamped, explainable answers with frame-level analysis.",
    tags: ["FastAPI", "React", "TypeScript", "MongoDB", "LangChain", "LangGraph", "OpenAI GPT-4", "Gemini"],
    link: "https://github.com/Mongo-db-hackathon/safeguard-ai",
    images: ["/safeguard-ai.png"],
  },
  {
    title: "Perplexity-2.0",
    description: "Perplexity-2.0 is a chatbot that can answer questions and Search the web for you",
    tags: ["LangGraph", "FastAPI","Next-js","Gemini"],
    link: "https://perplexity.indraneelsarode.com",
    images: ["/perplexity-1.png", "/perplexity-2.png"],
  },
 
  {
    title: "BookIt",
    description: "Restaurant table booking platform with real-time availability and reservation management",
    tags: ["React", "Next-js", "Tailwind-css", "Springboot", "MongoDB"],
    link: "https://github.com/neels22/BookIt",
    images: ["/Bookit-1.png", "/Bookit-2.png"],
  },
  {
    title: "Inventory Management System",
    description: "Inventory management system for a company with real-time tracking and reporting and MCP-Server-Client integration",
    tags: ["Next-js", "Tailwind-css", "Fastapi", "PostgreSQL","MCP-Server-Client"],
    link: "https://github.com/neels22/Inventory-management",
    images: ["/inventory-1.png", "/inventory-2.png"],
  },
  
  {
    title: "Eventure",
    description: "Event management platform for creating and managing events and booking tickets",
    tags: ["Next-js", "Springboot", "Paypal"],
    link: "https://github.com/neels22/Eventure-EMA",
    images: ["/eventure-1.png", "/eventure-2.png"],
  },
  {
    title: "AI Trip Planner",
    description: "AI Trip Planner Agent with real-time weather updates, itinerary suggestions and budget calculator",
    tags: ["LangGraph", "FastAPI","Streamlit"],
    link: "https://github.com/neels22/Ai_Trip_Planner",
    images: ["/ai-trip.png", "/ai-trip.png"],
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
              className="flex items-center gap-2 text-neutral-100 hover:text-white transition-colors group font-semibold"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold">Back to Home</span>
            </Link>
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-50">
              All Projects
            </h1>
            <p className="text-lg text-neutral-200 max-w-2xl mx-auto font-semibold">
              A comprehensive collection of my work, showcasing various technologies and problem-solving approaches
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="animate-fade-in animate-delay-200 opacity-0 translate-y-5 transition-all duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="text-center space-y-4 pt-8 border-t border-neutral-200/30">
            <p className="text-neutral-200 font-semibold">
              Connect with me on GitHub
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://github.com/neels22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-100 hover:text-white transition-colors group font-semibold"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;