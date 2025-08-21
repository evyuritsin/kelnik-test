<template>
  <div class="apartments-filter">
    <span v-if="label" class="apartments-filter__label">{{ label }}</span>
    <div class="apartments-filter__button-group">
      <button
          v-for="option in options"
          :key="getKey(option)"
          :class="[
          'apartments-filter__button',
          {
            'apartments-filter__button--active': isOptionActive(option),
            'apartments-filter__button--disabled': !isOptionAvailable(option)
          }
        ]"
          @click="handleOptionClick(option)"
          :disabled="!isOptionAvailable(option)"
      >
        <span>{{ getOptionLabel(option) }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

interface Option {
  value: any
  label: string
  available?: boolean
}

interface Props {
  label?: string
  options: Option[]
  selectedValues: any[]
  multiple?: boolean
  valueKey?: string
  labelKey?: string
  availableKey?: string
}

interface Emits {
  (e: 'update:selected-values', value: any[]): void
  (e: 'toggle', value: any): void
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  multiple: true,
  valueKey: 'value',
  labelKey: 'label',
  availableKey: 'available'
})

const emit = defineEmits<Emits>()

const getKey = (option: Option): string => {
  return String(option[props.valueKey as keyof Option])
}

const getOptionLabel = (option: Option): string => {
  return option[props.labelKey as keyof Option] || String(option[props.valueKey as keyof Option])
}

const isOptionAvailable = (option: Option): boolean => {
  return option[props.availableKey as keyof Option] !== false
}

const isOptionActive = (option: Option): boolean => {
  return props.selectedValues.includes(option[props.valueKey as keyof Option])
}

const handleOptionClick = (option: Option) => {
  if (!isOptionAvailable(option)) return

  const value = option[props.valueKey as keyof Option]

  if (props.multiple) {
    // Для множественного выбора
    const newSelectedValues = [...props.selectedValues]
    const index = newSelectedValues.indexOf(value)

    if (index > -1) {
      newSelectedValues.splice(index, 1)
    } else {
      newSelectedValues.push(value)
    }

    emit('update:selected-values', newSelectedValues)
  } else {
    // Для одиночного выбора
    emit('update:selected-values', [value])
  }

  emit('toggle', value)
}
</script>

<style lang="scss" scoped>
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

  &__button-group {
    height: 45px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__button {
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
}
</style>