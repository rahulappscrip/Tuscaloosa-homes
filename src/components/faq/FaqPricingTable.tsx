import type { faqPricingComparisonRows } from "@/data/faq-page";

type PricingRow = (typeof faqPricingComparisonRows)[number];

export function FaqPricingTable({ rows }: { rows: readonly PricingRow[] }) {
  return (
    <div className="mb-6 overflow-x-auto rounded-xl border border-mist">
      <table className="w-full min-w-[640px] border-collapse text-[0.84rem] sm:text-[0.88rem]">
        <thead>
          <tr className="border-b border-mist bg-ice">
            <th className="font-primary px-4 py-3 text-left font-bold text-navy">
              Factor
            </th>
            <th className="font-primary bg-teal-tint/50 px-4 py-3 text-left font-bold text-teal">
              Cash Sale — We Buy Tuscaloosa Homes
            </th>
            <th className="font-primary px-4 py-3 text-left font-bold text-slate">
              Traditional Listing — Agent
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.factor} className="border-b border-mist last:border-b-0">
              <td className="font-secondary px-4 py-3 font-semibold text-navy">
                {row.factor}
              </td>
              <td className="font-secondary bg-teal-tint/30 px-4 py-3 text-charcoal">
                {row.cashPositive ? (
                  <span className="mr-1.5 font-bold text-teal" aria-hidden>
                    ✓
                  </span>
                ) : null}
                {row.cash}
              </td>
              <td className="font-secondary px-4 py-3 text-slate">{row.agent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
