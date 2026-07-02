export type BlogCategoryKey =
  | "fast"
  | "repairs"
  | "cash"
  | "inherited"
  | "market"
  | "law";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  categoryKey: BlogCategoryKey;
  categoryLabel: string;
  emoji?: string;
  readTime?: string;
  imageUrl?: string;
  imageAlt?: string;
  featured?: boolean;
  source?: "wordpress" | "static";
};

export type BlogPostDetail = BlogPost & {
  content: string;
  seoTitle?: string;
  seoDescription?: string;
  seoFocusKeywords?: string[];
};

export const blogFilters = [
  { key: "all" as const, label: "All Articles" },
  { key: "fast" as const, label: "Fast Sale Guides" },
  { key: "repairs" as const, label: "As-Is vs Repairs" },
  { key: "cash" as const, label: "Cash Offer & Vetting" },
  { key: "inherited" as const, label: "Inherited & Rentals" },
  { key: "market" as const, label: "Market Insights" },
  { key: "law" as const, label: "Alabama Law" },
] as const;

export type BlogFilterKey = (typeof blogFilters)[number]["key"];

export const blogCategoryStyles: Record<
  BlogCategoryKey,
  { emoji: string; gradient: string; tagLabel: string }
> = {
  fast: {
    emoji: "⚡",
    gradient: "bg-gradient-to-br from-teal to-teal-dark",
    tagLabel: "Fast Sale Guides",
  },
  repairs: {
    emoji: "🔧",
    gradient: "bg-gradient-to-br from-slate to-navy",
    tagLabel: "As-Is vs Repairs",
  },
  cash: {
    emoji: "💵",
    gradient: "bg-gradient-to-br from-gold to-[#d99a00]",
    tagLabel: "Cash Offer & Vetting",
  },
  inherited: {
    emoji: "🏘️",
    gradient: "bg-gradient-to-br from-teal-dark to-[#0f6a78]",
    tagLabel: "Inherited & Rentals",
  },
  market: {
    emoji: "📊",
    gradient: "bg-gradient-to-br from-[#16273f] to-[#08111d]",
    tagLabel: "Market Insights",
  },
  law: {
    emoji: "⚖️",
    gradient: "bg-gradient-to-br from-slate to-[#4a5563]",
    tagLabel: "Alabama Law",
  },
};

/** Static posts from the blog index HTML — used when not yet in WordPress. */
export const blogStaticPosts: BlogPost[] = [
  {
    slug: "tuscaloosa-real-estate-market-trends-2026",
    title: "Tuscaloosa Real Estate Market Trends for Sellers in 2026",
    excerpt:
      "What demand, pricing, and days-on-market look like across Tuscaloosa this year, and what it actually means for your selling timeline if your home needs work.",
    date: "2026-06-29T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "market",
    categoryLabel: "Market Insights",
    emoji: "📊",
    readTime: "10 min read",
    featured: true,
    source: "static",
  },
  {
    slug: "how-to-sell-my-house-fast-in-tuscaloosa",
    title: "How to Sell My House Fast in Tuscaloosa",
    excerpt:
      "Clarify your timeline, compare cash offers against listing, and see the real steps to close fast without getting burned.",
    date: "2026-06-24T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "fast",
    categoryLabel: "Fast Sale Guides",
    emoji: "⚡",
    source: "static",
  },
  {
    slug: "selling-as-is-vs-making-repairs-tuscaloosa",
    title: "Pros & Cons: Selling As-Is vs. Making Repairs in Tuscaloosa",
    excerpt:
      "A plain-English breakdown of when selling as-is beats fixing up first, and when repairs are worth the time and cash.",
    date: "2026-06-22T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "repairs",
    categoryLabel: "As-Is vs Repairs",
    emoji: "🔧",
    source: "static",
  },
  {
    slug: "how-to-evaluate-a-cash-offer-in-tuscaloosa",
    title: "How to Evaluate a Cash Offer in Tuscaloosa",
    excerpt:
      "How local buyers calculate offers, which red flags to watch for, and when to get a second opinion.",
    date: "2026-06-20T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "cash",
    categoryLabel: "Cash Offer & Vetting",
    emoji: "💵",
    source: "static",
  },
  {
    slug: "inherited-a-house-in-tuscaloosa-what-now",
    title: "Inherited a House in Tuscaloosa? What Now?",
    excerpt:
      "Your first steps after inheriting a Tuscaloosa property — keep it, rent it, or sell it — plus the tax and attorney basics.",
    date: "2026-06-18T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "inherited",
    categoryLabel: "Inherited & Rentals",
    emoji: "🏘️",
    source: "static",
  },
  {
    slug: "how-to-vet-cash-home-buyers-in-tuscaloosa",
    title: "How to Vet Cash Home Buyers in Tuscaloosa",
    excerpt:
      'Not every "we buy houses" sign is legit. The exact checklist to confirm a buyer is trustworthy before you sign.',
    date: "2026-06-17T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "cash",
    categoryLabel: "Cash Offer & Vetting",
    emoji: "🛡️",
    source: "static",
  },
  {
    slug: "local-home-selling-tips-for-tuscaloosa-owners",
    title: "Local Home Selling Tips for Tuscaloosa Owners",
    excerpt:
      "Five practical tips covering timeline, pricing, repairs, and vetting buyers — the basics every local seller should know.",
    date: "2026-06-15T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "fast",
    categoryLabel: "Fast Sale Guides",
    emoji: "📋",
    source: "static",
  },
  {
    slug: "selling-a-rental-in-tuscaloosa",
    title: "What to Expect When Selling a Rental in Tuscaloosa",
    excerpt:
      "Tired landlords: how occupied-rental sales work, from lease review to working with tenants through closing.",
    date: "2026-06-12T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "inherited",
    categoryLabel: "Inherited & Rentals",
    emoji: "🔑",
    source: "static",
  },
  {
    slug: "avoiding-repairs-before-selling-tuscaloosa",
    title: "Avoiding Repairs Before Selling: Local Options",
    excerpt:
      "If the repair list feels endless, here are the real paths Tuscaloosa sellers use to skip fix-ups entirely.",
    date: "2026-06-10T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "repairs",
    categoryLabel: "As-Is vs Repairs",
    emoji: "🚧",
    source: "static",
  },
  {
    slug: "how-fast-can-i-really-close-in-tuscaloosa",
    title: "How Fast Can I Really Close in Tuscaloosa?",
    excerpt:
      "A realistic look at cash-sale timelines in Tuscaloosa, what can speed things up, and what can slow them down.",
    date: "2026-06-08T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "fast",
    categoryLabel: "Fast Sale Guides",
    emoji: "⏱️",
    source: "static",
  },
  {
    slug: "do-i-need-an-attorney-to-sell-my-house-in-alabama",
    title: "Do I Need an Attorney to Sell My House in Alabama?",
    excerpt:
      "When a real estate attorney is worth it in an Alabama home sale, and when a title company alone may be enough.",
    date: "2026-06-05T12:00:00",
    author: "Joe LeBlanc",
    categoryKey: "law",
    categoryLabel: "Alabama Law",
    emoji: "⚖️",
    source: "static",
  },
];

