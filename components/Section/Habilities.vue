<template>
  <section class="habilities">
    <AtomTitle title="Habilidades" />
    <div class="tabs">
      <input id="tab1" type="radio" name="tab-control" checked>
      <input id="tab2" type="radio" name="tab-control">
      <input id="tab3" type="radio" name="tab-control">
      <input id="tab4" type="radio" name="tab-control">
      <ul>
        <li title="Frontend">
          <label for="tab1" role="button">
            <SVGFrontend />
            <br><span>Frontend</span>
          </label>
        </li>
        <li title="Backend">
          <label for="tab2" role="button">
            <SVGBackend />
            <br><span>Backend</span>
          </label>
        </li>
        <li title="Mobile">
          <label for="tab3" role="button">
            <SVGMobile />
            <br><span>Mobile</span>
          </label>
        </li>
        <li title="Others">
          <label for="tab4" role="button">
            <SVGOthers />
            <br><span>Tools</span>
          </label>
        </li>
      </ul>

      <div class="slider">
        <div class="indicator" />
      </div>
      <div class="content">
        <section>
          <h2>Frontend</h2>
          <div class="skill-container">
            <template v-for="item in frontend" :key="item.name">
              <AtomSkill :item="item" />
            </template>
          </div>
        </section>
        <section>
          <h2>Backend</h2>
          <div class="skill-container">
            <template v-for="item in backend" :key="item.name">
              <AtomSkill :item="item" />
            </template>
          </div>
        </section>
        <section>
          <h2>Mobile</h2>
          <div class="skill-container">
            <template v-for="item in mobile" :key="item.name">
              <AtomSkill :item="item" />
            </template>
          </div>
        </section>
        <section>
          <h2>Tools</h2>
          <div class="skill-container">
            <template v-for="item in others" :key="item.name">
              <AtomSkill :item="item" />
            </template>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SVGFrontend from '@/assets/svg/habilities/frontend.svg'
import SVGBackend from '@/assets/svg/habilities/backend.svg'
import SVGMobile from '@/assets/svg/habilities/mobile.svg'
import SVGOthers from '@/assets/svg/habilities/tools.svg'
import { frontend, backend, mobile, others } from '@/assets/data/habilities'

const visible = ref(true)

</script>

<style lang="scss">
.tabs {
  position: relative;
  min-width: 240px;
  min-height: 250px;
  padding: 20px 0;
  margin-top: 22px;
  background: var(--bg-color);
  border-radius: 5px;

  // box-shadow: 0 14px 28px rgb(29 255 33 / 25%), 0 10px 10px rgb(0 255 21 / 22%);
  // box-shadow: 0 0 5px var(--primary-color), 0 2px 9px var(--primary-color);

  // transform: translateX(-50%);

  input[name="tab-control"] {
    display: none;
  }

  .content section h2,
  ul li label {
    font-size: 18px;
    font-weight: bold;
    color: var(--primary-color);
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;

    li {
      box-sizing: border-box;
      flex: 1;
      width: 25%;
      padding: 0 10px;
      text-align: center;

      label {
        display: block;
        padding: 5px auto;
        overflow: hidden;
        color: #4d6768;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease-in-out;
        -webkit-touch-callout: none;

        &:hover, &:focus, &:active {
          color: #6e9294;
          outline: 0;

          svg * {
            fill: #6e9294;
          }
        }

        svg {
          height: 1.2em;
          vertical-align: bottom;
          transition: all 0.2s ease-in-out;

          * {
            fill: #4d6768;
          }
        }

        @media (max-width: 1000px) {
          white-space: initial;

          br {
            display: initial;
          }

          svg {
            height: 1.5em;
          }
        }

        @media (max-width: 600px) {
          padding: 5px;
          border-radius: 5px;

          span {
            display: none;
          }
        }
      }
    }
  }

  .slider {
    position: relative;
    width: 25%;
    transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);

    .indicator {
      position: relative;
      width: 50px;
      max-width: 100%;
      height: 4px;
      margin: 0 auto;
      background: #00adb5;
      border-radius: 1px;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }

  .content {
    min-height: 200px;
    margin-top: 30px;

    section {
      display: none;
      padding: 0 12px;
      line-height: 1.4;
      animation: content 0.3s ease-in-out 1;

      h2 {
        display: none;
        margin-bottom: 12px;
        color: #00adb5;

        &::after {
          position: relative;
          left: 1px;
          display: block;
          width: 30px;
          height: 3px;
          margin-top: 5px;
          content: "";
          background: #00adb5;
        }

        @media (max-width: 600px) {
          display: block;
        }
      }

      .skill-container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: space-around;
      }
    }

    @media (max-width: 600px) {
      margin-top: 20px;
    }
  }

  input[name="tab-control"]:nth-of-type(1):checked {
    & ~ ul > li:nth-child(1) > label {
      color: #00adb5;
      cursor: default;

      svg * {
        fill: #00adb5;
      }

      @media (max-width: 600px) {
        background: rgb(0 0 0 / 8%);
      }
    }

    & ~ .slider {
      transform: translateX(0%);
    }

    & ~ .content > section:nth-child(1) {
      display: block;
    }
  }

  input[name="tab-control"]:nth-of-type(2):checked {
    & ~ ul > li:nth-child(2) > label {
      color: #00adb5;
      cursor: default;

      & svg * {
        fill: #00adb5;
      }

      @media (max-width: 600px) {
        background: rgb(0 0 0 / 8%);
      }
    }

    & ~ .slider {
      transform: translateX(100%);
    }

    & ~ .content > section:nth-child(2) {
      display: block;
    }
  }

  input[name="tab-control"]:nth-of-type(3):checked {
    & ~ ul > li:nth-child(3) > label {
      color: #00adb5;
      cursor: default;

      & svg * {
        fill: #00adb5;
      }

      @media (max-width: 600px) {
        background: rgb(0 0 0 / 8%);
      }
    }

    & ~ .slider {
      transform: translateX(200%);
    }

    & ~ .content > section:nth-child(3) {
      display: block;
    }
  }

  input[name="tab-control"]:nth-of-type(4):checked {
    & ~ ul > li:nth-child(4) > label {
      color: #00adb5;
      cursor: default;

      & svg * {
        fill: #00adb5;
      }

      @media (max-width: 600px) {
        background: rgb(0 0 0 / 8%);
      }
    }

    & ~ .slider {
      transform: translateX(300%);
    }

    & ~ .content > section:nth-child(4) {
      display: block;
    }
  }

  @keyframes content {
    from {
      opacity: 0;
      transform: translateY(5%);
    }

    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
}
</style>
