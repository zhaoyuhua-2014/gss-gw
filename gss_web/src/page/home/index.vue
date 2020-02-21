<template>
<div class="home">
    <div class="pc_home   visible-md visible-lg ">
      <headerNav></headerNav>
      <banner></banner>
      <div class="display_area">
        <div class="area_first">
          <img src="../../image/index-09.png" alt="Fourth slide">
          <div class="describe" v-html="wordDes.pcText">
          </div>
        </div>
        <div  class="area_second">
          <div class='container'>
            <div class="second_top">
                <p v-html="wordDes.comText"></p>
                <p>{{wordDes.comText1}}</p>
                <img :src="wordDes.line" alt="">
            </div>
            <div class="second_bottom row">
                <dl class="col-md-6 clearfix" v-for="(item,index) in data" :key="index">
                  <dt :class="item.isOdd == 0 ? 'pull-right' :'pull-left'"><img :src="item.img" alt=""  width="100px" height="100px"></dt>
                  <dd :class="item.isOdd == 0 ? 'pull-right' :'pull-left'" v-html="item.text"></dd>
                </dl>
            </div>
          </div>
        </div>
        <div class="area_third container">
          <div class='step row'>
            <dl class="col-md-3" v-for="(item,index) in progressData" :key="index">
              <dt> <span :class="progressData.length  == index+1 && 'gray'"></span> <img v-show="item.img"  :src="item.img" alt=""></dt>
              <dd>{{item.siteName}}</dd>
            </dl>
            <!-- <dl class="col-md-3">
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
              <dt> <span class="gray"></span> </dt>
              <dd>更多待开通...</dd>
            </dl> -->
          </div>
        </div>
      </div>
      <comFooter></comFooter>
    </div>
    <div class="mobile_home  hidden-md hidden-lg">
      <MheaderNav></MheaderNav>
      <div class="mobile_content">
        <div><img src="../../image/mobile/bg1.png" class="logo" alt=""></div>
        <img src="../../image/mobile/bg2.png" class="word" alt="">
        <p class="text">{{wordDes.mobileText}}</p>
        <router-link :to="'download'" tag="div">
          <img src="../../image/mobile/bg3.png" class="download" alt="" >
        </router-link>
        <span  @click="animate"><img src="../../image/mobile/bg4.png"  class="down" alt=""></span>
      </div>
      <div id="content_area">
        <div class="area_first">
          <p v-html="wordDes.comText"></p>
          <p>{{wordDes.comText1}}</p>
          <img :src="wordDes.line" alt="">
        </div>
        <dl class="area_second clearfix" v-for="(item,index) in data" :key="index">
          <dt class="pull-left"><img :src="item.img"  alt="" width="70px"></dt>
          <dd class="pull-left" v-html="item.text1"></dd>
        </dl>
         <div class="area_third">
          <div class='step clearfix'>
            <dl class="pull-left" v-for="(item,index) in progressData" :key="index">
              <dt> <span :class="progressData.length  == index+1 && 'gray'"></span> <img v-show="item.img"  :src="item.img" alt=""></dt>
              <dd>{{item.siteName}}</dd>
            </dl>
            <!-- <dl class="pull-left">
              <dt><span></span></dt>
              <dd>杭州站</dd>
            </dl>
            <dl class="pull-left">
              <dt> <span></span> </dt>
              <dd>南京站</dd>
            </dl>
            <dl class="pull-left">
              <dt> <span></span> <img src="../../image/car.png" alt=""></dt>
              <dd>宁波站</dd>
            </dl>
            <dl class="pull-left">
              <dt> <span class="gray"></span> </dt>
              <dd>更多待开通...</dd>
            </dl> -->
          </div>
        </div>
        <Mfooter></Mfooter>
      </div>
    </div>
  </div>
</template>

