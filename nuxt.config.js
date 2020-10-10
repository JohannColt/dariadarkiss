module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dariadarkiss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'normalize.css/normalize.css',
    '~assets/scss/index.scss'
  ],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL + process.env.API_VERSION || 'https://dev.admin.dariadarkiss.com/api/v1/', // Used as fallback if no runtime config is provided
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  plugins: ['./plugins/chunks.js'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  webfontloader: {
    google: {
      families: ['Montserrat:400,500,600,700:cyrillic&display=swap']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['swiper'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

