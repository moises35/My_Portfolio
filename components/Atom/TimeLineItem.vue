<template>
  <article class="item-timeline">
    <div class="timeline-left">
      <span class="date">
        {{ date }}
      </span>
    </div>
    <div class="timeline-center">
      <span class="icon">
        <SVGStudy v-if="icon === 'study'" />
        <SVGCode v-else-if="icon === 'code'" />
      </span>
      <span class="line" />
    </div>
    <div class="timeline-right">
      <div class="information">
        <div class="head">
          <span
            class="badge"
          >
            {{ position }}
          </span>
          <span class="date">
            {{ date }}
          </span>
        </div>
        <h3 class="title">
          {{ enterprise }}
        </h3>
      </div>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import SVGStudy from '@/assets/svg/study.svg'
import SVGCode from '@/assets/svg/code.svg'

defineProps({
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  enterprise: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.item-timeline {
  display: flex;
  overflow: hidden;
  text-align: left;

  .timeline-left {
    display: none;
  }

  .timeline-center {
    position: relative;
    flex: 0 0 auto;
    margin-right: 30px;
    margin-left: 16px;

    .icon {
      position: absolute;
      top: 0;
      left: 50%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      font-size: 14px;
      user-select: none;
      background-size: cover;
      border: 3px solid var(--primary-color);
      border-radius: 100%;
      box-shadow: 0 1px 5px 0 #18191a;
      transform: translateX(-50%);

      svg {
        fill: var(--text-color);
      }
    }

    .line {
      display: inline-block;
      width: 1px;
      height: 100%;
      margin-top: 32px;
      background-color: #313d4f;
    }
  }

  .timeline-right {
    flex: 1;
    padding-bottom: 40px;

    .information {
      display: flex;
      flex-direction: column;
      margin-top: 2px;

      .head {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
        margin-bottom: 10px;

        .badge {
          padding: 2px 12px;
          font-size: 12px;
          line-height: 22px;
          text-transform: uppercase;
          background-color: var(--primary-color);
          border: 1px solid transparent;
          border-radius: 100px;
          box-shadow: 0 1px 5px 0 #18191a;
        }

        .date {
          display: inline-block;
          margin-left: 4px;
          font-size: 12px;
          line-height: 24px;
        }
      }

      .title {
        margin: 0 0 4px 4px;
      }
    }

    .description {
      margin-left: 4px;
      font-size: 13px;
      line-height: 26px;
      color: #a9c7df;
    }
  }

  @media screen and (min-width: 992px) {
    .timeline-left {
      display: block;
      flex: 0 0 auto;
      width: 172px;
      font-size: 16px;
      color: #a9c7df;
      text-align: right;
    }

    .timeline-center {
      margin-right: 40px;
      margin-left: 40px;
    }

    .timeline-right {
      .information {
        flex-direction: row;

        .head {
          .badge {
            margin-right: 12px;
          }

          .date {
            display: none;
          }
        }

        .title {
          margin-top: -2px;
          margin-bottom: 8px;
        }

        .description {
          max-width: 800px;
        }
      }
    }
  }
}
</style>
