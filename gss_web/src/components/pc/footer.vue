<template>
  <div class="com_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <dl>
            <dt><img src="../../image/bottom_lxwm.png" alt=""><span>联系我们</span></dt>
            <dd class="margin_top_20">微信:guosu99</dd>
            <dd>电话:400-0169-682</dd>
            <dd>邮箱:zshr@zs-info.cn</dd>
          </dl>
        </div>
        <div class="col-md-4">
          <dl>
            <dt><img src="../../image/bottom_gywm.png" alt=""><span>关于我们</span></dt>
            <dd class="margin_top_20">
              <router-link :to="'introduce'" tag="span">
              公司简介
              </router-link>
            </dd>
            <dd>
              <router-link :to="'join'" tag="span">
              诚聘英才
              </router-link>
            </dd>
          </dl>
        </div>
        <div class="col-md-4">
          <dl>
            <dt><img src="../../image/bottom_cjwt.png" alt=""><span>关于帮助</span></dt>
            <dd class="margin_top_20">
              <router-link :to="'download'" tag="span">
              APP下载
              </router-link>
            </dd>
            <dd>
              <router-link :to="'join'" tag="span">
              常见问题
              </router-link>
            </dd>
          </dl>
        </div>
      </div>


    </div>
    <div class="footer_bottom">
      <p><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备13029432号-5 | Copyright©2015-2021</a> 杭州果速科技有限公司 版权所有</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'comFooter',
    data() {
      return {

      }
    },
  }
</script>

<style lang="less" scoped>
@import '../../style/mixin';
.com_footer{
  margin-top:80px;
  background-color: #f9f9f9;
  .container{
    height:230px;
    padding-top:40px;
  }
  .footer_bottom {
    p{
      height: 80px;
      margin: 0 auto;
      font-size: 14px;
      text-align: center;
      line-height: 80px;
      color: #555;
      background-color: @gray_color;
      a{
        color: #333333;
      }
      a:link{
        color: #333333;
      }
    }
  }
  .col-md-4{
    img{
      width: 30px;
      height: 30px;
    }
    dl{
      margin-left:120px;
      .margin_top_20{
        margin-top: 20px;
      }
    }
    dt{
      span{
      display: inline-block;
      margin-left: 10px;
      height: 30px;
      line-height: 26px;
      font-size: 18px;
      text-align: left;
      color:#555;
      }
    }
    dd{
      font-size: @font_size;
      line-height: 25px;
      span:hover{
        color: @theme_color;
         cursor: pointer;
      }
    }
  }
}

</style>
