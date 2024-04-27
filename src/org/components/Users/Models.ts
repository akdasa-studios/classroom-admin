export type User = {
  id: string
  name: string
  email: string
  title?: string
  department?: string
  status: 'invited' | 'active' | 'inactive'
  roles: string[]
  avatarUrl?: string
}

export const EmptyUser: User = {
  id: "",
  name: "",
  email: "",
  title: "",
  department: "",
  status: "inactive",
  roles: [],
  avatarUrl: "",
} 

