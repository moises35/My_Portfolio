<template>
  <main>
    <SectionHome class="layout-wrapper" />
    <div class="divisor" />
    <div class="layout-wrapper">
      <SectionAboutMe />
    </div>
    <div class="layout-wrapper">
      <SectionExperience />
    </div>
    <div class="layout-wrapper">
      <SectionHabilities />
      <SectionProjects />
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
main {
  .divisor {
    height: 10vh;
    margin-bottom: 32px;
    background-color: var(--bg-secondary);
  }

  div.layout-wrapper {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 992px) {
    .divisor {
      height: 20vh;
    }
  }
}
</style>
