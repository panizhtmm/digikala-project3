
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/digikala-project3/',

  plugins: [
    tailwindcss(),
  ],

  server: {
    proxy: {
      '/api': {
        target: 'https://api.digikala.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
