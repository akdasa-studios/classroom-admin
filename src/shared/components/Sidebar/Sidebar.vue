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
import SidebarProfileMenuItem from './SidebarProfileMenuItem.vue'
import SidebarCompanyBrand from './SidebarCompanyBrand.vue'
import SidebarFooter from './SidebarFooter.vue'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  companyName: string,
  compnayLogoUrl: string,
  profileName: string,
  profileImageUrl: string
}>()
</script>


<style scoped>
.Sidebar {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 1.75rem;

  overflow-y: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #E5E7EB;
  background-color: #ffffff;
}
</style>