<script setup lang="ts">
import { useLoadingStore } from "~/stores/loading";
import { useAuthStore, type User } from "~/stores/auth";

const loadingStore = useLoadingStore();
const authStore = useAuthStore();

const data = reactive({
  username: "",
  password: "",
  remember: false,
});

definePageMeta({
  middleware: "guest",
});

const { $toast } = useNuxtApp();

const submit = async () => {
  loadingStore.startLoading();
  try {
    const loginData: User = await $fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: data,
    });

    // reset state data
    data.username = "";
    data.password = "";
    data.remember = false;

    // update auth store
    authStore.updateToken(loginData);
    navigateTo("/dashboard");
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
