import type { faqMarketStats } from "@/data/faq-page";

type MarketStat = (typeof faqMarketStats)[number];

export function FaqMarketStats({ stats }: { stats: readonly MarketStat[] }) {
  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-mist bg-white px-4 py-4 text-center sm:px-5"
        >
          <p className="font-primary mb-1 text-[1.35rem] font-extrabold text-navy sm:text-[1.5rem]">
            {stat.value}
          </p>
          <p className="font-secondary text-[0.78rem] leading-snug text-slate sm:text-[0.82rem]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
