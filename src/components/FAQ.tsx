"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const defaultFaqs: FaqItem[] = [
  {
    id: "how-it-works",
    question: "How does selling my house for cash work in Tuscaloosa?",
    answer:
      "The process is simple. You tell Joe about your property, he reviews the house, then makes you a no-obligation cash offer. If you like the number, you pick the closing date and sign standard sale paperwork with a title company in Alabama. We buy Tuscaloosa homes as-is — no repairs, no open houses, no long listings.",
  },
  {
    id: "fair-price",
    question: "Will I get a fair price if I sell my Tuscaloosa house for cash?",
    answer:
      "Joe bases every offer on your home's after-repair value using real recent Tuscaloosa sales — then subtracts repair costs, holding costs, and a reasonable profit. The result is a fair, transparent number. He explains every line so you can compare it with other options before deciding.",
  },
  {
    id: "repairs-as-is",
    question:
      "Do I have to make repairs before selling my house as-is in Tuscaloosa?",
    answer:
      "No. We buy Tuscaloosa homes as-is in any condition — you do not need to make repairs, clean, stage, or update anything. Joe factors the work into his offer and handles all improvements after closing.",
  },
  {
    id: "how-fast",
    question: "How fast can you close on my Tuscaloosa house?",
    answer:
      "Joe can close in as little as 7 days from accepted offer, or on whatever timeline works for you. Because we use private cash — not bank financing — there are no lender delays, appraisals, or financing contingencies to slow things down.",
  },
  {
    id: "fees-commissions",
    question: "What fees or commissions do you charge?",
    answer:
      "None. We charge no agent commissions and no buyer fees. We cover standard closing costs. The offer you accept is what you receive at closing, minus any existing mortgage balance or liens that are paid off through the title company.",
  },
  {
    id: "legit-buyer",
    question: "How can I tell if you're a legitimate cash buyer in Tuscaloosa?",
    answer:
      "Joe operates under High Noon Home Buyers and holds a 5.0 Google rating from 103+ verified reviews. Every closing goes through a licensed Alabama title company. Joe provides written proof of funds on request and never asks for upfront fees or deposits before closing.",
  },
  {
    id: "foreclosure",
    question:
      "Can you still buy my house if I'm facing foreclosure in Tuscaloosa?",
    answer:
      "Yes. We buy Tuscaloosa homes even when foreclosure is looming — as long as there's time before the sale date. Contact Joe as early as possible. The more time available, the more options remain open. The mortgage is paid off at closing from the sale proceeds.",
  },
  {
    id: "inherited-probate",
    question: "Do you buy inherited or probate houses in Tuscaloosa?",
    answer:
      "Yes. We buy Tuscaloosa homes that are tied up in probate or inherited estates regularly. We work directly with personal representatives, executors, and estate attorneys. No cleanout, no repairs required before closing.",
  },
  {
    id: "house-types",
    question: "What types of houses do you buy in Tuscaloosa?",
    answer:
      "We buy Tuscaloosa homes of most types — single-family, small multifamily, and rentals — whether owner-occupied, vacant, or tenant-occupied. We buy move-in ready homes and properties needing major repairs. If you're unsure whether yours qualifies, call Joe and he'll let you know quickly.",
  },
  {
    id: "service-area",
    question:
      "Do you only buy in Tuscaloosa or other parts of Alabama too?",
    answer:
      "We buy Tuscaloosa homes and properties across West Alabama — including Northport, Cottondale, Brookwood, Coaling, Gordo, Moundville, and surrounding communities. If you're unsure whether your property is in our service area, call Joe directly at (803) 784-7672.",
  },
  {
    id: "market-value",
    question:
      "What percentage do cash home buyers usually pay compared to market value?",
    answer:
      "Cash home buyers pay less than full market value because they cover repairs, holding costs, and the risk of owning the property. Instead of a fixed percentage for every house, the offer depends on after-repair value, condition, and location. A transparent local buyer in Tuscaloosa will walk you through their numbers so you understand how they arrived at the amount.",
  },
] ;

function buildFaqSchema(faqs: FaqItem[]) {
  return {
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
}

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

type FAQProps = {
  faqs?: FaqItem[];
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  defaultOpenId?: string | null;
  includeSchema?: boolean;
  showNarLink?: boolean;
  footerText?: string;
};

export function FAQ({
  faqs = defaultFaqs,
  eyebrow = "Questions",
  heading = (
    <>
      Tuscaloosa Cash Home Buyer —{" "}
      <span className="text-teal">Frequently Asked Questions</span>
    </>
  ),
  description =
    "Below are answers to common questions homeowners ask before selling to a cash home buyer in Tuscaloosa.",
  defaultOpenId = "how-it-works",
  includeSchema = true,
  showNarLink = true,
  footerText,
}: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const faqSchema = buildFaqSchema(faqs);

  return (
    <section
      id="faq"
      className="bg-hero-surface py-10"
      aria-labelledby="faq-heading"
    >
      {includeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-teal" aria-hidden />
            <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              {eyebrow}
            </p>
            <span className="h-px w-6 bg-teal" aria-hidden />
          </div>
          <h2
            id="faq-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          {description ? (
            <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
              {description}
            </p>
          ) : null}
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
                    <p className="font-secondary text-base leading-relaxed text-slate">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showNarLink ? (
          <p className="font-secondary mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-slate">
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
        ) : footerText ? (
          <p className="font-secondary mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-slate">
            {footerText}
          </p>
        ) : null}

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
