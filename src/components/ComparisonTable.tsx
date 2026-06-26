import Link from "next/link";

const columns = [
  { key: "label", header: "Criteria" },
  { key: "joe", header: "Sell to Joe (Local Cash Buyer)", highlight: true },
  { key: "agent", header: "List With an Agent" },
  { key: "other", header: "Sell to Other Investors" },
] as const;

const rows = [
  {
    label: "Time to close",
    joe: { text: "7–21 days, on your schedule", positive: true },
    agent: { text: "Often 30–60+ days from listing to closing" },
    other: { text: "Varies; some still rely on loans" },
  },
  {
    label: "Repairs & cleaning",
    joe: { text: "None — sell as-is", positive: true },
    agent: { text: "Often need repairs and deep cleaning" },
    other: { text: "Many buy as-is, but terms vary" },
  },
  {
    label: "Showings",
    joe: { text: "None — one quick visit", positive: true },
    agent: { text: "Multiple showings and open houses" },
    other: { text: "Usually minimal, but unclear process" },
  },
  {
    label: "Commissions",
    joe: { text: "0% commission", positive: true },
    agent: { text: "Typically 5–6% of sale price" },
    other: { text: "Usually 0%, but some charge fees" },
  },
  {
    label: "Closing costs",
    joe: { text: "Joe pays standard closing costs", positive: true },
    agent: { text: "Seller often pays a portion" },
    other: { text: "Depends on the buyer" },
  },
  {
    label: "Certainty of closing",
    joe: { text: "High — cash, no financing", positive: true },
    agent: { text: "Subject to financing & appraisal risk" },
    other: { text: "Varies; some wholesale/assign" },
  },
  {
    label: "Who you deal with",
    joe: { text: "Directly with Joe, local Tuscaloosa buyer", positive: true },
    agent: { text: "Listing agent, buyer's agent & third parties" },
    other: { text: "Could be local or a national call center" },
  },
  {
    label: "Stress level",
    joe: { text: "Low — simple, no-pressure steps", positive: true },
    agent: { text: "Higher — longer timeline, more moving parts" },
    other: { text: "Varies widely by company" },
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
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
          Compare your options
          </p>
          <h2
            id="comparison-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            Selling to Joe vs. Listing With an Agent vs.{" "}
            <em className="text-teal italic">Other Cash Buyers</em>
          </h2>
          <p className="font-secondary mx-auto max-w-[600px] text-base leading-relaxed text-slate">
          We buy Tuscaloosa homes with speed, simplicity, and clear no-obligation offers — so you can compare options and choose what&apos;s best for you.
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
                        ? "bg-teal-tint/60 text-teal"
                        : col.key === "label"
                          ? "bg-ice text-slate"
                          : "bg-ice text-slate"
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
          <p className="font-secondary mx-auto mb-5 max-w-xl text-base leading-relaxed text-slate">
            When you know exactly what each option looks like, it&apos;s easier to
            choose with confidence instead of guessing.
          </p>
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
