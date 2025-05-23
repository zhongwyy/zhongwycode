<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <div class="post-content" v-html="post.content"></div>
      <div class="post-meta">
        <span>{{ formatDate(post.createdAt) }}</span>
        <button @click="togglePublish(post)">{{ post.isPublished ? 'Снять с публикации' : 'Опубликовать' }}</button>
        <button @click="deletePost(post.id)" class="delete-btn">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePostStore } from '../stores/postStore.ts';

import type { Post } from '../types/post';

export default defineComponent({
  name: 'PostList',
  setup() {
    const postStore = usePostStore();
    const posts = computed(() => postStore.allPosts);

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleString();
    };
    const togglePublish = async (post: Post) => {
    try {
    await postStore.updatePost({
      ...post,
      isPublished: !post.isPublished // Инвертируем статус
    });
  } catch (error) {
    console.error("Ошибка публикации:", error);
  }
};

    const deletePost = (id: string) => {
      if (confirm('Вы уверены, что хотите удалить этот пост?')) {
        postStore.deletePost(id);
      }
    };

    return {
      posts,
      formatDate,
      togglePublish,
      deletePost
    };
  }
});
</script>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 20px auto;
}

.post-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 20px;
  margin-bottom: 20px;
  background-color: var(--color-bg);
}

.post-content {
  margin-bottom: 15px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  color: var(--color-text-tertiary);
}

button {
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  border: var(--radius-md);
}

.delete-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: var(--radius-md);
}
img {
  width: 750px;
}
</style>
