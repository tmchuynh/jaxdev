// next.config.mjs

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

export default bundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
      bundleAnalyzer: {
            analyzerMode: 'static',
            reportFilename: 'analyze/report.html',
            openAnalyzer: false,
      },
})(nextConfig);
