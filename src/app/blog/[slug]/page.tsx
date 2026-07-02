import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { BlogPostArticle } from "@/components/blog/BlogPostArticle";
import { FinalCTA } from "@/components/FinalCTA";
import { buildBlogPostSchema } from "@/data/blog";
import {
  fetchWordPressPostBySlug,
  fetchWordPressPosts,
} from "@/lib/wordpress";

const PHONE = "(803) 784-7672";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await fetchWordPressPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchWordPressPostBySlug(slug);

  if (!post) {
    return {};
  }

  const metaTitle = post.seoTitle ?? post.title;
  const metaDescription = post.seoDescription ?? post.excerpt;
  const ogImage = post.imageUrl
    ? [
        {
          url: post.imageUrl,
          alt: post.imageAlt ?? post.title,
        },
      ]
    : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seoFocusKeywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `/blog/${slug}`,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchWordPressPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const schema = buildBlogPostSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogBreadcrumb title={post.title} />
      <BlogPostArticle post={post} />
      <FinalCTA
        eyebrow="We Buy Tuscaloosa Homes"
        heading={
          <>
            Ready to see how our{" "}
            <span className="text-teal">Tuscaloosa cash offer</span> would work
            for you?
          </>
        }
        description="Fill out the short form or call Joe directly. You'll have a written offer with a full breakdown within 24 hours — and you're not obligated to accept."
        checklist={[
          "No repairs or cleaning before you sell",
          "No agent commissions or fees",
          "No obligation to accept the offer",
          "Close in 7 days or on your timeline",
        ]}
        subtext=""
        primaryCtaLabel="Get My Free Cash Offer"
        secondaryCtaLabel={`Call Joe — ${PHONE}`}
        consentText="By submitting you agree to receive SMS, calls, and emails about your property inquiry from We Buy Tuscaloosa Homes. Reply STOP to opt out. Your info is never sold."
      />
    </>
  );
}
