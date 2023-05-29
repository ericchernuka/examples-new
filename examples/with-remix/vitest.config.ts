/// <reference types="vitest/globals" />
import { defineConfig, configDefaults } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths({ root: __dirname })],
  test: {
    globals: true,
    root: __dirname,
    setupFiles: ['./vitest.setup.ts'],
    exclude: [...configDefaults.exclude, './test/*'],
  },
})
