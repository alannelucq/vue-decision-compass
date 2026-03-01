import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import App from '../App.vue'

test('renders heading and tagline', async () => {
  const screen = render(App)
  await expect.element(screen.getByRole('heading', { name: /decision journal/i })).toBeVisible()
  await expect.element(screen.getByText('Think deeply before you act. Review your choices with clarity.')).toBeVisible()
})

test('renders filter tabs with All active by default', async () => {
  const screen = render(App)
  const allBtn = screen.getByRole('button', { name: 'All' })
  await expect.element(allBtn).toBeVisible()
  await expect.element(screen.getByRole('button', { name: 'Active' })).toBeVisible()
  await expect.element(screen.getByRole('button', { name: 'Resolved' })).toBeVisible()
  await expect.element(screen.getByRole('button', { name: 'Archived' })).toBeVisible()
})

test('renders empty state', async () => {
  const screen = render(App)
  await expect.element(screen.getByRole('heading', { name: /no decisions yet/i })).toBeVisible()
  await expect.element(screen.getByRole('button', { name: /start your first decision/i })).toBeVisible()
})
