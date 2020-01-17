const Koa = require("koa");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");

const app = new Koa();

const Router = require("koa-router");
const router = new Router();

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = app.env !== "production";

const index = async (ctx, next) => {
  ctx.response.type = "text";
  ctx.response.body = [
    {
      id: 55953226,
      slug: "a1e6d6ba2c38",
      title: "从零开始的Koa实战（4） MongoDB",
      view_count: 39,
      user: {
        id: 14357152,
        nickname: "moyufed",
        slug: "245a89132991",
        avatar:
          ""
      }
    },
    {
      id: 42906506,
      slug: "9ae9ab85d6e9",
      title: "什么是DOM的事件委托",
      view_count: 256,
      user: {
        id: 14357152,
        nickname: "moyufed",
        slug: "245a89132991",
        avatar:
          ""
      }
    },
    {
      id: 41912432,
      slug: "997f9d28b52a",
      title: "从零开始的Koa实战（3） 日志",
      view_count: 241,
      user: {
        id: 14357152,
        nickname: "moyufed",
        slug: "245a89132991",
        avatar:
          ""
      }
    }
  ];
};
const recommendations = async (ctx, next) => {
  ctx.response.type = "text";
  ctx.response.body = [
    {
      id: 54195011,
      slug: "bfb13f10c528",
      list_image_url: "",
      title: "真想打她一顿",
      views_count: 27049
    },
    {
      id: 57446127,
      slug: "cefbaf33bdbf",
      list_image_url:
        "https://upload-images.jianshu.io/upload_images/20184027-114b2215d95a744d.png",
      title: "2019年底史上最全Vue框架整理从基础到实战(一)",
      views_count: 1348
    },
    {
      id: 54508135,
      slug: "8921e795c955",
      list_image_url: "",
      title: "远离自私的人",
      views_count: 2715
    },
    {
      id: 54904179,
      slug: "88cfd24750fe",
      list_image_url:
        "https://upload-images.jianshu.io/upload_images/13717038-1bf661c00ce2fb7c",
      title: "python爬虫：做一个界面爬虫小软件",
      views_count: 5109
    },
    {
      id: 54345962,
      slug: "2ac400722d06",
      list_image_url:
        "https://upload-images.jianshu.io/upload_images/11490866-3356d9c82f426f22.png",
      title: "vue 从项目搭建到一些简单操作示例（附项目地址）",
      views_count: 569
    }
  ];
};
const articles = async (ctx, next) => {
  ctx.response.type = "text";
  ctx.response.body = [
    {
      id: 54195011,
      slug: "bfb13f10c528",
      list_image_url: "",
      title: "真想打她一顿",
      views_count: 27049
    },
    {
      id: 57446127,
      slug: "cefbaf33bdbf",
      list_image_url:
        "",
      title: "2019年底史上最全Vue框架整理从基础到实战(一)",
      views_count: 1348
    },
    {
      id: 54508135,
      slug: "8921e795c955",
      list_image_url: "",
      title: "远离自私的人",
      views_count: 2715
    },
    {
      id: 54904179,
      slug: "88cfd24750fe",
      list_image_url:
        "",
      title: "python爬虫：做一个界面爬虫小软件",
      views_count: 5109
    },
    {
      id: 54345962,
      slug: "2ac400722d06",
      list_image_url:
        "",
      title: "vue 从项目搭建到一些简单操作示例（附项目地址）",
      views_count: 569
    }
  ];
};
router.get("/api/test", index);
router.get("/api/articles", articles);
router.get("/api/recommendations", recommendations);

app.use(router.routes());

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3007
  } = nuxt.options.server;

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
