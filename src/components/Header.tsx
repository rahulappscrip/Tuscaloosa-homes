"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { sellerSituations, situationHref } from "@/data/situations";
import { Logo } from "./Logo";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";
const EMAIL = "joe@webuytuscaloosahomes.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

const locations = [
  { label: "Tuscaloosa", href: "/sell-my-house-fast-tuscaloosa" },
  { label: "Northport", href: "/we-buy-houses-northport-al" },
  { label: "Cottondale", href: "/we-buy-houses-cottondale-al" },
  { label: "Brookwood", href: "/sell-my-house-fast-brookwood-al" },
  { label: "Alberta City", href: "/sell-my-house-fast-alberta-city-tuscaloosa" },
  { label: "Woodland Forrest", href: "/sell-my-house-fast-woodland-forrest-tuscaloosa" },
  { label: "Vance", href: "/sell-my-house-fast-vance-al" },
  { label: "Hillcrest", href: "/we-buy-houses-in-hillcrest-tuscaloosa-al" },
  { label: "University of Alabama", href: "/sell-house-near-university-of-alabama" },
] as const;

const companyLinks = [
  { label: "About Joe", href: "/about" },
  {
    label: "Home Value",
    href: "/how-much-is-my-house-worth-tuscaloosa-al",
  },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

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
  const [navHeight, setNavHeight] = useState(78);
  const headerRef = useRef<HTMLElement>(null);
  const navRowRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  const toggleSubnav = (id: string) => {
    setOpenSubnav((current) => (current === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        headerRef.current?.contains(target) ||
        mobileMenuRef.current?.contains(target)
      ) {
        return;
      }

      setOpenDropdown(null);
      setMobileOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenDropdown(null);
      } else {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const navRow = navRowRef.current;
    if (!navRow) return;

    const updateNavHeight = () => setNavHeight(navRow.offsetHeight);
    updateNavHeight();

    const observer = new ResizeObserver(updateNavHeight);
    observer.observe(navRow);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  return (
    <>
      <section className="Top-bar bg-navy text-[0.8rem] text-white/80">
        <div className="mx-auto max-w-[1300px] px-6 py-2.5">
          {/* Mobile — centered */}
          <div className="flex flex-col items-center justify-center gap-1 text-center md:hidden">
            <span className="text-[0.7rem] tracking-[2px] text-gold" aria-hidden>
              ★★★★★
            </span>
            <p className="font-secondary text-[0.78rem] font-medium leading-snug text-white">
              Rated 5.0 by 103+ Tuscaloosa homeowners
            </p>
            <p className="font-secondary text-[0.72rem] leading-snug text-teal">
              Locally owned - High Noon Home Buyers
            </p>
          </div>

          {/* Desktop — spread layout */}
          <div className="hidden items-center justify-between gap-4 md:flex">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="shrink-0 tracking-[1px] text-gold">★★★★★</span>
              <span>Rated 5.0 by 103+ Tuscaloosa homeowners</span>
            </div>

            <div className="text-white/75">Locally owned</div>

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
      </section>

      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{ height: navHeight }}
          aria-hidden
        />
      )}

      <header
        ref={headerRef}
        className={`top-0 z-[1000] bg-white transition-shadow duration-200 ${
          mobileOpen ? "fixed inset-x-0" : "sticky"
        } ${
          scrolled || mobileOpen
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Navbar */}
        <nav className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1300px] px-6">
          <div
            ref={navRowRef}
            className="flex h-[78px] items-center justify-between gap-6"
          >
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center">
              <Logo className="h-auto w-[168px] sm:w-[220px]" />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              <li>
                <NavLink href="/how-it-works">How It Works</NavLink>
              </li>

              <NavDropdown
                id="locations"
                label="Locations"
                openId={openDropdown}
                onOpen={setOpenDropdown}
                onClose={closeDropdown}
              >
                <p className="font-secondary px-4 pt-3 pb-1 text-eyebrow font-semibold tracking-[0.1em] text-slate uppercase">
                  Cities We Serve
                </p>
                <div className="pb-2">
                  {locations.map((city) => (
                    <DropdownLink key={city.label} href={city.href}>
                      {city.label}
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
                  {sellerSituations.map((situation) => (
                    <DropdownLink
                      key={situation.id}
                      href={situationHref(situation.id)}
                    >
                      {situation.footerLabel}
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
              {/* Desktop: phone icon + CTA */}
              <NavIconButton
                href={PHONE_HREF}
                label={`Call ${PHONE}`}
                className="hidden lg:flex"
              >
                <PhoneIcon size={16} />
              </NavIconButton>

              <Link
                href="/contact"
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
      </nav>
      </header>

      {/* Mobile menu — fixed overlay below nav so sticky header keeps working */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-x-0 bottom-0 z-[999] overflow-y-auto border-t border-border bg-white lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
        style={{ top: navHeight }}
      >
          <div className="mx-auto max-w-[1300px] px-6 py-2">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "About Joe", href: "/about" },
              {
                label: "Home Value",
                href: "/how-much-is-my-house-worth-tuscaloosa-al",
              },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
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
                        key={item.label}
                        href={item.href}
                        className="font-secondary block py-2 text-[0.88rem] text-slate"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-b border-border/70">
              <button
                type="button"
                className={`font-secondary flex w-full cursor-pointer items-center justify-between py-3.5 text-[0.95rem] font-semibold transition-colors ${
                  openSubnav === "situations"
                    ? "text-teal-dark"
                    : "text-charcoal"
                }`}
                onClick={() => toggleSubnav("situations")}
                aria-expanded={openSubnav === "situations"}
              >
                Situations
                <ChevronDown
                  className={`transition-transform duration-200 ${openSubnav === "situations" ? "rotate-180" : ""}`}
                />
              </button>
              {openSubnav === "situations" && (
                <div className="bg-teal-tint/60 px-4 pb-3">
                  {sellerSituations.map((situation) => (
                    <Link
                      key={situation.id}
                      href={situationHref(situation.id)}
                      className="font-secondary block py-2 text-[0.88rem] text-slate"
                      onClick={() => setMobileOpen(false)}
                    >
                      {situation.footerLabel}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 pb-6">
              <Link
                href="/contact"
                className="font-secondary flex w-full items-center justify-center rounded-[5px] bg-teal px-5 py-3.5 text-[0.9rem] font-bold text-white transition-colors hover:bg-teal-dark"
                onClick={() => setMobileOpen(false)}
              >
                Get Cash Offer
              </Link>
            </div>
          </div>
      </div>
    </>
  );
}
