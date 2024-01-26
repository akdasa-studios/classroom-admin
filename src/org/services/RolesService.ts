import { Role, type RoleIdentity } from "@core/aggregates"


export class RolesService {
  _roles = new Map<string, Role>()

  async getRole(roleId: RoleIdentity): Promise<Role|undefined> {
    return this._roles.get(roleId.value)
  }

  async getAllRoles(): Promise<Role[]> {
    return Array.from(this._roles.values())
  }

  async saveRole(role: Role) {
    this._roles.set(role.id.value, role)
  }
}