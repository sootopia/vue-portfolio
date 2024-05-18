<template>
  <textarea
    class="block w-full px-4 py-3 font-medium text-gray-600 placeholder:text-gray-300 border border-gray-200 rounded-xl resize-none bg-white outline-none focus:border-teal-600 focus:shadow-[0px_0px_0px_2px_rgba(13,148,136,0.2)]"
    @input="$emit('update:modelValue', $event.target.value)"
    >{{ modelValue }}</textarea
  >
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>
