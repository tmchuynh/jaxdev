import bundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
      output: 'export',
      images: {
            unoptimized: true,
      },
      reactStrictMode: true,
      basePath: '/jaxdev',
};

export default bundleAnalyzer(nextConfig);