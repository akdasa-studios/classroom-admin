import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { SFCFluentPlugin } from 'unplugin-fluent-vue/vite'
import { defineConfig } from 'vite'

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
      '@classroom/protocol':    rpath('./submodules/protocol/lib'),
      '@classroom':             rpath('./src'),
    }
  }
})
