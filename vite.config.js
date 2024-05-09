import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Especifica el puerto en el que deseas que se ejecute tu aplicación
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Si `App.js` está dentro de `src`
    }
  },
  build: {
    outDir: '../public', // Especifica el directorio de salida
    rollupOptions: {
      input: {
        main: './src/App.jsx' // Especifica la ruta de tu archivo principal aquí
      }
    },
  }
});
