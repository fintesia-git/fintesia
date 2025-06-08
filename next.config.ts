import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fintesia.com',
          },
        ],
        destination: 'https://www.fintesia.com/:path*',
        permanent: true,
      },
    ];
  },
  distDir: '.next',
};

export default nextConfig;
