<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BottomPopup from '../components/icons/warningPanel.vue'
const router = useRouter()
const goToDocs = () => {
  router.push('/docs')
}
const popup = ref<InstanceType<typeof BottomPopup>>()

function showNotification() {
  popup.value?.showPopup()
}
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1 class="titleh1"><img src="../assets/minecraftico.svg" type="image/svg+xml" width="48" height="48">Minecraft mods by zhongwy<img src="../assets/minecraftico.svg" type="image/svg+xml" width="48" height="48"></h1>
      <p>Welcome my friends!<br>Here you can find my mods, modpacks, resourcepacks that I do sometimes!</p>
      <div class="cta-buttons">
        <a @click="showNotification" class="btn btn-primary">Explore Projects</a>
        <a @click="goToDocs" class="btn btn-outline">View Documentation</a>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <div class="section-title">
        <h2>Development Info</h2>
        <p>Full information about where, what and why I write code. </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🧠</div>
          <h3>A stupid development </h3>
          <p class="text">
            Custom scripts, stupid, useless and very native things that I do for learning!
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📚</div>
          <h3>Web development</h3>
          <p class="text">Here are developments for web applications written in vue.js.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🧊</div>
          <h3>Minecraft developments</h3>
          <p class="text">I really love mods developed for Minecraft!</p>
        </div>
      </div>
    </div>
  </section>
  <BottomPopup ref="popup" :auto-close-delay="2000">
    <span>This feature is not implemented yet</span>
  </BottomPopup>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-mono);
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  padding: 100px 0 80px;
  text-align: center;
}
.titleh1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: normal;
  margin-bottom: 20px;
  color: var(--color-text);
}

.hero p {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto 40px;
}

.cta-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}
.btn {
  padding: 12px 24px;
  border-radius: var(--border-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-primary:hover {
  background-color: rgba(74, 228, 27, 0.205);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.btn-outline:hover {
  background-color: rgba(27, 64, 228, 0.212);
}

/* Features Section */
.features {
  padding: 60px 0;
  background-color: var(--color-bg);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.2rem;
  color: var(--color-text);
  margin-bottom: 15px;
}

.section-title p {
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-md);
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--color-text);
}

.feature-card p {
  color: var(--color-text-secondary);
  text-align: center;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
