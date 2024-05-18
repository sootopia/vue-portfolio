<template>
  <div class="about flex justify-center items-center">
    <div class="container mx-auto">
      <div class="flex gap-48">
        <div class="flex-none">
          <figure class="mimoticon-wrapper">
            <img src="/static/images/about_mimoticon.png" alt="" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import AboutCard from '@/components/AboutCard.vue';

export default {
  components: {
    SectionHeader,
    AboutCard,
  },
  data() {
    return {
      cardItems: [
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
      ],
    };
  },
};
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
