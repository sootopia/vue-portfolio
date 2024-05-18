<template>
  <input
    :type="inputType"
    :value="modelValue"
    class="block w-full h-[54px] px-4 font-medium text-gray-600 placeholder:text-gray-300 border border-gray-200 rounded-xl bg-white outline-none focus:border-teal-600 focus:shadow-[0px_0px_0px_2px_rgba(13,148,136,0.2)]"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    modelValue: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
