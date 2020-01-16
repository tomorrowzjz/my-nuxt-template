<template>
    <div class="my-header">
      <div class="header-content">
        <div class="nav-left">
          <ul class="title-t">
            <li>
              <nuxt-link to="/secret">
                发现
              </nuxt-link>
            </li>
            <li>关注</li>
            <li>消息</li>
          </ul>
          <span>
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              class="search-box"
              v-model="searchText">
            </el-input>
          </span>
        </div>

        <!--<div class="avatar-box">头像</div>-->
        <div class="nav-right">
          <span class="avatar-box">
            <img  src="/header/1.jpg" alt="" width="40">
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-button type="danger" round>
            <i class="el-icon-s-promotion"></i>
            写文章
          </el-button>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "myHeader",
        data(){
          return {
            searchText:''
          }
        }
    }
</script>

<style scoped>
  .my-header{

  }
  .header-content{
    display: flex;
    justify-content: space-between;
    min-width: 1200px;
    max-width: 1440px;
    margin: 0 auto;
  }
  .nav-left{
    display: flex
  }
  .search-box{
    margin-top: 10px;
  }
  .nav-right{
    /* display: flex */
  }
  .avatar-box{
    margin: 10px 0;
    line-height: 60px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .title-t{
    display: flex;
  }
  .title-t li{
    font-size: 17px;
    color: #333;
    padding: 0 20px;
    cursor: pointer;
    height: 60px;
    line-height: 60px;
  }
  .el-icon-caret-bottom{
    font-size: 14px;
  }
</style>
