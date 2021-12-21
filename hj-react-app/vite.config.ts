import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import htmlPlugin from 'vite-plugin-index-html'
import { envConfig } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0065FE' },
        // additionalData: `@import '@/assets/styles/variables.less';`,
      },
    },
  },
  plugins: [
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`
          },
        },
      ],
    }),
    // reactRefresh(),
    htmlPlugin({
      input: './src/main.tsx', // 指定确定的入口文件
      preserveEntrySignatures: 'exports-only', // 确保入口文件导出生命周期函数
    }),
  ],
  server: {
    port: 9002, // 你需要定义的端口号
    open: true,
    https: false,
    proxy: {
      [`/graphql`]: {
        target: envConfig.dev.apiHost,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: './src/main.tsx',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      preserveEntrySignatures: 'exports-only',
    },
  },

  // base: '/', // 设置公共基础路径，如果构建时有这个必要的话
})
