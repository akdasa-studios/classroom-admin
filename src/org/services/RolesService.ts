import { RestRepository } from '@akd-studios/framework-persistence-rest/repository'
import { UuidIdentity } from '@akd-studios/framework/domain'
import { Role, type RoleIdentity } from '@classroom/core/aggregates'


type RoleScheme = Pick<
  Role, 'name' | 'description' | 'permissions'
> & { id: string }


const RoleSerializer = (
  from: Role
): RoleScheme => ({
  id: from.id.value,
  name: from.name,
  description: from.description,
  permissions: from.permissions
})

const RoleDeserializer = (
  from: RoleScheme
): Role => new Role(
  new UuidIdentity(from.id),
  from.name,
  from.description,
  from.permissions
)

export class RolesService {
  _rolesRepository = new RestRepository<Role, RoleScheme>(
    'http://localhost:3000/roles', RoleSerializer, RoleDeserializer)

  async getRole(roleId: RoleIdentity): Promise<Role|undefined> {
    return this._rolesRepository.get(roleId)
  }

  async getAllRoles(): Promise<readonly Role[]> {
    const response = await this._rolesRepository.all()
    return response.entities
  }

  async saveRole(role: Role) {
    await this._rolesRepository.save(role)
  }
}