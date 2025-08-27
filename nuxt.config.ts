import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/animation.css'
  ],

  vite:{
   plugins: [
     tailwindcss(),
   ]
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  plugins: [
    { src: '~/plugins/splide.client.ts', mode: 'client' },
  ],

 


})