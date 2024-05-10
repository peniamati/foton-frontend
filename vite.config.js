// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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
    outDir: 'dist', // Cambia el directorio de salida a "dist"
    rollupOptions: {
      input: {
        main: './main.jsx' // Ajusta la ruta de acuerdo a tu estructura
      }
    },
  }
});
