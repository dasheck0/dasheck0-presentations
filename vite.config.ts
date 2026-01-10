import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  publicDir: false, // Disable since we're serving from subdirectories
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Will be populated dynamically
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@shared': resolve(__dirname, './src/shared'),
      '@themes': resolve(__dirname, './src/themes'),
      '@cli': resolve(__dirname, './src/cli'),
    },
  },
  server: {
    open: true,
    port: 3000,
    fs: {
      // Allow serving files from project root
      allow: [resolve(__dirname)],
    },
  },
});
