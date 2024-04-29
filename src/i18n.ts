import { FluentBundle } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

import orgResources from './org/i18n'
import educationResources from './education/i18n'
import sharedResources from './shared/i18n'

export const enBundle = new FluentBundle('en')
export const ruBundle = new FluentBundle('ru')

// ru:
orgResources.ru.forEach(x => ruBundle.addResource(x))
educationResources.ru.forEach(x => ruBundle.addResource(x))
sharedResources.ru.forEach(x => ruBundle.addResource(x))

// en:
orgResources.en.forEach(x => enBundle.addResource(x))
educationResources.en.forEach(x => ruBundle.addResource(x))
sharedResources.en.forEach(x => ruBundle.addResource(x))


export const fluent = createFluentVue({
  bundles: [ruBundle]
})
