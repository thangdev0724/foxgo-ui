<script setup lang="ts">
import { computed } from 'vue'

export interface FCardProps {
  title?: string
  subtitle?: string
  elevated?: boolean
  bordered?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<FCardProps>(), {
  title: '',
  subtitle: '',
  elevated: true,
  bordered: false,
  hoverable: false,
})

const cardClasses = computed(() => [
  'f-card',
  {
    'f-card--elevated': props.elevated,
    'f-card--bordered': props.bordered,
    'f-card--hoverable': props.hoverable,
  },
])
</script>

<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title || subtitle" class="f-card__header">
      <slot name="header">
        <h3 v-if="title" class="f-card__title">{{ title }}</h3>
        <p v-if="subtitle" class="f-card__subtitle">{{ subtitle }}</p>
      </slot>
    </div>
    <div class="f-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="f-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.f-card {
  background-color: $white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  transition: all $transition-base;

  &--elevated {
    box-shadow: $shadow-md;
  }

  &--bordered {
    border: 1px solid $gray-200;
  }

  &--hoverable {
    cursor: pointer;

    &:hover {
      box-shadow: $shadow-lg;
      transform: translateY(-2px);
    }
  }

  &__header {
    padding: $spacing-md $spacing-lg;
    border-bottom: 1px solid $gray-100;
  }

  &__title {
    margin: 0;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $gray-900;
  }

  &__subtitle {
    margin: $spacing-xs 0 0;
    font-size: $font-size-sm;
    color: $gray-500;
  }

  &__body {
    padding: $spacing-lg;
  }

  &__footer {
    padding: $spacing-md $spacing-lg;
    border-top: 1px solid $gray-100;
    background-color: $gray-50;
  }
}
</style>

