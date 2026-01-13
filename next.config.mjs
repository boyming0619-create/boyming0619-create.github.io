/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 必须加上，解决图片加载导致的 Client-side 错误
  },
};

export default nextConfig;
