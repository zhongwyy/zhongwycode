<template>
  <div class="docs-container">
    <header>
      <h1>Майнкрафт проекты</h1>
      <p class="subtitle">Все секции по майнкрафт проектам</p>
    </header>

    <div class="docs-grid">
      <DocCard
        title="Minecraft fabric mods"
        category="green"
        description="Моды на фабрике которые уже реализованы вы сможете найти тут!"
        :tags="['Fabric', 'Development', '1.21+']"
        updated="May 17th, 2025"
      />

      <DocCard
        title="Modpacks"
        category="rose"
        description="Красивые модпаки для кооперативной игры, оптимизированные не только для кооперативной игры, но и с учетом встроенных шейдеров\текстур"
        :tags="['Collection', '1.20+', 'Optimized', 'Modrinth']"
        updated="May 17th, 2025"
      />

      <DocCard
        title="Resource Packs"
        category="blue"
        description="Красивые ресурспаки созданные мной вручную"
        :tags="['GUI', 'Cosy', '1.20+']"
        updated="May 17th, 2025"
      />

      <DocCard
        title="Minecraft forge mods"
        category="pink"
        description="Моды на фордже которые уже реализованы вы сможете найти тут!"
        :tags="['Forge', 'Development', '1.20+']"
        updated="May 17th, 2025"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DocCard from '../components/DocCard.vue';
</script>

<style scoped>
.docs-container {
  font-family: var(--font-mono);
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px 0;
}

h1 {
  color: var(--color-primary);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 10px;
}

.subtitle {
  color: var(--color-text);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  opacity: 0.8;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 20px;
  margin-top: 30px;
}

@media (max-width: 480px) {
  .docs-container {
    padding: 10px;
  }

  header {
    margin-bottom: 20px;
    padding: 10px 0;
  }

  .docs-grid {
    gap: 15px;
  }
}
</style>
