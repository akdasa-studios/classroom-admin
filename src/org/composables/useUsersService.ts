import { UsersService } from '@classroom/org/services'

const USERS_SERVICE = new UsersService()

export function useUsersService() {
  return USERS_SERVICE
}
