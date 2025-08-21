// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true
  },
  modules: [
      '@nuxt/eslint',
      '@pinia/nuxt',
      '@nuxt/ui',
  ],
  css: [
      '~/assets/css/main.css',
      '~/assets/css/fonts.css'
  ],
  ui: {
    global: true,
  },
  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate',
    ],
  },
  imports: {
    dirs: ['stores'],
  },
})