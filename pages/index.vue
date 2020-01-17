<template>
  <div class="container-c">
    <el-header>
      <my-header class="header-box"></my-header>
    </el-header>
    <el-main class="main-box">
      <nuxt-child />
      <!-- <main-content></main-content> -->
    </el-main>
    <!--<el-footer>Footer</el-footer>-->
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from '~/components/MyHeader.vue'
  import myFooter from '~/components/MyFooter.vue'
  export default {
    components: {
      myHeader,
      myFooter
    },
    created(){
      console.log(this.$route)
      if(this.$route.fullPath === '/'){
        this.$router.push('/content');
      }
    }
  }

</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.container-c{
  min-width: 1200px;
  max-width: 1440px;
  margin: 0 auto;
  transition: transform .3s cubic-bezier(.645,.045,.355,1);
}
.main-box{
  height: calc(100% - 120px);
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.header-box{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  z-index: 100;
}
</style>
