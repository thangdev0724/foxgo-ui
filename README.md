# Foxgo UI

A reusable Vue 3 component library built with TypeScript, SCSS, and PrimeVue integration.

## Features

- 🚀 **Vue 3** with Composition API and `<script setup>`
- 📦 **TypeScript** for type safety
- 🎨 **SCSS** with customizable variables
- 📚 **Storybook** for component documentation
- 🔧 **Vite** for fast development and optimized builds
- 📱 **PrimeVue** integration (optional)

## Installation

### From GitHub

```bash
# pnpm
pnpm add github:thangdev0724/foxgo-ui

# npm
npm install github:thangdev0724/foxgo-ui

# yarn
yarn add github:thangdev0724/foxgo-ui
```

### With specific version/branch

```bash
pnpm add github:thangdev0724/foxgo-ui#main
pnpm add github:thangdev0724/foxgo-ui#v0.1.0
```

## Usage

### Register all components globally

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import FoxgoUI from 'foxgo-ui'
import 'foxgo-ui/style.css'

const app = createApp(App)
app.use(FoxgoUI)
app.mount('#app')
```

### Import individual components

```vue
<script setup lang="ts">
import { FButton, FCard, FInput } from 'foxgo-ui'
import 'foxgo-ui/style.css'
</script>

<template>
  <FCard title="Contact Form" hoverable>
    <FInput label="Email" placeholder="Enter your email" />
    <FInput label="Message" placeholder="Enter your message" />
    <FButton label="Submit" variant="primary" />
  </FCard>
</template>
```

## Components

### FButton

A customizable button component.

```vue
<FButton label="Click me" variant="primary" size="md" />
<FButton label="Loading" :loading="true" />
<FButton label="Outlined" variant="success" outlined />
<FButton label="Rounded" rounded />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Button text |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable button |
| `loading` | `boolean` | `false` | Show loading spinner |
| `outlined` | `boolean` | `false` | Outlined style |
| `rounded` | `boolean` | `false` | Rounded corners |

### FInput

A form input component with label and error state.

```vue
<FInput label="Username" v-model="username" placeholder="Enter username" />
<FInput label="Email" :error="'Invalid email'" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | - | Input value (v-model) |
| `label` | `string` | - | Input label |
| `placeholder` | `string` | - | Placeholder text |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |

### FCard

A card container component with header and footer slots.

```vue
<FCard title="Card Title" subtitle="Optional subtitle" elevated hoverable>
  <p>Card content goes here</p>
  <template #footer>
    <FButton label="Action" />
  </template>
</FCard>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `elevated` | `boolean` | `false` | Add shadow |
| `bordered` | `boolean` | `true` | Show border |
| `hoverable` | `boolean` | `false` | Hover effect |

**Slots:**

- `default` - Card body content
- `header` - Custom header (overrides title/subtitle)
- `footer` - Card footer

## Development

### Setup

```bash
pnpm install
```

### Development server

```bash
pnpm dev
```

### Storybook

```bash
pnpm storybook
```

### Build library

```bash
pnpm build:lib
```

### Lint

```bash
pnpm lint
```

## Customization

Override SCSS variables by creating your own variables file:

```scss
// your-variables.scss
$primary-color: #your-color;
$secondary-color: #your-color;
// ... other variables
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
