import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/proyecto_mm/', // 👈 CAMBIA ESTO
  plugins: [
    vue()
  ],
})