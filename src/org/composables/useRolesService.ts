import { RolesService } from '@classroom/org/services'

const ROLES_SERVICE = new RolesService()

export function useRolesService() {
  return ROLES_SERVICE
}
