<template>
  <p class="text-sm font-semibold text-red-500 mt-2">{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style lang="scss" scoped></style>
