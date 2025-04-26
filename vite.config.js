import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader' // 👈 Correct one

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools(),
    svgLoader(), // 👈 Correctly added
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
