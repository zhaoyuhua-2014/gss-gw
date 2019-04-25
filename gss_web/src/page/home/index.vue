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
</style>
