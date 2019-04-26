<template>
  <div class="download">
    <headerNav></headerNav>
    <headTemplate :title="title"></headTemplate>
    <div class="download_area container">
      <dl class="row">
        <dt class="col-md-5">
          <img src="../../image/app_left.png" alt="">
        </dt>
        <dd class="col-md-7">
            <div class="part1">
              <img src="../../image/app_right1.png" alt=""> <span>果速送APP下载</span>
            </div>
            <div class="row ">
                <div class="col-md-5"><img class="code" src="../../image/ios01.jpg" alt=""></div>
                <div class="col-md-5">
                  <p>扫描iOS端</p>
                  <p>下载更快捷</p>
                </div>
            </div>
            <div class="row"></div>
        </dd>
      </dl>
    </div>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
import headTemplate from "../../components/headTemplate.vue";
  export default {
    name:'download',
    data() {
      return {
      title:'APP下载 /App download'

      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate
    },
  }
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
        color: rgb(51,51,51);
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

    }
  }
</style>
