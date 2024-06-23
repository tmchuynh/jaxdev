/** @type {import('next').NextConfig} */
const nextConfig = {
      output: 'export',
      images: {
            unoptimized: true,
      },
      reactStrictMode: true,
      basePath: '/jaxdev'
};

export default nextConfig;
