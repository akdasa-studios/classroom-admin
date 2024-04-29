export type User = {
  id: string
  name: string
  email: string
  title?: string
  department?: string
  statusType: 'invited' | 'active' | 'inactive'
  statusText: string
  roles: string[]
  avatarUrl?: string
}

export type ColumnNames = {
  name: string,
  title: string,
  roles: string,
  status: string
}

