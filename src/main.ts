import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { fluent } from './i18n'
import router from './router'

/** Theme */
import { useThemeManager } from './shared/composables'
const themeManager = useThemeManager()
themeManager.registerColor('panel',   240, 100, 98)
themeManager.registerColor('primary', 243, 75,  59)
themeManager.registerColor('success', 144, 65,  60)
themeManager.registerColor('danger',  351, 81,  59)


const app = createApp(App)
app.use(router)
app.use(fluent)

app.mount('#app')
