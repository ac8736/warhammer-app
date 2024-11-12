import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@components": "/src/components",
      "@features": "/src/features",
      "@assets": "/src/assets",
      "@custom-types": "/src/types",
      "@enums": "/src/enums",
    },
  },
})
