import { createApp, h } from 'vue';
import ErrorAlert from '@/components/ErrorAlert.vue';

export default {
  install(app) {
    // 얼럿 인스턴스 생성
    const alertInstance = createApp(ErrorAlert).mount(document.createElement('div'));

    // body에 얼럿 인스턴스 삽입
    document.body.appendChild(alertInstance.$el);

    // 전역 함수 등록
    app.config.globalProperties.$alert = alertInstance.handleOpenAlert;
  },
};
