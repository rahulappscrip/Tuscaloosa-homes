import https from "node:https";
import tls from "node:tls";
import type { BlogCategoryKey, BlogPost, BlogPostDetail } from "@/data/blog";
import { unstable_cache } from "next/cache";

export const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ??
  "https://wordpress-1628174-6525340.cloudwaysapps.com/graphql";

type WpPostNode = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: { node: { name: string } };
  categories: { nodes: { name: string; slug: string }[] };
  featuredImage: { node: { sourceUrl: string; altText: string } | null } | null;
};

type WpPostDetailNode = WpPostNode & {
  content: string;
  seo?: {
    title?: string | null;
    description?: string | null;
    focusKeywords?: string[] | null;
  } | null;
};

type WpPostBySlugResponse = {
  data?: {
    postBy?: WpPostDetailNode | null;
  };
  errors?: { message: string }[];
};

const POST_BY_SLUG_QUERY = `
  query GetBlogPost($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      date
      excerpt
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        description
        focusKeywords
      }
    }
  }
`;

type WpPostsResponse = {
  data?: {
    posts?: {
      pageInfo: { hasNextPage: boolean; endCursor: string | null };
      nodes: WpPostNode[];
    };
  };
  errors?: { message: string }[];
};

const POSTS_QUERY = `
  query GetBlogPosts($first: Int!, $after: String) {
    posts(
      first: $first
      after: $after
      where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        date
        excerpt
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

const WP_CATEGORY_MAP: Record<string, BlogCategoryKey> = {
  "home-selling": "fast",
  "property-management": "inherited",
  "fast-sale-guides": "fast",
  "as-is-vs-repairs": "repairs",
  "cash-offer-vetting": "cash",
  "inherited-rentals": "inherited",
  "market-insights": "market",
  "alabama-law": "law",
};

function getSystemCaCertificates(): readonly string[] {
  const tlsWithSystemCa = tls as typeof tls & {
    getCACertificates?: (type: "default" | "system") => string[];
  };

  if (typeof tlsWithSystemCa.getCACertificates === "function") {
    return [
      ...tlsWithSystemCa.getCACertificates("system"),
      ...tlsWithSystemCa.getCACertificates("default"),
    ];
  }

  return tls.rootCertificates;
}

async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const endpoint = new URL(WORDPRESS_GRAPHQL_URL);
  const body = JSON.stringify({ query, variables });

  return new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: endpoint.hostname,
        port: endpoint.port ? Number(endpoint.port) : 443,
        path: `${endpoint.pathname}${endpoint.search}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
        ca: [...getSystemCaCertificates()],
      },
      (response) => {
        let payload = "";

        response.on("data", (chunk) => {
          payload += chunk;
        });

        response.on("end", () => {
          if ((response.statusCode ?? 500) >= 400) {
            reject(
              new Error(
                `WordPress GraphQL request failed: ${response.statusCode}`,
              ),
            );
            return;
          }

          try {
            resolve(JSON.parse(payload) as T);
          } catch {
            reject(new Error("WordPress GraphQL returned invalid JSON"));
          }
        });
      },
    );

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function mapWpCategory(slugs: string[]): BlogCategoryKey {
  for (const slug of slugs) {
    if (slug === "uncategorized") continue;
    const mapped = WP_CATEGORY_MAP[slug];
    if (mapped) return mapped;
  }
  return "fast";
}

function mapWpPost(node: WpPostNode): BlogPost {
  const categorySlugs = node.categories.nodes.map((c) => c.slug);
  const primaryCategory = node.categories.nodes.find(
    (c) => c.slug !== "uncategorized",
  );

  return {
    slug: node.slug,
    title: node.title,
    excerpt: stripHtml(node.excerpt),
    date: node.date,
    author: node.author.node.name,
    categoryKey: mapWpCategory(categorySlugs),
    categoryLabel: primaryCategory?.name ?? "Seller Resources",
    imageUrl: node.featuredImage?.node?.sourceUrl,
    imageAlt: node.featuredImage?.node?.altText ?? node.title,
    source: "wordpress",
  };
}

function mapWpPostDetail(node: WpPostDetailNode): BlogPostDetail {
  const focusKeywords =
    node.seo?.focusKeywords?.filter((keyword) => keyword.trim().length > 0) ??
    [];

  return {
    ...mapWpPost(node),
    content: node.content,
    seoTitle: node.seo?.title ?? undefined,
    seoDescription: node.seo?.description ?? undefined,
    seoFocusKeywords: focusKeywords.length > 0 ? focusKeywords : undefined,
  };
}

async function fetchWordPressPostBySlugUncached(
  slug: string,
): Promise<BlogPostDetail | null> {
  const json = await graphqlRequest<WpPostBySlugResponse>(POST_BY_SLUG_QUERY, {
    slug,
  });

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  const node = json.data?.postBy;
  if (!node) {
    return null;
  }

  return mapWpPostDetail(node);
}

function getCachedWordPressPostBySlug(slug: string) {
  return unstable_cache(
    () => fetchWordPressPostBySlugUncached(slug),
    ["wordpress-post", slug],
    { revalidate: 300 },
  )();
}

/** Fetch a single published post by slug from WordPress. */
export async function fetchWordPressPostBySlug(
  slug: string,
): Promise<BlogPostDetail | null> {
  try {
    return await getCachedWordPressPostBySlug(slug);
  } catch (error) {
    console.error(`[wordpress] Failed to fetch blog post "${slug}":`, error);
    return null;
  }
}

async function fetchWordPressPostsPage(
  first: number,
  after?: string | null,
): Promise<{ posts: BlogPost[]; hasNextPage: boolean; endCursor: string | null }> {
  const json = await graphqlRequest<WpPostsResponse>(POSTS_QUERY, {
    first,
    after: after ?? null,
  });

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  const postsConnection = json.data?.posts;
  if (!postsConnection) {
    return { posts: [], hasNextPage: false, endCursor: null };
  }

  return {
    posts: postsConnection.nodes.map(mapWpPost),
    hasNextPage: postsConnection.pageInfo.hasNextPage,
    endCursor: postsConnection.pageInfo.endCursor,
  };
}

async function fetchWordPressPostsUncached(): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  let hasNextPage = true;
  let cursor: string | null = null;
  const pageSize = 50;

  while (hasNextPage) {
    const page = await fetchWordPressPostsPage(pageSize, cursor);
    allPosts.push(...page.posts);
    hasNextPage = page.hasNextPage;
    cursor = page.endCursor;

    if (!cursor) {
      break;
    }
  }

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

const getCachedWordPressPosts = unstable_cache(
  fetchWordPressPostsUncached,
  ["wordpress-posts"],
  { revalidate: 300 },
);

/** Fetch all published posts from the WordPress GraphQL endpoint. */
export async function fetchWordPressPosts(): Promise<BlogPost[]> {
  try {
    return await getCachedWordPressPosts();
  } catch (error) {
    console.error("[wordpress] Failed to fetch blog posts:", error);
    return [];
  }
}
