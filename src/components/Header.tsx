"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";
const EMAIL = "joe@webuytuscaloosahomes.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

const locations = [
  "Tuscaloosa",
  "Northport",
  "Cottondale",
  "Brookwood",
  "Coaling",
  "West Alabama Area",
];

const situations = [
  "Facing Foreclosure",
  "Inherited / Probate",
  "Divorce",
  "Tired Landlord",
  "Fire Damage",
  "Water Damage",
  "Mold / Structural",
  "Behind on Taxes",
  "Bankruptcy",
  "Relocating",
  "Sell As-Is",
  "Cash Home Buyers",
];

const companyLinks = [
  { label: "About Joe", href: "#meet-joe" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

const mobileSituations = [
  "Foreclosure",
  "Inherited / Probate",
  "Divorce",
  "Tired Landlord",
  "Fire / Water / Mold Damage",
  "Relocating",
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92l.02 1z" />
    </svg>
  );
}

function MailIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function NavIconButton({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-mist text-navy transition-colors hover:border-teal hover:bg-teal/10 hover:text-teal-dark ${className}`}
    >
      {children}
    </a>
  );
}

const navItemClass =
  "font-secondary inline-flex items-center gap-1 rounded px-3.5 py-2 text-[0.9rem] font-semibold text-charcoal transition-colors duration-200 hover:bg-teal/10 hover:text-teal";

const navItemActiveClass = "bg-teal/10 font-bold text-teal-dark";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={navItemClass}>
      {children}
    </Link>
  );
}

function NavDropdown({
  id,
  label,
  wide,
  openId,
  onOpen,
  onClose,
  children,
}: {
  id: string;
  label: string;
  wide?: boolean;
  openId: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const isOpen = openId === id;

  return (
    <li
      className="relative"
      onMouseEnter={() => onOpen(id)}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        className={`${navItemClass} cursor-pointer ${
          isOpen ? navItemActiveClass : ""
        }`}
      >
        {label}
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full left-1/2 z-[200] -translate-x-1/2 pt-2 transition-all duration-200 ${
          isOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        }`}
      >
        <div
          className={`rounded-lg border border-border bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ${
            wide ? "w-[min(480px,calc(100vw-2rem))]" : "w-[220px]"
          }`}
        >
          {children}
        </div>
      </div>
    </li>
  );
}

function DropdownLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-secondary mx-1 block rounded px-4 py-2.5 text-[0.88rem] font-medium text-charcoal transition-colors hover:bg-ice hover:font-semibold hover:text-teal-dark"
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubnav, setOpenSubnav] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  const toggleSubnav = (id: string) => {
    setOpenSubnav((current) => (current === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setOpenDropdown(null);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-[1000] bg-white transition-shadow duration-200 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          : "shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy text-[0.8rem] text-white/80">
        <div className="mx-auto max-w-[1300px] px-6 py-2.5">
          {/* Mobile — centered */}
          <div className="flex flex-col items-center justify-center gap-1.5 text-center md:hidden">
            <div className="flex items-center justify-center gap-1.5 text-xs font-medium">
              <span className="shrink-0 tracking-[1px] text-gold">★★★★★</span>
              <span>Rated 5.0 by 103+ Tuscaloosa homeowners</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/75">
              <span className="font-secondary shrink-0 rounded-[2px] bg-gold px-1.5 py-0.5 text-[0.65rem] font-bold tracking-wide text-navy">
                BBB A+
              </span>
              <span>Accredited Business (High Noon Home Buyers)</span>
            </div>
          </div>

          {/* Desktop — spread layout */}
          <div className="hidden items-center justify-between gap-4 md:flex">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="shrink-0 tracking-[1px] text-gold">★★★★★</span>
              <span>Rated 5.0 by 103+ Tuscaloosa homeowners</span>
            </div>

            <div className="flex items-center gap-1.5 text-white/75">
              <span className="font-secondary shrink-0 rounded-[2px] bg-gold px-1.5 py-0.5 text-[0.65rem] font-bold tracking-wide text-navy">
                BBB A+
              </span>
              <span>Accredited Business (High Noon Home Buyers)</span>
            </div>

            <div className="flex shrink-0 items-center gap-5">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 text-[0.82rem] text-white/75 transition-colors hover:text-white"
              >
                <PhoneIcon size={13} />
                {PHONE}
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-1.5 text-[0.82rem] text-white/75 transition-colors hover:text-white"
              >
                <MailIcon />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex h-[70px] items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
              <Logo className="h-10 w-auto shrink-0 sm:h-11" />
              <div className="min-w-0 leading-[1.2]">
                <strong className="font-primary block truncate text-[0.95rem] font-bold text-navy sm:text-[1.05rem] sm:whitespace-nowrap">
                  We Buy Tuscaloosa Homes
                </strong>
                <span className="font-secondary block truncate text-[0.6rem] font-bold tracking-[0.08em] text-teal uppercase sm:text-[0.65rem]">
                  For Cash in Alabama
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              <li>
                <NavLink href="#how-it-works">How It Works</NavLink>
              </li>
              <li>
                <NavLink href="#reviews">Reviews</NavLink>
              </li>

              <NavDropdown
                id="locations"
                label="Locations"
                openId={openDropdown}
                onOpen={setOpenDropdown}
                onClose={closeDropdown}
              >
                <p className="font-secondary px-4 pt-3 pb-1 text-[0.68rem] font-semibold tracking-[0.1em] text-slate uppercase">
                  Cities We Serve
                </p>
                <div className="pb-2">
                  {locations.map((city) => (
                    <DropdownLink key={city} href="#">
                      {city}
                    </DropdownLink>
                  ))}
                </div>
              </NavDropdown>

              <NavDropdown
                id="situations"
                label="Situations"
                wide
                openId={openDropdown}
                onOpen={setOpenDropdown}
                onClose={closeDropdown}
              >
                <div className="grid grid-cols-2 gap-0 p-2 pb-3">
                  {situations.map((situation) => (
                    <DropdownLink key={situation} href="#">
                      {situation}
                    </DropdownLink>
                  ))}
                </div>
              </NavDropdown>

              <NavDropdown
                id="company"
                label="Company"
                openId={openDropdown}
                onOpen={setOpenDropdown}
                onClose={closeDropdown}
              >
                <div className="pb-2 pt-1">
                  {companyLinks.map((link) => (
                    <DropdownLink key={link.label} href={link.href}>
                      {link.label}
                    </DropdownLink>
                  ))}
                </div>
              </NavDropdown>
            </ul>

            {/* CTA area */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              {/* Mobile: phone + email + hamburger */}
              <NavIconButton
                href={PHONE_HREF}
                label={`Call ${PHONE}`}
                className="lg:hidden"
              >
                <PhoneIcon size={16} />
              </NavIconButton>
              <NavIconButton
                href={EMAIL_HREF}
                label={`Email ${EMAIL}`}
                className="lg:hidden"
              >
                <MailIcon size={16} />
              </NavIconButton>

              {/* Desktop: phone icon + CTA */}
              <NavIconButton
                href={PHONE_HREF}
                label={`Call ${PHONE}`}
                className="hidden lg:flex"
              >
                <PhoneIcon size={16} />
              </NavIconButton>

              <Link
                href="#offer-form"
                className="font-secondary hidden items-center justify-center rounded-[5px] bg-teal px-5 py-2 text-[0.875rem] font-bold whitespace-nowrap text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_16px_rgba(43,188,212,0.35)] lg:inline-flex"
              >
                Get Cash Offer
              </Link>

              <button
                type="button"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-mist text-navy transition-colors hover:border-teal hover:bg-teal/10 lg:hidden"
                onClick={() => {
                  setMobileOpen((open) => !open);
                  setOpenDropdown(null);
                }}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute top-0 left-0 block h-0.5 w-5 rounded-full bg-navy transition-all duration-200 ${mobileOpen ? "top-[6px] rotate-45" : ""}`}
                  />
                  <span
                    className={`absolute top-[6px] left-0 block h-0.5 w-5 rounded-full bg-navy transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`absolute top-3 left-0 block h-0.5 w-5 rounded-full bg-navy transition-all duration-200 ${mobileOpen ? "top-[6px] -rotate-45" : ""}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`border-t border-border bg-white lg:hidden ${
            mobileOpen ? "block" : "hidden"
          }`}
        >
          <div className="mx-auto max-h-[calc(100dvh-70px)] max-w-[1300px] overflow-y-auto px-6 py-2">
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Reviews", href: "#reviews" },
              { label: "About Joe", href: "#meet-joe" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-secondary block border-b border-border/70 py-3.5 text-[0.95rem] font-semibold text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {(
              [
                { id: "locations", label: "Locations", items: locations },
                {
                  id: "situations",
                  label: "Situations",
                  items: mobileSituations,
                },
              ] as const
            ).map((section) => (
              <div key={section.id} className="border-b border-border/70">
                <button
                  type="button"
                  className={`font-secondary flex w-full cursor-pointer items-center justify-between py-3.5 text-[0.95rem] font-semibold transition-colors ${
                    openSubnav === section.id
                      ? "text-teal-dark"
                      : "text-charcoal"
                  }`}
                  onClick={() => toggleSubnav(section.id)}
                  aria-expanded={openSubnav === section.id}
                >
                  {section.label}
                  <ChevronDown
                    className={`transition-transform duration-200 ${openSubnav === section.id ? "rotate-180" : ""}`}
                  />
                </button>
                {openSubnav === section.id && (
                  <div className="bg-teal-tint/60 px-4 pb-3">
                    {section.items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="font-secondary block py-2 text-[0.88rem] text-slate"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 pb-6">
              <Link
                href="#offer-form"
                className="font-secondary flex w-full items-center justify-center rounded-[5px] bg-teal px-5 py-3.5 text-[0.9rem] font-bold text-white transition-colors hover:bg-teal-dark"
                onClick={() => setMobileOpen(false)}
              >
                Get Cash Offer
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
