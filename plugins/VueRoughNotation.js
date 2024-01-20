import VueRoughNotation from 'vue-rough-notation'

const options = {
  animate: true,
  animationDuration: 2000,
  color: '#00ADB5',
  padding: 0,

  strokeWidth: 1,
  iterations: 3,
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueRoughNotation, options)
})
