<template>
  <ButtonGroup
      label="Количество комнат"
      :options="roomOptions"
      :selected-values="selectedRooms"
      @update:selected-values="handleSelectionChange"
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

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleSelectionChange = (value: number[]) => {
  emit('update:selected-rooms', value)
}
</script>