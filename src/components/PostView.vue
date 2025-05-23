<template>
  <div class="post-view">
    <div v-for="post in publishedPosts" :key="post.id" class="post">
      <div class="post-content" v-html="post.content"></div>
      <div class="post-date">{{ formatDate(post.createdAt) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostStore } from '../stores/postStore.ts';

export default defineComponent({
  name: 'PostView',
  setup() {
    const postStore = usePostStore();
    const publishedPosts = computed(() => postStore.publishedPosts);

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleString();
    };

    return {
      publishedPosts,
      formatDate
    };
  }
});
</script>

<style scoped>
.post-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-bg);
}

.post {
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
}

.post-date {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
  text-align: right;
}
</style>
