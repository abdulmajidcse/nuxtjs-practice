<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <h1>Welcome to your Dashboard!</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
  </div>
</template>
