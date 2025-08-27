<template>
  <div class="apartments">
    <div class="apartments__results">
      <h1 class="apartments__title">Квартиры</h1>

      <ApartmentTable
          :displayed-apartments="displayedApartments"
          :max-floor="maxFloor"
          :sort-field="sortField"
          :sort-ascending="sortAscending"
          @update:sort="handleSort"
      />

      <button
          v-if="hasMoreApartments"
          class="apartments__button-more"
          @click="loadMore"
          :disabled="apartmentsStore.loading"
      >
        {{ apartmentsStore.loading ? 'Загрузка...' : 'Показать ещё' }}
      </button>
    </div>

    <FiltersPanel
        ref="filtersRef"
        :room-options="roomOptions"
        :selected-rooms="selectedRooms"
        :price-range="priceRange"
        :filter-price-range="filterPriceRange"
        :area-range="areaRange"
        :filter-area-range="filterAreaRange"
        :is-fixed="isFiltersFixed"
        @update:selected-rooms="handleRoomChange"
        @update:filter-price-range="handlePriceChange"
        @update:filter-area-range="handleAreaChange"
        @clear-filters="clearFilters"
    />
  </div>
</template>

<script setup lang="ts">
import { useApartmentsStore } from '~/stores/apartments'
import { ref, computed, onMounted, type Ref } from 'vue'
import ApartmentTable from '~/components/ui/table/ApartmentTable.vue'
import FiltersPanel from '~/components/ui/filter/FiltersPanel.vue'

interface Apartment {
  id: number
  name: string
  area: number
  floor: number
  price: number
  rooms: number
  photo: string
}

interface PriceRange {
  min: number
  max: number
}

type SortField = keyof Pick<Apartment, 'area' | 'floor' | 'price' | 'id'>

const apartmentsStore = useApartmentsStore()

const filtersRef = ref<InstanceType<typeof FiltersPanel> | null>(null)
const isFiltersFixed = ref(false)

const itemsPerPage = ref(5)
const loadMoreCount = 20
const displayedCount = ref(itemsPerPage.value)

const sortField: Ref<SortField> = ref('id')
const sortAscending = ref(true)

const priceRange = computed<PriceRange>(() => apartmentsStore.getPriceRange)
const areaRange = computed<PriceRange>(() => apartmentsStore.getAreaRange)
const availableRooms = computed<number[]>(() => apartmentsStore.getUniqueRooms)

const selectedRooms = ref<number[]>([])
const filterPriceRange = ref<[number, number]>([priceRange.value.min, priceRange.value.max])
const filterAreaRange = ref<[number, number]>([areaRange.value.min, areaRange.value.max])

const maxFloor = computed<number>(() => apartmentsStore.getMaxFloor)

const roomOptions = computed(() => {
  const rooms = [1, 2, 3, 4]
  return rooms.map(room => ({
    value: room,
    label: `${room}к`,
    available: availableRooms.value.includes(room)
  }))
})

const filteredApartments = computed<Apartment[]>(() => {
  let filtered = [...apartmentsStore.getAllApartments] as Apartment[]

  if (selectedRooms.value.length > 0) {
    filtered = filtered.filter(apartment =>
        selectedRooms.value.includes(apartment.rooms)
    )
  }

  filtered = filtered.filter(apartment =>
      apartment.price >= filterPriceRange.value[0] &&
      apartment.price <= filterPriceRange.value[1]
  )

  filtered = filtered.filter(apartment =>
      apartment.area >= filterAreaRange.value[0] &&
      apartment.area <= filterAreaRange.value[1]
  )

  filtered.sort((a, b) => {
    const aValue = a[sortField.value]
    const bValue = b[sortField.value]

    if (aValue < bValue) return sortAscending.value ? -1 : 1
    if (aValue > bValue) return sortAscending.value ? 1 : -1
    return 0
  })

  return filtered
})

const displayedApartments = computed<Apartment[]>(() => {
  return filteredApartments.value.slice(0, displayedCount.value)
})

const hasMoreApartments = computed<boolean>(() => {
  return displayedCount.value < filteredApartments.value.length
})

const handleSort = (field: string) => {
  if (sortField.value === field) {
    sortAscending.value = !sortAscending.value
  } else {
    sortField.value = field as SortField
    sortAscending.value = true
  }
}

const handleRoomChange = (rooms: number[]) => {
  selectedRooms.value = rooms
}

const handlePriceChange = (range: [number, number]) => {
  filterPriceRange.value = range
}

const handleAreaChange = (range: [number, number]) => {
  filterAreaRange.value = range
}

const clearFilters = (): void => {
  selectedRooms.value = []
  filterPriceRange.value = [priceRange.value.min, priceRange.value.max]
  filterAreaRange.value = [areaRange.value.min, areaRange.value.max]
  sortField.value = 'id'
  sortAscending.value = true
  displayedCount.value = itemsPerPage.value
}

const loadMore = (): void => {
  displayedCount.value += loadMoreCount
}

const initializeFilters = (): void => {
  filterPriceRange.value = [priceRange.value.min, priceRange.value.max]
  filterAreaRange.value = [areaRange.value.min, areaRange.value.max]
}

onMounted(() => {
  if (apartmentsStore.getAllApartments.length === 0) {
    apartmentsStore.fetchApartments().then(initializeFilters)
  } else {
    initializeFilters()
  }
})

watch(priceRange, (newRange) => {
  filterPriceRange.value = [newRange.min, newRange.max]
}, { deep: true })

watch(areaRange, (newRange) => {
  filterAreaRange.value = [newRange.min, newRange.max]
}, { deep: true })

watch([priceRange, areaRange], () => {
  initializeFilters()
}, { immediate: true })

</script>

<style lang="scss" scoped>

</style>