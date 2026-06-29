import type { ReactNode } from "react";
import Link from "next/link";

export type PropertyTypeItem = {
  id: string;
  title: string;
  description: string;
  icon: "home" | "rental" | "multifamily" | "damage" | "estate" | "vacant";
};

type WhatWeBuyProps = {
  sectionId?: string;
  className?: string;
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  propertyTypes: readonly PropertyTypeItem[];
  footerText?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function PropertyIcon({ icon }: { icon: PropertyTypeItem["icon"] }) {
  const className = "h-5 w-5";

  switch (icon) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "rental":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M12 11v3M10.5 12.5h3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "multifamily":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M8 9h2M14 9h2M8 13h2M14 13h2M8 17h2M14 17h2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "damage":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "estate":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M8 4h11v16H5a2 2 0 01-2-2V6a2 2 0 012-2h1"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8 4v16M8 8h11M11 12h5M11 16h3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "vacant":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M12 8v4l2.5 2.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function PropertyCard({ item }: { item: PropertyTypeItem }) {
  return (
    <article className="group flex gap-4 rounded-xl border border-mist bg-white p-5 transition-all duration-200 hover:border-teal/35 hover:shadow-[0_8px_24px_rgba(26,35,50,0.07)] sm:gap-5 sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal transition-colors duration-200 group-hover:bg-teal group-hover:text-white sm:h-12 sm:w-12">
        <PropertyIcon icon={item.icon} />
      </div>
      <div className="min-w-0">
        <h3 className="font-primary mb-1.5 text-[0.95rem] font-bold text-navy sm:text-[1rem]">
          {item.title}
        </h3>
        <p className="font-secondary text-[0.84rem] leading-relaxed text-slate sm:text-[0.88rem]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function WhatWeBuy({
  sectionId = "what-we-buy",
  className = "bg-hero-surface py-10",
  eyebrow = "What We Buy",
  heading = (
    <>
      Types of properties we buy in{" "}
      <em className="text-teal italic">Tuscaloosa and nearby</em>
    </>
  ),
  description = "We buy residential properties across Tuscaloosa and West Alabama in any condition and situation.",
  propertyTypes,
  footerText = "Not sure if your property qualifies? Call Joe — he'll tell you quickly and honestly.",
  ctaLabel = "Get My Free Home Value Estimate →",
  ctaHref = "#contact",
}: WhatWeBuyProps) {
  return (
    <section
      id={sectionId}
      className={className}
      aria-labelledby="what-we-buy-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="what-we-buy-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mx-auto max-w-[620px] text-base leading-relaxed text-slate">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {propertyTypes.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
          {footerText ? (
            <p className="font-secondary max-w-[720px] text-center text-base leading-relaxed text-slate">
              {footerText}
            </p>
          ) : null}
          <Link
            href={ctaHref}
            className="font-secondary inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3.5 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
