<template>
  <RangeFilter
      label="Стоимость квартиры, ₽"
      :range="priceRange"
      :filter-range="filterPriceRange"
      :step="500000"
      :format-function="formatPrice"
      @update:filter-range="$emit('update:filter-price-range', $event)"
  />
</template>

<script setup lang="ts">
import RangeFilter from '~/components/ui/RangeFilter.vue'
interface Props {
  priceRange: { min: number; max: number }
  filterPriceRange: [number, number]
}

interface Emits {
  (e: 'update:filter-price-range', value: [number, number]): void
}

defineProps<Props>()
defineEmits<Emits>()

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price)
}
</script>