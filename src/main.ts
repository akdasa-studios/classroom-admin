import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { fluent } from './i18n'
import router from './router'

/** Theme */
import { useThemeManager } from './shared/composables'
const themeManager = useThemeManager()

const hue = 0
const sat = 15
themeManager.registerColor('panel',   hue, sat, 98)
themeManager.registerColor('primary', 243, 75,  59)
themeManager.registerColor('success', 144, 65,  60)
themeManager.registerColor('warning', 46, 100,  52)
themeManager.registerColor('danger',  351, 81,  59)

themeManager.registerColor('text',    hue, sat / 2,  5)


const app = createApp(App)
app.use(router)
app.use(fluent)

app.mount('#app')
