/* eslint-disable max-len */

const titlePrefix = 'Moisés Alvarenga'
const urlPrefix = 'https://estudioobliquo.com'
const topicPrefix = 'Moisés Alvarenga, Desarrollador Web FullStack, Desarrollador Mobile, Ingeniero en Informática, Paraguay'

const defaultMeta = [
  { property: 'og:type', content: 'website' },
  { property: 'og:image', content: 'https://delfinazelaschi.com/img/og-image.png' },
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
      description: 'En Estudio Obliquo diseñamos y desarrollamos páginas web y sistemas desde Asunción, Paraguay. Impulsado por el desafío creativo, nuestro estudio ofrece soluciones digitales diseñadas a medida.',
    }),
    en: enrichHead({
      url: '/',
      description: 'At Estudio Obliquo we design and develop web pages and systems from Asunción, Paraguay. Driven by the creative challenge, our studio offers custom-designed digital solutions.',
    }),
  },
}
