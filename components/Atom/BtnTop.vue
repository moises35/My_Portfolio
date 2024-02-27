<template>
  <div class="btn-top" @click="goTop">
    <SVGArrow />
  </div>
</template>

<script setup lang="ts">
import SVGArrow from '@/assets/svg/btn_top_arrow.svg'

const goTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

</script>

<style lang="scss">
.btn-top {
  position: fixed;
  right: 20px;
  bottom: 800px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  visibility: hidden;
  background-color: var(--btn-primary-color);
  border-radius: 50%;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 20%);
  opacity: 0;
  transition: 0.5s;

  &.active {
    bottom: 30px;
    visibility: visible;
    opacity: 1;

    svg {
      scale: 0.9;
    }
  }

  @media (min-width: 992px) {
    & {
      width: 3.5rem;
      height: 3.5rem;
      background-size: 1.8rem;
    }

    &.active:hover {
      background-color: var(--primary-color-hover);
    }
  }
}
</style>
