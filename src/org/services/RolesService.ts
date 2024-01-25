import { UuidIdentity } from "@akd-studios/framework/domain"
import { Role } from "@core/aggregates"
import { Permission } from "@core/aggregates/permissions"

export class RolesService {
  async getAllRoles(): Promise<Role[]> {
    return [
      new Role(new UuidIdentity(), "Role", "Description", [Permission.OrgRolesManage]),
      new Role(new UuidIdentity(), "Role", "Description", [Permission.OrgRolesManage]),
      new Role(new UuidIdentity(), "Role", "Description", [Permission.OrgRolesManage]),
      new Role(new UuidIdentity(), "Role", "Description", [Permission.OrgRolesManage]),
    ]
  }
}