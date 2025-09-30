import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          helmet: ['react-helmet-async']
        }
      }
    }
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
});