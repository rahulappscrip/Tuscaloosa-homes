type ProcessStep = {
  num: number;
  tag?: string;
  title: string;
  description: string;
};

const defaultSteps: ProcessStep[] = [
  {
    num: 1,
    title: "Tell Joe About Your House",
    description:
      "Call, text, or fill out a short form with your Tuscaloosa property address and basic details. Joe or a team member typically follows up the same day.",
  },
  {
    num: 2,
    title: "Quick Visit or Virtual Walkthrough",
    description:
      "Joe schedules a quick visit to see the house in person, or a virtual walkthrough if needed. No need to clean or repair — this step helps him make an accurate, as-is cash offer.",
  },
  {
    num: 3,
    title: "Get Your No-Obligation Cash Offer",
    description:
      "After the walkthrough, Joe reviews recent Tuscaloosa sales, repair needs, and your goals, then presents a clear written cash offer — often within 24 hours.",
  },
  {
    num: 4,
    title: "Choose Your Closing Date & Get Paid",
    description:
      "If you accept, you choose a closing date — sometimes in as little as 7 days. Joe works with a trusted local title company and pays standard closing costs. You get your cash at closing.",
  },
];

type HowItWorksProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  steps?: readonly ProcessStep[];
  footnote?: string | null;
  variant?: "default" | "about";
};

export function HowItWorks({
  eyebrow = "The Process",
  heading = "How Selling Your Tuscaloosa Home for Cash Works",
  description = "Selling your Tuscaloosa home for cash with Joe is a simple, four-step process: contact Joe, get a quick walkthrough, receive a fair cash offer, and close on your timeline.",
  steps = defaultSteps,
  footnote = null,
  variant = "default",
}: HowItWorksProps) {
  if (variant === "about") {
    return (
      <section
        id="how-it-works"
        className="bg-white py-10"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-[1300px] px-6">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="how-it-works-heading"
            className="font-primary mb-4 max-w-3xl text-[clamp(1.65rem,3.2vw,2.2rem)] font-extrabold leading-tight tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mb-8 max-w-3xl text-base leading-relaxed text-slate">
            {description}
          </p>

          <div className="relative">
            <div
              className="pointer-events-none absolute top-[21px] right-[11%] left-[11%] hidden h-0.5 bg-gradient-to-r from-teal to-teal/15 lg:block"
              aria-hidden
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {steps.map((step) => (
                <article
                  key={step.num}
                  className="relative px-3 text-center"
                >
                  <div className="relative z-10 mx-auto mb-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-full border-[3px] border-teal bg-navy text-[0.95rem] font-extrabold text-teal">
                    {step.num}
                  </div>
                  {step.tag ? (
                    <span className="font-secondary mb-2 inline-block rounded bg-teal-tint px-2 py-0.5 text-[0.62rem] font-bold tracking-[0.08em] text-teal-dark uppercase">
                      {step.tag}
                    </span>
                  ) : null}
                  <h3 className="font-primary mb-2 text-[0.88rem] font-bold leading-snug text-navy">
                    {step.title}
                  </h3>
                  <p className="font-secondary text-[0.78rem] leading-relaxed text-slate">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {footnote ? (
            <p className="font-secondary mt-6 text-center text-[0.84rem] text-slate">
              {footnote}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section
      id="how-it-works"
      className="bg-white py-10"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="how-it-works-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="relative flex flex-col items-start px-2 text-left sm:px-4"
              >
                {index < steps.length - 1 && (
                  <div
                    className={`pointer-events-none absolute top-7 left-[calc(0.5rem+1.75rem)] hidden h-0 w-[calc(100%+1.5rem)] border-t-2 border-dashed border-teal/35 sm:left-[calc(1rem+1.75rem)] ${
                      index === 0 || index === 2 ? "sm:block" : ""
                    } ${index < 3 ? "lg:block" : ""}`}
                    aria-hidden
                  />
                )}

                <div
                  className="relative z-10 mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-mist bg-ice text-teal"
                  aria-hidden
                >
                  <span className="font-primary text-lg font-extrabold">
                    {step.num}
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

        {footnote ? (
          <p className="font-secondary mt-8 text-center text-[0.9rem] text-slate">
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
