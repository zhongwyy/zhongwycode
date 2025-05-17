<template>
  <div class="docs-container">
    <header>
      <h1>Minecraft docs</h1>
      <p class="subtitle">All sections on my minecraft projects</p>
    </header>

    <div class="docs-grid">
      <DocCard
        title="Minecraft fabric mods"
        category="green"
        description="Factory mods developed for new versions of minecraft. Basically here you will find mods for a cozy and enjoyable game"
        :tags="['Fabric', 'Development', '1.21+']"
        updated="May 17th, 2025"
      />

      <DocCard
        title="Modpacks"
        category="rose"
        description="Beautiful modpacks created for co-op play of Minecraft, fully optimized for playing together with beautiful shaders and resource packs"
        :tags="['Collection', '1.20+', 'Optimized', 'Modrinth']"
        updated="May 17th, 2025"
      />

      <DocCard
        title="Resource Packs"
        category="blue"
        description="Beautiful themed resource packs drawn by me compatible with both vanilla and modified Minecraft"
        :tags="['GUI', 'Cosy', '1.20+']"
        updated="May 17th, 2025"
      />

      <DocCard
        title="Minecraft forge mods"
        category="pink"
        description="Factory mods developed for new versions of minecraft on forge. Basically here you will find mods for a cozy and enjoyable game"
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
