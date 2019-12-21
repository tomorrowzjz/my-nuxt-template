<template>
    <div class="my-header">
      <ul class="title-t">
        <li>发现</li>
        <li>关注</li>
        <li>消息</li>
      </ul>
      <div class="avatar-box">头像</div>
    </div>
</template>

<script>
    export default {
        name: "myHeader"
    }
</script>

<style scoped>
  .my-header{
    display: flex;
    justify-content: space-between;
  }
  .avatar-box{
    height: 60px;
    line-height: 60px;
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
</style>
