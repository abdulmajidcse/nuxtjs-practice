import Vue3Toastify, { toast, type ToastType } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 1000 });

  return {
    provide: {
      toast: (message: string, type: ToastType = "info") =>
        toast(message, {
          position: toast.POSITION.TOP_CENTER,
          type,
          autoClose: 5000,
        }),
    },
  };
});
