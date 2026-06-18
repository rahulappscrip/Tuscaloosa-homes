"use client";

import { useEffect, useRef } from "react";
import {
  OFFER_FORM_ID,
  OFFER_FORM_NAME,
  getOfferFormPayload,
  trackEvent,
} from "@/lib/analytics/rudderstack";

const sellReasons = [
  "Facing foreclosure",
  "Inherited / estate property",
  "Divorce or separation",
  "Relocating for work",
  "Tired landlord",
  "Financial hardship",
  "Too much work needed",
  "Other",
] as const;

const FORM_ABANDON_MS = 10 * 60 * 1000;

const inputClass =
  "font-secondary w-full rounded-lg border border-mist bg-white px-4 py-3 text-[0.9rem] text-charcoal outline-none transition-colors placeholder:text-slate/50 focus:border-teal focus:ring-2 focus:ring-teal/15";

function FormField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="font-secondary mb-1.5 block text-[0.8rem] font-semibold text-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}

export function OfferForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef(false);
  const submittedRef = useRef(false);
  const abandonedRef = useRef(false);
  const startedAtRef = useRef<number | null>(null);
  const abandonTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const filledFieldsRef = useRef<Set<string>>(new Set());

  const clearAbandonTimer = () => {
    if (abandonTimerRef.current) {
      clearTimeout(abandonTimerRef.current);
      abandonTimerRef.current = null;
    }
  };

  const trackFormState = (eventName: string, extra: Record<string, unknown> = {}) => {
    const form = formRef.current;
    if (!form) {
      return;
    }

    trackEvent(eventName, {
      form_id: OFFER_FORM_ID,
      form_name: OFFER_FORM_NAME,
      ...getOfferFormPayload(form),
      ...extra,
    });
  };

  const fireFormAbandoned = () => {
    if (
      !startedRef.current ||
      submittedRef.current ||
      abandonedRef.current
    ) {
      return;
    }

    abandonedRef.current = true;
    clearAbandonTimer();

    const timeOnFormMs = startedAtRef.current
      ? Date.now() - startedAtRef.current
      : undefined;

    trackFormState("form_abandoned", {
      filled_fields: Array.from(filledFieldsRef.current),
      abandon_reason: "not_submitted_within_10_minutes",
      time_on_form_ms: timeOnFormMs,
      time_on_form_minutes: timeOnFormMs
        ? Math.round(timeOnFormMs / 60000)
        : undefined,
    });
  };

  const scheduleAbandonTimer = () => {
    clearAbandonTimer();
    abandonTimerRef.current = setTimeout(() => {
      fireFormAbandoned();
    }, FORM_ABANDON_MS);
  };

  const handleFormStarted = () => {
    if (startedRef.current) {
      return;
    }

    startedRef.current = true;
    startedAtRef.current = Date.now();
    trackFormState("form_started");
    scheduleAbandonTimer();
  };

  const handleFieldFilled = (
    fieldName: string,
    element: HTMLInputElement | HTMLSelectElement,
  ) => {
    handleFormStarted();

    const value = element.value.trim();
    if (!value) {
      return;
    }

    if (!filledFieldsRef.current.has(fieldName)) {
      filledFieldsRef.current.add(fieldName);
    }

    trackFormState("form_field_filled", {
      field_name: fieldName,
      field_value: value,
      filled_fields: Array.from(filledFieldsRef.current),
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submittedRef.current = true;
    clearAbandonTimer();
    trackFormState("form_submitted");
  };

  useEffect(() => {
    return () => clearAbandonTimer();
  }, []);

  return (
    <div
      id={OFFER_FORM_ID}
      className="w-full max-w-[450px] rounded-2xl bg-white px-5 py-6 text-charcoal shadow-[0_12px_40px_rgba(26,35,50,0.08)] sm:px-6 sm:py-7"
    >
      <h2 className="font-primary mb-3 text-[clamp(1.35rem,2.5vw,1.75rem)] leading-tight font-extrabold text-charcoal">
        Get Your <span className="text-teal">Cash Offer</span> Today
      </h2>
      <p className="font-secondary mb-5 text-base leading-relaxed text-slate">
        Share a few details about your property and get a fair local cash offer
        in 24 hours. No obligation. No pressure.
      </p>

      <form
        ref={formRef}
        className="space-y-4"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="First Name">
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className={inputClass}
              autoComplete="given-name"
              onFocus={handleFormStarted}
              onBlur={(event) => handleFieldFilled("firstName", event.currentTarget)}
            />
          </FormField>
          <FormField label="Last Name">
            <input
              type="text"
              name="lastName"
              placeholder="Smith"
              className={inputClass}
              autoComplete="family-name"
              onFocus={handleFormStarted}
              onBlur={(event) => handleFieldFilled("lastName", event.currentTarget)}
            />
          </FormField>
        </div>

        <FormField label="Property Address in Tuscaloosa">
          <input
            type="text"
            name="address"
            placeholder="123 Main St, Tuscaloosa, AL 35401"
            className={inputClass}
            autoComplete="street-address"
            onFocus={handleFormStarted}
            onBlur={(event) => handleFieldFilled("address", event.currentTarget)}
          />
        </FormField>

        <FormField label="Why Are You Looking to Sell?">
          <select
            name="reason"
            className={inputClass}
            defaultValue=""
            onFocus={handleFormStarted}
            onChange={(event) => handleFieldFilled("reason", event.currentTarget)}
          >
            <option value="" disabled>
              Select a reason
            </option>
            {sellReasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </FormField>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Phone">
            <input
              type="tel"
              name="phone"
              placeholder="(205) 555-0100"
              className={inputClass}
              autoComplete="tel"
              onFocus={handleFormStarted}
              onBlur={(event) => handleFieldFilled("phone", event.currentTarget)}
            />
          </FormField>
          <FormField label="Email (optional)">
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className={inputClass}
              autoComplete="email"
              onFocus={handleFormStarted}
              onBlur={(event) => handleFieldFilled("email", event.currentTarget)}
            />
          </FormField>
        </div>

        <button
          type="submit"
          className="font-secondary mt-2 w-full cursor-pointer rounded-lg bg-teal px-5 py-3.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-teal-dark"
        >
          Get My Fair Cash Offer →
        </button>

        <p className="font-secondary mb-0 text-fine leading-snug text-slate">
          By submitting you agree to receive SMS, calls, and emails about your
          property inquiry from We Buy Tuscaloosa Homes. Reply STOP to opt out.
          Your info is never sold.
        </p>
      </form>
    </div>
  );
}
