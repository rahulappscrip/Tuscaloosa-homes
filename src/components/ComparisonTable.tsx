import Link from "next/link";

const columns = [
  { key: "label", header: "What matters to you" },
  { key: "joe", header: "Sell to Us (Local Cash)", highlight: true },
  { key: "agent", header: "List With an Agent" },
  { key: "other", header: "Other Cash Buyers" },
] as const;

const rows = [
  {
    label: "Time to close",
    joe: { text: "7–21 days, your schedule", positive: true },
    agent: { text: "30–60+ days typical" },
    other: { text: "Varies — may rely on loans" },
  },
  {
    label: "Repairs before sale",
    joe: { text: "Zero repairs, sell as-is", positive: true },
    agent: { text: "Often needed to list" },
    other: { text: "Usually as-is, terms vary" },
  },
  {
    label: "Showings & open houses",
    joe: { text: "One walkthrough only", positive: true },
    agent: { text: "Many showings required" },
    other: { text: "Minimal, but unclear" },
  },
  {
    label: "Agent commissions",
    joe: { text: "0% — none", positive: true },
    agent: { text: "~5–6% of sale price", negative: true },
    other: { text: "Usually 0%, check terms" },
  },
  {
    label: "Closing costs",
    joe: { text: "Joe pays standard costs", positive: true },
    agent: { text: "Seller pays a portion", negative: true },
    other: { text: "Varies by buyer" },
  },
  {
    label: "Certainty of closing",
    joe: { text: "Cash — no financing risk", positive: true },
    agent: { text: "Subject to appraisal & financing", negative: true },
    other: { text: "Some assign contracts" },
  },
  {
    label: "Who you deal with",
    joe: { text: "Directly with Joe, local", positive: true },
    agent: { text: "Multiple agents & parties" },
    other: { text: "Could be national call center" },
  },
] as const;

function CellContent({
  text,
  positive,
  negative,
}: {
  text: string;
  positive?: boolean;
  negative?: boolean;
}) {
  if (positive) {
    return (
      <>
        <span className="mr-1.5 font-bold text-teal" aria-hidden>
          ✓
        </span>
        {text}
      </>
    );
  }

  if (negative) {
    return (
      <>
        <span className="mr-1.5 font-bold text-red-500" aria-hidden>
          ✕
        </span>
        {text}
      </>
    );
  }

  return <>{text}</>;
}

export function ComparisonTable() {
  return (
    <section
      id="compare"
      className="bg-white py-10"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
            Side by Side
          </p>
          <h2
            id="comparison-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            Sell to Joe vs.{" "}
            <em className="text-teal italic">other Buyers</em>
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-[0.95rem] leading-relaxed text-slate">
            Every path has tradeoffs. Here&apos;s an honest look at what you gain
            and give up with each choice, so you can decide with confidence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-mist">
          <table className="w-full min-w-[720px] border-collapse text-[0.88rem]">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={`font-secondary px-4 py-4 text-left text-[0.68rem] font-semibold tracking-[0.08em] uppercase sm:px-5 ${
                      col.key === "joe"
                        ? "bg-navy text-teal"
                        : "bg-navy text-white/70"
                    } ${col.key === "label" ? "rounded-tl-xl" : ""} ${
                      col.key === "other" ? "rounded-tr-xl" : ""
                    }`}
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-mist last:border-b-0"
                >
                  <td className="font-primary px-4 py-3.5 text-[0.82rem] font-semibold text-navy sm:px-5 sm:py-4">
                    {row.label}
                  </td>
                  <td className="bg-teal-tint/40 px-4 py-3.5 font-semibold text-navy sm:px-5 sm:py-4">
                    <CellContent {...row.joe} />
                  </td>
                  <td className="font-secondary px-4 py-3.5 text-slate sm:px-5 sm:py-4">
                    <CellContent {...row.agent} />
                  </td>
                  <td className="font-secondary px-4 py-3.5 text-slate sm:px-5 sm:py-4">
                    <CellContent {...row.other} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="#offer-form"
            className="font-secondary inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)] sm:px-8 sm:text-[0.95rem]"
          >
            Get a No-Obligation Cash Offer to Compare
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
