<template>
  <div class="sidebar">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
    >{{ link.name }}</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

type TSideBarItem = {
  name: string;
  href: string;
};

const links = ref([
  { 
    name: "Typography", 
    href: "/typography" 
  },
  { 
    name: "Colors", 
    href: "/colors" 
  },
  { 
    name: "Icons", 
    href: "/icons" 
  },
  { 
    name: "Buttons", 
    href: "/buttons" 
  },
  { 
    name: "Modals", 
    href: "/modals" 
  },
  { 
    name: "Menus", 
    href: "/menu"
  },
]) as Ref<TSideBarItem[]>;
</script>

<style lang="postcss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  bottom: 0;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
}
.sidebar__link {
  display: block;
  border-radius: 12px;
  border: 2px solid var(--black);
  transition: 0.2s;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>