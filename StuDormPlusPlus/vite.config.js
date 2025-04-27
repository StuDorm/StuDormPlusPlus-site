import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['prod-team-12-ecl1h2gh.hack.prodcontest.ru'],
    host: '0.0.0.0',
    port: 80,
    strictPort: true,
  }
})
