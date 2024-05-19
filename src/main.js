import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/index.css';
import alertPlugin from './plugins/alertPlugin';

const app = createApp(App);
app.use(alertPlugin).mount('#app');
