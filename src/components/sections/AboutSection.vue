<template>
  <div class="about relative">
    <div class="container mx-auto px-5">
      <div class="flex lg:gap-20 xl:gap-48">
        <div class="flex-none">
          <figure class="mimoticon-wrapper">
            <img src="/static/images/about_mimoticon.png" alt="" />
          </figure>
        </div>
        <div class="w-full md:flex-auto md:w-auto">
          <SectionHeader class="mb-12" animate>저는 이런 사람이에요.</SectionHeader>
          <div class="about__grid hidden md:grid gap-5 grid-cols-3">
            <AboutCard v-for="(item, i) of cardItems">
              <template #title>{{ item.title }}</template>
              <template #content>{{ item.content }}</template>
            </AboutCard>
          </div>
        </div>
      </div>
    </div>

    <div class="about__swiper relative md:hidden">
      <swiper
        :space-between="20"
        :centeredSlides="true"
        :initialSlide="1"
        :breakpoints="breakpoints"
      >
        <SwiperSlide v-for="(item, i) of cardItems" :key="i" class="swiper-slide">
          <AboutCard>
            <template #title>{{ item.title }}</template>
            <template #content>{{ item.content }}</template>
          </AboutCard>
        </SwiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import AboutCard from '@/components/AboutCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    SectionHeader,
    AboutCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
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

    const breakpoints = {
      0: {
        slidesPerView: 1.4,
      },
      480: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 2.8,
      },
    };

    return { cardItems, breakpoints };
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

@media (max-width: 1279px) {
  .about {
    .mimoticon-wrapper {
      width: 290px;
    }
  }
}

@media (max-width: 1023px) {
  .about {
    padding-bottom: 240px;

    .mimoticon-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 240px;
      transform: scaleX(-1);
    }
  }
}

@media (max-width: 767px) {
  .about {
    &__swiper {
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 60px;
        height: 100%;
        pointer-events: none;
        z-index: 5;
      }

      &::before {
        left: 0;
        background-image: linear-gradient(to right, #0008, transparent);
      }

      &::after {
        right: 0;
        background-image: linear-gradient(to left, #0008, transparent);
      }

      .swiper-slide {
        opacity: 0.6;

        &-active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
