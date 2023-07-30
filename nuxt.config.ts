import { resolve } from "path";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
