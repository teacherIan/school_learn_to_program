import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        stepOne: resolve(__dirname, 'steps/stepOne.html'),
        webDevelopment: resolve(__dirname, 'installDemos/webDevelopment.html'),
        // installVisual: resolve(__dirname, 'installDemos/installVisual.html'),
      },
    },
  },
});
