<template>
  <div class="project__item">
    <figure
      class="project__item--header relative overflow-hidden"
      :class="{ 'clickable--active': isClickableActive }"
    >
      <div
        class="clickable__img"
        :style="{ backgroundImage: `url(${getThumbnailURL(data.thumbnail)})` }"
      ></div>
      <div class="clickable__content text-slate-500">
        <p class="text-lg font-medium text-slate-700 leading-7 z-10" v-html="data.content"></p>
        <button type="button" class="close" @click.stop="handleToggleDetail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
      <div class="clickable__overlay" role="button" @click="handleToggleDetail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
          />
        </svg>
      </div>
    </figure>
    <div class="project__item--body">
      <div class="stack__list mb-3">
        <span v-for="(stack, idx) of data.stacks" :class="getStackClass(stack.name)" :key="idx">{{
          stack.name
        }}</span>
      </div>
      <h4 class="font-bold text-2xl text-slate-900 mb-2">
        {{ data.title }}
        <a
          :href="data.link"
          class="ml-1 hover:text-slate-400"
          target="_blank"
          rel="noopener noreferrer"
          v-if="data.link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-link-45deg inline"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
            />
            <path
              d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
            /></svg
        ></a>
      </h4>
      <p class="font-medium text-slate-400">
        {{ data.clientNm }}
        <small class="text-sm font-normal text-slate-200 mx-1">|</small>
        {{ data.startDt }} ~
        {{ data.endDt }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    data: Object,
  },
  setup() {
    const isClickableActive = ref(false);
    const getStackClass = (stackName) => {
      if (stackName === 'Vue.js') return 'stack--vue';
      if (stackName === 'React') return 'stack--react';
      if (stackName === 'PHP') return 'stack--php';
      if (stackName === 'Javascript') return 'stack--js';
      if (stackName === 'jQuery') return 'stack--jquery';
      if (stackName === 'CMS') return 'stack--cms';
      if (stackName === 'Thymeleaf') return 'stack--thymeleaf';

      return '';
    };

    const getThumbnailURL = (url) => {
      return url ? url : 'https://dummyimage.com/720x540';
    };

    const handleToggleDetail = () => {
      isClickableActive.value = !isClickableActive.value;
    };

    return { isClickableActive, getStackClass, getThumbnailURL, handleToggleDetail };
  },
};
</script>

<style lang="scss" scoped>
.project__item {
  @include card(0, 0, #dee2e6, 16px, #ffffff);
  overflow: hidden;

  .clickable {
    &__img,
    &__content,
    &__overlay {
      position: absolute;
      inset: 0px;
    }

    &__img {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
      z-index: 10;
    }

    &__content {
      padding: 24px;
      word-break: keep-all;
      z-index: 20;
      pointer-events: none;

      p {
        opacity: 0;
        transform: translateY(20px);
        transition:
          opacity 0.3s ease,
          transform 0.3s ease;
      }

      .close {
        position: absolute;
        bottom: 24px;
        left: 24px;
        opacity: 0;
        z-index: 10;
        transition: opacity 0.3s ease;
      }
    }

    &__overlay {
      @include flexbox(flex, center, center);
      position: absolute;
      color: $white;
      background-color: rgba($black, 40%);
      cursor: pointer;
      opacity: 0;
      z-index: 15;
      transition: opacity 0.3s ease;
    }
  }

  &--header {
    aspect-ratio: 1 / 0.75;

    &.clickable--active {
      .clickable__img {
        transform: scale(1.22);
        filter: blur(26px);

        &::after {
          content: '';
          position: absolute;
          inset: 0px;
          background-color: rgba($white, 60%);
        }
      }

      .clickable__content {
        pointer-events: all;

        p {
          opacity: 1;
          transform: translateY(0px);
        }

        .close {
          opacity: 1;
        }
      }
    }

    &:not(.clickable--active):hover {
      .clickable__overlay {
        opacity: 1;
      }
    }
  }

  &--body {
    padding: 28px;

    h4 {
      word-break: keep-all;
    }

    .stack__list {
      span {
        @include flexbox(inline, center, center);
        font-size: 14px;
        font-weight: 600;
        color: $white;
        margin-right: 8px;
        padding: 0 12px;
        height: 32px;
        border-radius: 8px;
        background-color: #20c997;

        &.stack--vue {
          background-color: #42b883;
        }

        &.stack--react {
          background-color: #94d8f7;
        }

        &.stack--php {
          background-color: #8086b4;
        }

        &.stack--js {
          color: $black;
          background-color: #eddf52;
        }

        &.stack--jquery {
          background-color: #4168a8;
        }

        &.stack--cms {
          background-color: #364151;
        }

        &.stack--thymeleaf {
          background-color: #305d1e;
        }
      }
    }
  }
}
</style>
