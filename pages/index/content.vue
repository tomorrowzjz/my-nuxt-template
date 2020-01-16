<template>
  <div class="container">
    <div class="slider-left">
      <div class="content-title">浏览器缓存</div>
      <div class="slider-right-item slider-right-item-l">
        <nuxt-link to="/timeline">
          <img class="avatar-box" src="/header/1.jpg" alt width="40" />
        </nuxt-link>
        <div class="info-box">
          <div class="_2O0T_w">
            <div class="_2v-h3G">
              <span class="_2vh4fr" title="冷暖自知_zjz">
                <a
                  class="_1OhGeD"
                  href="/u/3fd1cc7ddf0c"
                  target="_blank"
                  rel="noopener noreferrer"
                >冷暖自知_zjz</a>
              </span>
            </div>
          </div>
          <div class="_1pXc22">2020.01.13 17:53:27字数 896阅读 0</div>
        </div>
      </div>
      <div class="main-content">
        <article class="_2rhmJa">
          <h4>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;参考文章链接&nbsp; ：</b>
          </h4>
          <h4>
            &nbsp; &nbsp;&nbsp;
            <el-button type="text" class="jump-text" @click="jumpTo('https://juejin.im/post/5b9346dcf265da0aac6fbe57')">前端优化：浏览器缓存技术介绍 - 掘金</el-button>
          </h4>
          <h4>
            <b>&nbsp; &nbsp;&nbsp;</b>
            <b>
              <el-button type="text" class="jump-text" @click="jumpTo('https://blog.csdn.net/u012375924/article/details/82806617')">浅谈http中的Cache-Control_小小郭-CSDN博客</el-button>
            </b>
          </h4>
          <h4>
            <b>强制缓存&nbsp;(Expires和Cache-Control)&nbsp;不会发请求到服务器</b>
            <br />
          </h4>
          <p>&nbsp;Expires&nbsp;返回的HTTP状态为200&nbsp;是HTTP&nbsp;1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在response的header加上Expires的header</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.浏览器在接收到这个资源后，会把这个资源连同所有responseheader一起缓存下来（所以缓存命中的请求返回的header并不是来自服务器，而是来自之前缓存的header</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.浏览器再请求这个资源时，先从缓存中寻找，找到这个资源后，拿出它的Expires跟当前的请求时间比较，如果请求时间在</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expires指定的时间之前，就能命中缓存，否则就不行</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.如果缓存没有命中，浏览器直接从服务器加载资源时，Expires&nbsp;Header在重新加载的时候会被更新</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expires&nbsp;返回的是一个绝对时间&nbsp;存在客户端和服务器端时间不一致的情况</p>
          <p>Cache-Control&nbsp;是HTTP&nbsp;1.1的时候，提出了的一个新的header是一个相对时间，在配置缓存的时候，以秒为单位，用数值表示</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如：Cache-Control:max-age=315360000，&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原理和Expires类似&nbsp;&nbsp;如果同时存在&nbsp;Expires和Cache-Control&nbsp;Cache-Control优先</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cache-Control:public&nbsp;//允许所有服务器缓存该资源</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cache-Control:private&nbsp;//表示该资源仅仅属于发出请求的最终用户，这将禁止中间服务器（如代理服务器）缓存此类资源</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cache-Control:no-cache&nbsp;//不直接使用缓存，需要向服务器发送信息</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cache-Control:no-store&nbsp;//所有内容不会被缓存或者保存在网络的临时文件中&nbsp;&nbsp;优先级最高</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cache-Control:only-if-cached&nbsp;&nbsp;//&nbsp;告诉代理服务器希望获取缓存的内容，不用向原服务器发送请求</p>
          <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 在请求中使用Cache-Control&nbsp;时，它可选的值有：</p>
          <div class="image-package">
            <div
              class="image-container"
              style="max-width: 692px; max-height: 511px; background-color: transparent;"
            >
              <div class="image-container-fill"></div>
              <div class="image-view" data-width="692" data-height="511">
                <img
                  data-original-src="//upload-images.jianshu.io/upload_images/16627522-16fb8556551fa6d0.png"
                  data-original-width="692"
                  data-original-height="511"
                  data-original-format="image/png"
                  data-original-filesize="80569"
                  data-image-index="0"
                  style="cursor: zoom-in;"
                  class
                  src="//upload-images.jianshu.io/upload_images/16627522-16fb8556551fa6d0.png?imageMogr2/auto-orient/strip|imageView2/2/w/692/format/webp"
                />
              </div>
            </div>
            <div class="image-container-fill" style="padding-bottom: 6%;"></div>
            <div class="image-caption">在响应中使用Cache-Control&nbsp;时，它可选的值有：</div>
          </div>

          <div class="image-package">
            <div
              class="image-container"
              style="max-width: 691px; max-height: 433px; background-color: transparent;"
            >

              <div class="image-view" data-width="691" data-height="433">
                <img
                  data-original-src="//upload-images.jianshu.io/upload_images/16627522-f5a20753644f1029.png"
                  data-original-width="691"
                  data-original-height="433"
                  data-original-format="image/png"
                  data-original-filesize="64221"
                  data-image-index="1"
                  style="cursor: zoom-in;"
                  class
                  src="//upload-images.jianshu.io/upload_images/16627522-f5a20753644f1029.png?imageMogr2/auto-orient/strip|imageView2/2/w/691/format/webp"
                />
              </div>
            </div>
            <div class="image-caption"></div>
          </div>
        </article>
      </div>
      <!-- <div class="links">
        <el-button type="primary">testElement</el-button>
        <el-button type="danger">dangertest</el-button>
      </div> -->
    </div>
    <div>
      <section class="slider-right">
        <div class="slider-right-item">
          <a target="_blank" rel="noopener noreferrer">
            <img class="avatar-box" src="/header/1.jpg" alt width="40" />
          </a>
          <div class="info-box">
            <div class="_2O0T_w">
              <div class="_2v-h3G">
                <span class="_2vh4fr" title="冷暖自知_zjz">
                  <a
                    class="_1OhGeD"
                    href="/u/3fd1cc7ddf0c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >冷暖自知_zjz</a>
                </span>
              </div>
            </div>
            <div class="_1pXc22">总资产0.248 (约0.02元)</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="artical-box" role="listitem">
          <div class="artical-title" title="koa入门">
            <a target="_blank">koa入门</a>
          </div>
          <div class="read-number">阅读 0</div>
        </div>
        <div class="artical-title">
          <div title="nuxt  部署上线">
            <a target="_blank">nuxt 部署上线</a>
          </div>
          <div class="read-number">阅读 128</div>
        </div>
      </section>
      <div class="slider-right right">
        <div class="title-recom">
          <span class="block"></span>
          <h3>推荐阅读</h3>
        </div>

        <div>
          <div class="artical-title re-item" v-for="recommend in recommendations" :key="recommend.id">
            <div title="nuxt  部署上线">
              <a target="_blank">{{recommend.title}}</a>
            </div>
            <div class="read-number">阅读 {{recommend.views_count}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import axios from "~/plugins/axios";

export default {
  async asyncData() {
    // let { data } = await axios.get("/api/test");
    let { data } = await axios.get("/api/recommendations");
    return {
      recommendations: data
    };
  },
  data() {
    return {
      recommendations: []
    };
  },
  components: {
    Logo
  },
  methods:{
    jump(e){
      window.open(e);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  /*min-height: 100vh;*/
  display: flex;
  /* justify-content: center; */
  align-items: flex-start;
  min-height: calc(100vh - 66px);
  padding-top: 10px;
  font-size: 16px;
  box-sizing: content-box;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 40px;
}
.main-content {
}
.main-content h4{
  margin-bottom: 16px;
}
.main-content h1{
  margin-bottom: 16px;
}
.main-content p{
  margin-bottom: 16px;
}
.slider-right {
  flex-shrink: 0;
  width: 260px;
  padding: 24px;
  background: #fff;
}
.jump-text{
  font-size: 20px;
}
.content-title {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
  text-rendering: optimizelegibility;
  margin-bottom: 15px;
}
.block {
  display: inline-block;
  width: 4px;
  height: 18px;
  background-color: #ec7259;
}
.title-recom {
  display: flex;
}
.right {
  margin-top: 10px;
}
.re-item {
  margin-top: 12px;
}
.right h3 {
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
  font-weight: 500;
}
.slider-left {
  width: 730px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 24px;
  margin-right: 10px;
  box-sizing: border-box;
}
.artical-box {
  font-size: 14px;
  line-height: 22px;
  color: #2d2d2d;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.artical-title {
  display: block;
}
.read-number {
  font-size: 12px;
  color: #969696;
}
.line {
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #eee;
}
.avatar-box {
  display: block;
  border-radius: 50%;
  border: 1px solid #eee;
  min-width: 45px;
  min-height: 45px;
  width: 45px;
  height: 45px;
}
.info-box {
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
}
.slider-right-item {
  display: flex;
  align-items: center;
  min-height: 45px;
}
.slider-right-item-l{
  margin-bottom: 32px;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
