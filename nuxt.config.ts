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
  ],
  i18n: {
    locales: [
      { code: 'es', file: 'es-ES.json' },
      { code: 'en', file: 'en-US.json' },
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'languages/',
  },
  devtools: { enabled: true },
})
