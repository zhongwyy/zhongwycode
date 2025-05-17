<template>
  <article class="article-viewer">
    <header>
      <h1>{{ title }}</h1>
      <time :datetime="date.toISOString()">{{ formattedDate }}</time>
    </header>
    <div class="content" v-html="compiledMarkdown"></div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { marked } from 'marked'; // Для Markdown-рендеринга

export default defineComponent({
  name: 'ArticleViewer',
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    markdownContent: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formattedDate = computed(() => {
      return props.date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    });

    const compiledMarkdown = computed(() => {
      return marked(props.markdownContent);
    });

    return { formattedDate, compiledMarkdown };
  },
});
</script>

<style scoped>
.article-viewer {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.article-viewer h1 {
  color: var(--color-primary);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.article-viewer time {
  color: #666;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 2rem;
}

.article-viewer .content {
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
}

.article-viewer .content :deep(h2) {
  margin-top: 2rem;
  font-size: 1.5rem;
}

.article-viewer .content :deep(p) {
  margin-bottom: 1.5rem;
}

.article-viewer .content :deep(a) {
  color: var(--color-primary)
}
</style>
