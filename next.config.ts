import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/ssg',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
