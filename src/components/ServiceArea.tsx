"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const areas = [
  {
    id: "central",
    name: "Central Tuscaloosa",
    tagline: "Fast cash offers",
    x: 50,
    y: 46,
    core: true,
  },
  {
    id: "north",
    name: "North Tuscaloosa",
    tagline: "Quick closings",
    x: 49,
    y: 34,
    core: true,
  },
  {
    id: "south",
    name: "South Tuscaloosa",
    tagline: "We buy homes as-is",
    x: 51,
    y: 58,
    core: true,
  },
  {
    id: "indian-hills",
    name: "Indian Hills",
    tagline: "No repairs needed",
    x: 57,
    y: 40,
    core: true,
  },
  {
    id: "forest-lake",
    name: "Forest Lake",
    tagline: "Fast, certain sales",
    x: 44,
    y: 38,
    core: true,
  },
  {
    id: "northport",
    name: "Northport",
    tagline: "Local cash buyer",
    x: 24,
    y: 42,
    core: true,
  },
  {
    id: "cottondale",
    name: "Cottondale",
    tagline: "Fair cash offers",
    x: 72,
    y: 50,
    core: false,
  },
  {
    id: "brookwood",
    name: "Brookwood",
    tagline: "Flexible closing dates",
    x: 66,
    y: 30,
    core: false,
  },
  {
    id: "coaling",
    name: "Coaling",
    tagline: "We come to you",
    x: 78,
    y: 44,
    core: false,
  },
  {
    id: "gordo",
    name: "Gordo",
    tagline: "Hassle-free process",
    x: 16,
    y: 62,
    core: false,
  },
  {
    id: "moundville",
    name: "Moundville",
    tagline: "Cash in hand",
    x: 36,
    y: 70,
    core: false,
  },
  {
    id: "greater",
    name: "Greater Tuscaloosa Area",
    tagline: "And nearby communities",
    x: 50,
    y: 50,
    core: true,
  },
] as const;

type AreaId = (typeof areas)[number]["id"];

function PinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceMap({
  activeId,
  onSelect,
}: {
  activeId: AreaId;
  onSelect: (id: AreaId) => void;
}) {
  const activeArea = areas.find((area) => area.id === activeId) ?? areas[0];

  return (
    <div className="relative aspect-square w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-mist bg-[#f7f5ef] shadow-[0_8px_32px_rgba(26,35,50,0.08)]">
      <Image
        src="/assets/tuscaloosa-map.jpg"
        alt="Map of Tuscaloosa and surrounding areas we buy houses in"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
      />

      <div className="absolute inset-0 bg-white/5" aria-hidden />

      {/* Active area highlight */}
      <div
        className="pointer-events-none absolute z-10 rounded-full bg-teal/20 transition-all duration-500 ease-out"
        style={{
          left: `${activeArea.x}%`,
          top: `${activeArea.y}%`,
          width: activeArea.id === "greater" ? "70%" : "22%",
          height: activeArea.id === "greater" ? "70%" : "22%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="pointer-events-none absolute z-10 animate-ping rounded-full bg-teal/30"
        style={{
          left: `${activeArea.x}%`,
          top: `${activeArea.y}%`,
          width: activeArea.id === "greater" ? "8%" : "6%",
          height: activeArea.id === "greater" ? "8%" : "6%",
          transform: "translate(-50%, -50%)",
          animationDuration: "2s",
        }}
      />

      {/* Top badge */}
      <div className="absolute top-3 left-3 z-20 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 shadow-[0_4px_20px_rgba(26,35,50,0.12)] backdrop-blur-sm sm:top-4 sm:left-4 sm:gap-2.5 sm:px-3.5 sm:py-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
            <path
              d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="font-secondary text-fine leading-snug text-charcoal">
          Proudly serving{" "}
          <strong className="font-semibold text-navy">
            Tuscaloosa &amp; surrounding areas
          </strong>
        </p>
      </div>

      {/* Map markers */}
      {areas.map((area) => {
        const isActive = area.id === activeId;
        const isGreater = area.id === "greater";

        if (isGreater) return null;

        return (
          <button
            key={area.id}
            type="button"
            onClick={() => onSelect(area.id)}
            className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
              isActive ? "z-30 scale-100" : "scale-90 opacity-75 hover:scale-95 hover:opacity-100"
            }`}
            style={{ left: `${area.x}%`, top: `${area.y}%` }}
            aria-label={`Highlight ${area.name} on map`}
            aria-pressed={isActive}
          >
            <span
              className={`flex items-center gap-1.5 rounded-full border px-2 py-1.5 shadow-md transition-all duration-300 sm:px-2.5 ${
                isActive
                  ? "border-teal bg-teal text-white shadow-[0_6px_20px_rgba(43,188,212,0.45)]"
                  : "border-white/90 bg-white/95 text-navy hover:border-teal/40"
              }`}
            >
              <PinIcon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-white" : "text-teal"}`} />
              <span className="font-secondary hidden text-[0.68rem] font-semibold sm:inline sm:text-[0.72rem]">
                {area.name}
              </span>
            </span>
          </button>
        );
      })}

      {/* Center hub */}
      <div
        className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "50%", top: "48%" }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-teal shadow-[0_6px_20px_rgba(43,188,212,0.4)]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden>
            <path
              d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 z-20 max-w-[calc(50%-0.75rem)] rounded-xl border border-white/80 bg-white/95 px-2.5 py-2 shadow-[0_4px_16px_rgba(26,35,50,0.1)] backdrop-blur-sm sm:bottom-4 sm:left-4 sm:max-w-none sm:px-3.5 sm:py-2.5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-teal/30 ring-2 ring-teal/40" />
          <span className="font-secondary text-[0.68rem] text-slate">
            Core coverage area
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-teal bg-white" />
          <span className="font-secondary text-[0.68rem] text-slate">
            Nearby areas we serve
          </span>
        </div>
      </div>

      {/* Active area label */}
      <div className="absolute right-3 bottom-3 z-20 max-w-[calc(50%-0.75rem)] rounded-xl border border-teal/30 bg-navy/90 px-3 py-2 shadow-lg backdrop-blur-sm sm:right-4 sm:bottom-4 sm:max-w-none sm:px-4 sm:py-2.5">
        <p className="font-secondary text-eyebrow tracking-wide text-white/60 uppercase">
          Selected area
        </p>
        <p className="font-primary text-base font-bold text-white">
          {activeArea.name}
        </p>
      </div>
    </div>
  );
}

type ServiceAreaProps = {
  ctaHref?: string;
};

export function ServiceArea({ ctaHref = "#offer-form" }: ServiceAreaProps) {
  const [activeId, setActiveId] = useState<AreaId>("central");

  return (
    <section
      id="areas"
      className="overflow-x-hidden bg-white py-10"
      aria-labelledby="service-area-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            Service Area
          </p>
          <h2
            id="service-area-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            Areas of Tuscaloosa where{" "}
            <em className="text-teal italic">we buy houses for cash</em>
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
            We buy Tuscaloosa homes for cash across the city and the greater
            surrounding area, focusing on residential neighborhoods where owners want a
            fast, certain sale. Select an area to see it on the map.
          </p>
        </div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <div className="min-w-0">
            <ServiceMap activeId={activeId} onSelect={setActiveId} />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area) => {
              const isActive = activeId === area.id;

              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveId(area.id)}
                  className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-left shadow-[0_2px_8px_rgba(26,35,50,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(26,35,50,0.1)] ${
                    isActive
                      ? "border-teal bg-teal-tint/50 shadow-[0_8px_24px_rgba(43,188,212,0.15)] ring-2 ring-teal/20"
                      : "border-mist bg-white hover:border-teal/40 hover:bg-teal-tint/25"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isActive
                        ? "bg-teal text-white"
                        : "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white"
                    }`}
                  >
                    <PinIcon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-primary block text-[0.88rem] font-bold text-navy">
                      {area.name}
                    </span>
                    <span className="font-secondary block text-[0.72rem] text-slate">
                      {area.tagline}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 transition-colors duration-200 ${
                      isActive ? "text-teal" : "text-slate/35 group-hover:text-teal"
                    }`}
                  >
                    <ChevronIcon />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href={ctaHref}
            className="font-secondary inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[0.9rem] font-bold text-white transition-all hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)]"
          >
            Get a cash offer in {areas.find((a) => a.id === activeId)?.name}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
