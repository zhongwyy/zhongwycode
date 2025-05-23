import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  collection,
  addDoc,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '@/firebase';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const isLoading = ref(false);
  const error = ref('');

  // Подписка на изменения в Firestore
  const subscribeToPosts = () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));

    return onSnapshot(q, (querySnapshot) => {
      posts.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
    });
  };

  // Добавление поста
  const addPost = async (post: Omit<Post, 'id'>) => {
    try {
      isLoading.value = true;
      await addDoc(collection(db, 'posts'), {
        ...post,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Ошибка при добавлении поста';
    } finally {
      isLoading.value = false;
    }
  };

  // Обновление поста
  const updatePost = async (post: Post) => {
    try {
      isLoading.value = true;
      await updateDoc(doc(db, 'posts', post.id), {
        content: post.content,
        isPublished: post.isPublished,
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Ошибка при обновлении поста';
    } finally {
      isLoading.value = false;
    }
  };

  // Удаление поста
  const deletePost = async (id: string) => {
    try {
      isLoading.value = true;
      await deleteDoc(doc(db, 'posts', id));
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Ошибка при удалении поста';
    } finally {
      isLoading.value = false;
    }
  };

  // Получение всех постов
  const allPosts = computed(() => [...posts.value]);

  // Получение опубликованных постов
  const publishedPosts = computed(() =>
    allPosts.value.filter(post => post.isPublished)
  );

  // Инициализация - подписка на изменения
  subscribeToPosts();

  return {
    posts,
    allPosts,
    publishedPosts,
    isLoading,
    error,
    addPost,
    updatePost,
    deletePost
  };
});
