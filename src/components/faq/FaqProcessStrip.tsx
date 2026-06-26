import type { faqProcessSteps } from "@/data/faq-page";

type ProcessStep = (typeof faqProcessSteps)[number];

export function FaqProcessStrip({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <div className="relative mb-6">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <article
            key={step.num}
            className="relative flex flex-col items-start px-2 text-left sm:px-4"
          >
            {index < steps.length - 1 ? (
              <div
                className={`pointer-events-none absolute top-7 left-[calc(0.5rem+1.75rem)] hidden h-0 w-[calc(100%+1.5rem)] border-t-2 border-dashed border-teal/35 sm:left-[calc(1rem+1.75rem)] ${
                  index === 0 || index === 2 ? "sm:block" : ""
                } ${index < 3 ? "lg:block" : ""}`}
                aria-hidden
              />
            ) : null}

            <div
              className="relative z-10 mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-mist bg-ice text-teal"
              aria-hidden
            >
              <span className="font-primary text-lg font-extrabold">
                {index + 1}
              </span>
            </div>

            <h3 className="font-primary mb-2.5 text-[1.05rem] font-bold text-navy">
              {step.title}
            </h3>
            <p className="font-secondary text-base leading-relaxed text-slate">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
