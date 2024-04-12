<template>
  <section class="about flex justify-center items-center">
    <div class="container mx-auto">
      <div class="flex gap-48">
        <div class="flex-none">
          <figure class="mimoticon-wrapper">
            <img :src="aboutMimoticon" alt="" />
          </figure>
        </div>
        <div class="flex-auto">
          <SectionHeader class="mb-12" animate>저는 이런 사람이에요.</SectionHeader>
          <div class="about__grid grid gap-5 grid-cols-3">
            <AboutCard v-for="(item, i) of cardItems">
              <template #title>{{ item.title }}</template>
              <template #content>{{ item.content }}</template>
            </AboutCard>
          </div>

          <p class="about__grid--desc mt-2 text-sm text-gray-500 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path
                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"
              />
            </svg>
            각 카드를 클릭하시면 상세 내용을 보실 수 있어요.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/SectionHeader.vue';
import aboutMimoticon from '@/assets/images/about_mimoticon.png';
import AboutCard from '@/components/AboutCard.vue';

const cardItems = [
  {
    title: '경력',
    content: '9년 5개월',
    detail: '',
  },
  {
    title: '강점',
    content: '성실함과 책임감',
    detail: '',
  },
  {
    title: '취미',
    content: '영화보기&운동',
    detail: '',
  },
  {
    title: '나이',
    content: '만 31세',
    detail: '',
  },
  {
    title: '관심사',
    content: 'UI/UX구현 및 개선',
    detail: '',
  },
  {
    title: '작업 프로젝트 수',
    content: '100+ ⬆',
    detail: '',
  },
  {
    title: '좋아하는 것',
    content: '명확함, 협동',
    detail: '',
  },
  {
    title: '싫어하는 것',
    content: '모호함, 지지부진함',
    detail: '',
  },
  {
    title: '특별한 경험',
    content: '창업 1회',
    detail: '',
  },
];
</script>

<style lang="scss" scoped>
.about {
  padding-top: 12vw;
  padding-bottom: 12vw;
  background-color: tint($black, 8%);

  .mimoticon-wrapper {
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      @include gradient-dimmed(60px, tint($black, 8%), transparent);
    }
  }

  &__grid {
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
    z-index: 10;

    &::before,
    &::after {
      //   content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 2;
    }

    &::before {
      top: 0;
      background-image: linear-gradient(to bottom, tint($black, 8%), transparent);
    }

    &::after {
      bottom: 0;
      background-image: linear-gradient(to top, tint($black, 8%), transparent);
    }

    &--desc {
      position: relative;
      padding-left: 24px;
      letter-spacing: -0.03em;

      svg {
        position: absolute;
        top: 2px;
        left: 0;
      }
    }
  }
}
</style>
