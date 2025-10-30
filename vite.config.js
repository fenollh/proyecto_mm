import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/proyecto_mm/', // 👈 CAMBIA ESTO
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', // El SW se actualiza automáticamente
      includeAssets: ['aicon.png'],
      manifest: {
        name: 'Motomami',
        short_name: 'Motomami',
        description: 'Mi aplicación Vue convertida en PWA',
        theme_color: '#af150b',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'aicon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'aicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,mp3}'], // cachea todos los archivos importantes
        navigateFallback: '/', // SPA
        runtimeCaching: [
          {
            urlPattern: ({ request }) => true, // cachea TODO lo que se pida
            handler: 'CacheFirst',
            options: {
              cacheName: 'runtime-cache',
              expiration: { maxEntries: 200 },
            },
          },
        ],
      }
    }),
  ],
})