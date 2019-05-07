<template>
  <div class="head_template">
    <div class="container">
        <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'headTemplate',
    props: ["title"],
    data() {
      return {

      }
    },
  }
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.head_template{
  width:100%;
  margin-top:80px;
  padding-top:100px;
  height:180px;
  background-image:url(../../image/tiaofu.png);
  .container{
    height:105px;
    background-color: @white_color;
    p{
      margin: 0 40px;
      height:105px;
      line-height: 105px;
      font-size: 18px;
      border-bottom:1px solid @gray_color;
    }
  }
}
</style>
