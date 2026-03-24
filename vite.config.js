import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Force dev mode when running `vite dev`, regardless of NODE_ENV
  define: command === 'serve' ? {
    'process.env.NODE_ENV': JSON.stringify('development'),
  } : undefined,
  server: {
    allowedHosts: ['macbook', 'localhost', '127.0.0.1'],
    host: true,
    port: 5174,
  },
}))
