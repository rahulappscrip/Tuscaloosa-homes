"use client";

import { useEffect, useState } from "react";
import { OfferForm } from "@/components/OfferForm";

const PHONE_HREF = "tel:8037847672";

function PhoneIcon() {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92l.02 1z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

export function MobileStickyCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (!isFormOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFormOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isFormOpen]);

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-[900] border-t border-mist bg-white px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden"
        aria-label="Quick contact"
      >
        <div className="mx-auto flex max-w-[1300px] gap-2.5">
          <a
            href={PHONE_HREF}
            className="font-secondary flex flex-1 items-center justify-center gap-2 rounded-[5px] border border-navy bg-white py-3 text-[0.875rem] font-bold text-navy transition-colors hover:bg-teal/5"
          >
            <PhoneIcon />
            Call
          </a>
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="font-secondary flex flex-1 cursor-pointer items-center justify-center rounded-[5px] bg-teal py-3 text-[0.875rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_16px_rgba(43,188,212,0.35)]"
          >
            Get Cash Offer
          </button>
        </div>
      </div>

      {isFormOpen ? (
        <div
          className="fixed inset-0 z-[1100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Get your cash offer"
        >
          <button
            type="button"
            aria-label="Close offer form"
            className="absolute inset-0 bg-navy/55"
            onClick={() => setIsFormOpen(false)}
          />

          <div className="absolute inset-x-0 bottom-0 max-h-[92dvh] overflow-y-auto rounded-t-2xl bg-hero-surface px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(13,27,46,0.18)]">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 z-[1] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-mist bg-white text-navy shadow-sm transition-colors hover:border-teal hover:text-teal-dark"
            >
              <CloseIcon />
            </button>

            <div className="flex justify-center pt-2">
              <OfferForm className="max-w-none shadow-none" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
