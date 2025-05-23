<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, watch, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import BottomPopup from './components/icons/warningPanel.vue'
import NoResults from './views/NoResults.vue'

const popup = ref<InstanceType<typeof BottomPopup>>()
const router = useRouter()
const searchQuery = ref('')
const searchResults = ref<unknown[]>([])
const searchPerformed = ref(false)
const mobileMenuOpen = ref(false)

function showNotification() {
  popup.value?.showPopup()
}

const navigateTo = (path: string) => {
  router.push(path)
  mobileMenuOpen.value = false
  searchPerformed.value = false
  searchQuery.value = ''
}
watch(() => router.currentRoute.value.path, () => {
  searchPerformed.value = false
  searchQuery.value = ''
})

const performSearch = () => {
  if (searchQuery.value.trim()) {
    searchPerformed.value = true
    // Ваша логика поиска
  }
}

const showAllContent = () => {
  console.log('Показать все материалы')
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  hideNoResults()

}

const hideNoResults = () => {
  searchPerformed.value = false
  searchQuery.value = ''
}

onMounted(() => {
  const router = useRouter()
  const redirectPath = sessionStorage.getItem('redirect')
  if (redirectPath) {
    sessionStorage.removeItem('redirect')
    router.push(redirectPath)  // Переходим на сохранённый путь
  }
})

</script>

<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo-container" @click="navigateTo('/')">
          <img class="logo" src="./assets/angleLight.png" alt="zcode logo" width="64" height="64" />
          <span class="logo-name">zhongwycode</span>
        </div>

        <div class="search-container">
          <input
            type="search"
            v-model="searchQuery"
            @keyup.enter="performSearch"
            placeholder="Search Docs and Blog"
            aria-label="Search through documentation and blog posts"
          />
        </div>

        <button class="mobile-menu-button" @click="toggleMobileMenu" aria-label="Toggle navigation menu">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>

        <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
          <button @click="navigateTo('/docs')" class="nav-link">Docs</button>
          <button @click="navigateTo('/blog')" class="nav-link">Blog</button>
          <button @click="showNotification" class="nav-link">Updates</button>
          <button @click="navigateTo('/faq')" class="nav-link">FAQ</button>
        </div>
        <div class="sign">
          <div class="login">
        <a @click="showNotification">Sign Up</a>
      </div>
        <div class="login">
        <a @click="navigateTo('/Login')">Sign in</a>
      </div>
        </div>
      </div>
    </nav>
  </header>

  <NoResults
    v-if="searchPerformed && searchResults.length === 0"
    :search-query="searchQuery"
    :search-results="searchResults"
    :search-performed="searchPerformed"
    @browse="showAllContent"
    @close="hideNoResults"
  />

  <main class="main-content">
    <RouterView />
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="https://github.com/zhongwyy" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:redlineincred@gmail.com">Contact</a>
          <a href="mailto:merkopcasterl@yandex.ru">alt:Contact</a>
        </nav>
        <p class="copyright">zhongwycode personal website.<br> All rights reserved. <br> © 2025</p>
      </div>
    </div>
  </footer>

  <BottomPopup ref="popup" :auto-close-delay="2000">
    <span>This feature is not implemented yet</span>
  </BottomPopup>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  width: 100%;
  height: 60px;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  gap: 7.5rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.logo-name {
  font-weight: 600;
  font-size: 1.2rem;
}

.search-container {
  flex: 1;
  padding: 0 20px;
  max-width: 800px;
}

.search-container input {
  width: 100%;
  padding: 8px 15px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  outline: none;
  font-size: 1rem;
  background: var(--color-bg-secondary);
  color: var(--color-text);
}

.search-container input:focus {
  border-color: var(--color-primary);
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 8px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 0;
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.main-content {
  min-height: calc(100vh - 160px);
}

.footer {
  background-color: var(--color-bg);
  color: var(--color-text);
  padding: 40px 0;
  text-align: center;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.login {
  cursor: pointer;
}
.login:hover {
  color: var(--color-primary-hover);
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.footer-links a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

.copyright {
  color: var(--color-text-tertiary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .navbar-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 10px 15px;
    height: 60px;
    gap: 10px;
  }

  .logo-container {
    grid-column: 1;
    justify-self: start;
  }

  .logo-name {
    display: none;
  }

  .search-container {
    grid-column: 2;
    order: 0;
    padding: 0;
    width: 100%;
  }

  .mobile-menu-button {
    grid-column: 3;
    justify-self: end;
    order: 0;
    display: block;
    margin-left: auto;
  }

  .nav-links {
    grid-column: 1 / -1;
    display: none;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding: 20px 0;
    background: var(--color-bg);
  }

  .nav-links.mobile-open {
    display: flex;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 10px;
  }

  .search-container input {
    font-size: 0.9rem;
    padding: 8px 10px;
  }
}

.sign {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>
