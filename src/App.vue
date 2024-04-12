<template>
  <Header />
  <main>
    <HeroSection />
    <AboutSection />
  </main>
</template>

<script>
import Header from '@/components/layouts/HeaderLayout.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';

export default {
  components: {
    Header,
    HeroSection,
    AboutSection,
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
