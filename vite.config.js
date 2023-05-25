 import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config
export default defineConfig({
 plugins: [vue(),viteMockServe()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy:{
      '/api': {
        target: 'http://192.168.60.87:8085',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),

      },
    }
  }
})

