// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Especifica el puerto en el que deseas que se ejecute tu aplicación
  },
  assetsDir: '.', // Directorio de activos (incluye index.html)
  build: {
    outDir: 'dist', // Cambia el directorio de salida a "dist"
    rollupOptions: {
      input: {
        main: './src/main.jsx' // Ruta del archivo principal en la raíz del proyecto
      }
    },
  }
});
