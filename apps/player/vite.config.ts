import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['antd'],
          utils: ['axios', 'zustand']
        }
      }
    },

    chunkSizeWarningLimit: 1000
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'antd']
  }
});
