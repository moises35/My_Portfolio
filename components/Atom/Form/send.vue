<template>
  <button class="btn-send" type="submit">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <SVGSend />
      </div>
    </div>
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import SVGSend from '@/assets/svg/send.svg'
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.btn-send {
  display: flex;
  align-items: center;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  margin: 0 auto;
  overflow: hidden;
  font-family: inherit;
  color: var(--btn-text-primary-color);
  cursor: pointer;
  background-color: var(--btn-primary-color);
  border: none;
  border-radius: 8px;
  transition: all 0.2s;

  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    display: block;
    transition: transform 0.3s ease-in-out;
    transform-origin: center center;
    scale: 0.8;
  }

  @media screen and (min-width: 992px) {
    padding: 0.8em 1.2em;

    &:hover {
      background-color: var(--primary-color-hover);

      .svg-wrapper {
        animation: fly-1 0.6s ease-in-out infinite alternate;
      }

      svg {
        transform: translateX(-0.36em) rotate(45deg) scale(1.1);
      }

      span {
        transform: translateX(0);
      }
    }

    &:active {
      transform: scale(0.95);
    }

    @keyframes fly-1 {
      from {
        transform: translateY(0.1em);
      }

      to {
        transform: translateY(-0.1em);
      }
    }
  }

}
</style>
