import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { SFCFluentPlugin } from 'unplugin-fluent-vue/vite'
import vue from '@vitejs/plugin-vue'

function rpath(path: string) {
  return fileURLToPath(new URL(path, import.meta.url))
}

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
      '@akd-studios/framework': rpath('./submodules/framework/lib'),
      '@classroom/core':        rpath('./submodules/core'),
      '@classroom':             rpath('./src'),
    }
  }
})
