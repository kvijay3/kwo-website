import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin

export default defineConfig({
  base: '/kwo-website/', // Adjust base URL for GitHub Pages
  plugins: [react()],  // Use the react plugin
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
  define: {
    'process.env': {},
    global: 'window',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'esnext',
  },
  server: {
    port: 3000,
  }
})