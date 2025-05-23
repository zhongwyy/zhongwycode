import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

interface Post {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
}

export const usePostStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]);

  // Загрузка постов из localStorage
  const loadPosts = () => {
    const savedPosts = localStorage.getItem('vue-posts');
    if (savedPosts) {
      posts.value = JSON.parse(savedPosts);
    }
  };

  // Сохранение постов в localStorage
  const savePosts = () => {
    localStorage.setItem('vue-posts', JSON.stringify(posts.value));
  };

  // Добавление нового поста
  const addPost = (post: Omit<Post, 'id'>) => {
    const newPost = {
      ...post,
      id: uuidv4()
    };
    posts.value.push(newPost);
    savePosts();
  };

  // Обновление поста
  const updatePost = (post: Post) => {
    const index = posts.value.findIndex(p => p.id === post.id);
    if (index !== -1) {
      posts.value[index] = post;
      savePosts();
    }
  };

  // Удаление поста
  const deletePost = (id: string) => {
    posts.value = posts.value.filter(post => post.id !== id);
    savePosts();
  };

  // Получение всех постов
  const allPosts = computed(() => [...posts.value].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ));

  // Получение опубликованных постов
  const publishedPosts = computed(() =>
    allPosts.value.filter(post => post.isPublished)
  );

  // Инициализация - загрузка постов при создании хранилища
  loadPosts();

  return {
    posts,
    allPosts,
    publishedPosts,
    addPost,
    updatePost,
    deletePost,
    loadPosts,
    savePosts
  };
});
