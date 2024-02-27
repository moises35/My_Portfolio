<template>
  <span class="badge-skill">
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
.badge-skill {
  display: inline-block;
  padding: 6px 12px;
  font-size: 11px;
  color: var(--badge-text-color);
  background-color: var(--bg-badge);
  border-radius: 0.5rem;
  transition: all 0.3s;

  @media screen and (min-width: 992px) {
    &:hover {
      transform: translateY(-0.2rem);
    }
  }
}
</style>
