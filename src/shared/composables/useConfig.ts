import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useConfig = createGlobalState(() => {
  const userId = ref('')
  const accessToken = ref('')
  const refreshToken = ref('')
  const email = ref('')
  const baseUrl = ref(import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000')

  console.log('Config initialized', { userId, accessToken, refreshToken, email, baseUrl })

  return { userId, accessToken, refreshToken, email, baseUrl }
})
