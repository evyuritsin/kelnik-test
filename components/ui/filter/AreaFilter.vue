<template>
  <RangeFilter
      label="Площадь, м²"
      :range="areaRange"
      :filter-range="filterAreaRange"
      :step="10"
      @update:filter-range="$emit('update:filter-area-range', $event)"
  />
</template>

<script setup lang="ts">
import RangeFilter from '~/components/ui/RangeFilter.vue'
interface Props {
  areaRange: { min: number; max: number }
  filterAreaRange: [number, number]
}

interface Emits {
  (e: 'update:filter-area-range', value: [number, number]): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>