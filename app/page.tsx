"use client";
import { useEffect, useRef } from "react";
// import BackgroundGrid from "@/components/BackgroundGrid";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import PastelGridBackgroundDarker from "@/components/BackgroundGrid";
import Link from "next/link";

const projects = [
  {
    title: "BookIt",
    description:
      "Restaurant tablebooking platform",
    tags: ["React", "Next-js", "Tailwind-css","springboot","mongodb"],
    link: "https://github.com/neels22/BookIt",
    images: ["/Bookit-1.png", "/Bookit-2.png"],
  },
  {
    title: "Eventure",
    description:
      "Event management platform for creating and managing events and booking tickets",
    tags: ["Next-js", "Springboot", "Paypal"],
    link: "https://github.com/neels22/Eventure-EMA",
    images: ["/eventure-1.png", "/eventure-2.png"],
  },
  {
    title: "Inventory Management System",
    description: "Inventory management system for a company",
    tags: ["Next-js", "Tailwind-css","Fastapi","PostgreSQL"],
    link: "https://github.com/neels22/Inventory-management",
    images: ["/inventory-1.png", "/inventory-2.png"],
  },

];

const Index = () => {
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
        className="relative z-10 max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8"
      >
        {/* Main two-column layout (left: Hero + Socials + About + Leadership; right: Skills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            <Hero
              name="Indraneel"
              title="Software Engineer and Masters student"
            />

            {/* Socials & About side by side on small+ screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Socials />
              <About />
            </div>

            <Leadership />
          </div>

          {/* Right Column (Skills) */}
          <div className="md:col-span-1">
            <Skills />
            <Contact />

          </div>
        </div>

        <div className="w-full col-span-1">
            </div>

        {/* Contact Section (full width) */}

        {/* Projects Section */}
        <div className="animate-fade-in animate-delay-200 opacity-0 translate-y-5 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">Projects</h2>
            <Link
              href="/all-projects"
              className="text-sm font-medium text-neutral-800 hover:text-neutral-900 transition-colors flex items-center gap-1"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project, index) => (
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

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
