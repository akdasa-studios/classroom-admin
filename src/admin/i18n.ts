import { FluentResource } from '@fluent/bundle'

import ruSidebarMessages from './i18n/sidebar/ru.ftl?raw'
import enSidebarMessages from './i18n/sidebar/en.ftl?raw'

import ruRolesMessages from './i18n/roles/ru.ftl?raw'
import enRolesMessages from './i18n/roles/en.ftl?raw'

import ruPermissionsMessages from './i18n/permissions/ru.ftl?raw'
import enPermissionsMessages from './i18n/permissions/en.ftl?raw'

import ruCrudMessages from './i18n/crud/ru.ftl?raw'
import enCrudMessages from './i18n/crud/en.ftl?raw'

export default {
  ru: [
    new FluentResource(ruSidebarMessages),
    new FluentResource(ruRolesMessages),
    new FluentResource(ruPermissionsMessages),
    new FluentResource(ruCrudMessages),
  ],
  en: [
    new FluentResource(enSidebarMessages),
    new FluentResource(enRolesMessages),
    new FluentResource(enPermissionsMessages),
    new FluentResource(enCrudMessages),
  ]
}