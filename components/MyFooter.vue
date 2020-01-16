<template>
    <div class="fixed-box">
        <el-button type="primary">提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style scoped>
  .fixed-box {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    background: #ffffff;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 2px solid #ec7259;;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.16);
    align-items: center;
    justify-content: space-around;
  }
</style>
