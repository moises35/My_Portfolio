<template>
  <div class="div">
    <form>
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="es">
          es
        </option>
      </select>
      <p>{{ $t('greeting') }}</p>
    </form>

    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()

const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style lang="scss">
.div {
  .jo {
    color: red;
  }
}

body {
  color: rgb(0 0 0 / 80%);
  background-color: #fff;
}

.dark-mode body {
  color: #ebf4f1;
  background-color: #091a28;
}
</style>
