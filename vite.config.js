import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Añadido para limpiar el directorio de salida antes de construir
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/App.jsx') // Especifica la ruta absoluta del archivo principal
      }
    },
    chunkSizeWarningLimit: 1500 // Ajuste opcional para el límite de advertencia de tamaño de fragmento
  }
});
