<template>
  <div class="home">
    <headerNav></headerNav>
    <banner></banner>
    <div class="display_area">
      <div class="area_first">
        <img src="../../image/index-09.png" alt="Fourth slide">
        <div class="describe">
          <p>果速送是专业的一站式水果采购配送S2B平台（www.guoss.cn），实现水果生鲜行业线上线下全程信息物联的移动互联网平台。果速送致力于推动中国水果农业产业链的优化和升级，重点整合全国优质的水果生产资源，为全国中小型水果零售终端提供优质安全的水果货源。最终打造成中国首家实现果农-零售商-消费者共赢互利的优质水果资源对接和物流配送的服务平台。</p>
          <p>选择果速送，开店很轻松。期待与你一路前行......</p>
        </div>
      </div>
      <div  class="area_second">
        <div class='container'>
          <div class="second_top">
              <p>什么是一站式水果采购配送<span>服务平台</span></p>
              <p>what is a one-stop fruit procurement and distribution service platform</p>
              <img src="../../image/index-bg.png" alt="">
          </div>
          <div class="second_bottom row">
              <dl class="col-md-6 clearfix">
                <dt class="pull-right"><img src="../../image/index-sb1.png" alt=""></dt>
                <dd class="pull-right">
                  <span>开放的平台</span><br/>
                  果速送是一个开放的平台，不管你是果园老板、<br/>
                  采购供应商，还是水果店老板。<br/>
                  这里都有属于你的位置，加入我们，携手共赢。
                </dd>
              </dl>
              <dl class="col-md-6 clearfix">
                <dt class="pull-left"><img src="../../image/index-sb2.png" alt=""></dt>
                <dd class="pull-left">
                  <span>专业的团队</span><br/>
                  果速送拥有分工明确的专业团队，层层关卡，<br/>
                  严格把关果速送平台运行的每一个环节，<br>
                  共筑优质水果生态链。
                </dd>
              </dl>
              <dl class="col-md-6 clearfix">
                <dt class="pull-right"><img src="../../image/index-sb3.png" alt=""></dt>
                <dd class="pull-right">
                  <span>高质的货源</span><br/>
                  果速送始终坚持果品的品质，<br/>
                  严格把控水果供应源头，<br>
                  从原产地，优质水果供应商中精挑细选，保质保价。
                </dd>
              </dl>
              <dl class="col-md-6 clearfix">
                <dt class="pull-left"><img src="../../image/index-sb4.png" alt=""></dt>
                <dd class="pull-left">
                  <span>丰富的品类</span><br/>
                  果速送追求果品的丰富性，平台引进各类优质果品，<br/>
                  时令水果、蔬菜干果、国产精品、<br>
                  进口水果一应俱全。
                </dd>
              </dl>
              <dl class="col-md-6 clearfix">
                <dt class="pull-right"><img src="../../image/index-sb5.png" alt=""></dt>
                <dd class="pull-right">
                  <span>精细的运营</span><br/>
                  果速送重视平台的精细运营，果品信息及时更新，<br/>
                  与市场保持同步，推荐好果，<br>
                  热卖促销，这里是离您最近的水果市场。
                </dd>
              </dl>
              <dl class="col-md-6 clearfix">
                <dt class="pull-left"><img src="../../image/index-sb6.png" alt=""></dt>
                <dd class="pull-left">
                  <span>优质的服务</span><br/>
                  果速送是一个用心、贴心的服务平台，<br/>
                  保障品质、专业配送、货到付款、退货无忧，<br>
                  售后便捷，全方面为您服务。
                </dd>
              </dl>
          </div>
        </div>
      </div>
      <div class="area_third container">
        <div class='step row'>
          <dl class="col-md-3">
            <dt><span></span></dt>
            <dd>杭州站</dd>
          </dl>
          <dl class="col-md-3">
            <dt> <span></span> </dt>
            <dd>南京站</dd>
          </dl>
          <dl class="col-md-3">
            <dt> <span></span> <img src="../../image/car.png" alt=""></dt>
            <dd>宁波站</dd>
          </dl>
          <dl class="col-md-3">
            <dt> <span></span> </dt>
            <dd>更多待开通...</dd>
          </dl>
        </div>
      </div>
    </div>
    <comFooter></comFooter>
  </div>
</template>

<script>

import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
import banner from "../../components/banner.vue";
  export default {
    name:'home',
    data() {
      return {

      }
    },
    components: {
      headerNav,
      comFooter,
      banner
    },
  }
</script>

<style lang="less">
  .home{
    .li_home{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
    }
  }
  .display_area{
    .area_first{
      height:225px;
      padding-top: 40px;
      background-color:#f8b62c;
      img{
        display: block;
        margin: 0 auto;
      }
      .describe{
        width:1140px;
        height: 90px;
        margin: 10px auto 0;
        font-size: 16px;
        line-height: 26px;
        color: #fff;
        text-align:center;
      }
    }
  }
  .area_second{
    padding-top:50px;
    padding-bottom: 120px;
    .second_top{
      margin: 0 auto;
      font-size: 28px;
      text-align: center;
      span{
        color: #f8b62c;
      }
      p:nth-child(2){
        font-size: 20px;
        margin:20px 0 30px;
      }
    }
    .second_bottom{
      dl{
        margin-top:60px;
      }
      dd{
        line-height: 25px;
        font-size: 16px;
      }
      .pull-right{
        text-align: right;
        margin-right: 30px;
        span{
          margin-right:10px;
        }
      }
      .pull-left{
        margin-left: 30px;
      }
       span{
          display: inline-block;
          font-weight: bold;
        }
    }
  }
  .area_third{
    height:100px;
    dl{padding:0;}
    dt{
      border-bottom:1px solid #000;
      position: relative;
      span{
        position: absolute;
        right:50%;
        top:-10px;
        // display: block;
        width: 20px;
        height:20px;
        border-radius:50%;
        background-color: #f8b62c;
      }
      img{
        position: absolute;
        right:50%;
        top:-50px;
        width: 80px;
        height:40px;
      }
    }
    dd{
      padding-top:20px;
      text-indent: 114px;
      color: #000;
    }
  }
</style>
