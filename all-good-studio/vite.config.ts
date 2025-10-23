import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ags/',  // 👈 this must match the repo name on GitHub
  server: {
    port: 3000,       // 👈 change this to your preferred port
    open: true        // optional: auto-open browser
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // base src folder
    },
  },
})
