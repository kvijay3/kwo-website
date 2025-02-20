export default defineConfig({
  base: '/kwo-website/', // Adjust base URL to the subpath for GitHub Pages
  plugins: [react()],
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