<template>
  <div class="about__grid--card" ref="target" :style="{ transform: cardTransform }">
    <h5><slot name="title"></slot></h5>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-plus-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
      />
    </svg>

    <strong><slot name="content"></slot></strong>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMouseInElement } from '@vueuse/core';

const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
const cardTransform = computed(() => {
  const MAX_ROTATION = 16;
  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2);
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<style lang="scss" scoped>
.about__grid--card {
  --about-grid-padding: 24px;
  position: relative;
  padding: var(--about-grid-padding);
  border-radius: 16px;
  background-color: tint($black, 15%);
  cursor: pointer;
  overflow: hidden;
  z-index: 10;
  transition: all 0.25s ease-out;

  h5,
  strong {
    letter-spacing: -0.02em;
  }

  h5 {
    font-size: 16px;
    font-weight: 600;
    color: rgba($white, 80%);
    margin-bottom: 24px;
  }

  svg {
    position: absolute;
    top: calc(var(--about-grid-padding) + 4px);
    right: var(--about-grid-padding);
    color: shade($white, 30%);
    z-index: 10;
  }

  strong {
    display: block;
    font-size: 28px;
    font-weight: 800;
    color: transparent;
    text-align: right;
    background-clip: text;
    background-image: linear-gradient(135deg, #007991 0%, #78ffd6 100%);
  }

  &:nth-child(n + 4):not(:nth-child(n + 7)) {
    margin-left: 64px;
    margin-right: -64px;
  }

  &:hover {
    background-color: tint($black, 18%);
  }
}
</style>
