<template>
  <div class="Mpopover">
      <div class="name clearfix">
        <span class="pull-left">{{data.name}}</span>
        <img class="pull-right" src="../../image/mobile/delete.png" width="34px" alt="" @click="close">
      </div>
      <div class="part">
        <div class="title">
          <span></span>职位要求
        </div>
        <p v-html="data.jobDuties"></p>
        <div class="title">
          <span></span>岗位职责
        </div>
        <p v-html="data.jobRequirements"></p>
        <p>工作地区:{{data.address}}</p>
        <p>工公司福利齐全，五险一金、法定节假日、年终奖、年休假、旅游、工作日餐补每日15元，不定期团建活动。</p>
        <div class="email">
          <a href="mailto:zshr@zs-info.cn"><img src="../../image/mobile/email.png" width="202px" alt=""></a>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name:"popover",
    props:["data"],
    data() {
      return {

      }
    },
    methods:{
      close:function() {
          this.$emit('listenClose',true)
        }
    }
  }
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.Mpopover{
  overflow-y: scroll;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin: auto ;
  height: 76%;
  padding:0 30px;
  width: 90%;
  z-index: 162;
  border-radius: 16px;
  background-color: @white_color;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar{
    width: 0 !important
  }
  .name{
    position:fixed;
    padding-top: 10px;
    width: 80%;
    font-size: 19px;
    height: 48px;
    background-color: @white_color;
  }
  .part{
    margin: 60px 0 20px;
    .title{
      line-height: 19px;
      span{
        display: inline-block;
        margin-right:6px;
        width: 3px;
        height: 19px;
        vertical-align:top;
        background-color: @theme_color;
      }
    }
    p{
      margin: 18px 0;
      font-size: 12px;
      line-height: 22px;
    }
    .email{
      text-align: center;
    }
  }
}
</style>
