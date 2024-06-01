<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <NuxtLayout>
    <Loading />
    <NuxtPage />
  </NuxtLayout>
</template>
