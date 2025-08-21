<template>
  <div class="apartments">
    <div class="apartments__results">
      <h1 class="apartments__title">Квартиры</h1>
      <div class="apartments-table">
        <div class="apartments-table__head">
          <div class="apartments-table__head-item">
            <span>Планировка</span>
          </div>
          <div class="apartments-table__head-item">
            <span>Квартира</span>
          </div>
          <div class="apartments-table__head-item apartments-table__head-item--sortable" @click="sortBy('area')">
            <span :class="{ 'apartments-table__arrow--active': sortField === 'area' && sortAscending }">S, м²</span>
            <div class="apartments-table__arrows">
              <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': sortField === 'area' && sortAscending }" viewBox="0 0 6.85712 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857117" height="4.000000" fill="none">
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
              </svg>
              <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': sortField === 'area' && !sortAscending }" viewBox="0 0 6.85712 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857117" height="4.000000" fill="none">
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="apartments-table__head-item apartments-table__head-item--sortable" @click="sortBy('floor')">
            <span :class="{ 'apartments-table__arrow--active': sortField === 'floor' && sortAscending }">Этаж</span>
            <div class="apartments-table__arrows">
              <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': sortField === 'floor' && sortAscending }" viewBox="0 0 6.85712 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857117" height="4.000000" fill="none">
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
              </svg>
              <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': sortField === 'floor' && !sortAscending }" viewBox="0 0 6.85712 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857117" height="4.000000" fill="none">
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
                <path  d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="apartments-table__head-item apartments-table__head-item--sortable" @click="sortBy('price')">
            <span :class="{ 'apartments-table__arrow--active': sortField === 'price' && sortAscending }">Цена, ₽</span>
            <div class="apartments-table__arrows">
              <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': sortField === 'price' && sortAscending }" viewBox="0 0 6.85712 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857117" height="4.000000" fill="none">
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
              </svg>
              <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': sortField === 'price' && !sortAscending }" viewBox="0 0 6.85712 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6.857117" height="4.000000" fill="none">
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
                <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div class="apartments-table__body">
          <div
              v-for="apartment in displayedApartments"
              :key="apartment.id"
              class="apartments-table__row"
          >
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
        </div>
      </div>
      <button
          v-if="hasMoreApartments"
          class="apartments__button-more"
          @click="loadMore"
          :disabled="apartmentsStore.loading"
      >
        {{ apartmentsStore.loading ? 'Загрузка...' : 'Показать ещё' }}
      </button>
    </div>

    <div ref="filtersRef" class="apartments__filters">
      <div class="apartments-filter">
        <div class="apartments-filter__rooms">
          <button
              v-for="room in roomOptions"
              :key="room.value"
              :class="[
                'apartments-filter__room-btn',
                {
                  'apartments-filter__room-btn--active': selectedRooms.includes(room.value),
                  'apartments-filter__room-btn--disabled': !room.available
                }
              ]"
              @click="room.available ? toggleRoom(room.value) : null"
              :disabled="!room.available"
          >
            <span>{{ room.value }}к</span>
          </button>
        </div>
      </div>

      <div class="apartments-filter">
        <span class="apartments-filter__label">Стоимость квартиры, ₽</span>
        <div class="apartments-filter__range">
          <div class="apartments-filter__range-values">
            <div class="apartments-filter__range-value">
              <span>от</span>
              <span>{{ formatPrice(filterPriceRange[0]) }}</span>
            </div>
            <div class="apartments-filter__range-value">
              <span>до</span>
              <span>{{ formatPrice(filterPriceRange[1]) }}</span>
            </div>
          </div>
          <div class="slider-wrapper">
            <USlider
                class="apartments-filter__slider-component"
                v-model="filterPriceRange"
                :min="priceRange.min"
                :max="priceRange.max"
                :step="500000"
                range
                size="sm"
            />
          </div>

        </div>
      </div>

      <div class="apartments-filter">
        <span class="apartments-filter__label">Площадь, м²</span>
        <div class="apartments-filter__range">
          <div class="apartments-filter__range-values">
            <div class="apartments-filter__range-value">
              <span>от</span>
              <span>{{ filterAreaRange[0] }}</span>
            </div>
            <div class="apartments-filter__range-value">
              <span>до</span>
              <span>{{ filterAreaRange[1] }}</span>
            </div>
          </div>
          <div class="slider-wrapper">
            <USlider
                class="apartments-filter__slider-component"
                v-model="filterAreaRange"
                :min="areaRange.min"
                :max="areaRange.max"
                :step="10"
                range
                size="sm"
            />
          </div>
        </div>
      </div>

      <div class="apartments-filter__clear" @click="clearFilters">
        <span>Сбросить параметры</span>
        <svg viewBox="0 0 8.00004 8.00012" xmlns="http://www.w3.org/2000/svg" width="8.000042" height="8.000122" fill="none">
          <rect width="8.000043" height="8.000118" x="0.000000" y="0.000000" />
          <path d="M3.99996 5.22229L1.37727 7.84498C1.12213 8.10013 0.641687 8.03336 0.304183 7.69586C-0.0333213 7.35836 -0.100086 6.87792 0.15506 6.62277L2.77775 4.00008L0.155017 1.37735C-0.100129 1.1222 -0.0333645 0.641762 0.30414 0.304258C0.641644 -0.0332461 1.12208 -0.100011 1.37723 0.155135L3.99996 2.77787L6.62282 0.155017C6.87796 -0.100129 7.3584 -0.0333648 7.6959 0.30414C8.03341 0.641644 8.10017 1.12208 7.84503 1.37723L5.22217 4.00008L7.84498 6.62289C8.10013 6.87804 8.03336 7.35847 7.69586 7.69598C7.35836 8.03348 6.87792 8.10025 6.62277 7.8451L3.99996 5.22229Z" fill="rgb(255,0,0)" fill-rule="evenodd" />
          <path d="M3.99996 5.22229L1.37727 7.84498C1.12213 8.10013 0.641687 8.03336 0.304183 7.69586C-0.0333213 7.35836 -0.100086 6.87792 0.15506 6.62277L2.77775 4.00008L0.155017 1.37735C-0.100129 1.1222 -0.0333645 0.641762 0.30414 0.304258C0.641644 -0.0332461 1.12208 -0.100011 1.37723 0.155135L3.99996 2.77787L6.62282 0.155017C6.87796 -0.100129 7.3584 -0.0333648 7.6959 0.30414C8.03341 0.641644 8.10017 1.12208 7.84503 1.37723L5.22217 4.00008L7.84498 6.62289C8.10013 6.87804 8.03336 7.35847 7.69586 7.69598C7.35836 8.03348 6.87792 8.10025 6.62277 7.8451L3.99996 5.22229Z" fill="rgb(11,23,57)" fill-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApartmentsStore } from '~/stores/apartments'
