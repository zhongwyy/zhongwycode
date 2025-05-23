import { defineStore } from 'pinia';
import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  addDoc
} from 'firebase/firestore';
import { db } from '@/firebase';
import { computed, onUnmounted, ref } from 'vue';

interface Post {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
}

export const usePostStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]);
  let unsubscribe: () => void;

  // Подписка на изменения
  const subscribeToPosts = () => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    unsubscribe = onSnapshot(q, (snapshot) => {
      posts.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Post));
    }, (error) => {
      console.error("Ошибка подписки:", error);
    });
  };

  const addPost = async (post: Post) => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        content: post.content,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        isPublished: post.isPublished
      });
      console.log('Post added with ID: ', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding post: ', error);
      throw error;
    }
  };

  // Обновление поста
  const updatePost = async (post: Post) => {
    try {
      const postRef = doc(db, 'posts', post.id);
      await updateDoc(postRef, {
        content: post.content,
        isPublished: post.isPublished,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Ошибка обновления:", error);
      throw error;
    }
  };

  // Удаление поста
  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
    } catch (error) {
      console.error("Ошибка удаления:", error);
      throw error;
    }
  };

  // Инициализация
  subscribeToPosts();

  // Отписка при очистке
  onUnmounted(() => {
    if (unsubscribe) unsubscribe();
  });

  return {
    posts,
    allPosts: computed(() => posts.value),
    publishedPosts: computed(() => posts.value.filter(post => post.isPublished)),
    updatePost,
    deletePost,
    addPost
  };
});
