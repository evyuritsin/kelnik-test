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
        @click="$emit('sort', 'area')"
    />
    <SortableHeader
        field="floor"
        label="Этаж"
        :current-field="sortField"
        :ascending="sortAscending"
        @click="$emit('sort', 'floor')"
    />
    <SortableHeader
        field="price"
        label="Цена, ₽"
        :current-field="sortField"
        :ascending="sortAscending"
        @click="$emit('sort', 'price')"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  sortField: string
  sortAscending: boolean
}

defineProps<Props>()
defineEmits(['sort'])
</script>