import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'

// Import PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import global styles
import '../src/styles/index.scss'

// Setup PrimeVue
setup((app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-mode',
      },
    },
  })
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e293b' },
        { name: 'gray', value: '#f1f5f9' },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
