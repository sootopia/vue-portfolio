<template>
  <div
    class="contact h-[480px] flex items-center justify-center bg-[url('/static/images/contact_bg.webp')] bg-center bg-cover bg-no-repeat"
  >
    <div>
      <SectionHeader class="mb-12">저에 대해 궁금한 점이 있으신가요?</SectionHeader>
      <div class="button__group flex justify-center gap-x-3">
        <button class="h-12 px-6 text-white font-semibold rounded-lg bg-white/15">
          경력기술서 다운로드
        </button>

        <button
          class="h-12 px-6 text-white font-semibold rounded-lg bg-teal-500"
          @click="handleOpenModal"
        >
          궁금한 점 문의하기
        </button>
      </div>
    </div>

    <teleport to="body">
      <Modal v-if="isOpenModal" @close="handleCloseModal">
        <template #title>궁금한 점 문의하기</template>
        <template #content>
          <div class="mb-3">
            <MyInput placeholder="성명" v-model="name" :class="errorClass" @input="checkName" />
            <ErrorText v-if="hasError.name" message="성명을 2자 이상 입력해 주세요." />
          </div>
          <div class="mb-3">
            <MyInput
              type="email"
              placeholder="메일주소"
              v-model="email"
              :class="errorClass"
              @input="checkEmail"
            />
            <ErrorText v-if="hasError.email" message="이메일 주소를 형식에 맞게 입력해 주세요." />
          </div>
          <div class="mb-12">
            <MyTextarea
              class="h-32"
              placeholder="문의내용"
              v-model="memo"
              :class="errorClass"
              @input="checkMemo"
            />
            <ErrorText v-if="hasError.memo" message="문의내용을 입력해 주세요." />
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button
              type="button"
              class="h-14 px-6 text-white font-semibold rounded-lg bg-slate-400 hover:bg-slate-500 outline-none transition-[background-color] duration-200"
              @click="handleCloseModal"
            >
              취소
            </button>
            <button
              type="button"
              class="h-14 px-6 text-white font-semibold rounded-lg bg-teal-500/40 enabled:bg-teal-500 enabled:hover:bg-teal-600 cursor-not-allowed enabled:cursor-pointer outline-none transition-[background-color] duration-200"
              @click="handleSubmitForm"
              :disabled="!isFormValid"
            >
              문의하기
            </button>
          </div>
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import Modal from '@/components/Modal.vue';
import MyInput from '@/components/MyInput.vue';
import MyTextarea from '@/components/MyTextarea.vue';
import ErrorText from '@/components/ErrorText.vue';

export default {
  components: {
    SectionHeader,
    Modal,
    MyInput,
    MyTextarea,
    ErrorText,
  },
  data() {
    return {
      isOpenModal: false,
      name: '',
      email: '',
      memo: '',
      errorClass: '',
      hasError: {
        name: false,
        email: false,
        memo: false,
      },
      isValid: {
        name: false,
        email: false,
        memo: false,
      },
      isFormValid: false,
    };
  },
  methods: {
    handleOpenModal() {
      this.isOpenModal = true;
      document.body.style.overflow = 'hidden';
    },
    handleCloseModal() {
      this.name = '';
      this.email = '';
      this.memo = '';
      this.hasError.name = false;
      this.hasError.email = false;
      this.hasError.memo = false;
      this.isValid.name = false;
      this.isValid.email = false;
      this.isValid.memo = false;
      this.isFormValid = false;
      this.isOpenModal = false;
      document.body.style.overflow = '';
    },
    handleSubmitForm() {
      const name = this.name;
    },
    checkName() {
      this.hasError.name = this.name.trim().length < 2;
      this.isValid.name = !this.hasError.name;
      this.checkFormIsValid();
    },
    checkEmail() {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.hasError.email = !regex.test(this.email.trim());
      this.isValid.email = !this.hasError.email;
      this.checkFormIsValid();
    },
    checkMemo() {
      this.hasError.memo = this.memo.trim().length < 1;
      this.isValid.memo = !this.hasError.memo;
      this.checkFormIsValid();
    },
    checkFormIsValid() {
      if (
        !this.hasError.name &&
        !this.hasError.email &&
        !this.hasError.memo &&
        this.isValid.name &&
        this.isValid.email &&
        this.isValid.memo
      ) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
