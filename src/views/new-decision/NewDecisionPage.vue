<script setup lang="ts">
import { ArrowLeft, ArrowRight, Check } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useDecisionForm } from '@/composables/useDecisionForm'
import { STEPS } from './steps'
import ProgressBar from './components/ProgressBar.vue'
import StepForm from './components/StepForm.vue'

const router = useRouter()
const {
  answers,
  currentStepIndex,
  currentAnswerKey,
  isFirstStep,
  isLastStep,
  goNext,
  goBack,
  saveDecision,
} = useDecisionForm()

function handleCancel() {
  router.push('/')
}

function handleSave() {
  saveDecision()
  router.push('/')
}
</script>

<template>
  <main>
    <ProgressBar :total="STEPS.length" :current="currentStepIndex + 1" />

    <StepForm
      :key="currentStepIndex"
      :step="STEPS[currentStepIndex]!"
      :step-number="currentStepIndex + 1"
      :total-steps="STEPS.length"
      v-model="answers[currentAnswerKey]"
    />

    <footer>
      <button class="btn-secondary" @click="isFirstStep ? handleCancel() : goBack()">
        <ArrowLeft :size="18" />
        {{ isFirstStep ? 'Cancel' : 'Back' }}
      </button>

      <button class="btn-primary" @click="isLastStep ? handleSave() : goNext()">
        {{ isLastStep ? 'Save Decision' : 'Continue' }}
        <component :is="isLastStep ? Check : ArrowRight" :size="18" />
      </button>
    </footer>
  </main>
</template>

<style scoped>
main {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-lg);
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

</style>
