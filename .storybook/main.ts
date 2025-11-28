import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const variablesPath = path.resolve(dirname, '../src/styles/variables').replace(/\\/g, '/')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-onboarding'],
  framework: '@storybook/vue3-vite',
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: (source: string, filename: string) => {
              // Don't add to files in styles folder to avoid circular imports
              if (filename.includes('styles')) return source
              return `@use "${variablesPath}" as *;\n${source}`
            },
          },
        },
      },
    })
  },
}

export default config
