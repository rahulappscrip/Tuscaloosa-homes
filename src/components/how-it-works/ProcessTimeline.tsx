"use client";

import { useState } from "react";
import { howItWorksHeroSteps, processTimelineSteps } from "@/data/how-it-works";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processTimelineSteps[activeStep];

  return (
    <section
      className="bg-hero-surface py-10"
      aria-labelledby="process-timeline-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-teal" aria-hidden />
            <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              The Full Process
            </p>
            <span className="h-px w-6 bg-teal" aria-hidden />
          </div>
          <h2
            id="process-timeline-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            How does selling your Tuscaloosa house for cash work?
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
            Here&apos;s the complete picture — what happens at each stage, how
            long it takes, and what you do (or don&apos;t do) at every step.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_8px_32px_rgba(26,35,50,0.06)]">
          <div
            role="tablist"
            aria-label="Cash sale process steps"
            className="grid grid-cols-1 border-b border-mist sm:grid-cols-3"
          >
            {processTimelineSteps.map((item, index) => {
              const isActive = index === activeStep;
              const shortLabel = howItWorksHeroSteps[index]?.label ?? item.title;

              return (
                <button
                  key={item.num}
                  type="button"
                  role="tab"
                  id={`process-tab-${item.num}`}
                  aria-selected={isActive}
                  aria-controls={`process-panel-${item.num}`}
                  onClick={() => setActiveStep(index)}
                  className={`relative flex flex-col items-start gap-1 border-mist px-4 py-4 text-left transition-colors sm:px-5 sm:py-5 lg:px-6 lg:py-6 ${
                    index < processTimelineSteps.length - 1
                      ? "border-b sm:border-r sm:border-b-0"
                      : ""
                  } ${
                    isActive
                      ? "bg-teal-tint"
                      : "bg-white hover:bg-hero-surface"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-1 ${
                      isActive ? "bg-teal" : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`font-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-extrabold ${
                        isActive
                          ? "bg-teal text-white"
                          : "bg-ice text-slate"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`font-secondary text-[0.65rem] font-bold tracking-[0.08em] uppercase ${
                        isActive ? "text-teal" : "text-slate"
                      }`}
                    >
                      {item.timing}
                    </span>
                  </span>
                  <span
                    className={`font-primary mt-1 text-[0.88rem] leading-snug font-bold sm:text-[0.92rem] lg:text-[0.95rem] ${
                      isActive ? "text-navy" : "text-charcoal"
                    }`}
                  >
                    {shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <article
            role="tabpanel"
            id={`process-panel-${step.num}`}
            aria-labelledby={`process-tab-${step.num}`}
            className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
          >
            <div className="mb-6 border-b border-mist pb-6">
              <h3 className="font-primary text-[clamp(1.2rem,2.5vw,1.55rem)] font-extrabold leading-tight text-navy">
                {step.title}
              </h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div className="space-y-4">
                {step.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="font-secondary text-[0.95rem] leading-relaxed text-slate sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {step.callout ? (
                  <div className="rounded-xl border border-teal/20 bg-teal-tint px-4 py-4 sm:px-5">
                    <p className="font-secondary text-[0.9rem] leading-relaxed text-slate sm:text-[0.95rem]">
                      <strong className="font-semibold text-navy">
                        {step.callout.strong}
                      </strong>
                      {step.callout.text}
                    </p>
                  </div>
                ) : null}
              </div>

              <ul className="space-y-3 rounded-xl border border-mist bg-hero-surface p-5 sm:p-6">
                <li className="font-secondary mb-1 text-[0.68rem] font-bold tracking-[0.1em] text-teal uppercase">
                  What to expect
                </li>
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="font-secondary flex items-start gap-3 text-[0.88rem] leading-relaxed text-charcoal sm:text-[0.9rem]"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.68rem] font-bold text-teal"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
