import { defineConfig } from 'astro/config'

export default defineConfig({
  // Fully static output — no server required
  output: 'static',
  // Match existing URL structure (all pages have trailing slash)
  trailingSlash: 'always',
})
