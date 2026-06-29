import Image from "next/image";
import Link from "next/link";
import { sellerSituations, situationHref } from "@/data/situations";

const quickLinks = [
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Home Value",
    href: "/how-much-is-my-house-worth-tuscaloosa-al",
  },
  { label: "Get Cash Offer", href: "/contact" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Joe", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const cities = [
  { label: "Tuscaloosa", href: "#" },
  { label: "Northport", href: "#" },
  { label: "Cottondale", href: "#" },
  { label: "Brookwood", href: "#" },
  { label: "Coaling", href: "#" },
  { label: "West Alabama", href: "#" },
];

const situationsSplitIndex = Math.ceil(sellerSituations.length / 2);
const situationsColumnOne = sellerSituations.slice(0, situationsSplitIndex);
const situationsColumnTwo = sellerSituations.slice(situationsSplitIndex);

function SituationLinks({
  situations,
}: {
  situations: ReadonlyArray<(typeof sellerSituations)[number]>;
}) {
  return (
    <>
      {situations.map((situation) => (
        <Link
          key={situation.id}
          href={situationHref(situation.id)}
          className="mb-2 block text-[0.88rem] transition-colors hover:text-teal"
        >
          {situation.footerLabel}
        </Link>
      ))}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-12 pb-8 text-white">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-10 xl:gap-12">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/assets/logo-updated.webp"
                alt="We Buy Tuscaloosa Homes"
                width={2812}
                height={624}
                className="h-12 w-auto max-w-[320px] sm:h-14 sm:max-w-[360px]"
              />
            </Link>
            <p className="max-w-[280px] text-base leading-relaxed">
              A local cash home buyer serving Tuscaloosa and West Alabama.
              Operating under High Noon Home Buyers. 5.0 rating from 103+
              reviews.
            </p>
            <address className="mt-4 font-secondary text-[0.8rem] not-italic text-white/85">
              1301 McFarland Blvd N, Suite 200
              <br />
              Tuscaloosa, AL 35406
            </address>
          </div>

          <div>
            <h4 className="font-secondary mb-3.5 text-[0.72rem] font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mb-2 block text-[0.88rem] transition-colors hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-secondary mb-3.5 text-[0.72rem] font-bold uppercase tracking-widest text-white">
              Situations
            </h4>
            <SituationLinks situations={situationsColumnOne} />
          </div>

          <div className="sm:pt-0 lg:pt-[1.85rem]">
            <SituationLinks situations={situationsColumnTwo} />
          </div>

          <div>
            <h4 className="font-secondary mb-3.5 text-[0.72rem] font-bold uppercase tracking-widest text-white">
              Cities
            </h4>
            {cities.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mb-2 block text-[0.88rem] transition-colors hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2.5 border-t border-white/8 pt-6 text-[0.78rem] text-white/85 sm:flex-row">
          <span>
            © 2026 We Buy Tuscaloosa Homes · High Noon Home Buyers · Deal
            Lead Marketing LLC
          </span>
          <span>
            <Link
              href="#"
              className="mr-3 text-white/85 transition-colors hover:text-teal"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/85 transition-colors hover:text-teal"
            >
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
