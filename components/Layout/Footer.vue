<template>
  <footer class="footer">
    <div class="icon-wrap">
      <AtomSocialIcons
        link="https://github.com/moises35"
        :icon="{ 'icon': SVGGithub }"
        title="GitHub"
      />
      <AtomSocialIcons
        link="mailto:oscar.moises350@gmail.com"
        :icon="{ 'icon': SVGGmail }"
        title="Gmail"
      />
      <AtomSocialIcons
        link="https://www.linkedin.com/in/moisesalvarenga19/"
        :icon="{ 'icon': SVGLinkedIn }"
        title="Linkedin"
      />
    </div>
    <div class="info">
      <div class="foot-name">
        <p>{{ $t(`${T}.thanks`) }}</p>
        <span class="name">Moisés Alvarenga</span>
        <span class="highlight"> - {{ year }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SVGGithub from '@/assets/svg/footer/github.svg'
import SVGLinkedIn from '@/assets/svg/footer/linkedin.svg'
import SVGGmail from '@/assets/svg/footer/gmail.svg'
const year = ref(new Date().getFullYear())
const T = 'footer'
</script>

<style lang="scss">
footer.footer {
  position: relative;
  padding: 70px 0 50px;
  background-color: var(--bg-secondary);
  border-top: 1px solid #2a3a4c;

  .icon-wrap {
    display: flex;
    flex-direction: row;
    gap: 22px;
    align-items: center;
    justify-content: center;
  }

  .info .foot-name {
    margin-top: 35px;
    font-size: 10pt;
    font-weight: 500;
    color: var(--highlight-text);
    text-align: center;
    text-transform: uppercase;

    .name {
      opacity: 0.6;
    }

    .highlight {
      opacity: 1;
    }
  }
}
</style>
