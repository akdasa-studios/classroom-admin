import { AuthService } from '@classroom/auth/services'
import { useConfig } from '@classroom/shared/composables'

export function useAuthService() {
  const config = useConfig()
  const service = new AuthService()
  service.baseUrl = config.baseUrl.value
  return service
}
