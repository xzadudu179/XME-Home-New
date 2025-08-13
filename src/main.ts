import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LenisVue from 'lenis/vue'
createApp(App).use(router).use(LenisVue).mount('#app')