<template>
  <Waypoint @change="onChange">
    <h2 class="section-title">
      <RoughNotation
        type="underline"
        :is-show="visible"
        :color="colorActual === 'light' ? '#025a4e' : '#00ADB5'"
      >
        {{ title }}
      </RoughNotation>
    </h2>
  </Waypoint>
</template>

<script setup lang="ts">
import { type WaypointState } from 'vue-waypoint'
import * as vueWaypoint from 'vue-waypoint'

const Waypoint = vueWaypoint.Waypoint

defineProps({
  title: {
    type: String,
    required: true,
  },
})

const visible = ref(false)
const colorMode = useColorMode()
const colorActual = ref('')

watch(colorMode, (newColorMode) => {
  colorActual.value = newColorMode.preference
})

const onChange = (waypointState: WaypointState) => {
  visible.value = waypointState.going === 'IN'
}

onMounted(() => {
  colorActual.value = colorMode.preference
})

</script>

<style lang="scss">
h2.section-title {
  display: flex;
}
</style>
