<template>
  <span class="badge">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-size: 11px;
  color: var(--color-white);
  background-color: #555;
  border-radius: 0.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.2rem);
  }
}
</style>
