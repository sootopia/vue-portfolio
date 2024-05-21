<template>
  <div class="hero h-dvh flex justify-items-center items-center px-6">
    <div class="container mx-auto">
      <h1 class="text-center hero__heading" v-html="typingText"></h1>

      <span class="mouse" @click="handleMoveScroll">
        <div class="mouse__wheel"></div>
      </span>

      <img class="hero__img" src="/static/images/hero_mimoticon.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: `안녕하세요. \n9년차 프론트엔드 개발자 박수현입니다 :)`,
      typingText: '',
      typingIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.typingIndex < this.greeting.length) {
        this.typingText +=
          this.greeting.charAt(this.typingIndex) === '\n'
            ? '<br />'
            : this.greeting.charAt(this.typingIndex);
        this.typingIndex++;
        setTimeout(this.typeText, 100);
      } else {
        setTimeout(() => {
          this.typingText = '';
          this.typingIndex = 0;
          this.typeText();
        }, 2000);
      }
    },
    handleMoveScroll() {
      this.$emit('handleMoveScroll');
    },
  },
  mounted() {
    this.typeText();
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-color: #0a0a0a;

  &::after {
    content: '';
    @include gradient-dimmed(100px, rgba($primary-dark, 85%), transparent);
  }

  h1 {
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    line-height: 1.25;

    &::after {
      content: '|';
      font-weight: 300;
      animation: blink-cursor 1s linear infinite;
    }
  }

  .mouse {
    position: absolute;
    bottom: 34dvh;
    left: 50%;
    width: 24px;
    height: 36px;
    border: 2px solid $white;
    border-radius: 12px;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 10;

    &__wheel {
      position: absolute;
      top: 8px;
      left: 50%;
      width: 2px;
      height: 6px;
      margin-left: -1px;
      border-radius: 1px;
      background-color: $white;
      animation: wheel-scroll 1s linear infinite;
    }
  }

  &__img {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-height: 38vh;
    transform: translateX(-50%);
    animation: fadeIn 1s linear;
    z-index: 5;
  }
}

@keyframes wheel-scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  25% {
    transform: translateY(6px);
    opacity: 1;
  }

  50% {
    transform: translateY(6px);
    opacity: 0;
  }

  100% {
    transform: translateY(6px);
    opacity: 0;
  }
}

@keyframes blink-cursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
