// plugins/initAuth.js
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
  useAuthStore(nuxtApp.$pinia);
});
