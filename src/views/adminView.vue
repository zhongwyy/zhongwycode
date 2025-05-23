<template>
  <div class="admin-view">
    <h1>Панель администратора</h1>
    <PostEditor />
    <h2>Все посты</h2>
    <PostList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostEditor from '../components/PostEditor.vue';
import PostList from '../components/PostList.vue';

export default defineComponent({
  name: 'AdminView',
  components: {
    PostEditor,
    PostList
  }
});
</script>

<style scoped>
.admin-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>
