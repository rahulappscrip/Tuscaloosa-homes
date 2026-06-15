const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "We Buy Tuscaloosa Homes",
  url: "https://webuytuscaloosahomes.com",
  logo: "https://webuytuscaloosahomes.com/logo.png",
  image: "https://webuytuscaloosahomes.com/joe-homebuyer.jpg",
  description:
    "We Buy Tuscaloosa Homes helps homeowners sell houses fast for cash in Tuscaloosa, Alabama with no repairs, commissions, or closing costs.",
  telephone: "+1-803-784-7672",
  email: "info@webuytuscaloosahomes.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tuscaloosa",
    addressRegion: "AL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Tuscaloosa" },
    { "@type": "City", name: "Northport" },
    { "@type": "City", name: "Cottondale" },
    { "@type": "City", name: "Brookwood" },
    { "@type": "City", name: "Coaling" },
  ],
  founder: {
    "@type": "Person",
    name: "Joe LeBlanc",
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "103",
  },
  serviceType: [
    "Cash Home Buyer",
    "Sell House Fast",
    "We Buy Houses",
    "As-Is Home Sales",
    "Real Estate Investment",
  ],
};

export function BusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}
