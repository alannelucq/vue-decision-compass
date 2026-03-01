import { describe, expect, test, vi } from 'vitest'
import type { DecisionAnswers } from '@/types/decision'
import { useDecisionForm } from '../useDecisionForm'

function setup({ step = 0, answers = {} }: { step?: number; answers?: Partial<DecisionAnswers> } = {}) {
  const form = useDecisionForm()
  form.currentStepIndex.value = step
  Object.assign(form.answers, answers)
  return form
}

describe('useDecisionForm', () => {
  test('starts a new decision with all fields blank', () => {
    const { answers } = setup()

    expect({ ...answers }).toEqual({
      decision: '',
      context: '',
      alternatives: '',
      risks: '',
      bestCase: '',
      worstCase: '',
      gutCheck: '',
      finalDecision: '',
    })
  })

  test('shows the first question when opening the form', () => {
    const { currentStepIndex, isFirstStep, isLastStep } = setup()

    expect(currentStepIndex.value).toBe(0)
    expect(isFirstStep.value).toBe(true)
    expect(isLastStep.value).toBe(false)
  })

  test('moves to the next question when the user continues', () => {
    const { currentStepIndex, goNext } = setup({ step: 0 })
    goNext()
    expect(currentStepIndex.value).toBe(1)
  })

  test('returns to the previous question when the user goes back', () => {
    const { currentStepIndex, goBack } = setup({ step: 1 })
    goBack()
    expect(currentStepIndex.value).toBe(0)
  })

  test('knows when the user is on the first or last question', () => {
    const midForm = setup({ step: 3 })
    expect(midForm.isFirstStep.value).toBe(false)
    expect(midForm.isLastStep.value).toBe(false)

    const lastStep = setup({ step: 7 })
    expect(lastStep.isFirstStep.value).toBe(false)
    expect(lastStep.isLastStep.value).toBe(true)
  })

  test('saves the decision with all filled-in answers', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const { saveDecision } = setup({
      answers: { decision: 'Change career', context: 'Feeling stuck' },
    })

    saveDecision()

    expect(consoleSpy).toHaveBeenCalledWith('Decision saved:', expect.objectContaining({
      decision: 'Change career',
      context: 'Feeling stuck',
    }))

    consoleSpy.mockRestore()
  })
})
