<template>
  <div class="apartments-table__body">
    <ApartmentRow
        v-for="apartment in apartments"
        :key="apartment.id"
        :apartment="apartment"
        :max-floor="maxFloor"
    />
  </div>
</template>

<script setup lang="ts">
import type { Apartment } from '~/types/apartment'
import ApartmentRow from "~/components/ui/table/ApartmentRow.vue"

interface Props {
  apartments: Apartment[]
  maxFloor: number
}

defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>