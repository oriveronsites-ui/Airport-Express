import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: false,
  images: {
    qualities: [75, 86, 92],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/sitepages/topic/1", destination: "/about", permanent: true },
      { source: "/sitepages/topic/3", destination: "/policies", permanent: true },
      { source: "/sitepages/topic/7", destination: "/faq", permanent: true },
      { source: "/sitepages/topic/8", destination: "/pickup-information", permanent: true },
      {
        source: "/sitepages/topic/26",
        destination: "/services/groups-and-charters",
        permanent: true,
      },
      { source: "/sitepages/topic/27", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
