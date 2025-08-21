<template>
  <ButtonGroup
      label="Количество комнат"
      :options="roomOptions"
      :selected-values="selectedRooms"
      @update:selected-values="$emit('update:selected-rooms', $event)"
  />
</template>

<script setup lang="ts">
import ButtonGroup from '~/components/ui/ButtonGroup.vue'
interface RoomOption {
  value: number
  label: string
  available: boolean
}

interface Props {
  roomOptions: RoomOption[]
  selectedRooms: number[]
}

interface Emits {
  (e: 'update:selected-rooms', value: number[]): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>