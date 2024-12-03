import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'authMicroFrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/AuthApp.jsx', // Ensure the path to `AuthApp.jsx` is correct
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
