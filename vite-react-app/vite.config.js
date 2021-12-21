import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlPlugin from 'vite-plugin-index-html'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPlugin({
      input: "./src/main.jsx", // 指定确定的入口文件
      preserveEntrySignatures: "exports-only", // 确保入口文件导出生命周期函数
    }),
  ],
  build: {
    lib: {
      entry: './src/main.jsx',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      preserveEntrySignatures: 'exports-only',
    },
  },
  publicPath:'https://www.seller.com/',
  server: {
    port: 9001, // 你需要定义的端口号
    open: true,
  },
});
