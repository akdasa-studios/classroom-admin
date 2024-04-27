export type UserViewModel = {
  id: string
  name: string
  email: string
  title?: string
  department?: string
  status: 'invited' | 'active' | 'inactive'
  roles: string[]
  avatarUrl?: string
}
