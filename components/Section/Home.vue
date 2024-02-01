<template>
  <section class="home">
    <div class="presentation">
      <p class="greeting">
        {{ $t(`${T}.greeting`) }}
      </p>
      <h1 class="name">
        {{ $t(`${T}.name`) }}
      </h1>
      <p class="description">
        {{ $t(`${T}.description`) }}
      </p>
      <div class="cta-container">
        <AtomBtn
          to="/pdf/CV_MoisesAlvarenga.pdf"
          :text="$t(`${T}.cta.cv`)"
          :icon="{'icon': SVGPdf}"
          :is-external="true"
        />
        <AtomBtn
          to="#contacts"
          :text="$t(`${T}.cta.contact`)"
          :icon="{'icon': SVGChat}"
          color="secondary"
        />
      </div>
    </div>
    <div class="only-desktop profile-container">
      <img src="/img/perfil.jpeg" alt="Moisés Alvarenga">
    </div>
    <AtomMouseScroll />
  </section>
</template>

<script setup lang="ts">
import SVGPdf from '@/assets/svg/pdf.svg'
import SVGChat from '@/assets/svg/chat.svg'

const T = 'home'
</script>

<style lang="scss">
section.home {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;

  .presentation {
    .greeting {
      margin-bottom: 6px;
      overflow: hidden;
      font-size: var(--medium-text);
      font-weight: 600;
      color: var(--primary-color);
      white-space: nowrap;

      &.animated-typing {
        width: 16.5ch;
        border-right: 4px solid;
        animation: typing 2s steps(17), blink .5s infinite step-end alternate;
      }
    }

    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }

    .name {
      margin-bottom: 6px;
      font-size: var(--big-title);
    }

    .description {
      margin-bottom: 32px;
    }

    .cta-container {
      display: flex;
      gap: 22px;
    }
  }

  @media screen and (min-width: 992px) {
    justify-content: space-between;

    .presentation {
      .greeting {
        font-size: 24px;
      }

      .description {
        max-width: 550px;
      }

      .cta-container {
        gap: 28px;
      }
    }

    .profile-container {
      img {
        width: 320px;
        height: 320px;
        border-radius: 50%;
        outline: 2px solid white;
      }
    }
  }

  @media screen and (min-width: 1863px) {
    height: 965px;
  }
}
</style>
