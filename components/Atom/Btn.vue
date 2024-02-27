<template>
  <NuxtLink
    v-if="!isExternal"
    :to="to"
    :class="[
      'btn',
      { 'inverse': iconPosition === 'right' },
      { 'little': size === 'sm'},
      { 'secondary': color === 'secondary' },
      { 'bubble-animation': animation === 'bubble' },
    ]"
  >
    <template v-if="icon">
      <component :is="icon.icon" class="icon" />
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
      { 'little': size === 'sm'},
      { 'bubble-animation': animation === 'bubble' },
    ]"
  >
    <template v-if="icon">
      <component :is="icon.icon" class="icon" />
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
  size: {
    type: String,
    default: 'md',
  },
  animation: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss">
.btn {
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  font-size: var(--btn-text);
  font-weight: 500;
  color: var(--btn-text-primary-color);
  background-color: var(--btn-primary-color);
  border-radius: 8px;
  transition: background-color 0.3s;

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
    border: 1px solid var(--btn-text-secondary-color);
  }

  @media screen and (min-width: 992px) {
    &:hover {
      color: var(--btn-text-primary-color);
      cursor: pointer;
      background-color: var(--primary-color-hover);
    }

    &.secondary {
      &:hover {
        color: var(--btn-text-primary-color);
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
      }
    }

    gap: 10px;

    .icon {
      margin-top: 3px;
      scale: 1.3;
    }

    &.little >  .icon {
      margin-top: initial;
    }
  }

  &.little {
    padding: 11px 14px;
    font-size: var(--sm-text);
  }
}
</style>
