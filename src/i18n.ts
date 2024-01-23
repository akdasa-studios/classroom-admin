import { FluentBundle } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

import adminResources from './admin/i18n'

export const enBundle = new FluentBundle('en')
export const ruBundle = new FluentBundle('ru')

// ru:
adminResources.ru.forEach(x => ruBundle.addResource(x))

// en:
adminResources.en.forEach(x => enBundle.addResource(x))


export const fluent = createFluentVue({
  bundles: [ruBundle]
})