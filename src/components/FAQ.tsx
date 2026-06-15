"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";

const faqs = [
  {
    id: "how-fast",
    question: "How fast can I sell my house in Tuscaloosa?",
    answer:
      "You can often receive a cash offer within 24 hours and close in as little as 7 days depending on your situation and title process.",
  },
  {
    id: "repairs",
    question: "Do I need to repair my house before selling?",
    answer:
      "No. We buy houses in Tuscaloosa as-is, including homes with repairs, fire damage, water damage, or outdated interiors.",
  },
  {
    id: "fees",
    question: "Are there any commissions or hidden fees?",
    answer:
      "No. There are no realtor commissions, closing costs, or hidden fees when selling your house directly to us.",
  },
  {
    id: "types",
    question: "What types of properties do you buy?",
    answer:
      "We buy single-family homes, inherited properties, rental homes, distressed houses, and properties facing foreclosure throughout Tuscaloosa and nearby areas.",
  },
  {
    id: "obligation",
    question: "Is there any obligation after requesting an offer?",
    answer:
      "No. Requesting a cash offer is completely free and comes with no obligation to accept.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ToggleIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white transition-colors">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
          <path
            d="M8 8l8 8M16 8l-8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-teal transition-colors">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 5v14M5 12h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("how-fast");

  return (
    <section
      id="faq"
      className="bg-hero-surface py-10"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-teal" aria-hidden />
            <p className="font-secondary text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
              Questions
            </p>
            <span className="h-px w-6 bg-teal" aria-hidden />
          </div>
          <h2
            id="faq-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            Tuscaloosa Cash Home Buyer{" "}
            <span className="text-teal">FAQs</span>
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-[0.95rem] leading-relaxed text-slate">
            Below are answers to common questions homeowners ask before selling to
            a cash home buyer in Tuscaloosa.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-mist bg-white px-5 sm:px-8">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border-mist ${index < faqs.length - 1 ? "border-b" : ""}`}
              >
                <button
                  type="button"
                  id={`faq-question-${faq.id}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-teal"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span
                    className={`font-primary pr-2 text-[0.95rem] leading-snug font-bold sm:text-[1rem] ${
                      isOpen ? "text-teal" : "text-navy"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ToggleIcon open={isOpen} />
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-secondary text-[0.9rem] leading-relaxed text-slate">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-secondary mx-auto mt-8 max-w-2xl text-center text-[0.88rem] leading-relaxed text-slate">
          For broader context about how buyers and sellers behave nationally, you
          can also review{" "}
          <a
            href="https://www.nar.realtor/research-and-statistics/research-reports/highlights-from-the-profile-of-home-buyers-and-sellers"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 transition-colors hover:text-teal-dark hover:decoration-teal"
          >
            home buyers and sellers insights
          </a>{" "}
          from the National Association of Realtors.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href={PHONE_HREF}
            className="font-secondary inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-navy/90 hover:shadow-[0_8px_24px_rgba(26,35,50,0.2)] sm:px-8 sm:text-[0.95rem]"
          >
            Didn&apos;t See Your Question? Ask Joe — {PHONE}
          </Link>
        </div>
      </div>
    </section>
  );
}
