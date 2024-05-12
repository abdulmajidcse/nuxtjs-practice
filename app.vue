<script setup lang="ts">
const counter = useState("counter", () => 0);
</script>

<template>
  <div>
    <button @click="counter++">Counter = {{ counter }}</button>
    <div>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
