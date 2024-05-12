import { AuthService } from '@classroom/auth/services'

export function useAuthService() {
  return new AuthService()
}
