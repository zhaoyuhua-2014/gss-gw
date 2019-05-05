<template>
  <div class="navbar-fixed-top mobile_nav" >
    <div class="nav clearfix">
      <img src="../../image/title.png" class="pull-left" alt="">
      <img src="../../image/mobile/btn.png"  class="pull-right"   alt="" @click="collapse" >
    </div>
    <ul class="collapse">
      <router-link :to="'home'" tag="li" class="col-md-2 li_style li_home">
        首页
      </router-link>
      <router-link :to="'introduce'" tag="li" class="col-md-2 li_style li_introduce">
        公司介绍
      </router-link>
      <router-link :to="'service'" tag="li" class="col-md-2 li_style li_service">
          服务保障
      </router-link>
      <router-link :to="'download'" tag="li" class="col-md-2 li_style li_download">
          APP下载
      </router-link>
      <router-link :to="'cooperation'" tag="li" class="col-md-2 li_style li_cooperation">
          合作商家
      </router-link>
      <router-link :to="'join'" tag="li" class="col-md-2 li_style li_join">
          加入我们
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
      collapse(){
        $('.collapse').animate({height:'toggle'})
      }
    }
  }
</script>

<style lang="less" >
.mobile_nav{
  width:100%;
  // z-index: 99;
  .nav{
    height:56px;
    background-color: #f6f6f6;
    .pull-left{
      width: 104px;
      margin-top:16px;
      margin-left:16px;
    }
    .pull-right{
      margin-top:16px;
      margin-right:16px;
      width: 28px;
    }
  }
  .collapsing,
  .collapse{
    width: 100%;
    height: 800px;
    padding-top:60px;
    font-size:18px;
    text-align: center ;
    background-color: #f2f2f2;
    li{
      margin-bottom:30px;
    }
  }
}


</style>
