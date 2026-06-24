import Link from "next/link";
import { whereWeBuyAreas } from "@/data/how-it-works";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";

type AreaColumn = {
  header: string;
  areas: readonly { name: string; primary: boolean }[];
};

type WhereWeBuyProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  areas?: readonly AreaColumn[];
  footnote?: string;
};

const headerCellStyles = [
  "bg-ice text-slate rounded-tl-xl",
  "bg-teal-tint/60 text-teal",
  "bg-ice text-slate rounded-tr-xl",
] as const;

export function WhereWeBuy({
  eyebrow = "Where We Buy",
  heading = "Tuscaloosa neighborhoods and areas we buy houses in",
  description = "We buy houses across Tuscaloosa and West Alabama. If you're unsure whether your property is in our service area, call Joe — he'll tell you quickly.",
  areas = whereWeBuyAreas,
  footnote = "Don't see your area? Call Joe at (803) 784-7672 — if we don't buy there, we'll tell you honestly and point you in the right direction.",
}: WhereWeBuyProps) {
  const maxRows = Math.max(...areas.map((column) => column.areas.length));

  return (
    <section
      id="compare"
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
                {areas.map((column, columnIndex) => (
                  <th
                    key={column.header}
                    scope="col"
                    className={`font-secondary px-4 py-4 text-left text-[0.68rem] font-semibold tracking-[0.08em] uppercase sm:px-5 ${headerCellStyles[columnIndex] ?? headerCellStyles[2]}`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: maxRows }, (_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-mist last:border-b-0"
                >
                  {areas.map((column, columnIndex) => {
                    const area = column.areas[rowIndex];

                    return (
                      <td
                        key={`${column.header}-${rowIndex}`}
                        className={`px-4 py-3.5 sm:px-5 sm:py-4 ${
                          columnIndex === 1
                            ? "bg-teal-tint/40 font-semibold text-navy"
                            : "font-secondary text-slate"
                        }`}
                      >
                        {area ? (
                          <span
                            className={`inline-flex items-center gap-2 ${
                              area.primary ? "font-semibold text-navy" : ""
                            }`}
                          >
                            <span
                              className="h-[5px] w-[5px] shrink-0 rounded-full bg-teal"
                              aria-hidden
                            />
                            {area.name}
                          </span>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-secondary mt-8 text-center text-[0.8125rem] leading-relaxed text-slate sm:mt-10">
          {footnote.includes(PHONE) ? (
            <>
              {footnote.split(PHONE)[0]}
              <Link
                href={PHONE_HREF}
                className="font-semibold text-teal transition-colors hover:text-teal-dark"
              >
                {PHONE}
              </Link>
              {footnote.split(PHONE)[1]}
            </>
          ) : (
            footnote
          )}
        </p>
      </div>
    </section>
  );
}
