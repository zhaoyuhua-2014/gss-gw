<template>
  <div class="head_template">
      <p>{{title[0]}}<span>{{title[1]}}</span></p>
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
  margin:56px 5% 0;
  height: 50px;
  line-height: 50px;
  p{
    border-bottom: 1px solid @gray_color;
    letter-spacing: 1px;
    span{
      color: #777;
    }
  }
}
</style>
