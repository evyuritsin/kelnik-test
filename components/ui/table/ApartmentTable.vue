<template>
  <div class="apartments-table">
    <ApartmentTableHead
        :sort-field="sortField"
        :sort-ascending="sortAscending"
        @sort="sortBy"
    />
    <ApartmentTableBody
        :apartments="displayedApartments"
        :max-floor="maxFloor"
    />
  </div>
</template>

<script setup lang="ts">
import type { Apartment } from '~/types/apartment'

interface Props {
  displayedApartments: Apartment[]
  maxFloor: number
  sortField: string
  sortAscending: boolean
}

interface Emits {
  (e: 'sort', field: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const sortBy = (field: string) => {
  emit('sort', field)
}
</script>