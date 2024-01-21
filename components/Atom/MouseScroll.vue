<template>
  <div class="mouse-scroll">
    <div class="mouse" />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.mouse-scroll {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
}

.mouse {
  position: relative;
  width: 25px;
  height: 40px;
  overflow: hidden;
  border: 2px solid #eee;
  border-radius: 6px;

  &::before {
    position: absolute;
    bottom: 9px;
    left: 50%;
    width: 5px;
    height: 5px;
    content: '';
    background-color: #eee;
    border-radius: 50%;
    opacity: 1;
    transform: translateX(-50%);
    animation: wheel 1.3s infinite;
  }

  @keyframes wheel {
    to {
      bottom: 25px;
      opacity: 0;
    }
  }

  @media screen and (min-width: 992px) {
    border-radius: 60px;

    &::before {
      top: 7px;
    }

    @keyframes wheel {
      to {
        top: 27px;
        opacity: 0;
      }
    }
  }
}

</style>
