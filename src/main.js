import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import PrimeVue from 'primevue/config';
import Router from '@/router/router.js'



createApp(App)
.use(PrimeVue)
.use(Router)
.mount('#app')
