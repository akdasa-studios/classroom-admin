import { useConfig } from "@classroom/shared/composables"
import { watch, type Ref } from "vue"

export async function runConfigPersistence() {
  // --- Dependencies -----------------------------------
  const config = useConfig()

  // Bind config to storage
  bind(config.accessToken,   'auth.token.access', '')
  bind(config.refreshToken,  'auth.token.refresh', '')
  bind(config.userId,  'auth.user.id', '')
  bind(config.email,   'auth.user.email', '')
  bind(config.baseUrl, 'api.baseUrl', '')

  // --- Helpers ----------------------------------------
  function bind<T>(config: Ref<string>, key: string, defaultValue: string) {
    const storedValue = localStorage.getItem(key)
    if (storedValue) { config.value = storedValue || defaultValue }
    watch(config, (value) => { localStorage.setItem(key, value) })
    console.log(`Bound ${key} to storage: ${config.value}`)
  }
}
