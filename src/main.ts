import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { fluent } from './i18n'
import router from './router'


const app = createApp(App)
app.use(router)
app.use(fluent)

app.mount('#app')
