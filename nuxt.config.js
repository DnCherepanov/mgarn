import tailwindTypography from '@tailwindcss/typography'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mors Garn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;1,400;1,500&family=Alegreya:ital,wght@0,400;0,500;1,400;1,500&family=PT+Mono&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vuelidate' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/rubystarashe/nuxt-vuex-localstorage#readme
    [
      'nuxt-vuex-localstorage',
      {
        sessionStorage: ['order'],
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },
  // Runtime config
  privateRuntimeConfig: {
    airtableKey: process.env.AIRTABLE_KEY || '',
  },

  // Tailwind config
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          display: ['Alegreya SC', 'serif'],
          body: ['Alegreya', 'serif'],
          mono: ['PT Mono', 'monospace'],
        },
      },
      plugins: [tailwindTypography],
    },
  },

  // Server middleware
  serverMiddleware: ['~/api'],
}
