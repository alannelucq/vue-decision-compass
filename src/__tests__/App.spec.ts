import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import App from '../App.vue'

test('renders heading and tagline', async () => {
  const screen = render(App)

  await expect.element(screen.getByRole('heading', { name: /decision compass/i })).toBeVisible()
  await expect.element(screen.getByText('Think deeply before you act. Review your choices with clarity.')).toBeVisible()
})
