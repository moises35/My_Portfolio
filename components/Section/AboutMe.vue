<template>
  <section class="about-me">
    <AtomTitle :title="$t(`${T}.title`)" />
    <p class="description">
      {{ $t(`${T}.description`) }}
    </p>
    <p class="description">
      <span class="drop-cap">4+</span>
      {{ $t(`${T}.description2`) }}
    </p>
    <p class="description" v-html="$t(`${T}.description3`)" />
  </section>
</template>

<script setup lang="ts">
const T = 'aboutMe'

</script>

<style lang="scss">
section.about-me {
  .description {
    margin-bottom: 20px;

    a {
      color: var(--primary-color);
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .drop-cap {
    float: left;
    margin-right: .6rem;
    font-size: 5.2em;
    font-weight: 600;
    line-height: 1;
    color: var(--primary-color);
  }
}
</style>
