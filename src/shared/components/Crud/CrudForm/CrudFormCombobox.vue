<template>
  <div class="CrudFormCombobox">
    <div class="label">
      {{ label }}
    </div>
    <div class="input-section">
      <Input
        v-model="query"
        v-bind="$attrs"
      />
    </div>
  </div>

  <div 
    v-if="isDropdownOpen"
    class="CrudFormComboboxList"
  >
    <div 
      v-for="item in items"
      :key="item.id"
      @click="() => onItemClicked(item.id, item.label)"
    >
      <slot :item="item" />
    </div>
  </div>
</template>


<script setup lang="ts" generic="TItem extends CombobxItem">
import { ref, watch, toRefs } from 'vue'
import { Input } from '@classroom/shared/components'

// --- Models ------------------------------------------------------------------
export type CombobxItem = {
  id: string
  label: string
}

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  label: string
  items: TItem[] 
}>()

// --- State -------------------------------------------------------------------
const value = defineModel<string>({ required: true })
const query = defineModel<string>('query')
const selectedQuery = ref("{nothing-selected}")
const isDropdownOpen = ref(false)
const { items } = toRefs(props)

watch(items, () => isDropdownOpen.value = selectedQuery.value != query.value)// || items.value.length !== 0)

// --- Handlers ----------------------------------------------------------------
function onItemClicked(id: string, label: string) {
  value.value = id
  query.value = label
  selectedQuery.value = label
  isDropdownOpen.value = false
}
</script>


<style scoped>
.CrudFormCombobox {
  margin-top: var(--form-margin);
  margin-bottom: var(--form-margin);
}

.CrudFormComboboxList {
  background-color: white;
  display: flex;
  position: absolute;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  /* width: 100%; */
  /* line-height: 1.25rem; */
  z-index: 999999;
}

.label {
  margin-bottom: var(--form-margin-label);
}
</style>