import { ref, computed, onMounted, onUnmounted, type Ref } from 'vue'

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

interface RoomOption {
  value: number
  available: boolean
}

type SortField = keyof Pick<Apartment, 'area' | 'floor' | 'price' | 'id'>

const apartmentsStore = useApartmentsStore()

const filtersRef: Ref<HTMLElement | null> = ref(null)
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

const roomOptions = computed<RoomOption[]>(() => {
  const rooms = [1, 2, 3, 4]
  return rooms.map(room => ({
    value: room,
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

const sortBy = (field: SortField): void => {
  if (sortField.value === field) {
    sortAscending.value = !sortAscending.value
  } else {
    sortField.value = field
    sortAscending.value = true
  }
}

const toggleRoom = (room: number): void => {
  const index = selectedRooms.value.indexOf(room)
  if (index > -1) {
    selectedRooms.value.splice(index, 1)
  } else {
    selectedRooms.value.push(room)
  }
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

const handleScroll = (): void => {
  if (!filtersRef.value) return

  const filtersRect = filtersRef.value.getBoundingClientRect()
  const shouldFix = filtersRect.top <= 96

  if (shouldFix !== isFiltersFixed.value) {
    isFiltersFixed.value = shouldFix
  }
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

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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

  &__results {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 48px;
  }

  &__title {
    color: var(--main-font, #0b1739);
    font-family: 'PT Root UI', sans-serif;
    font-size: 54px;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: 0;
    text-align: left;
  }

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

  &__button-more {
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    border: 1px solid rgba(11, 23, 57, 0.2);
    border-radius: 25px;
    color: #0b1739;
    font-family: 'PT Root UI', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    background: #fff;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background: #f5f5f5;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.apartments-table {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__head {
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding-bottom: 16px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  &__head-item {
    min-width: 120px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:first-child {
      min-width: 80px;
    }

    &:nth-child(2) {
      flex: 1;
    }

    &--sortable {
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }

    span {
      color: #0b1739;
      font-family: 'PT Root UI', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  &__arrows {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__arrow {
    width: 6.86px;
    height: 4px;
    opacity: 0.4;
    transition: opacity 0.3s ease;
    color: rgba(11,23,57, 0.4) !important;
    fill: rgba(11,23,57, 0.4) !important;

    &--active {
      opacity: 1;
      color: rgba(62, 181, 124, 1) !important;
      fill: rgba(62, 181, 124, 1) !important;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1px;
    margin-top: 1px;
  }

  &__row {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 16px 0;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    transition: background-color 0.3s ease;

    &--content {
      display: flex;
      gap: 20px;
      height: 100%;
      flex: 1;
      flex-wrap: wrap;

      .apartments-table__cell {
        min-width: 120px;
      }
      .apartments-table__cell:first-child {
        flex: 1;
        min-width: unset;
      }
    }

    &:hover {
      background-color: #f9f9f9;
    }
  }

  &__cell {
    min-width: 120px;
    color: #0b1739;
    font-family: 'PT Root UI', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

    &:first-child {
      min-width: 80px;
    }

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  &__floor-total {
    opacity: 0.5;
    margin-left: 4px;
  }
}

.apartments-filter {
  min-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 10px;

  &__label {
    color: #0b1739;
    font-family: 'PT Root UI', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  &__rooms {
    height: 45px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__room-btn {
    min-width: 45px;
    min-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 12px;
    border-radius: 23px;
    background: #fff;
    color: #0b1739;
    font-family: 'PT Root UI', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;

    &--active {
      box-shadow: 0 6px 20px 0 #95d0a1;
      background: #3eb57c;
      color: #fff;
    }

    &--disabled {
      cursor: not-allowed;
      color: #999;

      &:hover {
        background: #f0f0f0;
        transform: none;
      }
    }

    &:hover:not(&--active):not(&--disabled) {
      background: #f5f5f5;
      transform: translateY(-1px);
    }
  }

  &__room-text--disabled {
    opacity: 0.4;
    color: #999;
  }

  &__range {
    height: 45px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__range-values {
    height: 24px;
    display: flex;
    justify-content: space-between;
  }

  &__range-value {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0b1739;
    font-family: 'PT Root UI', sans-serif;
    font-size: 16px;
    line-height: 24px;

    span:first-child {
      font-weight: 500;
      opacity: 0.5;
    }

    span:last-child {
      font-weight: 500;
    }
  }

  &__range-slider {
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
  }

  &__slider {
    width: 100%;
    height: 4px;
    position: absolute;
    background: #ddd;
    appearance: none;
    outline: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #3eb57c;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #3eb57c;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  }

  &__slider-component {
    margin-top: 10px;
  }

  &__clear {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
    padding: 5px 16px 7px;
    cursor: pointer;
    color: #000;
    font-family: 'PT Root UI', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #3eb57c;
    }
  }

  &__clear-icon {
    width: 8px;
    height: 8px;
    fill: currentColor;
  }
}

.slider-wrapper {
  --ui-bg: var(--ui-primary);
}
@media (max-width: 1240px) {
  .apartments {
    padding: 48px 54px;
    gap: 24px;
    &__results {

    }
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
  .apartments-table {
    width: 100%;

    &__head {
      justify-content: flex-start;
      box-shadow: unset;
      padding-left: 24px;
    }
    &__head-item {
      min-width: 80px;

      &:first-child {
        display: none;
      }

      &:nth-child(2) {
        display: none;
      }
    }

    &__body {
      gap: 4px;
    }

    &__row {
      flex-direction: row-reverse;
      box-shadow: unset;
      padding: 16px 24px;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background: rgba(255, 255, 255, 1);


      &--content {
        height: unset;
        column-gap: 20px;
        row-gap: 16px;
        .apartments-table__cell:first-child {
          width: 100%;
          flex: unset;
        }

        .apartments-table__cell {
          min-width: 80px;
          height: 20px;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
        }
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

  .apartments-table {
    width: 100%;
  }
}
</style>