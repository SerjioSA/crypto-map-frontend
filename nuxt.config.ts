import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: [
    "~/assets/main.scss"
  ],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
  modules: [
    'nuxt-quasar-ui',
    'nuxt-svgo'
  ],
  quasar: { /* */ }
  // devtools: { enabled: true }
  
})
