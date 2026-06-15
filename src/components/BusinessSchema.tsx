const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "We Buy Tuscaloosa Homes",
  url: "https://www.webuytuscaloosahomes.com",
  telephone: "+18037847672",
  description:
    "We Buy Tuscaloosa Homes operates under High Noon Home Buyers and buys residential properties for cash, as-is, with no agent commissions. The company serves Tuscaloosa, AL and surrounding West Alabama markets.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1301 McFarland Blvd N, Suite 200",
    addressLocality: "Tuscaloosa",
    addressRegion: "AL",
    postalCode: "35406",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.2098,
    longitude: -87.5692,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  sameAs: [
    "https://www.linkedin.com/company/high-noon-home-buyers",
    "https://www.instagram.com/highnoonhomebuyers/",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joe LeBlanc",
  jobTitle: "Owner, We Buy Tuscaloosa Homes",
  description:
    "Joe LeBlanc is the Founder and CEO of High Noon Home Buyers and We Buy Tuscaloosa Homes. A graduate of the University of South Carolina, Joe has over a decade of high-level business and customer service experience.",
  url: "https://www.webuytuscaloosahomes.com/about",
  worksFor: {
    "@type": "Organization",
    name: "We Buy Tuscaloosa Homes",
  },
};

export function BusinessSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
