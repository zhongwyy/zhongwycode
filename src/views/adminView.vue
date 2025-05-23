<template>
  <div class="admin-view">
    <div class="admin-header">
      <h1>Панель администратора</h1>
      <button @click="logout" class="logout-btn">Выйти</button>
    </div>

    <PostEditor />
    <h2>Все посты</h2>
    <PostList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostEditor from '@/components/PostEditor.vue';
import PostList from '@/components/PostList.vue';
import { useAuthStore } from '@/stores/authStore';

export default defineComponent({
  name: 'AdminView',
  components: {
    PostEditor,
    PostList
  },
  setup() {
    const authStore = useAuthStore();

    const logout = async () => {
      await authStore.logout();
    };

    return {
      logout
    };
  }
});
</script>

<style scoped>
.admin-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1, h2 {
  color: var(--color-text);
  margin-bottom: 20px;
}

.logout-btn {
  padding: 8px 16px;
  background-color: #e74c3c;
  color: var(--color-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
