<template>
  <div class="apartments-table">
    <ApartmentTableHead
        :sort-field="sortField"
        :sort-ascending="sortAscending"
        @sort="handleSort"
    />
    <ApartmentTableBody
        :apartments="displayedApartments"
        :max-floor="maxFloor"
    />
  </div>
</template>

<script setup lang="ts">
import type { Apartment } from '~/types/apartment'
import ApartmentTableHead from "~/components/ui/table/ApartmentTableHead.vue"
import ApartmentTableBody from "~/components/ui/table/ApartmentTableBody.vue"

interface Props {
  displayedApartments: Apartment[]
  maxFloor: number
  sortField: string
  sortAscending: boolean
}

interface Emits {
  (e: 'update:sort', field: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleSort = (field: string) => {
  emit('update:sort', field)
}
</script>
<style lang="scss" scoped>

</style>