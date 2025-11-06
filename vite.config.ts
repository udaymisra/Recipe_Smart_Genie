import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Leftover Smart Recipe Genie',
        short_name: 'Recipe Genie',
        description: 'Turn your leftovers into delightful meals!',
        theme_color: '#ffffff',
        background_color: '#fef3c7',
        display: 'standalone',
        scope: '/Recipe_Smart_Genie/',
        start_url: '/Recipe_Smart_Genie/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  base: '/Recipe_Smart_Genie/',
});
