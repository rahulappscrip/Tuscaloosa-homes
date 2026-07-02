import Image from "next/image";
import Link from "next/link";
import { situationImages } from "@/data/situationImages";

export type WhatToExpectStep = {
  num: string;
  title: string;
  description: string;
};

type WhatToExpectPanelProps = {
  sectionId?: string;
  className?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  steps?: readonly WhatToExpectStep[];
  footnote?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageTitle?: string;
  imageCaption?: string;
  ctaHref?: string;
  ctaLabel?: string;
  showCta?: boolean;
  headingId?: string;
};

export function WhatToExpectPanel({
  sectionId = "what-to-expect",
  className = "bg-hero-surface",
  eyebrow = "What to Expect",
  heading = "From First Call to Closing Day: What to Expect",
  description,
  steps = [],
  footnote,
  imageSrc = situationImages["inherited-probate"],
  imageAlt = "Woodland Forrest homeowner working through a local cash home sale",
  imageTitle = "Sell my house fast Woodland Forrest Tuscaloosa",
  imageCaption,
  ctaHref = "#contact",
  ctaLabel = "Schedule a No-Pressure Walk-Through",
  showCta = false,
  headingId = "what-to-expect-heading",
}: WhatToExpectPanelProps) {
  return (
    <section
      id={sectionId}
      className={`py-10 ${className}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            <p className="font-secondary mb-3 flex items-center gap-2 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              <span className="h-px w-5 bg-teal" aria-hidden />
              {eyebrow}
            </p>

            <h2
              id={headingId}
              className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              {heading}
            </h2>

            {description ? (
              <p className="font-secondary max-w-xl text-base leading-relaxed text-slate">
                {description}
              </p>
            ) : null}

            <div className="mt-6 overflow-hidden rounded-xl border border-mist bg-white shadow-[0_8px_28px_rgba(26,35,50,0.08)]">
              <div className="relative aspect-video w-full bg-navy">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  title={imageTitle ?? imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {imageCaption ? (
                <div className="font-secondary border-t border-mist bg-ice px-4 py-3 text-center text-fine font-medium text-navy">
                  {imageCaption}
                </div>
              ) : null}
            </div>

            {showCta ? (
              <Link
                href={ctaHref}
                className="font-secondary mt-6 inline-flex items-center justify-center rounded-lg bg-teal px-5 py-3.5 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)]"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>

          <div>
            <div className="divide-y divide-mist border-y border-mist lg:border-y-0">
              {steps.map((step) => (
                <article
                  key={step.num}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0 lg:first:pt-0"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-tint text-teal"
                    aria-hidden
                  >
                    <span className="font-primary text-[0.72rem] font-extrabold tracking-tight">
                      {step.num}
                    </span>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-primary mb-1 text-[0.95rem] font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="font-secondary text-base leading-relaxed text-slate">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {footnote ? (
              <p className="font-secondary mt-6 text-[0.92rem] leading-relaxed text-slate sm:text-[0.95rem]">
                {footnote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
