/** @type {import('next').NextConfig} */
const nextConfig = {output: 'export',
                    images: {
                      unoptimized: true, // 必须加这一行，否则在 GitHub Pages 上图片会加载失败
  },
};

export default nextConfig;
