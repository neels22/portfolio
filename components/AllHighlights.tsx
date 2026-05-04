"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PastelGridBackgroundDarker from "@/components/BackgroundGrid";
import { HighlightCard, HighlightModal } from "@/components/Highlights";
import { Highlight, highlights } from "@/components/highlights-data";

const AllHighlights = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);

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
              All Highlights
            </h1>
            <p className="text-lg text-neutral-200 max-w-2xl mx-auto font-semibold">
              Hackathons, talks, recognition, and moments that shaped the work beyond the project list
            </p>
          </div>
        </div>

        <div className="animate-fade-in animate-delay-200 opacity-0 translate-y-5 transition-all duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight) => (
              <HighlightCard
                key={highlight.title}
                highlight={highlight}
                onSelect={setSelectedHighlight}
                showImagePreview
              />
            ))}
          </div>
        </div>
      </div>

      <HighlightModal
        highlight={selectedHighlight}
        onClose={() => setSelectedHighlight(null)}
      />
    </>
  );
};

export default AllHighlights;
