"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  blogCategoryStyles,
  formatBlogDate,
  type BlogPost,
} from "@/data/blog";

export const BLOG_POSTS_PER_PAGE = 9;

type BlogIndexClientProps = {
  posts: BlogPost[];
};

function BlogImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      title={alt}
      fill
      unoptimized
      className={className}
      sizes={sizes}
    />
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const style = blogCategoryStyles[post.categoryKey];
  const emoji = post.emoji ?? style.emoji;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-mist bg-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(13,27,46,0.1)]">
      <div
        className={`relative flex h-[200px] items-center justify-center overflow-hidden text-[2.375rem] sm:h-[220px] ${style.gradient}`}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0_10px,transparent_10px_20px)]"
          aria-hidden
        />
        <span className="absolute top-3 left-3 z-[2] rounded-full bg-white/92 px-2.5 py-1.5 font-secondary text-[0.59rem] font-extrabold tracking-[0.07em] text-navy uppercase">
          {post.categoryLabel}
        </span>
        {post.imageUrl ? (
          <BlogImage
            src={post.imageUrl}
            alt={post.imageAlt ?? post.title}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="relative z-[1]" aria-hidden>
            {emoji}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-[18px] pt-[18px] pb-4">
        <h3 className="font-primary mb-2 text-[clamp(0.95rem,1.6vw,1.05rem)] leading-snug font-bold text-navy">
          <Link
            href={`/blog/${post.slug}`}
            className="text-navy transition-colors hover:text-teal-dark"
          >
            {post.title}
          </Link>
        </h3>
        <p className="font-secondary mb-3.5 flex-1 text-[0.78rem] leading-relaxed text-slate">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-mist pt-3 font-secondary text-[0.69rem] text-slate">
          <span>
            {post.author} · {formatBlogDate(post.date)}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-primary text-[0.69rem] font-bold text-teal-dark hover:underline"
          >
            READ →
          </Link>
        </div>
      </div>
    </article>
  );
}

function getCurrentPage(pageParam: string | null, totalPages: number): number {
  const parsed = Number(pageParam ?? "1");

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }

  return Math.min(Math.floor(parsed), totalPages);
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const totalPages = Math.max(
    1,
    Math.ceil(posts.length / BLOG_POSTS_PER_PAGE),
  );
  const showPagination = posts.length > BLOG_POSTS_PER_PAGE;
  const currentPage = getCurrentPage(searchParams.get("page"), totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
    return posts.slice(start, start + BLOG_POSTS_PER_PAGE);
  }, [posts, currentPage]);

  function goToPage(page: number) {
    const nextPage = Math.max(1, Math.min(page, totalPages));
    const params = new URLSearchParams(searchParams.toString());

    if (nextPage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(nextPage));
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });

    requestAnimationFrame(() => {
      document.getElementById("blog-posts")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <>
      <section className="relative overflow-hidden bg-hero-surface py-12 sm:py-14">
        <div
          className="pointer-events-none absolute -top-[120px] -right-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--color-teal-tint)_0%,rgba(227,247,250,0)_72%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1300px] px-6">
          <div className="max-w-[760px]">
            <p className="font-secondary mb-2.5 flex items-center gap-2 text-[0.69rem] font-bold tracking-[0.14em] text-teal-dark uppercase">
              <span className="h-0.5 w-5 bg-teal" aria-hidden />
              Blog · Seller Resources
            </p>
            <h1 className="font-primary mb-3.5 text-[clamp(1.875rem,4.4vw,3rem)] leading-[1.18] font-extrabold tracking-tight text-charcoal">
              Everything Tuscaloosa homeowners need to know before they{" "}
              <span className="text-teal">sell</span>.
            </h1>
            <p className="font-secondary max-w-[680px] text-[0.94rem] leading-relaxed text-charcoal">
              Fast sales, as-is vs. repairs, inherited property, cash-offer red
              flags, and local market context — straightforward guides written by
              Joe LeBlanc for Tuscaloosa sellers. No pressure, no fear-bait.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-11 pb-11 sm:pt-14 sm:pb-14">
        <div className="mx-auto max-w-[1300px] px-6">
          {posts.length === 0 ? (
            <p className="font-secondary mt-8 text-center text-base text-slate">
              Blog articles are loading from WordPress. Please check back shortly.
            </p>
          ) : (
            <>
              <div
                id="blog-posts"
                className="flex flex-wrap items-baseline justify-between gap-2.5 border-b border-mist pb-3.5"
              >
                <h2 className="font-primary text-[clamp(1.25rem,2.5vw,1.75rem)] font-extrabold text-charcoal">
                  Latest <span className="text-teal">articles</span>
                </h2>
                {showPagination ? (
                  <a
                    href="#pagination"
                    className="font-primary text-[0.81rem] font-bold text-teal-dark hover:underline"
                  >
                    View all articles →
                  </a>
                ) : null}
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
                {paginatedPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}

          {showPagination ? (
            <nav
              id="pagination"
              aria-label="Blog pagination"
              className="mt-10 flex items-center justify-center gap-2"
            >
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="font-primary flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-lg border border-mist bg-white px-3 text-[0.81rem] font-bold text-charcoal enabled:hover:border-teal enabled:hover:text-teal-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    aria-current={currentPage === page ? "page" : undefined}
                    onClick={() => goToPage(page)}
                    className={`font-primary flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-lg border px-3 text-[0.81rem] font-bold ${
                      currentPage === page
                        ? "border-navy bg-navy text-white"
                        : "border-mist bg-white text-charcoal hover:border-teal hover:text-teal-dark"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="font-primary flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-lg border border-mist bg-white px-3 text-[0.81rem] font-bold text-charcoal enabled:hover:border-teal enabled:text-teal-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            </nav>
          ) : null}
        </div>
      </section>
    </>
  );
}
