import Link from "next/link";

const quickLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Get Cash Offer", href: "#offer-form" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Joe", href: "#meet-joe" },
  { label: "FAQ", href: "#faq" },
];

const situations = [
  { label: "Foreclosure", href: "#" },
  { label: "Inherited Property", href: "#" },
  { label: "Divorce", href: "#" },
  { label: "Tired Landlord", href: "#" },
  { label: "Fire / Mold Damage", href: "#" },
  { label: "Relocating", href: "#" },
];

const cities = [
  { label: "Tuscaloosa", href: "#" },
  { label: "Northport", href: "#" },
  { label: "Cottondale", href: "#" },
  { label: "Brookwood", href: "#" },
  { label: "Coaling", href: "#" },
  { label: "West Alabama", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-navy px-6 py-[60px] pb-8 text-white/60">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <h3 className="font-primary mb-2 text-[1.3rem] text-white">
              We Buy Tuscaloosa Homes
            </h3>
            <p className="max-w-[280px] text-[0.84rem] leading-relaxed">
              A local cash home buyer serving Tuscaloosa and West Alabama.
              Operating under High Noon Home Buyers. BBB A+ Accredited. 5.0
              rating from 103+ reviews.
            </p>
            <address className="mt-4 font-secondary text-[0.8rem] not-italic text-white/40">
              1301 McFarland Blvd N, Suite 200
              <br />
              Tuscaloosa, AL 35406
            </address>
          </div>

          <div>
            <h4 className="font-secondary mb-3.5 text-[0.72rem] uppercase tracking-widest text-white/40">
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
            <h4 className="font-secondary mb-3.5 text-[0.72rem] uppercase tracking-widest text-white/40">
              Situations
            </h4>
            {situations.map((link) => (
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
            <h4 className="font-secondary mb-3.5 text-[0.72rem] uppercase tracking-widest text-white/40">
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

        <div className="flex flex-col items-center justify-between gap-2.5 border-t border-white/8 pt-6 text-[0.78rem] sm:flex-row">
          <span>
            © 2026 We Buy Tuscaloosa Homes · High Noon Home Buyers · Deal
            Lead Marketing LLC
          </span>
          <span>
            <Link
              href="#"
              className="mr-3 text-white/40 transition-colors hover:text-teal"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/40 transition-colors hover:text-teal"
            >
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
