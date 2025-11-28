import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FButton from './FButton.vue'

const meta: Meta<typeof FButton> = {
  title: 'Components/FButton',
  component: FButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    outlined: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
  },
}

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
}

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'primary',
    outlined: true,
  },
}

export const Rounded: Story = {
  args: {
    label: 'Rounded Button',
    variant: 'primary',
    rounded: true,
  },
}

export const Loading: Story = {
  args: {
    label: 'Loading...',
    variant: 'primary',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { FButton },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <FButton label="Small" size="sm" />
        <FButton label="Medium" size="md" />
        <FButton label="Large" size="lg" />
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { FButton },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <FButton label="Primary" variant="primary" />
        <FButton label="Secondary" variant="secondary" />
        <FButton label="Success" variant="success" />
        <FButton label="Warning" variant="warning" />
        <FButton label="Danger" variant="danger" />
        <FButton label="Info" variant="info" />
      </div>
    `,
  }),
}

