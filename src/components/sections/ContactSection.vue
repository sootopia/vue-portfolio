<template>
  <div
    class="contact h-[480px] flex items-center justify-center bg-[url('/static/images/contact_bg.webp')] bg-center bg-cover bg-no-repeat"
  >
    <div>
      <SectionHeader class="mb-12">저에 대해 궁금한 점이 있으신가요?</SectionHeader>
      <div class="button__group flex justify-center gap-x-3">
        <button
          class="h-12 px-6 text-white font-semibold rounded-lg bg-white/15"
          @click="handleDownload"
        >
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
      <Modal v-if="isOpenModal" :disableDismiss="isLoading" @close="handleCloseModal">
        <template #title>궁금한 점 문의하기</template>
        <template #content>
          <div v-if="isLoading" class="loading__spinner">
            <span class="loading__spinner--loader"></span>
          </div>

          <blockquote class="mb-6 p-6 rounded-xl bg-slate-100">
            <ul>
              <ContactList>
                <template #icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
                    />
                  </svg>
                </template>
                <template #content>shpark7502@gmail.com</template>
              </ContactList>

              <ContactList>
                <template #icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    />
                  </svg>
                </template>
                <template #content
                  ><a href="https://github.com/sootopia" target="_blank" rel="noreferrer noopener"
                    >https://github.com/sootopia</a
                  ></template
                >
              </ContactList>
            </ul>
          </blockquote>

          <div class="mb-3">
            <MyInput
              placeholder="성명"
              v-model="name"
              :class="errorClass"
              :disabled="isLoading"
              @input="checkName"
            />
            <ErrorText v-if="hasError.name" message="성명을 2자 이상 입력해 주세요." />
          </div>
          <div class="mb-3">
            <MyInput
              type="email"
              placeholder="메일주소"
              v-model="email"
              :class="errorClass"
              :disabled="isLoading"
              @input="checkEmail"
            />
            <ErrorText v-if="hasError.email" message="이메일 주소를 형식에 맞게 입력해 주세요." />
          </div>
          <div class="mb-6">
            <MyTextarea
              class="h-32"
              placeholder="문의내용"
              v-model="memo"
              :class="errorClass"
              :disabled="isLoading"
              @input="checkMemo"
            />
            <ErrorText v-if="hasError.memo" message="문의내용을 입력해 주세요." />
          </div>
          <div class="mb-12">
            <div class="flex justify-between items-center">
              <div class="custom__check">
                <input
                  type="checkbox"
                  class="custom__check--box"
                  id="chkAgree"
                  :disabled="isLoading"
                  v-model="agree"
                  @click="checkAgree"
                />
                <label for="chkAgree" class="text-slate-600 align-middle cursor-pointer"
                  >개인정보 수집 및 이용 동의</label
                >
              </div>

              <button
                type="button"
                class="text-sm text-teal-500 hover:text-teal-600 font-medium"
                @click="showPrivacyTerms"
              >
                내용보기
              </button>
            </div>

            <ErrorText v-if="hasError.agree" message="개인정보 수집 및 이용약관에 동의해 주세요." />
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button
              type="button"
              class="h-14 px-6 text-white font-semibold rounded-lg bg-slate-400 enabled:hover:bg-slate-500 cursor-not-allowed enabled:cursor-pointer outline-none transition-[background-color] duration-200"
              :disabled="isLoading"
              @click="handleCloseModal"
            >
              취소
            </button>
            <button
              type="button"
              class="h-14 px-6 text-white font-semibold rounded-lg bg-teal-500/40 enabled:bg-teal-500 enabled:hover:bg-teal-600 cursor-not-allowed enabled:cursor-pointer outline-none transition-[background-color] duration-200"
              @click="handleSubmitForm"
              :disabled="!isFormValid || isLoading"
            >
              문의하기
            </button>
          </div>
        </template>
      </Modal>

      <ErrorAlert></ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import Modal from '@/components/Modal.vue';
import ContactList from '@/components/ContactList.vue';
import MyInput from '@/components/MyInput.vue';
import MyTextarea from '@/components/MyTextarea.vue';
import ErrorText from '@/components/ErrorText.vue';
import ErrorAlert from '@/components/CustomAlert.vue';
import axios from 'axios';
const apiDomain = import.meta.env.VITE_EC2_HOST;