<script>
// pc
import headerNav from "../../components/pc/nav.vue";
import comFooter from "../../components/pc/footer.vue";
import banner from "../../components/pc/banner.vue";
//mobile
import MheaderNav from "../../components/mobile/nav.vue";
import Mfooter from "../../components/mobile/footer.vue";
import { constants } from 'fs';
  export default {
    name:'home',
    data() {
      return {
        data:companyData,
        wordDes:wordDes,
        progressData:progressData
      }
    },
    components: {
      headerNav,
      comFooter,
      banner,
      MheaderNav,
      Mfooter
    },
    methods:{
      animate(){
        var id="content_area";
        $("html,body").animate({scrollTop: 590}, 500);
      }
    }
  }
// 公司描述数据
let companyData = [
  {img:"../../static/image/index-sb1.png",isOdd:"0", text:"<span>开放的平台</span><br/>果速送是一个开放的平台，不管你是果园老板、<br/>采购供应商，还是水果店老板。<br/>这里都有属于你的位置，加入我们，携手共赢。",text1:"<span>开放的平台</span><br/>果速送是一个开放的平台，不管你是果园老板、采购供应商，还是水果店老板。这里都有属于你的位置，加入我们，携手共赢。"},
  {img:"../../static/image/index-sb2.png",isOdd:"1", text:"<span>专业的团队</span><br/>果速送拥有分工明确的专业团队，层层关卡，<br/>严格把关果速送平台运行的每一个环节，<br>共筑优质水果生态链。", text1:"<span>专业的团队</span><br/>果速送拥有分工明确的专业团队，层层关卡，严格把关果速送平台运行的每一个环节，共筑优质水果生态链。"},
  {img:"../../static/image/index-sb3.png",isOdd:"0", text:"<span>高质的货源</span><br/>果速送始终坚持果品的品质，<br/>严格把控水果供应源头，<br>从原产地，优质水果供应商中精挑细选，保质保价。",text1:"<span>高质的货源</span><br/>果速送始终坚持果品的品质，严格把控水果供应源头，从原产地，优质水果供应商中精挑细选，保质保价。"},
  {img:"../../static/image/index-sb4.png",isOdd:"1", text:"<span>丰富的品类</span><br/>果速送追求果品的丰富性，平台引进各类优质果品，<br/>时令水果、蔬菜干果、国产精品、<br>进口水果一应俱全。",text1:"<span>丰富的品类</span><br/>果速送追求果品的丰富性，平台引进各类优质果品，时令水果、蔬菜干果、国产精品、进口水果一应俱全。"},
  {img:"../../static/image/index-sb5.png",isOdd:"0", text:"<span>精细的运营</span><br/>果速送重视平台的精细运营，果品信息及时更新，<br/>与市场保持同步，推荐好果，<br>热卖促销，这里是离您最近的水果市场。",text1:"<span>精细的运营</span><br/>果速送重视平台的精细运营，果品信息及时更新，与市场保持同步，推荐好果，热卖促销，这里是离您最近的水果市场。"},
  {img:"../../static/image/index-sb6.png",isOdd:"1", text:'<span>优质的服务</span><br/>果速送是一个用心、贴心的服务平台，<br/>保障品质、专业配送、货到付款、退货无忧，<br>售后便捷，全方面为您服务。',text1:'<span>优质的服务</span><br/>果速送是一个用心、贴心的服务平台，保障品质、专业配送、货到付款、退货无忧，售后便捷，全方面为您服务。'},
]
// textdata
let wordDes={
  pcText:"<p>果速送是专业的一站式水果采购配送S2B平台（www.guoss.cn），实现水果生鲜行业线上线下全程信息物联的移动互联网平台。果速送致力于推动中国水果农业产业链的优化和升级，重点整合全国优质的水果生产资源，为全国中小型水果零售终端提供优质安全的水果货源。最终打造成实现果农-零售商-消费者共赢互利的优质水果资源对接和物流配送的服务平台。</p><p>选择果速送，开店很轻松。期待与你一路前行......</p>",
  mobileText :" 果速送是一家一站式水果采购配送的服务平台，目前业务已覆盖整个杭州、南京、宁波等地区,选择果速送，开店很轻松。期待与你一路前行......",
  comText:"什么是一站式水果采购配送<span>服务平台</span>",
  comText1:"what is a one-stop fruit procurement and distribution service platform",
  line:"../../static/image/index-bg.png",
}
// 进度数据
let progressData =[
  {siteName:'杭州',img:""},
  {siteName:'南京',img:""},
  {siteName:'宁波',img:"../../static/image/car.png"},
  {siteName:'更多待开通...',img:""},
]
</script>

