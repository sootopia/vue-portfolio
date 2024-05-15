<template>
  <Header
    :class="{ 'header--sticky': isSticky, 'sticky--light': isLightHeader }"
    @scrollTo="scrollToSection"
  />
  <main>
    <div ref="heroSectionRef">
      <HeroSection @scrollToAbout="scrollToSection(aboutSectionRef)" />
    </div>
    <div ref="aboutSectionRef">
      <AboutSection />
    </div>
    <div ref="skillSectionRef">
      <SkillSection />
    </div>
    <div ref="worksSectionRef">
      <WorksSection />
    </div>
  </main>
</template>

<script>
import Header from '@/components/layouts/HeaderLayout.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillSection from '@/components/sections/SkillSection.vue';
import WorksSection from '@/components/sections/WorksSection.vue';

export default {
  components: {
    Header,
    HeroSection,
    AboutSection,
    SkillSection,
    WorksSection,
  },
  data() {
    return {
      isSticky: false,
      isLightHeader: false,
    };
  },
  methods: {
    scrollToSection(sectionRef) {
      const element = this.$refs[sectionRef];
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    },
    handleScroll() {
      const stickyPoint = this.$refs.heroSectionRef.offsetHeight;
      const lightHeaderPoint = stickyPoint + this.$refs.aboutSectionRef.offsetHeight;
      const scrollTop = window.scrollY;

      console.log(lightHeaderPoint);
      this.isSticky = scrollTop >= stickyPoint;
      this.isLightHeader = scrollTop >= lightHeaderPoint;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
main {
  h1 {
    font-size: 50px;
  }
}
</style>
