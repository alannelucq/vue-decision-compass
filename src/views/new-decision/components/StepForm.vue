<script setup lang="ts">
import type { DecisionStep } from '@/types/decision'

defineProps<{
  step: DecisionStep
  stepNumber: number
  totalSteps: number
}>()

const model = defineModel<string>({ required: true })
</script>

<template>
  <section>
    <figure>
      <component :is="step.icon" :size="24" />
    </figure>
    <p>{{ step.category }} — STEP {{ stepNumber }} OF {{ totalSteps }}</p>
    <h1>{{ step.question }}</h1>
    <input
      v-if="step.inputType === 'input'"
      v-model="model"
      type="text"
      :placeholder="step.placeholder"
    />
    <textarea
      v-else
      v-model="model"
      :placeholder="step.placeholder"
      rows="6"
    />
  </section>
</template>

<style scoped>
section {
  display: grid;
  justify-items: center;
  align-content: center;
  text-align: center;
  min-height: 360px;
  padding: var(--space-2xl) 0;
  gap: var(--space-md);
}

figure {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-accent-muted);
  color: var(--color-primary);
  margin: 0;
}

section p {
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

h1 {
  font-family: var(--font-serif);
  font-size: var(--text-2xl);
  margin: 0;
}

input,
textarea {
  width: 100%;
  max-width: 600px;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-surface);
  outline: none;
  transition: border-color var(--duration-fast) var(--easing-default);
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-muted);
}

input:focus,
textarea:focus {
  border-color: var(--color-border-focus);
}

textarea {
  resize: vertical;
}
</style>
