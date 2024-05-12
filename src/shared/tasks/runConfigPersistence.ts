import { useConfig } from "@classroom/shared/composables"
import { watch, type Ref } from "vue"

export async function runConfigPersistence() {
  // --- Dependencies -----------------------------------
  const config = useConfig()

  // Bind config to storage
  bind(config.accessToken,   'auth.token.access', '')
  bind(config.refreshToken,  'auth.token.refresh', '')
  bind(config.userId, 'auth.user.id', '')
  bind(config.email,  'auth.user.email', '')

  // --- Helpers ----------------------------------------
  function bind<T>(config: Ref<string>, key: string, defaultValue: string) {
    config.value = localStorage.getItem(key) || defaultValue
    watch(config, (value) => { localStorage.setItem(key, value) })
    console.log(`Bound ${key} to storage: ${config.value}`)
  }
}
