<template>
  <div class="download">
    <div class="pc_download visible-md visible-lg">
      <headerNav></headerNav>
      <headTemplate :title="title"></headTemplate>
      <div class="download_area container">
        <dl class="row code_area">
          <dt class="col-md-5">
            <img src="../../image/app_left.png" alt="">
          </dt>
          <dd class="col-md-7">
              <div class="part1">
                <img src="../../image/app_right1.png" alt=""> <span>果速送APP下载</span>
              </div>
              <div class="row" v-for="(item,index) in downloadData " :key="index">
                <div class="col-md-4"><img class="code" :src="item.img" alt=""></div>
                <div class="col-md-5">
                  <p>{{item.text}}</p>
                  <p>{{item.des}}</p>
                </div>
              </div>
          </dd>
        </dl>
        <dl class="row">
            <dd class="col-md-9">
              <p>全国地区专业水果批发配送平台，平台最新优惠、开店实用技巧应有尽有。</p>
              <p>果速送，实现您的0元开店梦，帮您开一家更赚钱的水果店</p>
            </dd>
            <dd class="col-md-2">
                <img src="../../image/app_bottom.png" alt="">
            </dd>
        </dl>
      </div>
      <comFooter></comFooter>
    </div>
    <div class="mobile_download hidden-md hidden-lg">
      <MheaderNav></MheaderNav>
      <MheadTemplate :title="title"></MheadTemplate>
      <div class="content">
        <div class="part_one">
          <img src="../../image/app_right1.png" alt="" width="64px">
          <span>果速送APP下载</span>
        </div>
        <div class="phone_client" v-for="(item,index) in downloadData " :key="index">
          <div  class="phone_code"><img  :src="item.img" alt="" width="80px"></div>
          <div class="phone_text">
            <p>{{item.text}}</p>
            <p>{{item.des}}</p>
          </div>
        </div>
        <div class="app_img">
          <img src="../../image/app_left.png" width="226px" alt="">
        </div>
        <div class="part_two">
          <img src="../../image/mobile/app3.png" alt="" width="98px">
          <p>全国地区专业水果批发配送平台，平台最新优惠、开店实用技巧应有尽有。</p>
          <p>果速送，实现您的0元开店梦，帮您开一家更赚钱的水果店</p>
        </div>
      </div>
      <Mfooter></Mfooter>
    </div>
  </div>
</template>

<script>
// pc
import headerNav from "../../components/pc/nav.vue";
import comFooter from "../../components/pc/footer.vue";
import headTemplate from "../../components/pc/headTemplate.vue";
// mobile
import MheaderNav from "../../components/mobile/nav.vue";
import Mfooter from "../../components/mobile/footer.vue";
import MheadTemplate from "../../components/mobile/headTemplate.vue";
  export default {
    name:'download',
    data() {
      return {
      title:{0:'APP下载',1:'/App download'},
      downloadData:downloadData

      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate,
      MheaderNav,
      Mfooter,
      MheadTemplate
    },
  }
let downloadData = [
  {img:'../../static/image/ios01.jpg',text:'扫描iOS端',des:'下载更快捷'},
  {img:'../../static/image/androin01.jpg',text:'扫描Android端',des:'下载更快捷'},
]
</script>

<style lang="less">
@import '../../style/mixin';

// pc 样式
  .pc_download{
    .li_download{
      .pcNav;
    }
    .download_area{
      margin-top:80px;
      .part1{
        font-size: 32px;
        color:#555;
        margin-top: 30px;
        margin-left: 24px;
        span{
          margin-left: 20px;
        }
      }
      .code{
        display:block;
        width:160px;
        height:160px;
      }
      .col-md-7{
        .row{
          margin-top: 20px;
          .col-md-5{
            padding-top:48px;
            p{
              line-height: 30px;
            }
          }
        }
      }
      .code_area{
        padding-bottom:60px;
        border-bottom: 2px dashed @theme_color;
      }
      .row{
        .col-md-9{
          text-align: center;
          font-size: 20px;
          padding-top:80px;
          line-height: 40px;
          p:first-child{
            color: @theme_color;
          }
        }
        .col-md-2{
          padding-top:40px;
        }
      }
    }
  }
  // mobile 样式
  .mobile_download{
    .li_download{
      color: @btn_color;
    }
    .content{
      .part_one,
      .phone_client{
        margin:32px auto 0;
        width:62%;
        text-align: center;
      }
      .phone_client{
        .phone_code,
        .phone_text{
          display: inline-block;
          vertical-align: middle;
        }
        p{
          width:108px;
          line-height: 32px;
          text-align: left;
        }
      }
      .app_img{
        padding:40px 0;
        text-align: center;
        border-bottom: 1px  dashed @theme_color;
      }
      .part_two{
        padding: 30px 10% 0;
        font-size: 14px;
        text-align: center;
        p{
          margin-top: 24px;
        }
        p:nth-child(2){
          color:@theme_color;
        }
      }
    }
  }
</style>
