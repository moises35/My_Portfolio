<template>
  <div class="tooltip">
    <div class="icon-container">
      <nuxt-img
        :src="`/svg/skills/${item.icon}.svg`"
        loading="lazy"
        :alt="item.name"
      />
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
  width: 50px;
  height: 50px;

  .icon-container {
    width: 40px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .tooltiptext {
    visibility: hidden;
  }

  @media screen and (min-width: 992px) {
    .tooltiptext {
      position: absolute;
      bottom: 115%;
      left: 50%;
      z-index: 1;
      width: 120px;
      padding: 5px 0;
      margin-left: -60px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      visibility: hidden;
      background-color: #00000052;
      border-radius: 6px;
    }

    &:hover {
      .tooltiptext {
        visibility: visible;
      }
    }

    .icon-container {
      width: 50px;
      height: 60px;
    }
  }
}

</style>
