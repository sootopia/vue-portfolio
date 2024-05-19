<template>
  <div ref="skillSectionRef" class="skills relative flex justify-center items-center h-dvh">
    <div ref="headerRef">
      <SectionHeader class="px-6 text-center" dark
        >제가 경험해본, 그리고 할 줄 아는 것들이에요. <br />
        <p class="text-sm text-slate-400 font-semibold mt-2">
          별 개수는 숙련도를 의미해요!
        </p></SectionHeader
      >
    </div>

    <div class="skills__container">
      <div
        class="skill__item"
        v-for="(item, i) of skills"
        :class="'skill__item--0' + (i + 1)"
        :ref="'skillRef0' + (i + 1)"
      >
        <SkillsCard :stars="Number(item.stars)">
          <template #icon>
            <img
              class="rounded-md"
              width="32"
              :src="item.thumbnail"
              :alt="item.title"
              loading="lazy"
            />
          </template>
          <template #title>{{ item.title }}</template>
          <template #content><div v-html="item.content"></div></template>
        </SkillsCard>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import SectionHeader from '@/components/SectionHeader.vue';
import SkillsCard from '@/components/SkillsCard.vue';

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export default {
  components: {
    SectionHeader,
    SkillsCard,
  },
  data() {
    return {
      skills: [
        {
          title: 'React',
          stars: 3,
          content: 'Redux, Recoil, Zustand, <br>Styled Components',
          thumbnail: '/static/images/skills_react.png',
        },
        {
          title: 'Vue.js',
          stars: 5,
          content: 'Composition API, Vuex, Pinia',
          thumbnail: '/static/images/skills_vue.png',
        },
        {
          title: 'Javascript',
          stars: 5,
          content: 'ECMAScript 6, jQuery, Typescript',
          thumbnail: '/static/images/skills_js.png',
        },
        {
          title: 'CSS',
          stars: 5,
          content: 'LESS, SASS(SCSS), PostCSS, BEM',
          thumbnail: '/static/images/skills_css.png',
        },
        {
          title: 'CSS 프레임워크',
          stars: 5,
          content: 'Bootstrap(v3. ~ 최신), Tailwind CSS',
          thumbnail: '/static/images/skills_tailwind.png',
        },
        {
          title: 'HTML',
          stars: 5,
          content: '웹 표준, 웹 접근성, 시맨틱 태그',
          thumbnail: '/static/images/skills_html.png',
        },
        {
          title: 'UI/UX 도구',
          stars: 4,
          content: 'Photoshop, XD, Illustrator, Figma',
          thumbnail: '/static/images/skills_figma.png',
        },
        {
          title: '협업 도구',
          stars: 4,
          content: 'Git, Confluence, Notion',
          thumbnail: '/static/images/skills_git.png',
        },
      ],
    };
  },
  methods: {
    scrollAnimation() {
      const skillSectionRef = this.$refs.skillSectionRef;
      const headerRef = this.$refs.headerRef;
      const skillRef01 = this.$refs.skillRef01;
      const skillRef02 = this.$refs.skillRef02;
      const skillRef03 = this.$refs.skillRef03;
      const skillRef04 = this.$refs.skillRef04;
      const skillRef05 = this.$refs.skillRef05;
      const skillRef06 = this.$refs.skillRef06;
      const skillRef07 = this.$refs.skillRef07;
      const skillRef08 = this.$refs.skillRef08;

      gsap.fromTo(
        headerRef,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef01,
        {
          opacity: 0.2,
        },
        {
          x: 120,
          y: 80,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef02,
        {
          opacity: 0.2,
        },
        {
          x: 160,
          y: 24,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef03,
        {
          opacity: 0.2,
        },
        {
          x: 136,
          y: -12,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef04,
        {
          opacity: 0.2,
        },
        {
          x: 82,
          y: -50,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef05,
        {
          opacity: 0.2,
        },
        {
          x: -78,
          y: -68,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef06,
        {
          opacity: 0.2,
        },
        {
          x: -102,
          y: -24,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef07,
        {
          opacity: 0.2,
        },
        {
          x: -116,
          y: 12,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        skillRef08,
        {
          opacity: 0.2,
        },
        {
          x: -72,
          y: 62,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: skillSectionRef,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1,
          },
        },
      );
    },
  },
  mounted() {
    this.scrollAnimation();
  },
};
</script>

<style lang="scss" scoped>
.skills {
  padding-top: 12vw;
  padding-bottom: 12vw;

  // h2 {
  //   font-size: 1.875vw;
  // }

  &__container {
    .skill__item {
      position: absolute;
      width: 350px;

      &--01 {
        top: 15vh;
        left: 16.2vw;
      }

      &--02 {
        top: 36.2vh;
        left: 4.3vw;
      }

      &--03 {
        top: 54.4vh;
        left: 7.6vw;
      }

      &--04 {
        top: 72.6vh;
        left: 19.4vw;
      }

      &--05 {
        top: 73.8vh;
        right: 20.4vw;
      }

      &--06 {
        top: 56vh;
        right: 8vw;
      }

      &--07 {
        top: 38vh;
        right: 4.8vw;
      }

      &--08 {
        top: 18.2vh;
        right: 15.8vw;
      }
    }
  }
}

@media (max-width: 1919px) {
  .skills {
    h2 {
      font-size: 40px;
    }
  }
}
</style>
