// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress'
import { DEMETERS_LAW_HOST } from './constants'

export default defineConfig({
  e2e: {
    baseUrl: DEMETERS_LAW_HOST,
    projectId: 'ro6epu',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
