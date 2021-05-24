import { createApp } from 'vue';
import App from './App.vue';
import router from './config/router.js';

// 1. 定义路由组件.
// 也可以从其他文件导入

const app = createApp(App);
app.use(router).mount('#app')
