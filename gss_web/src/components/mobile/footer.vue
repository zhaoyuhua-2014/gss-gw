<template>
  <div class="m_footer">
    <p><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备13029432号-5 | Copyright©2015-2021</a></p>
    <p>杭州果速科技有限公司 版权所有</p>
  </div>
</template>

<script>
  export default {
    name:'Mfooter',
    data() {
      return {

      }
    },
  }
</script>

<style lang="less" scoped>
.m_footer{
  margin-top: 20px;
  padding: 20px 0 10px;
  width: 100%;
  line-height: 22px;
  font-size:12px;
  text-align: center;
  background-color: #f6f6f6;
  p{
    margin: 0;
    a{
      color: #333333;
    }
    a:link{
      color: #333333;
    }
  }
}
</style>
