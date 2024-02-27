<template>
  <section class="home">
    <div class="presentation">
      <p class="greeting">
        {{ greeting }}
      </p>
      <h1 class="name">
        {{ $t(`${T}.name`) }}
        <span>{{ $t(`${T}.position`) }}</span>
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
          animation="bubble"
        />
      </div>
    </div>
    <div class="only-desktop profile-container">
      <nuxt-img
        src="/img/perfil.jpeg"
        sizes="xs:340px"
        format="webp"
        alt="Moisés Alvarenga"
      />
    </div>
    <AtomMouseScroll />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SVGPdf from '@/assets/svg/pdf.svg'
import SVGChat from '@/assets/svg/chat.svg'

const { t } = useI18n()
const T = 'home'
const greeting = ref(t(`${T}.greeting`))

const delay = 100
const typingEffect = (originalGreeting: string) => {
  let i = 0

  greeting.value = ''

  const typeInterval = setInterval(() => {
    if (i < originalGreeting.length) {
      greeting.value += originalGreeting.charAt(i)
      i++
    }
    else {
      clearInterval(typeInterval)
      setTimeout(() => typingEffect(t(`${T}.greeting`)), 3000)
    }
  }, delay)
}

onMounted(() => {
  typingEffect(t(`${T}.greeting`))
})
</script>

<style lang="scss">
section.home {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;

  .presentation {
    .greeting {
      // margin-bottom: 6px;
      overflow: hidden;
      font-size: var(--medium-text);
      font-weight: 600;
      color: var(--primary-color);
      white-space: nowrap;

      &::after {
        margin-left: 2px;
        content: '';
        border: 1px solid;
        animation: blink 1s infinite;
      }

      @keyframes blink {
        0% {
          visibility: hidden;
        }

        50% {
          visibility: hidden;
        }

        100% {
          visibility: visible;
        }
      }
    }

    .name {
      position: relative;
      margin-bottom: 32px;
      font-size: var(--big-title);
      color: var(--text-color-2);

      span {
        position: absolute;
        bottom: -12px;
        left: 1px;
        font-size: 18px;
        font-weight: 100;
        color: transparent;
        background-image: linear-gradient(110deg, var(--text-color), 45%, var(--primary-color), 55%, var(--text-color));
        background-clip: text;
        background-size: 250% 100%;
        animation: background-shine 2s linear infinite;
      }

      @keyframes background-shine {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -200% 0;
        }
      }
    }

    .description {
      margin-bottom: 32px;
      font-size: 16px;
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

      .name {
        span {
          font-size: 18px;
        }
      }

      .description {
        max-width: 550px;
        font-size: 18px;
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
        box-shadow: 0 0 11px 3px rgb(0 0 0 / 10%);
      }
    }
  }

  @media screen and (min-width: 1863px) {
    height: 965px;
  }
}
</style>
