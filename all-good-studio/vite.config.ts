import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/ags/',  // Must match GitHub repo name
  server: {
    port: 3000,    // Optional
    open: true     // Optional
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // For cleaner imports
    },
  },
})
