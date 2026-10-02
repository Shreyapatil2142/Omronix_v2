import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// This prototype is shipped as a standalone static app served by the marketing
// site at /demos/ai-pptip/. `base` makes the emitted asset URLs match that
// path, and the build writes straight into the marketing site's public/ dir.
export default defineConfig({
  base: '/demos/ai-pptip/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    // This app uses Tailwind v4 via the Vite plugin, so it needs no PostCSS
    // config. Declaring an inline (empty) one stops PostCSS walking up to the
    // marketing site's Tailwind v3 postcss.config.js in the parent directory.
    postcss: { plugins: [] },
  },
  build: {
    outDir: fileURLToPath(new URL('../public/demos/ai-pptip', import.meta.url)),
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
});
