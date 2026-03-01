import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import viteConfig from "./vite.config";
import { mergeConfig } from "vite";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      browser: {
        provider: playwright(),
        enabled: true,
        // at least one instance is required
        instances: [{ browser: 'chromium' }],
        headless: true
      },
    }
  })
)
