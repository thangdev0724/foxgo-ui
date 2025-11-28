<script setup lang="ts">
import { computed } from 'vue'

export interface FInputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  placeholder?: string
  label?: string
  disabled?: boolean
  readonly?: boolean
  error?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<FInputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  label: '',
  disabled: false,
  readonly: false,
  error: '',
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputClasses = computed(() => [
  'f-input',
  `f-input--${props.size}`,
  {
    'f-input--disabled': props.disabled,
    'f-input--error': !!props.error,
  },
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', props.type === 'number' ? Number(target.value) : target.value)
}
</script>

<template>
  <div class="f-input-wrapper">
    <label v-if="label" class="f-input__label">{{ label }}</label>
    <input
      :class="inputClasses"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />
    <span v-if="error" class="f-input__error">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped>
.f-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
}

.f-input {
  font-family: $font-family-base;
  border: 1px solid $gray-300;
  background-color: $white;
  color: $gray-900;
  transition: all $transition-base;
  width: 100%;

  &:focus {
    outline: none;
    border-color: $primary-color;
    box-shadow: 0 0 0 3px rgba($primary-color, 0.15);
  }

  &::placeholder {
    color: $gray-400;
  }

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

  // States
  &--disabled {
    background-color: $gray-100;
    cursor: not-allowed;
    opacity: 0.6;
  }

  &--error {
    border-color: $danger-color;

    &:focus {
      border-color: $danger-color;
      box-shadow: 0 0 0 3px rgba($danger-color, 0.15);
    }
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $gray-700;
  }

  &__error {
    font-size: $font-size-sm;
    color: $danger-color;
  }
}
</style>

