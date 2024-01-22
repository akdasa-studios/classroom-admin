<template>
  <div class="space-y-4">
    <CrudFormSectionHeader
      title="Role"
      description="This information will be displayed publicly so be careful what you share."
    />
    <CrudFormTextInput label="Name" />
    <CrudFormTextareaInput label="Description" />
  </div>

  <div class="mt-10 space-y-4">
    <CrudFormSectionHeader
      title="Admin's permisssions"
      description="List of the permissions user can perform as an administrator of the school"
    />
    <CrudFormCheckbox
      title="Manage roles"
      description="User will be able to create, edit and delet roles"
    />
    <CrudFormCheckbox
      title="Manage users"
      description="User will be able to invite new members to the team and manage their permissions"
    />
    <CrudFormCheckbox
      title="Manage school"
      description="User will be able to edit settings of the school"
    />

    <CrudFormSectionHeader
      title="School's permission"
      description="List of permissions user han hav access to as an member of the school."
    />
    <CrudFormCheckbox
      title="Manage courses"
      description="User will be able to create, edit and delete courses"
    />
    <CrudFormCheckbox
      title="Manage classes"
      description="User will be able to manage classes"
    />
    <CrudFormCheckbox
      title="Manage students"
      description="User will be able to manage students"
    />
    <CrudFormCheckbox
      title="Manage homework"
      description="User will be able to manage homework"
    />

    <CrudFormSectionHeader
      title="Financial permissions"
      description="List of permissions user can do with money."
    />
    <CrudFormCheckbox
      title="Financial reports"
      description="User can see information about finances"
    />
    <CrudFormCheckbox
      title="Put money in their pocket"
      description="He can gett all the money"
    />
  </div>

  <CrudFormActionButtons />
</template>


<script setup lang="ts">
import { CrudFormActionButtons, CrudFormSectionHeader, CrudFormTextInput, CrudFormTextareaInput, CrudFormCheckbox } from '@/admin/components';
</script>


<fluent locale="en">
role = Role
role-description = Description
roles = Roles
roles-description = A list of all the roles in your school including their name and permissions.
</fluent>


<fluent locale="ru">
role = Роль
role-description = Описание
roles = Роли
roles-description = Список всех ролей в вашей школе, включая их название и разрешения.
</fluent>
