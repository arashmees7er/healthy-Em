import pkg from './package'
import gg from './pages'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: gg,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "@/assets/element-ui/element-ui.scss",
    "@/assets/bootstrap/bootstrap.scss",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/components"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    // your settings here
    sass: ["./assets/theme/resources.scss"]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
