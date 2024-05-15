<template>
  <div class="skill">
    <div class="flex flex-wrap justify-between items-center mb-6">
      <div class="flex flex-wrap items-center">
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <h5 class="font-bold text-xl flex-1 pl-3"><slot name="title"></slot></h5>
      </div>
      <p class="font-semibold">
        <span class="text-orange-400">{{ starSymbol }}</span>
      </p>
    </div>
    <p class="font-semibold text-slate-600">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    stars: Number,
  },
  computed: {
    starSymbol() {
      const maxStars = 5;
      let str = '';

      for (let i = 0; i < this.stars; i++) {
        str += '★';
      }

      for (let j = 0; j < maxStars - this.stars; j++) {
        str += '☆';
      }

      return str;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.skill {
  @include card(24px, 24px, #dee2e6, 20px, #fff, 0 4px 16px rgba(33, 33, 33, 0.06));
}
</style>
