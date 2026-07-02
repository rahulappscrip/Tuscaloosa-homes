export function HomeWorthPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "What Is My Home Worth in Tuscaloosa, AL?",
        description:
          "Wondering what your home is worth in Tuscaloosa, AL? See real 2026 market data and get a fast, no-obligation cash offer from a local buyer — no repairs, no fees.",
        url: "https://www.webuytuscaloosahomes.com/how-much-is-my-house-worth-tuscaloosa-al",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.webuytuscaloosahomes.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "What Is My Home Worth in Tuscaloosa?",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
