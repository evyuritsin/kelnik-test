<template>
  <div ref="filtersRef" class="apartments__filters" :class="{ fixed: isFixed }">
    <RoomFilter
        :room-options="roomOptions"
        :selected-rooms="selectedRooms"
        @selected-rooms="$emit('update:selected-rooms', $event)"
    />
    <PriceFilter
        :price-range="priceRange"
        :filter-price-range="filterPriceRange"
        @update:filter-price-range="$emit('update:filter-price-range', $event)"
    />
    <AreaFilter
        :area-range="areaRange"
        :filter-area-range="filterAreaRange"
        @update:filter-area-range="$emit('update:filter-area-range', $event)"
    />
    <FiltersClear @click="$emit('clear-filters')" />
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

defineProps<Props>()
defineEmits(['update:selected-rooms', 'update:filter-price-range', 'update:filter-area-range', 'clear-filters'])
</script>

<style lang="scss" scoped>
.apartments {
  $self: &;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 96px 80px;
  background: #fff;
  gap: 80px;
  position: relative;

  &__filters {
    width: 400px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    gap: 24px;
    padding: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(174.45, 227.85, 178.29, 0.3), rgba(149, 208, 161, 0.3) 100%);

    &.fixed {
      position: fixed;
      top: 96px;
      right: 80px;
      z-index: 100;
    }
  }

}
@media (max-width: 1240px) {
  .apartments {
    padding: 48px 54px;
    gap: 24px;

    &__filters {
      width: 320px;
      min-width: 320px;
      height: 320px;
      min-height: 320px;
      padding: 20px;

      &.fixed {
        top: 48px;
        right: 54px;
      }
    }
  }
}
@media (max-width: 900px) {
  .apartments {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 40px;
    padding: 48px 24px;

    &__filters {
      width: 100%;
      min-width: unset;

      &.fixed {
        position: static;
      }
    }
  }
}
</style>