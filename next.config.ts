/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 静态导出配置
  distDir: 'out'
}

module.exports = nextConfig