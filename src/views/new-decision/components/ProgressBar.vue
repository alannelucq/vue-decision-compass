<script setup lang="ts">
defineProps<{
  total: number
  current: number
}>()
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="current"
    :aria-valuemin="1"
    :aria-valuemax="total"
    :aria-label="`Step ${current} of ${total}`"
  >
    <span
      v-for="i in total"
      :key="i"
      :class="{ active: i <= current }"
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: var(--space-2xs);
}

span {
  flex: 1;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--color-border);
  transition: background var(--duration-fast) var(--easing-default);
}

span.active {
  background: var(--color-primary);
}
</style>
