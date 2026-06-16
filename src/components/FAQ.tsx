"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";

const faqs = [
  {
    id: "how-it-works",
    question: "How does selling my house for cash in Tuscaloosa work?",
    answer:
      "The process is simple. You tell a local Tuscaloosa cash home buyer about your property, they review the house, then make you a no-obligation cash offer. If you like the number, you pick the closing date and sign standard sale paperwork with a title company in Alabama. You can usually sell as-is without repairs, open houses, or long listings.",
  },
  {
    id: "fair-price",
    question: "Will I get a fair price if I sell my Tuscaloosa house for cash?",
    answer:
      "Yes. A fair cash price comes from your Tuscaloosa home's after-repair value, minus needed repairs, holding costs, and a reasonable profit for the cash home buyer. You avoid paying agent commissions, which traditional sales often include, and you do not wait through showings or buyer financing. The right cash offer balances speed, certainty, and what you walk away with.",
  },
  {
    id: "repairs-as-is",
    question:
      "Do I have to make repairs before selling my house as-is in Tuscaloosa?",
    answer:
      "No. When you work with a local Tuscaloosa cash home buyer, you can usually sell the house as-is without doing repairs or upgrades first. The buyer looks at the home's condition and subtracts expected repair costs when deciding on a cash offer. This can save you time, stress, and upfront money compared to fixing the property before listing.",
  },
  {
    id: "how-fast",
    question: "How fast can you buy my house for cash in Tuscaloosa?",
    answer:
      "A local Tuscaloosa cash home buyer can often close significantly faster than a traditional agent sale. Once you accept a cash offer, the timeline mainly depends on the title work and your move-out needs. Some sellers choose a very quick closing, while others prefer more time. The key benefit is flexibility, not waiting on buyer loan approvals or multiple showings.",
  },
  {
    id: "fees-commissions",
    question: "What fees or commissions do you charge when you buy my house?",
    answer:
      "A genuine local cash home buyer does not charge you real estate commissions for buying your house. In a traditional sale, sellers often pay agent commissions on top of other closing costs. With a direct cash buyer, you are selling straight to the buyer, so there is no listing commission, and any other costs or credits are spelled out clearly in the purchase agreement.",
  },
  {
    id: "legit-buyer",
    question: "How can I tell if a cash home buyer in Tuscaloosa is legit?",
    answer:
      "You can check legitimacy by asking for proof of funds, looking up the cash buyer's business registration, and reading reviews from other Alabama sellers. A real cash home buyer will also close through a trusted title company, not ask for upfront fees, and answer questions about their offer in plain language. It is reasonable to vet any buyer before you sign.",
  },
  {
    id: "market-value",
    question:
      "What percentage do cash home buyers usually pay compared to market value?",
    answer:
      "Cash home buyers pay less than full market value because they cover repairs, holding costs, and the risk of owning the property. Instead of a fixed percentage for every house, the offer depends on after-repair value, condition, and location. A transparent local buyer in Tuscaloosa will walk you through their numbers so you understand how they arrived at the amount.",
  },
  {
    id: "foreclosure",
    question:
      "Can you still buy my house if I'm facing foreclosure in Tuscaloosa?",
    answer:
      "Yes. A local Tuscaloosa cash home buyer may be able to purchase your house before a foreclosure, but timing is critical. The buyer and title company must have enough time to clear title and close before any sale date. While no specific outcome is guaranteed, reaching out early gives you more options than waiting until the last minute.",
  },
  {
    id: "inherited-probate",
    question: "Do you buy inherited or probate houses in Tuscaloosa?",
    answer:
      "Yes. Local Tuscaloosa cash home buyers often purchase inherited or probate houses, even if they need work. All legal owners or heirs usually need to agree to the sale, and a title company or attorney in Alabama helps handle the paperwork. Selling for cash can simplify splitting proceeds and avoid months of repairs, showings, or landlord duties.",
  },
  {
    id: "house-types",
    question: "What types of houses do you buy in Tuscaloosa?",
    answer:
      "Local Tuscaloosa cash home buyers typically purchase single-family houses, small rental homes, and other residential properties in a wide range of conditions. That can include move-in ready homes, rentals with tenants, or places needing major repairs. If you own a house in or around Tuscaloosa, it is usually worth asking whether it fits their buying criteria.",
  },
  {
    id: "service-area",
    question:
      "Do you only buy houses in Tuscaloosa, or other parts of Alabama too?",
    answer:
      "Local cash home buyers focus on houses in Tuscaloosa and the greater Tuscaloosa area, since that is the market they know best. Some will also buy in nearby Alabama towns, depending on the property and situation. If your house is outside city limits, it is still worth reaching out to confirm whether it falls inside their service area.",
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
  const [openId, setOpenId] = useState<string | null>("how-it-works");

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
            <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
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
          <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
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
                    <p className="font-secondary text-base leading-relaxed text-slate">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
