<template>
  <div
    class="fixed inset-0 z-[1150] overflow-x-hidden overflow-y-auto bg-[#333333]/75"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    @click="handleCloseModal"
  >
    <div
      class="flex flex-col max-w-[600px] xl:max-w-[500px] h-full mx-6 sm:mx-auto py-8 justify-center items-center"
    >
      <div
        class="relative flex flex-col w-full p-8 rounded-3xl bg-white overflow-hidden shadow-[0px_8px_32px_8px_rgba(33,33,33,0.08)]"
        @click.stop
      >
        <div class="flex flex-wrap items-center justify-between">
          <h1 class="text-xl font-bold"><slot name="title"></slot></h1>
          <button type="button" class="text-gray-600" @click="handleCloseModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
              />
            </svg>
          </button>
        </div>

        <div class="pt-6">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disableDismiss: Boolean,
  },
  methods: {
    handleCloseModal() {
      if (!this.disableDismiss) this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped></style>
