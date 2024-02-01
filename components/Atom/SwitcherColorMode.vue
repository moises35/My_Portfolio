<template>
  <label class="switch-color-mode">
    <span class="moon">
      <SVGMoon />
    </span>
    <span class="sun">
      <SVGSun />
    </span>
    <input type="checkbox" class="input" :checked="colorActual === 'light'" @change="toggleColorMode">
    <span class="slider" />
  </label>
</template>

<script setup lang="ts">
import SVGSun from '@/assets/svg/sun.svg'
import SVGMoon from '@/assets/svg/moon.svg'

const colorMode = useColorMode()
const colorActual = ref('')

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  colorActual.value = colorMode.preference
})
</script>

<style lang="scss">
.switch-color-mode {
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
    background-color: #3ea1ef;
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

  .sun svg {
    position: absolute;
    top: 4px;
    left: 34px;
    z-index: 1;
    width: 26px;
    height: 26px;
    animation: rotate 15s linear infinite;
  }

  .moon svg {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
    fill: #73C0FC;
    animation: tilt 5s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .input:checked + .slider {
    background-color: #183153;
  }

  .input:focus + .slider {
    box-shadow: 0 0 1px #183153;
  }

  .input:checked + .slider::before {
    transform: translateX(30px);
  }
}

</style>
