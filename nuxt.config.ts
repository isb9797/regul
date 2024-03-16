// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/eslint-module",
    "@nuxtjs/storybook",
    "nuxt-bootstrap-icons",
    "nuxt-icons",
    "@nuxt/image"
  ],
  image: {
    inject: true,
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'fa'
      }
    }
  }
})