import { FluentResource } from '@fluent/bundle'

import enCommonMessages from './common/en.ftl?raw'
import ruCommonMessages from './common/ru.ftl?raw'

export default {
  ru: [
    new FluentResource(ruCommonMessages),
  ],
  en: [
    new FluentResource(enCommonMessages),
  ]
}
