<template>
  <h2 :class="additionalClasses" ref="scrollElem">
    <span><slot></slot></span>
  </h2>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const additionalClasses = ref([]);
const props = defineProps(['animate']);
const scrollElem = ref(null);

/**
 * 반응형 클래스에 값 추가
 * @param {string} value 추가할 클래스명
 */
const handleAddClass = (value) => {
  additionalClasses.value.push(value);
};

if (props.animate !== undefined) {
  handleAddClass('animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  });

  onMounted(() => {
    observer.observe(scrollElem.value);
  });
}
</script>

<style lang="scss" scoped>
h2 {
  position: relative;
  font-size: 48px;
  font-weight: 700;
  color: $white;
  letter-spacing: -0.01em;
  overflow: hidden;

  span {
    display: block;
  }

  &.animate span {
    transform: translateY(100%);
    transition: transform 0.8s cubic-bezier(0.655, 0.755, 0.18, 0.97);
  }

  &.animated span {
    transform: translateY(0);
  }
}
</style>
