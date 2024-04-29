// --- Interface ---------------------------------------------------------------

export type User = {
  id: string
  name: string
  email: string
  title?: string
  department?: string
  status: 'invited' | 'active' | 'inactive'
  roleIds: string[]
  avatarUrl?: string
}

export type Role = {
  id: string
  name: string
  description: string
}

export const EmptyUser: User = {
  id: "",
  name: "",
  email: "",
  title: "",
  department: "",
  status: "inactive",
  roleIds: [],
  avatarUrl: "",
} 


// --- Appearence --------------------------------------------------------------

export type FormHeader = {
  title: string,
  description: string,
}

export type FormFields = {
  name: string,
  email: string,
  department: string,
  title: string,
  roles: string,
}

  
