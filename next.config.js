/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 啟用靜態輸出
    basePath: '/helenhua-toolbox', // GitHub Pages 的基礎路徑
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig
  