<style lang="less">
@import '../../style/mixin';
  // pc端样式
  .pc_home{
    .li_home{
     .pcNav
    }
    .display_area{
      .area_first{
        height:225px;
        padding-top: 40px;
        background-color:@theme_color;
        img{
          display: block;
          margin: 0 auto;
        }
        .describe{
          width:1140px;
          height: 90px;
          margin: 10px auto 0;
          font-size:@font_size;
          line-height: 26px;
          color: @white_color;
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
          color: @theme_color;
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
          font-size: @font_size;
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
          width: 20px;
          height:20px;
          border-radius:50%;
          background-color: @theme_color;
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
      .gray{
        background-color: #666;
      }
    }
  }
  // mobile 端样式
  .mobile_home{
    .li_home{
      color: @btn_color;
    }
    .mobile_content{
      margin-top:56px;
      height:590px;
      text-align: center;
      background:url(../../image/mobile/bg.png) no-repeat  center/cover;
      .logo{
        margin: 50px 0;
        width: 75px;
      }
      .word{
        width: 300px;
      }
      .text{
        margin:60px auto;
        width:320px;
        font-size: 14px;
        color: @white_color;
        line-height: 24px;
      }
      .download{
        width: 168px;
      }
      .down{
        margin-top: 60px;
        width:30px;
        animation:first 3s linear infinite;
        -moz-animation:first 3s linear infinite;
        -webkit-animation: first 3s linear infinite;

      }
      @keyframes first{
        from {transform: translate(0px,0px); opacity: 1;}
        to {transform: translate(0px,30px); opacity: 0;}
      }
      @-moz-keyframes first{
        from {transform: translate(0px,0px); opacity: 1;}
        to {transform: translate(0px,30px); opacity: 0;}
      }
      @-webkit-keyframes first{
        from {transform: translate(0px,0px); opacity: 1;}
        to {transform: translate(0px,30px); opacity: 0;}
      }
    }
    #content_area{
      margin-top: 24px;
      width: 100%;
      text-align: center;
      .area_first{
        font-size: 18px;
        span{
          color: @theme_color;
        }
        p:nth-child(1){
          height: 32px;
          line-height: 32px;
          font-size:18px;
        }
        p{
          margin: 0 auto;
          width:90%;
          font-size: 13px;
          line-height: 20px;
        }
        img{
          width:338px;
        }
      }
      .area_second{
        margin:20px auto 0;
        width:94%;
        dd{
          margin-left: 6px;
          width:74%;
          font-size: 12px;
          text-align: left;
          line-height: 20px;
          span{
            font-weight: 700;
          }
        }
      }
      .area_third{
        width: 94%;
        margin:40px auto 0;
        dl{
          padding:0;
          width: 25%;
          font-size: 12px;
        }
        dt{
          border-bottom:1px solid #000;
          position: relative;
          span{
            position: absolute;
            right:50%;
            top:-6px;
            width: 14px;
            height:14px;
            border-radius:50%;
            background-color: @theme_color;
          }
          img{
            position: absolute;
            right:50%;
            top:-36px;
            width: 40px;
            height:26px;
          }
        }
        dd{
          padding-top:20px;
          text-indent: -18px;
          color: #000;
        }
        .gray{
          background-color: #666;
        }
      }
    }
  }
</style>
