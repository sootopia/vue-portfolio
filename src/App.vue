<template>
  <Header />
  <main>
    <HeroSection @scrollToAbout="scrollToAbout" />
    <AboutSection ref="aboutRefEl" />
    <SkillSection />
    <WorksSection />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/layouts/HeaderLayout.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillSection from '@/components/sections/SkillSection.vue';
import WorksSection from '@/components/sections/WorksSection.vue';

const aboutRefEl = ref(null);

const scrollToAbout = () => {
  aboutRefEl.value?.scrollToSection();
};
</script>

<style lang="scss">
main {
  h1 {
    font-size: 50px;
  }
}
</style>
