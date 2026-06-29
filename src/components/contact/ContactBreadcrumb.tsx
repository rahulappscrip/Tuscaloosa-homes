import Link from "next/link";

export function ContactBreadcrumb() {
  return (
    <nav
      className="border-b border-mist bg-hero-surface py-3"
      aria-label="Breadcrumb"
    >
      <div className="mx-auto flex max-w-[1300px] items-center gap-2 px-6 text-[0.82rem] text-slate">
        <Link
          href="/"
          className="font-secondary transition-colors hover:text-teal"
        >
          Home
        </Link>
        <span className="text-mist" aria-hidden>
          ›
        </span>
        <span className="font-secondary font-medium text-charcoal">Contact</span>
      </div>
    </nav>
  );
}
