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

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image', 'nuxt-gtag'],
   plugins: [
    '~/plugins/disable-right-click.client.ts'
  ],
  
  gtag: {
  tags: [
    { 
      id: 'G-6PB5CEND33',
      config: { send_page_view: false }
    },
    { 
      id: 'AW-17675835660'
    }
  ]
},

  colorMode: {
    preference: 'light',
  },

  ui:{
    colorMode:false
  },

  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },
  
  i18n: {
    strategy: 'prefix_except_default', // URL /id/... /en/... 
    langDir: 'locales',
    locales: [
       { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'id',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'id',
    },
  },
  
})