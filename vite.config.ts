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
      '@akd-studios/framework-persistence-rest': rpath('./submodules/framework-persistence-rest/lib'),
      '@akd-studios/framework': rpath('./submodules/framework/lib'),
      '@classroom/core':        rpath('./submodules/core/lib'),
      '@classroom':             rpath('./src'),
    }
  }
})
