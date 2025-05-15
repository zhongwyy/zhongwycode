<script setup lang="ts">
import { ref } from 'vue'
import FloatingPanel from '../components/icons/addPanel.vue'
import BottomPopup from '../components/icons/warningPanel.vue'

const popup = ref<InstanceType<typeof BottomPopup>>()

function showNotification() {
  popup.value?.showPopup()
}
</script>

<template>
  <div class="page-container">
    <FloatingPanel :interval="45000" :initial-show="true" border-color="#f72585">
      <p>You can buy something in my <a href="#">shop!</a></p>
    </FloatingPanel>

    <main class="main-content">
      <div class="content-container">
        <div class="nav-col">
          <div class="nav-title-col">
            <h4>@BLOG POSTS</h4>
          </div>
          <div class="nav-info">
            <a @click="showNotification" class="trigger-btn"># Development of the Docs...</a>
            <a @click="showNotification" class="trigger-btn"># The application design is...</a>
            <a @click="showNotification" class="trigger-btn"># Updating app features and...</a>
            <a @click="showNotification" class="trigger-btn"># The shop is opening soon!</a>
            <a @click="showNotification" class="trigger-btn"># Opening an app for my...</a>
          </div>
        </div>

        <div class="content-col">
          <article class="blog-post">
            <h1 class="header1"># Development of the Docs tab has begun!</h1>
            <p class="post-meta">May 10th, 2025 by <a href="https://github.com/zhongwyy">zhongwy</a></p>
            <p class="post-stats">👁 0 ♡ 0 ↻ 0</p>
            <p>Soon!</p>
            <picture>
              <img src="../assets/DocsTab.png" alt="Docs tab features" loading="lazy" />
            </picture>

          </article>

          <article class="blog-post">
            <h1 class="header1"># The application design is finally finished!</h1>
            <p class="post-meta">May 10th, 2025 by <a href="https://github.com/zhongwyy">zhongwy</a></p>
            <p class="post-stats">👁 0 ♡ 0 ↻ 0</p>
            <p>Finally!</p>
            <picture>
              <img src="../assets/DesignComplete.png" alt="Design features" loading="lazy" />
            </picture>
          </article>

          <article class="blog-post">
            <h1 class="header1"># Updating app features and using pop-up windows!</h1>
            <p class="post-meta">May 10th, 2025 by <a href="https://github.com/zhongwyy">zhongwy</a></p>
            <p class="post-stats">👁 0 ♡ 0 ↻ 0</p>
            <p>Update!</p>
            <picture>
              <img src="../assets/PopUpAdd.png" alt="PopUp features" loading="lazy" />
            </picture>
          </article>

          <article class="blog-post">
            <h1 class="header1"># The shop is opening soon!</h1>
            <p class="post-meta">May 10th, 2025 by <a href="https://github.com/zhongwyy">zhongwy</a></p>
            <p class="post-stats">👁 0 ♡ 0 ↻ 0</p>
            <p>Opening!</p>
            <picture>
              <img src="../assets/ShopOpen.png" alt="Shop Open" loading="lazy" />
            </picture>
          </article>

          <article class="blog-post">
            <h1 class="header1"># Opening an app for my open source projects</h1>
            <p class="post-meta">May 9th, 2025 by <a href="https://github.com/zhongwyy">zhongwy</a></p>
            <p class="post-stats">👁 0 ♡ 0 ↻ 0</p>
            <p>
              Welcome everyone to the alpha opening of my web application where news of my
              developments will be published and all developments on one page where there will be
              guides and multiple explanations of what I have done or will do, news of updates of
              various applications also made by me will also be published, the site was developed from
              scratch and here updates of what has changed on it will also be published, thank you all
              for your attention!
            </p>
            <picture>
              <img src="../assets/DesignComplete.png" alt="Design features" loading="lazy" />
            </picture>
          </article>
        </div>
      </div>
    </main>

    <BottomPopup ref="popup" :auto-close-delay="2000">
      <span style="color: var(--color-text)">It doesn't work yet ж3</span>
    </BottomPopup>
  </div>
</template>

<style scoped>
/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-link-hover);
}

/* Main content layout */
.main-content {
  flex: 1;
  padding: 1rem;
}

.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Navigation column */
.nav-col {
  position: sticky;
  top: 10rem;
  order: 2;
  background-color: var(--color-bg);
  padding: 1rem;
  border-radius: var(--radius-md);
  padding-top: 1.5rem;
}

.nav-title-col h4 {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.nav-info {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  gap: 0.5rem;
}

.nav-info a {
  border-left: 2px solid var(--color-border);
  padding: 0.5rem 0.75rem;
  transition: border-color 0.2s ease;
}

.nav-info a:hover {
  border-color: var(--color-primary-hover);
}

/* Content column */
.content-col {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.blog-post {
  background-color: var(--color-bg);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header1 {
  color: var(--color-primary-hover);
  font-size: 1.5rem;
  line-height: 1.3;
}

.post-meta, .post-stats {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.blog-post img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  margin: 1rem 0;
  box-shadow: var(--shadow-sm);
  object-fit: cover;
}

/* Desktop styles */
@media (min-width: 768px) {
  .content-container {
    flex-direction:row-reverse;
    gap: 2rem;
  }

  .nav-col {
    order: 1;
    position: sticky;
    top: 10rem;
    align-self: flex-start;
    height: calc(100vh - 2rem);
    overflow-y: auto;
    flex: 0 0 250px;
    padding-top: 1rem;
  }

  .content-col {
    flex: 1;
    padding-top: 0;
  }

  .header1 {
    font-size: 1.75rem;
  }
}

/* Mobile menu toggle (optional) */
.mobile-menu-toggle {
  display: none;
  background-color: var(--color-bg);
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

@media (max-width: 767px) {
  .mobile-menu-toggle {
    display: block;
  }

  .nav-col {
    display: none;
  }

  .nav-col.active {
    display: flex;
  }
}
</style>
