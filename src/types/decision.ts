import type { Component } from 'vue'

export interface DecisionStep {
  category: string
  icon: Component
  question: string
  inputType: 'input' | 'textarea'
  placeholder: string
}

export interface DecisionAnswers {
  decision: string
  context: string
  alternatives: string
  risks: string
  bestCase: string
  worstCase: string
  gutCheck: string
  finalDecision: string
}
