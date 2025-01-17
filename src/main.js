import { createApp } from 'vue'
import './assets/styles/main.sass'
import App from './App.vue'
import ElementPlus from'element-plus'
import 'element-plus/dist/index.css'

const app =createApp(App)

app.use(ElementPlus).mount('#app');
