<template>
  <div class="container">
    <layout-header />
    <layout-sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "@/components/Layout/Header.vue";
import LayoutSidebar from "@/components/Layout/Sidebar.vue";
</script>

<style scoped>
.content {
  max-width: 1400px;
  padding: 30px;
  margin-left: 290px;
}
</style>
