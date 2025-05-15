<template>
  <section class="not-found">
    <h1 class="notf404">404</h1>
    <h1>Page not found</h1>
    <p>Sorry, the page you requested does not exist.</p>
    <router-link class="return-home" to="/">Return to main page...</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundView',
});
</script>

<style scoped>
.not-found {
  font-family: var(--font-mono);
  text-align: center;
  padding: 2rem;
  margin-top: 60px;
}

.notf404 {
  font-size: 192px;
}

.return-home {
  font-size: large;
  text-decoration: none;
  color: var(--color-success);
}
</style>
