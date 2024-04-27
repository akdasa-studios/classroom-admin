export type Role = {
  id: string
  name: string
  description: string
  permissions: string[]
}

export type Permission = {
  id: string
  name: string
  description: string
}

export const PermissionGroups = ['org', 'edu', 'fin', 'usr'] as const;

export const Permissions = [
  'org-roles-manage',
  'org-users-manage',
  'org-settings-manage',

  'edu-courses-manage',
  'edu-classes-manage',
  'edu-students-manage',
  'edu-homework-manage',

  'fin-reports-access',
  'fin-payments-manage',

  'usr-enrollment',
  'usr-homework',
] as const;
