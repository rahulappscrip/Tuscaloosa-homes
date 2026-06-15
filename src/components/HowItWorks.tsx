const steps = [
  {
    number: "01",
    title: "Tell Joe About Your House",
    description:
      "Call, text, or fill out a short form with your Tuscaloosa property address and basic details. Joe or a team member typically follows up the same day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5L16.5 13l4 1.5V17a2 2 0 01-2 2C9.6 19 5 14.4 5 8.5A2.5 2.5 0 016.5 4z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quick Visit or Virtual Walkthrough",
    description:
      "Joe schedules a quick visit to see the house in person, or a virtual walkthrough. There's no need to clean or repair anything first.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Your No-Obligation Cash Offer",
    description:
      "Joe reviews recent Tuscaloosa sales and repair needs, then presents a clear written cash offer often within 24 hours. You're free to say yes or no.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M8 4h11v16H5a2 2 0 01-2-2V6a2 2 0 012-2h1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M8 4v16M8 8h11M11 12h5M11 16h5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Choose Your Closing Date & Get Paid",
    description:
      "Pick a closing date that fits your move — sometimes in as little as 7 days. Joe works with a trusted local title company and covers standard closing costs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <circle cx="8" cy="14" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 14h8M18 11v6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M8 10V7a2 2 0 012-2h1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-10"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
            The Process
          </p>
          <h2
            id="how-it-works-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            How selling your Tuscaloosa home{" "}
            <em className="text-teal italic">for cash works.</em>
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-[0.95rem] leading-relaxed text-slate">
            Selling your Tuscaloosa home for cash with Joe is a simple, four-step
            process: contact Joe, get a quick walkthrough, receive a fair cash offer,
            and close on your timeline.
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-[5.25rem] right-[8%] left-[8%] hidden border-t-2 border-dashed border-teal/35 lg:block"
            aria-hidden
          />

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative flex flex-col items-center px-2 text-center sm:px-4"
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-mist bg-ice text-teal"
                  aria-hidden
                >
                  {step.icon}
                </div>

                <div className="relative z-10 mb-5 hidden h-8 w-8 items-center justify-center rounded-full bg-navy text-[0.72rem] font-bold text-white sm:flex">
                  {step.number}
                </div>

                <h3 className="font-primary mb-2.5 text-[1.05rem] font-bold text-navy">
                  {step.title}
                </h3>
                <p className="font-secondary text-[0.88rem] leading-relaxed text-slate">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
