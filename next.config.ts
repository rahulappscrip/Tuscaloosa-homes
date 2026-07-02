import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1628174-6525340.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tuscaloosa",
        destination: "/sell-my-house-fast-tuscaloosa",
        permanent: true,
      },
      {
        source: "/brookwood",
        destination: "/sell-my-house-fast-brookwood-al",
        permanent: true,
      },
      {
        source: "/northport",
        destination: "/we-buy-houses-northport-al",
        permanent: true,
      },
      {
        source: "/alberta-city",
        destination: "/sell-my-house-fast-alberta-city-tuscaloosa",
        permanent: true,
      },
      {
        source: "/university-of-alabama",
        destination: "/sell-house-near-university-of-alabama",
        permanent: true,
      },
      {
        source: "/cottondale",
        destination: "/we-buy-houses-cottondale-al",
        permanent: true,
      },
      {
        source: "/woodland-forrest",
        destination: "/sell-my-house-fast-woodland-forrest-tuscaloosa",
        permanent: true,
      },
      {
        source: "/vance",
        destination: "/sell-my-house-fast-vance-al",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
