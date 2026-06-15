import Image from "next/image";
import { sellerSituations } from "@/data/situations";

const featuredSituationIds = [
  "foreclosure",
  "inherited-probate",
  "sell-as-is",
  "tired-landlord",
  "divorce",
  "relocating",
] as const;

const featuredSituations = featuredSituationIds.map(
  (id) => sellerSituations.find((situation) => situation.id === id)!,
);

export function SellerSituations() {
  return (
    <section
      id="situations"
      className="bg-hero-surface py-10"
      aria-labelledby="seller-situations-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
          Who Joe helps
          </p>
          <h2
            id="seller-situations-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            Who We Help When We Buy Homes for Cash in {" "}
            <em className="text-teal italic">Tuscaloosa</em>
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-[0.95rem] leading-relaxed text-slate">
          Joe helps a wide range of Tuscaloosa homeowners who need to sell quickly and want a straightforward path to the closing table. Here are some of the people We Buy Tuscaloosa Homes is built to serve:
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featuredSituations.map((situation) => (
            <article
              key={situation.id}
              id={situation.id}
              className="group scroll-mt-28 overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(26,35,50,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(26,35,50,0.1)]"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src={situation.image}
                  alt={situation.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-primary mb-2 text-[1rem] font-bold text-navy">
                  {situation.title}
                </h3>
                <p className="font-secondary text-[0.84rem] leading-relaxed text-slate">
                  {situation.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="font-secondary mx-auto mt-10 max-w-[620px] text-center text-[0.9rem] leading-relaxed text-slate">
          If you see your situation in this list—or even if you&apos;re not
          sure—Joe will walk you through options so you can decide what feels
          right.
        </p>
      </div>
    </section>
  );
}
