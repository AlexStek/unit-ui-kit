<template>
  <div>
    <a href="https://theunit.ru/" target="_blank">
      <img src="/logo.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="Unit's ui-kit package" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
