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
          to="/"
          :text="$t(`${T}.cta.cv`)"
          :icon="SVGPdf"
          :is-external="true"
        />
        <AtomBtn
          to="/"
          :text="$t(`${T}.cta.contact`)"
          :icon="SVGChat"
          color="secondary"
        />
      </div>
    </div>
    <div class="only-desktop profile-container">
      <img src="/img/perfil.jpeg" alt="Moisés Alvarenga">
    </div>
  </section>
</template>

<script setup lang="ts">
import SVGPdf from '@/assets/svg/pdf.svg'
import SVGChat from '@/assets/svg/chat.svg'

const T = 'home'
</script>

<style lang="scss">
section.home {
  display: flex;
  align-items: center;
  height: 78vh;

  .presentation {
    .greeting {
      margin-bottom: 6px;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-color);
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

  @media screen and (min-width: 900px) {
    justify-content: space-between;
    height: 76vh;

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
}
</style>
