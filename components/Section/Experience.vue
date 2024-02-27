<template>
  <section class="experience">
    <AtomTitle :title="$t(`${T}.title`)" />
    <div class="timeline-container">
      <template v-for="item in experience" :key="item.slug">
        <AtomTimeLineItem
          :position="$t(`${T}.${item.slug}.position`)"
          :description="$t(`${T}.${item.slug}.description`)"
          :date="$t(`${T}.${item.slug}.date`)"
          :enterprise="$t(`${T}.${item.slug}.enterprise`)"
          :icon="item.icon"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const T = 'experience'
const experience = [
  { slug: 'estudioObliquo', icon: 'code' },
  { slug: 'codingDojo', icon: 'study' },
  { slug: 'fpuna', icon: 'study' },
]
</script>

<style lang="scss">
.experience {
  .timeline-container {
    margin-top: 24px;

    @media screen and (min-width: 994) {
      margin-top: 32px;
    }
  }
}
</style>
