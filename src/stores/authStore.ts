import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const isAuthenticated = ref(false);
  const authError = ref('');
  const isLoading = ref(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = ref<any>(null);

  // Проверка состояния аутентификации
  const initAuth = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        isAuthenticated.value = true;
        user.value = firebaseUser;
      } else {
        isAuthenticated.value = false;
        user.value = null;
      }
    });
  };

  // Логин
  const login = async (email: string, password: string) => {
    isLoading.value = true;
    authError.value = '';

    try {
      await signInWithEmailAndPassword(auth, email, password);
      await router.push('/admin');
    } catch (error) {
      authError.value = error instanceof Error ? error.message : 'Ошибка аутентификации';
    } finally {
      isLoading.value = false;
    }
  };

  // Логаут
  const logout = async () => {
    try {
      await signOut(auth);
      await router.push('/');
    } catch (error) {
      authError.value = error instanceof Error ? error.message : 'Ошибка при выходе';
    }
  };

  // Инициализация при создании хранилища
  initAuth();

  return {
    isAuthenticated,
    authError,
    isLoading,
    user,
    login,
    logout
  };
});
