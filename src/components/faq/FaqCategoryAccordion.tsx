"use client";

import { useState } from "react";
import type { FaqCategoryFaq } from "@/data/faq-page";
import { FaqRichAnswer } from "@/components/faq/FaqRichAnswer";

function ToggleIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-white">
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
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
    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-teal">
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
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

export function FaqCategoryAccordion({
  faqs,
  defaultOpenId,
}: {
  faqs: readonly FaqCategoryFaq[];
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? faqs[0]?.id ?? null,
  );

  return (
    <div className="rounded-xl border border-mist bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className={index < faqs.length - 1 ? "border-b border-mist" : ""}
          >
            <button
              type="button"
              id={`cat-faq-question-${faq.id}`}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:text-teal sm:px-5"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              aria-controls={`cat-faq-answer-${faq.id}`}
            >
              <span
                className={`font-primary pr-2 text-[0.9rem] leading-snug font-bold sm:text-[0.95rem] ${
                  isOpen ? "text-teal" : "text-navy"
                }`}
              >
                {faq.question}
              </span>
              <ToggleIcon open={isOpen} />
            </button>

            <div
              id={`cat-faq-answer-${faq.id}`}
              role="region"
              aria-labelledby={`cat-faq-question-${faq.id}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden px-4 sm:px-5">
                <FaqRichAnswer blocks={faq.blocks} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
