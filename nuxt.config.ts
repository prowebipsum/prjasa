import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      wpApi: process.env.WP_API
    }
  },

  nitro: {
    routeRules: {
      proxyTimeout: 30000
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/animation.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
  plugins: [
    { src: '~/plugins/splide.client.ts', mode: 'client' },
  ],

  i18n: {
    strategy: 'prefix_except_default', // URL /id/... /en/... 
    locales: [
       { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ],
    defaultLocale: 'id',
  },
 
})