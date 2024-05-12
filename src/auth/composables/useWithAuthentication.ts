import { useAuthService } from '@classroom/auth/composables'
import { useConfig } from '@classroom/shared/composables'
import type { Service } from '@classroom/shared/services'

export function useWithAuthentication<T extends Service>(
  service: T
): T {
  const authService = useAuthService()
  const config = useConfig()
  service.baseUrl = config.baseUrl.value
  service.interceptions.push(
    {
      onRequest: () => ({
        headers: { 'authorization': `Bearer ${config.accessToken.value}` }
      })
    },
    {
      onError: async (error) => {
        const response = await authService.refreshToken({
          refreshToken: config.refreshToken.value
        })
        config.accessToken.value = response.accessToken
        config.refreshToken.value = response.refreshToken
        return { retry: true }
      }
    },
  )

  return service
}
