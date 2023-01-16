<template>
  <button
    class="btn"
    type="button"
  >
    <slot></slot>
    <span>Hello btn</span>
  </button>
</template>
  
<script setup lang="ts">  
</script>
  
<style lang="postcss" scoped>
  .btn {
    @apply rounded flex justify-center items-center  text-white outline-none whitespace-nowrap;
  }
</style>
  