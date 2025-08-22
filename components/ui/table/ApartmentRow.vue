<template>
  <div class="apartments-table__row">
    <div class="apartments-table__cell apartments-table__cell--image">
      <img :src="getImageUrl(apartment.photo)" :alt="apartment.name" class="apartments-table__image">
    </div>
    <div class="apartments-table__row--content">
      <div class="apartments-table__cell apartments-table__cell--title">
        <span>{{ apartment.name }}</span>
      </div>
      <div class="apartments-table__cell apartments-table__cell--area">
        <span>{{ formatNumber(apartment.area) }}</span>
      </div>
      <div class="apartments-table__cell apartments-table__cell--floor">
        <span>{{ apartment.floor }}</span>
        <span class="apartments-table__floor-total"> из {{ maxFloor }}</span>
      </div>
      <div class="apartments-table__cell apartments-table__cell--price">
        <span>{{ formatPrice(apartment.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Apartment } from '~/types/apartment'

interface Props {
  apartment: Apartment
  maxFloor: number
}

defineProps<Props>()

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const formatNumber = (num: number): string => {
  return num.toFixed(1).replace('.', ',')
}

const getImageUrl = (photoPath: string): string => {
  if (photoPath.startsWith('/')) {
    return photoPath
  }
  return `/images/plans/${photoPath}`
}
</script>

<style lang="scss" scoped>

</style>