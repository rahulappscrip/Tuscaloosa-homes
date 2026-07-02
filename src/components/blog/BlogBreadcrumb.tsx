import Link from "next/link";

type BlogBreadcrumbProps = {
  title: string;
};

export function BlogBreadcrumb({ title }: BlogBreadcrumbProps) {
  return (
    <nav
      className="border-b border-mist bg-hero-surface py-3"
      aria-label="Breadcrumb"
    >
      <div className="mx-auto flex max-w-[1300px] flex-wrap items-center gap-2 px-6 text-[0.82rem] text-slate">
        <Link
          href="/"
          className="font-secondary transition-colors hover:text-teal"
        >
          Home
        </Link>
        <span className="text-mist" aria-hidden>
          ›
        </span>
        <Link
          href="/blog"
          className="font-secondary transition-colors hover:text-teal"
        >
          Blog
        </Link>
        <span className="text-mist" aria-hidden>
          ›
        </span>
        <span className="font-secondary line-clamp-1 font-medium text-charcoal">
          {title}
        </span>
      </div>
    </nav>
  );
}
