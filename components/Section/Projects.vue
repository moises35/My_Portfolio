<template>
  <section class="projects">
    <AtomTitle title="Proyecto" />
    <div class="projects-container">
      <template v-for="project in projects" :key="project.slug">
        <AtomCard
          :title="project.title"
          :image="project.image"
          :description="$t(`${T}.${project.slug}`)"
          :demo="project.demo"
          :repository="project.repository"
          :skills="project.skills"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const T = 'projects'

const projects = [
  {
    slug: 'coinbase',
    title: 'Coinbase Clone',
    image: '/img/projects/coinbaseClone.png',
    demo: 'https://coinbase-clone-1b3d3.web.app/',
    repository: 'https://coinbase-clone-1b3d3.web.app/',
    skills: [ 'React', 'TypeScript', 'Firebase', 'Sass' ],
  },
  {
    slug: 'coinbase',
    title: 'Coinbase Clone',
    image: '/img/projects/coinbaseClone.png',
    demo: 'https://coinbase-clone-1b3d3.web.app/',
    repository: 'https://coinbase-clone-1b3d3.web.app/',
    skills: [ 'React', 'TypeScript', 'Firebase', 'Sass' ],
  },
]
</script>

<style lang="scss">
section.projects {
  .projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 42px 32px ;
    justify-content: center;
    margin-top: 32px;
  }
}
</style>
