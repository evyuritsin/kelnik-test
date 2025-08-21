<template>
  <div
      class="scroll-top"
      :class="{ 'scroll-top--visible': isVisible }"
      @click="scrollToTop"
  >
    <svg viewBox="0 0 10.0095 14.4141" xmlns="http://www.w3.org/2000/svg" width="10.009460" height="14.414093" fill="none">
      <path d="M12 4.00063L0 4.00063M4 8.00126L0 4.00063L4 0" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-width="2" transform="matrix(1.19249e-08,1,-1,1.19249e-08,9.00536,1.41409)" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300

const checkScrollPosition = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
  // Проверить начальную позицию при монтировании
  checkScrollPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  border-radius: 20px;
  background: rgba(149, 208, 161, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: rgba(62, 181, 124, 1);
    transform: translateY(-2px);
  }

  &--visible {
    opacity: 1;
    visibility: visible;
  }
}
</style>