import { FluentResource } from '@fluent/bundle'

import enBreadcrumbs from './breadcrumbs/en.ftl?raw'
import ruBreadcrumbs from './breadcrumbs/ru.ftl?raw'

import enSidebarMessages from './sidebar/en.ftl?raw'
import ruSidebarMessages from './sidebar/ru.ftl?raw'

import enRolesMessages from './roles/en.ftl?raw'
import ruRolesMessages from './roles/ru.ftl?raw'

import enUsersMessages from './users/en.ftl?raw'
import ruUsersMessages from './users/ru.ftl?raw'

import enPermissionsMessages from './permissions/en.ftl?raw'
import ruPermissionsMessages from './permissions/ru.ftl?raw'

export default {
  ru: [
    new FluentResource(ruBreadcrumbs),
    new FluentResource(ruSidebarMessages),
    new FluentResource(ruRolesMessages),
    new FluentResource(ruUsersMessages),
    new FluentResource(ruPermissionsMessages),
  ],
  en: [
    new FluentResource(enBreadcrumbs),
    new FluentResource(enSidebarMessages),
    new FluentResource(enRolesMessages),
    new FluentResource(enUsersMessages),
    new FluentResource(enPermissionsMessages),
  ]
}
