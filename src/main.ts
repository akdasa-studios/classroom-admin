import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createFluentVue } from 'fluent-vue'
import { FluentBundle } from '@fluent/bundle'

const enBundle = new FluentBundle('ru')

const fluent = createFluentVue({
  bundles: [enBundle]
})


const app = createApp(App)
app.use(router)
app.use(fluent)

app.mount('#app')
