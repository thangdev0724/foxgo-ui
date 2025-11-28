// =====================================================
// FoxGo UI - Component Library
// =====================================================

import type { App, Plugin } from 'vue'

// Import styles
import './styles/index.scss'

// Export all components
export * from './components'

// Import components for plugin registration
import { FButton, FCard, FInput } from './components'

// Vue Plugin
const FoxgoUI: Plugin = {
  install(app: App) {
    // Register all components globally
    app.component('FButton', FButton)
    app.component('FCard', FCard)
    app.component('FInput', FInput)
  },
}

export default FoxgoUI

// Export individual install function
export { FoxgoUI }

