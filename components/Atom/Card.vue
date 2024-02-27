<template>
  <div class="card">
    <div>
      <div class="cover">
        <nuxt-img
          :src="(image)"
          sizes="xs:296px"
          :alt="`Img - ${title}`"
          format="webp"
          loading="lazy"
        />
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
import SVGGitHub from '@/assets/svg/footer/github.svg'
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 320px;
  padding: 12px 12px 16px;
  background-color: var(--bg-card);
  border-radius: 12px;
  box-shadow: 0 0 14px 5px rgb(0 0 0 / 10%);

  .cover {
    height: 180px;
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;

    }
  }

  .content {
    margin-bottom: 22px;

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

  @media screen and (min-width: 992px) {
    .cover {
      img {
        filter: opacity(0.5);
        transition: all 0.3s ease-in-out;

        &:hover {
          filter: none;
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
