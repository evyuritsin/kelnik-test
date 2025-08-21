<template>
  <div class="apartments-filter">
    <span class="apartments-filter__label">{{ label }}</span>
    <div class="apartments-filter__range">
      <div class="apartments-filter__range-values">
        <div class="apartments-filter__range-value">
          <span>от</span>
          <span>{{ formatValue(localRange[0]) }}</span>
        </div>
        <div class="apartments-filter__range-value">
          <span>до</span>
          <span>{{ formatValue(localRange[1]) }}</span>
        </div>
      </div>
      <div class="slider-wrapper">
        <USlider
            class="apartments-filter__slider-component"
            v-model="localRange"
            :min="min"
            :max="max"
            :step="step"
            range
            size="sm"
            @update:model-value="handleRangeChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  range: { min: number; max: number }
  filterRange: [number, number]
  step: number
  formatFunction?: (value: number) => string
}

interface Emits {
  (e: 'update:filter-range', value: [number, number]): void
}

const props = withDefaults(defineProps<Props>(), {
  formatFunction: undefined
})

const emit = defineEmits<Emits>()

const localRange = ref<[number, number]>([...props.filterRange])

watch(() => props.filterRange, (newValue) => {
  if (newValue[0] !== localRange.value[0] || newValue[1] !== localRange.value[1]) {
    localRange.value = [...newValue]
  }
})

const { min, max } = toRefs(props.range)

const formatValue = (value: number): string => {
  if (props.formatFunction) {
    return props.formatFunction(value)
  }
  return value.toString()
}

const handleRangeChange = (value: [number, number]) => {
  emit('update:filter-range', value)
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

  &__slider-component {
    margin-top: 10px;
  }
}

.slider-wrapper {
  --ui-bg: var(--ui-primary);
}
</style>