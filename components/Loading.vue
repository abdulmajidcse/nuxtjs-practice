<script setup lang="ts">
import { useLoadingStore } from "~/stores/loading";

const loadingStore = useLoadingStore();

withDefaults(
  defineProps<{
    title?: string;
  }>(),
  { title: "Please, wait..." }
);
</script>

<template>
  <div
    v-show="loadingStore.isLoading"
    class="fixed h-screen w-full top-0 left-0 z-[500] flex justify-center items-center backdrop-blur-sm"
  >
    <button
      disabled
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
    >
      <font-awesome icon="rotate" class="text-white animate-spin" />
      <span class="ml-2">{{ title }}</span>
    </button>
  </div>
</template>
