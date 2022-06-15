import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // src目录
      '@components': resolve(__dirname, 'src/components'), // components目录
      '@pages': resolve(__dirname, 'src/pages'), // pages目录
      '@utils': resolve(__dirname, 'src/utils'), // utils目录
      '@static': resolve(__dirname, 'src/static'), // static目录
      '@services': resolve(__dirname, 'src/services'), // services目录
      '@stores': resolve(__dirname, 'src/stores') // stores目录
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {  // 跨域代理
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
