<template>
  <div class="container">
    <div class="slider-left">
      <!-- <div class="content-title">浏览器缓存</div> -->
      <div class="slider-right-item slider-right-item-l">
        <nuxt-link to="/timeline">
          <img class="avatar-box avatar-box-l" src="/header/1.jpg" alt width="80" />
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
        <!-- <div >
          {{article}}
        </div> -->
        <ul class="note-list">
          <li id="note-58886057" data-note-id="58886057" class="have-img" v-for="article in articles" :key="article.id">
            <a class="wrap-img" href="/p/3078d2d06905" target="_blank">
              <img class="  img-blur-done" src="https://upload-images.jianshu.io/upload_images/16627522-16fb8556551fa6d0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" width="120">
            </a>
          <div class="content ">
            浏览器缓存
            <p class="abstract">
              参考文章链接 ：  前端优化：浏览器缓存技术介绍 - 掘金  浅谈http中的Cache-Control_小小郭-CSDN博客 强制缓存(Exp...
            </p>
            <div class="meta">
              <!-- <a target="_blank" href="/p/3078d2d06905"> -->
                <i class="iconfont ic-list-read"></i> 15
              <!-- </a>  -->
               <!-- <a target="_blank" href="/p/3078d2d06905#comments"> -->
                  <i class="iconfont ic-list-comments"></i> 1
        <!-- </a>  -->
             <span><i class="iconfont ic-list-like"></i> 0</span>
              <span class="time" data-shared-at="2020-01-13T17:53:27+08:00">01.13 17:53</span>
            </div>
          </div>
        </li>
        </ul>
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
    let { data } = await axios.get("/api/articles");
    let recommendationsData = await axios.get("/api/recommendations");
    let recommendations = recommendationsData.data
    return {
      articles: data,
      recommendations: recommendations
    };
  },
  data() {
    return {
      articles: []
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
.note-list{
  position: relative;
}
.have-img>div {
    padding-right: 140px;
}
.have-img .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
}
.note-list li {
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
}
.note-list .title:visited {
    color: #969696;
}
.note-list .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
.note-list .meta {
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color:#333;
}
.note-list .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
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
.avatar-box-l {
  display: block;
  border-radius: 50%;
  border: 1px solid #eee;
  min-width: 45px;
  min-height: 45px;
  width: 80px;
  height: 80px;
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
  min-height: 80px;
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
