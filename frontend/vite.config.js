import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps for build
  },
  css: {
    devSourcemap: false, // Disable CSS source maps
  },
  server: {
    sourcemap: false, // Disable source maps for dev server
  }
})