<template>
  <article class="doc-card">
    <div :class="['doc-header', `doc-header-${category}`]">
      <h2 class="doc-title">{{ title }}</h2>
      <div class="doc-meta">Last updated: {{ updated }}</div>
    </div>
    <div class="doc-content">
      <p class="doc-description">
        {{ description }}
      </p>
      <div class="doc-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="doc-actions">
        <button :class="['btn', `btn-primary-${category}`]">View Document</button>
        <button class="btn btn-outline">Download PDF</button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String as () => 'green' | 'rose' | 'blue' | 'pink',
    default: 'web',
    validator: (value: string) => ['green', 'rose', 'blue', 'pink'].includes(value)
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array as () => string[],
    required: true
  },
  updated: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.doc-card {
  cursor: pointer;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid var(--color-border);
  display: flex; /* Добавляем flex */
  flex-direction: column; /* Колонка для правильного растягивания */
  height: auto; /* Автоматическая высота */
  min-height: 0; /* Важно для правильного сжатия */
}

.doc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.doc-header {
  background-color: var(--color-primary);
  color: var(--text-soft-black);
  padding: 15px 20px;
}

.doc-header-green {
  background-color: var(--pastel-green);
}

.doc-header-rose {
  background-color: var(--pastel-rose);
}
.doc-header-pink {
  background-color: var(--pastel-pink);
}
.doc-header-blue {
  background-color: var(--pastel-blue);
}

.doc-title {
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  font-weight: 600;
  margin-bottom: 5px;
}

.doc-meta {
  font-size: 0.85rem;
  opacity: 0.9;
}

.doc-content {
  padding: 20px;
  flex: 1; /* Растягиваем контент на доступное пространство */
  display: flex;
  flex-direction: column;
}

.doc-description {
  margin-bottom: 15px;
  color: var(--color-text);
  font-size: clamp(0.9rem, 1vw, 1rem);
  flex-grow: 1; /* Описание растягивается */
}

.doc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}

.tag {
  background-color: var(--color-border);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--color-text);
}

.doc-actions {
  margin-top: auto; /* Кнопки прижимаются вниз */
  display: flex;
  gap: 10px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid var(--color-border);
}

.btn {
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  flex: 1;
  text-align: center;
}

.btn-primary-web {
  background-color: var(--color-primary);
  color: var(--color-text);
}

.btn-primary-java {
  background-color: var(--color-warning);
  color: var(--color-text);
}

.btn-primary-minecraft {
  background-color: var(--color-success);
  color: var(--color-text);
}

[class^="btn-primary-"]:hover {
  background-color: var(--color-bg-secondary);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background-color: rgba(37, 99, 235, 0.1);
}

@media (max-width: 480px) {
  .doc-header,
  .doc-content {
    padding: 12px 15px;
  }

  .doc-actions {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
