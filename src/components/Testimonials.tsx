"use client";

import { Caveat } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const signatureFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const YOUTUBE_VIDEO_ID = "Ee1N4-K1rFQ";
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;

const defaultSlides = [
  {
    kind: "video" as const,
    quote:
      "I was referred to Joe and his team by a mutual friend, and I was really floored by the amazing help and care that I received from them. Within 30 minutes they had the situation handled. I can't tell you enough about them. When you know things are right, you feel it. I wouldn't have gotten through this whole process without their help. I'd definitely recommend them to anyone looking to sell their house.",
    signature: "Ms. Juanita",
    meta: "Tuscaloosa homeowner",
    youtubeId: YOUTUBE_VIDEO_ID,
  },
  {
    kind: "text" as const,
    quote:
      "Joe made everything so simple. We were on a tight timeline with our Tuscaloosa house and didn't have money for repairs. He walked us through the offer, handled the paperwork with the title company, and we closed right on schedule.",
    signature: "Marcus T.",
    meta: "Tuscaloosa, AL · Inherited property",
    initial: "M",
  },
  {
    kind: "text" as const,
    quote:
      "I was nervous about selling to a cash buyer, but Joe explained every step and never pushed us. We ended up with a fair offer, no closing costs, and no last-minute surprises. It felt like working with a neighbor, not a corporation.",
    signature: "Linda K.",
    meta: "Northport, AL · Facing foreclosure",
    initial: "L",
  },
  {
    kind: "text" as const,
    quote:
      "We had an inherited house that needed more work than we could take on. Joe bought it as-is, let us leave unwanted furniture, and the whole process took a couple of weeks from first call to closing.",
    signature: "Sandra & Ray M.",
    meta: "Tuscaloosa, AL · Estate sale",
    initial: "S",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoPanel({ youtubeId }: { youtubeId: string }) {
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <a
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white bg-navy shadow-[0_12px_40px_rgba(26,35,50,0.12)] sm:aspect-video"
      aria-label="Watch Ms. Juanita's video testimonial on YouTube"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnail}
        alt="Ms. Juanita shares her experience selling to Joe"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-navy/10 transition-colors group-hover:bg-navy/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white shadow-[0_8px_24px_rgba(43,188,212,0.45)] transition-transform duration-200 group-hover:scale-110">
          <PlayIcon />
        </span>
      </div>
    </a>
  );
}

