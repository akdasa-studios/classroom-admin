import { FluentResource } from '@fluent/bundle'

import enCoursesMessages from './courses/en.ftl?raw'
import ruCoursesMessages from './courses/ru.ftl?raw'

export default {
  ru: [
    new FluentResource(ruCoursesMessages),
  ],
  en: [
    new FluentResource(enCoursesMessages),
  ]
}
