<template>
  <button
    :class="['btn', color, size]"
    type="button"
  >
    <slot></slot>
    <span>{{ label }}</span>
  </button>
</template>
  
<script setup lang="ts">
import { PropType } from 'vue'
import { EColorTypes, EBtnSizes } from './enums'

defineProps({
  label: {
    type: String,
    default: 'Продолжить'
  },
  color: {
    type: String as PropType<EColorTypes>,
    default: EColorTypes.primary
  },
  size: {
    type: String as PropType<EBtnSizes>,
    default: EBtnSizes.normal
  }
})
</script>
  
<style lang="postcss" scoped>
  .btn {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;

    @apply 
      rounded-lg flex justify-center items-center outline-none whitespace-nowrap 
      bg-[var(--primary-color)] text-[var(--white)] px-6 h-[48px];

    &:enabled:hover {
      @apply bg-[var(--primary-color-hover)]
    }

    &:disabled:hover {
      cursor: not-allowed;
    }
  }

  .btn.secondary {
    background-color: var(--secondary-color);
    color: #8491A5;

    &:enabled:hover {
      color: #8491A5;
      background-color: var(--secondary-color-hover);
    }
  }

  .btn.sm {
    height: 40px;
  }

  .btn:disabled {
    background-color: #EEEEF2;
    color: #C9CDDD;
  }
</style>
  