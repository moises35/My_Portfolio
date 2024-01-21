<template>
  <Waypoint @change="onChange">
    <h2 class="section-title">
      <RoughNotation
        type="underline"
        :is-show="visible"
      >
        {{ title }}
      </RoughNotation>
    </h2>
  </Waypoint>
</template>

<script setup lang="ts">
import { Waypoint, type WaypointState } from 'vue-waypoint'

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const visible = ref(false)

const onChange = (waypointState: WaypointState) => {
  visible.value = waypointState.going === 'IN'
}

</script>

<style lang="scss">
h2.section-title {
  display: flex;
}
</style>
