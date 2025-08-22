<template>
  <div class="apartments-table__head">
    <div class="apartments-table__head-item">
      <span>Планировка</span>
    </div>
    <div class="apartments-table__head-item">
      <span>Квартира</span>
    </div>
    <SortableHeader
        field="area"
        label="S, м²"
        :current-field="sortField"
        :ascending="sortAscending"
        @click="handleSort('area')"
    />
    <SortableHeader
        field="floor"
        label="Этаж"
        :current-field="sortField"
        :ascending="sortAscending"
        @click="handleSort('floor')"
    />
    <SortableHeader
        field="price"
        label="Цена, ₽"
        :current-field="sortField"
        :ascending="sortAscending"
        @click="handleSort('price')"
    />
  </div>
</template>

<script setup lang="ts">
import SortableHeader from "~/components/ui/table/SortableHeader.vue"
interface Props {
  sortField: string
  sortAscending: boolean
}

interface Emits {
  (e: 'sort', field: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleSort = (field: string) => {
  emit('sort', field)
}
</script>

<style lang="scss" scoped>

</style>