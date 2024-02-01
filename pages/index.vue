<template>
  <main>
    <SectionHome class="layout-wrapper" />
    <div class="divisor" />
    <div id="about-me" class="layout-wrapper">
      <SectionAboutMe />
    </div>
    <div class="layout-wrapper">
      <SectionHabilities />
    </div>
    <div id="experience" class="layout-wrapper">
      <SectionExperience />
    </div>
    <div id="projects" class="layout-wrapper">
      <SectionProjects />
    </div>
    <div id="contacts" class="layout-wrapper">
      <h1>Contactos nomass</h1>
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
    margin-bottom: 64px;
  }

  @media screen and (min-width: 992px) {
    .divisor {
      height: 100px;
    }
  }
}
</style>
