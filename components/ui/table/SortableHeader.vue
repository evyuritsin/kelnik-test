<template>
  <div
      class="apartments-table__head-item apartments-table__head-item--sortable"
      @click="handleClick"
  >
    <span :class="{ 'apartments-table__arrow--active': isActive && ascending }">
      {{ label }}
    </span>
    <div class="apartments-table__arrows">
      <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': isActive && ascending }">
        <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
        <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" transform="matrix(-1,8.74228e-08,-8.74228e-08,-1,6.85712,4)" />
      </svg>
      <svg class="apartments-table__arrow" :class="{ 'apartments-table__arrow--active': isActive && !ascending }">
        <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
        <path d="M2.82265 3.7465C2.98491 3.91016 3.19917 4 3.42886 4C3.65797 4 3.87337 3.91016 4.0345 3.7465L6.68959 0.987232C6.91299 0.761203 6.91299 0.395551 6.68959 0.169522C6.46676 -0.0565073 6.10509 -0.0565073 5.88169 0.169522L3.42886 2.72451L0.97545 0.169522C0.752049 -0.0565073 0.390951 -0.0565073 0.16755 0.169522C-0.0558502 0.395551 -0.0558502 0.761203 0.16755 0.987232L2.82265 3.7465Z" fill-rule="evenodd" />
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

interface Emits {
  (e: 'click'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isActive = computed(() => props.currentField === props.field)

const handleClick = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>

</style>