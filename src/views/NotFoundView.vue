<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, запрашиваемая страница не существует.</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundView',
});
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
  margin-top: 60px;
}
</style>
