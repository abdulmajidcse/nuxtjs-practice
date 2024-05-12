<script setup lang="ts">
const counter = useState("counter");
</script>

<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <button @click="counter++">Counter = {{ counter }}</button>
  </section>
</template>
