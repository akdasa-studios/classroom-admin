export interface Role {
  id: string,
  name: string,
  description: string,
  permissions: string[]
}

export interface Permission {
  id: string
  name: string
  description: string
}

export interface PermissionsGroup {
  id: string
  name: string
  description: string
  permissions: Permission[]
}

export const EmptyRole: Role = {
  id: "",
  name: "",
  description: "",
  permissions: []
} 
