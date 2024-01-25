import { RolesService } from "@/org/services"

const ROLES_SERVICE = new RolesService()

export function useRolesService() {
  return ROLES_SERVICE
}