export function mergeBlogPosts(
  wordpressPosts: BlogPost[],
  staticPosts: BlogPost[] = blogStaticPosts,
): BlogPost[] {
  const wpSlugs = new Set(wordpressPosts.map((p) => p.slug));
  const merged = [
    ...wordpressPosts.map((p) => ({ ...p, source: "wordpress" as const })),
    ...staticPosts.filter((p) => !wpSlugs.has(p.slug)),
  ];

  return merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPost(posts: BlogPost[]): BlogPost | null {
  if (posts.length === 0) return null;

  return (
    posts.find((p) => p.featured) ??
    posts[0]
  );
}

export function formatBlogDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function buildBlogPageSchema(posts: BlogPost[]) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://webuytuscaloosahomes.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://webuytuscaloosahomes.com/blog",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "We Buy Tuscaloosa Homes Blog",
      url: "https://webuytuscaloosahomes.com/blog",
      description:
        "Local guides for Tuscaloosa homeowners thinking about selling — fast sales, as-is vs. repairs, cash offers, inherited property, and Tuscaloosa market insights.",
      publisher: {
        "@type": "LocalBusiness",
        name: "We Buy Tuscaloosa Homes",
        url: "https://webuytuscaloosahomes.com",
        telephone: "+18037847672",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1520 Stillwater Dr",
          addressLocality: "Tuscaloosa",
          addressRegion: "AL",
          postalCode: "35406",
          addressCountry: "US",
        },
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `https://webuytuscaloosahomes.com/blog/${post.slug}`,
        datePublished: post.date.split("T")[0],
        author: { "@type": "Person", name: post.author },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Joe LeBlanc",
      jobTitle: "Founder, Owner",
      description:
        "Local Tuscaloosa buyer; personally handles every transaction; known for honesty and transparency.",
      url: "https://webuytuscaloosahomes.com/about",
      worksFor: {
        "@type": "LocalBusiness",
        name: "We Buy Tuscaloosa Homes",
        url: "https://webuytuscaloosahomes.com",
      },
    },
  ];
}

export function buildBlogPostSchema(post: BlogPostDetail) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://webuytuscaloosahomes.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://webuytuscaloosahomes.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://webuytuscaloosahomes.com/blog/${post.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription ?? post.excerpt,
      url: `https://webuytuscaloosahomes.com/blog/${post.slug}`,
      datePublished: post.date.split("T")[0],
      author: { "@type": "Person", name: post.author },
      image: post.imageUrl,
      publisher: {
        "@type": "LocalBusiness",
        name: "We Buy Tuscaloosa Homes",
        url: "https://webuytuscaloosahomes.com",
      },
    },
  ];
}
