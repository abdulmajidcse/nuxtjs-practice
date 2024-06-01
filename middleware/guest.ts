import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

export default defineNuxtRouteMiddleware(async (to, from) => {
  const status = await authStore.getMe();

  if (status) {
    return navigateTo("/dashboard");
  }
});
