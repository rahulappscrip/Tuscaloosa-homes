export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "We Buy Tuscaloosa Homes",
        url: "https://webuytuscaloosahomes.com/",
        logo: "https://webuytuscaloosahomes.com/wp-content/uploads/logo.png",
        telephone: "(803) 784-7672",
        email: "joe@webuytuscaloosahomes.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1520 Stillwater Dr",
          addressLocality: "Tuscaloosa",
          addressRegion: "AL",
          postalCode: "35406",
        },
        areaServed: "Tuscaloosa, Alabama and West Alabama",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "103",
        },
        sameAs: ["https://maps.app.goo.gl/NkdfHYX1ww7PasLR9"],
      },
      {
        "@type": "Person",
        name: "Joe LeBlanc",
        jobTitle: "Founder, Owner, and CEO",
        description:
          "Joe LeBlanc is the Founder, Owner, and CEO of We Buy Tuscaloosa Homes. A University of South Carolina graduate with over a decade of business experience, Joe personally handles every transaction and is known for honest, pressure-free guidance.",
        url: "https://webuytuscaloosahomes.com/about/",
        telephone: "(803) 784-7672",
        worksFor: {
          "@type": "Organization",
          name: "We Buy Tuscaloosa Homes",
        },
        alumniOf: "University of South Carolina",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://webuytuscaloosahomes.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About We Buy Tuscaloosa Homes",
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
