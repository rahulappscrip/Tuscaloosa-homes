const defaultStats = [
  { value: "24", unit: "hr", label: "Cash Offer Turnaround" },
  { value: "7", unit: "days", label: "Minimum Close Time" },
  { value: "5.0", unit: "★", label: "Rating · 103 Reviews" },
  { value: "0%", unit: "", label: "Commission to You" },
] as const;

type StatItem = {
  value: string;
  unit: string;
  label: string;
};

type StatsRibbonProps = {
  stats?: readonly StatItem[];
};

export function StatsRibbon({ stats = defaultStats }: StatsRibbonProps) {
  return (
    <section className="border-b border-mist bg-white" aria-label="Company stats">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-7 text-center sm:px-6 sm:py-8 ${
                index < stats.length - 1
                  ? "border-b border-mist sm:border-r sm:border-b-0"
                  : ""
              }`}
            >
              <div className="inline-flex items-start justify-center leading-none">
                <span className="font-primary text-[22px] font-extrabold leading-tight text-navy">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="font-secondary mt-1 ml-0.5 text-[0.8rem] font-bold text-teal sm:text-[0.9rem]">
                    {stat.unit}
                  </span>
                ) : null}
              </div>
              <p className="font-secondary mt-2 text-eyebrow font-semibold tracking-[0.1em] text-slate uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
