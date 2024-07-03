<template>
  <main>
    <SectionHome class="layout-wrapper" />
    <div class="divisor" />
    <div id="experience" class="layout-wrapper">
      <SectionExperience />
    </div>
    <div id="projects" class="layout-wrapper">
      <SectionProjects />
    </div>
    <div id="about-me" class="layout-wrapper">
      <SectionAboutMe />
    </div>
    <div class="layout-wrapper">
      <SectionHabilities />
    </div>
    <div id="contacts" class="layout-wrapper">
      <SectionContacts />
    </div>
    <AtomBtnTop
      :class="{ active: visible }"
    />
  </main>
</template>

<script setup lang="ts">
import { seoData } from '@/assets/data/seoData'

const { locale } = useI18n()
const visible = ref(false)

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      visible.value = window.scrollY > 100
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', () => {
      visible.value = window.scrollY > 100
    })
  }
})

//  *** SEO ***
useHead(seoData['/'][locale.value])
</script>

<style lang="scss">
main {
  .divisor {
    height: 10vh;
    margin-bottom: 32px;
    background-color: var(--bg-secondary);
  }

  div.layout-wrapper {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 992px) {
    .divisor {
      height: 100px;
    }
  }
}
</style>
