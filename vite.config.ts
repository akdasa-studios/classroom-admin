import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { SFCFluentPlugin } from 'unplugin-fluent-vue/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    SFCFluentPlugin({
      blockType: 'fluent',
      checkSyntax: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./submodules/core', import.meta.url))
    }
  }
})
