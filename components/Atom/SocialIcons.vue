<template>
  <a
    :href="link"
    class="social-icons"
    rel="noopener"
    :target="external ? '_blank' : '_self'"
    :aria-label="title"
  >
    <div class="icon">
      <template v-if="icon">
        <component :is="icon.icon" class="animation" />
      </template>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
    default: () => null,
  },
  external: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.social-icons {
  .icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    margin: 0;
    overflow: hidden;
    cursor: pointer;
    background-color: var(--bg-card);
    box-shadow: 0 0 10px 4px rgb(0 0 0 / 10%);
    transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;

    svg {
      * {
        fill: var(--btn-text-secondary-color);
      }
    }

    @media screen and (min-width: 992px) {
      &:hover {
        background-color: var(--social-icons-bg-hover);
        box-shadow: 0 0 0 3px rgb(4 94 201 / 10%);
        transform: scale(0.9);

        .animation {
          animation: to-bottom-from-top 0.3s forwards;
        }

        @keyframes to-bottom-from-top {
          49% {
            transform: translateY(100%);
          }

          50% {
            opacity: 0;
            transform: translateY(-100%);
          }

          51% {
            opacity: 1;
          }
        }
      }
    }

    .animation {
      display: inline-block;
      transform: translate(0, 0);
      scale: 1.4;
    }
  }
}
</style>
