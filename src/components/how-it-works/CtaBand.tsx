import Link from "next/link";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";

type CtaBandProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export function CtaBand({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <div className="border-y border-teal/20 bg-teal-tint py-8">
      <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-5 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-primary text-[1.05rem] font-bold text-navy sm:text-[1.1rem]">
            {title}
          </p>
          <p className="font-secondary mt-1 text-[0.9rem] text-slate">
            {subtitle}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="#contact"
            className="font-secondary inline-flex items-center justify-center rounded-lg bg-teal px-5 py-3 text-[0.9rem] font-bold text-white transition-colors hover:bg-teal-dark"
          >
            {primaryLabel}
          </Link>
          <Link
            href={PHONE_HREF}
            className="font-secondary inline-flex items-center justify-center rounded-lg border-2 border-mist bg-white px-5 py-3 text-[0.9rem] font-semibold text-navy transition-colors hover:border-navy"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
