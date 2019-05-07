<template>
  <div class="navbar-fixed-top mobile_nav" >
    <div class="nav clearfix">
      <img src="../../image/title.png" class="pull-left" alt="">
      <img src="../../image/mobile/btn.png"  class="pull-right"   alt="" @click="collapse" >
    </div>
    <ul class="navCollapse">
      <li class="col-md-2 li_style " v-for="(item,index) in data " :class="'li_'+item.router" :key="index" @click="closeCollapse(item.router)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data:data
      }
    },
    methods:{
      collapse(){
        $('.navCollapse').animate({height:'800px'})
      },
      closeCollapse(router){
        let data = '/'+router;
        this.$router.push({path:data})
        $('.navCollapse').animate({height:'0px'})
      }
    }
  }
let data =[
  {router:"home",name:"首页"},
  {router:"introduce",name:"公司介绍"},
  {router:"service",name:"服务保障"},
  {router:"download",name:"APP下载"},
  {router:"cooperation",name:"合作商家"},
  {router:"join",name:"加入我们"},]
</script>

<style lang="less" >
@import '../../style/mixin';
.mobile_nav{
  width:100%;
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
  .navCollapse{
    overflow: hidden;
    width: 100%;
    height: 0;
    font-size:18px;
    text-align: center ;
    background-color: @gray_color;
    li{
      margin-top:30px;
    }
  }
}


</style>
