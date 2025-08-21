<template>
  <div
      class="apartments-table__head-item apartments-table__head-item--sortable"
      @click="$emit('click')"
  >
    <span :class="{ 'apartments-table__arrow--active': isActive && ascending }">
      {{ label }}
    </span>
    <div class="apartments-table__arrows">
      <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': isActive && ascending }">
        <!-- SVG path for up arrow -->
      </svg>
      <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': isActive && !ascending }">
        <!-- SVG path for down arrow -->
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  field: string
  label: string
  currentField: string
  ascending: boolean
}

const props = defineProps<Props>()
const isActive = computed(() => props.currentField === props.field)
</script>