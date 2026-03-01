<script setup lang="ts">
import { BookOpen, Plus } from 'lucide-vue-next'
</script>

<template>
  <section>
    <figure>
      <BookOpen :size="32" />
    </figure>
    <h2>No decisions yet</h2>
    <p>Start your first reflection to think deeper before deciding.</p>
    <RouterLink to="/new" class="btn-primary">
      <Plus :size="18" />
      Start Your First Decision
    </RouterLink>
  </section>
</template>

<style scoped>
section {
  display: grid;
  place-items: center;
  padding: var(--space-3xl) 0;
  text-align: center;
}

section figure {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: var(--radius-full);
  background: var(--color-accent-muted);
  color: var(--color-primary);
  margin: 0 0 var(--space-lg);
}

section h2 {
  margin: 0 0 var(--space-xs);
}

section p {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-xl);
}
</style>
