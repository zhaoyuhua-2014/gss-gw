<template>
  <div class="download">
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
              <div class="col-md-3"><img class="code" :src="item.img" alt=""></div>
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
</template>

<script>
import headerNav from "../../components/pc/nav.vue";
import comFooter from "../../components/pc/footer.vue";
import headTemplate from "../../components/pc/headTemplate.vue";
  export default {
    name:'download',
    data() {
      return {
      title:'APP下载 /App download',
      downloadData:downloadData

      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate
    },
  }
let downloadData = [
  {img:'../../static/image/ios01.jpg',text:'扫描iOS端',des:'下载更快捷'},
  {img:'../../static/image/androin01.jpg',text:'扫描Android端',des:'下载更快捷'},
]
</script>

<style lang="less">
  .download{
    .li_download{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
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
        border-bottom: 2px dashed #ffc82f;
      }
      .row{
        .col-md-9{
          text-align: center;
          font-size: 20px;
          padding-top:80px;
          line-height: 40px;
          p:first-child{
            color: #ffc82f;
          }
        }
        .col-md-2{
          padding-top:40px;
        }
      }

    }
  }
</style>
