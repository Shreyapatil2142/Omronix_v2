import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In dev, Vite's SPA fallback answers any directory URL with the marketing
// site's index.html — including /demos/<name>/, which should serve the static
// prototype sitting in public/. Rewriting those requests to the prototype's
// own index.html before the fallback runs makes dev match production.
const serveStaticDemos = () => ({
  name: 'serve-static-demos',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = req.url?.split('?')[0]
      if (path && /^\/demos\/[^/]+\/$/.test(path)) {
        req.url = `${path}index.html`
      }
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveStaticDemos()],
})
