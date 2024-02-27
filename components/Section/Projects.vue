<template>
  <section class="projects">
    <AtomTitle :title="$t(`${T}.title`)" />
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
    slug: 'contacts_app',
    title: 'Contacts App',
    image: '/img/projects/contacts_app.jpg',
    demo: 'https://contactsapp-enqe.onrender.com/',
    repository: 'https://github.com/moises35/Contacts_App',
    skills: [ 'Node.js', 'Express.js', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript' ],
  },
  {
    slug: 'coinbase',
    title: 'Coinbase Clone',
    image: '/img/projects/coinbase.jpg',
    demo: 'https://moises35.github.io/Coinbase_Web/',
    repository: 'https://github.com/moises35/Coinbase_Web',
    skills: [ 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'JavaScript' ],
  },
  {
    slug: 'sharefy',
    title: 'Sharefy',
    image: '/img/projects/sharefy.jpg',
    demo: 'https://sharefy.netlify.app/',
    repository: 'https://github.com/moises35/ShareFy',
    skills: [ 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Socket.io', 'JSONWebToken' ],
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
    padding-bottom: 22px;
    margin-top: 32px;
  }
}
</style>
