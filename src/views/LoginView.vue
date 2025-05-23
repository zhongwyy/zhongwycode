<template>
  <div class="login-view">
    <div class="login-form">
      <h1>Sign in</h1>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Email</label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            autocomplete="username"
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
          >
          <p class="passwordRecovery">Forgot password?</p>
        </div>

        <div v-if="authError" class="error-message">
          {{ authError }}
        </div>

        <button class="signIn" type="submit" :disabled="isLoading">
          <span v-if="!isLoading">Sign in</span>
          <span v-else>Sign in...</span>
        </button>
        <div class="border-line"></div>
        <button class="signGoogle" type="submit" :disabled="isLoading">
          <span v-if="!isLoading">Sign with Google</span>
          <span v-else>Sign in...</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

export default defineComponent({
  name: 'LoginView',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref('');
    const password = ref('');

    const handleLogin = async () => {
      await authStore.login(username.value, password.value);

      if (authStore.isAuthenticated) {
        const redirect = router.currentRoute.value.query.redirect;
        await router.push(redirect ? redirect.toString() : '/admin');
      }
    };

    return {
      username,
      password,
      authError: authStore.authError,
      isLoading: authStore.isLoading,
      handleLogin
    };
  }
});
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg);
}

.login-form {
  background: var(--color-bg-tertirary);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 120px;
}

h1 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--color-text);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  font-size: 1rem;
}

.signIn {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: var(--color-text);
  border: none;
  border-radius: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.signGoogle{
  width: 100%;
  padding: 0.75rem;
  background-color: #4892af;
  color: var(--color-text);
  border: none;
  border-radius: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  margin: 1rem 0;
  text-align: center;
}

.passwordRecovery {
  color: var(--color-primary);
  cursor: pointer;
}

.border-line {
  flex: 1;
  height: 1px;
  background: var(--color-border);
  margin-top: 1.5rem;
  margin-bottom:0.5rem ;
}
</style>
