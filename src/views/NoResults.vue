<template>
  <div
    v-if="showNoResults"
    class="no-results-section"
    @click="handleSectionClick"
  >
    <div
      class="no-results-card"
      @click.stop
    >
      <div class="no-results-icon">😔</div>
      <h3 class="no-results-title">Nothing found</h3>
      <p class="no-results-text">Try changing your search query or</p>
      <button @click="handleBrowse" class="no-results-button">View all materials</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
  searchResults: {
    type: Array,
    required: true,
  },
  searchPerformed: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['browse', 'close'])

const showNoResults = ref(false)

watch(
  () => [props.searchResults, props.searchPerformed],
  () => {
    showNoResults.value =
      props.searchPerformed && props.searchQuery.trim() !== '' && props.searchResults.length === 0
  },
  { immediate: true },
)

const handleBrowse = () => {
  emit('browse')
}

const closeCard = () => {
  emit('close')
}

const handleSectionClick = (event: MouseEvent) => {
  // Закрываем только если кликнули именно на секцию (не на дочерние элементы)
  if (event.target === event.currentTarget) {
    closeCard()
  }
}
</script>

<style scoped>
.no-results-section {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  background: rgba(10, 1, 1, 0.164);
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.no-results-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  text-align: center;
  background-color: var(--color-bg);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-results-section {
  transition: opacity 0.3s ease;
}
.no-results-leave-active {
  opacity: 0;
}

.no-results-icon {
  font-size: 3rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.no-results-title {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.no-results-text {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.no-results-button {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: var(--color-border);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.no-results-button:hover {
  background-color: var(--color-bg-tertiary);
  transform: translateY(-1px);
  color: var(--color-primary);
}
</style>
