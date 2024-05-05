import { FluentResource } from '@fluent/bundle'

import enCoursesMessages from './courses/en.ftl?raw'
import ruCoursesMessages from './courses/ru.ftl?raw'

import enGroupsMessages from './groups/en.ftl?raw'
import ruGroupsMessages from './groups/ru.ftl?raw'

import enEnrollmentsMessages from './enrollments/en.ftl?raw'
import ruEnrollmentsMessages from './enrollments/ru.ftl?raw'

export default {
  ru: [
    new FluentResource(ruCoursesMessages),
    new FluentResource(ruGroupsMessages),
    new FluentResource(ruEnrollmentsMessages),
  ],
  en: [
    new FluentResource(enCoursesMessages),
    new FluentResource(enGroupsMessages),
    new FluentResource(enEnrollmentsMessages),
  ]
}