function TextPanel({
  initial,
  signature,
  meta,
}: {
  initial: string;
  signature: string;
  meta: string;
}) {
  return (
    <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-br from-navy via-navy to-[#243044] p-6 shadow-[0_12px_40px_rgba(26,35,50,0.12)] sm:aspect-video sm:p-8">
      <span
        className="font-primary text-[4rem] leading-none text-teal/25 sm:text-[5rem]"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-xl font-bold text-white">
          {initial}
        </div>
        <div>
          <p className={`${signatureFont.className} text-2xl text-white`}>
            ~ {signature}
          </p>
          <p className="font-secondary mt-0.5 text-base text-white/65">
            {meta}
          </p>
        </div>
      </div>
    </div>
  );
}

type TextSlide = {
  kind: "text";
  quote: string;
  signature: string;
  meta: string;
  initial: string;
  source?: string;
};

type VideoSlide = {
  kind: "video";
  quote: string;
  signature: string;
  meta: string;
  youtubeId: string;
};

type TestimonialSlide = TextSlide | VideoSlide;

type TestimonialsProps = {
  slides?: readonly TestimonialSlide[];
  eyebrow?: string;
  heading?: string;
  description?: React.ReactNode;
  display?: "carousel" | "grid";
};

export type TestimonialsGridProps = {
  slides: readonly TestimonialSlide[];
  eyebrow?: string;
  heading?: string;
  description?: React.ReactNode;
};

export function TestimonialsGrid({
  slides,
  eyebrow = "Reviews",
  heading = "What Tuscaloosa homeowners say about selling to Joe",
  description = "",
}: TestimonialsGridProps) {
  const gridSlides = slides.filter(
    (slide): slide is TextSlide => slide.kind === "text",
  );

  return (
    <section
      id="reviews"
      className="bg-ice py-10"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          {description ? (
            <p className="font-secondary mx-auto max-w-[640px] text-base leading-relaxed text-slate">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gridSlides.map((item) => (
            <article
              key={item.signature}
              className="rounded-lg border border-mist border-l-[3px] border-l-teal bg-white p-5 sm:p-6"
            >
              <div className="mb-2.5 text-[0.82rem] tracking-wide text-gold">
                ★★★★★
              </div>
              <p className="font-secondary mb-3 text-[0.84rem] leading-relaxed text-slate italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="font-primary text-[0.75rem] font-bold text-navy">
                {item.signature}
              </p>
              <p className="font-secondary mt-0.5 text-[0.68rem] text-slate/70">
                {item.meta}
              </p>
              {item.source ? (
                <span className="font-secondary mt-2 inline-flex rounded bg-teal-tint px-2 py-1 text-[0.62rem] font-bold tracking-[0.08em] text-teal-dark uppercase">
                  {item.source}
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel({
  slides,
  eyebrow,
  heading,
  description,
}: {
  slides: readonly TestimonialSlide[];
  eyebrow: string;
  heading: string;
  description: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <section
      id="reviews"
      className="bg-ice py-10"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-mist bg-white p-5 shadow-[0_8px_32px_rgba(26,35,50,0.06)] sm:p-8 lg:p-10">
            <div
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              aria-live="polite"
            >
              <div className="relative min-h-[220px]">
                {slides.map((item, index) => (
                  <div
                    key={item.signature}
                    className={`transition-all duration-500 ${
                      index === active
                        ? "relative opacity-100"
                        : "pointer-events-none absolute inset-0 opacity-0"
                    }`}
                    aria-hidden={index !== active}
                  >
                    {item.kind === "video" ? (
                      <VideoPanel youtubeId={item.youtubeId} />
                    ) : (
                      <TextPanel
                        initial={item.initial}
                        signature={item.signature}
                        meta={item.meta}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="relative min-h-[260px] lg:py-4">
                {slides.map((item, index) => (
                  <div
                    key={`copy-${item.signature}`}
                    className={`transition-all duration-500 ${
                      index === active
                        ? "relative translate-x-0 opacity-100"
                        : "pointer-events-none absolute inset-0 translate-x-4 opacity-0"
                    }`}
                    aria-hidden={index !== active}
                  >
                    <div className="mb-5 text-[1rem] tracking-wide text-gold">
                      ★★★★★
                    </div>
                    <p className="font-secondary mb-6 text-base leading-relaxed text-charcoal italic sm:text-base sm:leading-loose">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p
                      className={`${signatureFont.className} text-[1.75rem] leading-none text-navy sm:text-[2rem]`}
                    >
                      ~ {item.signature}
                    </p>
                    <p className="font-secondary mt-2 text-base text-slate">
                      {item.meta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-mist bg-white text-navy transition-colors hover:border-teal hover:text-teal"
              aria-label="Previous testimonial"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={`dot-${item.signature}`}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all ${
                    index === active
                      ? "w-8 bg-teal"
                      : "w-2.5 bg-mist hover:bg-teal/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === active ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-mist bg-white text-navy transition-colors hover:border-teal hover:text-teal"
              aria-label="Next testimonial"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials({
  slides = defaultSlides,
  eyebrow = "Social Proof",
  heading = "What Tuscaloosa homeowners say about selling to Joe",
  description =
    "5.0 out of 5.0 average rating from 103+ reviews. We buy Tuscaloosa homes every month — here's what sellers say about working with Joe.",
  display = "carousel",
}: TestimonialsProps) {
  if (display === "grid") {
    return (
      <TestimonialsGrid
        slides={slides}
        eyebrow={eyebrow}
        heading={heading}
        description={description}
      />
    );
  }

  return (
    <TestimonialsCarousel
      slides={slides}
      eyebrow={eyebrow}
      heading={heading}
      description={description}
    />
  );
}
