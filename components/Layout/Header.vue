<template>
  <header class="header">
    <div class="container layout-wrapper">
      <div class="logo">
        <NuxtLink to="/">
          <SVGLogo v-if="colorMode.preference === 'dark'" />
          <SVGLogoLight v-else />
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
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: var(--bg-secondary);

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
