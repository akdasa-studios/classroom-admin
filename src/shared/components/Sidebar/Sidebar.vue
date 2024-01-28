<template>
  <div class="Sidebar">
    <SidebarCompanyBrand
      :company-name="companyName"
      :company-logo-url="compnayLogoUrl"
    />

    <slot />

    <SidebarFooter>
      <SidebarProfileMenuItem
        :profile-name="profileName"
        :profile-image-url="profileImageUrl"
      />
    </SidebarFooter>
  </div>
</template>


<script setup lang="ts">
import { useTheme } from '@classroom/shared/composables'
import SidebarCompanyBrand from './SidebarCompanyBrand.vue'
import SidebarFooter from './SidebarFooter.vue'
import SidebarProfileMenuItem from './SidebarProfileMenuItem.vue'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  companyName: string,
  compnayLogoUrl: string,
  profileName: string,
  profileImageUrl: string
}>()


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const { panel } = useTheme()
</script>


<style scoped>
.Sidebar {
  --color-self:   v-bind(panel.hsl);
  --color-border: v-bind(panel.darken(.15).alpha(.5).hsl);

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 1.75rem;

  overflow-y: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  border-color: var(--color-border);
  border-right-width: 1px;
  border-right-style: solid;

  background-color: var(--color-self);
}
</style>