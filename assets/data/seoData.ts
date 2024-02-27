/* eslint-disable max-len */

const titlePrefix = 'Moisés Alvarenga | Portfolio'
const urlPrefix = 'https://abc.com'
const topicPrefix = 'Moisés Alvarenga, Desarrollador Web FullStack, Desarrollador Mobile, Ingeniero en Informática, Paraguay'

const defaultMeta = [
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://www.abc.com.py/' },
  { property: 'og:image', content: 'https://abc.com/img/og-image.png' },
  { name: 'author', content: 'Moisés Alvarenga' },
  { name: 'copyright', content: 'Moisés Alvarenga' },
]

export function enrichHead (data) {
  const result = { meta: [ ...defaultMeta ] }

  const title = data.title ? `${titlePrefix} | ${data.title}` : titlePrefix

  result.title = title
  result.meta.push({ property: 'og:title', content: data.metaTitle || title })

  result.meta.push({ hid: 'description', name: 'description', content: data.description })
  result.meta.push({ property: 'og:description', content: data.description })

  result.meta.push({ property: 'og:url', content: urlPrefix + data.url })

  result.meta.push({ name: 'page-topic', content: topicPrefix + (data.topic ? `, ${data.topic}` : '') })

  return result
}

export const seoData: Record<string, any> = {
  '/': {
    es: enrichHead({
      url: '/',
      description: '¡Hola! Mi nombre es Moisés Alvarenga y soy de Paraguay. Con 4+ años de experiencia como Desarrollador Web FullStack y Desarrollador Mobile. Les presento mi portfolio en donde resumo mi experiencia.',
    }),
    en: enrichHead({
      url: '/',
      description: 'Hello! My name is Moisés Alvarenga and I am from Paraguay. With 4+ years of experience as a FullStack Web Developer and Mobile Developer. I present to you my portfolio where I summarize my experience.',
    }),
  },
}
