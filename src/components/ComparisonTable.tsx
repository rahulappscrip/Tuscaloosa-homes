import Link from "next/link";

export type ComparisonCellData = {
  text: string;
  positive?: boolean;
  negative?: boolean;
  emphasize?: boolean;
};

export type ComparisonColumnData = {
  key: string;
  header: string;
  highlight?: boolean;
};

export type ComparisonRowData = {
  label: string;
  values: Record<string, ComparisonCellData>;
};

type ComparisonTableProps = {
  id?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  columns: readonly ComparisonColumnData[];
  rows: readonly ComparisonRowData[];
  closingText?: string;
  footnote?: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  bottomCta?: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref?: string;
    secondaryLabel: string;
    secondaryHref?: string;
  };
};

function CellContent({
  text,
  positive,
  negative,
  emphasize,
}: ComparisonCellData) {
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

  if (emphasize) {
    return <span className="font-semibold text-teal">{text}</span>;
  }

  return <>{text}</>;
}

export function ComparisonTable({
  id = "compare",
  eyebrow = "Compare your options",
  heading = (
    <>
      Selling to Joe vs. Listing With an Agent vs.{" "}
      <em className="text-teal italic">Other Cash Buyers</em>
    </>
  ),
  description = "We buy Tuscaloosa homes with speed, simplicity, and clear no-obligation offers — so you can compare options and choose what's best for you.",
  columns,
  rows,
  closingText = "When you know exactly what each option looks like, it's easier to choose with confidence instead of guessing.",
  footnote,
  showCta = true,
  ctaLabel = "Get a No-Obligation Cash Offer to Compare",
  ctaHref = "#offer-form",
  bottomCta,
}: ComparisonTableProps) {
  const dataColumns = columns.filter((column) => column.key !== "label");
  const lastDataColumn = dataColumns[dataColumns.length - 1]?.key;

  return (
    <section
      id={id}
      className="bg-white py-10"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="comparison-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mx-auto max-w-[600px] text-base leading-relaxed text-slate">
            {description}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-mist">
          <table className="w-full min-w-[720px] border-collapse text-[0.88rem]">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className={`font-secondary px-4 py-4 text-left text-[0.68rem] font-semibold tracking-[0.08em] uppercase sm:px-5 ${
                      column.highlight
                        ? "bg-navy text-white"
                        : "bg-ice text-slate"
                    } ${column.key === "label" ? "rounded-tl-xl" : ""} ${
                      column.key === lastDataColumn ? "rounded-tr-xl" : ""
                    }`}
                  >
                    {column.header}
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
                  {columns.map((column) => {
                    if (column.key === "label") {
                      return (
                        <td
                          key={column.key}
                          className="font-primary px-4 py-3.5 text-[0.82rem] font-semibold text-navy sm:px-5 sm:py-4"
                        >
                          {row.label}
                        </td>
                      );
                    }

                    const cell = row.values[column.key];
                    const isHighlightColumn = column.highlight;

                    return (
                      <td
                        key={column.key}
                        className={`px-4 py-3.5 sm:px-5 sm:py-4 ${
                          isHighlightColumn
                            ? "bg-teal-tint/40 font-semibold text-navy"
                            : "font-secondary text-slate"
                        }`}
                      >
                        {cell ? <CellContent {...cell} /> : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {footnote ? (
          <p className="font-secondary mx-auto mt-5 max-w-3xl text-center text-[0.82rem] leading-relaxed text-slate">
            {footnote}
          </p>
        ) : null}

        {bottomCta ? (
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-teal/20 bg-hero-surface p-6 sm:mt-10 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-primary text-[1.05rem] font-bold text-navy sm:text-[1.15rem]">
                {bottomCta.title}
              </p>
              <p className="font-secondary mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-slate">
                {bottomCta.description}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href={bottomCta.primaryHref ?? "#contact"}
                className="font-secondary inline-flex items-center justify-center rounded-lg bg-teal px-5 py-3 text-[0.9rem] font-bold text-white transition-colors hover:bg-teal-dark"
              >
                {bottomCta.primaryLabel}
              </Link>
              <Link
                href={bottomCta.secondaryHref ?? "tel:8037847672"}
                className="font-secondary inline-flex items-center justify-center rounded-lg border-2 border-mist bg-white px-5 py-3 text-[0.9rem] font-semibold text-navy transition-colors hover:border-navy"
              >
                {bottomCta.secondaryLabel}
              </Link>
            </div>
          </div>
        ) : null}

        {showCta ? (
          <div className="mt-8 text-center sm:mt-10">
            {closingText ? (
              <p className="font-secondary mx-auto mb-5 max-w-xl text-base leading-relaxed text-slate">
                {closingText}
              </p>
            ) : null}
            <Link
              href={ctaHref}
              className="font-secondary inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)] sm:px-8 sm:text-[0.95rem]"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
