import { computed, reactive, ref } from 'vue'
import type { DecisionAnswers } from '@/types/decision'
import { STEPS } from '@/views/new-decision/steps'

const ANSWER_KEYS: (keyof DecisionAnswers)[] = [
  'decision',
  'context',
  'alternatives',
  'risks',
  'bestCase',
  'worstCase',
  'gutCheck',
  'finalDecision',
]

export function useDecisionForm() {
  const answers = reactive<DecisionAnswers>({
    decision: '',
    context: '',
    alternatives: '',
    risks: '',
    bestCase: '',
    worstCase: '',
    gutCheck: '',
    finalDecision: '',
  })

  const currentStepIndex = ref(0)

  const currentAnswerKey = computed(() => ANSWER_KEYS[currentStepIndex.value]!)

  const isFirstStep = computed(() => currentStepIndex.value === 0)
  const isLastStep = computed(() => currentStepIndex.value === STEPS.length - 1)

  function goNext() {
    if (!isLastStep.value) {
      currentStepIndex.value++
    }
  }

  function goBack() {
    if (!isFirstStep.value) {
      currentStepIndex.value--
    }
  }

  function saveDecision() {
    console.log('Decision saved:', { ...answers })
  }

  return {
    answers,
    currentStepIndex,
    currentAnswerKey,
    isFirstStep,
    isLastStep,
    goNext,
    goBack,
    saveDecision,
  }
}
