<script setup lang="ts">
import { Compass } from 'lucide-vue-next'
</script>

<template>
  <header>
    <h1>
      <Compass />
      Decision compass
    </h1>
    <p>Think deeply before you act. Review your choices with clarity.</p>
  </header>
</template>

<style scoped>
header p {
  font-size: var(--text-lg);
}
</style>
