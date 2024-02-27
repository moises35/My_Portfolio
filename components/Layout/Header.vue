<template>
  <header class="header">
    <div class="container layout-wrapper">
      <div class="logo">
        <NuxtLink to="/" aria-label="Logo - Moisés Alvarenga">
          <SVGLogoLight v-if="colorActual === 'light'" />
          <SVGLogo v-else />
        </NuxtLink>
      </div>
      <LayoutNav />
      <div class="switchers">
        <AtomSwitcherColorMode />
        <AtomSwitcherLanguage />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import SVGLogo from '@/assets/svg/logo.svg'
import SVGLogoLight from '@/assets/svg/logo-light.svg'

const colorMode = useColorMode()
const colorActual = ref('')

const updateLogo = (newColorMode: string) => {
  colorActual.value = newColorMode
}

watch(colorMode, (newColorMode) => {
  updateLogo(newColorMode.preference)
})

onMounted(() => {
  colorActual.value = colorMode.preference
})
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: var(--bg-secondary);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    .logo {
      display: contents;

      a {
        display: contents;
      }

      svg {
        scale: 0.8;
      }
    }

    .switchers {
      display: flex;
      gap: 16px;
    }

    @media screen and (min-width: 992px) {
      height: 100px;

      .logo {
        svg {
          scale: 1;
        }
      }
    }
  }
}
</style>
