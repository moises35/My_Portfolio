<template>
  <NuxtLink
    v-if="!isExternal"
    :to="to"
    :class="[
      'btn',
      { 'inverse': iconPosition === 'right' },
      { 'secondary': color === 'secondary' },
    ]"
  >
    <template v-if="icon">
      <component :is="icon" class="icon" />
    </template>
    {{ text }}
  </NuxtLink>
  <a
    v-else
    :href="to"
    target="_blank"
    :class="[
      'btn',
      { 'inverse': iconPosition === 'right' },
      { 'secondary': color === 'secondary' },
    ]"
  >
    <template v-if="icon">
      <component :is="icon" class="icon" />
    </template>
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  isExternal: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Object,
    required: false,
    default: () => null,
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
  color: {
    type: String,
    default: 'primary',
  },
})
</script>

<style lang="scss">
.btn {
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  font-size: 14px;
  font-weight: 500;
  color: var(--btn-text-primary-color);
  background-color: var(--primary-color);
  border-radius: 8px;
  transition: background-color .3s;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-color-hover);

  }

  &.inverse {
    flex-direction: row-reverse;
  }

  .icon {
    margin-top: 1px;
    scale: 1.2;
  }

  &.secondary {
    color: var(--btn-text-secondary-color);
    background-color: transparent;
    border: 1px solid var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
    }
  }
}
</style>
