import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { fluent } from './i18n'
import router from './router'

/** Theme */
import { useThemeManager } from './shared/composables'
const themeManager = useThemeManager()
themeManager.registerColor('panel', 240, 50, 98)


const app = createApp(App)
app.use(router)
app.use(fluent)

app.mount('#app')
