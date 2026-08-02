import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Casino_Codex.github.io/",
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
