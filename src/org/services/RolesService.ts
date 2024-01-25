import { UuidIdentity } from "@akd-studios/framework/domain"
import { Role, type RoleIdentity } from "@core/aggregates"
import { Permission } from "@core/aggregates/permissions"

export class RolesService {
  async getRole(roleId: RoleIdentity): Promise<Role> {
    return new Role(new UuidIdentity(roleId.value), "Role X", "Description", [Permission.OrgRolesManage])
  }

  async getAllRoles(): Promise<Role[]> {
    return [
      new Role(new UuidIdentity(), "Role 1", "Description", [Permission.OrgRolesManage]),
      new Role(new UuidIdentity(), "Role 2", "Description", [Permission.OrgRolesManage]),
      new Role(new UuidIdentity(), "Role 3", "Description", [Permission.OrgRolesManage]),
      new Role(new UuidIdentity(), "Role 4", "Description", [Permission.OrgRolesManage]),
    ]
  }
}