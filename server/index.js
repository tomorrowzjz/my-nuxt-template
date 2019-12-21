const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

const Router = require('koa-router')
const router = new Router();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

const index = async (ctx, next) => {
  ctx.response.type = 'text';
  ctx.response.body = [{
    "id": 55953226,
    "slug": "a1e6d6ba2c38",
    "title": "从零开始的Koa实战（4） MongoDB",
    "view_count": 39,
    "user": {
      "id": 14357152,
      "nickname": "moyufed",
      "slug": "245a89132991",
      "avatar": "https://cdn2.jianshu.io/assets/default_avatar/13-394c31a9cb492fcb39c27422ca7d2815.jpg"
    }
  }, {
    "id": 42906506,
    "slug": "9ae9ab85d6e9",
    "title": "什么是DOM的事件委托",
    "view_count": 256,
    "user": {
      "id": 14357152,
      "nickname": "moyufed",
      "slug": "245a89132991",
      "avatar": "https://cdn2.jianshu.io/assets/default_avatar/13-394c31a9cb492fcb39c27422ca7d2815.jpg"
    }
  }, {
    "id": 41912432,
    "slug": "997f9d28b52a",
    "title": "从零开始的Koa实战（3） 日志",
    "view_count": 241,
    "user": {
      "id": 14357152,
      "nickname": "moyufed",
      "slug": "245a89132991",
      "avatar": "https://cdn2.jianshu.io/assets/default_avatar/13-394c31a9cb492fcb39c27422ca7d2815.jpg"
    }
  }]
};
router.get('/api/test', index);

app.use(router.routes())

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
