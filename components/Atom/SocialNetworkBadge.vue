<template>
  <a :href="link" target="_blank" class="social-network-badge">
    {{ text }}
    <component
      :is="icon.icon"
      :class="[
        'icon',
        { 'current-color': currentColor }
      ]"
    />
  </a>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
    default: () => null,
  },
  currentColor: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<style lang="scss">
.social-network-badge {
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 176px;
  padding: 6px 10px;
  margin: 0 auto 22px;
  font-size: 1rem;
  color: var(--text-color);
  border: 1px solid var(--primary-color);
  border-radius: 3rem;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 10%);
  transition: all 0.2s ease;

  .icon {
    scale: 0.8;
  }

  @media screen and (min-width: 992px) {
    width: 216px;

    &:hover {
      box-shadow: none;
      scale: 1.02;
    }
  }
}
</style>
