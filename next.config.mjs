/** @type {import('next').NextConfig} */
import path from 'path';


const nextConfig = {
      output: 'export',
      images: {
            unoptimized: true,
      },
      reactStrictMode: true
};

const basePath = path.join(__dirname, '/jaxdex');

export { basePath, nextConfig as default };
