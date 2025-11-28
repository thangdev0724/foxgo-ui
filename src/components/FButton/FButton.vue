<script setup lang="ts">
import { computed } from 'vue'

export interface FButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  outlined?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<FButtonProps>(), {
  label: '',
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  outlined: false,
  rounded: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'f-button',
  `f-button--${props.variant}`,
  `f-button--${props.size}`,
  {
    'f-button--outlined': props.outlined,
    'f-button--rounded': props.rounded,
    'f-button--loading': props.loading,
    'f-button--disabled': props.disabled,
  },
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="f-button__loader">
      <svg class="f-button__spinner" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" />
      </svg>
    </span>
    <span class="f-button__content">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.f-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-sm;
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all $transition-base;

  // Sizes
  &--sm {
    padding: $spacing-xs $spacing-sm;
    font-size: $font-size-sm;
    border-radius: $border-radius-sm;
  }

  &--md {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    border-radius: $border-radius-md;
  }

  &--lg {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-lg;
    border-radius: $border-radius-lg;
  }

  // Variants
  &--primary {
    background-color: $primary-color;
    color: $white;

    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  }

  &--secondary {
    background-color: $secondary-color;
    color: $white;

    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  }

  &--success {
    background-color: $success-color;
    color: $white;

    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  }

  &--warning {
    background-color: $warning-color;
    color: $white;

    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  }

  &--danger {
    background-color: $danger-color;
    color: $white;

    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  }

  &--info {
    background-color: $info-color;
    color: $white;

    &:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  }

  // States
  &--outlined {
    background-color: transparent;
    border-color: currentColor;

    &.f-button--primary {
      color: $primary-color;
    }
    &.f-button--secondary {
      color: $secondary-color;
    }
    &.f-button--success {
      color: $success-color;
    }
    &.f-button--warning {
      color: $warning-color;
    }
    &.f-button--danger {
      color: $danger-color;
    }
    &.f-button--info {
      color: $info-color;
    }
  }

  &--rounded {
    border-radius: $border-radius-full;
  }

  &--disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--loading {
    position: relative;
    pointer-events: none;
  }

  &__loader {
    display: inline-flex;
  }

  &__spinner {
    width: 1em;
    height: 1em;
    animation: spin 1s linear infinite;

    circle {
      stroke-dasharray: 50;
      stroke-dashoffset: 20;
    }
  }

  &__content {
    display: inline-flex;
    align-items: center;
    gap: $spacing-xs;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

