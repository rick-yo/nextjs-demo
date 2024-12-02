import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/_next/data/:id*',
        headers: [
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'max-age=3600',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'max-age=60',
          },
          {
            key: 'Cache-Control',
            value: 'max-age=10',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
