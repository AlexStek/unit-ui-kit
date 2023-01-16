
<template>
  <h2 class="font-bold mb-1">Primary</h2>
  <div class="flex">
    <UButton
      label="Primary button"
      class="mr-2"
    />
    <UButton
      label="Primary disabled"
      disabled
    />
  </div>
  <h2 class="font-bold mt-4 mb-1">Secondary</h2>
  <div class="flex">
    <UButton
      label="Secondary button"
      class="mr-1"
    />
    <UButton
      label="Secondary disabled"
      disabled
    />
  </div>

  <h2 class="font-bold mt-4 mb-1">Primary small</h2>
  <div class="flex">
    <UButton
      label="Primary small"
      :color="EColorTypes.secondary"
      :size="EBtnSizes.small"
      class="mr-2"
    />
    <UButton
      label="Small disabled"
      :size="EBtnSizes.small"
      disabled
    />
  </div>
  <h2 class="font-bold mt-4 mb-1">Secondary small</h2>
  <div class="flex">
    <UButton
      label="Secondary small"
      :color="EColorTypes.secondary"
      :size="EBtnSizes.small"
      class="mr-1"
    />
    <UButton
      label="Small disabled"
      :size="EBtnSizes.small"
      disabled
    />
  </div>
  <h2 class="font-bold mt-4 mb-1">With icon</h2>
  <UButton
    label="Projects"
    class="mr-2"
  >
    <img class="icon mr-3" src="/icons/menu/projects.svg" alt="">
  </UButton>
</template>

<script setup lang="ts">
import { EColorTypes, EBtnSizes } from "@/components/buttons/enums";
import { UButton } from "@/components";
</script>