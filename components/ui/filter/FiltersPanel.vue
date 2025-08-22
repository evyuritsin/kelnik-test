<template>
  <div ref="filtersRef" class="apartments__filters" :class="{ fixed: isFixed }">
    <RoomFilter
        :room-options="roomOptions"
        :selected-rooms="selectedRooms"
        @update:selected-rooms="handleRoomChange"
    />
    <PriceFilter
        :price-range="priceRange"
        :filter-price-range="filterPriceRange"
        @update:filter-price-range="handlePriceChange"
    />
    <AreaFilter
        :area-range="areaRange"
        :filter-area-range="filterAreaRange"
        @update:filter-area-range="handleAreaChange"
    />
    <FiltersClear @click="handleClearFilters" />
  </div>
</template>

<script setup lang="ts">
import RoomFilter from '~/components/ui/filter/RoomFilter.vue'
import PriceFilter from '~/components/ui/filter/PriceFilter.vue'
import AreaFilter from '~/components/ui/filter/AreaFilter.vue'
import FiltersClear from "~/components/ui/filter/FiltersClear.vue";

interface Props {
  roomOptions: any[]
  selectedRooms: number[]
  priceRange: { min: number; max: number }
  filterPriceRange: [number, number]
  areaRange: { min: number; max: number }
  filterAreaRange: [number, number]
  isFixed: boolean
}

const props = defineProps<Props>()

const emit = defineEmits([
  'update:selected-rooms',
  'update:filter-price-range',
  'update:filter-area-range',
  'clear-filters'
])

// Обработчики для лучшей читаемости
const handleRoomChange = (value: number[]) => {
  emit('update:selected-rooms', value)
}

const handlePriceChange = (value: [number, number]) => {
  emit('update:filter-price-range', value)
}

const handleAreaChange = (value: [number, number]) => {
  emit('update:filter-area-range', value)
}

const handleClearFilters = () => {
  emit('clear-filters')
}

</script>
<style lang="scss" scoped>

</style>