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
:root {
  --bg-color: #091a28;
  --text-color: #ebf4f1;
}

.light-mode {
  --bg-color: #fff;
  --text-color: rgb(0 0 0 / 80%);
}

.div {
  .jo {
    color: red;
  }
}

body {
  // color: #ebf4f1;
  // background-color: #091a28;
  color: var(--text-color);
  background-color: var(--bg-color);
}

// .light-mode body {
//   color: rgb(0 0 0 / 80%);
//   background-color: #fff;
// }
</style>
