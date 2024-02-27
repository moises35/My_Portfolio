import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      title: 'Moisés Alvarenga | My Portfolio',
      meta: [
        { name: 'title', content: 'Moisés Alvarenga | My Portfolio' },
        { charset: 'utf-8' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  vite: {
    plugins: [
      svgLoader({}),
    ],
  },
  runtimeConfig: {
    public: {
      BREVO_URL: process.env.BREVO_URL,
      BREVO_API_KEY: process.env.BREVO_API_KEY,
      BREVO_EMAIL_SENDER: process.env.BREVO_EMAIL_SENDER,
      BREVO_EMAIL_TO: process.env.BREVO_EMAIL_TO,
    },
  },
  css: [
    '@/assets/scss/global.scss',
    '@/assets/scss/variables.scss',
    '@/assets/scss/fonts.scss',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  i18n: {
    locales: [
      { code: 'es', file: 'es-ES.json' },
      { code: 'en', file: 'en-US.json' },
    ],
    compilation: {
      strictMessage: false,
    },
    defaultLocale: 'es',
    detectBrowserLanguage: false,
    lazy: false,
    langDir: 'languages/',
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  image: {
    domains: [ 'localhost:3000', 'livieresg.com.py', 'pageName.netlify.app' ],
    screens: {
      xs: 370,
      sm: 640,
      md: 768,
      lg: 900,
      xl: 1280,
      xxl: 1536,
    },
  },
  devtools: { enabled: true },
})
