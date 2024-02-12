/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/my-fullstack-portfolio' : '',
    assetPrefix: isProd ? '/my-fullstack-portfolio' : '',
};

export default nextConfig;
