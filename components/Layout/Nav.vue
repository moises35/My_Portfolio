<template>
  <nav class="only-desktop nav-bar">
    <ul>
      <li>
        <NuxtLink to="/">
          {{ $t(`${T}.home`) }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#about-me">
          {{ $t(`${T}.aboutMe`) }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#proyectos">
          {{ $t(`${T}.projects`) }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#contacto">
          {{ $t(`${T}.contact`) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const T = 'menu'
</script>

<style lang="scss">
.nav-bar {
  @media screen and (min-width: 992px) {
    ul {
      display: flex;
      gap: 52px;

      li {
        font-size: 18px;
        font-weight: 500;

        a {
          background-image: linear-gradient(var(--primary-color), var(--primary-color));
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: 0% 2px;
          transition: background-size .3s;

          &:hover {
            color: var(--primary-color);
            cursor: pointer;
            background-size: 100% 2px;
          }
        }
      }
    }
  }
}
</style>
