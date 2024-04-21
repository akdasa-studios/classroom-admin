import { Permission, Role as RoleAggregate } from '@classroom/core/aggregates'
import { type Role as RoleViewModel } from  '@classroom/org/components'

export function roleToViewModel(role: RoleAggregate): RoleViewModel {
  return {
    id: role.id.value,
    name: role.name,
    description: role.description,
    permissions: role.permissions
  }
}

export function updateModel(role: RoleAggregate, view: RoleViewModel) {
  role.name = view.name
  role.description = view.description
  role.permissions = view.permissions as Permission[]
}
