"use client";

import { ArrowUpRight, Calendar, Lightbulb, Trophy, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Highlight, highlights, iconMap } from "@/components/highlights-data";

type HighlightCardProps = {
  highlight: Highlight;
  onSelect: (highlight: Highlight) => void;
  showImagePreview?: boolean;
};

export const HighlightCard = ({
  highlight,
  onSelect,
  showImagePreview = false,
}: HighlightCardProps) => {
  const Icon = iconMap[highlight.icon];

  return (
    <button
      type="button"
      onClick={() => onSelect(highlight)}
      className="group w-full overflow-hidden text-left bg-white/10 border border-white/10 rounded-md hover:bg-white/20 transition-colors"
    >
      {showImagePreview && (
        <>
          {highlight.image ? (
            <div className="h-56 w-full bg-black/20 border-b border-white/10">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-white/10 border-b border-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/15 border border-white/10 text-neutral-100">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          )}
        </>
      )}

      <div className="flex items-start gap-3">
        <div className="ml-3 mt-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white/15 border border-white/10 text-neutral-200">
          <Icon className="w-4 h-4" />
        </div>

        <div className="min-w-0 flex-1 p-3 pl-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-xs font-medium text-neutral-400">
                {highlight.category} · {highlight.date}
              </div>
              <h3 className="mt-0.5 text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors">
                {highlight.title}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-400 group-hover:text-white transition-colors" />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-neutral-400">
            {highlight.summary}
          </p>
        </div>
      </div>
    </button>
  );
};

type HighlightModalProps = {
  highlight: Highlight | null;
  onClose: () => void;
};

export const HighlightModal = ({ highlight, onClose }: HighlightModalProps) => {
  useEffect(() => {
    if (!highlight) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [highlight, onClose]);

  if (!highlight) return null;

  const Icon = iconMap[highlight.icon];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="highlight-title"
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-white/15 bg-neutral-950/95 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close highlight details"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/10 text-neutral-200 hover:bg-white/20 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {highlight.image ? (
            <div className="flex min-h-[320px] items-center justify-center bg-black/30 border-b border-white/10 lg:min-h-[640px] lg:border-b-0 lg:border-r">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
          ) : (
            <div className="flex min-h-[260px] items-center justify-center bg-white/10 border-b border-white/10 lg:min-h-[640px] lg:border-b-0 lg:border-r">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/15 border border-white/10 text-neutral-100">
                <Icon className="h-7 w-7" />
              </div>
            </div>
          )}

          <div className="p-6 lg:flex lg:flex-col lg:justify-center">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-neutral-200 border border-white/10">
                {highlight.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300 border border-white/10">
                <Calendar className="h-3.5 w-3.5" />
                {highlight.date}
              </span>
            </div>

            <h3 id="highlight-title" className="text-2xl font-bold text-neutral-50">
              {highlight.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              {highlight.story}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3">
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-100">
                  <Lightbulb className="h-4 w-4 text-neutral-300" />
                  Role
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {highlight.role}
                </p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-100">
                  <Trophy className="h-4 w-4 text-neutral-300" />
                  Outcome
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {highlight.outcome}
                </p>
              </div>
            </div>

            {highlight.link && (
              <a
                href={highlight.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-white/20 hover:text-white transition-colors"
              >
                View more
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Highlights = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const featuredHighlights = highlights.slice(0, 2);

  return (
    <>
      <div className="w-full md:w-3/3 p-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-400">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-neutral-50">Highlights</h2>
          <Link
            href="/highlights"
            className="text-sm font-semibold text-neutral-100 hover:text-white transition-colors flex items-center gap-1"
          >
            View all
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {featuredHighlights.map((highlight) => (
            <HighlightCard
              key={highlight.title}
              highlight={highlight}
              onSelect={setSelectedHighlight}
            />
          ))}
        </div>
      </div>

      <HighlightModal
        highlight={selectedHighlight}
        onClose={() => setSelectedHighlight(null)}
      />
    </>
  );
};

export default Highlights;
