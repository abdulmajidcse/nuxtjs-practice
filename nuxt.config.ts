// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vesp/nuxt-fontawesome",
  ],
  plugins: ["~/plugins/init-auth"],
  fontawesome: {
    icons: {
      solid: ["rotate"],
      regular: ["user"],
    },
  },
});
