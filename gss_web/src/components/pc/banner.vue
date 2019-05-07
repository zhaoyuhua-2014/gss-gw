<template>
    <div id="banner" class="carousel slide" data-ride="carousel">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#banner" data-slide-to="0" class="active"></li>
        <li data-target="#banner" data-slide-to="1"></li>
        <li data-target="#banner" data-slide-to="2"></li>
        <li data-target="#banner" data-slide-to="3"></li>
      </ol>

      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner" >
        <div class="item active" >
        <img src="../../image/lunbo1.png"  alt="First slide">
        </div>
        <div class="item"  >
        <img src="../../image/lunbo2.png" alt="Second slide">
        </div>
        <div class="item"  >
        <img src="../../image/lunbo3.png" alt="Third slide">
        </div>
        <div class="item" >
        <img src="../../image/lunbo4.png" alt="Fourth slide">
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name:'banner',
    data() {
      return {
      }
    },
    mounted(){
      $('#banner').carousel('cycle')
    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.carousel-inner{
  img{
    width:100%;
    height:100%;
    animation:mymove 5s infinite linear;
    -webkit-animation:mymove 5s infinite linear;
    -moz-animation: mymove 5s infinite linear;

  }
}
.carousel-indicators{
  .active{
    width: 14px;
    height: 14px;
    border:none;
  }
  li{
    width: 10px;
    height: 10px;
    margin-left: 40px;
    border: 2px solid @theme_color;
  }
}
@keyframes mymove
{
    0%{
      transform: scale(1.12);  /*开始为原始大小*/
    }
    25%{
      transform: scale(1.06);
    }
    50%{
      transform: scale(1);
    }
    75%{
      transform: scale(1.06);
    }
    100%{
      transform: scale(1.12);
    }

}
@-webkit-keyframes   mymove
{
    0%{
      transform: scale(1.12);  /*开始为原始大小*/
    }
    25%{
      transform: scale(1.06);
    }
    50%{
      transform: scale(1);
    }
    75%{
      transform: scale(1.06);
    }
    100%{
      transform: scale(1.12);
    }

}
@-moz-keyframes mymove
{
    0%{
      transform: scale(1.12);  /*开始为原始大小*/
    }
    25%{
      transform: scale(1.06);
    }
    50%{
      transform: scale(1);
    }
    75%{
      transform: scale(1.06);
    }
    100%{
      transform: scale(1.12);
    }

}

</style>
