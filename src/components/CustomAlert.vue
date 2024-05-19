<template>
  <div
    class="fixed inset-0 z-[1200] overflow-x-hidden overflow-y-auto bg-[#333333]/75"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    v-if="isVisibleAlert"
    @click="handleCloseAlert"
  >
    <div
      class="alert__dialog--wrapper flex flex-col h-full mx-6 max-[639px]:max-w-[90%] sm:mx-auto py-8 justify-center items-center"
      :style="customWidthStyle"
    >
      <div
        class="alert__dialog relative flex flex-col w-full p-6 rounded-3xl bg-white overflow-hidden shadow-[0px_8px_32px_8px_rgba(33,33,33,0.08)]"
        @click.stop
      >
        <h1 class="text-xl font-bold">{{ title }}</h1>
        <p v-if="message" class="font-semibold text-slate-600 mt-4" v-html="message"></p>
        <div class="text-right mt-8">
          <button
            type="button"
            class="px-4 py-2 text-teal-600 font-semibold rounded-lg outline-none hover:bg-slate-50"
            @click="handleCloseAlert"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'CustomAlert',
  setup() {
    const isVisibleAlert = ref(false);
    const title = ref('');
    const message = ref('');
    const width = ref(0);
    const customWidthStyle = ref('max-width: 300px');

    const handleOpenAlert = (alertTitle, alertMessage, alertWidth) => {
      title.value = alertTitle;
      message.value = alertMessage;
      isVisibleAlert.value = true;

      if (alertWidth) customWidthStyle.value = `max-width: ${alertWidth}px`;
    };

    const handleCloseAlert = () => {
      isVisibleAlert.value = false;
    };

    return {
      isVisibleAlert,
      title,
      message,
      handleOpenAlert,
      handleCloseAlert,
      width,
      customWidthStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.alert__dialog {
  &--wrapper {
    perspective: 100px;
  }

  animation: fade-up 0.45s forwards;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px) rotateX(15deg);
  }

  100% {
    opacity: 1;
    transform: translateY(0px) rotateX(0deg);
  }
}
</style>
