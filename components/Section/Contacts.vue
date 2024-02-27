<template>
  <section class="contacts">
    <AtomTitle :title="$t(`${T}.title`)" />
    <div class="description">
      <h3>{{ $t(`${T}.title_description`) }}</h3>
      <p>{{ $t(`${T}.description`) }}</p>
    </div>
    <div class="mb">
      <AtomForm />
      <div class="social-network-container">
        <p>Encuentrame en mis redes:</p>
        <ul>
          <li>
            <AtomSocialNetworkBadge
              text="Linkedin"
              link="https://www.linkedin.com/in/moisesalvarenga19/"
              :icon="{ 'icon': SVGLinkedin }"
            />
            <AtomSocialNetworkBadge
              text="Gmail"
              link="mailto:oscar.moises350@gmail.com"
              :icon="{ 'icon': SVGGmail }"
            />
            <AtomSocialNetworkBadge
              text="GitHub"
              link="https://github.com/moises35"
              :icon="{ 'icon': SVGGitHub }"
              :current-color="true"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SVGLinkedin from '@/assets/svg/social_network/linkedin.svg'
import SVGGmail from '@/assets/svg/social_network/gmail.svg'
import SVGGitHub from '@/assets/svg/social_network/github.svg'
const T = 'contacts'
</script>

<style lang="scss">
.contacts {
  .description {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;

    h3 {
      margin-bottom: 6px;
      font-size: 1.2rem;
    }
  }

  .mb {
    margin-top: 32px;

    .social-network-container {
      p {
        margin-bottom: 12px;
        text-align: center;
      }
    }

    @media screen and (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
