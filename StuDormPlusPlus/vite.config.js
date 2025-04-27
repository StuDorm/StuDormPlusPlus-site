import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Разрешает доступ к серверу с любого IP-адреса
    port: 3000,        // Устанавливает порт для сервера
    strictPort: true,  // Если порт занят, Vite завершит запуск
  }
})
