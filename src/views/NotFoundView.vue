<template>
  <section class="not-found">
    <h1>404 - Not found</h1>
    <p>Sorry, the page you requested does not exist.</p>
    <router-link to="/">Return to home</router-link>
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
  text-align: center;
  padding: 2rem;
  margin-top: 60px;
}
</style>
