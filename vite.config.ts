import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Base path for GitHub Pages project sites (https://<user>.github.io/<repo>/).
 *
 * Defaults to this repository's name. Forks (or a renamed repo) can override it
 * without touching code:
 *
 *   BASE_PATH=/my-repo/ npm run build
 *
 * The GitHub Actions workflow in .github/workflows/deploy.yml sets BASE_PATH
 * automatically from the repository name, so CI deploys always work.
 */
const base = process.env.BASE_PATH ?? '/Raafat-Nagy/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    // Dev-server only: accept proxied preview hosts (e.g. sandboxed previews).
    allowedHosts: ['.e2b.app'],
  },
  build: {
    rollupOptions: {
      // Static multi-page build (no router needed):
      //   index.html           -> /            (homepage)
      //   projects/index.html  -> /projects/   (all-projects page)
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects/index.html', import.meta.url)),
      },
    },
  },
});
