<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    <slot>{{ title }}</slot>
  </label>
</template>
