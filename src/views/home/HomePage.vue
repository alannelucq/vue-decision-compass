<script setup lang="ts">
import { ref } from 'vue'
import { BookOpen, Plus } from 'lucide-vue-next'
import EmptyState from './components/EmptyState.vue'

const filters = ['All', 'Active', 'Resolved', 'Archived'] as const
const activeFilter = ref<(typeof filters)[number]>('All')
</script>

<template>
  <main>
    <header>
      <h1>
        <BookOpen :size="40" />
        Decision Journal
      </h1>
      <p>Think deeply before you act. Review your choices with clarity.</p>
    </header>

    <nav>
      <menu>
        <li v-for="filter in filters" :key="filter">
          <button
            :class="{ active: activeFilter === filter }"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </li>
      </menu>
      <button class="btn-primary">
        <Plus :size="18" />
        New Decision
      </button>
    </nav>

    <EmptyState />
  </main>
</template>

<style scoped>
main {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-lg);
}

header h1 {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

header p {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-md);
}

menu {
  display: flex;
  gap: var(--space-2xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

menu button {
  padding: var(--space-xs) var(--space-md);
  border: none;
  border-radius: var(--radius-full);
  background: transparent;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

menu button:hover {
  background: var(--color-surface-alt);
  color: var(--color-text);
}

menu button.active {
  background: var(--color-primary);
  color: var(--color-primary-fg);
}
</style>
