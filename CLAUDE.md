# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Type-check + build for production
pnpm test:unit        # Run tests (vitest, watch mode)
pnpm test:unit --run  # Run tests once (CI mode)
pnpm lint             # Run oxlint then eslint (both with --fix)
pnpm format           # Format src/ with oxfmt
pnpm type-check       # Type-check with vue-tsc
```

## Architecture

- **Vue 3 + TypeScript + Vite** — SFC `<script setup lang="ts">` style
- **Vue Router** — configured in `src/router/index.ts` (history mode)
- **Icons** — `lucide-vue-next`
- **Package manager** — pnpm (workspace at root, Vue beta overrides in `pnpm-workspace.yaml`)

### Path alias

`@` → `./src` (configured in both `vite.config.ts` and `tsconfig.app.json`)

### TypeScript

- `noUncheckedIndexedAccess` is enabled — handle `undefined` from indexed access
- Three tsconfig project references: `tsconfig.app.json`, `tsconfig.node.json`, `tsconfig.vitest.json`

### Linting

Two-pass lint pipeline (`pnpm lint`):

1. **oxlint** — fast Rust linter (config in `.oxlintrc.json`, plugins: eslint, typescript, unicorn, oxc, vue, vitest)
2. **eslint** — Vue + TypeScript rules, with `eslint-plugin-oxlint` to disable rules already covered by oxlint

Formatting uses **oxfmt** (not Prettier).

### Design tokens

All CSS variables live in `src/assets/variables.css`, imported via `src/assets/main.css`. Use these tokens instead of raw values:

- Colors: `--color-primary`, `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, etc.
- Fonts: `--font-serif` (Instrument Serif) for headings, `--font-sans` (DM Sans) for body
- Spacing: `--space-2xs` through `--space-3xl` (4px base grid)
- Radius: `--radius-sm` through `--radius-full`

### Tests

Test files go in `src/**/__tests__/` directories. Use `vitest-browser-vue` for component testing :

```ts
import { render } from 'vitest-browser-vue'
import { expect, test } from 'vitest'

test('counter button increments the count', async () => {
  const screen = render(Component, {
    props: {
      initialCount: 1,
    },
  })

  await screen.getByRole('button', { name: 'Increment' }).click()
  await expect.element(screen.getByText('Count is 2')).toBeVisible()
})
```
