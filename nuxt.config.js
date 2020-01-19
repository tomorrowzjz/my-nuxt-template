
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: 'http://zhangjz.top:3006'
  },
  server: {
    port: 3007, // default: 3000
    host: 'localhost', // default: localhost
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /*全局引入公共样式*/
      { rel: 'stylesheet', href: '/common/common.css' }
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
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios','@nuxtjs/proxy'
  ],
  axios: {
    proxy: true, // 表示开启代理
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3007', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/api', // 把 /api 替换成 /
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['axios'] //为防止重复打包
  }
}
