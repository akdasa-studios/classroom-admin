import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fluent } from './i18n'


const app = createApp(App)
app.use(router)
app.use(fluent)

app.mount('#app')
