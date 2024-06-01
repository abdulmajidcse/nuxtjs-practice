<script setup lang="ts">
import { useLoadingStore } from "~/stores/loading";

const loadingStore = useLoadingStore();

const data = reactive({
  username: "",
  password: "",
  remember: false,
});

const { $toast } = useNuxtApp();

const submit = async () => {
  loadingStore.startLoading();
  try {
    const loginData = await $fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: data,
    });

    $toast("Login successed!");
  } catch (error: any) {
    $toast(error.response?._data?.message ?? "Something is wrong!", "error");
  } finally {
    loadingStore.stopLoading();
  }
};
</script>

<template>
  <form class="max-w-sm mx-auto" @submit.prevent="submit">
    <FormInput
      type="text"
      id="username"
      v-model="data.username"
      title="Your Username"
      required
    />

    <FormInput
      type="password"
      id="password"
      v-model="data.password"
      title="Your password"
      required
    />

    <FormCheckbox id="remember" v-model="data.remember" title="Remember me" />

    <button type="submit" class="blue-button">Submit</button>
  </form>
</template>
