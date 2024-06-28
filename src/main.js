import { createApp } from 'vue'
import App from './App.vue'
import antDesign from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'
import '@/router/premission.js'
import pinia from './store/index.js'
import './style.css'
import mitt from 'mitt';

const app = createApp(App)

const $mitt = mitt()
app.config.globalProperties.$mitt = $mitt

app
.use(pinia)
.use(antDesign)
.use(router)
.use(ArcoVue, 
  {componentPrefix: 'arco'})
  .mount('#app')
