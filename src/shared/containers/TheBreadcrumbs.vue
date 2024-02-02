<template>
  <Breadcrumbs
    :stack="cmpBreadcrumps"
    @click="onBreadcrumbClicked"
  />
</template>


<script setup lang="ts">
import { Breadcrumbs, type Breadcrumb } from '@classroom/shared/components'
import { useFluent } from 'fluent-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const route = useRoute()
const router = useRouter()
const fluent = useFluent()

/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const routeBreadcrumbs = computed<string[]>(() => (route.meta.breadcrumbs || []) as string[])
const cmpBreadcrumps   = computed(() => routeBreadcrumbs.value.map(x => makeBreadcrumb(x)))

/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

function onBreadcrumbClicked(
  breadcrumb: Breadcrumb,
  indexFromTop: number
) {
  router.push(breadcrumb.to)
}


/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

/**
 * Creates a breadcrumb object.
 *
 * @param {string} id - The ID of the breadcrumb.
 * @returns {Breadcrumb} - The created breadcrumb object.
 */
function makeBreadcrumb(
  id: string
): Breadcrumb {
  return {
    name: fluent.$t(`breadcrumbs-${id}`),
    to: { name: id }
  }
}
</script>