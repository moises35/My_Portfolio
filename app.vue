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
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>

<style lang="scss">
.div {
  .jo {
    color: red;
  }
}
</style>
