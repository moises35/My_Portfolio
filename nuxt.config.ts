import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
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
  },
  devtools: { enabled: true },
})
