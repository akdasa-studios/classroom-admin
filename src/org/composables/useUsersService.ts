import { UsersService } from '@classroom/org/services'

export function useUsersService() {
  return new UsersService()
}
