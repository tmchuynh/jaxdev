/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: process.env.ANALYZE === 'true',
});
const nextConfig = {
      output: 'export',
      images: {
            unoptimized: true,
      },
      reactStrictMode: true,
      basePath: '/jaxdev'
};

export default withBundleAnalyzer(nextConfig);
