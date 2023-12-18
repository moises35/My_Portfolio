<template>
  <label class="switch-language">
    <span class="spain">
      <SVGSpain />
    </span>
    <span class="eeuu">
      <SVGUnitedState />
    </span>
    <input type="checkbox" class="input" :checked="locale === 'en'" @change="toggleLanguage">
    <span class="slider" />
  </label>
</template>

<script setup lang="ts">
import SVGUnitedState from '@/assets/svg/eeuu.svg'
import SVGSpain from '@/assets/svg/spain.svg'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<style lang="scss">
.switch-language {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
  font-size: 17px;
  cursor: pointer;
  border-radius:30px;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    cursor: pointer;
    background-color: var(--primary-color);
    border-radius: 30px;
    transition: .4s;

    &::before {
      position: absolute;
      bottom: 2px;
      left: 2px;
      z-index: 2;
      width: 30px;
      height: 30px;
      content: "";
      background-color: #e8e8e8;
      border-radius: 20px;
      transition: .4s;
    }
  }

  .eeuu svg {
    position: absolute;
    top: 7px;
    left: 37px;
    z-index: 1;
    scale: 1.1;
  }

  .spain svg {
    position: absolute;
    top: 7px;
    left: 8px;
    z-index: 1;
    scale: 1.1;
  }

  .input:checked + .slider::before {
    transform: translateX(30px);
  }
}

</style>
