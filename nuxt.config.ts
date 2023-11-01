
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
  css: [
    '@/assets/scss/global.scss',
    '@/assets/scss/variables.scss',
    '@/assets/scss/fonts.scss',
  ],
  devtools: { enabled: true }
})