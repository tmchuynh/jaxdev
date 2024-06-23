/** @type {import('next').NextConfig} */
import { bundleAnalyzer } from '@next/bundle-analyzer';
import path from 'path';

const nextConfig = {
      output: 'export',
      images: {
            unoptimized: true,
      },
      reactStrictMode: true,
      basePath: '/jaxdev'
};

export default withBundleAnalyzer(nextConfig);
