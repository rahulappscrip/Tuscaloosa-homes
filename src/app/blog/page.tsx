import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { FinalCTA } from "@/components/FinalCTA";
import { buildBlogPageSchema } from "@/data/blog";
import { fetchWordPressPosts } from "@/lib/wordpress";

const PHONE = "(803) 784-7672";

export const metadata: Metadata = {
  title: "Blog | Tuscaloosa Home Selling Guides | We Buy Tuscaloosa Homes",
  description:
    "Guides on selling a house in Tuscaloosa fast, as-is, or for cash — market insights, inherited property help, and buyer vetting checklists from Joe LeBlanc.",
  keywords: [
    "tuscaloosa home selling blog",
    "sell house fast tuscaloosa",
    "tuscaloosa home selling guides",
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await fetchWordPressPosts();
  const schema = buildBlogPageSchema(posts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-[1300px] px-6 py-14 text-center text-slate">
            Loading articles…
          </div>
        }
      >
        <BlogIndexClient posts={posts} />
      </Suspense>
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
