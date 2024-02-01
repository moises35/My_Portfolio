<template>
  <div class="card">
    <div class="cover">
      <img src="/img/projects/coinbaseClone.png" alt="Coinbase">
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div v-if="skills.length > 0" class="skills-container">
      <template v-for="skill in skills" :key="skill">
        <AtomBadge :text="String(skill)" />
      </template>
    </div>
    <div class="btn-container">
      <AtomBtn
        v-if="demo"
        text="Demo"
        :to="demo"
        :icon="{ 'icon': SVGExternal }"
        :is-external="true"
        size="sm"
      />
      <AtomBtn
        v-if="repository"
        text="Code"
        :to="repository"
        :icon="{ 'icon': SVGGitHub }"
        :is-external="true"
        color="secondary"
        size="sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGGitHub from '@/assets/svg/github.svg'
import SVGExternal from '@/assets/svg/external.svg'

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: false,
    default: '',
  },
  repository: {
    type: String,
    required: false,
    default: '',
  },
  skills: {
    type: Array,
    required: false,
    default: () => [],
  },
})
</script>

<style lang="scss">
div.card {
  max-width: 320px;
  padding: 12px 12px 16px;
  background-color: #31313F;
  border-radius: 12px;

  .cover {
    height: 180px;
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 12px;

    img {
      width: 100%;
      height: 100%;
      filter: opacity(0.5);
      transition: all 0.3s ease-in-out;
      object-fit: fill;

      &:hover {
        filter: none;
        transform: scale(1.1);
      }
    }
  }

  .content {
    margin-bottom: 32px;

    h3 {
      margin-bottom: 4px;
    }

    p {
      font-size: var(--sm-text);
    }
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    margin-bottom: 18px;
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
