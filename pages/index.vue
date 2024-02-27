<template>
  <main>
    <SectionHome class="layout-wrapper" />
    <div class="divisor" />
    <Waypoint @change="onChange">
      <div id="experience" class="layout-wrapper">
        <SectionExperience />
      </div>
      <div id="projects" class="layout-wrapper">
        <SectionProjects />
      </div>
      <div id="about-me" class="layout-wrapper">
        <SectionAboutMe />
      </div>
      <div class="layout-wrapper">
        <SectionHabilities />
      </div>
      <div id="contacts" class="layout-wrapper">
        <SectionContacts />
      </div>
    </Waypoint>
    <AtomBtnTop
      :class="{ active: visible }"
    />
  </main>
</template>

<script setup lang="ts">
import { type WaypointState } from 'vue-waypoint'
import * as vueWaypoint from 'vue-waypoint'
import { seoData } from '@/assets/data/seoData'

const Waypoint = vueWaypoint.Waypoint
const { locale } = useI18n()
const visible = ref(false)

const onChange = (waypointState: WaypointState) => {
  visible.value = waypointState.going === 'IN'
}

//  *** SEO ***
useHead(seoData['/'][locale.value])
</script>

<style lang="scss">
main {
  .divisor {
    height: 10vh;
    margin-bottom: 32px;
    background-color: var(--bg-secondary);
  }

  div.layout-wrapper {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 992px) {
    .divisor {
      height: 100px;
    }
  }
}
</style>
