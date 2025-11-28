import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FInput from './FInput.vue'

const meta: Meta<typeof FInput> = {
  title: 'Components/FInput',
  component: FInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'example@email.com',
    type: 'email',
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    error: 'Username is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
}

export const Readonly: Story = {
  args: {
    label: 'Readonly Input',
    modelValue: 'This is readonly',
    readonly: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { FInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
        <FInput label="Small" placeholder="Small input" size="sm" />
        <FInput label="Medium" placeholder="Medium input" size="md" />
        <FInput label="Large" placeholder="Large input" size="lg" />
      </div>
    `,
  }),
}

