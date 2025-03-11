import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Specifica la directory di output
  outDir: './dist',
  // Directory pubblica per le risorse statiche
  publicDir: './public',
  // Directory radice del progetto
  root: '.',
  // Directory per i file sorgente
  srcDir: './src',
  // Integrazione con Tailwind
  integrations: [
    tailwind({
      // Utilizziamo il file di configurazione esistente
      config: { path: './tailwind.config.js' },
    }),
  ],
  // Configura Vite in Astro
  vite: {
    // Le tue configurazioni Vite esistenti possono essere mantenute qui
  }
});
