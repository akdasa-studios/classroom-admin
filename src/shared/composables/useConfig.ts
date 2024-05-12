import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useConfig = createGlobalState(() => {
  const userId = ref('')
  const accessToken = ref('')
  const refreshToken = ref('')
  const email = ref('')
  const baseUrl = ref('http://localhost:3000')

  return { userId, accessToken, refreshToken, email }
})
