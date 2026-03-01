import {
  CircleCheckBig,
  Lightbulb,
  Scale,
  ShieldAlert,
  Sparkles,
  Target,
  Zap,
} from 'lucide-vue-next'
import type { DecisionStep } from '@/types/decision'

export const STEPS: DecisionStep[] = [
  {
    category: 'THE DECISION',
    icon: Target,
    question: 'What decision are you facing?',
    inputType: 'input',
    placeholder: 'e.g. Should I change career paths?',
  },
  {
    category: 'CONTEXT',
    icon: Lightbulb,
    question: 'What context surrounds this decision?',
    inputType: 'textarea',
    placeholder: '',
  },
  {
    category: 'ALTERNATIVES',
    icon: Scale,
    question: 'What alternatives do you have?',
    inputType: 'textarea',
    placeholder: 'List every option, even ones that seem unlikely...',
  },
  {
    category: 'RISKS & CONCERNS',
    icon: ShieldAlert,
    question: 'What are the risks and concerns?',
    inputType: 'textarea',
    placeholder: 'Be honest about your fears and concerns...',
  },
  {
    category: 'BEST CASE',
    icon: Sparkles,
    question: 'What does the best case look like?',
    inputType: 'textarea',
    placeholder: 'Imagine the ideal outcome in detail...',
  },
  {
    category: 'WORST CASE',
    icon: Zap,
    question: 'What does the worst case look like?',
    inputType: 'textarea',
    placeholder: 'Describe the worst scenario and how you\'d handle it...',
  },
  {
    category: 'GUT CHECK',
    icon: Lightbulb,
    question: 'What does your gut tell you?',
    inputType: 'textarea',
    placeholder: 'Step outside yourself. What does your intuition say?',
  },
  {
    category: 'YOUR DECISION',
    icon: CircleCheckBig,
    question: 'What is your final decision?',
    inputType: 'textarea',
    placeholder: 'State your decision clearly and your reasoning...',
  },
]