export default {
  components: {
    SectionHeader,
    Modal,
    ContactList,
    MyInput,
    MyTextarea,
    ErrorText,
    ErrorAlert,
  },
  data() {
    return {
      isOpenModal: false,
      name: '',
      email: '',
      memo: '',
      agree: '',
      errorClass: '',
      hasError: {
        name: false,
        email: false,
        memo: false,
        agree: false,
      },
      isValid: {
        name: false,
        email: false,
        memo: false,
        agree: false,
      },
      isFormValid: false,
      isLoading: false,
    };
  },
  methods: {
    handleDownload() {
      this.$alert('현재 준비중이에요.');
    },
    handleOpenModal() {
      this.isOpenModal = true;
      document.body.style.overflow = 'hidden';
    },
    handleCloseModal() {
      this.handleResetForm();
      document.body.style.overflow = '';
    },
    showPrivacyTerms() {
      this.$alert(
        '개인정보 수집 및 이용에 동의해 주세요',
        '- 수집 목적 : 문의 내용 확인 및 응답 <br>- 수집 항목 : 이름, 이메일 <br>- 보유 및 이용 기간 : 문의 응답 완료시까지',
        400,
      );
    },
    async handleSubmitForm() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const params = {
        name: this.name,
        email: this.email,
        memo: this.memo,
      };

      if (this.name.trim().length < 2) {
        this.$alert('오류', '이름을 2글자 이상 입력해 주세요.');
        return;
      }

      if (!emailRegex.test(this.email.trim())) {
        this.$alert('오류', '이메일 주소를 형식에 맞게 입력해 주세요.');
        return;
      }

      if (this.memo.trim().length < 2) {
        this.$alert('오류', '문의내용을 입력해 주세요.');
        return;
      }

      if (!this.agree) {
        this.$alert('오류', '개인정보 수집 및 이용 약관에 동의해 주세요.');
        return;
      }

      this.isLoading = true;

      try {
        const res = await axios.post(`${apiDomain}/api/sendContact.php`, JSON.stringify(params));
        console.log('res ::: ', res);

        if (res.data.result) {
          this.$alert('접수 완료', '궁금한 점을 전달했어요.');
          this.handleResetForm();
          this.handleCloseModal();
        } else {
          alert(res.data.message);
        }
      } catch (e) {
        console.log(e);
        this.$alert('오류', '오류가 발생했어요.');
      }

      this.isLoading = false;
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
    checkAgree() {
      this.isValid.agree = !this.agree;
      this.hasError.agree = this.agree;
      this.checkFormIsValid();
    },
    checkFormIsValid() {
      if (
        !this.hasError.name &&
        !this.hasError.email &&
        !this.hasError.memo &&
        !this.hasError.agree &&
        this.isValid.name &&
        this.isValid.email &&
        this.isValid.memo &&
        this.isValid.agree
      ) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },
    handleResetForm() {
      this.name = '';
      this.email = '';
      this.memo = '';
      this.agree = '';
      this.hasError.name = false;
      this.hasError.email = false;
      this.hasError.memo = false;
      this.hasError.agree = false;
      this.isValid.name = false;
      this.isValid.email = false;
      this.isValid.memo = false;
      this.isValid.agree = false;
      this.isFormValid = false;
      this.isOpenModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading__spinner {
  position: absolute;
  display: flex;
  inset: 0px;
  align-items: center;
  justify-content: center;
  background-color: rgba($white, 50%);
  z-index: 10;

  &--loader {
    position: relative;
    width: 100px;
    height: 100px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      transform: translate(-5px, -50%);
      background: linear-gradient(to right, #495057 50%, #14b8a6 50%) no-repeat;
      background-size: 200% auto;
      background-position: 100% 0;
      animation: colorBallMoveX 1.5s linear infinite alternate;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: #14b8a6;
    }
  }
}

.custom__check {
  &--box {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    background-color: $white;
    vertical-align: middle;
    appearance: none;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: #14b8a6;
      box-shadow: 0 0 0 2px rgba(#14b8a6, 20%);
    }

    &:checked {
      border-color: #14b8a6;
      background-color: #14b8a6;

      &::after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 10px;
        height: 6px;
        border-left: 2px solid $white;
        border-bottom: 2px solid $white;
        transform: rotate(-45deg);
      }
    }
  }
}

@keyframes colorBallMoveX {
  0% {
    background-position: 0% 0;
    transform: translate(-15px, -50%);
  }
  15%,
  25% {
    background-position: 0% 0;
    transform: translate(0px, -50%);
  }
  75%,
  85% {
    background-position: 100% 0;
    transform: translate(50px, -50%);
  }
  100% {
    background-position: 100% 0;
    transform: translate(65px, -50%);
  }
}
</style>
