import { FluentResource } from '@fluent/bundle'

import enBreadcrumbs from './i18n/breadcrumbs/en.ftl?raw'
import ruBreadcrumbs from './i18n/breadcrumbs/ru.ftl?raw'

import enSidebarMessages from './i18n/sidebar/en.ftl?raw'
import ruSidebarMessages from './i18n/sidebar/ru.ftl?raw'

import enRolesMessages from './i18n/roles/en.ftl?raw'
import ruRolesMessages from './i18n/roles/ru.ftl?raw'

import enUsersMessages from './i18n/users/en.ftl?raw'
import ruUsersMessages from './i18n/users/ru.ftl?raw'

import enPermissionsMessages from './i18n/permissions/en.ftl?raw'
import ruPermissionsMessages from './i18n/permissions/ru.ftl?raw'

import enCrudMessages from './i18n/crud/en.ftl?raw'
import ruCrudMessages from './i18n/crud/ru.ftl?raw'

export default {
  ru: [
    new FluentResource(ruBreadcrumbs),
    new FluentResource(ruSidebarMessages),
    new FluentResource(ruRolesMessages),
    new FluentResource(ruUsersMessages),
    new FluentResource(ruPermissionsMessages),
    new FluentResource(ruCrudMessages),
  ],
  en: [
    new FluentResource(enBreadcrumbs),
    new FluentResource(enSidebarMessages),
    new FluentResource(enRolesMessages),
    new FluentResource(enUsersMessages),
    new FluentResource(enPermissionsMessages),
    new FluentResource(enCrudMessages),
  ]
}