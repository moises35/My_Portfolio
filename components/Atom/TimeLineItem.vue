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
      <ul class="description" v-html="description" />
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
      border: 3px solid var(--btn-primary-color);
      border-radius: 100%;
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
      background-color: var(--timeline-line);
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
          color: var(--btn-text-primary-color);
          text-transform: uppercase;
          background-color: var(--btn-primary-color);
          border: 1px solid transparent;
          border-radius: 100px
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
      color: var(--timeline-description);

      li {
        span {
          color: var(--primary-color);
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    .timeline-left {
      display: block;
      flex: 0 0 auto;
      width: 172px;
      margin-top: 6px;
      font-size: 14px;
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
