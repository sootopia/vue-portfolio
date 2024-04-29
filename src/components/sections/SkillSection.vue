<template>
  <section ref="skillSectionRef" class="skills relative flex justify-center items-center h-dvh">
    <SectionHeader class="px-6 text-center" dark
      >제가 경험해본, 그리고 할 줄 아는 것들이에요. <br />
      <p class="text-sm text-slate-400 font-semibold mt-2">
        별 개수는 숙련도를 의미해요!
      </p></SectionHeader
    >
    <div class="skills__container">
      <div
        class="skill__item"
        v-for="(item, i) of skills"
        :class="'skill__item--0' + (i + 1)"
        :ref="'skillRef0' + (i + 1)"
      >
        <SkillsCard :stars="item.stars">
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
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { ref, onMounted } from 'vue';
import SectionHeader from '@/components/SectionHeader.vue';
import SkillsCard from '@/components/SkillsCard.vue';
import reactIcon from '@/assets/images/skills_react.png';
import vueIcon from '@/assets/images/skills_vue.png';
import jsIcon from '@/assets/images/skills_js.png';
import cssIcon from '@/assets/images/skills_css.png';
import cssFrameworksIcon from '@/assets/images/skills_tailwind.png';
import htmlIcon from '@/assets/images/skills_html.png';
import uiuxIcon from '@/assets/images/skills_figma.png';
import coopIcon from '@/assets/images/skills_git.png';

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
          thumbnail: reactIcon,
        },
        {
          title: 'Vue.js',
          stars: 5,
          content: 'Composition API, Vuex, Pinia',
          thumbnail: vueIcon,
        },
        {
          title: 'Javascript',
          stars: 5,
          content: 'ES6, Vanilla JS, jQuery, Typescript',
          thumbnail: jsIcon,
        },
        {
          title: 'CSS',
          stars: 5,
          content: 'LESS, SASS(SCSS), PostCSS, BEM',
          thumbnail: cssIcon,
        },
        {
          title: 'CSS 프레임워크',
          stars: 5,
          content: 'Bootstrap(v3. ~ 최신), Tailwind CSS',
          thumbnail: cssFrameworksIcon,
        },
        {
          title: 'HTML',
          stars: 5,
          content: '웹 표준, 웹 접근성, 시맨틱 태그',
          thumbnail: htmlIcon,
        },
        {
          title: 'UI/UX 도구',
          stars: 4,
          content: 'Photoshop, XD, Illustrator, Figma',
          thumbnail: uiuxIcon,
        },
        {
          title: '협업 도구',
          stars: 4,
          content: 'Git, Confluence, Notion',
          thumbnail: coopIcon,
        },
      ],
    };
  },
  methods: {
    scrollAnimation() {
      const skillSectionRef = this.$refs.skillSectionRef;
      const skillRef01 = this.$refs.skillRef01;

      gsap.to(skillRef01, {
        scrollTrigger: {
          trigger: skillSectionRef,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: 1,
        },
        x: 80,
        y: 80,
        duration: 1,
      });
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
</style>
