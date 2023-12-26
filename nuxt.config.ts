// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-headlessui",
    "@pinia/nuxt",
  ],
  googleFonts: {
    families: {
      Nunito: true,
    },
  },
  runtimeConfig: {
    public: {
      API_BASEURL: process.env.API_BASEURL,
    },
  },
  headlessui: {
    prefix: "",
  },
  pinia: {
    autoImports: [["defineStore", "definePiniaStore"]],
  },
  imports: {
    dirs: ["stores"],
  },
});
