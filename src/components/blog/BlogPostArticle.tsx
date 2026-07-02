import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPostDetail } from "@/data/blog";

type BlogPostArticleProps = {
  post: BlogPostDetail;
};

export function BlogPostArticle({ post }: BlogPostArticleProps) {
  return (
    <article>
      <header className="relative overflow-hidden bg-hero-surface py-10 sm:py-12">
        <div
          className="pointer-events-none absolute -top-[120px] -right-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--color-teal-tint)_0%,rgba(227,247,250,0)_72%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1300px] px-6">
          <div className="max-w-[820px]">
            <p className="font-secondary mb-3 inline-flex items-center gap-2 text-[0.69rem] font-bold tracking-[0.14em] text-teal-dark uppercase">
              <span className="h-0.5 w-5 bg-teal" aria-hidden />
              {post.categoryLabel}
            </p>
            <h1 className="font-primary mb-4 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] font-extrabold tracking-tight text-charcoal">
              {post.title}
            </h1>
            <p className="font-secondary mb-5 text-[0.94rem] leading-relaxed text-slate">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 font-secondary text-[0.78rem] text-slate">
              <span className="font-bold text-charcoal">{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </div>
          </div>

          {post.imageUrl ? (
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_10px_32px_rgba(13,27,46,0.08)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt ?? post.title}
                  title={post.imageAlt ?? post.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                  sizes="(max-width: 1300px) 100vw, 1300px"
                />
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-[1300px] px-6 py-10 sm:py-12">
        <div
          className="blog-content mx-auto max-w-[820px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mx-auto mt-10 max-w-[820px] border-t border-mist pt-8">
          <Link
            href="/blog"
            className="font-primary inline-flex items-center gap-2 text-[0.88rem] font-bold text-teal-dark transition-colors hover:text-teal"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
