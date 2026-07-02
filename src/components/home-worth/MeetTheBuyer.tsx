import Image from "next/image";
import { homeWorthMeetTheBuyerContent } from "@/data/home-worth";

export function MeetTheBuyer() {
  const {
    eyebrow,
    heading,
    name,
    roleLabel,
    paragraphs,
    credentials,
    imageSrc,
    imageAlt,
  } = homeWorthMeetTheBuyerContent;

  return (
    <section
      id="meet-the-buyer"
      className="bg-hero-surface py-10"
      aria-labelledby="meet-the-buyer-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-16 xl:gap-20">
          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl bg-teal-tint">
              <Image
                src={imageSrc}
                alt={imageAlt}
                title="Joe LeBlanc — your local Tuscaloosa cash home buyer"
                width={1286}
                height={2094}
                className="mx-auto block h-auto w-full max-h-[540px] object-contain object-bottom"
              />

              <div className="absolute right-4 bottom-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_8px_28px_rgba(26,35,50,0.12)] sm:right-6 sm:bottom-6">
                <div
                  className="font-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-[0.8rem] font-bold text-white"
                  aria-hidden
                >
                  JL
                </div>
                <div className="font-secondary leading-tight">
                  <strong className="block text-[0.95rem] font-bold text-navy">
                    {name}
                  </strong>
                  <span className="text-[0.72rem] font-semibold text-teal">
                    {roleLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              {eyebrow}
            </p>
            <h2
              id="meet-the-buyer-heading"
              className="font-primary mb-3 text-[clamp(1.65rem,3.2vw,2.2rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              {heading}
            </h2>

            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-mist" aria-hidden />
              <span className="font-secondary text-[0.68rem] font-semibold tracking-[0.1em] text-slate uppercase">
                {name} · {roleLabel}
              </span>
              <div className="h-px flex-1 bg-mist" aria-hidden />
            </div>

            <div className="font-secondary space-y-4 text-[0.95rem] leading-relaxed text-slate">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="font-secondary rounded-full border border-teal/25 bg-white px-3.5 py-2 text-[0.78rem] font-semibold text-teal-dark shadow-[0_1px_4px_rgba(26,35,50,0.04)]"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
