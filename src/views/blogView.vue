<script setup lang="ts">
import { ref } from 'vue'
import FloatingPanel from '../components/icons/addPanel.vue'
import BottomPopup from '../components/icons/warningPanel.vue'
import ArticleViewer from '../components/ArticleViewer.vue'

import exampleMd from '../assets/articles/example.md?raw'
import farmersFate from '../assets/articles/farmersFate.md?raw'

const popup = ref<InstanceType<typeof BottomPopup>>()

function showNotification() {
  popup.value?.showPopup()
}

const articleData = {
  exampleMd : {
    title: "# Post support for md extension.",
    date: new Date("2025-05-17"),
    markdownContent: exampleMd,
  },
  farmersFate: {
    title: "# Farmer's fate mod.",
    date: new Date("2025-05-18"),
    markdownContent: farmersFate,
  }
};
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
          <ArticleViewer
            :title="articleData.farmersFate.title"
            :date="articleData.farmersFate.date"
            :markdownContent="articleData.farmersFate.markdownContent"
          />
          <ArticleViewer
            :title="articleData.exampleMd.title"
            :date="articleData.exampleMd.date"
            :markdownContent="articleData.exampleMd.markdownContent"
          />
        </div>
      </div>
    </main>

    <BottomPopup ref="popup" :auto-close-delay="2000">
    <span>This feature is not implemented yet</span>
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
