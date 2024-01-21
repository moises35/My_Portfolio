<template>
  <div class="tooltip">
    <div class="icon-container">
      <nuxt-img :src="(item.icon)" :alt="item.icon" />
    </div>
    <span class="tooltiptext">{{ item.name }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss">
.tooltip {
  position: relative;
  display: inline-block;

  .icon-container {
    width: 40px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;

    }
  }

  .tooltiptext {
    position: absolute;
    bottom: 115%;
    left: 50%;
    z-index: 1;
    width: 120px;
    padding: 5px 0;
    margin-left: -60px;
    color: #fff;
    text-align: center;
    visibility: hidden;
    background-color: black;
    border-radius: 6px;
  }

  &:hover {
    .tooltiptext {
      visibility: visible;
    }
  }
}

</style>
