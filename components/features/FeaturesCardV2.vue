<template>
  <div
    class="relative overflow-hidden rounded-lg border bg-white dark:bg-transparent select-none hover:shadow hover:shadow-primary p-2"
  >
    <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
      <NuxtImg :src="iconPath" :alt="title" class="w-12 h-12 rounded-lg" />
      <div class="space-y-2">
        <h3 class="font-bold">{{ title }}</h3>
        <p class="text-sm text-muted-foreground">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  iconPath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
