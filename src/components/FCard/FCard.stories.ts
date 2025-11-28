import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FCard from './FCard.vue'
import FButton from '../FButton/FButton.vue'

const meta: Meta<typeof FCard> = {
  title: 'Components/FCard',
  component: FCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    elevated: { control: 'boolean' },
    bordered: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
  },
  render: (args) => ({
    components: { FCard },
    setup() {
      return { args }
    },
    template: `
      <FCard v-bind="args">
        <p>This is the card content. You can put any content here.</p>
      </FCard>
    `,
  }),
}

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    elevated: true,
    subtitle: '',
  },
  render: (args) => ({
    components: { FCard },
    setup() {
      return { args }
    },
    template: `
      <FCard v-bind="args">
        <p>This card has elevation shadow.</p>
      </FCard>
    `,
  }),
}

export const Bordered: Story = {
  args: {
    title: 'Bordered Card',
    bordered: true,
    elevated: false,
  },
  render: (args) => ({
    components: { FCard },
    setup() {
      return { args }
    },
    template: `
      <FCard v-bind="args">
        <p>This card has a border instead of shadow.</p>
      </FCard>
    `,
  }),
}

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
  },
  render: (args) => ({
    components: { FCard },
    setup() {
      return { args }
    },
    template: `
      <FCard v-bind="args">
        <p>Hover over this card to see the effect!</p>
      </FCard>
    `,
  }),
}

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    subtitle: 'A card with custom footer',
  },
  render: (args) => ({
    components: { FCard, FButton },
    setup() {
      return { args }
    },
    template: `
      <FCard v-bind="args">
        <p>This card has a footer with action buttons.</p>
        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <FButton label="Cancel" variant="secondary" size="sm" />
            <FButton label="Save" variant="primary" size="sm" />
          </div>
        </template>
      </FCard>
    `,
  }),
}

export const CustomHeader: Story = {
  render: () => ({
    components: { FCard },
    template: `
      <FCard>
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Custom Header</h3>
            <span style="color: #22c55e;">● Active</span>
          </div>
        </template>
        <p>This card has a custom header slot.</p>
      </FCard>
    `,
  }),
}
